const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userController = require('./controllers/userController');
app.use('/api/user', userController);

const categoryController = require('./controllers/categoryController');
app.use('/api/category', categoryController);

const itemController = require('./controllers/itemController');
app.use('/api/item', itemController);

const needController = require('./controllers/needController');
app.use('/api/need', needController);

const tierController = require('./controllers/tierController');
app.use('/api/tier', tierController);

const linkController = require('./controllers/linkController');
app.use('/api/link', linkController);

const cycleController = require('./controllers/cycleController');
app.use('/api/cycle', cycleController);

app.use('*', function (req, res) {
	res.redirect('/api/cycle');
});

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
