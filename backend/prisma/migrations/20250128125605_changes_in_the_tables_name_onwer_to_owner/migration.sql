/*
  Warnings:

  - You are about to drop the `houseonwer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `houseonwerauth` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `houseonwerauth` DROP FOREIGN KEY `HouseOnwerAuth_house_owner_id_fkey`;

-- DropTable
DROP TABLE `houseonwer`;

-- DropTable
DROP TABLE `houseonwerauth`;

-- CreateTable
CREATE TABLE `HouseOwner` (
    `id` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `mobile_number` VARCHAR(191) NOT NULL DEFAULT '',
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `accessToken` VARCHAR(300) NULL,
    `refreshToken` VARCHAR(300) NULL,

    UNIQUE INDEX `HouseOwner_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseOwnerAuth` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expires_at` DATETIME(3) NOT NULL,
    `house_owner_id` VARCHAR(191) NOT NULL,
    `otp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HouseOwnerAuth` ADD CONSTRAINT `HouseOwnerAuth_house_owner_id_fkey` FOREIGN KEY (`house_owner_id`) REFERENCES `HouseOwner`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
