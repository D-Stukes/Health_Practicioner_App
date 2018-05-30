const db = require('../config/connection');

function getAllDocServiceInfo() {
  console.log(docinfo_id);
    return db.any(`
      SELECT * FROM doc_services`z
}


function getOneDocServiceInfo(docinfo_id) {
  console.log(docinfo_id);
    return db.any(`
      SELECT * FROM doc_services
      WHERE doc_services.id = $1
      `, doc_id;
}
module.exports = {
  getAllDocServicesInfo

}
