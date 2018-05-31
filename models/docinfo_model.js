const db = require('../config/connection');

function getAllDocServicesInfo() {
    return db.any(`
      SELECT * FROM doc_services`);
}


function getOneDocServiceInfo(id) {
    return db.any(`
      SELECT * FROM doc_services
      WHERE doc_services.id = $1
      `, docservices_id);
}
module.exports = {
  getAllDocServicesInfo

}
