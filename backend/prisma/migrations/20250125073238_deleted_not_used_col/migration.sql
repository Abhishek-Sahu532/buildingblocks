/*
  Warnings:

  - You are about to drop the column `otp` on the `houseonwer` table. All the data in the column will be lost.
  - You are about to drop the column `otp_received_time` on the `houseonwer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `houseonwer` DROP COLUMN `otp`,
    DROP COLUMN `otp_received_time`;
