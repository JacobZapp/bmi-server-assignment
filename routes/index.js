// importing express and making router object
const express = require('express')
const router = express.Router()

// get request to show home page
router.get('/', function (req, res, next) {
    res.render('index.hbs', {
        title: 'BMI Calculator',
        author:'Jacob',
        timePageLoadedAt: new Date(),

    })
})

router.get('/bmi-form', function (req, res, next) {
    res.render('bmi-form.hbs')
})

router.post('/submit-form', function (req, res, next) {
    const formData = req.body
    console.log(formData)
    res.render()
})



module.exports = router