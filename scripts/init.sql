CREATE TABLE users (
  cpf SERIAL PRIMARY KEY,
  name varchar(50),
  lastname varchar(100),
  email varchar(100)
);

CREATE TABLE rooms (
  room_id SERIAL PRIMARY KEY,
  room_name varchar(200),
  status BOOLEAN,
  capacity INT
);

CREATE TABLE bookings (
  booking_id SERIAL PRIMARY KEY,
  user_id INT,
  room_id INT,
  start_date timestamp,
  end_date timestamp
);

ALTER TABLE bookings ADD FOREIGN KEY (user_id) REFERENCES users (cpf);

ALTER TABLE bookings ADD FOREIGN KEY (room_id) REFERENCES rooms (room_id);

INSERT INTO users (name, lastname, email)
VALUES ('Felipe', 'Karpovas Lisak','felipe.lisak@sou.inteli.edu.br'),
('Joseph', 'Mansur','joseph.mansur@sou.inteli.edu.br'),
('Lorenzo', 'Ferrari Aggio','lorezo.aggio@sou.inteli.edu.br')
