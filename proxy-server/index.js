const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Use cors middleware to allow all origins
app.use(cors());

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

app.post('/api/score', async (req, res) => {
    console.log("Request Body:", req.body);
    console.log("Request Headers:", req.headers);
    try {
        const azureUrl = "https://notyet-project-gpt4o-tuni-zccjo.swedencentral.inference.ml.azure.com/score"; // Replace with your Azure ML endpoint

        // Prepare the headers for Azure request
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer Wef5hz2SY8qmQHjk6KzfXiO5of17nrwx`, // Replace with your actual API key
            "azureml-model-deployment": "notyet-project-gpt4o-tuni-zccjo",
        };

        // Forward the request body from the client to Azure
        const response = await axios.post(azureUrl, req.body, { headers });

        // Send Azure's response back to the client
        res.json(response.data);
    } catch (error) {
        console.error("Azure ML error:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Error fetching from Azure ML endpoint." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
