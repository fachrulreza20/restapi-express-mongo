module.exports = (app) => {
    const posts = require('../controllers/post.controller.js')
    const router = require('express').Router()

    router.get('/', posts.findAll)
    router.post('/', posts.create)
    router.get('/:id', posts.findById)
    router.put('/:id', posts.update)
    router.delete('/:id', posts.delete)

    
    app.use('/api/posts', router)
    
}