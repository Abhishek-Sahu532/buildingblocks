/*
  Warnings:

  - Added the required column `owner_mobile_number` to the `ResidentialProperty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `residentialproperty` ADD COLUMN `owner_mobile_number` INTEGER NOT NULL;
