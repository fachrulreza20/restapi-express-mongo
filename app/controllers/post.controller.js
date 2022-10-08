const db = require('../models/index.js')
const Post = db.posts

exports.findAll = (req,res) => {
    Post.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        res.status(500)
        res.send({
            message: err.message || "dataerror"
        })   
    });
}

exports.create = (req,res) => {

    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published ? req.body.published : false
    })

    post.save(post)
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.status(409)
                        .send({message: err.message ||   "create failed! "})
        })    

}

exports.findById = (req, res) => {

    const id = req.params.id

    Post.findById(id)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(409)
            res.send({
                message: "data not fuond" 
            })
        });
}

exports.update = (req,res) => {

    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
    .then((result) => {
         if(!result){
            res.send({message: "Data tidak ditemukan."})
         }else{
            res.send({message: "Data berhasil di update."})
         }
    }).catch((err) => {
        res.status(409)
        res.send({
            message: "data not fuond"
        })
       
    });
}

exports.delete = (req, res) => {

    const id = req.params.id

    Post.findByIdAndRemove(id, req.body)
        .then((result) => {
            if (!result) {
                res.send({ message: "Data tidak ditemukan." })
            } else {
                res.send({ message: "Data berhasil di hapus." })
            }
        }).catch((err) => {
            res.status(409)
            res.send({
                message: "data not fuond"
            })

        });
}
