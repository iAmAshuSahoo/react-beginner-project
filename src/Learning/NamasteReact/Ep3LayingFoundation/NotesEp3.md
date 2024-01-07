# scripts in package json.
1. We run the code with command *npx parcel .\index.html*.
2. To make it easy we can define the scripts to run. *"start": "parcel index.html",* 
3. We can use npm start or npm run start to run the project. This is same as calling *npx parcel .\index.html*
4. npm build will not work. we have to write npm run build. This shorthand only works for start.

# Laying foundation
1. React Element - They are equivalent to DOM element. This is a Object. This gets rendered to HTML element.
const heading = React.createElement("h1", {id: "head"}, "Namaste React")
2. To render the react element on the screen to convert into DOM element we have.
const root = ReactDOM.createRoot(document.getElementById("root));
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

# React Component
1. React Component --- Class Based and Functional Component
2. React Functional Component - function that returns JSX
3. When babel see <> angular bracket it understands this is a react component.
4. Component composition - To put a component inside component. Composing component with existing comp.
5. We can use normal function but arrow function is newer way and insdustry recommended way.
6. Adding **curly braces** helps execute javascript within them.
7. We can make use of element inside component or component inside element and render element or component.
8. As the value is getting executed and render in browser, during api calls attacker can attack and steal data, this is cross site scripting.
9. When data is sent in JSX, it sanitizes the data then render. This prevent cross site scripting attacks. How??
10. At the end of the day,
React is Javascript, JSX is React Element, React Elements are objects, Components are functions.
11. 