#!/bin/bash

export PGPASSWORD='12345'

database="personal_findb"

echo "Configuring database: $database"

dropdb -U node_user personal_findb
createdb -U node_user personal_findb

psql -U node_userpersonal_findb < ./bin/sql/personal_findb.sql

echo "$database configured"