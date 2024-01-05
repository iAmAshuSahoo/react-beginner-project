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


