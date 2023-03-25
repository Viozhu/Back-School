import express, { json, urlencoded } from 'express'
import cors from 'cors' // express is a function

import userRouter from './routes/User/index'
import familyMemberRouter from './routes/FamilyMember/index'
import roomRouter from './routes/Room/index'
const app = express()

// middleware
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
// rotes

app.use('/user', userRouter)
app.use('/familymember', familyMemberRouter)
app.use('/room', roomRouter)
app.use('/', (req, res) => {
  res.send('Hello World')
})

app.listen(4001, () => {
  console.log('Server is running on port 4001')
}) // listen is a function
