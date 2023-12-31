Link to the GitHub Repo : [https://github.com/AdityaKuchhal/Synk-Web-Chat-App/tree/main](#https://github.com/AdityaKuchhal/Synk-Web-Chat-App/tree/main)


# SYNK - A MERN Web Chat Application

Welcome to **SYNK** a MERN (MongoDB, Express, React, Node.js) based web chat application! This application allows users to communicate through text messages in real-time and provides various features for a seamless chatting experience. Below, you will find information on the current features, future plans, and how to set up and use the application.

## Table of Contents

1. [Current Features](#current-features)
2. [Future Features](#future-features)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Contributing](#contributing)

---

## Current Features

**1. Signup new user**

- Users can create a new account by providing necessary information.

**2. Login user**

- Registered users can log in with their credentials.

**3. Search user**

- Logged-in users can search for other users by alphabet, making it easy to find friends to chat with.

**4. Create or access a chat**

- Users can create new one-on-one chats with other users or access existing chats using a unique chatID.

**5. Fetching All Chats for a User**

- Users can retrieve all their chat conversations by providing their userID.

**6. Creating a new group chat**

- Users can create group chats by specifying the chat IDs of participants.

**7. Sending a new message in single chat**

- Users can send text messages in one-on-one chats by providing the chatID.

**8. Sending a new message in group chat**

- Users can send text messages in group chats by specifying the chatID.

---

## Future Features

**1. Real-time Chat**

- Leveraging the power of socket.io, our application will enable real-time conversations, fostering instant connections and enhancing collaboration.

**2. User Authentication**

- Robust user authentication mechanisms will guarantee secure access control, ensuring that conversations remain private and protected.

**3. Multi-room Chat**

- Users will be able to create multiple chat rooms for topic-specific discussions, maintaining clarity and organization within the application.

**4. Media Integration**

- Supporting various media types such as text, images, videos, and more, the application will enrich communication and engagement.

**5. Message History**

- Access to chat history will empower users to revisit previous conversations, providing context and reference points.

**6. User Profiles**

- Personalized user profiles, complete with avatars and status updates, will enable users to express their individuality within the chat community.

**7. Real-time Notifications**

- Immediate notifications will ensure users are promptly informed of new messages, keeping the conversation dynamic.

**8. Responsive Design**

- Our application's user-friendly design will adapt seamlessly to both desktop and mobile devices, guaranteeing accessibility.

---

## Getting Started

To set up and run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend folder and install server dependencies: `cd backend && npm install`
3. Create a `.env` file in the backend directory with the necessary environment variables (e.g., MongoDB connection string, JWT secret).
4. Start the backend server: `npm start`

Your MERN web chat application should now be up and running locally!

---

## Usage

- Sign up for a new account or log in with existing credentials.
- Use the search feature to find other users to chat with.
- Create one-on-one or group chats by specifying the chat participants.
- Send and receive messages in real-time.
- Stay tuned for future updates and features!

---

# Testing the API's thorugh POSTMAN

Before testing the API, ensure you have the following:

1. **Postman:** If you haven't already installed Postman, you can download it [here](https://www.postman.com/downloads/).

2. **Import the collection by clicking the button below**

   <img width="383" alt="Screenshot 2023-10-04 at 9 29 42 PM" src="https://github.com/AdityaKuchhal/Synk-Web-Chat-App/assets/67582528/016eb707-a164-4b9a-aacc-60fe9f1ddd1d">

Follow the steps below to test the User **Registeration API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Users folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/user** where URL is '_http://localhost:8090_' as a global variable.

3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields (`name`, `email`, `password`, and optionally `img`) to simulate a user registration. For example:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "password": "securepassword",
       "img": "profile.jpg"
     }
     ```

4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.


-----------------------------------------------------------------


Follow the steps below to test the User **Login API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Users folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/user/login** where URL is '_http://localhost:8090_' as a global variable.

3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields. For example:
     ```json
     {
       "email": "nirmit@example.com",
       "password": "nirmit@synk123"
     }


     ```

4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.


-----------------------------------------------------------------



Follow the steps below to test the User **SearchUser API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Users folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/user?search=John** where URL is '_http://localhost:8090_' as a global variable.

This will give all the results of John with name and email for the logged in user.


3. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

4. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.



-----------------------------------------------------------------



Follow the steps below to test the User **CreateOrAccessOnetoOneChat API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/chat** where URL is '_http://localhost:8090_' as a global variable.

3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields. For example:
     ```json
     
     {
       "userId": "651db78afa5467a889f826fa"
     }      



4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.
  


-----------------------------------------------------------------



Follow the steps below to test the User **FetchingChats API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/chat** where URL is '_http://localhost:8090_' as a global variable.


4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.




-----------------------------------------------------------------


Follow the steps below to test the User **CreateNewGroupChat API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/chat/group** where URL is '_http://localhost:8090_' as a global variable.

3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields. For example:
     ```json
     
    {
       "name": "Friends",
       "users": "[\"651db74dfa5467a889f826f4\", \"651db777fa5467a889f826f7\", \"651db78afa5467a889f826fa\"]"
    }


4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.





-----------------------------------------------------------------


Follow the steps below to test the User **RenameGroup API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/chat/rename** where URL is '_http://localhost:8090_' as a global variable.

3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields. For example:
     ```json
     
    {
    "chatId": "651de521f1e4f6a800173a9b",
    "chatName": "Close Friends"
   }

4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.





-----------------------------------------------------------------


Follow the steps below to test the User **RemoveUserFromGroup API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/chat/groupremove** where URL is '_http://localhost:8090_' as a global variable.

3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields. For example:
     ```json
     
   {
       "chatId": "651de521f1e4f6a800173a9b",
       "userId": "651db777fa5467a889f826f7"
   }

4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.



-----------------------------------------------------------------


Follow the steps below to test the User **AddUserToGroup API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the folder in dropdown. Make sure your endpoint is **{{URL}}/api/chat/groupadd** where URL is '_http://localhost:8090_' as a global variable.

3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields. For example:
     ```json
     
   {
       "chatId": "651de521f1e4f6a800173a9b",
       "userId": "651db777fa5467a889f826f7"
   }

4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.
  



-----------------------------------------------------------------


Follow the steps below to test the User **SendMessage API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the "Message" folder in dropdown. Make sure your endpoint is **{{URL}}/api/message** where URL is '_http://localhost:8090_' as a global variable.


3. **Set Request Body:**

   - Click on the "Body" tab and choose "raw" or "form-data," depending on how your API accepts data.
   - Enter a JSON object with the required fields. For example:
     ```json
     
 {
    "content":"hello",
    "chatId":"651ddeb6a20deb75bdbee53d"   
 }

4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.




-----------------------------------------------------------------


Follow the steps below to test the User **SendMessage API** using Postman:

1. **Open Postman:**

   - Launch the Postman application.

2. **Access Chats folder**

   - Access the "Message" folder in dropdown. Make sure your endpoint is **{{URL}}/api/message/{chatId}** where URL is '_http://localhost:8090_' as a global variable.


4. **Send the Request:**

   - Click the "Send" button to send the request to your API endpoint.

5. **Review the Response:**

   - Postman will display the response from your API. Check the response status code, headers, and body to ensure it matches your expectations.




## Contributing

We welcome contributions from the open-source community. You can contribute to the development of this project.

---

Thank you for using our MERN-based web chat application! If you have any questions, encounter issues, or have ideas for improvement, please feel free to reach out to us. Happy chatting! 🚀📱💬
