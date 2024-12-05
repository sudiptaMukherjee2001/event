/* i need to add more safety check */

import axios from "axios";


const postalController = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(`Fetching postal data for ID: ${id}`);

        const response = await axios.get(`https://api.postalpincode.in/pincode/${id}`);
        console.log("data==>", response.data);
        console.log("name==>", response.data.Status);
        response?.data.map((res) => {
            res.PostOffice.map((item) => {
                console.log(item.Name);
            })
        })

        res.json(response.data); // Send the data field from Axios response
    } catch (error) {
        console.error("API Error:", error.message);
        res.status(500).json({ message: "API is not working", error: error.message });
    }
}

export default postalController;