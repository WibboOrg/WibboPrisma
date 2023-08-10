-- AlterTable
ALTER TABLE `bot_user` ADD COLUMN `ai_type` ENUM('generic', 'bartender', 'chatgpt') NOT NULL DEFAULT 'generic';
