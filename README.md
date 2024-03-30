#Task manager - Platform for managing task

This is a task management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage their tasks with features like creating, updating, deleting, prioritizing, and categorizing.

## Deployed Link

## Website will take sometime to load

[Visit Sale&Rent](https://saleandrent.onrender.com)

## Table of Contents

1. [Task Manager - Platform for Managing Tasks](#task-manager---platform-for-managing-tasks)
    - 1.1. [Deployed Link](#deployed-link)
2. [Summary](#summary)
    - 2.1. [Features](#features)
3. [Technologies Used](#technologies-used)
    - 3.1. [Frontend](#frontend)
    - 3.2. [Backend](#backend)
    - 3.3. [Deployment Technology](#deployment-technology)
4. [Setting Up the Application](#setting-up-the-application)
    - 4.1. [Prerequisites](#prerequisites)
    - 4.2. [Steps to Run Locally](#steps-to-run-locally)
        - 4.2.1. [Fork the Repository](#fork-the-repository)
        - 4.2.2. [Clone the Repository](#clone-the-repository)
        - 4.2.3. [Move to Frontend Folder](#move-to-frontend-folder)
        - 4.2.4. [Install Dependencies for Frontend](#install-dependencies-for-frontend)
        - 4.2.5. [Run the Frontend Project](#run-the-frontend-project)
        - 4.2.6. [Move to Backend Folder](#move-to-backend-folder)
        - 4.2.7. [Install Dependencies for Backend](#install-dependencies-for-backend)
        - 4.2.8. [Run the Backend Project](#run-the-backend-project)
    - 4.3. [Setting up MongoDB Atlas](#setting-up-mongodb-atlas)
        - 4.3.1. [Create an Account](#create-an-account)
        - 4.3.2. [Create a New Cluster](#create-a-new-cluster)
        - 4.3.3. [Whitelist IP Address](#whitelist-ip-address)
        - 4.3.4. [Create a Database User](#create-a-database-user)
        - 4.3.5. [Connect to Your Cluster](#connect-to-your-cluster)
5. [Summary](#summary)
    - 5.1. [Features](#features)
    
## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **HTML/CSS**: Basic building blocks for web development.
- **JavaScript**: Programming language for enhancing user interactivity.

### Backend

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Node.js**: JavaScript runtime for server-side development.
- **MongoDB**: NoSQL database for storing application data.


### Deployment Technology

- **Frontend**: [Render](https://render.com)
- **Backend**: [Render](https://render.com)

## Setting Up the Application

### Prerequisites

- Node.js installed on your machine.

### Steps to Run Locally

1. **Fork the Repository**

   Click on the 'Fork' button on the top right corner of this repository's page. This will create a copy of the repository in your GitHub account.

2. **Clone the Repository**

   ```bash
   git clone https://github.com/Satender1998/Todowithpriority.git
   ```

### Steps to run locally

1. **Fork the Repository for Frontend**

   Click on the 'Fork' button on the top right corner of this repository's page. This will create a copy of the repository in your GitHub account.

2. **Clone the Repository**

   ```bash
   git clone https://github.com/Satender1998/Todowithpriority.git

   ```

3. **Move to folder**

   ```bash
   cd Client

   ```

4. **Install Dependencies**

   ```bash
   npm install

   ```

5. **Run the Project**

   ```bash
   npm run dev
   ```

The project will now be running locally on http://localhost:5173.

1. **For Backend**

2. **Move to folder**

   ```bash
   cd SERVER

   ```

3. **Install Dependencies**

   ```bash
   npm install

   ```

4. **Run the Project**

   ```bash
   npm run dev
   ```

The project will now be running locally on http://localhost:4000.

## Setting up MongoDB Atlas

MongoDB Atlas is a cloud-based database service that allows you to easily set up, manage, and scale MongoDB databases. Follow these steps to set up MongoDB Atlas for your project.

### Step 1: Create an Account

1. Go to the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).
2. Click on the "Start Free" button.
3. Fill out the required information to create your MongoDB Atlas account.

### Step 2: Create a New Cluster

1. After signing in, click on the "Build a Cluster" button.
2. Choose a cloud provider, region, and cluster tier. You can choose the free tier (M0) for testing and development purposes.
3. Click on the "Create Cluster" button to create your cluster. This may take a few minutes.

### Step 3: Whitelist IP Address

1. In the left sidebar, click on "Network Access" under the Security section.
2. Click on the "Add IP Address" button.
3. Add your current IP address to the IP Access List to allow connections from your location.
4. You can also choose to allow access from anywhere (`0.0.0.0/0`), but this is not recommended for production environments due to security reasons.

### Step 4: Create a Database User

1. In the left sidebar, click on "Database Access" under the Security section.
2. Click on the "Add New Database User" button.
3. Enter a username and password for your database user.
4. Assign necessary roles to the user. For example, you can give it the `readWrite` role for a specific database.
5. Click on the "Add User" button to create the user.

### Step 5: Connect to Your Cluster

1. In the left sidebar, click on "Clusters" under the Data Storage section.
2. Click on the "Connect" button of your cluster.
3. Choose "Connect your application" to get your connection string.
4. Replace `<password>` with the password of the database user you created.
5. You can customize the connection string based on your programming language and driver.

**Example Connection String for Node.js using MongoDB Native Driver:**

```mongodb
mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority

```

# Task Manager

## Summary

This is a task management application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to manage their tasks with features like creating, updating, deleting, prioritizing, and categorizing.

### Features:

1. **Backend Development (Node.js, Express.js, MongoDB)**
   CRUD Operations: Implement the Create, Read, Update, and Delete operations for tasks.
   Task Prioritization and Categorization: Develop an algorithm to prioritize tasks. Users can assign priority levels to tasks, and the system should display them accordingly. Users can also assign categories to each task.

2. **Frontend Development (React.js)**
   Dynamic User Interface: Create a user-friendly interface using React. The UI reflects real-time changes and provides a seamless user experience.
   Task Interactions: Allow users to add, view, edit, delete, categorize, and prioritize tasks.
   Filtering and Sorting: Implement features to filter and sort tasks based on different criteria such as priority and category.
