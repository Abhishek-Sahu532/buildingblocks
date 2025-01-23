/*
  Warnings:

  - The primary key for the `agent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- AlterTable
ALTER TABLE `agent` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `profile`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `ResidentialProperty` (
    `id` VARCHAR(191) NOT NULL,
    `owner_name` VARCHAR(191) NOT NULL,
    `looking_to` ENUM('BUY', 'RENT', 'PG_COLIVING') NOT NULL DEFAULT 'BUY',
    `locality` VARCHAR(191) NOT NULL,
    `property_type` ENUM('APARTMENT', 'INDEPENDENT_FLOOR', 'INDEPENDENT_HOUSE', 'VILLA', 'AGRICULTURAL_PLOT') NOT NULL DEFAULT 'APARTMENT',
    `built_up_are` INTEGER NOT NULL DEFAULT 0,
    `furnished_type` ENUM('FULLY_FURNISHED', 'SEMI_FURNISHED', 'UNFURNISHED') NOT NULL DEFAULT 'UNFURNISHED',
    `agentId` VARCHAR(191) NOT NULL,
    `cost` INTEGER NOT NULL,
    `construction_status` ENUM('READY_TO_MOVE', 'UNDER_CONSTRUCTION') NOT NULL DEFAULT 'READY_TO_MOVE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ResidentialProperty` ADD CONSTRAINT `ResidentialProperty_agentId_fkey` FOREIGN KEY (`agentId`) REFERENCES `Agent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
