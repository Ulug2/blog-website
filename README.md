# blog-website
This is a simple blog application built with Node.js, Express, MongoDB, and EJS. The application allows users to view and manage blog posts.

## Features

- View a list of blog posts
- View details of a single blog post
- Create, update, and delete blog posts
- Middleware for logging HTTP requests
- Middleware for handling 404 errors

## Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account or a local MongoDB server

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/node-blog-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd node-blog-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add your MongoDB connection URI:
    ```env
    MONGODB_URI=your_mongodb_connection_uri
    ```

## Running the Application

1. Start the application:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `app.js`: The main application file.
- `routes/blogRoutes.js`: Contains the routes for managing blog posts.
- `views/`: Contains the EJS templates for rendering the views.
- `public/`: Contains static files such as CSS and JavaScript.

## Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment
- morgan: HTTP request logger middleware for Node.js
- ejs: Embedded JavaScript templating

## License

This project is licensed under the MIT License.
