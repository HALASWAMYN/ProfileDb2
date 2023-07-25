const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 4000
//require database models
const Work = require('./models/work')
const Next = require('./models/save')


//middlewears
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//database
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connectDB = async () => {
  try {

    const uri = "mongodb+srv://halaswamyn2000:0IqxSchH32DPl1kJ@cluster0.stqarem.mongodb.net/work"
    await mongoose.connect(uri)
    console.log(`mangoDB connected:`);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}


app.post('/add-work', async (req, res) => {

    const WorkData = new Work({

        _id: req.body._id,
        designation: req.body.designation,
        companyLocation: req.body.companyLocation,
        companyName: req.body.companyName

    })

    try {

        await WorkData.save()
        res.send({ message: 'data saved' })

    } catch (error) {
        res.send(error)
    }

})

app.get('/post', async (req, res) => {
    try {
        let data = await Post.find()
        res.json(data)
    } catch (error) {
        res.send(error)
    }

})

app.post('/next-work', async (req, res) => {

    const nextData = new Next({

        _id: req.body._id,
        name: req.body.name,
        address: req.body.address,
        Business: req.body.Business,
        location: req.body.location,

    })

    try {

        await nextData.save()
        res.send({ message: 'data saved' })

    } catch (error) {
        res.send(error)
    }

})
app.get('/next-work/:id', async (req, res) => {

    try {
        let profileData = await Next.findById(req.params.id)
        res.send(profileData)
    } catch (error) {
        res.send(error)
    }
})





connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`listening to server ${PORT}`)
    })
  })