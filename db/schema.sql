USE burgers;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    devoured bit DEFAULT false,
    PRIMARY KEY (id)
)