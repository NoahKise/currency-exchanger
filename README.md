# Currency Exchanger

#### By Noah Kise

#### A web page that allows a user to convert between different currencies.

## Technologies Used

* HTML
* CSS
* JavaScript
* GitHub
* Node
* NPM
* Webpack
* API

## Description

This is a web application that allows a user to input an amount and choose any 2 currencies to convert between.  It calls on ExchangeRate API to make conversions.  Documentation on ExchangeRate can be found at https://www.exchangerate-api.com/docs/overview.

## Setup/Installation Requirements

* To run this program locally on your own computer, first navigate to the repository (https://github.com/NoahKise/currency-exchanger).  Clone the project by clicking the green "code" button and then copying the provided https link. In your terminal, enter the command "git clone" followed by the copied link. Navigate to the root folder of this project (currency-exchanger) in your terminal and enter the command "code ." to open the project in VS Code. In the root folder of this project, in your terminal enter the command "npm install".

* Because this application requires an API key, you will have to create a free account at https://www.exchangerate-api.com/.  Follow the link, enter your email address, and click "Get Free Key!" to set up an account.  Once you have your key, in VS Code, create a file called .env in the root directory of the project.  Set the contents to the following: API_KEY=your api key here. Once you've done that, in the root folder of this project, in your terminal enter the command "npm run start".

## Known Bugs

* One of the currencies you can choose to convert is Wizard Galleons.  Because this is a fictional currency, ExchangeRate API does not have information for it. This currency is only included to demonstrate that the application includes error handling and prints error messages to the DOM. However, it could be a frustrating bug if any wizards attempt to use this app.

## License

Code licensed under [GPL](LICENSE.txt)

Any suggestions for ways I can improve this app? Reach out to me at noah@kisefamily.com

Copyright (c) November 17 2023 Noah Kise