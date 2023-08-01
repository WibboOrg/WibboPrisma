/*
  Warnings:

  - The primary key for the `ban` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `ban` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `bot_pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `room_id` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `type` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `experience` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `energy` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `nutrition` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `respect` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `x` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `y` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `have_saddle` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `hairdye` on the `bot_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `bot_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `bot_user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `bot_user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_bot_preset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `catalog_bot_preset` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `page_id` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `item_id` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `cost_credits` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `cost_pixels` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `cost_diamonds` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `cost_limitcoins` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `amount` on the `catalog_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_item_limited` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `catalog_item_id` on the `catalog_item_limited` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_marketplace_data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `catalog_marketplace_data` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `sprite` on the `catalog_marketplace_data` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `sold` on the `catalog_marketplace_data` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `avgprice` on the `catalog_marketplace_data` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_marketplace_offer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `offer_id` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `item_id` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `asking_price` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `total_price` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `sprite_id` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `furni_id` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `limited_number` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `limited_stack` on the `catalog_marketplace_offer` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_page` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `catalog_page` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `icon_image` on the `catalog_page` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_page_langue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `page_id` on the `catalog_page_langue` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_pet_race` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `catalog_pet_race` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `raceid` on the `catalog_pet_race` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `color1` on the `catalog_pet_race` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `color2` on the `catalog_pet_race` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `catalog_promotion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `catalog_promotion` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `unknown` on the `catalog_promotion` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `value` on the `catalog_voucher` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `current_uses` on the `catalog_voucher` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `max_uses` on the `catalog_voucher` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_forum_post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cms_forum_post` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `threadid` on the `cms_forum_post` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `id_auteur` on the `cms_forum_post` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_forum_thread` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cms_forum_thread` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `posts` on the `cms_forum_thread` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `main_post` on the `cms_forum_thread` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `views` on the `cms_forum_thread` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_fourm_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cms_fourm_category` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `order` on the `cms_fourm_category` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_mail_confirm` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `cms_mail_confirm` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `temps` on the `cms_mail_confirm` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_mail_forgot` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cms_mail_forgot` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `expire` on the `cms_mail_forgot` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_news` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cms_news` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `category_id` on the `cms_news` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_staff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cms_staff` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `userid` on the `cms_staff` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `rank` on the `cms_staff` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `cms_staff_protect` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cms_staff_protect` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `level` on the `emulator_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `reward_pixels` on the `emulator_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `reward_points` on the `emulator_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `progress_needed` on the `emulator_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_chat_style` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_chat_style` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_command` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_command` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_command_pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_command_pet` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_effect` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_effect` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_landingview` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `index` on the `emulator_landingview` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_permission` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `rank` on the `emulator_permission` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_quest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `series_number` on the `emulator_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `goal_type` on the `emulator_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `goal_data` on the `emulator_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `reward` on the `emulator_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_status` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_status` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `emulator_text` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `emulator_text` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `guild` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `guild` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `owner_id` on the `guild` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `created` on the `guild` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `room_id` on the `guild` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `colour1` on the `guild` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `colour2` on the `guild` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `guild_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `guild_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `guild_membership` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `group_id` on the `guild_membership` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `guild_membership` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `guild_request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `group_id` on the `guild_request` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `guild_request` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `room_id` on the `item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `base_item` on the `item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `x` on the `item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `y` on the `item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `rot` on the `item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item_base` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `item_base` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `width` on the `item_base` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `length` on the `item_base` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `sprite_id` on the `item_base` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `interaction_modes_count` on the `item_base` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `effect_id` on the `item_base` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item_limited` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `item_id` on the `item_limited` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `limited_number` on the `item_limited` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `limited_stack` on the `item_limited` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item_moodlight` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `item_id` on the `item_moodlight` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `current_preset` on the `item_moodlight` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item_present` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `item_id` on the `item_present` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `base_id` on the `item_present` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item_stat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `base_id` on the `item_stat` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item_teleport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `tele_one_id` on the `item_teleport` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `tele_two_id` on the `item_teleport` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `item_wired` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `trigger_id` on the `item_wired` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `delay` on the `item_wired` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `log_command` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `log_command` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `log_command` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `roomid` on the `log_command` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `timestamp` on the `log_command` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `log_flagme` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `log_flagme` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `log_flagme` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `time` on the `log_flagme` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `log_login` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `log_login` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `log_login` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `date` on the `log_login` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `log_payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `history_payment_id` on the `log_payment` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `doc_id` on the `log_payment` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `log_payment` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `awards` on the `log_payment` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `promo_id` on the `log_payment` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `log_shop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `log_shop` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `log_shop` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `date` on the `log_shop` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `price` on the `log_shop` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `type` on the `log_shop` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `log_staff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `log_staff` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `log_trade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `log_trade` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_one_id` on the `log_trade` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_two_id` on the `log_trade` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `room_id` on the `log_trade` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `time` on the `log_trade` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `messenger_friendship` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_one_id` on the `messenger_friendship` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_two_id` on the `messenger_friendship` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `messenger_offline_message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `messenger_offline_message` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `to_id` on the `messenger_offline_message` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `from_id` on the `messenger_offline_message` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `messenger_request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `from_id` on the `messenger_request` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `to_id` on the `messenger_request` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `moderation_preset` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `moderation_preset` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `moderation_resolution` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `moderation_resolution` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `ban_hours` on the `moderation_resolution` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `enable_mute` on the `moderation_resolution` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `mute_hours` on the `moderation_resolution` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `reminder` on the `moderation_resolution` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `moderation_ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `moderation_ticket` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `score` on the `moderation_ticket` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `type` on the `moderation_ticket` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `sender_id` on the `moderation_ticket` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `reported_id` on the `moderation_ticket` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `moderator_id` on the `moderation_ticket` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `room_id` on the `moderation_ticket` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `moderation_topic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `moderation_topic` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `moderation_topic_action` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `parent_id` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `mute_time` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `ban_time` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `ip_time` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `trade_lock_time` on the `moderation_topic_action` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `navigator_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `navigator_category` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `required_rank` on the `navigator_category` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `navigator_public` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `room_id` on the `navigator_public` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `roleplay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `owner_id` on the `roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `hopital_id` on the `roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `prison_id` on the `roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `roleplay_enemy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `health` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `weapon_far_id` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `weapon_cac_id` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `dead_timer` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `loot_item_id` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `money_drop` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `team_id` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `aggro_distance` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `zone_distance` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `lost_aggro_distance` on the `roleplay_enemy` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `roleplay_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `price` on the `roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `value` on the `roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `roleplay_weapon` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `roleplay_weapon` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `domage_min` on the `roleplay_weapon` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `domage_max` on the `roleplay_weapon` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `enable` on the `roleplay_weapon` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `freeze_time` on the `roleplay_weapon` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `distance` on the `roleplay_weapon` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `category` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `users_max` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `score` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `group_id` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `chat_type` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `chat_balloon` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `chat_speed` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `chat_max_distance` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `chat_flood_protection` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `users_now` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `price` on the `room` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `door_x` on the `room_model` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `door_y` on the `room_model` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `door_dir` on the `room_model` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `room_model_custom` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `room_id` on the `room_model_custom` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `door_x` on the `room_model_custom` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `door_y` on the `room_model_custom` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `door_dir` on the `room_model_custom` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `room_right` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `room_id` on the `room_right` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `room_right` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `rank` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `credits` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `activity_points` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `account_created` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `last_online` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `home_room` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `last_offline` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `mois_vip` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `vip_points` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `limit_coins` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `game_points` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `game_points_month` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `mazoscore` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `mazo` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `run_points` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `run_points_month` on the `user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `user_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `level` on the `user_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `progress` on the `user_achievement` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_badge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `user_badge` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `badge_slot` on the `user_badge` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_photo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_photo` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `user_photo` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `time` on the `user_photo` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_premium` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `user_premium` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_quest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `user_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `quest_id` on the `user_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `progress` on the `user_quest` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_roleplay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `roleplay_id` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `health` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `energy` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `munition` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `exp` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `weapon_far` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `weapon_cac` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `hygiene` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `money_1` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `money_2` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `money_3` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `money_4` on the `user_roleplay` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_roleplay_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `user_id` on the `user_roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `rp_id` on the `user_roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `item_id` on the `user_roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `count` on the `user_roleplay_item` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_stats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `online_time` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `respect` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `respect_given` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `gifts_given` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `gifts_received` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `daily_respect_points` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `daily_pet_respect_points` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `achievement_score` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `quest_id` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `quest_progress` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `lev_builder` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `lev_social` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `lev_identity` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `lev_explore` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `group_id` on the `user_stats` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - The primary key for the `user_wardrobe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `user_id` on the `user_wardrobe` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to alter the column `slot_id` on the `user_wardrobe` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `Int`.
  - You are about to drop the `user_favorite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `catalog_item_limited` DROP FOREIGN KEY `catalog_item_id`;

-- DropForeignKey
ALTER TABLE `item_stat` DROP FOREIGN KEY `foregnkeysbaseid`;

-- DropForeignKey
ALTER TABLE `log_login` DROP FOREIGN KEY `log_login_ibfk_1`;

-- AlterTable
ALTER TABLE `ban` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `bot_pet` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `room_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `type` INTEGER NOT NULL,
    MODIFY `experience` INTEGER NOT NULL,
    MODIFY `energy` INTEGER NOT NULL,
    MODIFY `nutrition` INTEGER NOT NULL DEFAULT 100,
    MODIFY `respect` INTEGER NOT NULL DEFAULT 0,
    MODIFY `x` INTEGER NOT NULL DEFAULT 0,
    MODIFY `y` INTEGER NOT NULL DEFAULT 0,
    MODIFY `have_saddle` INTEGER NOT NULL DEFAULT 0,
    MODIFY `hairdye` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `bot_user` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `catalog_bot_preset` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `catalog_item` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `page_id` INTEGER NOT NULL,
    MODIFY `item_id` INTEGER NOT NULL,
    MODIFY `cost_credits` INTEGER NOT NULL DEFAULT 1,
    MODIFY `cost_pixels` INTEGER NOT NULL DEFAULT 0,
    MODIFY `cost_diamonds` INTEGER NOT NULL DEFAULT 0,
    MODIFY `cost_limitcoins` INTEGER NOT NULL DEFAULT 0,
    MODIFY `amount` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `catalog_item_limited` DROP PRIMARY KEY,
    MODIFY `catalog_item_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`catalog_item_id`);

-- AlterTable
ALTER TABLE `catalog_marketplace_data` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `sprite` INTEGER NOT NULL,
    MODIFY `sold` INTEGER NOT NULL DEFAULT 0,
    MODIFY `avgprice` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `catalog_marketplace_offer` DROP PRIMARY KEY,
    MODIFY `offer_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `item_id` INTEGER NOT NULL,
    MODIFY `asking_price` INTEGER NOT NULL,
    MODIFY `total_price` INTEGER NOT NULL DEFAULT 0,
    MODIFY `sprite_id` INTEGER NOT NULL,
    MODIFY `furni_id` INTEGER NOT NULL,
    MODIFY `limited_number` INTEGER NOT NULL DEFAULT 0,
    MODIFY `limited_stack` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`offer_id`);

-- AlterTable
ALTER TABLE `catalog_page` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `icon_image` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `catalog_page_langue` DROP PRIMARY KEY,
    MODIFY `page_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`page_id`);

-- AlterTable
ALTER TABLE `catalog_pet_race` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `raceid` INTEGER NOT NULL,
    MODIFY `color1` INTEGER NULL,
    MODIFY `color2` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `catalog_promotion` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `unknown` INTEGER NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `catalog_voucher` MODIFY `value` INTEGER NOT NULL DEFAULT 100,
    MODIFY `current_uses` INTEGER NOT NULL DEFAULT 0,
    MODIFY `max_uses` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `cms_forum_post` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `threadid` INTEGER NOT NULL DEFAULT 0,
    MODIFY `id_auteur` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cms_forum_thread` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `posts` INTEGER NOT NULL,
    MODIFY `main_post` INTEGER NOT NULL,
    MODIFY `views` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cms_fourm_category` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `order` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cms_mail_confirm` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `temps` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- AlterTable
ALTER TABLE `cms_mail_forgot` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `expire` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cms_news` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `category_id` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cms_staff` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `userid` INTEGER NOT NULL,
    MODIFY `rank` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cms_staff_protect` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_achievement` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `level` INTEGER NOT NULL DEFAULT 1,
    MODIFY `reward_pixels` INTEGER NOT NULL DEFAULT 100,
    MODIFY `reward_points` INTEGER NOT NULL DEFAULT 10,
    MODIFY `progress_needed` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_chat_style` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_command` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_command_pet` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_effect` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_landingview` DROP PRIMARY KEY,
    MODIFY `index` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`index`);

-- AlterTable
ALTER TABLE `emulator_permission` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `rank` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_quest` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `series_number` INTEGER NOT NULL DEFAULT 0,
    MODIFY `goal_type` INTEGER NOT NULL DEFAULT 0,
    MODIFY `goal_data` INTEGER NOT NULL DEFAULT 0,
    MODIFY `reward` INTEGER NOT NULL DEFAULT 10,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_status` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `emulator_text` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`, `identifiant`);

-- AlterTable
ALTER TABLE `guild` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `owner_id` INTEGER NOT NULL,
    MODIFY `created` INTEGER NOT NULL,
    MODIFY `room_id` INTEGER NOT NULL,
    MODIFY `colour1` INTEGER NOT NULL,
    MODIFY `colour2` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `guild_item` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`, `type`);

-- AlterTable
ALTER TABLE `guild_membership` DROP PRIMARY KEY,
    MODIFY `group_id` INTEGER NOT NULL,
    MODIFY `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`group_id`, `user_id`);

-- AlterTable
ALTER TABLE `guild_request` DROP PRIMARY KEY,
    MODIFY `group_id` INTEGER NOT NULL,
    MODIFY `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`group_id`, `user_id`);

-- AlterTable
ALTER TABLE `item` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `room_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `base_item` INTEGER NOT NULL,
    MODIFY `x` INTEGER NOT NULL DEFAULT 0,
    MODIFY `y` INTEGER NOT NULL DEFAULT 0,
    MODIFY `rot` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `item_base` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `width` INTEGER NOT NULL DEFAULT 1,
    MODIFY `length` INTEGER NOT NULL DEFAULT 1,
    MODIFY `sprite_id` INTEGER NOT NULL,
    MODIFY `interaction_modes_count` INTEGER NOT NULL DEFAULT 1,
    MODIFY `effect_id` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `item_limited` DROP PRIMARY KEY,
    MODIFY `item_id` INTEGER NOT NULL,
    MODIFY `limited_number` INTEGER NOT NULL,
    MODIFY `limited_stack` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`item_id`);

-- AlterTable
ALTER TABLE `item_moodlight` DROP PRIMARY KEY,
    MODIFY `item_id` INTEGER NOT NULL,
    MODIFY `current_preset` INTEGER NOT NULL,
    ADD PRIMARY KEY (`item_id`);

-- AlterTable
ALTER TABLE `item_present` DROP PRIMARY KEY,
    MODIFY `item_id` INTEGER NOT NULL,
    MODIFY `base_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`item_id`);

-- AlterTable
ALTER TABLE `item_stat` DROP PRIMARY KEY,
    MODIFY `base_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`base_id`);

-- AlterTable
ALTER TABLE `item_teleport` DROP PRIMARY KEY,
    MODIFY `tele_one_id` INTEGER NOT NULL,
    MODIFY `tele_two_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`tele_one_id`, `tele_two_id`);

-- AlterTable
ALTER TABLE `item_wired` DROP PRIMARY KEY,
    MODIFY `trigger_id` INTEGER NOT NULL,
    MODIFY `delay` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`trigger_id`);

-- AlterTable
ALTER TABLE `log_command` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `roomid` INTEGER NOT NULL,
    MODIFY `timestamp` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `log_flagme` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `time` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `log_login` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `date` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `log_payment` DROP PRIMARY KEY,
    MODIFY `history_payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `doc_id` INTEGER NOT NULL,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `awards` INTEGER NOT NULL,
    MODIFY `promo_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`history_payment_id`);

-- AlterTable
ALTER TABLE `log_shop` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `date` INTEGER NOT NULL,
    MODIFY `price` INTEGER NOT NULL,
    MODIFY `type` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `log_staff` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `log_trade` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_one_id` INTEGER NOT NULL,
    MODIFY `user_two_id` INTEGER NOT NULL,
    MODIFY `room_id` INTEGER NOT NULL,
    MODIFY `time` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `messenger_friendship` DROP PRIMARY KEY,
    MODIFY `user_one_id` INTEGER NOT NULL,
    MODIFY `user_two_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_one_id`, `user_two_id`);

-- AlterTable
ALTER TABLE `messenger_offline_message` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `to_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `from_id` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `messenger_request` DROP PRIMARY KEY,
    MODIFY `from_id` INTEGER NOT NULL,
    MODIFY `to_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`from_id`, `to_id`);

-- AlterTable
ALTER TABLE `moderation_preset` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `moderation_resolution` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `ban_hours` INTEGER NOT NULL DEFAULT 0,
    MODIFY `enable_mute` INTEGER NOT NULL DEFAULT 0,
    MODIFY `mute_hours` INTEGER NOT NULL DEFAULT 0,
    MODIFY `reminder` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `moderation_ticket` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `score` INTEGER NOT NULL,
    MODIFY `type` INTEGER NOT NULL,
    MODIFY `sender_id` INTEGER NOT NULL,
    MODIFY `reported_id` INTEGER NOT NULL,
    MODIFY `moderator_id` INTEGER NOT NULL,
    MODIFY `room_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `moderation_topic` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `moderation_topic_action` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `parent_id` INTEGER NOT NULL,
    MODIFY `mute_time` INTEGER NOT NULL DEFAULT 0,
    MODIFY `ban_time` INTEGER NOT NULL DEFAULT 0,
    MODIFY `ip_time` INTEGER NOT NULL DEFAULT 0,
    MODIFY `trade_lock_time` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `navigator_category` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    MODIFY `required_rank` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `navigator_public` DROP PRIMARY KEY,
    MODIFY `room_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`room_id`);

-- AlterTable
ALTER TABLE `roleplay` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `owner_id` INTEGER NOT NULL,
    MODIFY `hopital_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `prison_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `roleplay_enemy` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `health` INTEGER NOT NULL DEFAULT 100,
    MODIFY `weapon_far_id` INTEGER NOT NULL DEFAULT 4,
    MODIFY `weapon_cac_id` INTEGER NOT NULL DEFAULT 1,
    MODIFY `dead_timer` INTEGER NOT NULL DEFAULT 30,
    MODIFY `loot_item_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `money_drop` INTEGER NOT NULL DEFAULT 10,
    MODIFY `team_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `aggro_distance` INTEGER NOT NULL DEFAULT 0,
    MODIFY `zone_distance` INTEGER NOT NULL,
    MODIFY `lost_aggro_distance` INTEGER NOT NULL DEFAULT 12,
    ADD PRIMARY KEY (`id`, `type`);

-- AlterTable
ALTER TABLE `roleplay_item` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `price` INTEGER NOT NULL DEFAULT 0,
    MODIFY `value` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `roleplay_weapon` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `domage_min` INTEGER NOT NULL DEFAULT 0,
    MODIFY `domage_max` INTEGER NOT NULL DEFAULT 0,
    MODIFY `enable` INTEGER NOT NULL DEFAULT 0,
    MODIFY `freeze_time` INTEGER NOT NULL DEFAULT 2,
    MODIFY `distance` INTEGER NOT NULL DEFAULT 10,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `room` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `category` INTEGER NOT NULL DEFAULT 0,
    MODIFY `users_max` INTEGER NOT NULL DEFAULT 25,
    MODIFY `score` INTEGER NOT NULL DEFAULT 0,
    MODIFY `group_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `chat_type` INTEGER NOT NULL DEFAULT 0,
    MODIFY `chat_balloon` INTEGER NOT NULL DEFAULT 0,
    MODIFY `chat_speed` INTEGER NOT NULL DEFAULT 0,
    MODIFY `chat_max_distance` INTEGER NOT NULL DEFAULT 0,
    MODIFY `chat_flood_protection` INTEGER NOT NULL DEFAULT 0,
    MODIFY `users_now` INTEGER NOT NULL DEFAULT 0,
    MODIFY `price` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `room_model` MODIFY `door_x` INTEGER NOT NULL DEFAULT 0,
    MODIFY `door_y` INTEGER NOT NULL DEFAULT 0,
    MODIFY `door_dir` INTEGER NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE `room_model_custom` DROP PRIMARY KEY,
    MODIFY `room_id` INTEGER NOT NULL,
    MODIFY `door_x` INTEGER NOT NULL DEFAULT 0,
    MODIFY `door_y` INTEGER NOT NULL DEFAULT 0,
    MODIFY `door_dir` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`room_id`);

-- AlterTable
ALTER TABLE `room_right` DROP PRIMARY KEY,
    MODIFY `room_id` INTEGER NOT NULL,
    MODIFY `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`room_id`, `user_id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `rank` INTEGER NOT NULL DEFAULT 1,
    MODIFY `credits` INTEGER NOT NULL DEFAULT 50000,
    MODIFY `activity_points` INTEGER NOT NULL DEFAULT 0,
    MODIFY `account_created` INTEGER NOT NULL DEFAULT 0,
    MODIFY `last_online` INTEGER NOT NULL DEFAULT 0,
    MODIFY `home_room` INTEGER NOT NULL DEFAULT 0,
    MODIFY `last_offline` INTEGER NOT NULL DEFAULT 0,
    MODIFY `mois_vip` INTEGER NOT NULL DEFAULT 0,
    MODIFY `vip_points` INTEGER NOT NULL DEFAULT 0,
    MODIFY `limit_coins` INTEGER NOT NULL DEFAULT 0,
    MODIFY `game_points` INTEGER NOT NULL DEFAULT 0,
    MODIFY `game_points_month` INTEGER NOT NULL DEFAULT 0,
    MODIFY `mazoscore` INTEGER NOT NULL DEFAULT 0,
    MODIFY `mazo` INTEGER NOT NULL DEFAULT 0,
    MODIFY `run_points` INTEGER NOT NULL DEFAULT 0,
    MODIFY `run_points_month` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user_achievement` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `level` INTEGER NOT NULL,
    MODIFY `progress` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `group`);

-- AlterTable
ALTER TABLE `user_badge` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `badge_slot` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`user_id`, `badge_id`);

-- AlterTable
ALTER TABLE `user_photo` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `time` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user_premium` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- AlterTable
ALTER TABLE `user_quest` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `quest_id` INTEGER NOT NULL,
    MODIFY `progress` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `quest_id`);

-- AlterTable
ALTER TABLE `user_roleplay` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `roleplay_id` INTEGER NOT NULL,
    MODIFY `health` INTEGER NOT NULL DEFAULT 100,
    MODIFY `energy` INTEGER NOT NULL DEFAULT 100,
    MODIFY `munition` INTEGER NOT NULL DEFAULT 0,
    MODIFY `exp` INTEGER NOT NULL DEFAULT 0,
    MODIFY `weapon_far` INTEGER NOT NULL DEFAULT 0,
    MODIFY `weapon_cac` INTEGER NOT NULL DEFAULT 0,
    MODIFY `hygiene` INTEGER NOT NULL DEFAULT 100,
    MODIFY `money_1` INTEGER NOT NULL DEFAULT 0,
    MODIFY `money_2` INTEGER NOT NULL DEFAULT 0,
    MODIFY `money_3` INTEGER NOT NULL DEFAULT 0,
    MODIFY `money_4` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`user_id`, `roleplay_id`);

-- AlterTable
ALTER TABLE `user_roleplay_item` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `rp_id` INTEGER NOT NULL,
    MODIFY `item_id` INTEGER NOT NULL,
    MODIFY `count` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user_stats` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    MODIFY `online_time` INTEGER NOT NULL DEFAULT 0,
    MODIFY `respect` INTEGER NOT NULL DEFAULT 0,
    MODIFY `respect_given` INTEGER NOT NULL DEFAULT 0,
    MODIFY `gifts_given` INTEGER NOT NULL DEFAULT 0,
    MODIFY `gifts_received` INTEGER NOT NULL DEFAULT 0,
    MODIFY `daily_respect_points` INTEGER NOT NULL DEFAULT 3,
    MODIFY `daily_pet_respect_points` INTEGER NOT NULL DEFAULT 3,
    MODIFY `achievement_score` INTEGER NOT NULL DEFAULT 0,
    MODIFY `quest_id` INTEGER NOT NULL DEFAULT 0,
    MODIFY `quest_progress` INTEGER NOT NULL DEFAULT 0,
    MODIFY `lev_builder` INTEGER NOT NULL DEFAULT 0,
    MODIFY `lev_social` INTEGER NOT NULL DEFAULT 0,
    MODIFY `lev_identity` INTEGER NOT NULL DEFAULT 0,
    MODIFY `lev_explore` INTEGER NOT NULL DEFAULT 0,
    MODIFY `group_id` INTEGER NOT NULL DEFAULT 0,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user_wardrobe` DROP PRIMARY KEY,
    MODIFY `user_id` INTEGER NOT NULL,
    MODIFY `slot_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`user_id`, `slot_id`);

-- DropTable
DROP TABLE `user_favorite`;

-- AddForeignKey
ALTER TABLE `catalog_item_limited` ADD CONSTRAINT `catalog_item_id` FOREIGN KEY (`catalog_item_id`) REFERENCES `catalog_item`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `item_stat` ADD CONSTRAINT `foregnkeysbaseid` FOREIGN KEY (`base_id`) REFERENCES `item_base`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `log_login` ADD CONSTRAINT `log_login_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- RenameIndex
ALTER TABLE `guild_request` RENAME INDEX `groupid` TO `group_id`;

-- RenameIndex
ALTER TABLE `guild_request` RENAME INDEX `userid` TO `user_id`;
