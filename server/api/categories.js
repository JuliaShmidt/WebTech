import { Router } from 'express'

const mysql = require('mysql')
const router = Router()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web'
})

router.get('/categories', function (req, res, next) {
  connection.query('SELECT * from categories', function (error, results, fields) {
    if (error) throw error
    res.json({
      status: 200,
      error: null,
      categories: results
    })
  })
})

/* GET user by ID. */
router.get('/categories/:alias', function (req, res, next) {
  const alias = req.params.alias
  connection.query(`SELECT * from categories WHERE alias = '${alias}'`, function (error, results, fields) {
    if (error) throw error
    if (!results.length) res.sendStatus(404)
    res.json({
      status: 200,
      error: null,
      category: results[0]
    })
  })
})

export default router
