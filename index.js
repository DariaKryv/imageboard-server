const express = require("express");
const jsonParser = express.json();

const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const authRouter = require("./routers/auth");
const app = express();

const port = 4000;
app.use(jsonParser);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/images", imageRouter);
app.listen(port, () => console.log(`listening: ${port}`));
