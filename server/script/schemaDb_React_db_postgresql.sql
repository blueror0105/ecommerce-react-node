--
-- Database: react_db
--

CREATE DATABASE react_db;

-- ENTITIES

--
-- Schema entity attribute
--

CREATE TABLE IF NOT EXISTS "attribute" (
	Name varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity category
--

CREATE TABLE IF NOT EXISTS "category" (
	Name varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity product
--

CREATE TABLE IF NOT EXISTS "product" (
	Image varchar(130) ,
	Name varchar(130)  NOT NULL,
	Price numeric ,
	Summary varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation m:m categoryproduct Category - Product
CREATE TABLE IF NOT EXISTS "Category_categoryproduct" (
    _id SERIAL PRIMARY KEY,
    id_Category INTEGER  NOT NULL REFERENCES "category"(_id),
    id_Product INTEGER  NOT NULL REFERENCES "product"(_id)
);

-- relation 1:m userproduct User - Product
ALTER TABLE user ADD COLUMN userproduct INTEGER  REFERENCES "product"(_id);
