
Movie Manager is a full-stack web application for managing a personal
movie collection. Users can view a collection of movies, add new movies,
edit existing movie information, and delete movies. Each movie can also
have reviews with a rating and comment, which users can add or delete
from the movie details page. The application includes Home, Movies,
Movie Details, and About pages, responsive styling, form validation,
user feedback, and a total movie count. The frontend is built with React
and Vite, while the backend uses Java and Spring Boot to provide REST
API endpoints connected to a MySQL database through Spring Data JPA and
Hibernate.

***Technologies Used***

##Front End

-React

-Vite

-JavaScript

-React Router

-HTML

-CSS

-Fetch API

##Back End

-Java

-Spring Boot

-Spring Data JPA

-Hibernate

-Maven

##Database

-MySQL

-MySQL Workbench

***Development and Testing Tools***

Visual Studio Code

IntelliJ IDEA

Git

GitHub

Postman

Features

View all movies

View individual movie details

Add a movie

Edit a movie

Delete a movie

Add a review to a movie

View reviews for a movie

Delete a review

Display the total number of movies

React Router navigation

Form validation

User feedback messages

Responsive styling

REST API communication between React and Spring Boot

***Project Structure***

unit-2-project-movie-manager/
│
├── java-spring-boot-back-end-app/
├── react-frontend-app/
│
└── README.md


***Database Design***

ERD -https://canva.link/x1xo1krbdifhine
The application uses two related entities:

Movie

id --- primary key

title

genre

director

releaseYear

Review

id --- primary key

rating

comment

movie_id --- foreign key

A movie can have many reviews, and each review belongs to one movie
through the movie_id foreign key.

Entity Relationship Diagram



***Wireframes***

The wireframes represent the main screens and user flow of the Movie
Manager application.
WIREFRAMES - https://canva.link/aztktv3w1c44old


***Installation and Setup***

1. Clone the repository

git clone https://github.com/NP319/unit-2-project-movie-manager.git
cd unit-2-project-movie-manager

2. Create the MySQL database

Open MySQL Workbench and create the database:

CREATE DATABASE movie_manager;

3. Configure the Spring Boot backend

Open:

java-spring-boot-back-end-app/src/main/resources/application.properties

The database configuration should point to the local MySQL database:

spring.datasource.url=jdbc:mysql://localhost:3306/movie_manager
spring.datasource.username=root
spring.datasource.password=${DB_PASSWORD}

Set the DB_PASSWORD environment variable to your local MySQL password.

4. Run the Spring Boot backend

Open the java-spring-boot-back-end-app folder in IntelliJ IDEA and run
the Spring Boot application.

The backend runs at:

http://localhost:8080

5. Run the React frontend

Open a terminal in the react-frontend-app folder.

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend runs at:

http://localhost:5173

6. Use the application

Open the frontend in a browser and use the navigation to:

View the Home page

View the movie collection

Add, edit, and delete movies

Open movie details

Add and delete reviews

View the total movie count

View the About page

API Endpoints

Movies

Method   Endpoint          Purpose

GET      /movies         Get all movies
GET      /movies/{id}    Get one movie
GET      /movies/count   Get total movie count
POST     /movies         Add a movie
PUT      /movies/{id}    Update a movie
DELETE   /movies/{id}    Delete a movie

Reviews

Method   Endpoint          Purpose

GET      /reviews        Get reviews
POST     /reviews        Add a review
DELETE   /reviews/{id}   Delete a review

***Testing and Debugging***

The application was manually tested during development using the browser
and Postman.

Testing included:

Creating movies with POST requests

Retrieving movies with GET requests

Retrieving individual movies

Updating movies with PUT requests

Deleting movies with DELETE requests

Creating and deleting reviews

Testing movie details and review display

Testing the total movie count after adding and deleting movies

Testing React-to-Spring Boot API communication

Testing the application through the browser

Debugging included:

Fixing CORS communication between React and Spring Boot

Fixing review request data sent from the React form

Fixing movie deletion when related reviews existed

Checking API responses and database behavior in Postman

***Git and Version Control***

Development was completed using Git feature branches and pull requests.
Changes were committed frequently with concise commit messages and
completed feature work was merged into main.

The repository contains more than 50 commits.

Future Features and Possible Improvements

Possible future improvements include:

Search and filter movies

Sort movies by title, genre, or release year

Display the total number of reviews

Add movie posters or additional movie information

Add user authentication and personalized movie collections

Deploy the application so it can be accessed online

***Known Limitations***

The application currently runs locally and depends on a local MySQL
database, Spring Boot backend, and React development server.
Authentication and online deployment are not currently implemented.
