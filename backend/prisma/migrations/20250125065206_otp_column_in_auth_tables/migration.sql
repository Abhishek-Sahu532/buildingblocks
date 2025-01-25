/*
  Warnings:

  - You are about to drop the column `updated_at` on the `houseonwerauth` table. All the data in the column will be lost.
  - Added the required column `otp` to the `AgentAuth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires_at` to the `HouseOnwerAuth` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otp` to the `HouseOnwerAuth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agentauth` ADD COLUMN `otp` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `houseonwerauth` DROP COLUMN `updated_at`,
    ADD COLUMN `expires_at` DATETIME(3) NOT NULL,
    ADD COLUMN `otp` VARCHAR(191) NOT NULL;
