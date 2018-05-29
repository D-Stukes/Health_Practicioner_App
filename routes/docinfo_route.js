const docinfoRoute = require('express').Router();


docinfoRoute.route('/docinfo')
  .get(
    docinfo_controller.getAllDocInfo,
    response_controller.sendOkResponse,
    response_controller.sendErrorResponse
  )

  module.exports = docinfoRoute;
