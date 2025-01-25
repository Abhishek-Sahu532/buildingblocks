/*
  Warnings:

  - You are about to drop the column `built_up_are` on the `residentialproperty` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `residentialproperty` DROP COLUMN `built_up_are`,
    ADD COLUMN `built_up_area` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `HouseOnwer` (
    `id` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `mobile_number` INTEGER NOT NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
