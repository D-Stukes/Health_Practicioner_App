const testimonialsModel = require('../models/testimonial_model');

function getAllTestimonials(req, res, next) {
  console.log('req, req.params.id',req.params.id);
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
  req.body.id = res.locals.testimonials.id;
  testimonialsModel.updateTestimonial(req.body)
  .then((data) => {
    console.log('this is the updated testimony data', data)
    res.locals.testimonials = data;
    next();
  })
}
function deleteTestimonial(req, res, next) {
  req.body.id = res.locals.testimonials.id;
  console.log(req.body)
  testimonialsModel.deleteTestimonial(req.body)
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
