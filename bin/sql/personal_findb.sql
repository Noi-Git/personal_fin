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
	started DATE,
	ended DATE,
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

INSERT INTO money_flow(user_id, name, amount, started, ended, type, cleared)
VaLUES
(1, 'work1', 750, '2019-10-01', '2019-10-15', 'income', 'yes'),
(3, 'work1', 550, '2019-10-01', '2019-10-10', 'income', 'yes'),
(3, 'lunch', 10, '2019-10-03', '2019-10-03', 'expense', 'yes'),
(1, 'groceries', 35, '2019-10-08', '2019-10-08', 'expense', 'yes'),
(1, 'groceries', 15, '2019-10-03', '2019-10-03', 'expense', 'yes'),
(1, 'ice-cream', 5, '2019-10-12', '2019-10-12', 'expense', 'yes'),
(1, 'bart', 50, '2019-10-13', '2019-10-13', 'expense', 'yes'),
(2, 'work1', 250, '2019-10-01', '2019-10-15', 'income', 'yes'),
(2, 'work2', 600, '2019-10-01', '2019-10-15', 'income', 'yes'),
(2, 'bart', 30, '2019-10-13', '2019-10-13', 'expense', 'yes'),
(2, 'rent', 300, '2019-10-01', '2019-10-01', 'expense', 'yes'),
(3, 'lunch', 10, '2019-10-05', '2019-10-05', 'expense', 'yes'),
(2, 'groceries', 43.50, '2019-10-14', '2019-10-14', 'expense', 'yes'),
(3, 'rent', 350, '2019-10-01', '2019-10-01', 'expense', 'yes'),
(1, 'rent', 350, '2019-10-01', '2019-10-01', 'expense', 'yes');

SELECT SUM(amount)
FROM money_flow
WHERE user_id=1 AND type='income';

SELECT name, amount
FROM money_flow
WHERE user_id=2 AND type='expense';

SELECT started, ended
FROM money_flow
WHERE user_id=2 AND type='income';

SELECT SUM(ended - started)
FROM money_flow
WHERE user_id=2 AND type='income';

/* === doesn't work ===
SELECT SUM(amount / (ended - started)) AS total_day
FROM money_flow
WHERE user_id=1 AND type='income'; 
*/

SELECT name, amount, ended - started AS totaldays, amount/(ended - started) AS perday
FROM money_flow
WHERE user_id=1 AND type='income';

SELECT name, amount, ended - started AS totaldays, round(amount/(ended - started)) AS perday
FROM money_flow
WHERE user_id=1 AND type='income';

SELECT name, amount, ended - started AS totaldays, round(amount/(ended - started),2) AS perday
FROM money_flow
WHERE user_id=1 AND type='income';