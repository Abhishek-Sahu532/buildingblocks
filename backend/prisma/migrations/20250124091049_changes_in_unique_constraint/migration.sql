/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Agent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobile_number]` on the table `HouseOnwer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `HouseOnwer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[owner_mobile_number]` on the table `ResidentialProperty` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `residentialproperty` MODIFY `owner_mobile_number` INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `Agent_email_key` ON `Agent`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `HouseOnwer_mobile_number_key` ON `HouseOnwer`(`mobile_number`);

-- CreateIndex
CREATE UNIQUE INDEX `HouseOnwer_email_key` ON `HouseOnwer`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `ResidentialProperty_owner_mobile_number_key` ON `ResidentialProperty`(`owner_mobile_number`);
