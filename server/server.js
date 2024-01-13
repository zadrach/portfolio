const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const path = require('path');

app.use(express.static('public')); // Assuming your static files are in a 'public' folder

app.use(cors());
const projects = [
  { id: 1, name: 'Cathay Industria', description: 'A website for Cathay Industrial. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', url: 'https://cathayindustrial.com' },
  { id: 2, name: 'Project B', description: 'Description B', url: 'https://example.com/project-b' },
];

app.use(express.json());

app.get('/api/projects', (_, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});








