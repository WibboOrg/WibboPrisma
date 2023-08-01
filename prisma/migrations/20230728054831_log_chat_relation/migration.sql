-- DropForeignKey
ALTER TABLE `catalog_item_limited` DROP FOREIGN KEY `catalog_item_id`;

-- DropForeignKey
ALTER TABLE `item_stat` DROP FOREIGN KEY `foregnkeysbaseid`;

-- DropForeignKey
ALTER TABLE `log_login` DROP FOREIGN KEY `log_login_ibfk_1`;

-- AlterTable
ALTER TABLE `log_chat` MODIFY `room_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `catalog_item_limited` ADD CONSTRAINT `catalog_item_limited_catalog_item_id_fkey` FOREIGN KEY (`catalog_item_id`) REFERENCES `catalog_item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_stat` ADD CONSTRAINT `item_stat_base_id_fkey` FOREIGN KEY (`base_id`) REFERENCES `item_base`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_chat` ADD CONSTRAINT `log_chat_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_chat` ADD CONSTRAINT `log_chat_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `room`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_login` ADD CONSTRAINT `log_login_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
