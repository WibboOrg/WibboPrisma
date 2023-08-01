-- AlterTable
ALTER TABLE `ban` MODIFY `expire` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `bot_pet` MODIFY `createstamp` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `catalog_marketplace_offer` MODIFY `timestamp` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `emulator_status` MODIFY `stamp` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `log_chat` MODIFY `timestamp` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `log_chat_pub` MODIFY `timestamp` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `messenger_offline_message` MODIFY `timestamp` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `moderation_ticket` MODIFY `timestamp` INTEGER NOT NULL;
