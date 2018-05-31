const docinfoModel = require('../models/docinfo_model');

function getAllDocServicesInfo(req, res, next) {
  docinfoModel.getAllDocServicesInfo()
    .then(data => {
      res.locals.docinfo = data;
      next();
    })
    .catch(next)
}
    module.exports = {getAllDocServicesInfo}
