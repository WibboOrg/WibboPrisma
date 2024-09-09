-- CreateTable
CREATE TABLE `emulator_economy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category_id` INTEGER NOT NULL DEFAULT 0,
    `item_id` INTEGER NOT NULL,
    `extra_data` TEXT NULL DEFAULT '',
    `average_price` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
