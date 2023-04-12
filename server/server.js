const promBundle = require('express-prom-bundle')
const express = require('express')
const cors = require('cors')
const path = require('path')
const apiRoutes = require('./routes')

const port = 3000

const metricsMiddleware = promBundle({ includeMethod: true })

const avaApp = express()
avaApp.disable('x-powered-by')

avaApp.use(express.static(__dirname + '/../public'))

avaApp.use(metricsMiddleware)

avaApp.use(cors())
avaApp.use(express.json())
avaApp.use(express.urlencoded({ extended: false }))
apiRoutes(avaApp)

avaApp.use((req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.resolve(__dirname + '/../public/404/index.html'))
  }
})

avaApp.listen({ port }, () => {
  global.console.log(`🚀 webapp running at http://localhost:${port}`)
})
