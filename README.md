This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Overview

This is a simple app coded in React.js using `npm create-react-app`. To play, simply click the button. But don't get too trigger-happy! The goal of the game is to get as many clicks as possible before Thanos snaps you. Until then, you'll have to deal with a random order of the worst THANOS CAR-style memes I've had the displeasure of seeing.

# Development

I used `npm create-react-app` to start with a standard set of packages and libraries included. In order to render the button a little more prettily, I used React Bootstrap (still working on the CSS). The main challenge of this project was the conditional rendering: I knew I didn't want to have a static view of the meme and how many clicks the user had left. I wanted to make it a little more complicated. I used a state variable to keep track of whether the user loaded the app for the very first time, and I used another to keep track of whether the user got snapped or not. Along with a simple counter-style variable, I had all the information I needed to conditionally render exactly what I wanted on the button.

# Deployment

I deployed this app using AWS Elastic Beanstalk. You can access the app [here](http://thanos-button.us-west-1.elasticbeanstalk.com/).