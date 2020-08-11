const Product = require('../models/product.model')
const Response = require('../utils/jsonResponse')

class ProductController {
    static async getData(req, res) {
        // we get this passed from the Product middleware
        const query = req.structuredQuery
        console.log(query)
        await Product.find(query)
            .then((data) => {
                console.log(data)
                if (data == null || data.length < 1) {
                    return res.status(404).send(
                        Response({ isSuccess: false, message: "No results were found" })
                    );
                }

                res.status(200).send(Response({ isSuccess: true, data }))
            })
            .catch((message) => {
                res.status(400).send(Response({ isSuccess: false, message }))

            })

    }


    static async seed(req, res) {
        await Product.insertMany(req.body)
            .then(response => {
                res.status(201).send(response)
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

module.exports = ProductController