const fs = require('fs').promises;
const crypto = require('crypto');

const readerFile = async () => {
    const data = await JSON.parse(await fs.readFile(`${__dirname}/../talker.json`, 'utf-8'));
    return data;
};

const saveFile = async (data) => {
    await fs.writeFile(`${__dirname}/../talker.json`, JSON.stringify(data));
};

const generateToken = () => {
    const token = crypto.randomBytes(8).toString('hex');
    return token;
};

module.exports = { readerFile, saveFile, generateToken };