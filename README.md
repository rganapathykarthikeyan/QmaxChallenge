 # Front End Assignment : React.JS, Material-UI
 
 # Use case : To design a Simple Post Management Page.
 
On the first page load, need to call https://jsonplaceholder.typicode.com/postsand take the posts in memory
Then display each post in a MUI Card.
On Clicking a Post, a Dialog box should popup with the Comments
(use -> https://jsonplaceholder.typicode.com/posts/post_id/comments).
Each post must have a DeleteButton that delete the post.
There should be a Search boxon the top of the navbar and it should fuzzy search the posts and display the results below.
This whole state should be saved Internally on the Browser.
For example :
>> If we type ‘hello’ in search box, the below cards should only have items which have ‘hello’ in it.
>> On Clicking the BROWSER’s REFRESH button or F5 the Page Should Reload and comeback to the same state as of having hello in the search box and with previous ‘hello‘ results.
 
You can Add a Button Refresh State
>> By clicking on it should clear the local state, get data from the API and display the contents.
Note:  After the First API Call, no other API calls should be .
Everything should be done Internally like filtering for search etc., until we click the Refresh State Button
 
Extra :The above is expected to be done minimal from your end, you can also try the below.
 
Promise Queue - After clicking the Delete Button, it should delete the post, You can Queue up DELETE API request on the Local. i.e., The API request should not be sent out. It Should be Queued up.

Like on Clicking Delete on 3 cards the Delete queue will have 3 items. You should show an indicator on the screen to represent how many API calls are queued up ( just a number )

E.g., DELETE QUEUE 3 - This Delete Queue should also be persisted across Refresh - Upon Clicking the Refresh State button The Delete Queue should be Fired and Queue should be Emptied as the Request are Actualized .


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
