const validateEmail = (req, res, next) => {
    const { email } = req.body;
    if (!email || email === undefined) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    if (!password || password === undefined) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length <= 6) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
};

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || authorization === undefined) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    next();
};

const validateNome = (req, res, next) => {
    const { name } = req.body;
    if (!name || name === undefined) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
};

const validateAge = (req, res, next) => {
    const { age } = req.body;
    if (!age || age === undefined) {
        return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
        return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
};

const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    if (!talk || talk === undefined) {
        return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
    if (!talk || talk === undefined) {
        return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
    next();
};

const validateWatchedAt = (req, res, next) => {
    const { talk } = req.body;
    const { watchedAt } = talk;
    if (!watchedAt || watchedAt === undefined) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    if (!dateRegex.test(watchedAt)) {
        return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

const validateRate = (req, res, next) => {
    const { talk } = req.body;
    const { rate } = talk;
    if (rate === undefined) {
        return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    if (rate < 1 || rate > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
};
module.exports = { 
    validateEmail, 
    validatePassword, 
    validateToken, 
    validateNome, 
    validateAge,
    validateTalk,
    validateWatchedAt, 
    validateRate,
    
};
