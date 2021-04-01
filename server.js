const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let westernStates = {

          'ekiti': {
                    capital: 'Ado-Ekiti',
                    governor: "Gov. Kayode Fayemi"
          },
          'lagos': {
                    capital: 'Ikeja',
                    governor: "Gov. Babajide Sanwo-Olu"
          },
          'ogun': {
                    capital: 'Abeokuta',
                    governor: "Gov. Dapo Abiodun"
          },
          'ondo': {
                    capital: 'Akure',
                    governor: "Gov. Rotimi Akeredolu"
          },
          'osun': {
                    capital: 'Osogbo',
                    governor: "Gov. Gboyega Oyetola"
          },
          'oyo': {
                    capital: 'Ibadan',
                    governor: "Gov. Seyi Makinde"
          },
           'undefined': {
                    capital: 'undefined',
                    governor: "undefined"
          }

}

app.get('/', (req, res) => {
          res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
          res.json(westernStates)          
})

app.get('/api/:stateName', (req, res) => {

          try {
                    let stateN = req.params.stateName.toLowerCase()
          
                    if(westernStates[stateN]){
                              res.json(westernStates[stateN])
                    }else {
                              res.json(`undefined`)
                    }
          }catch{err => 
                    console.error(err);
          }


})

app.listen(PORT, () => {
          console.log(`Server is working on port: ${PORT}`);
})