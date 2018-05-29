-- connect to database
\c docinfo_db
-- reference note: table setup in schemal.sql
-- CREATE TABLE doc_services(id SERIAL PRIMARY KEY, doc_fname VARCHAR(255), doc_lname VARCHAR(255) specialty VARCHAR(255), insurance VARCHAR(255) affiliations VARCHAR(255), board_certs VARCHAR(255);
-- CREATE TABLE testimonials(id SERIAL PRIMARY KEY, patient_fname VARCHAR(255), patient_lname VARCHAR(255), testimonial (TEXT), service_date DATE(255), doc_id INT REFERENCES doc_services(id) );

-- populate doc_services table with data
INSERT INTO doc_services
  (doc_fname, doc_lname, specialty, insurance, affiliations, board_certs)
VALUES
  ('Nora', 'Pregel', 'Primary, Family ','all major insurances', 'Downstate Medical Center, New York Methodist Hospital', 'American Board of Internal Medicine'),
  ('Joseph', 'Phillip', 'Internal Medicine','Aetna, Cigna', 'Downstate Medical Center, Mount Sinai Hospital', 'American Board of Internal Medicine'),
  ('Winsor', 'Collins', 'Internal Medicine','Blue Cross, Blue Shield', 'Weill Cornell Medical Center, New York Methodist Hospital', 'American Board of Internal Medicine'),
  ('Angelica', 'Henson', 'Gynecology','Health First, Cigna', 'Brooklyn Hospital, Lenox Hospital', 'American Board of Internal Medicine'),
  ('Susan', 'Polchaek', 'Dermatology','all major insurances', 'Lenox Hospital, Woodhull Hospital', 'American Board of Internal Medicine'),
  ('Carlos', 'Yeger', 'Cardiology','all major insurances', 'Downstate Medical Center, New York Methodist Hospital', 'American Board of Internal Medicine');

-- populate testimonials table with data
INSERT INTO testimonials
 (patient_fname, patient_lname, testimonial, service_date, doc_id)
VALUES
  ( 'Michael', 'Splitter', 'Best service ever!', 'May 24, 2018',5 ),
  ( 'Helen', 'Ham', 'My back feels a whole lot better','May 20, 2018', 1 ),
  ( 'Phoebe', 'Turbano', 'No more pain! Thank you.', 'May 15, 2018', 3 ),
  ( 'Harriet', 'Fluton', 'This clinic has the greatest staff and helped me through the recover process so nicely.', 'May 1, 2018', 4 ),
  ( 'Yolanda', 'Peares', 'My pacemaker has given me a new lease on life, thanks to wonderful medical care.', 'April 15, 2018', 6 ),
  ( 'Karen', 'Tollid', 'Accurate diagnosis and great medical help','February 23, 2018', 1 ),
  ( 'Jessica', 'Wandon', 'I did not need an operation after all due the excellent medical care I received','January 5, 2018', 2 ),
  ( 'Mark', 'Danello', 'The doctors here are so understanding and supportive.', 'December 29, 2017', 2 ),
  ( 'Brian', 'Cleveland', 'My blood pressure is back to normal and my circulation has improved.', 'November 19, 2017', 3 ),
  ( 'Damian', 'Helmam', 'I lost 100lbs with the help of this clinic', 'October 1, 2017', 4 );
