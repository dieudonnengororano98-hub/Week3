import express from 'express';
import catRouter from './api/routes/catRouter.js';
import userRouter from './api/routes/userRouter.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/cats', catRouter);
app.use('/api/v1/users', userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
