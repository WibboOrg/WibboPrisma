-- AlterTable
ALTER TABLE `room` MODIFY `password` VARCHAR(255) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `user` MODIFY `password` VARCHAR(191) NOT NULL;
