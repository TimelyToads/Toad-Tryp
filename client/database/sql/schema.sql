DROP DATABASE toads;
CREATE DATABASE IF NOT EXISTS toads;
USE toads;


CREATE TABLE IF NOT EXISTS users( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    username  VARCHAR(20) NOT NULL, 
    first_name VARCHAR(50) NOT NULL, 
    last_name VARCHAR(50) NOT NULL, 
    email VARCHAR(100), 
    password VARCHAR(512) NOT NULL, 
    img_url VARCHAR(1024), 
    phone_number VARCHAR(20), 
    salt_hash VARCHAR(512), 
    vin VARCHAR(50), 
    make VARCHAR(50), 
    model VARCHAR(50), 
    year VARCHAR(4), 
    type VARCHAR(50), 
    license_plate VARCHAR(20) 
    );

CREATE TABLE IF NOT EXISTS trips (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  driver_id INT NOT NULL,
  departure_date DATE,
  departure_time TIME,
  departure_address_line1 VARCHAR(100),
  departure_address_line2 VARCHAR (100),
  departure_city VARCHAR(50),
  departure_state VARCHAR(50),
  departure_zip INT(10),
  arrival_date DATE,
  arrival_time TIME,
  arrival_address_line1 VARCHAR(100),
  arrival_address_line2 VARCHAR (100),
  arrival_city VARCHAR(50),
  arrival_state VARCHAR(50),
  arrival_zip INT(10),
  seats INT(3),
  price INT(10),
  CONSTRAINT `fkusers_trips`
  FOREIGN KEY `fkusers_trips` (`driver_id`)
  REFERENCES `users` (`id`)
);

CREATE TABLE IF NOT EXISTS trips_toads (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  trip_id INT NOT NULL,
  user_id INT NOT NULL,
  CONSTRAINT `fktrip_trips`
  FOREIGN KEY `fktrip_trips` (`trip_id`)
  REFERENCES `trips` (`id`),
  CONSTRAINT `fktrip_users`
  FOREIGN KEY `fktrip_users` (`user_id`)
  REFERENCES `users` (`id`)
);