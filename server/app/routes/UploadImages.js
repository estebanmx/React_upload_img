'use strict'

const router = require('express').Router()
const Image = require('../models/image')
const storage = require('../config/multer')
const multer = require('multer')

const uploader = multer({storage})

router.post('/upload', uploader.single('file'), async(req,res)=>{
    const {file,body}=req
    
    if(file && body){
        const newImage = new Image({
            fileName: body.name,
            urlFile : `http://localhost:4000/${file.filename}`
        })
        await newImage.save()
        res.json({
            newImage:newImage
        })
    }
} )

router.get('/download', async(req,res)=>{
    const images = await Image.find()
    res.json(images)
})

module.exports = router