import express, { json } from "express";
import cookieParser from "cookie-parser";
const app = express();
const port = 3000;

app.use(json());
app.use(cookieParser());


// POST request for logging in
app.post("/login", (req, res) => {
  // Simulate a login process and generate session data
  const sessionId = "exampleSessionId";
  const userId = "exampleUserId";
  const userName = req.body.username;

  res.json({ sessionId, userId, userName });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
