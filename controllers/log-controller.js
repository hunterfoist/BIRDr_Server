const router = require('express').Router();
const Log = require('../db').import('../models/log-model');

let validateSession = require('../middleware/validate-session');

router.post('/createlog', validateSession, (req, res) => {
  const createLog = {
    species: req.body.log.species,
    location: req.body.log.location,
    time: req.body.log.time,
    date: req.body.log.date,
    rarity: req.body.log.rarity,
    // NEED IMAGE ID*****
  } 
  Log.create(createLog)
  .then(log => res.status(200).json(log))
  .catch(err => res.status(500).json({error: err}))
  
});

router.get("/getlogs", validateSession, (req, res) => {
  Log.findAll()
  .then(logs => res.status(200).json(logs))
  .catch(err => res.status(500).json({error: err}))
});

router.get("/getlogs/:id", validateSession, (req, res) => {
  let id = req.params.id
  Log.findAll({
    where: {id: id}
})
  .then(logs => res.status(200).json(logs))
  .catch(err => res.status(500).json({error: err}))
});

router.put('/updatelog/:id', validateSession, function(req, res) {
  const updateLogs = {
    species: req.body.log.species,
    location: req.body.log.location,
    time: req.body.log.time,
    date: req.body.log.date,
    rarity: req.body.log.rarity,
    // NEED IMAGE ID*****
  };
  const query = { where: {id: req.params.id}};

  Log.update(updateLogs, query)
  .then((logs) => res.status(200).json(logs))
  .catch((err) => res.status(500).json({error: err}));
})


router.delete('/deletelog/:id', validateSession, function(req, res) {
const query = { where: { id: req.params.id, owner_id: req.user.id}};
Log.destroy(query)
.then((response) =>
res.status(200).json({
  message: "Log Has Been Deleted",
})
)
.catch((err) => res.status(500).json({ error: err }));
});
module.exports = router;