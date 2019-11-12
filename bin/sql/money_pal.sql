CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(30),
	email VARCHAR(60) unique,
	password VARCHAR(20),
	phone VARCHAR(15),
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

CREATE TABLE incomes(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	i_name VARCHAR(50),
	i_amount NUMERIC(15, 2),
	cleared boolean,
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

CREATE TABLE expenses(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	e_name VARCHAR(50),
	e_amount NUMERIC(15, 2),
	cleared boolean,
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

CREATE TABLE reserve_fund(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	r_name VARCHAR(50),
	r_amount NUMERIC(15, 2),
	cleared boolean,
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

INSERT INTO users(username, email, password, phone, created_at)
VaLUES
('noi', 'noi@gmail.com', 1234, '510-111-1111', current_timestamp),
('mega', 'mega@gmail.com', 1234, '510-222-2222', current_timestamp),
('naomi', 'naomi@gmail.com', 1234, '510-333-3333', current_timestamp);

INSERT INTO incomes(user_id, i_name, i_amount, cleared, created_at)
VALUES(1, 'work at place 1', 400.25, 'yes', current_timestamp),
(2, 'work at place 1', 600.00, 'yes', current_timestamp),
(1, 'work at place 2', 200.75, 'yes', current_timestamp),
(3, 'work at place 1', 800.00, 'yes', current_timestamp),
(2, 'work at place 2', 320.75, 'yes', current_timestamp),
(1, 'work at place 3', 558.00, 'yes', current_timestamp),
(3, 'work at place 2', 1020.75, 'yes', current_timestamp),
(2, 'work at place 3', 1550.00, 'yes', current_timestamp);

INSERT INTO expenses(user_id, e_name, e_amount, cleared, created_at)
VALUES(1, 'gas', 40.25, 'yes', current_timestamp),
(2, 'groceries', 35.00, 'yes', current_timestamp),
(1, 'lunch', 12.75, 'yes', current_timestamp),
(3, 'rent', 800.00, 'yes', current_timestamp),
(2, 'rent', 1200.00, 'yes', current_timestamp),
(1, 'rent', 450.00, 'yes', current_timestamp),
(2, 'cake', 8.96, 'yes', current_timestamp),
(1, 'lunch', 8.00, 'yes', current_timestamp),
(3, 'dinner', 10.20, 'yes', current_timestamp),
(2, 'breakfast', 5.00, 'yes', current_timestamp),
(1, 'coffee', 3.25, 'yes', current_timestamp),
(3, 'lunch', 12.50, 'yes', current_timestamp),
(3, 'groceries', 75.25, 'yes', current_timestamp),
(2, 'cloths', 125.00, 'yes', current_timestamp);

INSERT INTO reserve_fund(user_id, r_name, r_amount, cleared, created_at)
VALUES(1, 'rent', 200.25, 'yes', current_timestamp),
(2, 'birthday', 35.00, 'yes',  current_timestamp),
(1, 'vacation', 12.75, 'yes',  current_timestamp),
(3, 'new car', 800.00, 'yes',  current_timestamp),
(2, 'rent', 400.00, 'yes',  current_timestamp);



INSERT INTO money_flow(user_id, name, amount, type, cleared)
VaLUES
(1, 'work1', 750, 'income', 'yes'),
(3, 'work1', 550, 'income', 'yes'),
(3, 'lunch', 10, 'expense', 'yes'),
(1, 'groceries', 35, 'expense', 'yes'),
(1, 'groceries', 15, 'expense', 'yes'),
(1, 'ice-cream', 5, 'expense', 'yes'),
(1, 'bart', 50, 'expense', 'yes'),
(2, 'work1', 250, 'income', 'yes'),
(2, 'work2', 600, 'income', 'yes'),
(2, 'bart', 30, 'expense', 'yes'),
(2, 'rent', 300, 'expense', 'yes'),
(3, 'lunch', 10, 'expense', 'yes'),
(2, 'groceries', 43.50, 'expense', 'yes'),
(3, 'rent', 350, 'expense', 'yes'),
(1, 'rent', 350, 'expense', 'yes');