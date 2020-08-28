const router = require('express').Router()

router.use('/api', require('./drinkRoutes.js'))
router.use('/api', require('./beanRoutes.js'))
router.use('/api', require('./syrupRoutes.js'))
router.use('/api', require('./toppingRoutes.js'))

module.exports = router
