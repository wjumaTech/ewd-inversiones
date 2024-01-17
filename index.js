const express = require('express');
const server = require('./server');


const app = server(express());

app.listen(
  3000,
  console.log(`Server running on port 3000`)
)


