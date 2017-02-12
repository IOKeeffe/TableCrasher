# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## cities
column names    | data type | details
----------------|-----------|----------------------
id              | integer   | not null, primary key
name            | string    | not null
image_url       | string    | not null

## restaurants
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
name              | string    | not null
address           | string    | not null
city_name         | string    | not null
state             | string    | not null
zip_code          | string    | not null
category          | string    | not null
description       | string    | not null
image_url         | string    | not null
detail_image_urls | string    | default: [], null: false, array: true
price             | integer   | not null
city_id           | integer   | not null, foreign key (references cities), indexed
owner_id          | integer   | not null, foreign key (references users), indexed

## reservations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
party_size      | integer   | not null
time_slot       | datetime  | not null
user_id         | integer   | not null, foreign key (references users), indexed
restaurant_id   | integer   | not null, foreign key (references restaurants), indexed

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
rating          | integer   | not null
body            | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed
restaurant_id   | integer   | not null, foreign key (references restaurants), indexed

## favorites
column name     | data type | details
----------------|-----------|-----------------------
user_id         | integer   | not null, foreign key (references users), indexed
restaurant_id   | integer   | not null, foreign key (references restaurants), indexed
