CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(255),
	email VARCHAR(255) unique,
	password VARCHAR(255),
	phone VARCHAR(15),
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

CREATE TABLE money_flow(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	name VARCHAR(255),
	amount NUMERIC,
	type VARCHAR(255),
	cleared boolean,
	created_at TIMESTAMP,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

INSERT INTO users(username, email, password, phone)
VaLUES
('noi', 'noi@gmail.com', 1234, '510-111-1111'),
('mega', 'mega@gmail.com', 1234, '510-222-2222'),
('naomi', 'naomi@gmail.com', 1234, '510-333-3333');

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

