// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import router from "./routes/userRoute.js";
// const app=express();

// //bodypraser is a middleware for parsing the json  data

// app.use(bodyParser.json())
// dotenv.config();

// const PORT =process.env.PORT || 5000;
// const MONGO_URL=process.env.MONGO_URL;

// app.use('/api/user',router)

// app.use('/api/user/create',router)

// mongoose
//          .connect(MONGO_URL)
//          .then(()=>{
//             console.log("db connected");
//             app.listen(PORT,()=>{
//                 console.log("Server is running on port ${PORT}")
//             })
//          })


// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import cors from "cors";
// import router from "./routes/userRoute.js";

// // Initialize Express app
// const app = express();

// // Load environment variables
// dotenv.config();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection URL from .env file
// const MONGO_URL = process.env.MONGO_URL;

// // MongoDB connection setup
// mongoose
//   .connect(MONGO_URL)
//   .then(() => {
//     console.log("MongoDB connected!");
//     // Start the server after DB connection
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// // Use routes
// app.use('/api/user', router);



// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import router from "./Routes/userRoute.js";
// import cors from "cors"
// const app=express();

// //bodypraser is a middleware for parsing the json  data
// app.use(cors());
// app.use(bodyParser.json())
// dotenv.config();

// const PORT =process.env.PORT || 5000;
// const MONGO_URL=process.env.MONGO_URL;

// app.use('/api/user',router)


// mongoose
//          .connect(MONGO_URL)
//          .then(()=>{
//             console.log("db connected");
//             app.listen(PORT,()=>{
//                 console.log(`Server is running on port ${PORT}`)
//             })
//          })


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
<<<<<<< HEAD
import router from "./routes/userRoute.js"; // Ensure this path is correct
import cors from "cors";
=======
import router from "./routes/userRoute.js";
import cors from "cors"
const app=express();
>>>>>>> 75d8de5b05e72baf0b92a0360ae6710d492b4050

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Route setup
app.use('/api/user', router);

// MongoDB connection and server start
mongoose
<<<<<<< HEAD
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Ensure proper connection options
  .then(() => {
    console.log("db connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
=======
         .connect(MONGO_URL)
         .then(()=>{
            console.log("db connected");
            app.listen(PORT,()=>{
                console.log(`Server is running on port ${PORT}`)
            })
         })
>>>>>>> 75d8de5b05e72baf0b92a0360ae6710d492b4050
