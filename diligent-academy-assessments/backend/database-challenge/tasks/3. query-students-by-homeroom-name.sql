--Task 3
--Querying 9A
SELECT s.name 
FROM student s
JOIN homeroom h ON s.homeroom_id = h.id
WHERE h.name = '9A';
--Querying 9B

SELECT s.name 
FROM student s
JOIN homeroom h ON s.homeroom_id = h.id
WHERE h.name = '9B';