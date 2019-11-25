-- connect to database 
-- $psql -U node_user money_pal

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	username VARCHAR(90),
	email VARCHAR(60),
	sub VARCHAR(100) unique,
	created_at TIMESTAMP default current_timestamp,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

CREATE TABLE incomes(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id) NOT NULL,
	i_name VARCHAR(50),
	i_amount NUMERIC(15, 2),
	cleared boolean,
	created_at TIMESTAMP default current_timestamp,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP 
);

CREATE TABLE expenses(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id) NOT NULL,
	e_name VARCHAR(50),
	e_amount NUMERIC(15, 2),
	cleared boolean,
	created_at TIMESTAMP default current_timestamp,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP 
);

CREATE TABLE reserve_fund(
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id) NOT NULL,
	r_name VARCHAR(50),
	r_amount NUMERIC(15, 2),
	cleared boolean,
	created_at TIMESTAMP default current_timestamp,
	updated_at TIMESTAMP,
	deleted_at TIMESTAMP
);

INSERT INTO users(username, email, password, phone, created_at)
VaLUES
('noi', 'noi@gmail.com', 1234, '510-111-1111', current_timestamp),
('mega', 'mega@gmail.com', 1234, '510-222-2222', current_timestamp),
('naomi', 'naomi@gmail.com', 1234, '510-333-3333', current_timestamp);

INSERT INTO incomes(user_id, i_name, i_amount, cleared, created_at)
VALUES(7, 'work at place 1', 400.25, 'yes', current_timestamp),
(8, 'work at place 1', 600.00, 'yes', current_timestamp),
(7, 'work at place 2', 200.75, 'yes', current_timestamp),
(9, 'work at place 1', 800.00, 'yes', current_timestamp),
(8, 'work at place 2', 320.75, 'yes', current_timestamp),
(7, 'work at place 3', 558.00, 'yes', current_timestamp),
(9, 'work at place 2', 1020.75, 'yes', current_timestamp),
(8, 'work at place 3', 1550.00, 'yes', current_timestamp);

INSERT INTO expenses(user_id, e_name, e_amount, cleared, created_at)
VALUES(7, 'gas', 40.25, 'yes', current_timestamp),
(7, 'groceries', 35.00, 'yes', current_timestamp),
(8, 'lunch', 12.75, 'yes', current_timestamp),
(7, 'rent', 800.00, 'yes', current_timestamp),
(9, 'rent', 1200.00, 'yes', current_timestamp),
(9, 'rent', 450.00, 'yes', current_timestamp),
(8, 'cake', 8.96, 'yes', current_timestamp),
(7, 'lunch', 8.00, 'yes', current_timestamp),
(8, 'dinner', 10.20, 'yes', current_timestamp),
(8, 'breakfast', 5.00, 'yes', current_timestamp),
(7, 'coffee', 3.25, 'yes', current_timestamp),
(9, 'lunch', 12.50, 'yes', current_timestamp),
(9, 'groceries', 75.25, 'yes', current_timestamp),
(8, 'cloths', 125.00, 'yes', current_timestamp);

INSERT INTO reserve_fund(user_id, r_name, r_amount, cleared, created_at)
VALUES(7, 'rent', 200.25, 'yes', current_timestamp),
(8, 'birthday', 35.00, 'yes',  current_timestamp),
(7, 'vacation', 12.75, 'yes',  current_timestamp),
(9, 'new car', 800.00, 'yes',  current_timestamp),
(8, 'rent', 400.00, 'yes',  current_timestamp);



INSERT INTO money_flow(user_id, name, amount, type, cleared)
VaLUES
(7, 'work1', 750, 'income', 'yes'),
(9, 'work1', 550, 'income', 'yes'),
(9, 'lunch', 10, 'expense', 'yes'),
(7, 'groceries', 35, 'expense', 'yes'),
(7, 'groceries', 15, 'expense', 'yes'),
(7, 'ice-cream', 5, 'expense', 'yes'),
(7, 'bart', 50, 'expense', 'yes'),
(8, 'work1', 250, 'income', 'yes'),
(8, 'work2', 600, 'income', 'yes'),
(8, 'bart', 30, 'expense', 'yes'),
(8, 'rent', 300, 'expense', 'yes'),
(9, 'lunch', 10, 'expense', 'yes'),
(8, 'groceries', 43.50, 'expense', 'yes'),
(9, 'rent', 350, 'expense', 'yes'),
(7, 'rent', 350, 'expense', 'yes');


-- Aggregation query
-- Uncorreated
SELECT user_id, SUM(i_amount) AS total_income FROM incomes GROUP BY user_id;
SELECT user_id, SUM(e_amount) AS total_expense FROM expenses GROUP BY user_id;
SELECT user_id, SUM(r_amount) AS total_reserve FROM reserve_fund GROUP BY user_id;

SELECT inco.user_id, inco.i_name, inco.i_amount, inco.cleared, inco2.total_income
FROM incomes AS inco
INNER JOIN
(SELECT user_id, SUM(i_amount) AS total_income 
 FROM incomes 
 GROUP BY user_id) AS inco2 
 ON inco.user_id = inco2.user_id;
 
SELECT user_id, SUM(i_amount) FROM incomes GROUP BY user_id;

SELECT t1.column, t2.column, t3.column FROM table1 t1
JOIN table2 t2 ON t1.column = t2.column
JOIN table3 t3 ON t3.column = t2.column;


-- select from 3 tables
SELECT inco.i_amount, expe.e_amount, rese.r_amount FROM incomes inco
JOIN expenses expe ON inco.user_id = expe.user_id
JOIN reserve_fund rese ON rese.user_id = expe.user_id
GROUP BY user_id;


SELECT inco.user_id, inco.i_amount, inco2.total_income, expe.e_amount, expe.total_expense, res.r_amount, res.total_reserve
FROM incomes AS inco
INNER JOIN
(SELECT user_id, SUM(i_amount) AS total_income 
 FROM incomes 
 GROUP BY user_id) AS inco2 
 ON inco.user_id = inco2.user_id;
INNER JOIN
(SELECT user_id, SUM(e_amount) AS total_expense
 FROM expenses 
 GROUP BY user_id) AS expe 
 ON expe.user_id = inco2.user_id
INNER JOIN
(SELECT user_id, SUM(r_amount) AS total_reserve
 FROM reserve_fund 
 GROUP BY user_id) AS res 
 ON res.user_id = inco2.user_id;

 -- working incomes and expenses
 SELECT inco.user_id, inco.i_amount, inco2.total_income, expe.total_expense
FROM incomes AS inco
INNER JOIN
(SELECT user_id, SUM(i_amount) AS total_income 
 FROM incomes 
 GROUP BY user_id) AS inco2 
 ON inco.user_id = inco2.user_id
INNER JOIN
(SELECT user_id, SUM(e_amount) AS total_expense
 FROM expenses 
 GROUP BY user_id) AS expe 
 ON expe.user_id = inco2.user_id;

 -- this one get all 3 working
 SELECT inco.user_id, inco.i_amount, inco2.total_income, expe.e_amount, expe.total_expense, res.r_amount, res.total_reserve
FROM incomes AS inco
INNER JOIN
(SELECT user_id, SUM(i_amount) AS total_income 
 FROM incomes 
 GROUP BY user_id) AS inco2 
 ON inco.user_id = inco2.user_id
INNER JOIN
(SELECT user_id, e_amount, SUM(e_amount) AS total_expense
 FROM expenses 
 GROUP BY user_id, e_amount) AS expe 
 ON expe.user_id = inco2.user_id
INNER JOIN
(SELECT user_id, r_amount, SUM(r_amount) AS total_reserve
 FROM reserve_fund 
 GROUP BY user_id, r_amount) AS res 
 ON res.user_id = inco2.user_id;

 -- use this one for all totals
 SELECT inco.user_id,inco2.total_income,  expe.total_expense, res.total_reserve
FROM incomes AS inco
LEFT JOIN
(SELECT user_id, SUM(i_amount) AS total_income 
 FROM incomes 
 GROUP BY user_id) AS inco2 
 ON inco.user_id = inco2.user_id
LEFT JOIN
(SELECT user_id, SUM(e_amount) AS total_expense
 FROM expenses 
 GROUP BY user_id) AS expe 
 ON expe.user_id = inco2.user_id
LEFT JOIN
(SELECT user_id, SUM(r_amount) AS total_reserve
 FROM reserve_fund 
 GROUP BY user_id) AS res 
 ON res.user_id = inco2.user_id;


 -- get total income, expense, and reserve with distinct
 SELECT distinct inco.user_id,inco2.total_income,  expe.total_expense, res.total_reserve
    FROM incomes AS inco
	
    INNER JOIN
    (SELECT user_id, SUM(i_amount) AS total_income 
    FROM incomes 
	 where user_id = 1
    GROUP BY user_id) AS inco2 
    ON inco.user_id = inco2.user_id
	
    INNER JOIN
    (SELECT user_id, SUM(e_amount) AS total_expense
    FROM expenses 
	 	 where user_id = 1
    GROUP BY user_id) AS expe 
    ON expe.user_id = inco2.user_id
	
    INNER JOIN
    (SELECT user_id, SUM(r_amount) AS total_reserve
    FROM reserve_fund 
	 	 where user_id = 1
    GROUP BY user_id) AS res 
    ON res.user_id = inco2.user_id
		
		ORDER BY inco.user_id ASC;

		-- in the backend 
		-- to get only the value of each key
		-- response.json(income_result.rows[0]total_income);


		-- ***** query individule GET endpoint ***** --
		SELECT DISTINCT inco.*, total_income
FROM incomes AS inco
INNER JOIN (SELECT user_id, SUM(i_amount) AS total_income
		   FROM incomes
		   GROUP BY user_id) AS inco_total
ON inco.user_id = inco_total.user_id
		
ORDER BY inco.user_id;


SELECT expe.*, total_expense
FROM expenses AS expe
INNER JOIN (SELECT user_id, SUM(e_amount) AS total_expense
		   FROM expenses
		   GROUP BY user_id) AS expe_total
ON expe.user_id = expe_total.user_id
ORDER BY user_id;
		   

SELECT rese.*, total_reserve
FROM reserve_fund AS rese
INNER JOIN (SELECT user_id, SUM(r_amount) AS total_reserve
		   FROM reserve_fund
		   GROUP BY user_id) AS rese_total
ON rese.user_id = rese_total.user_id
ORDER BY user_id;