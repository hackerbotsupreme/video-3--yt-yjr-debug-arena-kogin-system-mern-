// we will import the dependencies as variables to use them
// to start the server at 5000 we need to add script in the package.json 
// "start":"node app.js"
// then run nodemon app

const express = require("express")
const  app = express()

app.listen(5000,()=>{
    console.log('server staarted at the port 5000')
})
// started the server 

// making an api 
// to make an api we have many methods like post , fetch , delete ,
// we are going to make an basic api through which awe can send request and receive a response 
//  so that we can figure out how api works 

// ...........................................................................................................................................................
// Here is a high-level overview of several types of API methods:

// GET method: retrieves information or data from a specified resource
// POST method: submits data to be processed to a specified resource
// PUT method: updates a specified resource with new data
// DELETE method: deletes a specified resource
// PATCH method: partially updates a specified resource
// OPTIONS method: retrieves the supported HTTP methods of a server endpoint
// HEAD method: retrieves only the headers of a response without the response body
// CONNECT method: establishes a network connection to a resource, typically used for SSL/TLS tunneling
// TRACE method: echoes the received request back to the client, for debugging purposes
// API methods are typically used to interact with web services or web applications, allowing developers to access and manipulate data or functionality from a remote source.
// ...........................................................................................................................................................

// get method - in the get method  we can only receive a response from a server 
// post method  - in teh post , we can send a request and receive a response 



// ok so when user will click submit , the website will request my api that entered data 
app.post("/post",async (req,res)=>{
    // we will receive that data using  console.log(res.body)
    console.log(res.body)
})

// use postman api to make api calls 
// is post man api is used to build efficient api's ?
// Organizations who prioritize API management typically leverage an API platform 
// like Postman, which can help them design, develop, test, secure, deploy, and monitor APIs at scale.

// it's how we create a whole fully functional website 
// Setting up a server and folder structure is essential for organizing your project.
// Prioritize UX/UI design with HTML, CSS, and possibly Sass to create an appealing user interface.
// In the backend, create the API (middleware) to handle data and functionality. This separation of frontend and backend is a best practice for web development.
// Thoroughly test the API to ensure it functions correctly. Testing is crucial to avoid issues down the line.
// You're correct about using a backend database like SQL or MongoDB to store data securely.
// Finally, hosting your website is the last step in making it accessible to the world.
// This approach aligns with web development best practices and will help you create a fully functional website.
// that's how we create a whole fully-dynamic  functional website 

