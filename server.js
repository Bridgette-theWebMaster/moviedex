require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const MOVIEDEX= require('./moviedex.json')

const app = express()

<<<<<<< HEAD
const morganSetting = process.env.NODE_ENV === 'production' ? 'tiny' : 'common'
app.use(morgan(morganSetting))
=======
app.use(morgan('dev'))
>>>>>>> b2e49765b7da5bd04963d1ca4edd6254ade98698
app.use(helmet())
app.use(cors())
app.use(function validationBearerToken(req, res, next) {
    const authToken= req.get('Authorization')
    const apiToken= process.env.API_TOKEN
    
<<<<<<< HEAD
=======
    console.log('validate bearer token middleware')
>>>>>>> b2e49765b7da5bd04963d1ca4edd6254ade98698

    if(!authToken || authToken.split(' ')[1] !== apiToken) {
        return res.status(401).json({ error : 'Unauthorized request'})
    }
    next()
})

const validGenres = [`animation`, `drama`, `romantic`, `comedy`, `spy`, `crime`, `thriller`, `adventure`, `documentary`, `horror`, `action`]
function handleGetGenre(req, res){
    res.json(validGenres)
}
app.get('/genre', handleGetGenre)

function handleGetCountry(req, res) {
    res.send('Hello, France!')
}
app.get('/country', handleGetCountry)

function handleGetVotes(req, res){
    res.send('Hello, voters')
}
app.get('/avg_vote', handleGetVotes)

app.get('/movie', function handleGetMovie(req, res) {
    let response = MOVIEDEX

    if(req.query.genre){
        response= response.filter(movie => 
            movie.genre.toLowerCase().includes(req.query.genre.toLowerCase())
        )
    }
    if(req.query.country){
        response= response.filter(movie =>
            movie.country.toLowerCase().includes(req.query.country.toLowerCase())
        )
    }
    if(req.query.avg_vote){
        response= response.filter(movie =>
            Number(movie.avg_vote) >= Number(req.query.avg_vote)
        )
    }
    res.json(response)
<<<<<<< HEAD
})

app.use((error, req, res, next) => {
    let response
    if(process.env.NODE_ENV === 'production') {
        response = { error: { message: 'server error'}}
    } else {
        response = { error }
    }
    res.status(500).json(response)
})

const PORT = process.env.PORT || 8000
=======
})


const PORT = 8000
>>>>>>> b2e49765b7da5bd04963d1ca4edd6254ade98698
app.listen(PORT, () => {
    console.log(`Server listening at https://localhost: ${PORT}`)
})