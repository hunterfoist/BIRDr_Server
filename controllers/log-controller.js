const router = require('express').Router();
const Log = require('../db').import('../models/log-model');
const Image = require('../db').import('../models/gallery-model');

let validateSession = require('../middleware/validate-session');


router.post('/createlog', validateSession, (req, res) => {
  const createimage = {image_url: req.body.log.image_url};
  
  Image.create(createimage)
  .then(imagerecord => {
    
    const createLog = {
      species: req.body.log.species,
      location: req.body.log.location,
      time: req.body.log.time,
      date: req.body.log.date,
      rarity: req.body.log.rarity,
      image_id: imagerecord.id,
      owner_id: req.user.id,
      secret: req.body.log.secret
  
  } 
  Log.create(createLog)
  .then(log => res.status(200).json(log))
})
  .catch(err => res.status(500).json({error: err}))
  
});

router.get("/gallery", validateSession, (req, res) => { 
  const query = {where: {secret: false}}
  Log.findAll(query)
  .then(logs => res.status(200).json(logs))
  .catch(err => res.status(500).json({error: err}))
});

router.get("/getlogs", validateSession, (req, res) => {
  let owner_id = req.user.id
  Log.findAll({
    where: {owner_id: owner_id}
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
    image_id: req.body.log.image_id,
    owner_id: req.body.log.owner_id,
    secret: req.body.log.secret
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