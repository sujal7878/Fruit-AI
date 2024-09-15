# Fruit-AI
Project Description
Fruit-AI is a health management product designed to help users access various services related to fruits, including:

A chatbot that provides information about different fruits.
A translator that can translate text into regional languages.
A FAQ section where users can ask questions about fruits.
An about page with details about the application.
The project is built using HTML, CSS, JavaScript, EJS, and data is stored using local storage. It also incorporates a basic CRUD API for managing fruit-related FAQs.

Installation
Node Packages to Install
To set up the project, ensure you have the following Node packages installed:

bash
Copy code
npm install express node-fetch nodemon mongoose dotenv ejs
OpenAI API Key Setup
To enable the chatbot's functionality, you will need an OpenAI API key.

Visit the OpenAI website and create an account or log in.
Navigate to the API section to generate your API key.
Create a .env file in your project directory and add the following line:
bash
Copy code
OPENAI_API_KEY=your-openai-api-key-here
Replace your-openai-api-key-here with the actual API key.

Running the Project
To run the project locally, open your terminal and run the following command:

bash
Copy code
nodemon server.js
This will start the Express server, and you can access the project in your browser.
