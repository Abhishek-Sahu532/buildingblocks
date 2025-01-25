-- AlterTable
ALTER TABLE `agent` ADD COLUMN `accessToken` VARCHAR(191) NULL,
    ADD COLUMN `refreshToken` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `houseonwer` ADD COLUMN `accessToken` VARCHAR(191) NULL,
    ADD COLUMN `refreshToken` VARCHAR(191) NULL;
