# MERN Web Chat Application - Read Me

Welcome to the MERN (MongoDB, Express, React, Node.js) based web chat application! This application allows users to communicate through text messages in real-time and provides various features for a seamless chatting experience. Below, you will find information on the current features, future plans, and how to set up and use the application.

## Table of Contents

1. Current Features
2. Future Features
3. Getting Started
4. Usage
5. Contributing

---

## Current Features

### 1. Signup new user

- Users can create a new account by providing necessary information.

### 2. Login user

- Registered users can log in with their credentials.

### 3. Search user

- Logged-in users can search for other users by alphabet, making it easy to find friends to chat with.

### 4. Create or access a chat

- Users can create new one-on-one chats with other users or access existing chats using a unique chat ID.

### 5. Fetching particular chat

- Users can retrieve a specific chat conversation by providing the chat ID.

### 6. Creating a new group chat

- Users can create group chats by specifying the chat IDs of participants.

### 7. Sending a new message in single chat

- Users can send text messages in one-on-one chats by providing the chat ID.

### 8. Sending a new message in group chat

- Users can send text messages in group chats by specifying the chat ID.

---

## Future Features

### 1. Real-time Chat

- Leveraging the power of socket.io, our application will enable real-time conversations, fostering instant connections and enhancing collaboration.

### 2. User Authentication

- Robust user authentication mechanisms will guarantee secure access control, ensuring that conversations remain private and protected.

### 3. Multi-room Chat

- Users will be able to create multiple chat rooms for topic-specific discussions, maintaining clarity and organization within the application.

### 4. Media Integration

- Supporting various media types such as text, images, videos, and more, the application will enrich communication and engagement.

### 5. Message History

- Access to chat history will empower users to revisit previous conversations, providing context and reference points.

### 6. User Profiles

- Personalized user profiles, complete with avatars and status updates, will enable users to express their individuality within the chat community.

### 7. Real-time Notifications

- Immediate notifications will ensure users are promptly informed of new messages, keeping the conversation dynamic.

### 8. Responsive Design

- Our application's user-friendly design will adapt seamlessly to both desktop and mobile devices, guaranteeing accessibility.

---

## Getting Started

To set up and run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend folder and install server dependencies: `cd backend && npm install`
3. Create a `.env` file in the backend directory with the necessary environment variables (e.g., MongoDB connection string, JWT secret).
4. Start the backend server: `npm start`
5. Navigate to the frontend folder and install client dependencies: `cd ../frontend && npm install`
6. Start the React development server: `npm start`

Your MERN web chat application should now be up and running locally!

---

## Usage

- Sign up for a new account or log in with existing credentials.
- Use the search feature to find other users to chat with.
- Create one-on-one or group chats by specifying the chat participants.
- Send and receive messages in real-time.
- Stay tuned for future updates and features!

---

## Contributing

We welcome contributions from the open-source community. You can contribute to the development of this project.

---

Thank you for using our MERN-based web chat application! If you have any questions, encounter issues, or have ideas for improvement, please feel free to reach out to us. Happy chatting! 🚀📱💬
