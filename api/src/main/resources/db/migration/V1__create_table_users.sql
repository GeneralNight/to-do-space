CREATE TABLE users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    avatar TEXT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);