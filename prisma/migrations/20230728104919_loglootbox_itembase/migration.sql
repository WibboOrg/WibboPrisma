-- AddForeignKey
ALTER TABLE `log_lootbox` ADD CONSTRAINT `log_lootbox_base_id_fkey` FOREIGN KEY (`base_id`) REFERENCES `item_base`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
