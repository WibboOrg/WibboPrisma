/*
  Warnings:

  - You are about to alter the column `name` on the `catalog_bot_preset` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `gender` on the `catalog_bot_preset` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `motto` on the `catalog_bot_preset` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `badge` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `page_link` on the `catalog_page` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `page_strings_1` on the `catalog_page` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - The primary key for the `catalog_voucher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `name` on the `cms_fourm_category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `pass` on the `cms_mail_forgot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `users` on the `cms_mail_forgot` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `title` on the `cms_news` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `category` on the `emulator_achievement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `command` on the `emulator_command_pet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `header` on the `emulator_landingview` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `body` on the `emulator_landingview` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `button` on the `emulator_landingview` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `special_action` on the `emulator_landingview` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `image` on the `emulator_landingview` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `interaction_type` on the `emulator_lootbox` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `key` on the `emulator_setting` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `identifiant` on the `emulator_text` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `firstvalue` on the `guild_item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `secondvalue` on the `guild_item` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `interaction_type` on the `item_base` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `preset_one` on the `item_moodlight` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `preset_two` on the `item_moodlight` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `preset_three` on the `item_moodlight` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `user_name` on the `log_chat` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `user_name` on the `log_chat_pub` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `ip` on the `log_login` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `interaction_type` on the `log_lootbox` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `edit_key` on the `log_sandbox` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `action` on the `log_staff` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - You are about to alter the column `ip` on the `log_vpn` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `host` on the `log_vpn` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `caption` on the `moderation_topic` table. The data in that column could be lost. The data in that column will be cast from `VarChar(225)` to `VarChar(191)`.
  - You are about to alter the column `type` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `caption` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `VarChar(225)` to `VarChar(191)`.
  - You are about to alter the column `message_text` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `default_sanction` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - You are about to alter the column `password` on the `room` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - The primary key for the `room_model` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `room_swearword_filter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `word` on the `room_swearword_filter` table. The data in that column could be lost. The data in that column will be cast from `VarChar(200)` to `VarChar(191)`.
  - The primary key for the `user_achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `group` on the `user_achievement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - The primary key for the `user_badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `word_filter_retro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `word` on the `word_filter_retro` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `ban` MODIFY `value` VARCHAR(191) NOT NULL,
    MODIFY `reason` TEXT NOT NULL,
    MODIFY `added_by` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `bot_pet` MODIFY `name` VARCHAR(191) NOT NULL DEFAULT 'Unnamed';

-- AlterTable
ALTER TABLE `bot_user` MODIFY `name` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `motto` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `look` TEXT NOT NULL DEFAULT '',
    MODIFY `chat_text` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `catalog_bot_preset` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `figure` TEXT NOT NULL,
    MODIFY `gender` VARCHAR(191) NOT NULL,
    MODIFY `motto` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `catalog_item` MODIFY `catalog_name` VARCHAR(191) NOT NULL,
    MODIFY `badge` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `catalog_marketplace_offer` MODIFY `public_name` VARCHAR(191) NOT NULL,
    MODIFY `extra_data` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `catalog_page` MODIFY `caption` VARCHAR(191) NOT NULL,
    MODIFY `required_right` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `page_layout` VARCHAR(191) NOT NULL DEFAULT 'default_3x3',
    MODIFY `page_link` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `page_strings_1` VARCHAR(191) NOT NULL DEFAULT 'wibbo|catalog_base';

-- AlterTable
ALTER TABLE `catalog_page_langue` MODIFY `caption_fr` VARCHAR(191) NULL,
    MODIFY `caption_en` VARCHAR(191) NULL,
    MODIFY `caption_br` VARCHAR(191) NULL,
    MODIFY `page_strings_2_fr` TEXT NULL,
    MODIFY `page_strings_2_en` TEXT NULL,
    MODIFY `page_strings_2_br` TEXT NULL;

-- AlterTable
ALTER TABLE `catalog_promotion` MODIFY `title` VARCHAR(191) NULL DEFAULT '',
    MODIFY `title_en` VARCHAR(191) NULL,
    MODIFY `title_br` VARCHAR(191) NULL,
    MODIFY `image` VARCHAR(191) NULL DEFAULT '',
    MODIFY `page_link` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `catalog_voucher` DROP PRIMARY KEY,
    MODIFY `voucher` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`voucher`);

-- AlterTable
ALTER TABLE `cms_forum_post` MODIFY `message` TEXT NOT NULL,
    MODIFY `author` VARCHAR(191) NOT NULL,
    MODIFY `date` VARCHAR(191) NOT NULL,
    MODIFY `motto` VARCHAR(191) NOT NULL,
    MODIFY `look` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `cms_forum_thread` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `author` VARCHAR(191) NOT NULL,
    MODIFY `date` VARCHAR(191) NOT NULL,
    MODIFY `lastpost_author` VARCHAR(191) NOT NULL,
    MODIFY `lastpost_date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cms_fourm_category` MODIFY `name` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `cms_mail_confirm` MODIFY `codedevalidation` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cms_mail_forgot` MODIFY `pass` VARCHAR(191) NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `users` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cms_news` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `topstory_image` VARCHAR(191) NOT NULL,
    MODIFY `snippet` TEXT NOT NULL,
    MODIFY `author` VARCHAR(191) NOT NULL,
    MODIFY `link_keyword` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `cms_staff` MODIFY `function` VARCHAR(191) NULL,
    MODIFY `social_insta` VARCHAR(191) NULL,
    MODIFY `social_discord` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `cms_staff_protect` MODIFY `ip` VARCHAR(191) NULL DEFAULT '',
    MODIFY `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emulator_achievement` MODIFY `group_name` VARCHAR(191) NOT NULL DEFAULT 'ACH_',
    MODIFY `category` VARCHAR(191) NOT NULL DEFAULT 'identity';

-- AlterTable
ALTER TABLE `emulator_chat_style` MODIFY `name` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `required_right` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `emulator_command` MODIFY `input` VARCHAR(191) NOT NULL,
    MODIFY `description_fr` TEXT NULL,
    MODIFY `description_en` TEXT NULL,
    MODIFY `description_br` TEXT NULL;

-- AlterTable
ALTER TABLE `emulator_command_pet` MODIFY `command` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emulator_landingview` MODIFY `header` VARCHAR(191) NOT NULL DEFAULT '[Header Name]',
    MODIFY `body` VARCHAR(191) NOT NULL DEFAULT '[BODY]',
    MODIFY `button` VARCHAR(191) NOT NULL DEFAULT '[BUTTON]',
    MODIFY `special_action` VARCHAR(191) NOT NULL DEFAULT '[LINK HERE]',
    MODIFY `image` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `emulator_lootbox` MODIFY `interaction_type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emulator_permission` MODIFY `permission` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emulator_quest` MODIFY `category` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `name` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `emulator_setting` MODIFY `key` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `emulator_text` MODIFY `identifiant` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `guild` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `desc` TEXT NOT NULL,
    MODIFY `badge` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `guild_item` MODIFY `firstvalue` VARCHAR(191) NOT NULL,
    MODIFY `secondvalue` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `item` MODIFY `extra_data` TEXT NULL DEFAULT '',
    MODIFY `wall_pos` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `item_base` MODIFY `item_name` VARCHAR(191) NOT NULL,
    MODIFY `interaction_type` VARCHAR(191) NOT NULL DEFAULT 'default',
    MODIFY `vending_ids` VARCHAR(191) NOT NULL DEFAULT '0',
    MODIFY `height_adjustable` VARCHAR(191) NOT NULL DEFAULT '0';

-- AlterTable
ALTER TABLE `item_moodlight` MODIFY `preset_one` VARCHAR(191) NOT NULL,
    MODIFY `preset_two` VARCHAR(191) NOT NULL,
    MODIFY `preset_three` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `item_present` MODIFY `extra_data` TEXT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `item_wired` MODIFY `trigger_data_2` TEXT NULL DEFAULT '',
    MODIFY `trigger_data` TEXT NULL,
    MODIFY `triggers_item` TEXT NULL;

-- AlterTable
ALTER TABLE `log_chat` MODIFY `user_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_chat_pub` MODIFY `user_name` VARCHAR(191) NOT NULL,
    MODIFY `message` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_command` MODIFY `user_name` VARCHAR(191) NOT NULL,
    MODIFY `command` VARCHAR(191) NOT NULL,
    MODIFY `extra_data` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `log_flagme` MODIFY `oldusername` VARCHAR(191) NOT NULL,
    MODIFY `newusername` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_login` MODIFY `ip` VARCHAR(191) NOT NULL,
    MODIFY `user_agent` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `log_lootbox` MODIFY `interaction_type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_payment` MODIFY `external_reference` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_sandbox` MODIFY `edit_name` VARCHAR(191) NOT NULL,
    MODIFY `edit_key` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_shop` MODIFY `content` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_staff` MODIFY `pseudo` VARCHAR(191) NOT NULL,
    MODIFY `action` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `log_trade` MODIFY `user_one_items` TEXT NOT NULL,
    MODIFY `user_two_items` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `log_vpn` MODIFY `ip` VARCHAR(191) NOT NULL,
    MODIFY `host` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `messenger_offline_message` MODIFY `message` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `moderation_preset` MODIFY `message` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `moderation_resolution` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `subtitle` VARCHAR(191) NOT NULL,
    MODIFY `message` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `moderation_ticket` MODIFY `message` TEXT NOT NULL,
    MODIFY `room_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `moderation_topic` MODIFY `caption` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `moderation_topic_action` MODIFY `type` VARCHAR(191) NOT NULL,
    MODIFY `caption` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `message_text` VARCHAR(191) NOT NULL,
    MODIFY `default_sanction` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `navigator_category` MODIFY `category_identifier` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `public_name` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `category_type` VARCHAR(191) NOT NULL DEFAULT 'category';

-- AlterTable
ALTER TABLE `navigator_public` MODIFY `image_url` TEXT NULL,
    MODIFY `category_type` VARCHAR(191) NOT NULL DEFAULT 'featured';

-- AlterTable
ALTER TABLE `roleplay_item` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `desc` TEXT NULL;

-- AlterTable
ALTER TABLE `room` MODIFY `caption` VARCHAR(191) NOT NULL DEFAULT 'Room',
    MODIFY `owner` VARCHAR(191) NOT NULL,
    MODIFY `description` TEXT NULL DEFAULT '',
    MODIFY `model_name` VARCHAR(191) NOT NULL,
    MODIFY `tags` VARCHAR(191) NULL DEFAULT '',
    MODIFY `password` VARCHAR(191) NULL DEFAULT '',
    MODIFY `wallpaper` VARCHAR(191) NOT NULL DEFAULT '0.0',
    MODIFY `floor` VARCHAR(191) NOT NULL DEFAULT '0.0',
    MODIFY `landscape` VARCHAR(191) NOT NULL DEFAULT '0.0';

-- AlterTable
ALTER TABLE `room_model` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `heightmap` TEXT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `room_model_custom` MODIFY `heightmap` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `room_swearword_filter` DROP PRIMARY KEY,
    MODIFY `word` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`word`);

-- AlterTable
ALTER TABLE `user` MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `mail` VARCHAR(191) NULL DEFAULT '',
    MODIFY `auth_ticket` VARCHAR(191) NULL DEFAULT '',
    MODIFY `look` TEXT NOT NULL DEFAULT 'hr-115-42.hd-190-1.ch-215-62.lg-285-91.sh-290-62',
    MODIFY `motto` VARCHAR(191) NULL DEFAULT '',
    MODIFY `ip_last` VARCHAR(191) NULL DEFAULT '',
    MODIFY `machine_id` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `user_achievement` DROP PRIMARY KEY,
    MODIFY `group` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`, `group`);

-- AlterTable
ALTER TABLE `user_badge` DROP PRIMARY KEY,
    MODIFY `badge_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`user_id`, `badge_id`);

-- AlterTable
ALTER TABLE `user_wardrobe` MODIFY `look` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `word_filter_retro` DROP PRIMARY KEY,
    MODIFY `word` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`word`);
