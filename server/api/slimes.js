import { Router } from 'express'

const mysql = require('mysql')
const router = Router()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web'
})

router.get('/slimes/:category', function (req, res, next) {
  connection.query(`SELECT * from slimes WHERE category_id = ${req.params.category}`, function (error, results, fields) {
    if (error) throw error
    res.json({
      status: 200,
      error: null,
      slimes: results
    })
  })
})

/* GET user by ID. */
router.get('/slimes/get/:id', function (req, res, next) {
  const id = req.params.id
  connection.query(`SELECT * from slimes WHERE id = '${id}'`, function (error, results, fields) {
    if (error) throw error
    res.json({
      status: 200,
      error: null,
      slime: results[0]
    })
  })
})

export default router
