// seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Course = require("./models/Course.model");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log("MongoDB connected for seeding");

    const sampleCourses = [
      {
        title: "Full Stack Web Development",
        description: "Learn to build modern web apps using MERN stack.",
        instructor: "John Doe",
        price: 299,
        category: "Web Development"
      },
      {
        title: "Data Structures in C++",
        description: "Master DSA for coding interviews",
        instructor: "Jane Smith",
        price: 199,
        category: "Programming"
      }
    ];

    await Course.insertMany(sampleCourses);
    console.log("Courses inserted successfully");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Seed error:", err);
  });
