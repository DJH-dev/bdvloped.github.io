---
title: "turning test first project from JavaScript 30 into a react app."
date: "2020-03-26"
---

road blocks 

inspector kept getting a error
`! SyntaxError: expected expression, got '<'`

the error was coming from my JS file
in my component when attempting to return <div></div>

found that this was [JSX](https://reactjs.org/docs/introducing-jsx.html) and the reason I was getting this error was becauce I didn't have anything in place to convert the [JSX](https://reactjs.org/docs/introducing-jsx.html) to plain JavaScript code suitable for a browser.

Solution go to [react documentation](https://reactjs.org/docs/add-react-to-a-website.html)
found there was two ways to handle this I chose to add a JSX preprocessor to the project following the steps I was able to load [Babel](https://babeljs.io/docs/en/) in to the project folder using [npm](https://docs.npmjs.com/) and using [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) on the command line to run it.

After doing this was still getting the same error `!SyntaxError: expected expression, got '<'`
going back to the documentation I realized that once the npx command `npx babel --watch src --out-dir . --presets react-app/prod` is ran babel will watch the .js file that you put in the src directory and from there create a preprocessed version of the .js file with plain JavaScript code suitable for the browser.

I created a src directory and copied the .js file to it, however my mistake was I copied and not moved the file so it appeared that when babel read the .js from the src directory it did not create a preprocced version because a file with the  name already existed. When I deleted my orignal .js file it allowed babel to read the src .js file and then create a preprocessed .js file and the magic the browser rendered my compenent as expected. 