SELECT * FROM test.users;
SELECT * FROM test.roles;
SELECT * FROM test.user_roles;
SELECT * FROM test.contents;

INSERT INTO test.contents
 VALUES (1, 'LE SSERAFIM (르세라핌) ''Impurities'' OFFICIAL M/V', 'Ccz123Jlflc', 'Ccz123Jlflc', NOW(), NOW());
update test.contents set description = 'XG - MASCARA (Performance Video)' where id = 1;

delete from test.contents where id = 1;
drop table test.contents;
