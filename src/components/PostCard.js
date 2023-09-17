import Card from '@mui/material/Card';
import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const PostCard = (props) => {

    const [open, setOpen] = useState(false);
    const [commentList, setCommentList] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(()=>{
      try{
        if(open){
          fetch("https://jsonplaceholder.typicode.com/posts/"+ props.data.id + "/comments")
          .then(response => response.json())
          .then(data => {setCommentList(data); setLoading(false);})
          .catch(err => console.error(error.message)) 
        }
        else{
          setLoading(true)
        }
      }
      catch(error){
        console.error(error.message)
      }
    },[open])

    return(
        <>
        <button onClick={handleClickOpen} className="Btn">
            <div className='Cards'>
                <Card variant="outlined" style={{backgroundColor: "#728EF1"}} className="PostCard" >
                    <h2 className='title'>{props.data.title}</h2>
                    <h4>{props.data.body}</h4>
                </Card>
            </div>
        </button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle>{props.data.title}</DialogTitle>
            <IconButton aria-label="close" onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}> <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {(loading)? <Typography gutterBottom>
                Comments Loading ... 
            </Typography> : ((commentList.length !== 0)? 
          commentList.map((item)=> 
            <div key={item.id} className="commentContainer">
              <div> <u>Name:</u> {item.name}</div>
              <div> <u>Email:</u> {item.email}</div>
              <div> <u>Comment:</u> {item.body}</div>
            </div>
            ) : 
            <Typography gutterBottom>
                Comments Not found
            </Typography> ) }
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{props.postDel(props.data.id)}}>Delete</Button>
        </DialogActions>
        </Dialog>
      </>  
    )
}

export default PostCard;