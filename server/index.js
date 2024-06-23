const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')


app.use(cors())
app.use(express.json())

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb+srv://tarundh:tarundh1@cluster0.lek7bdv.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
}

connectToDatabase();

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Password: req.body.Password
        })
        res.json({ status: 'ok' })
    }
    catch (err) {
        res.json({ status: 'error', error: "Duplite Email" })
    }
    res.json({ status: 'ok' })
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        Email: req.body.Email,
        Password: req.body.Password
    })
    if(user){
        return res.json({status: 'ok',User:true})
    }
    else{
        return res.json({status: 'error',User:false})
    }
})

app.listen(1337, () => {
    console.log('Listening at port 1337');
})