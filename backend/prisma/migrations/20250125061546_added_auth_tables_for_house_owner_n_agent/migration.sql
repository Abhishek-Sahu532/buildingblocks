/*
  Warnings:

  - You are about to drop the column `otp_received_time` on the `agent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `agent` DROP COLUMN `otp_received_time`;

-- AlterTable
ALTER TABLE `houseonwer` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `otp` INTEGER NULL,
    ADD COLUMN `otp_received_time` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `AgentAuth` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `agent_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseOnwerAuth` (
    `id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `house_owner_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AgentAuth` ADD CONSTRAINT `AgentAuth_agent_id_fkey` FOREIGN KEY (`agent_id`) REFERENCES `Agent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HouseOnwerAuth` ADD CONSTRAINT `HouseOnwerAuth_house_owner_id_fkey` FOREIGN KEY (`house_owner_id`) REFERENCES `HouseOnwer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
