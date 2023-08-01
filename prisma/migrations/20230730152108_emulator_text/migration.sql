/*
  Warnings:

  - The primary key for the `emulator_text` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[identifiant]` on the table `emulator_text` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `emulator_text` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `emulator_text_identifiant_key` ON `emulator_text`(`identifiant`);
