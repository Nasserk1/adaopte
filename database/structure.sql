drop database if exists adaopte;
create database adaopte;
use adaopte;

create table types (
    id int primary key auto_increment,
    name VARCHAR(50) NOT NULL
);

create table breeds (
    id int primary key auto_increment,
    name VARCHAR(50) NOT NULL,
    type_id int NOT NULL,
    CONSTRAINT fk_breeds_type_id FOREIGN KEY (type_id) REFERENCES types(id)
);

create table shelters (
    id int primary key auto_increment,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    zip_code VARCHAR(5) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL
);

 create table animals (
    id int primary key auto_increment,
    name varchar(50) NOT NULL,
    age int NOT NULL,
    breed_id int NOT NULL,
    gender ENUM('female','male') NOT NULL,
    description text NULL,
    imageUrl VARCHAR(50) NOT NULL,
    size ENUM('small','medium','large') NOT NULL,
    good_with_kids ENUM('yes','no','undefined') NOT NULL default 'undefined',
    good_with_animals ENUM('yes','no','undefined') NOT NULL default 'undefined',
    arrival_date DATE NOT NULL,
    shelter_id INT NOT NULL,
    CONSTRAINT fk_animals_shelter_id FOREIGN KEY (shelter_id) REFERENCES shelters(id),
    CONSTRAINT fk_animals_breed_id FOREIGN KEY (breed_id) REFERENCES breeds(id)
);

create table medicals_infos (
    id int primary key auto_increment,
    vaccinated boolean,
    sterilized boolean,
    microshipped boolean,
    last_checkup date,
    medical_notes mediumtext NULL,
    animal_id int NOT NULL,
    CONSTRAINT fk_medicals_infos_animal_id FOREIGN KEY (animal_id) REFERENCES animals(id)
);

create table adoption_requests (
    id int primary key auto_increment,
    animal_id int NOT NULL,
    CONSTRAINT fk_adoption_requests_animal_id FOREIGN KEY (animal_id) REFERENCES animals(id)
);