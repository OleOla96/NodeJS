SELECT * FROM test.users;
SELECT * FROM test.roles;
SELECT * FROM test.user_roles;
SELECT * FROM test.public_contents;
SELECT * FROM test.private_contents;

INSERT INTO test.public_contents
 VALUES (1, 'LE SSERAFIM (르세라핌) ''Impurities'' OFFICIAL M/V', 'Ccz123Jlflc', 'Ccz123Jlflc', NOW(), NOW());
update test.public_contents set linkImage = 'https://files.fullstack.edu.vn/f8-prod/courses/6.png' where id = 4;

delete from test.public_contents where id = 1;
drop table test.private_contents;