## MongoDB, Cloud Database Integration ENV Variable
- https://www.mongodb.com

### What is MongoDB and why it is used?
  - Image result for what is mongodb
MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of distributed data. MongoDB is a tool that can manage document-oriented information, store or retrieve information.  
  - MongoDB was also designed for high availability and scalability, with built-in replication and auto-sharding; MongoDB Atlas: Deploy and scale a MongoDB cluster in the cloud with just a few clicks. MongoDB Atlas is a global cloud database service built and run by the team behind MongoDB.  

- Mongodb and mongo atlas module overview
 - https://www.mongodb.com/atlas/database
 - Run applications anywhere with mongo atlas

# Node-Mongo-CRUD
1. Install mongodb, create mongodb atlas account
- npm init -y
- npm i express mongodb nodemon
- MongoDb cloud
```js
 - https://www.mongodb.com/cloud/atlas/register > login > Welcome to Atlas! > fill up filed > select free > select aws > Create cluster > create database user, fill all filed > 
Add My Current IP Address > Connect to Cluster0 >
 Connect Using VS Code > 
  - In VS Code, open "Extensions" in the left navigation and search for "MongoDB for VS Code." Select the extension and click install.
 - on server(nodemon index.js on this project)
 - Click on "View" and open "Command Palette."
Search "MongoDB: Connect" on the Command Palette and click on "Connect with Connection String."
- Paste your connection string into the Command Palette.
mongodb+srv://pranavatlas22:<password>@cluster0.l2ldzsy.mongodb.net/test

Network Access - IP Address
Craete database user (user:dataPranab, password:dataPra@6654)
Connect your application
```js
//include full driver code example
```
- create express server 

2. Connect to cloud database introduction to CRUD
- https://www.restapitutorial.com/lessons/httpmethods.html
- https://cloud.mongodb.com/v2/638c4647c7ae644987ebd9c1#clusters
- Viwe Monitoring > Collections > create database - dataPranab

3. Send data to database and read data from ui
- https://www.mongodb.com/docs/manual/tutorial/insert-documents/
- First get index.html file by localhost:4002 then submit

4. Save data in database and Read all data
5. Load data database data and show on the UI
```js
//index.js -   app.get('/products', (req, res) => {
//const loadAllProducts = () => {
```

6. Delete an item from the database from UI
```js
//add delete button onclick in html
//index.html -  const deleteProducts = id => {
//index.js -  app.delete('/delete/:id', (req, res) => {
```

7. Load single product from database using id
```js
//add update button onclick in html
// - index.html - const loadProduct = id => {
// - index.js - app.get('/product/:id', (req, res) => {
```

8. Update or modify a single item and save database
```js
//index.html - const updateProduct = id => {
//index.js - app.patch
```
9. Make CRUD operation working smoothly
- Modify code