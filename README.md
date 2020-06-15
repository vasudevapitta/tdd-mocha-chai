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