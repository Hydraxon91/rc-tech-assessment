-- Creating students table
-- INIT db
CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
--Insert students into table
INSERT INTO student (name, email) VALUES
('John', 'john@school.com'),
('Adam', 'adam@school.com'),
('Lucy', 'lucy@school.com');