-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: flexben
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) NOT NULL,
  `account_password` varchar(255) DEFAULT NULL,
  `is_active` enum('Y','N') NOT NULL,
  `date_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`account_id`),
  KEY `fk_account_employee_id` (`employee_id`),
  CONSTRAINT `fk_account_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,33,'password123','Y','2018-08-21 09:56:17'),(2,34,'password123','Y','2018-08-21 09:56:17'),(3,35,'password123','Y','2018-08-21 09:56:17'),(4,36,'password123','Y','2018-08-21 09:56:17'),(5,37,'password123','Y','2018-08-21 09:56:17');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `category_description` text DEFAULT NULL,
  `date_added` datetime DEFAULT current_timestamp(),
  `added_by` varchar(255) DEFAULT NULL,
  `updated_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'MEDC','MEDICAL Claim Category','prescriptive drugs, over the counter drugs, vitamins, supplements, herbal supplements, vaccinations/vaccines, baby milk formula, eye drops, dental procedures, dental braces & retainers, dentures, dental accessories, prescriptive glasses & shades, prescriptive contact lenses, aesthetic contact lenses, glass frames, laboratory tests','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(2,'APPC','APPLIANCE Claim Category','Refrigerator, Aircon, Electric Fan, TV, DVD/VCD/Media Players, Radio component, radio speakers, pc speakers, cordless phones, landline, washing machine, gas range/stove, oven/oven toaster, microwave, lights & lamps, air humidifier, electronic sterilizer, electric shaver, electric toothbrush, vacuum cleaner, baby monitor','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(3,'BEAC','Beauty & Wellness Claim Category','Gym Membership, Spa visits, Yoga/pilates/other wellness classes, massage, marathon fees, spiritual retreat fees, personal trainers, beauty and grooming expenses, etc.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(4,'FOODC','FOOD, RESTAURANT & GROCERIES Claim Category','purchases of people to maintain life and growth.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(5,'FASC','FASHION Claim Category','purchases of clothing, shoes, bags, and other fashion accesories.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(6,'ENTC','ENTERTAINMENT Claim Category','cinema tickets, concerts, musical instruments, themed parks, basketball events, etc.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(7,'GADC','GADGETS Claim Category','PC, Laptops, Printer & Ink, USB, Portable WIFI, Keyboard, Mouse, PC Speakers, Earphones, Headset, Monitor, Scanner, Game consoles, MP3 players, Cellphone accessories, Laptop Adaptors, Laptop skins, Projectors, Routers, Modem, Tablets, PC cables, Rechargeable batteries, iPod Accessories, External hard drive, camera, etc.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(8,'TRANC','TRANSPORTATION Claim Category','Inter-city transport, parking fees, gasoline, toll fee, e pass payments, commuters cards (MRT/LRT), Car accessories and repairs.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(9,'TRVLC','TRAVEL & LEISURE Claim Category','Airfare, Boat/Ship Fares, Hotel Accomodations, Travel Packages, Travel Taxes, Travel Agency Fees, Passport Applications/Renewal fees, Travel luggage (additional check-in) NOTE: We will allow online receipts that includes the name of immediate family members.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(10,'CONNC','CONNECTIVITY Claim Category','Telephone Bills and Phone Plans NOTE: There will be a cut off in the submission of receipts; receipts paid within the quarter can be claimed within the quarter of the payout schedules.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(11,'SOFTC','Applications and Software Claim Category','refers to installers, etc.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(12,'HOMEC','HOME IMROVEMENTS & FURNITURES Claim Category','refers of the maintenance and enhancements of your homes.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(13,'LIFEC','LIFE INSURANCE Claim Category','refers to your life insurances purchases. NOTE: We will allow insurances for immediate family members.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(14,'BOOKC','Books and Subscriptions Claim Category','any books and subscriptions are acceptable. NOTE: We will allow books purchased for immediate family members such as school books.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(15,'OFCSUPC','OFFICE SUPPLIES Claim Category','refers to writing implements, office consumables, notebooks, rulers, calculators, etc.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(16,'TRAINC','TRAINING & TUITION Claim Category','refers to tuition fees for personal and professional developments. Seminar fees and counseling sessions also included. NOTE: We will allow tuition fees for immediate family members.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(17,'CSRC','Corporate Social Responsibility Claim Category','If FC\'s are unclaimed then points will be added in our CSR funds for future CSR events.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL),(18,'LVC','LEAVE BUY BACK','All leave buy back applications will only be til June 22, 2018 for this payout and will resume leave back application after the flexben payout.','2018-08-21 18:09:13','SYSTEM','2022-07-15 13:39:27',NULL);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_description` varchar(255) DEFAULT NULL,
  `logo` blob DEFAULT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'PWINNOV','Pointwest Innovations Corporation','Pointwest Innovations Corporation','pointwest-logo.png');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cutoff`
--

DROP TABLE IF EXISTS `cutoff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cutoff` (
  `cutoff_id` int(11) NOT NULL AUTO_INCREMENT,
  `cutoff_start_date` datetime NOT NULL,
  `cutoff_end_date` datetime NOT NULL,
  `is_active` enum('Y','N') NOT NULL,
  `cycle_id` int(11) DEFAULT NULL,
  `cutoff_cap_amount` decimal(10,2) DEFAULT 0.00,
  `cutoff_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cutoff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cutoff`
--

LOCK TABLES `cutoff` WRITE;
/*!40000 ALTER TABLE `cutoff` DISABLE KEYS */;
INSERT INTO `cutoff` VALUES (1,'2018-01-01 00:00:00','2018-04-30 00:00:00','N',1,15000.00,'2018 1st cut-off '),(2,'2018-05-01 00:00:00','2018-08-31 00:00:00','N',1,15000.00,'2018 2nd cut-off'),(3,'2018-09-01 00:00:00','2018-12-31 00:00:00','Y',1,15000.00,'last cut-off for 2018');
/*!40000 ALTER TABLE `cutoff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_number` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_active` enum('Y','N') DEFAULT NULL,
  `date_added` datetime DEFAULT current_timestamp(),
  `company_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`employee_id`),
  KEY `fk_employee_company_id` (`company_id`),
  KEY `fk_employee_role_id` (`role_id`),
  CONSTRAINT `fk_employee_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_employee_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'12001','Joanne','Abbott','joanne.abbott@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(2,'12002','Elizabeth','Alvarez','elizabeth.alvarez@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(3,'12003','Joey','Clarke','joey.clarke@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(4,'12004','Harry','Klein','harry.klein@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(5,'12005','Taylor','Potter','taylor.potter@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(6,'12006','Sadie','Alvarado','sadie.alvarado@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(7,'12007','Felicia','Moody','felicia.moody@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(8,'12008','Loren','Hansen','loren.hansen@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(9,'12009','Kimberly','Austin','kimberly.austin@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(10,'12010','Joel','Anderson','joel.anderson@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(11,'12011','Alyssa','Ellis','alyssa.ellis@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(12,'12012','Jaime','Wade','jaime.wade@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(13,'12013','Lisa','Luna','lisa.luna@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(14,'12014','Patrick','Holloway','patrick.holloway@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(15,'12015','Oliver','Hanson','oliver.hanson@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(16,'12016','Sylvia','Swanson','sylvia.swanson@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(17,'12017','Deborah','Shelton','deborah.shelton@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(18,'12018','Kristin','Becker','kristin.becker@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(19,'12019','Joseph','Casey','joseph.casey@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(20,'12020','Courtney','Davis','courtney.davis@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(21,'12021','Keith','Cobb','keith.cobb@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(22,'12022','Wilbur','Ballard','wilbur.ballard@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(23,'12023','Kim','Collins','kim.collins@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(24,'12024','Ronald','Hampton','ronald.hampton@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(25,'12025','Randy','Neal','randy.neal@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(26,'12026','Cecelia','Stanley','cecelia.stanley@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(27,'12027','Kirk','Allen','kirk.allen@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(28,'12028','Karla','Green','karla.green@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(29,'12029','Jeannette','Ramirez','jeannette.ramirez@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(30,'12030','Melanie','Barber','melanie.barber@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(31,'12031','Maureen','Bell','maureen.bell@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(32,'12032','Van','Sparks','van.sparks@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(33,'12033','Blake','Flowers','blake.flowers@pointwest.com.ph','Y','2018-08-21 17:56:17',1,2),(34,'12034','Jan','Beck','jan.beck@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(35,'12035','Opal','Lopez','opal.lopez@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(36,'12036','Traci','Flores','traci.flores@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(37,'12037','Thelma','Rodgers','thelma.rodgers@pointwest.com.ph','Y','2018-08-21 17:56:17',1,2),(38,'12038','Stanley','Keller','stanley.keller@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(39,'12039','Kayla','Clayton','kayla.clayton@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(40,'12040','Warren','Cole','warren.cole@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(41,'12041','Geneva','Lane','geneva.lane@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(42,'12042','Holly','Page','holly.page@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(43,'12043','Gladys','Torres','gladys.torres@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(44,'12044','Alfredo','Ball','alfredo.ball@pointwest.com.ph','Y','2018-08-21 17:56:17',1,3),(45,'12045','Elijah','Clark','elijah.clark@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(46,'12046','Bryant','Reeves','bryant.reeves@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(47,'12047','Kristopher','Mccoy','kristopher.mccoy@pointwest.com.ph','Y','2018-08-21 17:56:17',1,3),(48,'12048','Jimmy','Watkins','jimmy.watkins@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(49,'12049','Geoffrey','Wheeler','geoffrey.wheeler@pointwest.com.ph','Y','2018-08-21 17:56:17',1,2),(50,'12050','Rosalie','Haynes','rosalie.haynes@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(51,'12051','Jenna','Delgado','jenna.delgado@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(52,'12052','Barry','Farmer','barry.farmer@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(53,'12053','Juanita','Jordan','juanita.jordan@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(54,'12054','Jessica','Fisher','jessica.fisher@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(55,'12055','Verna','Ruiz','verna.ruiz@pointwest.com.ph','Y','2018-08-21 17:56:17',1,2),(56,'12056','Beatrice','Meyer','beatrice.meyer@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(57,'12057','Elsa','Ortega','elsa.ortega@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(58,'12058','Maurice','Palmer','maurice.palmer@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(59,'12059','Toni','Diaz','toni.diaz@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(60,'12060','Patti','Martinez','patti.martinez@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(61,'12061','Jeannie','Terry','jeannie.terry@pointwest.com.ph','Y','2018-08-21 17:56:17',1,2),(62,'12062','Doris','Richardson','doris.richardson@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(63,'12063','Flora','Chandler','flora.chandler@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(64,'12064','Eunice','Burns','eunice.burns@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(65,'12065','Gary','Morris','gary.morris@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(66,'12066','Rose','Logan','rose.logan@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(67,'12067','Julio','Wells','julio.wells@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(68,'12068','Emmett','Berry','emmett.berry@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(69,'12069','Stewart','Reed','stewart.reed@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1),(70,'12070','Arturo','Dixon','arturo.dixon@pointwest.com.ph','Y','2018-08-21 17:56:17',1,1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reimbursement`
--

DROP TABLE IF EXISTS `reimbursement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reimbursement` (
  `reimbursement_id` int(11) NOT NULL AUTO_INCREMENT,
  `employee_id` int(11) NOT NULL,
  `cutoff_id` int(11) NOT NULL,
  `total_reimbursement_amount` decimal(10,2) DEFAULT NULL,
  `date_submitted` datetime DEFAULT current_timestamp(),
  `reimbursement_status` enum('DRAFT','SUBMITTED','APPROVED','REJECTED') NOT NULL,
  `date_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `transaction_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`reimbursement_id`),
  KEY `fk_reimbursement_employee_id` (`employee_id`),
  KEY `fk_reimbursement_cutoff_id` (`cutoff_id`),
  CONSTRAINT `fk_reimbursement_cutoff_id` FOREIGN KEY (`cutoff_id`) REFERENCES `cutoff` (`cutoff_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reimbursement_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reimbursement`
--

LOCK TABLES `reimbursement` WRITE;
/*!40000 ALTER TABLE `reimbursement` DISABLE KEYS */;
/*!40000 ALTER TABLE `reimbursement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reimbursement_details`
--

DROP TABLE IF EXISTS `reimbursement_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reimbursement_details` (
  `reimbursement_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `reimbursement_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `or_number` varchar(255) DEFAULT NULL,
  `name_of_establishment` varchar(255) DEFAULT NULL,
  `tin_of_establishment` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `reimbursement_details_status` enum('DRAFT','SUBMITTED','APPROVED','REJECTED') NOT NULL,
  `date_added` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`reimbursement_details_id`),
  KEY `fk_reimbursement_details_reimbursement_id` (`reimbursement_id`),
  KEY `fk_reimbursement_details_category_id` (`category_id`),
  CONSTRAINT `fk_reimbursement_details_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_reimbursement_details_reimbursement_id` FOREIGN KEY (`reimbursement_id`) REFERENCES `reimbursement` (`reimbursement_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reimbursement_details`
--

LOCK TABLES `reimbursement_details` WRITE;
/*!40000 ALTER TABLE `reimbursement_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `reimbursement_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER amount_insert
AFTER INSERT ON reimbursement_details
FOR EACH ROW
BEGIN
    UPDATE reimbursement SET total_reimbursement_amount = total_reimbursement_amount + NEW.amount WHERE reimbursement_id = NEW.reimbursement_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER amount_delete
AFTER DELETE ON reimbursement_details
FOR EACH ROW
BEGIN
    UPDATE reimbursement SET total_reimbursement_amount = total_reimbursement_amount - OLD.amount WHERE reimbursement_id = OLD.reimbursement_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'employee','employee'),(2,'hr','HR'),(3,'payroll','payroll');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-15 21:41:13
