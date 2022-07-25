import { app } from "./controller/app";
import { listRouter } from "./routes/listRouter";
import { userRouter } from "./routes/userRouter";

app.use('/user', userRouter)
app.use('/list', listRouter)