--Task 5
--Inserting student grades
INSERT INTO student_subject (student_id, subject_id, grade) VALUES
((SELECT id FROM student WHERE name = 'John'), (SELECT id FROM subject WHERE name = 'Algebra'), 3),
((SELECT id FROM student WHERE name = 'John'), (SELECT id FROM subject WHERE name = 'Biology'), 2),
((SELECT id FROM student WHERE name = 'John'), (SELECT id FROM subject WHERE name = 'World History'), 5),
((SELECT id FROM student WHERE name = 'Adam'), (SELECT id FROM subject WHERE name = 'Algebra'), 4),
((SELECT id FROM student WHERE name = 'Adam'), (SELECT id FROM subject WHERE name = 'Biology'), 3),
((SELECT id FROM student WHERE name = 'Adam'), (SELECT id FROM subject WHERE name = 'World History'), 2),
((SELECT id FROM student WHERE name = 'Lucy'), (SELECT id FROM subject WHERE name = 'Algebra'), 5),
((SELECT id FROM student WHERE name = 'Lucy'), (SELECT id FROM subject WHERE name = 'Biology'), 4),
((SELECT id FROM student WHERE name = 'Lucy'), (SELECT id FROM subject WHERE name = 'World History'), 3);
--Getting average grade for each subject
SELECT sub.name AS subject_name, AVG(ss.grade) AS average_grade
FROM student_subject ss
JOIN subject sub ON ss.subject_id = sub.id
WHERE sub.name = 'Algebra'
GROUP BY sub.name;

SELECT sub.name AS subject_name, AVG(ss.grade) AS average_grade
FROM student_subject ss
JOIN subject sub ON ss.subject_id = sub.id
WHERE sub.name = 'Biology'
GROUP BY sub.name;

SELECT sub.name AS subject_name, AVG(ss.grade) AS average_grade
FROM student_subject ss
JOIN subject sub ON ss.subject_id = sub.id
WHERE sub.name = 'World History'
GROUP BY sub.name;