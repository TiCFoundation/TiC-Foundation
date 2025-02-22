# Teens in Computing Foundation: TiC Foundation

## Overview

The TiC Foundation is a non-profit online platform dedicated to equipping underprivileged students in rural Ghana with essential computer skills. 
Built with React, it serves as a hub for educational resources, interactive lessons, and community support, 
bridging the digital divide and empowering young learners for a brighter future.

## Features

- **About TiC Foundation:** Overview of our mission, vision, and the communities we serve.
- **Resource For Success:** Learning materials, tools, and guides to help students build essential computer skills.
- **Courses:** Interactive lessons covering basic to advanced computing concepts.
- **Donations:** Information on how to support our mission through financial or material contributions.
- **Commitments:** Our dedication to continuous learning, mentorship, and expanding digital literacy.
- **Our Social Impacts:** Success stories and the positive changes TiC Foundation has brought to communities.

## Tech Stack

### Frontend:
- **React:** Frontend framework for building the user interface.
### Backend:
- **Java:** Spring boot
### Database:
- **PostgreSQL (pgAdmin 4):** DB for data storage

## Getting Started

- [link to Trello Board](https://trello.com/b/VMiT2MjJ/developer-stories)
- [Link to UX Design](https://www.figma.com/design/9gph17fnY8hXzMkM8HaMmv/Mock-Wireframe?node-id=307-518&t=yN4AKXKanZldPkib-0)
- [Link to Requirements](https://www.notion.so/TiC-Foundation-App-Design-159ed3c5b055806bad14cbe87458300a)


### Prerequisites
- [Node.js](https://nodejs.org/) 
- [JAVA](https://www.oracle.com/java/technologies/downloads/) - Select your system and download accordily
- [NodeJs](https://nodejs.org/en/download/source-code/current)
- [React](https://react.dev/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Contributing Guide

The TiC Foundation and I welcome your contributions! Follow the steps below to get started:
##### Make Changes
- Make your changes to the codebase. Ensure your changes follow the project coding standards and include relevant documentation or comments.
##### Test Your Changes
- Run the application and test your changes locally. Ensure existing functionality is not broken.
#####  Commit and Push Changes
- git add [FILE_NAME]
- git commit -m "Description of your changes"
- git push origin feature/your-feature-name
##### Create a Pull Request
Go to the original repository on GitHub and click on "Pull Requests." Click "New Pull Request" and select your branch. 
Provide a clear description of your changes and submit the pull request.

  
## Contributing To UI

1. Clone the repository:
   ```bash
   https://github.com/nartehi/ticfoundation.git

2. Create a branch before start developing:
   ```bash
   git branch issue_number
   
   e.g issue1-datePicker

3. Change directory into app-ui:
    ```bash
   cd app-ui
   
3. Install npm:
    ```bash
   npm i or npm install
    Please only run this when you are prompted to otherwise do not run it
   
4. Starts the development server:
    ```bash
    npm start  or npm run-script start

#### Please do not execute steps 5,6,7,8 and 9

5. Start the test runner:
    ```bash
    npm test

6. To create a production build:
    ```bash
    npm run build.

8. Bundles the app into static files for production.
    ```bash
    npm run build

9. If you have issues with build, install the following fonts:
    ```bash
    npm install --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/free-brands-svg-icons
    npm install --save @fortawesome/react-fontawesome
    npm install react-scroll
    npm install react-router-dom
    npm install react-router-dom

    
### To See Latest Changes From Develop branch in your branch
#### Steps:
  1. Checkout develop branch: **git checkout develop**
  2. Get the latest of develop branch:**git pull**
  3. Checkout branch your_branch:**git checkout your_branch**
  4. Merge develop branch to branch your_branch:**git merge develop**
     

## Contributing To Backend with Spring Boot(Java)

_**Please reach out to Isaac Narteh to get the application properties**_

### Introduction

This project is a Spring Boot application using PostgreSQL as the database and Swagger UI for API testing and documentation.

## Getting Started

### Prerequisites

Please ensure that you have the following installed on your system

- [Download IntelliJ IDEA](https://www.jetbrains.com/idea/) -(Preferably Community Edition) 
- [Java 11 or higher](https://www.oracle.com/java/technologies/downloads/)
- Maven
- [Downlod PostgreSQL](https://www.postgresql.org/download/) for database interaction (pgAdmin 4)


### Connecting to PostgreSQL pgAdmin 4
[Link to Access to Connection](https://docs.google.com/document/d/1SdFTmq2IBdtkYGXu3855g47ImT5tHOaHiCb-m-6GFnY/edit?tab=t.0#heading=h.gqhm3r9i76ld)
 
Once you have successfully connected to the db
- Go to YOUR IntelliJ and create a .env file and paste the application properties you have recieved from **Isaac Narteh**
- Head to the pom.xml file and right click on it and select **Run as Maven Project**
- On the right side of the screen in intelliJ, you will see the maven(m) icon, clcik on it and under **LifeCycle**, select both **clean** and **install** at the same time, then hit green arrow icon above LifeCyle to build the project
- On the top right corner screen of intelliJ, click on the green arrow button besides AppBackenApplication near the debugger icon to start running backend of the application
Backend starts on port 2300: http://localhost:3900

### RESTful APIs
Swagger UI for API testing and documentation:
**_Please make sure that your backend is running before using these links otherwise they will not work_**
- Layered architecture (Controller, Service, Mapper, ServiceImplementation)
- [Login to access swagger ui]( http://localhost:2300/login)
- [Swagger-ui-url](http://localhost:2300/swagger-ui/index.html) OR
- [Swagger-ui-url](http://localhost:2300/swagger-ui/4.15.5/index.html)

### Dependencies

The project uses the following dependencies:
- Spring Boot Starter Data JPA
- Spring Boot Starter Web
- PostgreSQL Driver
- Springdoc OpenAPI (for Swagger UI)

### Testing the APIs 

- **Retrieve Resources:** Test fetching all resources using `GET /api/resource` to ensure data is correctly retrieved.  
- **Create Resource:** Use `POST /api/resource` to add a new resource and verify its presence in the database.  
- **Update Resource:** Test `PUT /api/resource/{id}` to modify an existing resource and confirm the changes are saved.  
- **Delete Resource:** Use `DELETE /api/resource/{id}` to remove a resource and ensure it no longer exists in the database.  
- **Verify Changes:** After each operation, check the database to confirm the updates reflect correctly.  

## Acknowledgments

[Spring Boot Documentation](https://docs.spring.io/spring-boot/index.html)

[PostgreSQL Documentation](https://www.postgresql.org/docs/)

[Springdoc OpenAPI Documentation](https://springdoc.org/)

[React JS Documentation](https://legacy.reactjs.org/docs/getting-started.html)

[Java Documentation](https://docs.oracle.com/en/java/)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
