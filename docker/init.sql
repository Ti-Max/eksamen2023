SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eksamen2023
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eksamen2023` DEFAULT CHARACTER SET utf8 ;
USE `eksamen2023` ;

-- -----------------------------------------------------
-- Table `eksamen2023`.`projects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eksamen2023`.`projects` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `describtion` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eksamen2023`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eksamen2023`.`users` (
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
    REFERENCES `eksamen2023`.`projects` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

use eksamen2023;

insert into `users` (firstName, lastName, email, address, password, category) values ('admin','admin', 'admin@admin.eksamen', 'dummy address', '$2b$10$gxVad8aisYSJX7WZXdXRmeVK3IFsPRS0SOaSrOjNjflACbJpSghWy', 'administrasjon');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

