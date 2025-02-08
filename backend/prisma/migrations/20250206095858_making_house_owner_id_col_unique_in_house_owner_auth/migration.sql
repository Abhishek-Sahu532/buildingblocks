/*
  Warnings:

  - A unique constraint covering the columns `[house_owner_id]` on the table `HouseOwnerAuth` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[otp]` on the table `HouseOwnerAuth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `HouseOwnerAuth_house_owner_id_key` ON `HouseOwnerAuth`(`house_owner_id`);

-- CreateIndex
CREATE UNIQUE INDEX `HouseOwnerAuth_otp_key` ON `HouseOwnerAuth`(`otp`);
