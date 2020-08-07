### React Sudoku Game

[Heroku Deploy](https://sudoku-j.herokuapp.com/)

## Installation

In order to setup and run the app locally you have to:

1. Clone or download this repository
2. Run `npm / yarn install`
3. Run `npm / yarn client:start`
4. Open a browser and navigate to `http://localhost:3000`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Overview

This Sudoku project was an additional task so it's mostly improvisation work. I was told to use Sudoku-umd library for it to generate 81 tiles. The library also gives the difficulty level and so the main task was simply to create working game board on the client side.

## Technical Details

1. React
2. Sudoku-umd library

## Personal Growth

It was interesting to do this game. Even though I didn't really create the logics of it, that was challenging thing to do. Unfortunately I wasn't able to create it 100% as I wanted it too. The problem that I have is when you try to type two digits with your keyboard. Game creates new Tiles which ultimately bugs the game. Hopefully, when I gain more experience and proficiency in JavaScript I will be able to tackle this issue.
