-- CreateTable
CREATE TABLE `ban` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `bantype` ENUM('user', 'ip', 'machine', 'ignoreall') NOT NULL DEFAULT 'user',
    `value` VARCHAR(100) NOT NULL,
    `reason` MEDIUMTEXT NOT NULL,
    `expire` DOUBLE NOT NULL DEFAULT 0,
    `added_by` VARCHAR(50) NOT NULL,
    `added_date` VARCHAR(50) NOT NULL,

    INDEX `expire`(`expire`),
    INDEX `value`(`value`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bot_pet` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `room_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `name` VARCHAR(32) NOT NULL DEFAULT 'Unnamed',
    `race` VARCHAR(3) NOT NULL DEFAULT '000',
    `color` VARCHAR(6) NOT NULL DEFAULT 'FFFFFF',
    `type` INTEGER UNSIGNED NOT NULL,
    `experience` INTEGER UNSIGNED NOT NULL,
    `energy` INTEGER UNSIGNED NOT NULL,
    `nutrition` INTEGER UNSIGNED NOT NULL DEFAULT 100,
    `respect` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `createstamp` DOUBLE NOT NULL DEFAULT 0,
    `x` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `y` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `z` DOUBLE NOT NULL DEFAULT 0,
    `have_saddle` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `hairdye` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `pethair` INTEGER NOT NULL DEFAULT 0,
    `anyone_ride` BOOLEAN NOT NULL DEFAULT true,

    INDEX `room_id`(`room_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bot_user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `name` VARCHAR(50) NOT NULL DEFAULT '',
    `motto` VARCHAR(50) NOT NULL DEFAULT '',
    `gender` VARCHAR(1) NOT NULL DEFAULT '',
    `look` VARCHAR(500) NOT NULL DEFAULT '',
    `room_id` INTEGER NOT NULL DEFAULT 0,
    `walk_enabled` BOOLEAN NOT NULL DEFAULT false,
    `x` INTEGER NOT NULL DEFAULT 0,
    `y` INTEGER NOT NULL DEFAULT 0,
    `z` INTEGER NOT NULL DEFAULT 0,
    `rotation` INTEGER NOT NULL DEFAULT 0,
    `chat_enabled` BOOLEAN NOT NULL DEFAULT false,
    `chat_text` MEDIUMTEXT NOT NULL,
    `chat_seconds` INTEGER NOT NULL DEFAULT 7,
    `is_dancing` BOOLEAN NOT NULL DEFAULT false,
    `is_mixchat` BOOLEAN NOT NULL DEFAULT true,
    `status` INTEGER NOT NULL DEFAULT 0,
    `enable` INTEGER NOT NULL DEFAULT 0,
    `handitem` INTEGER NOT NULL DEFAULT 0,

    INDEX `ownerId`(`user_id`),
    INDEX `room_id`(`room_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_bot_preset` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `figure` VARCHAR(255) NOT NULL,
    `gender` VARCHAR(255) NOT NULL,
    `motto` VARCHAR(255) NOT NULL,
    `ai_type` ENUM('pet', 'generic', 'bartender') NOT NULL DEFAULT 'generic',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_item` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `page_id` INTEGER UNSIGNED NOT NULL,
    `item_id` INTEGER UNSIGNED NOT NULL,
    `catalog_name` VARCHAR(100) NOT NULL,
    `cost_credits` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `cost_pixels` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `cost_diamonds` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `cost_limitcoins` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `amount` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `offer_active` BOOLEAN NOT NULL DEFAULT true,
    `badge` VARCHAR(255) NOT NULL DEFAULT '',

    INDEX `item_ids`(`item_id`),
    INDEX `page_id`(`page_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_item_limited` (
    `catalog_item_id` INTEGER UNSIGNED NOT NULL,
    `limited_sells` INTEGER NOT NULL DEFAULT 0,
    `limited_stack` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`catalog_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_marketplace_data` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `sprite` INTEGER UNSIGNED NOT NULL,
    `sold` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `avgprice` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_marketplace_offer` (
    `offer_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `item_id` INTEGER UNSIGNED NOT NULL,
    `asking_price` INTEGER UNSIGNED NOT NULL,
    `total_price` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `public_name` MEDIUMTEXT NOT NULL,
    `sprite_id` INTEGER UNSIGNED NOT NULL,
    `item_type` INTEGER NOT NULL DEFAULT 1,
    `timestamp` DOUBLE NOT NULL,
    `state` INTEGER NOT NULL DEFAULT 1,
    `extra_data` MEDIUMTEXT NOT NULL,
    `furni_id` INTEGER UNSIGNED NOT NULL,
    `limited_number` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `limited_stack` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`offer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_page` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` INTEGER NOT NULL DEFAULT -1,
    `caption` VARCHAR(100) NOT NULL,
    `icon_image` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `required_right` VARCHAR(50) NOT NULL DEFAULT '',
    `order_num` INTEGER NOT NULL DEFAULT 0,
    `page_layout` VARCHAR(50) NOT NULL DEFAULT 'default_3x3',
    `page_link` VARCHAR(255) NOT NULL DEFAULT '',
    `page_strings_1` VARCHAR(255) NOT NULL DEFAULT 'wibbo|catalog_base',
    `page_strings_2` TEXT NOT NULL,
    `is_premium` BOOLEAN NOT NULL DEFAULT false,

    INDEX `order_num`(`order_num`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_page_langue` (
    `page_id` INTEGER UNSIGNED NOT NULL,
    `caption_fr` VARCHAR(100) NULL,
    `caption_en` VARCHAR(100) NULL,
    `caption_br` VARCHAR(100) NULL,
    `page_strings_2_fr` MEDIUMTEXT NULL,
    `page_strings_2_en` MEDIUMTEXT NULL,
    `page_strings_2_br` MEDIUMTEXT NULL,

    PRIMARY KEY (`page_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_pet_race` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `raceid` INTEGER UNSIGNED NOT NULL,
    `color1` INTEGER UNSIGNED NULL,
    `color2` INTEGER UNSIGNED NULL,
    `has1color` BOOLEAN NOT NULL DEFAULT false,
    `has2color` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_promotion` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(35) NULL DEFAULT '',
    `title_en` VARCHAR(35) NULL,
    `title_br` VARCHAR(35) NULL,
    `image` VARCHAR(75) NULL DEFAULT '',
    `unknown` INTEGER UNSIGNED NULL DEFAULT 0,
    `page_link` VARCHAR(35) NULL DEFAULT '',
    `parent_id` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalog_voucher` (
    `voucher` VARCHAR(45) NOT NULL,
    `type` ENUM('credits', 'duckets') NOT NULL DEFAULT 'credits',
    `value` INTEGER UNSIGNED NOT NULL DEFAULT 100,
    `current_uses` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `max_uses` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `enabled` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`voucher`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_forum_post` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `threadid` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `message` MEDIUMTEXT NOT NULL,
    `author` VARCHAR(25) NOT NULL,
    `date` VARCHAR(30) NOT NULL,
    `motto` VARCHAR(100) NOT NULL,
    `look` VARCHAR(200) NOT NULL,
    `id_auteur` INTEGER UNSIGNED NOT NULL,
    `rank` BOOLEAN NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `threadid`(`threadid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_forum_thread` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` TINYINT NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `author` VARCHAR(25) NOT NULL,
    `date` VARCHAR(35) NOT NULL,
    `lastpost_author` VARCHAR(25) NOT NULL,
    `lastpost_date` VARCHAR(35) NOT NULL,
    `posts` INTEGER UNSIGNED NOT NULL,
    `main_post` INTEGER UNSIGNED NOT NULL,
    `statut` TINYINT NOT NULL,
    `categorie` BOOLEAN NOT NULL,
    `views` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    UNIQUE INDEX `id`(`id`),
    INDEX `author`(`author`),
    INDEX `categorie`(`categorie`),
    INDEX `date`(`date`),
    INDEX `lastpost_date`(`lastpost_date`),
    INDEX `main_post`(`main_post`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_fourm_category` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NULL,
    `order` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_mail_confirm` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `codedevalidation` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `temps` INTEGER UNSIGNED NOT NULL,
    `type` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `user_id`(`user_id`),
    INDEX `email`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_mail_forgot` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `pass` VARCHAR(200) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `expire` INTEGER UNSIGNED NOT NULL,
    `users` VARCHAR(200) NOT NULL,

    INDEX `pass`(`pass`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_news` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `category_id` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `topstory_image` MEDIUMTEXT NOT NULL,
    `body` MEDIUMTEXT NOT NULL,
    `snippet` MEDIUMTEXT NOT NULL,
    `timestamp` INTEGER NOT NULL,
    `author` VARCHAR(100) NOT NULL,
    `author_id` INTEGER NOT NULL,
    `link_keyword` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `timestam`(`timestamp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_staff` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userid` INTEGER UNSIGNED NOT NULL,
    `rank` INTEGER UNSIGNED NOT NULL,
    `function` VARCHAR(100) NULL,
    `social_insta` VARCHAR(100) NULL,
    `social_discord` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_staff_protect` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(120) NULL DEFAULT '',
    `username` VARCHAR(50) NOT NULL,
    `hide` BOOLEAN NOT NULL DEFAULT false,

    INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_achievement` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(64) NOT NULL DEFAULT 'ACH_',
    `category` VARCHAR(255) NOT NULL DEFAULT 'identity',
    `level` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `reward_pixels` INTEGER UNSIGNED NOT NULL DEFAULT 100,
    `reward_points` INTEGER UNSIGNED NOT NULL DEFAULT 10,
    `progress_needed` INTEGER UNSIGNED NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_banner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `have_layer` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_chat_style` (
    `id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(25) NOT NULL DEFAULT '',
    `required_right` VARCHAR(25) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_command` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `input` VARCHAR(100) NOT NULL,
    `minrank` INTEGER NOT NULL,
    `description_fr` MEDIUMTEXT NULL,
    `description_en` MEDIUMTEXT NULL,
    `description_br` MEDIUMTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_command_pet` (
    `id` INTEGER UNSIGNED NOT NULL,
    `command` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_effect` (
    `id` INTEGER UNSIGNED NOT NULL,
    `only_staff` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_landingview` (
    `index` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `header` VARCHAR(255) NOT NULL DEFAULT '[Header Name]',
    `body` VARCHAR(255) NOT NULL DEFAULT '[BODY]',
    `button` VARCHAR(255) NOT NULL DEFAULT '[BUTTON]',
    `in_game_promo` BOOLEAN NOT NULL DEFAULT true,
    `special_action` VARCHAR(255) NOT NULL DEFAULT '[LINK HERE]',
    `image` VARCHAR(255) NOT NULL DEFAULT '',
    `enabled` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`index`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_lootbox` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `interaction_type` VARCHAR(255) NOT NULL,
    `probability` INTEGER NOT NULL DEFAULT 1,
    `page_id` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL DEFAULT 0,
    `category` ENUM('furni', 'badge', 'winwin', 'credits') NOT NULL DEFAULT 'furni',
    `amount` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_permission` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `rank` INTEGER UNSIGNED NOT NULL,
    `permission` VARCHAR(50) NOT NULL,

    INDEX `rank`(`rank`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_quest` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(32) NOT NULL DEFAULT '',
    `series_number` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `goal_type` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `goal_data` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `name` VARCHAR(32) NOT NULL DEFAULT '',
    `reward` INTEGER UNSIGNED NOT NULL DEFAULT 10,
    `data_bit` VARCHAR(2) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_setting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(255) NOT NULL,
    `value` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `online` INTEGER NOT NULL,
    `time` INTEGER NOT NULL,
    `room` INTEGER NOT NULL,

    UNIQUE INDEX `date`(`time`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_status` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `status` INTEGER NOT NULL DEFAULT 0,
    `users_online` INTEGER NOT NULL DEFAULT 0,
    `rooms_loaded` INTEGER NOT NULL DEFAULT 0,
    `stamp` DOUBLE NOT NULL,
    `userpeak` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emulator_text` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `identifiant` VARCHAR(200) NOT NULL,
    `value_fr` TEXT NULL,
    `value_en` TEXT NULL,
    `value_br` TEXT NULL,

    PRIMARY KEY (`id`, `identifiant`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `desc` VARCHAR(255) NOT NULL,
    `badge` VARCHAR(50) NOT NULL,
    `owner_id` INTEGER UNSIGNED NOT NULL,
    `created` INTEGER UNSIGNED NOT NULL,
    `room_id` INTEGER UNSIGNED NOT NULL,
    `state` INTEGER NOT NULL DEFAULT 0,
    `colour1` INTEGER UNSIGNED NOT NULL,
    `colour2` INTEGER UNSIGNED NOT NULL,
    `admindeco` BOOLEAN NOT NULL DEFAULT false,
    `has_forum` BOOLEAN NOT NULL DEFAULT false,

    INDEX `ownerid`(`owner_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild_item` (
    `id` INTEGER UNSIGNED NOT NULL,
    `type` ENUM('base', 'symbol', 'color', 'color2', 'color3') NOT NULL,
    `firstvalue` VARCHAR(255) NOT NULL,
    `secondvalue` VARCHAR(255) NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`, `type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild_membership` (
    `group_id` INTEGER UNSIGNED NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `rank` INTEGER NOT NULL DEFAULT 0,

    INDEX `groupid`(`group_id`),
    INDEX `userid`(`user_id`),
    PRIMARY KEY (`group_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guild_request` (
    `group_id` INTEGER UNSIGNED NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,

    INDEX `groupid`(`group_id`),
    INDEX `userid`(`user_id`),
    PRIMARY KEY (`group_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `room_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `base_item` INTEGER UNSIGNED NOT NULL,
    `extra_data` VARCHAR(500) NULL DEFAULT '',
    `x` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `y` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `z` DOUBLE NOT NULL DEFAULT 0,
    `rot` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `wall_pos` VARCHAR(100) NULL DEFAULT '',

    INDEX `room_id`(`room_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_base` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `item_name` VARCHAR(100) NOT NULL,
    `type` ENUM('s', 'i', 'r', 'b', 'p', 'c') NOT NULL DEFAULT 's',
    `width` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `length` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `stack_height` DOUBLE NOT NULL DEFAULT 1,
    `can_stack` BOOLEAN NOT NULL DEFAULT true,
    `can_sit` BOOLEAN NOT NULL DEFAULT false,
    `is_walkable` BOOLEAN NOT NULL DEFAULT false,
    `sprite_id` INTEGER UNSIGNED NOT NULL,
    `allow_recycle` BOOLEAN NOT NULL DEFAULT false,
    `allow_trade` BOOLEAN NOT NULL DEFAULT true,
    `allow_marketplace_sell` BOOLEAN NOT NULL DEFAULT false,
    `allow_gift` BOOLEAN NOT NULL DEFAULT true,
    `allow_inventory_stack` BOOLEAN NOT NULL DEFAULT true,
    `interaction_type` VARCHAR(255) NOT NULL DEFAULT 'default',
    `interaction_modes_count` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `vending_ids` VARCHAR(100) NOT NULL DEFAULT '0',
    `height_adjustable` VARCHAR(100) NOT NULL DEFAULT '0',
    `effect_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `is_rare` BOOLEAN NOT NULL DEFAULT false,
    `rarity_level` INTEGER NOT NULL DEFAULT 0,

    INDEX `sprite_id`(`sprite_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_limited` (
    `item_id` INTEGER UNSIGNED NOT NULL,
    `limited_number` INTEGER UNSIGNED NOT NULL,
    `limited_stack` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    UNIQUE INDEX `item_id`(`item_id`),
    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_moodlight` (
    `item_id` INTEGER UNSIGNED NOT NULL,
    `enabled` BOOLEAN NOT NULL DEFAULT false,
    `current_preset` INTEGER UNSIGNED NOT NULL,
    `preset_one` VARCHAR(200) NOT NULL,
    `preset_two` VARCHAR(200) NOT NULL,
    `preset_three` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `item_id`(`item_id`),
    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_present` (
    `item_id` INTEGER UNSIGNED NOT NULL,
    `base_id` INTEGER UNSIGNED NOT NULL,
    `extra_data` VARCHAR(500) NULL DEFAULT '',

    UNIQUE INDEX `item_id`(`item_id`),
    PRIMARY KEY (`item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_stat` (
    `base_id` INTEGER UNSIGNED NOT NULL,
    `amount` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `base_id`(`base_id`),
    PRIMARY KEY (`base_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_teleport` (
    `tele_one_id` INTEGER UNSIGNED NOT NULL,
    `tele_two_id` INTEGER UNSIGNED NOT NULL,

    INDEX `tele_one_id`(`tele_one_id`),
    PRIMARY KEY (`tele_one_id`, `tele_two_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item_wired` (
    `trigger_id` INTEGER UNSIGNED NOT NULL,
    `trigger_data_2` VARCHAR(255) NULL DEFAULT '',
    `trigger_data` MEDIUMTEXT NULL,
    `all_user_triggerable` BOOLEAN NOT NULL DEFAULT true,
    `triggers_item` MEDIUMTEXT NULL,
    `delay` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`trigger_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `room_id` INTEGER NOT NULL,
    `user_name` VARCHAR(200) NOT NULL,
    `timestamp` DOUBLE NOT NULL,
    `message` TEXT NOT NULL,
    `type` VARCHAR(10) NOT NULL,

    INDEX `message`(`message`(100)),
    INDEX `room_id`(`room_id`),
    INDEX `searth`(`timestamp`, `user_id`),
    INDEX `user_id`(`user_id`),
    INDEX `user_name`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_chat_pub` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `user_name` VARCHAR(200) NOT NULL,
    `timestamp` DOUBLE NOT NULL,
    `message` VARCHAR(150) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_command` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `user_name` VARCHAR(100) NOT NULL,
    `roomid` INTEGER UNSIGNED NOT NULL,
    `command` VARCHAR(50) NOT NULL,
    `extra_data` MEDIUMTEXT NOT NULL,
    `timestamp` INTEGER UNSIGNED NOT NULL,

    INDEX `commands`(`command`),
    INDEX `timestamp`(`timestamp`),
    INDEX `user_name`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_flagme` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `oldusername` VARCHAR(50) NOT NULL,
    `newusername` VARCHAR(50) NOT NULL,
    `time` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_login` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `date` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `ip` VARCHAR(255) NOT NULL,
    `user_agent` VARCHAR(255) NOT NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_lootbox` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `interaction_type` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL,
    `base_id` INTEGER NOT NULL,
    `timestamp` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_payment` (
    `history_payment_id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `doc_id` INTEGER UNSIGNED NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `awards` INTEGER UNSIGNED NOT NULL,
    `external_reference` VARCHAR(50) NOT NULL,
    `promo_id` INTEGER UNSIGNED NOT NULL,
    `date` DATETIME(0) NOT NULL,

    INDEX `external_reference`(`external_reference`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`history_payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_shop` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `date` INTEGER UNSIGNED NOT NULL,
    `price` INTEGER UNSIGNED NOT NULL,
    `content` VARCHAR(50) NOT NULL,
    `type` INTEGER UNSIGNED NOT NULL,
    `catalog_item_id` INTEGER NOT NULL DEFAULT 0,

    INDEX `date`(`date`),
    INDEX `type`(`type`),
    INDEX `userid`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_slotmachine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `amount` INTEGER NOT NULL,
    `is_win` BOOLEAN NOT NULL,
    `date` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_staff` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(50) NOT NULL,
    `action` VARCHAR(200) NOT NULL,
    `date` VARCHAR(20) NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_trade` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_one_id` INTEGER UNSIGNED NOT NULL,
    `user_two_id` INTEGER UNSIGNED NOT NULL,
    `user_one_items` MEDIUMTEXT NOT NULL,
    `user_two_items` MEDIUMTEXT NOT NULL,
    `room_id` INTEGER UNSIGNED NOT NULL,
    `time` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `log_vpn` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ip` VARCHAR(255) NOT NULL,
    `ip_country` VARCHAR(4) NULL,
    `host` VARCHAR(255) NULL,
    `timestamp_created` INTEGER NOT NULL,
    `is_vpn` BOOLEAN NOT NULL DEFAULT true,

    INDEX `ipandhost`(`ip`, `host`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messenger_friendship` (
    `user_one_id` INTEGER UNSIGNED NOT NULL,
    `user_two_id` INTEGER UNSIGNED NOT NULL,
    `relation` INTEGER NOT NULL DEFAULT 0,

    INDEX `user_one_id`(`user_one_id`),
    INDEX `user_two_id`(`user_two_id`),
    PRIMARY KEY (`user_one_id`, `user_two_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messenger_offline_message` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `to_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `from_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `message` VARCHAR(255) NOT NULL,
    `timestamp` DOUBLE NOT NULL DEFAULT 0,

    INDEX `to_id`(`to_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messenger_request` (
    `from_id` INTEGER UNSIGNED NOT NULL,
    `to_id` INTEGER UNSIGNED NOT NULL,

    INDEX `from_id`(`from_id`),
    INDEX `to_id`(`to_id`),
    PRIMARY KEY (`from_id`, `to_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moderation_preset` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `type` ENUM('message', 'roommessage') NOT NULL DEFAULT 'message',
    `message` MEDIUMTEXT NOT NULL,

    INDEX `enabled`(`enabled`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moderation_resolution` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` ENUM('Sexual', 'PII') NOT NULL DEFAULT 'Sexual',
    `title` VARCHAR(100) NOT NULL,
    `subtitle` VARCHAR(100) NOT NULL,
    `ban_hours` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `enable_mute` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `mute_hours` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `reminder` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `message` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moderation_ticket` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `score` INTEGER UNSIGNED NOT NULL,
    `type` INTEGER UNSIGNED NOT NULL,
    `status` ENUM('open', 'picked', 'resolved', 'abusive', 'invalid', 'deleted') NOT NULL DEFAULT 'open',
    `sender_id` INTEGER UNSIGNED NOT NULL,
    `reported_id` INTEGER UNSIGNED NOT NULL,
    `moderator_id` INTEGER UNSIGNED NOT NULL,
    `message` VARCHAR(500) NOT NULL,
    `room_id` INTEGER UNSIGNED NOT NULL,
    `room_name` VARCHAR(100) NOT NULL,
    `timestamp` DOUBLE NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `sender_id`(`sender_id`),
    INDEX `statue`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moderation_topic` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(225) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moderation_topic_action` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` INTEGER UNSIGNED NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `caption` VARCHAR(225) NOT NULL DEFAULT '',
    `message_text` VARCHAR(255) NOT NULL,
    `default_sanction` VARCHAR(255) NOT NULL,
    `mute_time` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `ban_time` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `ip_time` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `trade_lock_time` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `navigator_category` (
    `id` INTEGER UNSIGNED NOT NULL,
    `category` ENUM('official_view', 'hotel_view', 'myworld_view', 'roomads_view', 'query', 'rooms_game') NOT NULL DEFAULT 'hotel_view',
    `category_identifier` VARCHAR(35) NOT NULL DEFAULT '',
    `public_name` VARCHAR(35) NOT NULL DEFAULT '',
    `view_mode` ENUM('REGULAR', 'THUMBNAIL') NOT NULL DEFAULT 'REGULAR',
    `required_rank` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `category_type` VARCHAR(25) NOT NULL DEFAULT 'category',
    `search_allowance` ENUM('NOTHING', 'SHOW_MORE') NOT NULL DEFAULT 'SHOW_MORE',
    `minimized` BOOLEAN NOT NULL DEFAULT false,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `order_id` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `navigator_public` (
    `room_id` INTEGER UNSIGNED NOT NULL,
    `image_url` MEDIUMTEXT NULL,
    `order_num` INTEGER NOT NULL DEFAULT 1,
    `enabled` BOOLEAN NOT NULL DEFAULT true,
    `langue` ENUM('fr', 'en', 'br') NOT NULL DEFAULT 'fr',
    `category_type` VARCHAR(25) NOT NULL DEFAULT 'featured',

    PRIMARY KEY (`room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roleplay` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `owner_id` INTEGER UNSIGNED NOT NULL,
    `hopital_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `prison_id` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roleplay_enemy` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` ENUM('bot', 'pet') NOT NULL DEFAULT 'bot',
    `health` INTEGER UNSIGNED NOT NULL DEFAULT 100,
    `weapon_far_id` INTEGER UNSIGNED NOT NULL DEFAULT 4,
    `weapon_cac_id` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `dead_timer` INTEGER UNSIGNED NOT NULL DEFAULT 30,
    `loot_item_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `money_drop` INTEGER UNSIGNED NOT NULL DEFAULT 10,
    `drop_script_id` INTEGER NOT NULL DEFAULT 5461,
    `team_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `aggro_distance` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `zone_distance` INTEGER UNSIGNED NOT NULL,
    `reset_position` BOOLEAN NOT NULL DEFAULT true,
    `lost_aggro_distance` INTEGER UNSIGNED NOT NULL DEFAULT 12,
    `zombie_mode` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`, `type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roleplay_item` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `desc` MEDIUMTEXT NULL,
    `price` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `type` ENUM('munition', 'health', 'energy', 'weapon_cac', 'weapon_far', 'none', 'money', 'healthenergy', 'healthtired', 'showtime', 'enable', 'hit', 'openguide', 'energytired', 'openpage') NOT NULL,
    `value` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `allowstack` BOOLEAN NOT NULL DEFAULT true,
    `category` ENUM('EQUIP', 'UTIL', 'RESSOURCE', 'QUETE') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roleplay_weapon` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `type` ENUM('cac', 'far') NOT NULL DEFAULT 'cac',
    `domage_min` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `domage_max` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `interaction` ENUM('none') NOT NULL DEFAULT 'none',
    `enable` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `freeze_time` INTEGER UNSIGNED NOT NULL DEFAULT 2,
    `distance` INTEGER UNSIGNED NOT NULL DEFAULT 10,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `caption` VARCHAR(100) NOT NULL DEFAULT 'Room',
    `owner` VARCHAR(75) NOT NULL,
    `description` VARCHAR(255) NULL DEFAULT '',
    `category` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `state` ENUM('open', 'locked', 'password', 'hide') NOT NULL DEFAULT 'open',
    `users_max` INTEGER UNSIGNED NOT NULL DEFAULT 25,
    `model_name` VARCHAR(50) NOT NULL,
    `score` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `tags` VARCHAR(100) NULL DEFAULT '',
    `password` VARCHAR(30) NULL DEFAULT '',
    `wallpaper` VARCHAR(10) NOT NULL DEFAULT '0.0',
    `floor` VARCHAR(10) NOT NULL DEFAULT '0.0',
    `landscape` VARCHAR(10) NOT NULL DEFAULT '0.0',
    `allow_pets` BOOLEAN NOT NULL DEFAULT true,
    `allow_pets_eat` BOOLEAN NOT NULL DEFAULT false,
    `allow_walkthrough` BOOLEAN NOT NULL DEFAULT false,
    `allow_hidewall` BOOLEAN NOT NULL DEFAULT false,
    `wallthick` INTEGER NOT NULL DEFAULT 0,
    `floorthick` INTEGER NOT NULL DEFAULT 0,
    `moderation_mute_fuse` BOOLEAN NOT NULL DEFAULT false,
    `allow_rightsoverride` BOOLEAN NOT NULL DEFAULT false,
    `moderation_kick_fuse` INTEGER NOT NULL DEFAULT 0,
    `moderation_ban_fuse` BOOLEAN NOT NULL DEFAULT false,
    `group_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `chat_type` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `chat_balloon` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `chat_speed` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `chat_max_distance` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `chat_flood_protection` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `troc_status` INTEGER NOT NULL DEFAULT 2,
    `users_now` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `allow_hidewireds` BOOLEAN NOT NULL DEFAULT false,
    `price` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `wired_security` BOOLEAN NOT NULL DEFAULT true,

    INDEX `caption`(`caption`),
    INDEX `category`(`category`),
    INDEX `owner`(`owner`),
    INDEX `score`(`score`),
    INDEX `users_now`(`users_now`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room_model` (
    `id` VARCHAR(100) NOT NULL,
    `door_x` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `door_y` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `door_z` DOUBLE NOT NULL DEFAULT 0,
    `door_dir` INTEGER UNSIGNED NOT NULL DEFAULT 2,
    `heightmap` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room_model_custom` (
    `room_id` INTEGER UNSIGNED NOT NULL,
    `door_x` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `door_y` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `door_z` DOUBLE NOT NULL DEFAULT 0,
    `door_dir` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `heightmap` MEDIUMTEXT NOT NULL,
    `wall_height` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room_right` (
    `room_id` INTEGER UNSIGNED NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,

    INDEX `room_id`(`room_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`room_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `room_swearword_filter` (
    `word` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`word`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `mail` VARCHAR(100) NULL DEFAULT '',
    `auth_ticket` VARCHAR(100) NULL DEFAULT '',
    `rank` INTEGER UNSIGNED NOT NULL DEFAULT 1,
    `credits` INTEGER UNSIGNED NOT NULL DEFAULT 50000,
    `activity_points` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `look` VARCHAR(250) NOT NULL DEFAULT 'hr-115-42.hd-190-1.ch-215-62.lg-285-91.sh-290-62',
    `gender` ENUM('M', 'F') NOT NULL DEFAULT 'M',
    `motto` VARCHAR(50) NULL DEFAULT '',
    `account_created` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `last_online` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `online` BOOLEAN NOT NULL DEFAULT false,
    `ip_last` VARCHAR(120) NULL DEFAULT '',
    `machine_id` VARCHAR(100) NULL DEFAULT '',
    `home_room` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `block_newfriends` BOOLEAN NOT NULL DEFAULT false,
    `hide_online` BOOLEAN NOT NULL DEFAULT false,
    `hide_inroom` BOOLEAN NOT NULL DEFAULT false,
    `last_offline` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `mois_vip` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `volume` VARCHAR(11) NOT NULL DEFAULT '100,100,100',
    `vip_points` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `limit_coins` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `accept_trading` BOOLEAN NOT NULL DEFAULT true,
    `camera_follow_disabled` BOOLEAN NOT NULL DEFAULT false,
    `ignore_room_invite` BOOLEAN NOT NULL DEFAULT false,
    `lastdailycredits` VARCHAR(10) NOT NULL DEFAULT '00/00',
    `hide_gamealert` BOOLEAN NOT NULL DEFAULT false,
    `ipcountry` VARCHAR(2) NULL DEFAULT '',
    `game_points` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `game_points_month` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `mazoscore` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `mazo` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `nux_enable` BOOLEAN NOT NULL DEFAULT true,
    `langue` ENUM('fr', 'en', 'br') NOT NULL DEFAULT 'fr',
    `run_points` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `run_points_month` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `is_banned` BOOLEAN NOT NULL DEFAULT false,
    `banner_id` INTEGER NOT NULL DEFAULT -1,

    UNIQUE INDEX `username`(`username`),
    INDEX `auth_ticket`(`auth_ticket`),
    INDEX `gamepoint`(`game_points`),
    INDEX `gamepoint_mouth`(`game_points_month`),
    INDEX `ip_last`(`ip_last`),
    INDEX `mail`(`mail`),
    INDEX `mazo`(`mazo`),
    INDEX `mazoscore`(`mazoscore`),
    INDEX `vip_points`(`vip_points`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_achievement` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `group` VARCHAR(255) NOT NULL,
    `level` INTEGER UNSIGNED NOT NULL,
    `progress` INTEGER UNSIGNED NOT NULL,

    INDEX `id`(`user_id`),
    PRIMARY KEY (`user_id`, `group`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_badge` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `badge_id` VARCHAR(100) NOT NULL,
    `badge_slot` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    INDEX `badge_id`(`badge_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`user_id`, `badge_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_banner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `banner_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_favorite` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `room_id` INTEGER UNSIGNED NOT NULL,

    INDEX `room_id`(`room_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`user_id`, `room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_photo` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `photo` VARCHAR(32) NOT NULL,
    `time` INTEGER UNSIGNED NOT NULL,

    INDEX `time`(`time`),
    INDEX `userid`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_premium` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `timestamp_activated` INTEGER NOT NULL DEFAULT 0,
    `timestamp_expire_classic` INTEGER NOT NULL DEFAULT 0,
    `timestamp_expire_epic` INTEGER NOT NULL DEFAULT 0,
    `timestamp_expire_legend` INTEGER NOT NULL DEFAULT 0,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_quest` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `quest_id` INTEGER UNSIGNED NOT NULL,
    `progress` INTEGER UNSIGNED NOT NULL,

    INDEX `questid`(`quest_id`),
    INDEX `userid`(`user_id`),
    PRIMARY KEY (`user_id`, `quest_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_roleplay` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `roleplay_id` INTEGER UNSIGNED NOT NULL,
    `health` INTEGER UNSIGNED NOT NULL DEFAULT 100,
    `energy` INTEGER UNSIGNED NOT NULL DEFAULT 100,
    `money` INTEGER NOT NULL DEFAULT 0,
    `munition` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `exp` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `weapon_far` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `weapon_cac` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `hygiene` INTEGER UNSIGNED NOT NULL DEFAULT 100,
    `money_1` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `money_2` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `money_3` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `money_4` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    INDEX `user_id`(`user_id`, `roleplay_id`),
    PRIMARY KEY (`user_id`, `roleplay_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_roleplay_item` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `rp_id` INTEGER UNSIGNED NOT NULL,
    `item_id` INTEGER UNSIGNED NOT NULL,
    `count` INTEGER UNSIGNED NOT NULL DEFAULT 1,

    INDEX `user_id`(`user_id`, `rp_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_stats` (
    `id` INTEGER UNSIGNED NOT NULL,
    `online_time` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `respect` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `respect_given` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `gifts_given` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `gifts_received` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `daily_respect_points` INTEGER UNSIGNED NOT NULL DEFAULT 3,
    `daily_pet_respect_points` INTEGER UNSIGNED NOT NULL DEFAULT 3,
    `achievement_score` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `quest_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `quest_progress` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `lev_builder` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `lev_social` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `lev_identity` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `lev_explore` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `group_id` INTEGER UNSIGNED NOT NULL DEFAULT 0,

    INDEX `AchievementScore`(`achievement_score`),
    INDEX `groupid`(`group_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_wardrobe` (
    `user_id` INTEGER UNSIGNED NOT NULL,
    `slot_id` INTEGER UNSIGNED NOT NULL,
    `look` VARCHAR(250) NOT NULL,
    `gender` ENUM('F', 'M') NOT NULL DEFAULT 'M',

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`user_id`, `slot_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `word_filter_retro` (
    `word` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`word`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `catalog_item_limited` ADD CONSTRAINT `catalog_item_id` FOREIGN KEY (`catalog_item_id`) REFERENCES `catalog_item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_stat` ADD CONSTRAINT `foregnkeysbaseid` FOREIGN KEY (`base_id`) REFERENCES `item_base`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_login` ADD CONSTRAINT `log_login_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

