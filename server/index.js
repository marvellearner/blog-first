import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({ limit: "30 mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://sarthakmittal:sarthak1234@cluster0.emskg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
).catch(() => console.log(error));

// mongoose.set('useFindAndModify', false);