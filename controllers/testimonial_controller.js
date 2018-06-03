const testimonialsModel = require('../models/testimonial_model');

function getAllTestimonials(req, res, next) {
  testimonialsModel.getAllTestimonials()
    .then(data => {
      res.locals.testimonials = data;
      // console.log('testimonials_controllers: ', data);
      next();
    })
    .catch(next)
}
function addNewTestimonial(req, res, next) {
  // req.body.id = res.locals.testimonials.id;
  console.log(req.body);
  testimonialsModel.createTestimonial(req.body)
  .then(data => {
    console.log('this is data', data)
    res.locals.testimonials = data;
    console.log(data);
    next();
  })
  .catch(next);
}

function updateTestimonial(req, res, next) {
  req.body.id = req.params.id;
  testimonialsModel.updateTestimonial(req.body)
  .then((data) => {
    console.log('this is the updated testimony data', data)
    res.locals.testimonials = data;
    next();
  })
}
function deleteTestimonial(req, res, next) {
  testimonialsModel.destroyTestimonial(req.params.id)
  .then(data => {
    console.log('deleted data: ', data)
    next()
  })
  .catch(next);
}


module.exports = {
  getAllTestimonials,
  addNewTestimonial,
  updateTestimonial,
  deleteTestimonial

}
