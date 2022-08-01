# NASA-Launch-Database

SUMMARY:
Full stack NASA space launch application that not only stores historical SpaceX launches but allows user to submit simulated launches using inputed data. 

+ Allows user to submit or abort a simulated launch
+ See the date of when an ongoing launch was scheduled
+ View historical SpaceX launches
+ Stores aborted simulated lauches in the History section
+ Takes in real-life NASA data to determine habitable planets 


Prerequisite
+ Node v16.16.0
+ NPM 8.11.0
+ Axios 0.27.2
+ Mongoose 6.4.6








Create README.md
Setting Up the Application

1. Go to the green code button and press HTTPS, clone the repository
2. Make sure Node.js is installed
3. Make a free MongoDB Atlas online database or just start a local MongoDB Database on your computer
4. Make a server/.env file using a MONGO_URL property set to MongoDB connection string
5. Type in your terminal: npm install




Running the Project

1. Type in the Terminal: npm run deploy
2. Go to localhost:8000 on your search engine and schedule a launch




Running the Tests

1. To run all automated tests type in: npm test
2. To run all front-end/client tests: npm test --prefix client
3. To run all back-end/server tests: npm test --prefix server
