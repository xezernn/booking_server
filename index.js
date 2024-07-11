const express = require('express');
const connectDb = require('./config/db');
const CategoryRouter = require('./router/categoryRouter');
const NewsRouter = require('./router/newsRouter');
const router = require('./router/loginRouter');
require('dotenv/config');


const app = express();
app.use(require("cors")())
app.use(express.json());

app.use('/api/category', CategoryRouter);
app.use('/api/news', NewsRouter);
app.use("/login", router )


const PORT = process.env.PORT1 || 3000;
const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server', error);
        process.exit(1);
    }
};

startServer();
