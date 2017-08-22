-- Initial seed data for Eat-Da-Burger
USE burgers_db;

INSERT INTO burgers(burger_name, createdAt, updatedAt)
VALUES
    ("Regular Burger", now(), now()),
    ("Chili Burger", now(), now()),
    ("Veggie Burger", now(), now()),
    ("BBQ Burger", now(), now()),
    ("Mushroom Burger", now(), now());
