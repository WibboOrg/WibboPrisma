/*
  Warnings:

  - You are about to drop the column `timestamp_created` on the `log_sandbox` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `log_sandbox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `log_sandbox` DROP COLUMN `timestamp_created`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
