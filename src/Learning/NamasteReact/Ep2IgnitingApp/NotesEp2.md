# Pushing code in Github

1. Create a repository in github
2. We already have repo in our local.
3. To make above git branch. git init
4. git branch -M main - This makes the repo as main file
5. git add . -> git commit -m "test message"
6. git remote add origin ...(can be found on git hub)
7. git add origin main

# Difference between Git and GitHub?
Git - used for version control. Maintained by Linux. Open source.
Github - used for hoisting. Maintained by Microsoft. follow pricing model.

# Problems in code in Ep1Inception

This is not production ready
1. Remove unnecessary comments.
2. Bundling the code.
3. Minifying the files
4. Optimizing the image - Image optimization
5. Code Splitting

So react itself is not making our app go fast. There are many libraries working behind.
We use npm for installing those libraries - standard repository that manages the packages.

# To make the app take use of npm packages

1. npm init
2. It asks for valus and provides us with package.json
3. This file contains packages. These packages are also called dependencies as they are used to build our project.
4. npm manages the version of package in package.json
5. So package.json is configuration for project.
6. Install Bundler - Our whole code need to be optime, minified, - webpack, parcel, vite.
7. Bundler will ignite our app.
8. 2 types of packages
- devDependency - when we require that we need that dependency. npm i -D (add -D for dev dependency).
- normal dependency - when the dependency in both dev and production.
9. Caret and Tilde - If present package is 2.8.3
- ^ - updates when there is minor changes. updates at 2.8.4
- ~ - updates when there is a major change. updates at 3.0.0
10. When I did npm i -D parcel, it removed parcel from normal dependency and moved to devDependency.
11. package.json - configuration of npm. keeps track of all package installed.
12. package-lock - It locks the package file and keeps track of exact version that is installed.
13. there is a integrity in package-lock parcel that contains the hash that needs to match with prod environment.
14. This file contains the exact version of all packages. same dependencies are installed consistently across different environments.
15. Many dependency can be seen in node module although we have only used parcel, that is because parcel need other dependencies. This is known as transitive dependencies.
16. There can be many package json in our project. This can be found in dependencies, each dependency need more . This is transitive dependencies.
17. We don't need t put node modules in git. If we have package and package.lock we can re-generate all node modules.
18. Be curious, only with curiousity we can have learning attitude.
19. We use command, npx parcel index.html
20. Earlier when we opened our app directly opening index file the url was that of filesystem. Now, a build is created by parcel and we can host this.
21. Just like we have npm, we have npx. npx is used for executing a parcel, the bundler. This cretes a development build for our app, this can be hoisted.
22. We used CDN, to use react in our project, now we can make use of npm to install react.
23. Using CDN is not a good way, as it is a costly operation, it is making a network call. Also tomorrow version changes, so to manage we want it to install in our node modules.
24. After importing react it gave us an error, "browser scripts cannot have imports or exports" because Classic scripts without type="module" cannot have imports or exports. We added this to src.
25. Uses of parcel - create Dev build  
- create local server  
- It is also refreshing the page. HMR 
- Hot Module Replacement  - It makes use of File Watching Algorithm that is written in C++ that is responsible for HMR
- faster builds because of Caching.   - It is doing using the parcel-cache and It makes use of HMR for faster builds.
- Image Optimization
- Minfy for production builds. Optimize
- Bundling.
- Compress
- Consistent Hashing.
- Code Splitting
- Differential Bundling - Support different browser, like chrome, edge, older browser.
- Error Handling
- HTTPs
- Tree Shaking Experience - It  removes unused code.
- Web worker
- Service worker
- Different dev and prod build - for prod build *npx parcel build index.html*
26. Parcel cannot do everything on its own, it makes use of the underlying packages.
27. Read docs for understanding how Parcel is helping to improve our experience.
28. "main": "App.js" In the package json - Don't need this when using parcel for prod build. It takes more time to create the build as parcel is making the build fast, optimize.
29. Any code that is auto generated is not required on the git. So, we dont put node modules, dist on git.
30. from local we pushed package json to git, server fetches the package json and run npm i on server, server has its own node modules and dist.
31. We can make use of browserslist - configure this on package json.



