const express = require('express')

const app = express()

// setup view engine with ejs
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let text = "Hello world";
    let dataSiswa = [
        {nama: "Dimas", age: 19},
        {nama: "Rumondang", age: 20},
        {nama: "Chris", age: 21},
    ]

    res.render('pages/home', {
        text: text,
        dataSiswa: dataSiswa
    })
})

app.get('/about', (req, res) => {
    let text2 = "STUDENT BIOGRAPHY";
    let hobbies = ["Music", "Books", "Alcohol"]
    let biography = {
        name: 'Chris',
        age: 27,
        address: 'DKI Jakarta, Indonesia',
    }

    res.render('pages/about', {
        text2: text2,
        biography: biography,
        hobbies: hobbies
    })
})

app.listen(5000, () => {
    console.log('Server is running');
})