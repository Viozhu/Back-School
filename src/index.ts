import express, { json, urlencoded } from 'express';
import cors from 'cors';
const app = express(); // express is a function

import userRouter from './routes/User/index';

// middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
// rotes
app.use('/user', userRouter);
// app.use('/user', require('./routes/User/index.ts'));
// app.use('/holiday', require('./routes/Holiday/index.ts'));
// app.use('/career', require('./routes/Career/index.ts'));
// app.use('/professor', require('./routes/Professor/index.ts'));
// app.use('/TL', require('./routes/TL/index.ts'));
// app.use('/Tutor', require('./routes/Tutor/index.ts'));
// app.use('/professions', require('./routes/Professions/index.ts'));

app.listen(4001, () => {
  console.log('Server is running on port 4001');
}); // listen is a function