Create .env file with the below code in it and then run your project
NODE_ENV=test

# tdd-mocha-chai
a simple tdd project using mocha chai

npm install --save-dev mocha chai

npm install --save-dev @babel/core @babel/preset-env @babel/register

run
npm run test (if script added to package.json)
or
npx mocha 'src/**/*.test.js' --recursive --require @babel/register

npm install lodash

isEqual from lodash lets you deep check if two objects are the same
it(Individual tests)
(mocha) testing framework - from where you run the command in commandline
(mocha) test runner - which runs the test groups which comprise of (it blocks - individual tests)
(chai) - assertion library

npm install --save-dev regenerator-runtime
//to allow async await syntax in Mocha as async await is not allowed work out of box in Mocha


npm install --save-dev chai-exclude
this is a chai package which allows us to exclude certain properties on the actual values returned from mongodb - Mongodb add a unique _id property for each record which is inserted into the database - we want to exclude this when we are comparing the result from the database with the expected result we define in our test file

//Install mongodb
https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514
after following everything from the link - Search for environment variables in windows search and go to path and add a new path `C:\Program Files\MongoDB\Server\4.0\bin`
Now restart terminal

afterEach hook by mocha allows us to run a block of code mocha after every test