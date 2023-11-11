# Create table, insert, and query data in SQL

Create users table:

```sql
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(20),
    gender VARCHAR(10),
    address VARCHAR(100)
);
```

Insert data into users table:

```sql
INSERT INTO users (user_id, name, email, phone, gender, address) VALUES
    (1, 'Alice Johnson', 'alice.j@example.com', '1234567890', 'Female', '123 Park Ave'),
    (2, 'Bob Williams', 'bob.w@example.com', '9876543210', 'Male', '456 Pine St'),
    (3, 'Charlie Davis', 'charlie.d@example.com', '5558889999', 'Male', '789 Oak Ln'),
    (4, 'Diana Martinez', 'diana.m@example.com', '7771113333', 'Female', '321 Elm St'),
    (5, 'Edward Garcia', 'edward.g@example.com', '4443332222', 'Male', '567 Maple Ave'),
    (6, 'Fiona Rodriguez', 'fiona.r@example.com', '8889990000', 'Female', '234 Cedar St'),
    (7, 'George Wilson', 'george.w@example.com', '3337771111', 'Male', '890 Birch Ln'),
    (8, 'Hannah Anderson', 'hannah.a@example.com', '2225558888', 'Female', '432 Oak Ave'),
    (9, 'Ian Thompson', 'ian.t@example.com', '6669991111', 'Male', '876 Pine St'),
    (10, 'Jessica White', 'jessica.w@example.com', '1114447777', 'Female', '654 Elm St'),
    (11, 'Kevin Lee', 'kevin.l@example.com', '9990001111', 'Male', '567 Birch Ln'),
    (12, 'Linda Scott', 'linda.s@example.com', '4447773333', 'Female', '789 Maple Ave'),
    (13, 'Michael Clark', 'michael.c@example.com', '7778889999', 'Male', '321 Cedar St'),
    (14, 'Nancy Hall', 'nancy.h@example.com', '8881114444', 'Female', '876 Oak Ave'),
    (15, 'Olivia Young', 'olivia.y@example.com', '2226669999', 'Female', '987 Pine St'),
    (16, 'Pauline Baker', 'pauline.b@example.com', '5552228888', 'Female', '234 Elm St'),
    (17, 'Quentin Cook', 'quentin.c@example.com', '3335557777', 'Male', '543 Maple Ave'),
    (18, 'Richard Green', 'richard.g@example.com', '7773331111', 'Male', '765 Cedar St'),
    (19, 'Samantha King', 'samantha.k@example.com', '9997775555', 'Female', '321 Birch Ln'),
    (20, 'Thomas Adams', 'thomas.a@example.com', '4449996666', 'Male', '654 Oak Ave'),
    (21, 'Ursula Hill', 'ursula.h@example.com', '8886662222', 'Female', '876 Elm St'),
    (22, 'Victor Bell', 'victor.b@example.com', '1113335555', 'Male', '987 Maple Ave'),
    (23, 'Wendy Evans', 'wendy.e@example.com', '2224446666', 'Female', '234 Cedar St'),
    (24, 'Xander Foster', 'xander.f@example.com', '8881113333', 'Male', '543 Pine St'),
    (25, 'Yvonne Gray', 'yvonne.g@example.com', '5559992222', 'Female', '765 Elm St'),
    (26, 'Zackary Irwin', 'zackary.i@example.com', '3337779999', 'Male', '987 Birch Ln'),
    (27, 'Emma Cooper', 'emma.c@example.com', '7772228888', 'Female', '654 Maple Ave'),
    (28, 'Noah Rivera', 'noah.r@example.com', '1115559999', 'Male', '321 Cedar St'),
    (29, 'Ava Torres', 'ava.t@example.com', '8882225555', 'Female', '876 Oak Ave'),
    (30, 'Liam Brooks', 'liam.b@example.com', '3336669999', 'Male', '987 Pine St');

```

Select data with alias:

```sql
SELECT name AS 'Name', phone AS 'Phone', address AS 'Address' FROM users;
```

[Preview] Query result:

![Query Result](Query%20result.png)
