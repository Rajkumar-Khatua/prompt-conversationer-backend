# Discussion Forum App

This is a simple discussion forum web application with features to create discussions and post messages within discussions.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Built With](#built-with)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact Me](#contact-me)
- [Coming Soon](#comming-soon-features)

## Features

- Create discussions
- Post messages within discussions
- Update and delete discussions
- Update and delete messages
- Get all discussions and messages
- Get discussion by ID with messages
- Get message by ID
- Get all messages within a discussion

## Getting Started

To get a local copy up and running follow these simple steps.


### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rajkumar-Khatua/prompt-conversationer-backend.git
   cd prompt-conversationer-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/prompt-conversationer-backend
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. The server should be running on [http://localhost:3000](http://localhost:3000).

## Usage

- Create a discussion:

  ```bash
  curl -X POST \
    http://localhost:3000/discussions \
    -H 'Content-Type: application/json' \
    -d '{
    "title": "Discussion Title",
    "description": "Discussion Description"
  }'
  ```

- Get all discussions:

  ```bash
    curl -X GET \
        http://localhost:3000/discussions
  ```

- Get a discussion by ID:
      ```bash
  curl -X GET \
   http://localhost:3000/discussions/:discussionId
  ```

  ```
- Update a discussion:
      ```bash
      curl -X PUT \
  http://localhost:3000/discussions/:discussionId \
   -H 'Content-Type: application/json' \
   -d '{
  "title": "Updated Discussion Title",
  "description": "Updated Discussion Description"
  }'
  ```
- Delete a discussion:
      ```bash
        curl -X DELETE \
        http://localhost:3000/discussions/:discussionId
        ```
- Create a message:
        ```bash
          curl -X POST \
          http://localhost:3000/discussions/:discussionId/messages \
          -H 'Content-Type: application/json' \
          -d '{
          "text": "Message Text"
          }'
          ```
- Get all messages:

  ````bash
      curl -X GET \
          http://localhost:3000/messages
      ```
  ````

- Get a message by ID:

  ````bash
      curl -X GET \
          http://localhost:3000/messages/:messageId
      ```
  ````

- Update a message:
        ```bash
            curl -X PUT \
            http://localhost:3000/messages/:messageId \
            -H 'Content-Type: application/json' \
            -d '{
            "text": "Updated Message Text"
            }'
            ```
- Delete a message:

  ````bash
      curl -X DELETE \
          http://localhost:3000/messages/:messageId
      ```
  ````

- Get all messages within a discussion:
        ```bash
            curl -X GET \
                http://localhost:3000/discussions/:discussionId/messages
            ```

## API Endpoints

| Method | Endpoint                            | Description                          | Request Body                                                                               | Success Response | Error Response    |
| ------ | ----------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------ | ---------------- | ----------------- |
| POST   | /discussions                        | Create a discussion                  | `{ "title": "Discussion Title", "description": "Discussion Description" }`                 | `201 Created`    | `400 Bad Request` |
| GET    | /discussions                        | Get all discussions                  | -                                                                                          | `200 OK`         | `404 Not Found`   |
| GET    | /discussions/:discussionId          | Get a discussion by ID               | -                                                                                          | `200 OK`         | `404 Not Found`   |
| PUT    | /discussions/:discussionId          | Update a discussion                  | `{ "title": "Updated Discussion Title", "description": "Updated Discussion Description" }` | `200 OK`         | `400 Bad Request` |
| DELETE | /discussions/:discussionId          | Delete a discussion                  | -                                                                                          | `204 No Content` | `404 Not Found`   |
| POST   | /discussions/:discussionId/messages | Create a message                     | `{ "text": "Message Text" }`                                                               | `201 Created`    | `400 Bad Request` |
| GET    | /messages                           | Get all messages                     | -                                                                                          | `200 OK`         | `404 Not Found`   |
| GET    | /messages/:messageId                | Get a message by ID                  | -                                                                                          | `200 OK`         | `404 Not Found`   |
| PUT    | /messages/:messageId                | Update a message                     | `{ "text": "Updated Message Text" }`                                                       | `200 OK`         | `400 Bad Request` |
| DELETE | /messages/:messageId                | Delete a message                     | -                                                                                          | `204 No Content` | `404 Not Found`   |
| GET    | /discussions/:discussionId/messages | Get all messages within a discussion | -                                                                                          | `200 OK`         | `404 Not Found`   |

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to [OpenAI](https://www.openai.com/) for providing GPT-3.5, which assisted in creating this README.

---

**Personal Team Appreciation:**

I extend my sincere appreciation to each member of our team for their dedicated efforts and collaboration, which have been instrumental in ensuring the smooth flow of our work. This project wouldn't have been possible without the hard work, commitment, and expertise contributed by each team member.

## Contact Me 📫 

Rajkumar Khatua - [LinkedIn](https://www.linkedin.com/in/rajkumarkhatua/)
Rajkumar Khatua - [GitHub](https://github.com/Rajkumar-Khatua)

## Coming Soon Features

- User authentication
- User authorization
- User roles
- User profile
- User avatar
- User settings
- User notifications
- User search
- User activity
- User privacy
- User preferences
- User subscriptions
- User followers
- User following
- User blocking
- User reporting
- User feedback
- User support
- User feedback
- Performance optimization
- Security
- Personal group chats
- Group chats
- Group chat settings
- Group chat notifications
- Group chat search
- Group chat activity
- Group chat privacy
- Group chat preferences
- Group chat subscriptions
- Group chat followers
- Group chat following
- Group chat blocking
- Group chat reporting
