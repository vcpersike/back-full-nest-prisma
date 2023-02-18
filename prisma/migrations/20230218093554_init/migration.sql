-- CreateTable
CREATE TABLE "regions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "iso" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "provinces" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "iso" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "totalReport" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "last_update" TEXT NOT NULL,
    "confirmed" TEXT NOT NULL,
    "confirmed_diff" TEXT NOT NULL,
    "deaths" TEXT NOT NULL,
    "deaths_diff" TEXT NOT NULL,
    "recovered" TEXT NOT NULL,
    "recovered_diff" TEXT NOT NULL,
    "active" TEXT NOT NULL,
    "active_diff" TEXT NOT NULL,
    "fatality_rate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "fips" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "confirmed" TEXT NOT NULL,
    "deaths" TEXT NOT NULL,
    "confirmed_diff" TEXT NOT NULL,
    "deaths_diff" TEXT NOT NULL,
    "last_update" TEXT NOT NULL
);
