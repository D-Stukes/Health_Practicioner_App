-- connect to database
\c docinfo_db

-- remove any records and start the id sequence back to 1
DROP TABLE IF EXISTS doc_services CASCADE;
DROP TABLE IF EXISTS testimonials CASCADE;

-- create tables - doc_services holds most of doc and service information, testimonials can be edited by clients
CREATE TABLE doc_services(id SERIAL PRIMARY KEY, doc_fname VARCHAR(255), doc_lname VARCHAR(255), specialty VARCHAR(255), insurance VARCHAR(255), affiliations VARCHAR(255), board_certs VARCHAR(255));
CREATE TABLE testimonials(id SERIAL PRIMARY KEY, patient_fname VARCHAR(255), patient_lname VARCHAR(255), testimonial TEXT, service_date DATE, doc_id INT REFERENCES doc_services(id) );
