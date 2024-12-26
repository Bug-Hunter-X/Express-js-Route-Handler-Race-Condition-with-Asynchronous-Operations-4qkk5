const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... asynchronous operation to fetch user data using async/await ...
    const userData = await fetchUserData(userId);
    res.json({ userId, ...userData });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

async function fetchUserData(userId) {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  // Replace with your actual data fetching logic
  return { name: 'John Doe', email: 'john.doe@example.com' };
}
