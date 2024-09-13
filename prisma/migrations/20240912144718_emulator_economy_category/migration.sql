-- CreateTable
CREATE TABLE `emulator_economy_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `parent_id` INTEGER NOT NULL DEFAULT 0,
    `icon_image` INTEGER NOT NULL DEFAULT 1,
    `caption` VARCHAR(191) NOT NULL DEFAULT '',
    `order_num` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
