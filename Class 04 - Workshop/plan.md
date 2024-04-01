# Workshop pt.1

## E-Commerce app

E-Commerce is rocking both on the web and mobile and we can’t ignore the massive size of this industry. Knowing how to build and maintain e-commerce apps is going to help you a lot as a developer.

Key requirements and features:

**Product Management:**
Product Model: Define a schema for products including fields like name, description, price, quantity, reviews, rating and category.
CRUD Operations: Implement CRUD operation (get all products, get product by id, create product, update product, delete product) for managing products in the database.
Search Functionality: Enable search functionality to allow users to find products based on name and category (add this functionality via query params).
Product Reviews: Implement a system for users to leave reviews and ratings for products.

**Cart Management**
Shopping Cart Model: Define a schema for the shopping cart to store items. The shopping cart should have a field "products" that will be of type array and will contain the id's of the products added to cart.
Add to Cart: Implement functionality to add products to the shopping cart.

Feel free to experiment and add additional features

### Libraries and Tools:

- Express.js: Use Express.js for building the backend server and handling HTTP requests.
- MongoDB Atlas: Host your MongoDB database on the cloud for scalability and reliability.
- Mongoose: Use Mongoose for modeling and interacting with MongoDB data in Node.js.

* Feel free to add additional libraries that you consider useful

============================================================================================

Setting Up Project Structure
Initialize a new Node.js project.

Install necessary dependencies: Express.js, Mongo, Mongoose, etc.
Set up project directories: models, controllers, routes, database etc.
Define Product Schema
Create product schema and model using Mongoose.

Include relevant fields in the schema like name, description, price, quantity, reviews, ratings, and category and add additional validations for type, required etc.

Create service layer that will perform CRUD Operations for Products

Implement controllers for each CRUD operation.

Create routes for handling CRUD operations on products.

Connect routes to respective controllers.

Implement Search Functionality via:

query string OR
separate post route for searching products by name and category.
Implement logic to handle search functionality.

Utilize Mongoose queries to search products based on provided parameters.
Implement Product reviews and ratings

Add route for adding reviews/ratings to products.

Implement controller function to handle review/rating submissions.

Update product model schema to include a field for storing reviews.

Implement logic to update product ratings and reviews based on submitted data.

Create cart schema and model using Mongoose.

Create a shopping cart schema and model using Mongoose.

Include a field for storing product IDs in the cart.

Add route for adding products to the shopping cart.

Implement controller function to handle adding products to the cart.

Implement controller function to handle getting cart items.

Implement controller function to handle getting cart items.

Implement controller function to handle getting all carts.

Use Mongoose models to interact with the MongoDB database.

Test each endpoint using Postman Don't forget to send your Postman collection
