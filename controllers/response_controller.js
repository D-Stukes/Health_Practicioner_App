



function sendOkResponse(req, res) {
  res.json({
    status: 'ok',
    data: res.locals.testimonials || res.locals.docinfo
  })
}




function sendErrorResponse(err, req, res, next) {
  res.json({
    status: 'not ok',
    message: err.message
  })
}

module.exports = {
  sendOkResponse,
  sendErrorResponse
}



