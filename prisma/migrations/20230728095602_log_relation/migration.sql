-- AddForeignKey
ALTER TABLE `log_lootbox` ADD CONSTRAINT `log_lootbox_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_shop` ADD CONSTRAINT `log_shop_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_slotmachine` ADD CONSTRAINT `log_slotmachine_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_trade` ADD CONSTRAINT `log_trade_user_one_id_fkey` FOREIGN KEY (`user_one_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_trade` ADD CONSTRAINT `log_trade_user_two_id_fkey` FOREIGN KEY (`user_two_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
