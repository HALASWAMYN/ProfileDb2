const express = require('express')
const cors = require('cors')
const app = express()
const multer = require('multer')


//require database models
const Work = require('./models/work')
const Next = require('./models/save')
const Img = require('./models/img')


//database
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

//middlewears
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


let dbUrl = 'mongodb+srv://halaswamyn2000:0IqxSchH32DPl1kJ@cluster0.stqarem.mongodb.net/work'
mongoose.connect(dbUrl).then(() => {
    console.log('dataBase connected')
})


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

//.............
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/image', upload.single('image'), async (req, res) => {
    try {
        const uploadImage = new Img({
            image: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            }
        });

        await uploadImage.save();
        res.send({ message: 'Uploaded' });
    } catch (error) {
        res.send({ message: 'Upload failed' });
    }
});

app.get('/image', async(req, res) => {

    try {
        let fetchImage = await Img.find()
        res.json(fetchImage)
    } catch (error) {
        res.send(error)
    }
}
)



app.listen(4000, () => {
    console.log('listenig localhost 4000')
})