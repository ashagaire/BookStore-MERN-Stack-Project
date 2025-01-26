# BookStore Application

## Overview
The **BookStore Application** is a full-stack project built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This application allows users to efficiently manage a book inventory through intuitive CRUD (Create, Read, Update, Delete) operations. The application has been deployed on **Render**, ensuring accessibility and scalability.

---

## Features
- **Full CRUD Operations:**
  - Add new books to the inventory.
  - View details of available books.
  - Update book information such as title, author, genre, and price.
  - Delete books from the inventory.

- **User-Friendly Interface:**
  - Built with React.js to ensure an intuitive and seamless user experience.
  - Responsive design for accessibility across devices.

- **Backend API:**
  - RESTful API built with Node.js and Express.js for efficient data handling.

- **Database Management:**
  - MongoDB is used as the database to store book records securely.

- **Deployment:**
  - Hosted on **Render** for reliable and scalable access.

---

## Tech Stack

### Frontend:
- React.js (JavaScript library for building user interfaces)
- Axios (for API communication)
- Tailwind CSS (for modern and responsive styling)
- Notistack (for notification handling)
- React Router (for navigation)

### Backend:
- Node.js (JavaScript runtime)
- Express.js (backend framework)
- MongoDB (database)
- Mongoose (MongoDB ODM library)

### Development Tools:
- Nodemon (for automatic server restart during development)

### Deployment:
- Render (platform-as-a-service for deployment)

---

## Installation and Setup

### Prerequisites:
- Node.js installed
- MongoDB database setup (local or cloud)

### Steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd bookstore
   ```

3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

4. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

5. Set up environment variables:
   - Create a `.env` file in the `backend` folder with the following keys:
     ```env
     MONGO_URI=<Your MongoDB URI>
     PORT=5000
     ```

6. Enable automatic server restarts during development:
   - The backend uses **nodemon** to monitor file changes and restart the server automatically. This is already configured in the `package.json` file under the `scripts` section:
     ```json
     "dev": "nodemon index.js"
     ```
   - To start the backend server with nodemon, run:
     ```bash
     npm run dev
     ```

7. Run the application:
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend application:
     ```bash
     cd ../frontend
     npm start
     ```

8. Open the application:
   - Visit `http://localhost:3000` in your browser to use the app.

---

## Deployment
The application is deployed on Render. You can access it [here](https://bookstore-vwcs.onrender.com/).

---

## Future Improvements
- Implement user authentication and authorization.
- Add search and filtering capabilities for the book inventory.
- Enhance UI/UX with additional animations and features.
- Integrate payment functionality for purchasing books.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Acknowledgments
- **MongoDB** for database management.
- **Render** for hosting and deployment.
- **Udemy and Online Resources** for learning MERN stack development.

---

Feel free to contribute to this project by forking the repository and submitting a pull request. Happy coding!


