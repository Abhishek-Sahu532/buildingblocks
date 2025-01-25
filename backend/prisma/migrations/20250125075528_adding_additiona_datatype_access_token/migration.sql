-- AlterTable
ALTER TABLE `agent` MODIFY `accessToken` VARCHAR(300) NULL,
    MODIFY `refreshToken` VARCHAR(300) NULL;

-- AlterTable
ALTER TABLE `houseonwer` MODIFY `accessToken` VARCHAR(300) NULL,
    MODIFY `refreshToken` VARCHAR(300) NULL;
