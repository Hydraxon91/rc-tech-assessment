--Task 4
-- Creating subject table
CREATE TABLE subject (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
-- Inserting values into table
INSERT INTO subject (name) VALUES
('Algebra'),
('Biology'),
('World History');
-- Creating a student subject table that stores grades, student id and subject id
CREATE TABLE student_subject (
    student_id INT NOT NULL,
    subject_id INT NOT NULL,
    grade INT CHECK (grade BETWEEN 1 AND 5),
    PRIMARY KEY (student_id, subject_id),
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (subject_id) REFERENCES subject(id)
);
