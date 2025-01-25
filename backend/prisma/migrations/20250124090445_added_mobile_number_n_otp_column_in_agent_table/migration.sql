-- AlterTable
ALTER TABLE `agent` ADD COLUMN `mobile_number` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `otp` INTEGER NULL,
    ADD COLUMN `otp_received_time` DATETIME(3) NULL;
