-- CreateTable
CREATE TABLE `log_sandbox` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `method` VARCHAR(10) NOT NULL,
    `edit_name` VARCHAR(20) NOT NULL,
    `edit_key` VARCHAR(200) NOT NULL,
    `timestamp_created` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `log_sandbox` ADD CONSTRAINT `log_sandbox_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
