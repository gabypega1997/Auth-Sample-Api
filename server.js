const express = require('express');


const port = "8080";
const app = express();

app.use(express.json());

app.get("/tshirt", (req, res )=> {
    res.status(200).send({
        tshirty: 'ts',
        size: "large"
    })
})

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        tshirt: `ts with your ${logo} and ID of ${id}`
    })

})



app.listen(port, () => {
    console.log(`app is running on port http://localhost:${port}`)
})