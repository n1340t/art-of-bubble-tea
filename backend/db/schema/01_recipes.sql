DROP TABLE IF EXISTS recipes CASCADE;

CREATE TYPE unit_enum AS ENUM('WeightUnit', 'FluidUnit', 'OtherUnit');
CREATE TYPE type_enum AS ENUM('Standard', 'OneTopping', 'TwoorMoreToppings');

CREATE TYPE WeightUnit AS ENUM ('g', 'kg');
CREATE TYPE FluidUnit AS ENUM ('ml', 'oz', 'honey');
CREATE TYPE OtherUnit AS ENUM ('ts');

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  syrup JSONB,
  tea JSONB,
  water JSONB,
  milk JSONB,
  honey JSONB,
  availability BOOLEAN,
  note VARCHAR(255)
);