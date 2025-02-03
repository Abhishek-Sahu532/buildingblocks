/*
  Warnings:

  - Made the column `email` on table `houseowner` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `agent` ALTER COLUMN `mobile_number` DROP DEFAULT;

-- AlterTable
ALTER TABLE `houseowner` ALTER COLUMN `mobile_number` DROP DEFAULT,
    MODIFY `email` VARCHAR(191) NOT NULL;
