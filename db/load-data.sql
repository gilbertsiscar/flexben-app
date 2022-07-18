SOURCE ~/Desktop/flexben-app/db/flexben-schema.sql

LOAD DATA LOCAL INFILE "/home/snow/Desktop/flexben-app/db/txt-db-tables/companies.txt" 
INTO TABLE company
FIELDS TERMINATED BY "|"
LINES TERMINATED BY '\n' 
IGNORE 1 LINES; 

LOAD DATA LOCAL INFILE '/home/snow/Desktop/flexben-app/db/txt-db-tables/roles.txt' 
INTO TABLE roles
FIELDS TERMINATED BY "|"
LINES TERMINATED BY '\n' 
IGNORE 1 LINES; 


LOAD DATA LOCAL INFILE '/home/snow/Desktop/flexben-app/db/txt-db-tables/employees.txt' 
INTO TABLE employee
FIELDS TERMINATED BY "|"
LINES TERMINATED BY '\n' 
IGNORE 1 LINES;
-- (@col1,@col2,@col3, @col4, @col5, @col6, @col7, @col8) set employee_id=@col1, employee_number=@col2, firstname=@col3, lastname=@col4, email=@col5,
-- is_active=@col6, company_id=@col7, role_id=@col8;


LOAD DATA LOCAL INFILE '/home/snow/Desktop/flexben-app/db/txt-db-tables/accounts.txt' 
INTO TABLE account
FIELDS TERMINATED BY "|"
LINES TERMINATED BY '\n' 
IGNORE 1 LINES; 

LOAD DATA LOCAL INFILE '/home/snow/Desktop/flexben-app/db/txt-db-tables/flex_cycle_cutoffs.txt' 
INTO TABLE cutoff
FIELDS TERMINATED BY "|"
LINES TERMINATED BY '\n' 
IGNORE 1 LINES; 

LOAD DATA LOCAL INFILE '/home/snow/Desktop/flexben-app/db/txt-db-tables/categories.txt' 
INTO TABLE category
FIELDS TERMINATED BY "|"
LINES TERMINATED BY '\n' 
IGNORE 1 LINES
(@col1, @col2, @col3, @col4, @col5, @col6) SET
category_id = @col1, code = @col2, category_name = @col3, category_description = @col4, date_added = @col5, added_by = @col6;