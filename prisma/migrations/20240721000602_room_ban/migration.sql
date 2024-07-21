-- CreateTable
CREATE TABLE `room_ban` (
    `room_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `expire` INTEGER NOT NULL,

    INDEX `room_id`(`room_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`room_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
