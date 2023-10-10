const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/:id', (req, res) => {
    if (req.params.id == 1) {
        res.json({
            "name": "Token Name",
            "description": "Description of the Token",
            "image": "https://collecttrumpcards.com/images/45-King-Hearts_145-King-Hearts.webp",
            "attributes": [
            {
            "trait_type": "Size",
            "value": "Large"
            },
            {
            "trait_type": "Color",
            "value": "Red"
            }
            ]
            });
    } else if (req.params.id == 2) {
        res.json({
            "name": "Token Name 2",
            "description": "Description of the Token",
            "image": "https://collecttrumpcards.com/images/45-GW_145-GW.webp",
            "attributes": [
            {
            "trait_type": "Size",
            "value": "Large"
            },
            {
            "trait_type": "Color",
            "value": "Red"
            }
            ]
            });
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});