const express = require("express");
const app = express();
const communityChatRoutes = require("./routes/community-chat.js");
const auth = require("./routes/auth.js")

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/community-chat", communityChatRoutes);
app.use("/auth",auth);
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
