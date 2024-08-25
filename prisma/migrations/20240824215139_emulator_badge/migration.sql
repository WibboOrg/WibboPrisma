-- CreateTable
CREATE TABLE `emulator_badge` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `can_trade` BOOLEAN NOT NULL DEFAULT false,
    `can_delete` BOOLEAN NOT NULL DEFAULT false,
    `can_give` BOOLEAN NOT NULL DEFAULT false,
    `amount_winwins` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
