const express = require('express');
const router = express.Router();
const user = require('../models/model.planning');


router.get('/', async function(req, res, next) {
  try {
    res.send("User api");
  } catch (err) {
    console.error(`Error while getting stats page `, err.message);
    next(err);
  }
});

router.get('/all', async function(req, res, next) {
  try {
    res.json(await user.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting stats `, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    var id = parseInt(req.params.id);
    res.json(await user.getUserById(id));
  } catch (err) {
    console.error(`Error while getting stats `, err.message);
    next(err);
  }
});

module.exports = router;

