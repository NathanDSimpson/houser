module.exports = {
    getProperties: async (req, res) => {
        const db = req.app.get('db')
        db.readAll()
        .then( response => {
            res.status(200).send(response)
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Nate you made an error!"});
            console.log(err)
          } );
    },
    addProperty: async (req, res) => {
        const db = req.app.get('db')
        const newProperty = req.body
        console.log('1111111111', newProperty)

        await db.addProperty(newProperty)
        .then( response => {
            res.status(200).send(response)
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Nate you made an error!"});
            console.log(err)
          } );
    }
}