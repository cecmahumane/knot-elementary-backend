CREATE DATABASE meetingsdb;

CREATE TABLE IF NOT EXISTS role(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50), 
    description VARCHAR(100)  
);

CREATE TABLE IF NOT EXISTS person(
    id SERIAL PRIMARY KEY,
    email VARCHAR(50), 
    first_name VARCHAR(25),
    last_name VARCHAR(25),
    role_id INT REFERENCES role (id)
);

CREATE TABLE IF NOT EXISTS appointment(
  id SERIAL PRIMARY KEY,
  time_created VARCHAR(50),
  person_id INT REFERENCES person (id)
);

CREATE TABLE IF NOT EXISTS comment(
  id SERIAL PRIMARY KEY,
  subject VARCHAR(100),
  content VARCHAR(1000),
  time_created VARCHAR(50),
  person_id INT REFERENCES person (id),
  appointment_id INT REFERENCES appointment (id)
);

CREATE TABLE IF NOT EXISTS student(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(25),
  last_name VARCHAR(25)
);

CREATE TABLE IF NOT EXISTS person_student(
  english VARCHAR(5),
  geography VARCHAR(5),
  math VARCHAR(5),
  science VARCHAR(5),
  physical_education VARCHAR(5),
  person_id INT REFERENCES person (id),
  student_id INT REFERENCES student (id)
);

INSERT INTO role(id, name, description)
VALUES (1, 'Admin', 'Has access to all database tables'),
       (2, 'Teacher', 'Has access to relevant database tables'),
       (3, 'Parent', 'Has access to relevant appointment tables');

INSERT INTO person(id, email, first_name, last_name, role_id)
VALUES (1, 'cecil@gmail.com', 'Cecil', 'Mahumane', 1),
       (2, 'emma@gmail.com', 'Emma', 'Bin', 2),
       (3, 'akshita@gmail.com', 'Ahkshita', 'Gupta', 2),
       (4, 'mike@gmail.com', 'Mike', 'Odnis', 3);

INSERT INTO student(id, first_name, last_name)
VALUES (1, 'Jaye', 'Baino'),
       (2, 'Jinglang', 'Zhao'),
       (3, 'Jesse', 'Heim');

INSERT INTO person_student(english, geography, math, science, physical_education, person_id, student_id)
VALUES ('A+', 'C', 'C+', 'B', 'B+', 2, 1),
       ('A+', 'C', 'C+', 'B', 'B+', 4, 1);

INSERT INTO appointment(id, person_id, time_created)
VALUES (1, 2, '2pm');

INSERT INTO comment(id, person_id, appointment_id, subject, content)
VALUES (1, 2, 1, 'My kid is smart', 'Thank you for giving my kid good grades');

