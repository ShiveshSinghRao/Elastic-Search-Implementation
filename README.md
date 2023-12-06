# Real-Time Message Management System

![11111111111222222222](https://github.com/ShiveshSinghRao/Elastic-Search-Implementation/assets/94308757/6fae6c1c-b6bd-4ab6-9c7e-ea54ba699d7e)
# Watch How The Project Works on : https://drive.google.com/file/d/1E64SqaXSTRycrsLglxepnkIitv2hsBuk/view?usp=drive_link


This project is a Real-Time Message Management System developed using Elasticsearch for efficient message storage, retrieval, and search functionalities.
### Dependencies:
frontend:
```
npm install react-toastify react-table
````
###backend

```
yarn add @elastic/elasticsearch body-parser dotenv express express-async-errors express-openid-connect nodemon
```
 
## Technologies Used

### Backend
- Node.js
- Express.js
- Elasticsearch (via @elastic/elasticsearch)
- REST API for message CRUD operations

### Frontend
- React.js
- Redux for state management
- Axios for API communication

### Tools & Libraries
- HTML, CSS (with SCSS)
- Redux for state management
- React Toastify for notifications
- Express-async-errors for handling asynchronous errors

## Features

### 1. Message Creation and Storage
- Allows users to insert and save messages using the `InputMessage` component.
- Backend API endpoint `/create` saves messages to Elasticsearch for efficient storage.

### 2. Real-Time Message Display
- The `DisplayMessage` component fetches and displays messages in real-time from Elasticsearch.
- Offers the option to show/hide all messages.

### 3. Message Search
- Provides a real-time search feature using the `MessageSearch` component.
- Users can search messages based on terms using Elasticsearch's search capabilities.

### 4. Keyword Search
- The `QueryMessage` component allows users to search messages by specific keywords.
- Fetches data from Elasticsearch based on the provided keyword.

## Setup Instructions

1. Clone the repository.
2. Install dependencies for both the frontend and backend using `npm install`.
3. Set up Elasticsearch locally or use an Elasticsearch instance.
4. Configure the backend to connect to your Elasticsearch instance by updating the `elasticClient` configuration in the backend code (`/backend` directory).
5. Start the backend server using `npm start`.
6. Start the frontend application using `npm start`.

## Project Structure

- `/backend`: Contains Express.js backend code for handling API requests and interacting with Elasticsearch.
- `/frontend`: Includes React.js components for different functionalities related to message management.

Feel free to contribute to this project by creating issues, suggesting enhancements, or sending pull requests!

## Credits

This Real-Time Message Management System was developed by Shivesh.

For more information or queries, please reach out to shiveshsinghrao@gmail.com

