/*
  Warnings:

  - A unique constraint covering the columns `[mobile_number]` on the table `Agent` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `agent` MODIFY `mobile_number` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `houseonwer` MODIFY `mobile_number` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `Agent_mobile_number_key` ON `Agent`(`mobile_number`);
