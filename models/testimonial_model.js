const db = require('../config/connection');


function getAllTestimonials() {
    return db.any(`
      SELECT
        testimonials.id AS testimonial_id,
        testimonials.patient_fname,
        testimonials.patient_lname,
        testimonials.testimonial,
        testimonials.service_date,
        doc_services.id AS docs_services_id,
        doc_services.doc_fname,
        doc_services.doc_lname,
        doc_services.specialty,
        doc_services.insurance,
        doc_services.affiliations,
        doc_services.board_certs
        FROM doc_services
      JOIN testimonials
      ON testimonials.doc_id = doc_services.id`);
}


// test={ patient_fname:'Harry', patient_lname:'Shamoo', testimonial:'My legs do not swell so much anymore',service_date:'May 20 2018',doc_id: 1}

// createTestimonial(test)
// .then(data => {
//   console.log(data);

// })

function createTestimonial(testimonial) {
  console.log('testimonial', testimonial)
  return db.one(`
    INSERT INTO
    testimonials(patient_fname,
    patient_lname,
    testimonial,
    service_date, doc_id)
    VALUES ( $/patient_fname/, $/patient_lname/, $/testimonial/, $/service_date/, $/doc_id/)
    RETURNING *
  `, testimonial);
}

// test={ patient_fname:'Harry', patient_lname:'Shamoo', testimonial:'My legs do not swell so much anymore',service_date:'May 20 2018',doc_id: 1}

// createTestimonial(test)
// .then(data => {
//   console.log(data);

// })

function updateTestimonial(testimonial) {
  console.log('revised testimonial: ', testimonial)
  return db.one(`
    UPDATE testimonials
    SET testimonial = $/testimonial/
    WHERE testimonials.id = $/id/
    RETURNING *
    `, testimonial
  );
}



function destroyTestimonial(id) {
  return db.none
  (`DELETE FROM testimonials
    WHERE id = $1`,id)
}


module.exports = {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  destroyTestimonial
}
