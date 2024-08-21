--task 2
--creating homeroom table
CREATE TABLE homeroom (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);
-- Inserting values into homeroom table
INSERT INTO homeroom (name) VALUES
('9A'),
('9B');
-- Altering students table
ALTER TABLE student ADD COLUMN homeroom_id INT;
ALTER TABLE student ADD FOREIGN KEY (homeroom_id) REFERENCES homeroom(id);
-- Updating students table
UPDATE student SET homeroom_id = (SELECT id FROM homeroom WHERE name = '9A') WHERE name IN ('John', 'Adam');
UPDATE student SET homeroom_id = (SELECT id FROM homeroom WHERE name = '9B') WHERE name = 'Lucy';
