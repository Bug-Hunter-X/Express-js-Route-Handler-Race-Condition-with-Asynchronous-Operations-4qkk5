const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some asynchronous operation to fetch user data ...
  res.json({ userId });
});

//Problem: The asynchronous operation inside the route handler might not complete before the response is sent, leading to inconsistent behavior or errors if the user data is not yet fetched.  If the operation takes a significant amount of time, the user might receive a partial response or an error.
//Uncommon aspect: The race condition might not be immediately obvious if the asynchronous operation is internal to the application and doesn't directly involve external services with clearly defined timeouts.