/*
  Warnings:

  - You are about to alter the column `added_date` on the `ban` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `Int`.
  - You are about to alter the column `date` on the `log_staff` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `Int`.

*/
-- AlterTable
ALTER TABLE `ban` MODIFY `added_date` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `log_staff` MODIFY `date` INTEGER NOT NULL;
