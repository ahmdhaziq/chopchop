import express from "express";
import { Router } from "express";
import router from "./routes/route";

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(router)

export default app;