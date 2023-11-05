-- AddForeignKey
ALTER TABLE `catalog_item` ADD CONSTRAINT `catalog_item_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `item_base`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
