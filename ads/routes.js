const Ads = require('./model')
const { Router } = require('express')

const router = new Router()

router.get('/', (req, res) => {
    Ads
        .findAll()
            .then(ads => res.send(ads))
            .catch(console.error)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Ads
        .findByPk(id)
            .then(ad => res.send(ad))
})

router.post('/', (req, res)=> {
    Ads
        .create(req.body)
        .then(ad => {
            return res.status(201)
                   .send(
                       {message:'ad created',ad:ad}
                       )
        })
})
module.exports = router