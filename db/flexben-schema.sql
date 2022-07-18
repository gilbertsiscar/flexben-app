DROP SCHEMA IF EXISTS flexben;
CREATE SCHEMA flexben;
USE flexben;

-- Table structure for `company`
CREATE TABLE company (
    company_id INT NOT NULL AUTO_INCREMENT,
    code VARCHAR(255),
    company_name VARCHAR(255),
    company_description VARCHAR(255),
    logo BLOB,
    PRIMARY KEY (company_id)
);

-- Table structure for `role`
CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(255),
    role_description VARCHAR(255),
    PRIMARY KEY (role_id)
);

-- Table structure for `employee`
CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT,
    employee_number VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email VARCHAR(255),
    is_active ENUM('Y','N'),
    date_added DATETIME DEFAULT NOW(),
    company_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (employee_id),
    CONSTRAINT fk_employee_company_id
        FOREIGN KEY (company_id)
        REFERENCES company (company_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_employee_role_id
        FOREIGN KEY (role_id)
        REFERENCES roles (role_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- Table structure for `account`
CREATE TABLE account (
    account_id INT NOT NULL AUTO_INCREMENT,
    employee_id INT NOT NULL,
    account_password VARCHAR(255),
    is_active ENUM('Y', 'N') NOT NULL,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (account_id),
    CONSTRAINT fk_account_employee_id
        FOREIGN KEY (employee_id)
        REFERENCES employee (employee_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- Table structure for `cutoff`
CREATE TABLE cutoff (
    cutoff_id INT NOT NULL AUTO_INCREMENT,
    cutoff_start_date DATETIME NOT NULL,
    cutoff_end_date DATETIME NOT NULL,
    is_active ENUM('Y', 'N') NOT NULL,
    cycle_id INT,
    cutoff_cap_amount DECIMAL(10,2) DEFAULT 0.00,
    cutoff_description VARCHAR(255),
    PRIMARY KEY (cutoff_id)
);

-- Table structure for `flex_reimbursement
CREATE TABLE reimbursement (
    reimbursement_id INT NOT NULL AUTO_INCREMENT,
    employee_id INT NOT NULL,
    cutoff_id INT NOT NULL,
    total_reimbursement_amount DECIMAL(10,2),
    date_submitted DATETIME,
    reimbursement_status ENUM("DRAFT", "SUBMITTED", "APPROVED", "REJECTED") DEFAULT "DRAFT",
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    transaction_number VARCHAR(255),
    PRIMARY KEY (reimbursement_id),
    CONSTRAINT fk_reimbursement_employee_id
        FOREIGN KEY (employee_id)
        REFERENCES employee (employee_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_reimbursement_cutoff_id
        FOREIGN KEY (cutoff_id)
        REFERENCES cutoff (cutoff_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- Table structure for `category`
CREATE TABLE category (
    category_id INT NOT NULL AUTO_INCREMENT,
    code VARCHAR(255),
    category_name VARCHAR(255),
    category_description TEXT,
    date_added DATETIME DEFAULT NOW(),
    added_by VARCHAR(255),
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_by VARCHAR(255),
    PRIMARY KEY (category_id)
);

-- Table structure for `flex_reimbursement_details`
CREATE TABLE reimbursement_details (
    reimbursement_details_id INT NOT NULL AUTO_INCREMENT,
    reimbursement_id INT NOT NULL,
    category_id INT NOT NULL,
    or_number VARCHAR(255),
    name_of_establishment VARCHAR(255),
    tin_of_establishment VARCHAR(255),
    amount DECIMAL(10,2),
    reimbursement_details_status ENUM('DRAFT', 'SUBMITTED', 'APPROVED', 'REJECTED') DEFAULT "DRAFT",
    date_added DATETIME DEFAULT NOW(),
    PRIMARY KEY (reimbursement_details_id),
    CONSTRAINT fk_reimbursement_details_reimbursement_id
        FOREIGN KEY (reimbursement_id)
        REFERENCES reimbursement (reimbursement_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_reimbursement_details_category_id
        FOREIGN KEY (category_id)
        REFERENCES category (category_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

DELIMITER $$
CREATE TRIGGER amount_insert
AFTER INSERT ON reimbursement_details
FOR EACH ROW
BEGIN
    UPDATE reimbursement SET total_reimbursement_amount = total_reimbursement_amount + NEW.amount WHERE reimbursement_id = NEW.reimbursement_id;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER amount_delete
AFTER DELETE ON reimbursement_details
FOR EACH ROW
BEGIN
    UPDATE reimbursement SET total_reimbursement_amount = total_reimbursement_amount - OLD.amount WHERE reimbursement_id = OLD.reimbursement_id;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER status_update
AFTER UPDATE ON reimbursement
FOR EACH ROW
BEGIN
    IF !(NEW.reimbursement_status <=> OLD.reimbursement_status) THEN
        UPDATE reimbursement_details SET reimbursement_details_status = NEW.reimbursement_status WHERE reimbursement_id = NEW.reimbursement_id;
    END IF;
END$$
DELIMITER ;
