const mongoose=require('mongoose')

const ImageScheema=mongoose.Schema({
    image:{
       data: Buffer,
       contentType:String
    }
},
{
    timestamps:true
})
module.exports=mongoose.model('Img',ImageScheema)