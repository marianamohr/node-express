const express = require('express');
const { readerFile, saveFile } = require('../utils');
const { 
    validateToken, 
    validateNome, 
    validateAge, 
    validateTalk, 
    validateWatchedAt, 
    validateRate,
} = require('../midlewares/index');

const router = express.Router();

router.get('/', async (_req, res) => {
    const data = await readerFile();
    return res.status(200).send(data);
});

router.get('/search', validateToken, async (req, res) => {
    const { q } = req.query;
    const data = await readerFile();
    const talker = data.filter((item) => item.name.includes(q));
    console.log(talker);
    return res.status(200).send(talker);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await readerFile();
    const [talkerFiltred] = data.filter((talker) => talker.id === Number(id));
    if (!talkerFiltred) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
   return res.status(200).json(talkerFiltred);
});

router.post('/', 
    validateToken,
    validateNome, 
    validateAge, 
    validateTalk, 
    validateWatchedAt,
    validateRate, 
    async (req, res) => {
    const talker = req.body;
    const data = await readerFile();
    const newTalker = { ...talker, id: data.length + 1 };
    data.push(newTalker);
    await saveFile(data);
    return res.status(201).json(newTalker);
});

router.put('/:id', 
    validateToken,
    validateNome, 
    validateAge, 
    validateTalk, 
    validateWatchedAt,
    validateRate, 
    async (req, res) => {
    const talker = req.body;  
    const { id } = req.params;
    const data = await readerFile();
    const index = data.findIndex((item) => item.id === Number(id)); 
    const idAtual = data[index].id;
    const newTalker = { ...talker, id: idAtual };
    data[index] = newTalker;
    await saveFile(data);
    return res.status(200).json(newTalker);
});

 router.delete('/:id', 
    validateToken,
    async (req, res) => {
    const { id } = req.params;
    const data = await readerFile();
    const newTalkers = data.filter((item) => item.id !== Number(id)); 
    await saveFile(newTalkers);
    return res.status(204).send();
});

  module.exports = router;