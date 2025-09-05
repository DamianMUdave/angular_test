CREATE DATABASE angular_test_games_db;

USE angular_test_games_db;

CREATE TABLE game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game TO games;

DESCRIBE games;