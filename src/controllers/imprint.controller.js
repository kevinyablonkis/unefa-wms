const db = require('../../db/connection');

const controller = {}

controller.index = (req,res) => {
    const darkMode = req.cookies.darkMode === 'enabled';
    res.render('imprint', { darkMode });
}

module.exports = controller;