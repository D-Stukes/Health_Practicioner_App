const docinfoRoute = require('express').Router();
const docinfo_controller = require('../controllers/docinfo_controller');
const response_controller = require('../controllers/response_controller');



docinfoRoute.route('/docinfo')
  .get(
    docinfo_controller.getAllDocServicesInfo,
    response_controller.sendOkResponse,
    response_controller.sendErrorResponse
  )

  module.exports = docinfoRoute;
