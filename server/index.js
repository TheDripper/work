
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const axios = require('axios')
const cheerio = require('cheerio')

app.use(bodyParser.json())
app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')




async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  
  app.post('/hit',async function(req,res,next){
        let { data } = await axios(req.body.hit)
        let text = []
        const $ = cheerio.load(data)
        $('p').each(function(index,elem){
        	text.push({text:$(this).text(),id:'graph'+index})
        })
	let sender = {
		text: text,
	}
	res.send(sender)
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)
  

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
