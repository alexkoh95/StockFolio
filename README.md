
# StockFolio

### Project Name: StockFolio

### By Alex Koh


#### StockFolio 

A finance application used to simulate personal investments, built with React, Flask, and PostgreSQL. 

Libraries used: Moment.js, Tailwind CSS

## Project Status
Version 1.0 

This app was created by Alex Koh as part of the requirements in his General Assembly Software Engineering Immersive Course. 

🔨 Upcoming Functionalities:
- UF 1.01 **Displaying data using D3**: Creating basic graphs using D3: (1) pie chart for stock, grouped by industy/sector, (2) line graph displaying portfolio value over time (1 week, 1 month, 3 months, 6 months, 1 year, all-time) 
- UF 1.02 **Calculating Portfolio Data Over time**: Develop a function to automatically log user's portfolio value everyday. This will be used for UF 1.01 graph (2) - line graph displaying portfolio value over time
- UF 1.03 **Fix authentication**: Authentication is partially working - Users will be unable to retrieve data if JWT token does not match and JWT token is not generated if incorrect username-password combination is entered. However, user can still enter "Stock Search" page even with incorrect username-password combination. 

🐞 Bugs:
- Bug 1.01 **Displaying Price Today**: Real-time stock quotation is not matched to the right stock (match is based on Symbol). For example, Facebook Inc will have Sea Limited's real-time stock quotation, while Walmart will have Facebook's real-time stock quotation See lines 11-22 in /StockFolio/frontend/src/components/Dashboard/ListOfStocks.js
- Bug 1.02 **Displaying Stock Value**: Due to the bug in 1.01, stock value is not accurate (as profits will not be calculated correctly due to incorrect mapping of real-time stock quotation).

Major Updates: 
- Update to Version 2.01: 
  -  To restructure the project. For example, pull all relevant user data during log-in and use useContext to share the data across the entire project. 
  -  To apply the concepts in Robert C. Martin's Clean Code (for example, making sure each function only has one purpose, using good naming conventions)



## App Functions:

The MVP (minimal viable product) to meet the requirements of GA has been met. Users can do the following:

 - **Account Creation**: Users of the app can create an account and store their data. Data presented in their dashboard are specific to the stocks they have purchased
 - **Dashboard**: Users can view the total cash in their account, value of stocks, and stocks they have purchased (including Stock Name, Symbol, Sector, Industry, Date Bought, Total Shares, Price Bought, Value At Time Of Purchase, Price Today)
 - **Stock Search**: Users can search for stocks (using the stock's symbol, e.g. FB, KO, SBUX)
 - **Logout**: Users can log out of their accounts. 


## Project Screen Shot(s)

### Login Screen / Sign Up Screen

![Login Screen](https://imgur.com/L2rMccu.jpg)

### Dashboard

![Dashboard](https://imgur.com/OqJy7ae.jpg)

### Stock Search
![Log Page](https://imgur.com/cvgj3gx.jpg)



## Reflection


This was a week long built during the fourth module at General Assembly (GA) Singapore (SEI-31). Project goals include:
 - (1) Building a frontend with React
 - (2) Connecting frontend and backend with APIs
 - (3) Storing data in a database 
 - (4) Learn one new concept/technology 

I prioritised two learnings for this project: (1) How to use Flask, (2) How to 
