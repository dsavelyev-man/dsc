CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(64) NOT NULL,
    middle_name VARCHAR(64),
    last_name VARCHAR(64),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)