import express from "express";
import cors from "cors";
import postalroute from "./postal.js"
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies



/* Postal Pincode Fetch API */
app.use('/api/v1/postalcode', postalroute);
app.get('/', function (req, res) {
    res.json('Hello World!'); // This will serve your request to '/'.
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
});
