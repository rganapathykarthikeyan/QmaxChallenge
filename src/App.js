import "./styles.css";
import Card from '@mui/material/Card';
import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import { TextField } from "@mui/material";
import Fuse from 'fuse.js';
import Button from '@mui/material/Button';

export default function App() {
  const [postList, setPostList] = useState([]);
  const [filteredPostList, setFilteredPostList] = useState([]);
  const [query, setQuery] = useState("");
  const [queue, setQueue] = useState([]);
  let lastPostList = JSON.parse(localStorage.getItem("PostList"));
  const curQuery = localStorage.getItem("currentSearch");
  let curQueue = JSON.parse(localStorage.getItem("Delqueue"));
  const [refresh, setRefresh] = useState(false);


  const deletePost = (Postid) => {
    const url = "https://jsonplaceholder.typicode.com/posts/"+ Postid + "/comments";
    let newqueue;
    if(!curQueue){
      newqueue = [url];
      setQueue(newqueue)
      localStorage.setItem("Delqueue", JSON.stringify(newqueue));
    }
    else if(!curQueue.includes(url)){
      newqueue = [...curQueue, url];
      setQueue(newqueue);
      localStorage.setItem("Delqueue", JSON.stringify(newqueue));
    }
    //this wont add already deleted request sent post to the queue
    //instead of the queue we can send delete api request based on the url
  }

  const onSearch = (curquery, postRes) => {
    if(!curquery || curquery === ""){
      setFilteredPostList(postRes);
      setQuery("")
      localStorage.setItem("currentSearch", "");
    }
    else{
      localStorage.setItem("currentSearch", curquery);
      setQuery(curquery)
      const fuse = new Fuse(postRes, {
        keys: ["title", "body"]
      });
      const result = fuse.search(curquery);
      const filteredList = [];
      if(Array.isArray(result)&&result.length){
        result.forEach((item) => {filteredList.push(item.item);});
        setFilteredPostList(filteredList)
      }
      else{
        setFilteredPostList([])
      }
    }
  }

  const onRefresh = () => {
    localStorage.removeItem("PostList");
    localStorage.removeItem("currentSearch");
    localStorage.removeItem("Delqueue");
    setRefresh(pre => !pre)
  }

  const onFetch = () => {
    try{
      if(!lastPostList){
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => response.json())
          .then(data => {
            setPostList(data); 
            lastPostList = data;
            if(!curQuery){
              onSearch("", lastPostList);
            }
            else{
              onSearch(curQuery,lastPostList);
            }
            localStorage.setItem("PostList", JSON.stringify(data));
          })
          .catch(err => console.error(error.message))
        }
        else{
          setPostList(lastPostList);
          if(!curQuery){
            onSearch("", lastPostList);
          }
          else{
            setQuery(curQuery);
            onSearch(curQuery, lastPostList);
          }
        }
    }
    catch(error){
      console.error(error.message)
    }
  }

  useEffect(()=> {
    onFetch();
    if(curQueue){
      setQueue(curQueue);
    }
  },[])

  useEffect(()=>{
    onFetch();
    setQueue([]);
  },[refresh])

  return (
    <div className="App">
      <h1 className="Maintitle">Posts</h1>
      <div className="searchBar">
        <span className="bordered">Delete QUEUE: {!curQueue? 0: curQueue.length}</span>
        <TextField id="standard-basic" label="Fuzzy Search" variant="standard" value={query} onChange={(e)=> onSearch(e.target.value, postList)}/>
        <Button onClick={onRefresh} variant="outlined">Refresh State</Button>
      </div>
      {(Array.isArray(filteredPostList)&&filteredPostList.length!==0)? (filteredPostList.map((Postitem)=> <PostCard data={Postitem} hasdata={true} key={Postitem.id} postDel={deletePost} />)) : <Card className="PostCard">No Data Found</Card>}
    </div>
  );
}
