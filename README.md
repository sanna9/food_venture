<!-- to setup redux store -->
npm i react-redux
npm i @reduxjs/toolkit
we used to use middleware and thunk in reux, now use RTK query

<!-- Type of testing developer can write --> developers are responsible for 1 and 2 type of testing
1. Unit testing : write react component in isolation
2. Intergration Testing : testing combination of components, eg search box, will bring different cards on search. Will write test cases to tets the search flow.will test event flow, input fields 
3. End to End testing: 2e2 Testing: As the use lands on website to till the user leave the website, cypress, selinium tools are required.

react testing library uses the JEST testing library


# Setting up testing
- install Reacttesting library
- installed jest
- installed babel dependecies :  npm install --save-dev babel-jest @babel/core @babel/preset 
- Configure Babel
- configure parcelrc config file to disable default bable transpilation
- Jest configration: npx jest --init , to initialise the jest
- Install JSdom library for react
- Install npm i -D @babel/preset-react to make jsx work in test library
- Include above inside the babel.config, so the jest can read the jsx and convert code into html so compiler can read
- Install @testing-library/jest-dom

# Babel is transpiler
# parcel inbuild use babel, and we are using babel again for jest lib, now we need to amend parcel babel behaviour

JSdom is env to run the test cases
