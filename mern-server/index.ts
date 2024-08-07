// const express = require('express')
// const cors = require('cors')
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());



// app.get('/api/name', (req: any, res: any) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import express from 'express';
import cors from 'cors';

// Define custom interfaces directly in index.ts
interface CustomRequest extends express.Request {
  // Add custom properties for request if needed
}

interface CustomResponse extends express.Response {
  // Add custom properties for response if needed
}

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/name', (req: CustomRequest, res: CustomResponse) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
