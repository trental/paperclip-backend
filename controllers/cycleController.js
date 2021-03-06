const express = require('express');
const router = express.Router();

const Cycle = require('../models/Cycle');
const User = require('../models/User');
const Tier = require('../models/Tier');
const Link = require('../models/Link');

router.get('/:cycleId/link', (req, res) => {
	Link.find({ cycle: req.params.cycleId }).then((allLinks) => {
		res.json(allLinks);
	});
});

router.get('/', (req, res) => {
	Cycle.find().then((allCycles) => {
		res.json(allCycles);
	});
});

router.get('/:userId', (req, res) => {
	User.findById(req.params.userId).then((user) => {
		res.json(user.cycle);
	});
});

module.exports = router;
