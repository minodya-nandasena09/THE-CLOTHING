# E-commerce Clothing Store

An E-commerce clothing store application built using **React.js** for the frontend and **Node.js**, **Express.js**, and **MongoDB Atlas** for the backend. The platform offers a seamless online shopping experience, allowing users to explore various product categories, view individual product details, manage a shopping cart, and authenticate with user accounts.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [React.js Proficiency](#reactjs-proficiency)
- [Backend Routes](#backend-routes)
- [Future Enhancements](#future-enhancements)

## Features

### Frontend

- **Homepage:**
  - Displays trending products and the latest offers to keep users informed about current deals.
  - Includes a subscription form for users to sign up for news alerts.
- **Product Categories:**
  - Dedicated pages for **Men’s**, **Women’s**, and **Kids’** clothing categories.
  - Each category page allows users to browse through products relevant to the selected category.
- **Single Product Page:**

  - Users can view detailed information about individual products, including a **product image gallery**, **price**, and **simple description**.
  - A list of related products is provided for better shopping recommendations.

- **Shopping Cart:**
  - Users can add products to their cart, view items, adjust quantities, and proceed to checkout.
- **User Authentication:**
  - Users can create accounts and log in to the website.
  - Secure password handling using encryption.

### Backend

- **User Account Management:**
  - Registration and login functionality
- **Product Management:**
  - Products are fetched from the MongoDB database and served to the frontend.
- **Cart Management:**
  - User-specific carts are stored in MongoDB, allowing for session persistence.

## Tech Stack

### Frontend:

- **React.js** for building the user interface.
- **CSS** for styling.
- **React Router** for navigation.

### Backend:

- **Node.js** with **Express.js** for building the RESTful API.
- **MongoDB Atlas** as the NoSQL cloud database for storing product and user data.
- **Mongoose** for database modeling.

## React.js Proficiency

This project highlights a strong proficiency in **React.js**, including the following concepts:

- **Props Handling:** Props are extensively used to pass data between components, ensuring that data flows efficiently from parent to child components.
- **Routing:** React Router is used for navigating between the various pages, such as category pages, the single product page, and the shopping cart.
- **Refactoring & Destructuring:** Code refactoring and the use of destructuring techniques have been implemented to enhance code readability and maintainability. This allows for cleaner, more efficient components, making the application easier to extend and debug.

- **State Management:** The `useState()` hook is used for managing state in various components, providing dynamic user experiences.

- **Context Management:** The `useContext()` hook has been used to share global states between components, simplifying the management of user authentication, cart data, and other global information throughout the application.
