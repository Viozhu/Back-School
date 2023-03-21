import express, { json, urlencoded } from 'express'
import cors from 'cors' // express is a function

import userRouter from './routes/User/index'
import familyMemberRouter from './routes/FamilyMember/index'
const app = express()

// middleware
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
// rotes
app.use('/user', userRouter)
app.use('/familymember', familyMemberRouter)
// app.use('/holiday', require('./routes/Holiday/index.ts'));
// app.use('/career', require('./routes/Career/index.ts'));
// app.use('/professor', require('./routes/Professor/index.ts'));
// app.use('/TL', require('./routes/TL/index.ts'));
// app.use('/Tutor', require('./routes/Tutor/index.ts'));
// app.use('/professions', require('./routes/Professions/index.ts'));

app.listen(4001, () => {
  console.log('Server is running on port 4001')
}) // listen is a function
