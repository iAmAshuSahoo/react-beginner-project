# scripts in package json.
1. We run the code with command *npx parcel .\index.html*.
2. To make it easy we can define the scripts to run. *"start": "parcel index.html",* 
3. We can use npm start or npm run start to run the project. This is same as calling *npx parcel .\index.html*
4. npm build will not work. we have to write npm run build. This shorthand only works for start.

# Laying foundation
1. React Element - They are equivalent to DOM element. This is a Object. This gets rendered to HTML element.
const heading = React.createElement("h1", {id: "head"}, "Namaste React")
2. To render the react element on the screen to convert into DOM element we have.
const root = ReactDOM.createRoot(documet.getElementById("root));
root.render(heading)
3. This was clumsy, to resolve this React devs introduced JSX.
4. JSX is HTML like syntax.
const jsxHeading = <h1 id: "head"> "Namaste React"</h1>
5. JSX is ES6. The code is transpiled(converted to code that browser can understand) before it reaches JS engine.
6. Parcel is responsible for transpiling. It takes help of Babel for transpiling.
7. Babel does transpiling that is understandable for previous browser.
8. Babel starts converting tokens into abstract tree. Etc
9. If we are writing our JSX code in multiple line we need to use parenthesis
(<h1 id: "head"> 
"Namaste React"
</h1>)