const docinfoModel = require('../models/docinfo_model');

function getAllDocInfo(req, res, next) {
  console.log('res',res.locals.docservices);
  docinfoModel.getAllDocInfo(res.locals.docservices.id)
    .then(data => {
      res.locals.docservices = data;
      console.log('docinfo_controller: ', data);
      next();
    })
    .catch(next)


    module.exports = {getAllDocInfo}
