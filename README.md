1. index.js is the entry file

2. We can export different modules from different files and can import them too.

3. Adding package.json file: includes the details of all the packages that is used in projects and their versions. 

To add package.json file, run 'npm init -y'

4. Add 'nodemon' using 'npm i nodemon', helps in re run of server

5. As soon as we add any package, package-lock.json & node_modules file gets created. We can delete this node_modules before uploading the project to Github, and can get it back anytime by running 'npm install'

OR

We can add a file called .gitignore and inside that we can specify the files which we want not to get uploaded in git.
e.g. Write the file name with a '/' ahead to file name:  '/node_modules'

