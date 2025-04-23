# namaste-react
learning react
This is mock immitation of food ordering website swiggy.com which is widely used in India.
It consumes live apis of swiggy to get resturant list which are located near hardcoded coordinates.
further it immitates features like top rated restaurants and adding dishes to your cart.

## how to run
First you need to install the dependencies. (Assuming you already have npm on your device.) To install dependencies run 
`npm install`

After install the dependencies run the server.
`npm start`
It will start development server on localhost:1234.

Now try accessing the development server on given address. You might face issues because you browser might be blocking your request becasue of CORS.
You can fix CORS issue by install CORS extension in you browser,



# redux toolkit
- install @reduxjs/toolkit and react-redux
- build our store
- connect our store to our app
- Slice(card slice)
- dispatch action
- selector


# types of testing    
- unit testing ✅
- Integration testing ✅
- end to end testing ❌


# setting up testing in our react app
- Install react testing library
- Install jest
- Install babel dependencies
- Configure babel in babel.config.js
- Configure parcel config file to disable default babel transpilation
- Configure jest: npx jest --init
- Install jsdom library
- Install @babel/preset-react to make jsx work in test cases
- Include @babel/preset-react inside the babel.config
- Install @testing-library/jest-dom
