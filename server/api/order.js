import { Router } from 'express'

const mysql = require('mysql')
const router = Router()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web'
})

router.get('/order', function (req, res, next) {
  connection.query(`SELECT * from slimes WHERE category_id = ${req.params.category}`, function (error, results, fields) {
    if (error) throw error
    res.json({
      status: 200,
      error: null,
      slimes: results
    })
  })
})

export default router
