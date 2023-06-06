SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema TimoBedrift
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `TimoBedrift` DEFAULT CHARACTER SET utf8 ;
USE `TimoBedrift` ;

-- -----------------------------------------------------
-- Table `TimoBedrift`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TimoBedrift`.`projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(90) NULL,
  `describtion` VARCHAR(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `TimoBedrift`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TimoBedrift`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `password` VARCHAR(90) NULL,
  `category` VARCHAR(45) NULL,
  `projects_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_projects1_idx` (`projects_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_projects1`
    FOREIGN KEY (`projects_id`)
    REFERENCES `TimoBedrift`.`projects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

use `TimoBedrift`;

insert into `users` (firstName, lastName, email, address, password, category) values ('admin','admin', 'admin@admin.eksamen', 'dummy address', '$2b$10$gxVad8aisYSJX7WZXdXRmeVK3IFsPRS0SOaSrOjNjflACbJpSghWy', 'administrasjon');

insert into `projects` (name, describtion) values ('Implementeringsprosjekt', 'Et projekt hvor ansatte implementerer det som ble plannlagd i planeleggin');
insert into `projects` (name, describtion) values ('Utviklingsprosjekt', 'Et projekt hvor ansatte utvikler en løsning');
insert into `projects` (name, describtion) values ('Planleggingsprosjekt', 'Et projekt hvor ansatte plannlegger tjeneseten');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

