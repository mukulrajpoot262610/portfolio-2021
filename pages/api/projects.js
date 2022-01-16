const fs = require('fs');

export default async function handler(req, res) {
    const example = fs.readFileSync('./example.json');
    return res.status(200).json({ example });
}
