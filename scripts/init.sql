CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(50),
  lastname varchar(100),
  email varchar(100),
  isAdmin  BOOLEAN DEFAULT false,
  password varchar(36)
);

CREATE TABLE IF NOT EXISTS rooms (
  room_id SERIAL PRIMARY KEY,
  room_name varchar(200),
  status varchar(10),
  capacity INT
);

CREATE TABLE IF NOT EXISTS bookings (
  booking_id SERIAL PRIMARY KEY,
  user_id INT,
  room_id INT,
  start_date timestamp,
  end_date timestamp,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (room_id) REFERENCES rooms (room_id)
);

CREATE TABLE IF NOT EXISTS "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid");

CREATE INDEX "IDX_session_expire" ON "session" ("expire");

INSERT INTO users (name, lastname, email, isAdmin)
VALUES 
  ('Felipe', 'Karpovas Lisak','felipe.lisak@sou.inteli.edu.br', true),
  ('Joseph', 'Mansur','joseph.mansur@sou.inteli.edu.br', false),
  ('Lorenzo', 'Ferrari Aggio','lorezo.aggio@sou.inteli.edu.br', false);

INSERT INTO rooms (room_name, status, capacity)
VALUES 
  ('R01', 'Free', 8),
  ('R02', 'Free', 10),
  ('R03', 'Free', 5);

INSERT INTO bookings (user_id, room_id, start_date, end_date)
VALUES 
  (1, 1, TO_TIMESTAMP(1748257200), TO_TIMESTAMP(1748260800)),
  (1, 2, TO_TIMESTAMP(1748260800), TO_TIMESTAMP(1748264400)),
  (1, 3, TO_TIMESTAMP(1748264400), TO_TIMESTAMP(1748268000));
