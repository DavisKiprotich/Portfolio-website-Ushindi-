<<<<<<< HEAD
# Portfolio-website-Ushindi
This will be the portfolio website for my first client 
=======
Day 1:
# Getting Started with Create React App
1. I created a new repository file to my  react app in one of my folders(Ushindi portfolio). I decided to move my react file to the parent folder which is the source of my repository to prevent much headache having realised that my local branch is a commit behind my remote branch. Decided to fix this with: git pull --rebase origin main, which fetches the changes made to the remote branch and merge them to the local repository.Once the merge occured, I pushed my code to the github repository.
2. Created global css variables to be used throughout the project in my index.css and app.css files.
Day 2:
# Installation of react-router-dom 
I installed these dependency to aid in creating links to various routes of different paths displayed in different pages in my portfolio wwbsite.Having imported the BrowserRouter element for the app.js(Replaced React.StrictMode) , i used routes in my home.js page.
# Creation of components and routes.
Created routes for my files(Home, about, project and contact) and components folder having navbar which can then be displayed on my home.js file; Imported navbar.js to home.js
Day 3:
# Navbar links creation and styling of its components.
I used router-dom link element to add the links to unordered list of navbar components; Home, about, projects and contact.
My CSS styling was done in index.css which is mainly global styles for the body etcetera.Moreover, i did style my logo a bit and navigation menu for small devices. I positioned my logo with absolute position at the top left hand side of the webpage with navbar components forming an in-line block with it.
Day 4,5:
#Styling hero component
i created my hero file containing background image and its styling.I also redesigned my logo and styled in absolute position though it could not align with nav links,i will find a way of styling my nav links.
Day 6:
#Styling the background image 
Imported the image from assets folder before placing it in a div with a className of back-img in mask div component.However, i tried to style it so that it can cover the whole page but failed,this is because i failed to use object-fit property to center the image.
Day 7:
#Created Content section
Created content div component alongside the backgound image but should be positioned at the center of the image(center of the web page) using absolute position. 
Day 8: 
#Installed react typical
React typical is animated typing library of approximately 400 bytes used for displaying multiple skills that someone does.I used this feature to display what the client does ,it is one of the libraries that i love.
#Styling button elements on home page for smaller devices,
Reducing the padding and font sizes of the button (btn) aligned the buttons without overlapping.
Day 9:
#Created a footer section
I had to split the footer section into 2 parts ,one on the right and left side.The left side is composed of the contact details of my client.Moreover, a link section is added that directs me to home page above.
The right side is composed of the brief description of what the company is all about and social media links.
Day 10:
#Styling footer component.
Used display flex to align the react icons along with the text. Used grid format to set the social media icons in line with one another .
Day 11:
# Creating Project file
Inherited the navbar and footer components from the home page.I extended the hero as a class component using child props so that they can be displayed different across different files while one can change the components as he or she pleases. 









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 844af71 (first commit on source control)
