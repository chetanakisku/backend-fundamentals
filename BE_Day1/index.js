const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({status: 'ok'});
});

app.get("/users", (req, res) => {
  res.json([
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
  ])
});

app.post("/users", (req, res) => {
  const {name} = req.body;

  if (!name) {
    return res.status(400).json({
      error: 'Name is required'
    });
  }

  res.status(201).json({
    message: 'User created',
    user: {id:3, name}
  })
})

app.listen(3000, () => {
  console.log('Server running on port 3000');
});