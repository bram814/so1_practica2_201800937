-- ESTUDENT
create table ESTUDIANTE(

    name varchar(50),
    carnet varchar(50)

);

-- RAM
CREATE  TABLE RAM(
    id_ram int AUTO_INCREMENT,
    total int,
    free int,
    used int,
    PRIMARY KEY (id_ram)

);

-- CPU
CREATE TABLE CPU(
    pid int,
    name varchar(50),
    state int,
    user varchar(50),
    ram int,
    parent int
);


-- DELETE TABLE
DELETE FROM ESTUDIANTE;
DELETE FROM RAM;
DELETE FROM CPU;
-- DROP TABLE
DROP TABLE ESTUDIANTE;
DROP TABLE RAM;
DROP TABLE CPU;