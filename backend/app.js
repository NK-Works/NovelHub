const express = require('express');
const app = express();
app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const cors = require('cors');
app.use(cors());
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/introduction-videos', express.static(path.join(__dirname, 'public', 'introduction-videos')));

require('dotenv').config();

const port = process.env.port;

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRotuer');
const postRouter = require('./routes/postRouter');
const authorRouter = require('./routes/authorRotuer');
const novelRouter = require('./routes/novelRouter');
const gAuthRouter = require('./routes/googleAuthRouter')
const chatBotRouter = require('./routes/chatBotRouter');

app.use('/api/auth', authRouter);
app.use('/api/oauth', gAuthRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/authors', authorRouter);
app.use('/api/novels', novelRouter);
app.use('/api/chatbot', chatBotRouter);

// Start server
app.listen((port), () => {
  console.log(`Server running at http://localhost:${port}`);
})