import { Router } from 'express'

import categories from './categories'
import slimes from './slimes'
import order from './order'

const router = Router()

// Add USERS Routes
router.use(categories)
router.use(slimes)
router.use(order)

export default router
