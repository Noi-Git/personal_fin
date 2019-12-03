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