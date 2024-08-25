
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BanScalarFieldEnum = {
  id: 'id',
  bantype: 'bantype',
  value: 'value',
  reason: 'reason',
  expire: 'expire',
  addedBy: 'addedBy',
  addedDate: 'addedDate'
};

exports.Prisma.BotPetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roomId: 'roomId',
  name: 'name',
  race: 'race',
  color: 'color',
  type: 'type',
  experience: 'experience',
  energy: 'energy',
  nutrition: 'nutrition',
  respect: 'respect',
  createstamp: 'createstamp',
  x: 'x',
  y: 'y',
  z: 'z',
  haveSaddle: 'haveSaddle',
  hairdye: 'hairdye',
  pethair: 'pethair',
  anyoneRide: 'anyoneRide'
};

exports.Prisma.BotUserScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  motto: 'motto',
  gender: 'gender',
  look: 'look',
  roomId: 'roomId',
  walkEnabled: 'walkEnabled',
  x: 'x',
  y: 'y',
  z: 'z',
  rotation: 'rotation',
  chatEnabled: 'chatEnabled',
  chatText: 'chatText',
  chatSeconds: 'chatSeconds',
  isDancing: 'isDancing',
  isMixchat: 'isMixchat',
  status: 'status',
  enable: 'enable',
  handitem: 'handitem',
  aiType: 'aiType'
};

exports.Prisma.CatalogBotPresetScalarFieldEnum = {
  id: 'id',
  name: 'name',
  figure: 'figure',
  gender: 'gender',
  motto: 'motto',
  aiType: 'aiType'
};

exports.Prisma.CatalogItemScalarFieldEnum = {
  id: 'id',
  pageId: 'pageId',
  itemId: 'itemId',
  catalogName: 'catalogName',
  costCredits: 'costCredits',
  costPixels: 'costPixels',
  costDiamonds: 'costDiamonds',
  costLimitcoins: 'costLimitcoins',
  amount: 'amount',
  offerActive: 'offerActive',
  badge: 'badge'
};

exports.Prisma.CatalogItemLimitedScalarFieldEnum = {
  catalogItemId: 'catalogItemId',
  limitedSells: 'limitedSells',
  limitedStack: 'limitedStack'
};

exports.Prisma.CatalogMarketplaceDataScalarFieldEnum = {
  id: 'id',
  sprite: 'sprite',
  sold: 'sold',
  avgprice: 'avgprice'
};

exports.Prisma.CatalogMarketplaceOfferScalarFieldEnum = {
  offerId: 'offerId',
  userId: 'userId',
  itemId: 'itemId',
  askingPrice: 'askingPrice',
  totalPrice: 'totalPrice',
  publicName: 'publicName',
  spriteId: 'spriteId',
  itemType: 'itemType',
  timestamp: 'timestamp',
  state: 'state',
  extraData: 'extraData',
  furniId: 'furniId',
  limitedNumber: 'limitedNumber',
  limitedStack: 'limitedStack'
};

exports.Prisma.CatalogPageScalarFieldEnum = {
  id: 'id',
  parentId: 'parentId',
  caption: 'caption',
  iconImage: 'iconImage',
  enabled: 'enabled',
  requiredRight: 'requiredRight',
  orderNum: 'orderNum',
  pageLayout: 'pageLayout',
  pageLink: 'pageLink',
  pageStrings1: 'pageStrings1',
  pageStrings2: 'pageStrings2',
  isPremium: 'isPremium'
};

exports.Prisma.CatalogPageLangueScalarFieldEnum = {
  pageId: 'pageId',
  captionFr: 'captionFr',
  captionEn: 'captionEn',
  captionBr: 'captionBr',
  pageStrings2Fr: 'pageStrings2Fr',
  pageStrings2En: 'pageStrings2En',
  pageStrings2Br: 'pageStrings2Br'
};

exports.Prisma.CatalogPetRaceScalarFieldEnum = {
  id: 'id',
  raceid: 'raceid',
  color1: 'color1',
  color2: 'color2',
  has1color: 'has1color',
  has2color: 'has2color'
};

exports.Prisma.CatalogPromotionScalarFieldEnum = {
  id: 'id',
  title: 'title',
  titleEn: 'titleEn',
  titleBr: 'titleBr',
  image: 'image',
  unknown: 'unknown',
  pageLink: 'pageLink',
  parentId: 'parentId'
};

exports.Prisma.CatalogVoucherScalarFieldEnum = {
  voucher: 'voucher',
  type: 'type',
  value: 'value',
  currentUses: 'currentUses',
  maxUses: 'maxUses',
  enabled: 'enabled'
};

exports.Prisma.CmsForumPostScalarFieldEnum = {
  id: 'id',
  threadid: 'threadid',
  message: 'message',
  author: 'author',
  date: 'date',
  motto: 'motto',
  look: 'look',
  idAuteur: 'idAuteur',
  rank: 'rank'
};

exports.Prisma.CmsForumThreadScalarFieldEnum = {
  id: 'id',
  type: 'type',
  title: 'title',
  author: 'author',
  date: 'date',
  lastpostAuthor: 'lastpostAuthor',
  lastpostDate: 'lastpostDate',
  posts: 'posts',
  mainPost: 'mainPost',
  statut: 'statut',
  categorie: 'categorie',
  views: 'views'
};

exports.Prisma.CmsFourmCategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  order: 'order'
};

exports.Prisma.CmsMailConfirmScalarFieldEnum = {
  userId: 'userId',
  codedevalidation: 'codedevalidation',
  email: 'email',
  temps: 'temps',
  type: 'type'
};

exports.Prisma.CmsMailForgotScalarFieldEnum = {
  id: 'id',
  pass: 'pass',
  email: 'email',
  expire: 'expire',
  users: 'users'
};

exports.Prisma.CmsNewsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  categoryId: 'categoryId',
  topstoryImage: 'topstoryImage',
  body: 'body',
  snippet: 'snippet',
  timestamp: 'timestamp',
  author: 'author',
  authorId: 'authorId',
  link_keyword: 'link_keyword'
};

exports.Prisma.CmsStaffScalarFieldEnum = {
  id: 'id',
  userid: 'userid',
  rank: 'rank',
  function: 'function',
  socialInsta: 'socialInsta',
  socialDiscord: 'socialDiscord'
};

exports.Prisma.CmsStaffProtectScalarFieldEnum = {
  id: 'id',
  ip: 'ip',
  username: 'username',
  hide: 'hide'
};

exports.Prisma.EmulatorAchievementScalarFieldEnum = {
  id: 'id',
  groupName: 'groupName',
  category: 'category',
  level: 'level',
  rewardPixels: 'rewardPixels',
  rewardPoints: 'rewardPoints',
  progressNeeded: 'progressNeeded'
};

exports.Prisma.EmulatorBannerScalarFieldEnum = {
  id: 'id',
  haveLayer: 'haveLayer',
  canTrade: 'canTrade'
};

exports.Prisma.EmulatorBadgeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  canTrade: 'canTrade',
  canDelete: 'canDelete',
  canGive: 'canGive',
  amountWinwins: 'amountWinwins'
};

exports.Prisma.EmulatorChatStyleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  requiredRight: 'requiredRight'
};

exports.Prisma.EmulatorCommandScalarFieldEnum = {
  id: 'id',
  input: 'input',
  minrank: 'minrank',
  descriptionFr: 'descriptionFr',
  descriptionEn: 'descriptionEn',
  descriptionBr: 'descriptionBr'
};

exports.Prisma.EmulatorCommandPetScalarFieldEnum = {
  id: 'id',
  command: 'command'
};

exports.Prisma.EmulatorEffectScalarFieldEnum = {
  id: 'id',
  onlyStaff: 'onlyStaff'
};

exports.Prisma.EmulatorLandingviewScalarFieldEnum = {
  index: 'index',
  header: 'header',
  body: 'body',
  button: 'button',
  inGamePromo: 'inGamePromo',
  specialAction: 'specialAction',
  image: 'image',
  enabled: 'enabled'
};

exports.Prisma.EmulatorLootboxScalarFieldEnum = {
  id: 'id',
  interactionType: 'interactionType',
  probability: 'probability',
  pageId: 'pageId',
  itemId: 'itemId',
  category: 'category',
  amount: 'amount'
};

exports.Prisma.EmulatorPermissionScalarFieldEnum = {
  id: 'id',
  rank: 'rank',
  permission: 'permission'
};

exports.Prisma.EmulatorQuestScalarFieldEnum = {
  id: 'id',
  category: 'category',
  seriesNumber: 'seriesNumber',
  goalType: 'goalType',
  goalData: 'goalData',
  name: 'name',
  reward: 'reward',
  dataBit: 'dataBit'
};

exports.Prisma.EmulatorSettingScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value'
};

exports.Prisma.EmulatorStatsScalarFieldEnum = {
  id: 'id',
  online: 'online',
  time: 'time',
  room: 'room'
};

exports.Prisma.EmulatorStatusScalarFieldEnum = {
  id: 'id',
  status: 'status',
  usersOnline: 'usersOnline',
  roomsLoaded: 'roomsLoaded',
  stamp: 'stamp',
  userpeak: 'userpeak'
};

exports.Prisma.EmulatorTextScalarFieldEnum = {
  id: 'id',
  identifiant: 'identifiant',
  valueFr: 'valueFr',
  valueEn: 'valueEn',
  valueBr: 'valueBr'
};

exports.Prisma.GuildScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  badge: 'badge',
  ownerId: 'ownerId',
  created: 'created',
  roomId: 'roomId',
  state: 'state',
  colour1: 'colour1',
  colour2: 'colour2',
  admindeco: 'admindeco',
  hasForum: 'hasForum'
};

exports.Prisma.GuildItemScalarFieldEnum = {
  id: 'id',
  type: 'type',
  firstvalue: 'firstvalue',
  secondvalue: 'secondvalue',
  enabled: 'enabled'
};

exports.Prisma.GuildMembershipScalarFieldEnum = {
  groupId: 'groupId',
  userId: 'userId',
  rank: 'rank'
};

exports.Prisma.GuildRequestScalarFieldEnum = {
  groupId: 'groupId',
  userId: 'userId'
};

exports.Prisma.ItemScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roomId: 'roomId',
  baseItem: 'baseItem',
  extraData: 'extraData',
  x: 'x',
  y: 'y',
  z: 'z',
  rot: 'rot',
  wallPos: 'wallPos'
};

exports.Prisma.ItemBaseScalarFieldEnum = {
  id: 'id',
  itemName: 'itemName',
  type: 'type',
  width: 'width',
  length: 'length',
  stackHeight: 'stackHeight',
  canStack: 'canStack',
  canSit: 'canSit',
  isWalkable: 'isWalkable',
  spriteId: 'spriteId',
  allowRecycle: 'allowRecycle',
  allowTrade: 'allowTrade',
  allowMarketplaceSell: 'allowMarketplaceSell',
  allowGift: 'allowGift',
  allowInventoryStack: 'allowInventoryStack',
  interactionType: 'interactionType',
  interactionModesCount: 'interactionModesCount',
  vendingIds: 'vendingIds',
  heightAdjustable: 'heightAdjustable',
  effectId: 'effectId',
  isRare: 'isRare',
  rarityLevel: 'rarityLevel'
};

exports.Prisma.ItemLimitedScalarFieldEnum = {
  itemId: 'itemId',
  limitedNumber: 'limitedNumber',
  limitedStack: 'limitedStack'
};

exports.Prisma.ItemMoodlightScalarFieldEnum = {
  itemId: 'itemId',
  enabled: 'enabled',
  currentPreset: 'currentPreset',
  presetOne: 'presetOne',
  presetTwo: 'presetTwo',
  presetThree: 'presetThree'
};

exports.Prisma.ItemPresentScalarFieldEnum = {
  itemId: 'itemId',
  baseId: 'baseId',
  extraData: 'extraData'
};

exports.Prisma.ItemStatScalarFieldEnum = {
  baseId: 'baseId',
  amount: 'amount'
};

exports.Prisma.ItemTeleportScalarFieldEnum = {
  teleOneId: 'teleOneId',
  teleTwoId: 'teleTwoId'
};

exports.Prisma.ItemWiredScalarFieldEnum = {
  triggerId: 'triggerId',
  triggerData2: 'triggerData2',
  triggerData: 'triggerData',
  allUserTriggerable: 'allUserTriggerable',
  triggersItem: 'triggersItem',
  delay: 'delay'
};

exports.Prisma.LogChatScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roomId: 'roomId',
  userName: 'userName',
  timestamp: 'timestamp',
  message: 'message',
  type: 'type'
};

exports.Prisma.LogChatPubScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  userName: 'userName',
  timestamp: 'timestamp',
  message: 'message'
};

exports.Prisma.LogCommandScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  userName: 'userName',
  roomid: 'roomid',
  command: 'command',
  extraData: 'extraData',
  timestamp: 'timestamp'
};

exports.Prisma.LogFlagmeScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  oldusername: 'oldusername',
  newusername: 'newusername',
  time: 'time'
};

exports.Prisma.LogLoginScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  date: 'date',
  ip: 'ip',
  userAgent: 'userAgent'
};

exports.Prisma.LogLootboxScalarFieldEnum = {
  id: 'id',
  interactionType: 'interactionType',
  userId: 'userId',
  itemId: 'itemId',
  baseId: 'baseId',
  timestamp: 'timestamp'
};

exports.Prisma.LogPaymentScalarFieldEnum = {
  historyPaymentId: 'historyPaymentId',
  docId: 'docId',
  userId: 'userId',
  awards: 'awards',
  externalReference: 'externalReference',
  promoId: 'promoId',
  date: 'date'
};

exports.Prisma.LogShopScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  date: 'date',
  price: 'price',
  content: 'content',
  type: 'type',
  catalogItemId: 'catalogItemId'
};

exports.Prisma.LogSlotmachineScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  isWin: 'isWin',
  date: 'date'
};

exports.Prisma.LogStaffScalarFieldEnum = {
  id: 'id',
  pseudo: 'pseudo',
  action: 'action',
  date: 'date'
};

exports.Prisma.LogTradeScalarFieldEnum = {
  id: 'id',
  userOneId: 'userOneId',
  userTwoId: 'userTwoId',
  userOneItems: 'userOneItems',
  userTwoItems: 'userTwoItems',
  roomId: 'roomId',
  time: 'time'
};

exports.Prisma.LogVpnScalarFieldEnum = {
  id: 'id',
  ip: 'ip',
  ipCountry: 'ipCountry',
  host: 'host',
  timestampCreated: 'timestampCreated',
  isVpn: 'isVpn'
};

exports.Prisma.LogSandboxScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  method: 'method',
  editName: 'editName',
  editKey: 'editKey',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MessengerFriendshipScalarFieldEnum = {
  userOneId: 'userOneId',
  userTwoId: 'userTwoId',
  relation: 'relation'
};

exports.Prisma.MessengerOfflineMessageScalarFieldEnum = {
  id: 'id',
  toId: 'toId',
  fromId: 'fromId',
  message: 'message',
  timestamp: 'timestamp'
};

exports.Prisma.MessengerRequestScalarFieldEnum = {
  fromId: 'fromId',
  toId: 'toId'
};

exports.Prisma.ModerationPresetScalarFieldEnum = {
  id: 'id',
  enabled: 'enabled',
  type: 'type',
  message: 'message'
};

exports.Prisma.ModerationResolutionScalarFieldEnum = {
  id: 'id',
  type: 'type',
  title: 'title',
  subtitle: 'subtitle',
  banHours: 'banHours',
  enableMute: 'enableMute',
  muteHours: 'muteHours',
  reminder: 'reminder',
  message: 'message'
};

exports.Prisma.ModerationTicketScalarFieldEnum = {
  id: 'id',
  score: 'score',
  type: 'type',
  status: 'status',
  senderId: 'senderId',
  reportedId: 'reportedId',
  moderatorId: 'moderatorId',
  message: 'message',
  roomId: 'roomId',
  roomName: 'roomName',
  timestamp: 'timestamp'
};

exports.Prisma.ModerationTopicScalarFieldEnum = {
  id: 'id',
  caption: 'caption'
};

exports.Prisma.ModerationTopicActionScalarFieldEnum = {
  id: 'id',
  parentId: 'parentId',
  type: 'type',
  caption: 'caption',
  messageText: 'messageText',
  defaultSanction: 'defaultSanction',
  muteTime: 'muteTime',
  banTime: 'banTime',
  ipTime: 'ipTime',
  tradeLockTime: 'tradeLockTime'
};

exports.Prisma.NavigatorCategoryScalarFieldEnum = {
  id: 'id',
  category: 'category',
  categoryIdentifier: 'categoryIdentifier',
  publicName: 'publicName',
  viewMode: 'viewMode',
  requiredRank: 'requiredRank',
  categoryType: 'categoryType',
  searchAllowance: 'searchAllowance',
  minimized: 'minimized',
  enabled: 'enabled',
  orderId: 'orderId'
};

exports.Prisma.NavigatorPublicScalarFieldEnum = {
  roomId: 'roomId',
  imageUrl: 'imageUrl',
  orderNum: 'orderNum',
  enabled: 'enabled',
  langue: 'langue',
  categoryType: 'categoryType'
};

exports.Prisma.RoleplayScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  hopitalId: 'hopitalId',
  prisonId: 'prisonId'
};

exports.Prisma.RoleplayEnemyScalarFieldEnum = {
  id: 'id',
  type: 'type',
  health: 'health',
  weaponFarId: 'weaponFarId',
  weaponCacId: 'weaponCacId',
  deadTimer: 'deadTimer',
  lootItemId: 'lootItemId',
  moneyDrop: 'moneyDrop',
  dropScriptId: 'dropScriptId',
  teamId: 'teamId',
  aggroDistance: 'aggroDistance',
  zoneDistance: 'zoneDistance',
  resetPosition: 'resetPosition',
  lostAggroDistance: 'lostAggroDistance',
  zombieMode: 'zombieMode'
};

exports.Prisma.RoleplayItemScalarFieldEnum = {
  id: 'id',
  name: 'name',
  desc: 'desc',
  price: 'price',
  type: 'type',
  value: 'value',
  allowstack: 'allowstack',
  category: 'category'
};

exports.Prisma.RoleplayWeaponScalarFieldEnum = {
  id: 'id',
  type: 'type',
  domageMin: 'domageMin',
  domageMax: 'domageMax',
  interaction: 'interaction',
  enable: 'enable',
  freezeTime: 'freezeTime',
  distance: 'distance'
};

exports.Prisma.RoomScalarFieldEnum = {
  id: 'id',
  caption: 'caption',
  owner: 'owner',
  description: 'description',
  category: 'category',
  state: 'state',
  usersMax: 'usersMax',
  modelName: 'modelName',
  score: 'score',
  tags: 'tags',
  password: 'password',
  wallpaper: 'wallpaper',
  floor: 'floor',
  landscape: 'landscape',
  allowPets: 'allowPets',
  allowPetsEat: 'allowPetsEat',
  allowWalkthrough: 'allowWalkthrough',
  allowHidewall: 'allowHidewall',
  wallthick: 'wallthick',
  floorthick: 'floorthick',
  moderationMuteFuse: 'moderationMuteFuse',
  allowRightsoverride: 'allowRightsoverride',
  moderationKickFuse: 'moderationKickFuse',
  moderationBanFuse: 'moderationBanFuse',
  groupId: 'groupId',
  chatType: 'chatType',
  chatBalloon: 'chatBalloon',
  chatSpeed: 'chatSpeed',
  chatMaxDistance: 'chatMaxDistance',
  chatFloodProtection: 'chatFloodProtection',
  trocStatus: 'trocStatus',
  usersNow: 'usersNow',
  allowHidewireds: 'allowHidewireds',
  price: 'price',
  wiredSecurity: 'wiredSecurity'
};

exports.Prisma.RoomModelScalarFieldEnum = {
  id: 'id',
  doorX: 'doorX',
  doorY: 'doorY',
  doorZ: 'doorZ',
  doorDir: 'doorDir',
  heightmap: 'heightmap'
};

exports.Prisma.RoomModelCustomScalarFieldEnum = {
  roomId: 'roomId',
  doorX: 'doorX',
  doorY: 'doorY',
  doorZ: 'doorZ',
  doorDir: 'doorDir',
  heightmap: 'heightmap',
  wallHeight: 'wallHeight'
};

exports.Prisma.RoomRightScalarFieldEnum = {
  roomId: 'roomId',
  userId: 'userId'
};

exports.Prisma.RoomBanScalarFieldEnum = {
  roomId: 'roomId',
  userId: 'userId',
  expire: 'expire'
};

exports.Prisma.RoomSwearwordFilterScalarFieldEnum = {
  word: 'word'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  mail: 'mail',
  authTicket: 'authTicket',
  rank: 'rank',
  credits: 'credits',
  activityPoints: 'activityPoints',
  look: 'look',
  gender: 'gender',
  motto: 'motto',
  accountCreated: 'accountCreated',
  lastOnline: 'lastOnline',
  online: 'online',
  ipLast: 'ipLast',
  machineId: 'machineId',
  homeRoom: 'homeRoom',
  blockNewfriends: 'blockNewfriends',
  hideOnline: 'hideOnline',
  hideInroom: 'hideInroom',
  lastOffline: 'lastOffline',
  moisVip: 'moisVip',
  volume: 'volume',
  vipPoints: 'vipPoints',
  limitCoins: 'limitCoins',
  acceptTrading: 'acceptTrading',
  cameraFollowDisabled: 'cameraFollowDisabled',
  ignoreRoomInvite: 'ignoreRoomInvite',
  lastdailycredits: 'lastdailycredits',
  hideGamealert: 'hideGamealert',
  ipcountry: 'ipcountry',
  gamePoints: 'gamePoints',
  gamePointsMonth: 'gamePointsMonth',
  mazoscore: 'mazoscore',
  mazo: 'mazo',
  nuxEnable: 'nuxEnable',
  langue: 'langue',
  runPoints: 'runPoints',
  runPointsMonth: 'runPointsMonth',
  isBanned: 'isBanned',
  bannerId: 'bannerId'
};

exports.Prisma.UserAchievementScalarFieldEnum = {
  userId: 'userId',
  group: 'group',
  level: 'level',
  progress: 'progress'
};

exports.Prisma.UserBadgeScalarFieldEnum = {
  userId: 'userId',
  badgeId: 'badgeId',
  badgeSlot: 'badgeSlot'
};

exports.Prisma.UserBannerScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  banner_id: 'banner_id'
};

exports.Prisma.UserPhotoScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  photo: 'photo',
  time: 'time'
};

exports.Prisma.UserPremiumScalarFieldEnum = {
  userId: 'userId',
  timestampActivated: 'timestampActivated',
  timestampExpireClassic: 'timestampExpireClassic',
  timestampExpireEpic: 'timestampExpireEpic',
  timestampExpireLegend: 'timestampExpireLegend'
};

exports.Prisma.UserQuestScalarFieldEnum = {
  userId: 'userId',
  questId: 'questId',
  progress: 'progress'
};

exports.Prisma.UserRoleplayScalarFieldEnum = {
  userId: 'userId',
  roleplayId: 'roleplayId',
  health: 'health',
  energy: 'energy',
  money: 'money',
  munition: 'munition',
  exp: 'exp',
  weaponFar: 'weaponFar',
  weaponCac: 'weaponCac',
  hygiene: 'hygiene',
  money1: 'money1',
  money2: 'money2',
  money3: 'money3',
  money4: 'money4'
};

exports.Prisma.UserRoleplayItemScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  rpId: 'rpId',
  itemId: 'itemId',
  count: 'count'
};

exports.Prisma.UserStatsScalarFieldEnum = {
  id: 'id',
  onlineTime: 'onlineTime',
  respect: 'respect',
  respectGiven: 'respectGiven',
  giftsGiven: 'giftsGiven',
  giftsReceived: 'giftsReceived',
  dailyRespectPoints: 'dailyRespectPoints',
  dailyPetRespectPoints: 'dailyPetRespectPoints',
  achievementScore: 'achievementScore',
  questId: 'questId',
  questProgress: 'questProgress',
  levBuilder: 'levBuilder',
  levSocial: 'levSocial',
  levIdentity: 'levIdentity',
  levExplore: 'levExplore',
  groupId: 'groupId'
};

exports.Prisma.UserWardrobeScalarFieldEnum = {
  userId: 'userId',
  slotId: 'slotId',
  look: 'look',
  gender: 'gender'
};

exports.Prisma.UserFavoriteScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  roomId: 'roomId'
};

exports.Prisma.WordFilterRetroScalarFieldEnum = {
  word: 'word'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.BanBantype = exports.$Enums.BanBantype = {
  user: 'user',
  ip: 'ip',
  machine: 'machine',
  ignoreall: 'ignoreall'
};

exports.BotUserAiType = exports.$Enums.BotUserAiType = {
  generic: 'generic',
  bartender: 'bartender',
  chatgpt: 'chatgpt'
};

exports.CatalogBotPresetAiType = exports.$Enums.CatalogBotPresetAiType = {
  pet: 'pet',
  generic: 'generic',
  bartender: 'bartender'
};

exports.CatalogVoucherType = exports.$Enums.CatalogVoucherType = {
  credits: 'credits',
  duckets: 'duckets'
};

exports.EmulatorLootboxCategory = exports.$Enums.EmulatorLootboxCategory = {
  furni: 'furni',
  badge: 'badge',
  winwin: 'winwin',
  credits: 'credits'
};

exports.GuildItemType = exports.$Enums.GuildItemType = {
  base: 'base',
  symbol: 'symbol',
  color: 'color',
  color2: 'color2',
  color3: 'color3'
};

exports.ItemBaseType = exports.$Enums.ItemBaseType = {
  s: 's',
  i: 'i',
  r: 'r',
  b: 'b',
  p: 'p',
  c: 'c'
};

exports.ModerationPresetType = exports.$Enums.ModerationPresetType = {
  message: 'message',
  roommessage: 'roommessage'
};

exports.ModerationResolutionType = exports.$Enums.ModerationResolutionType = {
  Sexual: 'Sexual',
  PII: 'PII'
};

exports.ModerationTicketStatus = exports.$Enums.ModerationTicketStatus = {
  open: 'open',
  picked: 'picked',
  resolved: 'resolved',
  abusive: 'abusive',
  invalid: 'invalid',
  deleted: 'deleted'
};

exports.NavigatorCategoryCategory = exports.$Enums.NavigatorCategoryCategory = {
  official_view: 'official_view',
  hotel_view: 'hotel_view',
  myworld_view: 'myworld_view',
  roomads_view: 'roomads_view',
  query: 'query',
  rooms_game: 'rooms_game'
};

exports.NavigatorCategoryViewMode = exports.$Enums.NavigatorCategoryViewMode = {
  REGULAR: 'REGULAR',
  THUMBNAIL: 'THUMBNAIL'
};

exports.NavigatorCategorySearchAllowance = exports.$Enums.NavigatorCategorySearchAllowance = {
  NOTHING: 'NOTHING',
  SHOW_MORE: 'SHOW_MORE'
};

exports.NavigatorPublicLangue = exports.$Enums.NavigatorPublicLangue = {
  fr: 'fr',
  en: 'en',
  br: 'br'
};

exports.RoleplayEnemyType = exports.$Enums.RoleplayEnemyType = {
  bot: 'bot',
  pet: 'pet'
};

exports.RoleplayItemType = exports.$Enums.RoleplayItemType = {
  munition: 'munition',
  health: 'health',
  energy: 'energy',
  weapon_cac: 'weapon_cac',
  weapon_far: 'weapon_far',
  none: 'none',
  money: 'money',
  healthenergy: 'healthenergy',
  healthtired: 'healthtired',
  showtime: 'showtime',
  enable: 'enable',
  hit: 'hit',
  openguide: 'openguide',
  energytired: 'energytired',
  openpage: 'openpage'
};

exports.RoleplayItemCategory = exports.$Enums.RoleplayItemCategory = {
  EQUIP: 'EQUIP',
  UTIL: 'UTIL',
  RESSOURCE: 'RESSOURCE',
  QUETE: 'QUETE'
};

exports.RoleplayWeaponType = exports.$Enums.RoleplayWeaponType = {
  cac: 'cac',
  far: 'far'
};

exports.RoleplayWeaponInteraction = exports.$Enums.RoleplayWeaponInteraction = {
  none: 'none'
};

exports.RoomState = exports.$Enums.RoomState = {
  open: 'open',
  locked: 'locked',
  password: 'password',
  hide: 'hide'
};

exports.UserGender = exports.$Enums.UserGender = {
  M: 'M',
  F: 'F'
};

exports.UserLangue = exports.$Enums.UserLangue = {
  fr: 'fr',
  en: 'en',
  br: 'br'
};

exports.UserWardrobeGender = exports.$Enums.UserWardrobeGender = {
  F: 'F',
  M: 'M'
};

exports.Prisma.ModelName = {
  Ban: 'Ban',
  BotPet: 'BotPet',
  BotUser: 'BotUser',
  CatalogBotPreset: 'CatalogBotPreset',
  CatalogItem: 'CatalogItem',
  CatalogItemLimited: 'CatalogItemLimited',
  CatalogMarketplaceData: 'CatalogMarketplaceData',
  CatalogMarketplaceOffer: 'CatalogMarketplaceOffer',
  CatalogPage: 'CatalogPage',
  CatalogPageLangue: 'CatalogPageLangue',
  CatalogPetRace: 'CatalogPetRace',
  CatalogPromotion: 'CatalogPromotion',
  CatalogVoucher: 'CatalogVoucher',
  CmsForumPost: 'CmsForumPost',
  CmsForumThread: 'CmsForumThread',
  CmsFourmCategory: 'CmsFourmCategory',
  CmsMailConfirm: 'CmsMailConfirm',
  CmsMailForgot: 'CmsMailForgot',
  CmsNews: 'CmsNews',
  CmsStaff: 'CmsStaff',
  CmsStaffProtect: 'CmsStaffProtect',
  EmulatorAchievement: 'EmulatorAchievement',
  EmulatorBanner: 'EmulatorBanner',
  EmulatorBadge: 'EmulatorBadge',
  EmulatorChatStyle: 'EmulatorChatStyle',
  EmulatorCommand: 'EmulatorCommand',
  EmulatorCommandPet: 'EmulatorCommandPet',
  EmulatorEffect: 'EmulatorEffect',
  EmulatorLandingview: 'EmulatorLandingview',
  EmulatorLootbox: 'EmulatorLootbox',
  EmulatorPermission: 'EmulatorPermission',
  EmulatorQuest: 'EmulatorQuest',
  EmulatorSetting: 'EmulatorSetting',
  EmulatorStats: 'EmulatorStats',
  EmulatorStatus: 'EmulatorStatus',
  EmulatorText: 'EmulatorText',
  Guild: 'Guild',
  GuildItem: 'GuildItem',
  GuildMembership: 'GuildMembership',
  GuildRequest: 'GuildRequest',
  Item: 'Item',
  ItemBase: 'ItemBase',
  ItemLimited: 'ItemLimited',
  ItemMoodlight: 'ItemMoodlight',
  ItemPresent: 'ItemPresent',
  ItemStat: 'ItemStat',
  ItemTeleport: 'ItemTeleport',
  ItemWired: 'ItemWired',
  LogChat: 'LogChat',
  LogChatPub: 'LogChatPub',
  LogCommand: 'LogCommand',
  LogFlagme: 'LogFlagme',
  LogLogin: 'LogLogin',
  LogLootbox: 'LogLootbox',
  LogPayment: 'LogPayment',
  LogShop: 'LogShop',
  LogSlotmachine: 'LogSlotmachine',
  LogStaff: 'LogStaff',
  LogTrade: 'LogTrade',
  LogVpn: 'LogVpn',
  LogSandbox: 'LogSandbox',
  MessengerFriendship: 'MessengerFriendship',
  MessengerOfflineMessage: 'MessengerOfflineMessage',
  MessengerRequest: 'MessengerRequest',
  ModerationPreset: 'ModerationPreset',
  ModerationResolution: 'ModerationResolution',
  ModerationTicket: 'ModerationTicket',
  ModerationTopic: 'ModerationTopic',
  ModerationTopicAction: 'ModerationTopicAction',
  NavigatorCategory: 'NavigatorCategory',
  NavigatorPublic: 'NavigatorPublic',
  Roleplay: 'Roleplay',
  RoleplayEnemy: 'RoleplayEnemy',
  RoleplayItem: 'RoleplayItem',
  RoleplayWeapon: 'RoleplayWeapon',
  Room: 'Room',
  RoomModel: 'RoomModel',
  RoomModelCustom: 'RoomModelCustom',
  RoomRight: 'RoomRight',
  RoomBan: 'RoomBan',
  RoomSwearwordFilter: 'RoomSwearwordFilter',
  User: 'User',
  UserAchievement: 'UserAchievement',
  UserBadge: 'UserBadge',
  UserBanner: 'UserBanner',
  UserPhoto: 'UserPhoto',
  UserPremium: 'UserPremium',
  UserQuest: 'UserQuest',
  UserRoleplay: 'UserRoleplay',
  UserRoleplayItem: 'UserRoleplayItem',
  UserStats: 'UserStats',
  UserWardrobe: 'UserWardrobe',
  UserFavorite: 'UserFavorite',
  WordFilterRetro: 'WordFilterRetro'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\laragon\\www\\WibboPrisma\\dist\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.11.0",
  "engineVersion": "efd2449663b3d73d637ea1fd226bafbcf45b3102",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "datasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output = \"../dist/client\"\n  binaryTargets = [\"native\", \"debian-openssl-3.0.x\"]\n}\n\nmodel Ban {\n  id        Int        @id @default(autoincrement())\n  bantype   BanBantype @default(user)\n  value     String\n  reason    String     @db.Text\n  expire    Int        @default(0)\n  addedBy   String     @map(\"added_by\")\n  addedDate Int        @map(\"added_date\")\n\n  @@index([expire], map: \"expire\")\n  @@index([value], map: \"value\")\n  @@map(\"ban\")\n}\n\nmodel BotPet {\n  id          Int     @id @default(autoincrement())\n  userId      Int     @map(\"user_id\")\n  roomId      Int     @default(0) @map(\"room_id\")\n  name        String  @default(\"Unnamed\")\n  race        String  @default(\"000\") @db.VarChar(3)\n  color       String  @default(\"FFFFFF\") @db.VarChar(6)\n  type        Int\n  experience  Int\n  energy      Int\n  nutrition   Int     @default(100)\n  respect     Int     @default(0)\n  createstamp Int     @default(0)\n  x           Int     @default(0)\n  y           Int     @default(0)\n  z           Float   @default(0)\n  haveSaddle  Int     @default(0) @map(\"have_saddle\")\n  hairdye     Int     @default(1)\n  pethair     Int     @default(0)\n  anyoneRide  Boolean @default(true) @map(\"anyone_ride\")\n\n  @@index([roomId], map: \"room_id\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"bot_pet\")\n}\n\nmodel BotUser {\n  id          Int           @id @default(autoincrement())\n  userId      Int           @default(0) @map(\"user_id\")\n  name        String        @default(\"\")\n  motto       String        @default(\"\")\n  gender      String        @default(\"\") @db.VarChar(1)\n  look        String        @default(\"\") @db.Text\n  roomId      Int           @default(0) @map(\"room_id\")\n  walkEnabled Boolean       @default(false) @map(\"walk_enabled\")\n  x           Int           @default(0)\n  y           Int           @default(0)\n  z           Int           @default(0)\n  rotation    Int           @default(0)\n  chatEnabled Boolean       @default(false) @map(\"chat_enabled\")\n  chatText    String        @map(\"chat_text\") @db.Text\n  chatSeconds Int           @default(7) @map(\"chat_seconds\")\n  isDancing   Boolean       @default(false) @map(\"is_dancing\")\n  isMixchat   Boolean       @default(true) @map(\"is_mixchat\")\n  status      Int           @default(0)\n  enable      Int           @default(0)\n  handitem    Int           @default(0)\n  aiType      BotUserAiType @default(generic) @map(\"ai_type\")\n\n  @@index([userId], map: \"ownerId\")\n  @@index([roomId], map: \"room_id\")\n  @@map(\"bot_user\")\n}\n\nmodel CatalogBotPreset {\n  id     Int                    @id @default(autoincrement())\n  name   String\n  figure String                 @db.Text\n  gender String\n  motto  String\n  aiType CatalogBotPresetAiType @default(generic) @map(\"ai_type\")\n\n  @@map(\"catalog_bot_preset\")\n}\n\nmodel CatalogItem {\n  id                 Int                 @id @default(autoincrement())\n  pageId             Int                 @map(\"page_id\")\n  itemId             Int                 @map(\"item_id\")\n  catalogName        String              @map(\"catalog_name\")\n  costCredits        Int                 @default(1) @map(\"cost_credits\")\n  costPixels         Int                 @default(0) @map(\"cost_pixels\")\n  costDiamonds       Int                 @default(0) @map(\"cost_diamonds\")\n  costLimitcoins     Int                 @default(0) @map(\"cost_limitcoins\")\n  amount             Int                 @default(1)\n  offerActive        Boolean             @default(true) @map(\"offer_active\")\n  badge              String              @default(\"\")\n  catalogItemLimited CatalogItemLimited?\n  itemBase           ItemBase            @relation(fields: [itemId], references: [id], onDelete: Cascade)\n\n  @@index([itemId], map: \"item_ids\")\n  @@index([pageId], map: \"page_id\")\n  @@map(\"catalog_item\")\n}\n\nmodel CatalogItemLimited {\n  catalogItemId Int         @id @map(\"catalog_item_id\")\n  limitedSells  Int         @default(0) @map(\"limited_sells\")\n  limitedStack  Int         @default(0) @map(\"limited_stack\")\n  catalogItem   CatalogItem @relation(fields: [catalogItemId], references: [id], onDelete: Cascade)\n\n  @@map(\"catalog_item_limited\")\n}\n\nmodel CatalogMarketplaceData {\n  id       Int @id @default(autoincrement())\n  sprite   Int\n  sold     Int @default(0)\n  avgprice Int @default(0)\n\n  @@map(\"catalog_marketplace_data\")\n}\n\nmodel CatalogMarketplaceOffer {\n  offerId       Int    @id @default(autoincrement()) @map(\"offer_id\")\n  userId        Int    @map(\"user_id\")\n  itemId        Int    @map(\"item_id\")\n  askingPrice   Int    @map(\"asking_price\")\n  totalPrice    Int    @default(0) @map(\"total_price\")\n  publicName    String @map(\"public_name\")\n  spriteId      Int    @map(\"sprite_id\")\n  itemType      Int    @default(1) @map(\"item_type\")\n  timestamp     Int    @default(0)\n  state         Int    @default(1)\n  extraData     String @map(\"extra_data\") @db.Text\n  furniId       Int    @map(\"furni_id\")\n  limitedNumber Int    @default(0) @map(\"limited_number\")\n  limitedStack  Int    @default(0) @map(\"limited_stack\")\n\n  @@map(\"catalog_marketplace_offer\")\n}\n\nmodel CatalogPage {\n  id            Int     @id @default(autoincrement())\n  parentId      Int     @default(-1) @map(\"parent_id\")\n  caption       String\n  iconImage     Int     @default(1) @map(\"icon_image\")\n  enabled       Boolean @default(true)\n  requiredRight String  @default(\"\") @map(\"required_right\")\n  orderNum      Int     @default(0) @map(\"order_num\")\n  pageLayout    String  @default(\"default_3x3\") @map(\"page_layout\")\n  pageLink      String  @default(\"\") @map(\"page_link\")\n  pageStrings1  String  @default(\"wibbo|catalog_base\") @map(\"page_strings_1\")\n  pageStrings2  String  @map(\"page_strings_2\") @db.Text\n  isPremium     Boolean @default(false) @map(\"is_premium\")\n\n  @@index([orderNum], map: \"order_num\")\n  @@map(\"catalog_page\")\n}\n\nmodel CatalogPageLangue {\n  pageId         Int     @id @map(\"page_id\")\n  captionFr      String? @map(\"caption_fr\")\n  captionEn      String? @map(\"caption_en\")\n  captionBr      String? @map(\"caption_br\")\n  pageStrings2Fr String? @map(\"page_strings_2_fr\") @db.Text\n  pageStrings2En String? @map(\"page_strings_2_en\") @db.Text\n  pageStrings2Br String? @map(\"page_strings_2_br\") @db.Text\n\n  @@map(\"catalog_page_langue\")\n}\n\nmodel CatalogPetRace {\n  id        Int     @id @default(autoincrement())\n  raceid    Int\n  color1    Int?\n  color2    Int?\n  has1color Boolean @default(false)\n  has2color Boolean @default(false)\n\n  @@map(\"catalog_pet_race\")\n}\n\nmodel CatalogPromotion {\n  id       Int     @id @default(autoincrement())\n  title    String? @default(\"\")\n  titleEn  String? @map(\"title_en\")\n  titleBr  String? @map(\"title_br\")\n  image    String? @default(\"\")\n  unknown  Int?    @default(0)\n  pageLink String? @default(\"\") @map(\"page_link\")\n  parentId Int?    @default(0) @map(\"parent_id\")\n\n  @@map(\"catalog_promotion\")\n}\n\nmodel CatalogVoucher {\n  voucher     String             @id\n  type        CatalogVoucherType @default(credits)\n  value       Int                @default(100)\n  currentUses Int                @default(0) @map(\"current_uses\")\n  maxUses     Int                @default(1) @map(\"max_uses\")\n  enabled     Boolean            @default(true)\n\n  @@map(\"catalog_voucher\")\n}\n\nmodel CmsForumPost {\n  id       Int     @id @unique(map: \"id\") @default(autoincrement())\n  threadid Int     @default(0)\n  message  String  @db.Text\n  author   String\n  date     String\n  motto    String\n  look     String  @db.Text\n  idAuteur Int     @map(\"id_auteur\")\n  rank     Boolean\n\n  @@index([threadid], map: \"threadid\")\n  @@map(\"cms_forum_post\")\n}\n\nmodel CmsForumThread {\n  id             Int     @id @unique(map: \"id\") @default(autoincrement())\n  type           Int     @db.TinyInt\n  title          String\n  author         String\n  date           String\n  lastpostAuthor String  @map(\"lastpost_author\")\n  lastpostDate   String  @map(\"lastpost_date\")\n  posts          Int\n  mainPost       Int     @map(\"main_post\")\n  statut         Int     @db.TinyInt\n  categorie      Boolean\n  views          Int     @default(0)\n\n  @@index([author], map: \"author\")\n  @@index([categorie], map: \"categorie\")\n  @@index([date], map: \"date\")\n  @@index([lastpostDate], map: \"lastpost_date\")\n  @@index([mainPost], map: \"main_post\")\n  @@map(\"cms_forum_thread\")\n}\n\nmodel CmsFourmCategory {\n  id    Int     @id @default(autoincrement())\n  name  String?\n  order Int     @default(0)\n\n  @@map(\"cms_fourm_category\")\n}\n\nmodel CmsMailConfirm {\n  userId           Int    @id @unique(map: \"user_id\") @map(\"user_id\")\n  codedevalidation String\n  email            String\n  temps            Int\n  type             Int    @default(0)\n\n  @@index([email], map: \"email\")\n  @@map(\"cms_mail_confirm\")\n}\n\nmodel CmsMailForgot {\n  id     Int    @id @default(autoincrement())\n  pass   String\n  email  String\n  expire Int\n  users  String\n\n  @@index([pass], map: \"pass\")\n  @@map(\"cms_mail_forgot\")\n}\n\nmodel CmsNews {\n  id            Int    @id @default(autoincrement())\n  title         String\n  categoryId    Int    @default(1) @map(\"category_id\")\n  topstoryImage String @map(\"topstory_image\")\n  body          String @db.MediumText\n  snippet       String @db.Text\n  timestamp     Int    @unique(map: \"timestam\")\n  author        String\n  authorId      Int    @map(\"author_id\")\n  link_keyword  String @map(\"link_keyword\")\n\n  @@map(\"cms_news\")\n}\n\nmodel CmsStaff {\n  id            Int     @id @default(autoincrement())\n  userid        Int\n  rank          Int\n  function      String?\n  socialInsta   String? @map(\"social_insta\")\n  socialDiscord String? @map(\"social_discord\")\n\n  @@map(\"cms_staff\")\n}\n\nmodel CmsStaffProtect {\n  id       Int     @id @default(autoincrement())\n  ip       String? @default(\"\")\n  username String\n  hide     Boolean @default(false)\n\n  @@index([id], map: \"id\")\n  @@map(\"cms_staff_protect\")\n}\n\nmodel EmulatorAchievement {\n  id             Int    @id @default(autoincrement())\n  groupName      String @default(\"ACH_\") @map(\"group_name\")\n  category       String @default(\"identity\")\n  level          Int    @default(1)\n  rewardPixels   Int    @default(100) @map(\"reward_pixels\")\n  rewardPoints   Int    @default(10) @map(\"reward_points\")\n  progressNeeded Int    @default(1) @map(\"progress_needed\")\n\n  @@map(\"emulator_achievement\")\n}\n\nmodel EmulatorBanner {\n  id        Int     @id @default(autoincrement())\n  haveLayer Boolean @default(false) @map(\"have_layer\")\n  canTrade  Boolean @default(false) @map(\"can_trade\")\n\n  @@map(\"emulator_banner\")\n}\n\nmodel EmulatorBadge {\n  id        Int     @id @default(autoincrement())\n  code      String\n  canTrade  Boolean @default(false) @map(\"can_trade\")\n  canDelete Boolean @default(false) @map(\"can_delete\")\n  canGive   Boolean @default(false) @map(\"can_give\")\n  amountWinwins Int @default(0) @map(\"amount_winwins\")\n\n  @@map(\"emulator_badge\")\n}\n\nmodel EmulatorChatStyle {\n  id            Int    @id\n  name          String @default(\"\")\n  requiredRight String @default(\"\") @map(\"required_right\")\n\n  @@map(\"emulator_chat_style\")\n}\n\nmodel EmulatorCommand {\n  id            Int     @id @default(autoincrement())\n  input         String\n  minrank       Int\n  descriptionFr String? @map(\"description_fr\") @db.Text\n  descriptionEn String? @map(\"description_en\") @db.Text\n  descriptionBr String? @map(\"description_br\") @db.Text\n\n  @@map(\"emulator_command\")\n}\n\nmodel EmulatorCommandPet {\n  id      Int    @id\n  command String\n\n  @@map(\"emulator_command_pet\")\n}\n\nmodel EmulatorEffect {\n  id        Int     @id\n  onlyStaff Boolean @default(false) @map(\"only_staff\")\n\n  @@map(\"emulator_effect\")\n}\n\nmodel EmulatorLandingview {\n  index         Int     @id @default(autoincrement())\n  header        String  @default(\"[Header Name]\")\n  body          String  @default(\"[BODY]\")\n  button        String  @default(\"[BUTTON]\")\n  inGamePromo   Boolean @default(true) @map(\"in_game_promo\")\n  specialAction String  @default(\"[LINK HERE]\") @map(\"special_action\")\n  image         String  @default(\"\")\n  enabled       Boolean @default(true)\n\n  @@map(\"emulator_landingview\")\n}\n\nmodel EmulatorLootbox {\n  id              Int                     @id @default(autoincrement())\n  interactionType String                  @map(\"interaction_type\")\n  probability     Int                     @default(1)\n  pageId          Int                     @map(\"page_id\")\n  itemId          Int                     @default(0) @map(\"item_id\")\n  category        EmulatorLootboxCategory @default(furni)\n  amount          Int                     @default(0)\n\n  @@map(\"emulator_lootbox\")\n}\n\nmodel EmulatorPermission {\n  id         Int    @id @default(autoincrement())\n  rank       Int\n  permission String\n\n  @@index([rank], map: \"rank\")\n  @@map(\"emulator_permission\")\n}\n\nmodel EmulatorQuest {\n  id           Int    @id @default(autoincrement())\n  category     String @default(\"\")\n  seriesNumber Int    @default(0) @map(\"series_number\")\n  goalType     Int    @default(0) @map(\"goal_type\")\n  goalData     Int    @default(0) @map(\"goal_data\")\n  name         String @default(\"\")\n  reward       Int    @default(10)\n  dataBit      String @default(\"\") @map(\"data_bit\") @db.VarChar(2)\n\n  @@map(\"emulator_quest\")\n}\n\nmodel EmulatorSetting {\n  id    Int    @id @default(autoincrement())\n  key   String\n  value String @db.Text\n\n  @@map(\"emulator_setting\")\n}\n\nmodel EmulatorStats {\n  id     Int @id @default(autoincrement())\n  online Int\n  time   Int @unique(map: \"date\")\n  room   Int\n\n  @@map(\"emulator_stats\")\n}\n\nmodel EmulatorStatus {\n  id          Int @id @default(autoincrement())\n  status      Int @default(0)\n  usersOnline Int @default(0) @map(\"users_online\")\n  roomsLoaded Int @default(0) @map(\"rooms_loaded\")\n  stamp       Int\n  userpeak    Int\n\n  @@map(\"emulator_status\")\n}\n\nmodel EmulatorText {\n  id          Int     @id @default(autoincrement())\n  identifiant String  @unique\n  valueFr     String? @map(\"value_fr\") @db.Text\n  valueEn     String? @map(\"value_en\") @db.Text\n  valueBr     String? @map(\"value_br\") @db.Text\n\n  @@map(\"emulator_text\")\n}\n\nmodel Guild {\n  id        Int     @id @default(autoincrement())\n  name      String\n  desc      String  @db.Text\n  badge     String\n  ownerId   Int     @map(\"owner_id\")\n  created   Int\n  roomId    Int     @map(\"room_id\")\n  state     Int     @default(0)\n  colour1   Int\n  colour2   Int\n  admindeco Boolean @default(false)\n  hasForum  Boolean @default(false) @map(\"has_forum\")\n\n  @@index([ownerId], map: \"ownerid\")\n  @@map(\"guild\")\n}\n\nmodel GuildItem {\n  id          Int\n  type        GuildItemType\n  firstvalue  String\n  secondvalue String\n  enabled     Boolean       @default(true)\n\n  @@id([id, type])\n  @@map(\"guild_item\")\n}\n\nmodel GuildMembership {\n  groupId Int @map(\"group_id\")\n  userId  Int @map(\"user_id\")\n  rank    Int @default(0)\n\n  @@id([groupId, userId])\n  @@index([groupId], map: \"groupid\")\n  @@index([userId], map: \"userid\")\n  @@map(\"guild_membership\")\n}\n\nmodel GuildRequest {\n  groupId Int @map(\"group_id\")\n  userId  Int @map(\"user_id\")\n\n  @@id([groupId, userId])\n  @@index([groupId], map: \"group_id\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"guild_request\")\n}\n\nmodel Item {\n  id        Int     @id @default(autoincrement())\n  userId    Int     @map(\"user_id\")\n  roomId    Int     @default(0) @map(\"room_id\")\n  baseItem  Int     @map(\"base_item\")\n  extraData String? @default(\"\") @map(\"extra_data\") @db.Text\n  x         Int     @default(0)\n  y         Int     @default(0)\n  z         Float   @default(0)\n  rot       Int     @default(0)\n  wallPos   String? @default(\"\") @map(\"wall_pos\")\n\n  @@index([roomId], map: \"room_id\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"item\")\n}\n\nmodel ItemBase {\n  id                    Int           @id @default(autoincrement())\n  itemName              String        @map(\"item_name\")\n  type                  ItemBaseType  @default(s)\n  width                 Int           @default(1)\n  length                Int           @default(1)\n  stackHeight           Float         @default(1) @map(\"stack_height\")\n  canStack              Boolean       @default(true) @map(\"can_stack\")\n  canSit                Boolean       @default(false) @map(\"can_sit\")\n  isWalkable            Boolean       @default(false) @map(\"is_walkable\")\n  spriteId              Int           @map(\"sprite_id\")\n  allowRecycle          Boolean       @default(false) @map(\"allow_recycle\")\n  allowTrade            Boolean       @default(true) @map(\"allow_trade\")\n  allowMarketplaceSell  Boolean       @default(false) @map(\"allow_marketplace_sell\")\n  allowGift             Boolean       @default(true) @map(\"allow_gift\")\n  allowInventoryStack   Boolean       @default(true) @map(\"allow_inventory_stack\")\n  interactionType       String        @default(\"default\") @map(\"interaction_type\")\n  interactionModesCount Int           @default(1) @map(\"interaction_modes_count\")\n  vendingIds            String        @default(\"0\") @map(\"vending_ids\")\n  heightAdjustable      String        @default(\"0\") @map(\"height_adjustable\")\n  effectId              Int           @default(0) @map(\"effect_id\")\n  isRare                Boolean       @default(false) @map(\"is_rare\")\n  rarityLevel           Int           @default(0) @map(\"rarity_level\")\n  itemStat              ItemStat?\n  logLootbox            LogLootbox[]\n  catalogItem           CatalogItem[]\n\n  @@index([spriteId], map: \"sprite_id\")\n  @@map(\"item_base\")\n}\n\nmodel ItemLimited {\n  itemId        Int @id @unique(map: \"item_id\") @map(\"item_id\")\n  limitedNumber Int @map(\"limited_number\")\n  limitedStack  Int @default(0) @map(\"limited_stack\")\n\n  @@map(\"item_limited\")\n}\n\nmodel ItemMoodlight {\n  itemId        Int     @id @unique(map: \"item_id\") @map(\"item_id\")\n  enabled       Boolean @default(false)\n  currentPreset Int     @map(\"current_preset\")\n  presetOne     String  @map(\"preset_one\")\n  presetTwo     String  @map(\"preset_two\")\n  presetThree   String  @map(\"preset_three\")\n\n  @@map(\"item_moodlight\")\n}\n\nmodel ItemPresent {\n  itemId    Int     @id @unique(map: \"item_id\") @map(\"item_id\")\n  baseId    Int     @map(\"base_id\")\n  extraData String? @default(\"\") @map(\"extra_data\") @db.Text\n\n  @@map(\"item_present\")\n}\n\nmodel ItemStat {\n  baseId   Int      @id @unique(map: \"base_id\") @map(\"base_id\")\n  amount   Int      @default(0)\n  itemBase ItemBase @relation(fields: [baseId], references: [id], onDelete: Cascade)\n\n  @@map(\"item_stat\")\n}\n\nmodel ItemTeleport {\n  teleOneId Int @map(\"tele_one_id\")\n  teleTwoId Int @map(\"tele_two_id\")\n\n  @@id([teleOneId, teleTwoId])\n  @@index([teleOneId], map: \"tele_one_id\")\n  @@map(\"item_teleport\")\n}\n\nmodel ItemWired {\n  triggerId          Int     @id @map(\"trigger_id\")\n  triggerData2       String? @default(\"\") @map(\"trigger_data_2\") @db.Text\n  triggerData        String? @map(\"trigger_data\") @db.Text\n  allUserTriggerable Boolean @default(true) @map(\"all_user_triggerable\")\n  triggersItem       String? @map(\"triggers_item\") @db.Text\n  delay              Int     @default(0)\n\n  @@map(\"item_wired\")\n}\n\nmodel LogChat {\n  id        Int    @id @default(autoincrement())\n  userId    Int    @map(\"user_id\")\n  roomId    Int?   @map(\"room_id\")\n  userName  String @map(\"user_name\")\n  timestamp Int    @default(0)\n  message   String @db.Text\n  type      String @db.VarChar(10)\n  user      User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n  room      Room?  @relation(fields: [roomId], references: [id])\n\n  @@index([message(length: 100)], map: \"message\")\n  @@index([roomId], map: \"room_id\")\n  @@index([timestamp, userId], map: \"searth\")\n  @@index([userId], map: \"user_id\")\n  @@index([userName], map: \"user_name\")\n  @@map(\"log_chat\")\n}\n\nmodel LogChatPub {\n  id        Int    @id @default(autoincrement())\n  userId    Int    @map(\"user_id\")\n  userName  String @map(\"user_name\")\n  timestamp Int    @default(0)\n  message   String\n\n  @@map(\"log_chat_pub\")\n}\n\nmodel LogCommand {\n  id        Int    @id @default(autoincrement())\n  userId    Int    @map(\"user_id\")\n  userName  String @map(\"user_name\")\n  roomid    Int\n  command   String\n  extraData String @map(\"extra_data\") @db.Text\n  timestamp Int\n\n  @@index([command], map: \"commands\")\n  @@index([timestamp], map: \"timestamp\")\n  @@index([userName], map: \"user_name\")\n  @@map(\"log_command\")\n}\n\nmodel LogFlagme {\n  id          Int    @id @default(autoincrement())\n  userId      Int    @map(\"user_id\")\n  oldusername String\n  newusername String\n  time        Int\n\n  @@map(\"log_flagme\")\n}\n\nmodel LogLogin {\n  id        Int    @id @default(autoincrement())\n  userId    Int    @map(\"user_id\")\n  date      Int    @default(0)\n  ip        String\n  userAgent String @map(\"user_agent\") @db.Text\n  user      User   @relation(fields: [userId], references: [id])\n\n  @@index([userId], map: \"user_id\")\n  @@map(\"log_login\")\n}\n\nmodel LogLootbox {\n  id              Int      @id @default(autoincrement())\n  interactionType String   @map(\"interaction_type\")\n  userId          Int      @map(\"user_id\")\n  itemId          Int      @map(\"item_id\")\n  baseId          Int      @map(\"base_id\")\n  timestamp       Int\n  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  itemBase        ItemBase @relation(fields: [baseId], references: [id], onDelete: Cascade)\n\n  @@map(\"log_lootbox\")\n}\n\nmodel LogPayment {\n  historyPaymentId  Int      @id @default(autoincrement()) @map(\"history_payment_id\")\n  docId             Int      @map(\"doc_id\")\n  userId            Int      @map(\"user_id\")\n  awards            Int\n  externalReference String   @map(\"external_reference\")\n  promoId           Int      @map(\"promo_id\")\n  date              DateTime @db.DateTime(0)\n\n  @@index([externalReference], map: \"external_reference\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"log_payment\")\n}\n\nmodel LogShop {\n  id            Int    @id @default(autoincrement())\n  userId        Int    @map(\"user_id\")\n  date          Int\n  price         Int\n  content       String\n  type          Int\n  catalogItemId Int    @default(0) @map(\"catalog_item_id\")\n  user          User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([date], map: \"date\")\n  @@index([type], map: \"type\")\n  @@index([userId], map: \"userid\")\n  @@map(\"log_shop\")\n}\n\nmodel LogSlotmachine {\n  id     Int     @id @default(autoincrement())\n  userId Int     @map(\"user_id\")\n  amount Int\n  isWin  Boolean @map(\"is_win\")\n  date   Int\n  user   User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"log_slotmachine\")\n}\n\nmodel LogStaff {\n  id     Int    @id @unique(map: \"id\") @default(autoincrement())\n  pseudo String\n  action String\n  date   Int\n\n  @@map(\"log_staff\")\n}\n\nmodel LogTrade {\n  id           Int    @id @default(autoincrement())\n  userOneId    Int    @map(\"user_one_id\")\n  userTwoId    Int    @map(\"user_two_id\")\n  userOneItems String @map(\"user_one_items\") @db.Text\n  userTwoItems String @map(\"user_two_items\") @db.Text\n  roomId       Int    @map(\"room_id\")\n  time         Int\n  userOneTrade User   @relation(fields: [userOneId], references: [id], name: \"userOneTrade\")\n  userTwoTrade User   @relation(fields: [userTwoId], references: [id], name: \"userTwoTrade\")\n\n  @@map(\"log_trade\")\n}\n\nmodel LogVpn {\n  id               Int     @id @default(autoincrement())\n  ip               String\n  ipCountry        String? @map(\"ip_country\") @db.VarChar(4)\n  host             String?\n  timestampCreated Int     @map(\"timestamp_created\")\n  isVpn            Boolean @default(true) @map(\"is_vpn\")\n\n  @@index([ip, host], map: \"ipandhost\")\n  @@map(\"log_vpn\")\n}\n\nmodel LogSandbox {\n  id               Int    @id @default(autoincrement())\n  userId           Int    @map(\"user_id\")\n  user             User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n  method           String @db.VarChar(10)\n  editName         String @map(\"edit_name\")\n  editKey          String @map(\"edit_key\")\n  createdAt        DateTime @default(now()) @map(\"created_at\")\n  updatedAt        DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"log_sandbox\")\n}\n\nmodel MessengerFriendship {\n  userOneId Int @map(\"user_one_id\")\n  userTwoId Int @map(\"user_two_id\")\n  relation  Int @default(0)\n\n  @@id([userOneId, userTwoId])\n  @@index([userOneId], map: \"user_one_id\")\n  @@index([userTwoId], map: \"user_two_id\")\n  @@map(\"messenger_friendship\")\n}\n\nmodel MessengerOfflineMessage {\n  id        Int    @id @default(autoincrement())\n  toId      Int    @default(0) @map(\"to_id\")\n  fromId    Int    @default(0) @map(\"from_id\")\n  message   String @db.Text\n  timestamp Int    @default(0)\n\n  @@index([toId], map: \"to_id\")\n  @@map(\"messenger_offline_message\")\n}\n\nmodel MessengerRequest {\n  fromId Int @map(\"from_id\")\n  toId   Int @map(\"to_id\")\n\n  @@id([fromId, toId])\n  @@index([fromId], map: \"from_id\")\n  @@index([toId], map: \"to_id\")\n  @@map(\"messenger_request\")\n}\n\nmodel ModerationPreset {\n  id      Int                  @id @default(autoincrement())\n  enabled Boolean              @default(true)\n  type    ModerationPresetType @default(message)\n  message String               @db.Text\n\n  @@index([enabled], map: \"enabled\")\n  @@map(\"moderation_preset\")\n}\n\nmodel ModerationResolution {\n  id         Int                      @id @default(autoincrement())\n  type       ModerationResolutionType @default(Sexual)\n  title      String\n  subtitle   String\n  banHours   Int                      @default(0) @map(\"ban_hours\")\n  enableMute Int                      @default(0) @map(\"enable_mute\")\n  muteHours  Int                      @default(0) @map(\"mute_hours\")\n  reminder   Int                      @default(0)\n  message    String\n\n  @@map(\"moderation_resolution\")\n}\n\nmodel ModerationTicket {\n  id          Int                    @id @unique(map: \"id\") @default(autoincrement())\n  score       Int\n  type        Int\n  status      ModerationTicketStatus @default(open)\n  senderId    Int                    @map(\"sender_id\")\n  reportedId  Int                    @map(\"reported_id\")\n  moderatorId Int                    @map(\"moderator_id\")\n  message     String                 @db.Text\n  roomId      Int                    @map(\"room_id\")\n  roomName    String                 @map(\"room_name\")\n  timestamp   Int\n\n  @@index([senderId], map: \"sender_id\")\n  @@index([status], map: \"statue\")\n  @@map(\"moderation_ticket\")\n}\n\nmodel ModerationTopic {\n  id      Int    @id @default(autoincrement())\n  caption String @default(\"\")\n\n  @@map(\"moderation_topic\")\n}\n\nmodel ModerationTopicAction {\n  id              Int    @id @default(autoincrement())\n  parentId        Int    @map(\"parent_id\")\n  type            String\n  caption         String @default(\"\")\n  messageText     String @map(\"message_text\")\n  defaultSanction String @map(\"default_sanction\")\n  muteTime        Int    @default(0) @map(\"mute_time\")\n  banTime         Int    @default(0) @map(\"ban_time\")\n  ipTime          Int    @default(0) @map(\"ip_time\")\n  tradeLockTime   Int    @default(0) @map(\"trade_lock_time\")\n\n  @@map(\"moderation_topic_action\")\n}\n\nmodel NavigatorCategory {\n  id                 Int                              @id\n  category           NavigatorCategoryCategory        @default(hotel_view)\n  categoryIdentifier String                           @default(\"\") @map(\"category_identifier\")\n  publicName         String                           @default(\"\") @map(\"public_name\")\n  viewMode           NavigatorCategoryViewMode        @default(REGULAR) @map(\"view_mode\")\n  requiredRank       Int                              @default(1) @map(\"required_rank\")\n  categoryType       String                           @default(\"category\") @map(\"category_type\")\n  searchAllowance    NavigatorCategorySearchAllowance @default(SHOW_MORE) @map(\"search_allowance\")\n  minimized          Boolean                          @default(false)\n  enabled            Boolean                          @default(true)\n  orderId            Int                              @default(0) @map(\"order_id\")\n\n  @@map(\"navigator_category\")\n}\n\nmodel NavigatorPublic {\n  roomId       Int                   @id @map(\"room_id\")\n  imageUrl     String?               @map(\"image_url\") @db.Text\n  orderNum     Int                   @default(1) @map(\"order_num\")\n  enabled      Boolean               @default(true)\n  langue       NavigatorPublicLangue @default(fr)\n  categoryType String                @default(\"featured\") @map(\"category_type\")\n\n  @@map(\"navigator_public\")\n}\n\nmodel Roleplay {\n  id        Int @id @default(autoincrement())\n  ownerId   Int @map(\"owner_id\")\n  hopitalId Int @default(0) @map(\"hopital_id\")\n  prisonId  Int @map(\"prison_id\")\n\n  @@map(\"roleplay\")\n}\n\nmodel RoleplayEnemy {\n  id                Int               @default(autoincrement())\n  type              RoleplayEnemyType @default(bot)\n  health            Int               @default(100)\n  weaponFarId       Int               @default(4) @map(\"weapon_far_id\")\n  weaponCacId       Int               @default(1) @map(\"weapon_cac_id\")\n  deadTimer         Int               @default(30) @map(\"dead_timer\")\n  lootItemId        Int               @default(0) @map(\"loot_item_id\")\n  moneyDrop         Int               @default(10) @map(\"money_drop\")\n  dropScriptId      Int               @default(5461) @map(\"drop_script_id\")\n  teamId            Int               @default(0) @map(\"team_id\")\n  aggroDistance     Int               @default(0) @map(\"aggro_distance\")\n  zoneDistance      Int               @map(\"zone_distance\")\n  resetPosition     Boolean           @default(true) @map(\"reset_position\")\n  lostAggroDistance Int               @default(12) @map(\"lost_aggro_distance\")\n  zombieMode        Boolean           @default(false) @map(\"zombie_mode\")\n\n  @@id([id, type])\n  @@map(\"roleplay_enemy\")\n}\n\nmodel RoleplayItem {\n  id         Int                  @id @default(autoincrement())\n  name       String\n  desc       String?              @db.Text\n  price      Int                  @default(0)\n  type       RoleplayItemType\n  value      Int                  @default(0)\n  allowstack Boolean              @default(true)\n  category   RoleplayItemCategory\n\n  @@map(\"roleplay_item\")\n}\n\nmodel RoleplayWeapon {\n  id          Int                       @id @default(autoincrement())\n  type        RoleplayWeaponType        @default(cac)\n  domageMin   Int                       @default(0) @map(\"domage_min\")\n  domageMax   Int                       @default(0) @map(\"domage_max\")\n  interaction RoleplayWeaponInteraction @default(none)\n  enable      Int                       @default(0)\n  freezeTime  Int                       @default(2) @map(\"freeze_time\")\n  distance    Int                       @default(10)\n\n  @@map(\"roleplay_weapon\")\n}\n\nmodel Room {\n  id                  Int       @id @default(autoincrement())\n  caption             String    @default(\"Room\")\n  owner               String\n  description         String?   @default(\"\") @db.Text\n  category            Int       @default(0)\n  state               RoomState @default(open)\n  usersMax            Int       @default(25) @map(\"users_max\")\n  modelName           String    @map(\"model_name\")\n  score               Int       @default(0)\n  tags                String?   @default(\"\")\n  password            String?   @default(\"\")\n  wallpaper           String    @default(\"0.0\")\n  floor               String    @default(\"0.0\")\n  landscape           String    @default(\"0.0\")\n  allowPets           Boolean   @default(true) @map(\"allow_pets\")\n  allowPetsEat        Boolean   @default(false) @map(\"allow_pets_eat\")\n  allowWalkthrough    Boolean   @default(false) @map(\"allow_walkthrough\")\n  allowHidewall       Boolean   @default(false) @map(\"allow_hidewall\")\n  wallthick           Int       @default(0)\n  floorthick          Int       @default(0)\n  moderationMuteFuse  Boolean   @default(false) @map(\"moderation_mute_fuse\")\n  allowRightsoverride Boolean   @default(false) @map(\"allow_rightsoverride\")\n  moderationKickFuse  Int       @default(0) @map(\"moderation_kick_fuse\")\n  moderationBanFuse   Boolean   @default(false) @map(\"moderation_ban_fuse\")\n  groupId             Int       @default(0) @map(\"group_id\")\n  chatType            Int       @default(0) @map(\"chat_type\")\n  chatBalloon         Int       @default(0) @map(\"chat_balloon\")\n  chatSpeed           Int       @default(0) @map(\"chat_speed\")\n  chatMaxDistance     Int       @default(0) @map(\"chat_max_distance\")\n  chatFloodProtection Int       @default(0) @map(\"chat_flood_protection\")\n  trocStatus          Int       @default(2) @map(\"troc_status\")\n  usersNow            Int       @default(0) @map(\"users_now\")\n  allowHidewireds     Boolean   @default(false) @map(\"allow_hidewireds\")\n  price               Int       @default(0)\n  wiredSecurity       Boolean   @default(true) @map(\"wired_security\")\n  LogChat             LogChat[]\n\n  @@index([caption], map: \"caption\")\n  @@index([category], map: \"category\")\n  @@index([owner], map: \"owner\")\n  @@index([score], map: \"score\")\n  @@index([usersNow], map: \"users_now\")\n  @@map(\"room\")\n}\n\nmodel RoomModel {\n  id        String @id\n  doorX     Int    @default(0) @map(\"door_x\")\n  doorY     Int    @default(0) @map(\"door_y\")\n  doorZ     Float  @default(0) @map(\"door_z\")\n  doorDir   Int    @default(2) @map(\"door_dir\")\n  heightmap String @db.Text\n\n  @@map(\"room_model\")\n}\n\nmodel RoomModelCustom {\n  roomId     Int    @id @map(\"room_id\")\n  doorX      Int    @default(0) @map(\"door_x\")\n  doorY      Int    @default(0) @map(\"door_y\")\n  doorZ      Float  @default(0) @map(\"door_z\")\n  doorDir    Int    @default(0) @map(\"door_dir\")\n  heightmap  String @db.Text\n  wallHeight Int    @default(0) @map(\"wall_height\")\n\n  @@map(\"room_model_custom\")\n}\n\nmodel RoomRight {\n  roomId Int @map(\"room_id\")\n  userId Int @map(\"user_id\")\n\n  @@id([roomId, userId])\n  @@index([roomId], map: \"room_id\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"room_right\")\n}\n\nmodel RoomBan {\n  roomId Int @map(\"room_id\")\n  userId Int @map(\"user_id\")\n  expire Int @map(\"expire\")\n\n  @@id([roomId, userId])\n  @@index([roomId], map: \"room_id\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"room_ban\")\n}\n\nmodel RoomSwearwordFilter {\n  word String @id\n\n  @@map(\"room_swearword_filter\")\n}\n\nmodel User {\n  id                   Int              @id @default(autoincrement())\n  username             String           @unique(map: \"username\")\n  password             String\n  mail                 String?          @default(\"\")\n  authTicket           String?          @default(\"\") @map(\"auth_ticket\")\n  rank                 Int              @default(1)\n  credits              Int              @default(50000)\n  activityPoints       Int              @default(0) @map(\"activity_points\")\n  look                 String           @default(\"hr-115-42.hd-190-1.ch-215-62.lg-285-91.sh-290-62\") @db.Text\n  gender               UserGender       @default(M)\n  motto                String?          @default(\"\")\n  accountCreated       Int              @default(0) @map(\"account_created\")\n  lastOnline           Int              @default(0) @map(\"last_online\")\n  online               Boolean          @default(false)\n  ipLast               String?          @default(\"\") @map(\"ip_last\")\n  machineId            String?          @default(\"\") @map(\"machine_id\")\n  homeRoom             Int              @default(0) @map(\"home_room\")\n  blockNewfriends      Boolean          @default(false) @map(\"block_newfriends\")\n  hideOnline           Boolean          @default(false) @map(\"hide_online\")\n  hideInroom           Boolean          @default(false) @map(\"hide_inroom\")\n  lastOffline          Int              @default(0) @map(\"last_offline\")\n  moisVip              Int              @default(0) @map(\"mois_vip\")\n  volume               String           @default(\"100,100,100\") @db.VarChar(11)\n  vipPoints            Int              @default(0) @map(\"vip_points\")\n  limitCoins           Int              @default(0) @map(\"limit_coins\")\n  acceptTrading        Boolean          @default(true) @map(\"accept_trading\")\n  cameraFollowDisabled Boolean          @default(false) @map(\"camera_follow_disabled\")\n  ignoreRoomInvite     Boolean          @default(false) @map(\"ignore_room_invite\")\n  lastdailycredits     String           @default(\"00/00\") @db.VarChar(10)\n  hideGamealert        Boolean          @default(false) @map(\"hide_gamealert\")\n  ipcountry            String?          @default(\"\") @db.VarChar(2)\n  gamePoints           Int              @default(0) @map(\"game_points\")\n  gamePointsMonth      Int              @default(0) @map(\"game_points_month\")\n  mazoscore            Int              @default(0)\n  mazo                 Int              @default(0)\n  nuxEnable            Boolean          @default(true) @map(\"nux_enable\")\n  langue               UserLangue       @default(fr)\n  runPoints            Int              @default(0) @map(\"run_points\")\n  runPointsMonth       Int              @default(0) @map(\"run_points_month\")\n  isBanned             Boolean          @default(false) @map(\"is_banned\")\n  bannerId             Int              @default(-1) @map(\"banner_id\")\n  logLogin             LogLogin[]\n  logChat              LogChat[]\n  logSlotmachine       LogSlotmachine[]\n  logShop              LogShop[]\n  logLootbox           LogLootbox[]\n  logSandbox           LogSandbox[]\n  userOneTrade         LogTrade[]       @relation(\"userOneTrade\")\n  userTwoTrade         LogTrade[]       @relation(\"userTwoTrade\")\n\n  @@index([authTicket], map: \"auth_ticket\")\n  @@index([gamePoints], map: \"gamepoint\")\n  @@index([gamePointsMonth], map: \"gamepoint_mouth\")\n  @@index([ipLast], map: \"ip_last\")\n  @@index([mail], map: \"mail\")\n  @@index([mazo], map: \"mazo\")\n  @@index([mazoscore], map: \"mazoscore\")\n  @@index([vipPoints], map: \"vip_points\")\n  @@map(\"user\")\n}\n\nmodel UserAchievement {\n  userId   Int    @map(\"user_id\")\n  group    String\n  level    Int\n  progress Int\n\n  @@id([userId, group])\n  @@index([userId], map: \"id\")\n  @@map(\"user_achievement\")\n}\n\nmodel UserBadge {\n  userId    Int    @map(\"user_id\")\n  badgeId   String @map(\"badge_id\")\n  badgeSlot Int    @default(0) @map(\"badge_slot\")\n\n  @@id([userId, badgeId])\n  @@index([badgeId], map: \"badge_id\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"user_badge\")\n}\n\nmodel UserBanner {\n  id        Int @id @default(autoincrement())\n  user_id   Int @map(\"user_id\")\n  banner_id Int @map(\"banner_id\")\n\n  @@map(\"user_banner\")\n}\n\nmodel UserPhoto {\n  id     Int    @id @default(autoincrement())\n  userId Int    @map(\"user_id\")\n  photo  String @db.VarChar(32)\n  time   Int\n\n  @@index([time], map: \"time\")\n  @@index([userId], map: \"userid\")\n  @@map(\"user_photo\")\n}\n\nmodel UserPremium {\n  userId                 Int @id @map(\"user_id\")\n  timestampActivated     Int @default(0) @map(\"timestamp_activated\")\n  timestampExpireClassic Int @default(0) @map(\"timestamp_expire_classic\")\n  timestampExpireEpic    Int @default(0) @map(\"timestamp_expire_epic\")\n  timestampExpireLegend  Int @default(0) @map(\"timestamp_expire_legend\")\n\n  @@index([userId], map: \"user_id\")\n  @@map(\"user_premium\")\n}\n\nmodel UserQuest {\n  userId   Int @map(\"user_id\")\n  questId  Int @map(\"quest_id\")\n  progress Int\n\n  @@id([userId, questId])\n  @@index([questId], map: \"questid\")\n  @@index([userId], map: \"userid\")\n  @@map(\"user_quest\")\n}\n\nmodel UserRoleplay {\n  userId     Int @map(\"user_id\")\n  roleplayId Int @map(\"roleplay_id\")\n  health     Int @default(100)\n  energy     Int @default(100)\n  money      Int @default(0)\n  munition   Int @default(0)\n  exp        Int @default(0)\n  weaponFar  Int @default(0) @map(\"weapon_far\")\n  weaponCac  Int @default(0) @map(\"weapon_cac\")\n  hygiene    Int @default(100)\n  money1     Int @default(0) @map(\"money_1\")\n  money2     Int @default(0) @map(\"money_2\")\n  money3     Int @default(0) @map(\"money_3\")\n  money4     Int @default(0) @map(\"money_4\")\n\n  @@id([userId, roleplayId])\n  @@index([userId, roleplayId], map: \"user_id\")\n  @@map(\"user_roleplay\")\n}\n\nmodel UserRoleplayItem {\n  id     Int @id @default(autoincrement())\n  userId Int @map(\"user_id\")\n  rpId   Int @map(\"rp_id\")\n  itemId Int @map(\"item_id\")\n  count  Int @default(1)\n\n  @@index([userId, rpId], map: \"user_id\")\n  @@map(\"user_roleplay_item\")\n}\n\nmodel UserStats {\n  id                    Int @id\n  onlineTime            Int @default(0) @map(\"online_time\")\n  respect               Int @default(0)\n  respectGiven          Int @default(0) @map(\"respect_given\")\n  giftsGiven            Int @default(0) @map(\"gifts_given\")\n  giftsReceived         Int @default(0) @map(\"gifts_received\")\n  dailyRespectPoints    Int @default(3) @map(\"daily_respect_points\")\n  dailyPetRespectPoints Int @default(3) @map(\"daily_pet_respect_points\")\n  achievementScore      Int @default(0) @map(\"achievement_score\")\n  questId               Int @default(0) @map(\"quest_id\")\n  questProgress         Int @default(0) @map(\"quest_progress\")\n  levBuilder            Int @default(0) @map(\"lev_builder\")\n  levSocial             Int @default(0) @map(\"lev_social\")\n  levIdentity           Int @default(0) @map(\"lev_identity\")\n  levExplore            Int @default(0) @map(\"lev_explore\")\n  groupId               Int @default(0) @map(\"group_id\")\n\n  @@index([achievementScore], map: \"AchievementScore\")\n  @@index([groupId], map: \"groupid\")\n  @@map(\"user_stats\")\n}\n\nmodel UserWardrobe {\n  userId Int                @map(\"user_id\")\n  slotId Int                @map(\"slot_id\")\n  look   String             @db.Text\n  gender UserWardrobeGender @default(M)\n\n  @@id([userId, slotId])\n  @@index([userId], map: \"user_id\")\n  @@map(\"user_wardrobe\")\n}\n\nmodel UserFavorite {\n  id     Int @id @default(autoincrement())\n  userId Int @map(\"user_id\")\n  roomId Int @default(0) @map(\"room_id\")\n\n  @@index([roomId], map: \"room_id\")\n  @@index([userId], map: \"user_id\")\n  @@map(\"user_favorite\")\n}\n\nmodel WordFilterRetro {\n  word String @id\n\n  @@map(\"word_filter_retro\")\n}\n\nenum BanBantype {\n  user\n  ip\n  machine\n  ignoreall\n}\n\nenum CatalogVoucherType {\n  credits\n  duckets\n}\n\nenum GuildItemType {\n  base\n  symbol\n  color\n  color2\n  color3\n}\n\nenum ModerationResolutionType {\n  Sexual\n  PII\n}\n\nenum NavigatorCategoryCategory {\n  official_view\n  hotel_view\n  myworld_view\n  roomads_view\n  query\n  rooms_game\n}\n\nenum RoleplayEnemyType {\n  bot\n  pet\n}\n\nenum RoleplayWeaponType {\n  cac\n  far\n}\n\nenum ItemBaseType {\n  s\n  i\n  r\n  b\n  p\n  c\n}\n\nenum ModerationPresetType {\n  message\n  roommessage\n}\n\nenum ModerationTicketStatus {\n  open\n  picked\n  resolved\n  abusive\n  invalid\n  deleted\n}\n\nenum UserWardrobeGender {\n  F\n  M\n}\n\nenum NavigatorCategoryViewMode {\n  REGULAR\n  THUMBNAIL\n}\n\nenum NavigatorPublicLangue {\n  fr\n  en\n  br\n}\n\nenum RoleplayItemType {\n  munition\n  health\n  energy\n  weapon_cac\n  weapon_far\n  none\n  money\n  healthenergy\n  healthtired\n  showtime\n  enable\n  hit\n  openguide\n  energytired\n  openpage\n}\n\nenum RoleplayWeaponInteraction {\n  none\n}\n\nenum CatalogBotPresetAiType {\n  pet\n  generic\n  bartender\n}\n\nenum BotUserAiType {\n  generic\n  bartender\n  chatgpt\n}\n\nenum EmulatorLootboxCategory {\n  furni\n  badge\n  winwin\n  credits\n}\n\nenum RoomState {\n  open\n  locked\n  password\n  hide\n}\n\nenum NavigatorCategorySearchAllowance {\n  NOTHING\n  SHOW_MORE\n}\n\nenum RoleplayItemCategory {\n  EQUIP\n  UTIL\n  RESSOURCE\n  QUETE\n}\n\nenum UserGender {\n  M\n  F\n}\n\nenum UserLangue {\n  fr\n  en\n  br\n}\n",
  "inlineSchemaHash": "d3b1d40d0af1bc94d187272ff3fe33050e31551879fc4455a3d84fe9c2113a35",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Ban\":{\"dbName\":\"ban\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bantype\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BanBantype\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addedBy\",\"dbName\":\"added_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"addedDate\",\"dbName\":\"added_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BotPet\":{\"dbName\":\"bot_pet\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Unnamed\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"race\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"FFFFFF\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"experience\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"energy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nutrition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respect\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createstamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"x\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"y\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"z\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"haveSaddle\",\"dbName\":\"have_saddle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hairdye\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pethair\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"anyoneRide\",\"dbName\":\"anyone_ride\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BotUser\":{\"dbName\":\"bot_user\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"look\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"walkEnabled\",\"dbName\":\"walk_enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"x\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"y\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"z\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rotation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatEnabled\",\"dbName\":\"chat_enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatText\",\"dbName\":\"chat_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatSeconds\",\"dbName\":\"chat_seconds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":7,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDancing\",\"dbName\":\"is_dancing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isMixchat\",\"dbName\":\"is_mixchat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"handitem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aiType\",\"dbName\":\"ai_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BotUserAiType\",\"default\":\"generic\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogBotPreset\":{\"dbName\":\"catalog_bot_preset\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"figure\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aiType\",\"dbName\":\"ai_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CatalogBotPresetAiType\",\"default\":\"generic\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogItem\":{\"dbName\":\"catalog_item\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageId\",\"dbName\":\"page_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catalogName\",\"dbName\":\"catalog_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costCredits\",\"dbName\":\"cost_credits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costPixels\",\"dbName\":\"cost_pixels\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costDiamonds\",\"dbName\":\"cost_diamonds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"costLimitcoins\",\"dbName\":\"cost_limitcoins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"offerActive\",\"dbName\":\"offer_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"badge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catalogItemLimited\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CatalogItemLimited\",\"relationName\":\"CatalogItemToCatalogItemLimited\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemBase\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ItemBase\",\"relationName\":\"CatalogItemToItemBase\",\"relationFromFields\":[\"itemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogItemLimited\":{\"dbName\":\"catalog_item_limited\",\"fields\":[{\"name\":\"catalogItemId\",\"dbName\":\"catalog_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitedSells\",\"dbName\":\"limited_sells\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitedStack\",\"dbName\":\"limited_stack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catalogItem\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CatalogItem\",\"relationName\":\"CatalogItemToCatalogItemLimited\",\"relationFromFields\":[\"catalogItemId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogMarketplaceData\":{\"dbName\":\"catalog_marketplace_data\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sprite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avgprice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogMarketplaceOffer\":{\"dbName\":\"catalog_marketplace_offer\",\"fields\":[{\"name\":\"offerId\",\"dbName\":\"offer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"askingPrice\",\"dbName\":\"asking_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalPrice\",\"dbName\":\"total_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicName\",\"dbName\":\"public_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spriteId\",\"dbName\":\"sprite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemType\",\"dbName\":\"item_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraData\",\"dbName\":\"extra_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"furniId\",\"dbName\":\"furni_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitedNumber\",\"dbName\":\"limited_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitedStack\",\"dbName\":\"limited_stack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogPage\":{\"dbName\":\"catalog_page\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":-1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caption\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"iconImage\",\"dbName\":\"icon_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiredRight\",\"dbName\":\"required_right\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderNum\",\"dbName\":\"order_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageLayout\",\"dbName\":\"page_layout\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"default_3x3\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageLink\",\"dbName\":\"page_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageStrings1\",\"dbName\":\"page_strings_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"wibbo|catalog_base\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageStrings2\",\"dbName\":\"page_strings_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPremium\",\"dbName\":\"is_premium\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogPageLangue\":{\"dbName\":\"catalog_page_langue\",\"fields\":[{\"name\":\"pageId\",\"dbName\":\"page_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"captionFr\",\"dbName\":\"caption_fr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"captionEn\",\"dbName\":\"caption_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"captionBr\",\"dbName\":\"caption_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageStrings2Fr\",\"dbName\":\"page_strings_2_fr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageStrings2En\",\"dbName\":\"page_strings_2_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageStrings2Br\",\"dbName\":\"page_strings_2_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogPetRace\":{\"dbName\":\"catalog_pet_race\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"raceid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has1color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"has2color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogPromotion\":{\"dbName\":\"catalog_promotion\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleEn\",\"dbName\":\"title_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleBr\",\"dbName\":\"title_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unknown\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageLink\",\"dbName\":\"page_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CatalogVoucher\":{\"dbName\":\"catalog_voucher\",\"fields\":[{\"name\":\"voucher\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"CatalogVoucherType\",\"default\":\"credits\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentUses\",\"dbName\":\"current_uses\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxUses\",\"dbName\":\"max_uses\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsForumPost\":{\"dbName\":\"cms_forum_post\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"threadid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"look\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idAuteur\",\"dbName\":\"id_auteur\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsForumThread\":{\"dbName\":\"cms_forum_thread\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastpostAuthor\",\"dbName\":\"lastpost_author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastpostDate\",\"dbName\":\"lastpost_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mainPost\",\"dbName\":\"main_post\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statut\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categorie\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"views\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsFourmCategory\":{\"dbName\":\"cms_fourm_category\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsMailConfirm\":{\"dbName\":\"cms_mail_confirm\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codedevalidation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"temps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsMailForgot\":{\"dbName\":\"cms_mail_forgot\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pass\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsNews\":{\"dbName\":\"cms_news\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryId\",\"dbName\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"topstoryImage\",\"dbName\":\"topstory_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"snippet\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"dbName\":\"author_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link_keyword\",\"dbName\":\"link_keyword\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsStaff\":{\"dbName\":\"cms_staff\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"function\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialInsta\",\"dbName\":\"social_insta\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialDiscord\",\"dbName\":\"social_discord\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CmsStaffProtect\":{\"dbName\":\"cms_staff_protect\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hide\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorAchievement\":{\"dbName\":\"emulator_achievement\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupName\",\"dbName\":\"group_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"ACH_\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"identity\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardPixels\",\"dbName\":\"reward_pixels\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rewardPoints\",\"dbName\":\"reward_points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progressNeeded\",\"dbName\":\"progress_needed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorBanner\":{\"dbName\":\"emulator_banner\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"haveLayer\",\"dbName\":\"have_layer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canTrade\",\"dbName\":\"can_trade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorBadge\":{\"dbName\":\"emulator_badge\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canTrade\",\"dbName\":\"can_trade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canDelete\",\"dbName\":\"can_delete\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canGive\",\"dbName\":\"can_give\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountWinwins\",\"dbName\":\"amount_winwins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorChatStyle\":{\"dbName\":\"emulator_chat_style\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiredRight\",\"dbName\":\"required_right\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorCommand\":{\"dbName\":\"emulator_command\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"input\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minrank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptionFr\",\"dbName\":\"description_fr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptionEn\",\"dbName\":\"description_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descriptionBr\",\"dbName\":\"description_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorCommandPet\":{\"dbName\":\"emulator_command_pet\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"command\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorEffect\":{\"dbName\":\"emulator_effect\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"onlyStaff\",\"dbName\":\"only_staff\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorLandingview\":{\"dbName\":\"emulator_landingview\",\"fields\":[{\"name\":\"index\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"header\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[Header Name]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[BODY]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"button\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[BUTTON]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"inGamePromo\",\"dbName\":\"in_game_promo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"specialAction\",\"dbName\":\"special_action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[LINK HERE]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorLootbox\":{\"dbName\":\"emulator_lootbox\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interactionType\",\"dbName\":\"interaction_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"probability\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pageId\",\"dbName\":\"page_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"EmulatorLootboxCategory\",\"default\":\"furni\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorPermission\":{\"dbName\":\"emulator_permission\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permission\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorQuest\":{\"dbName\":\"emulator_quest\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seriesNumber\",\"dbName\":\"series_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goalType\",\"dbName\":\"goal_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goalData\",\"dbName\":\"goal_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reward\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataBit\",\"dbName\":\"data_bit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorSetting\":{\"dbName\":\"emulator_setting\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorStats\":{\"dbName\":\"emulator_stats\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorStatus\":{\"dbName\":\"emulator_status\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usersOnline\",\"dbName\":\"users_online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomsLoaded\",\"dbName\":\"rooms_loaded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userpeak\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EmulatorText\":{\"dbName\":\"emulator_text\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifiant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valueFr\",\"dbName\":\"value_fr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valueEn\",\"dbName\":\"value_en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valueBr\",\"dbName\":\"value_br\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Guild\":{\"dbName\":\"guild\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"badge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"dbName\":\"owner_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colour1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colour2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admindeco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasForum\",\"dbName\":\"has_forum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GuildItem\":{\"dbName\":\"guild_item\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GuildItemType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstvalue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secondvalue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id\",\"type\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GuildMembership\":{\"dbName\":\"guild_membership\",\"fields\":[{\"name\":\"groupId\",\"dbName\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"groupId\",\"userId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GuildRequest\":{\"dbName\":\"guild_request\",\"fields\":[{\"name\":\"groupId\",\"dbName\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"groupId\",\"userId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Item\":{\"dbName\":\"item\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseItem\",\"dbName\":\"base_item\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraData\",\"dbName\":\"extra_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"x\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"y\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"z\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallPos\",\"dbName\":\"wall_pos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemBase\":{\"dbName\":\"item_base\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemName\",\"dbName\":\"item_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ItemBaseType\",\"default\":\"s\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stackHeight\",\"dbName\":\"stack_height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canStack\",\"dbName\":\"can_stack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canSit\",\"dbName\":\"can_sit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isWalkable\",\"dbName\":\"is_walkable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spriteId\",\"dbName\":\"sprite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowRecycle\",\"dbName\":\"allow_recycle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowTrade\",\"dbName\":\"allow_trade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowMarketplaceSell\",\"dbName\":\"allow_marketplace_sell\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowGift\",\"dbName\":\"allow_gift\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowInventoryStack\",\"dbName\":\"allow_inventory_stack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interactionType\",\"dbName\":\"interaction_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"default\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interactionModesCount\",\"dbName\":\"interaction_modes_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vendingIds\",\"dbName\":\"vending_ids\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heightAdjustable\",\"dbName\":\"height_adjustable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"effectId\",\"dbName\":\"effect_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRare\",\"dbName\":\"is_rare\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rarityLevel\",\"dbName\":\"rarity_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemStat\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ItemStat\",\"relationName\":\"ItemBaseToItemStat\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logLootbox\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogLootbox\",\"relationName\":\"ItemBaseToLogLootbox\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catalogItem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CatalogItem\",\"relationName\":\"CatalogItemToItemBase\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemLimited\":{\"dbName\":\"item_limited\",\"fields\":[{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitedNumber\",\"dbName\":\"limited_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitedStack\",\"dbName\":\"limited_stack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemMoodlight\":{\"dbName\":\"item_moodlight\",\"fields\":[{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentPreset\",\"dbName\":\"current_preset\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presetOne\",\"dbName\":\"preset_one\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presetTwo\",\"dbName\":\"preset_two\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"presetThree\",\"dbName\":\"preset_three\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemPresent\":{\"dbName\":\"item_present\",\"fields\":[{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseId\",\"dbName\":\"base_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraData\",\"dbName\":\"extra_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemStat\":{\"dbName\":\"item_stat\",\"fields\":[{\"name\":\"baseId\",\"dbName\":\"base_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemBase\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ItemBase\",\"relationName\":\"ItemBaseToItemStat\",\"relationFromFields\":[\"baseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemTeleport\":{\"dbName\":\"item_teleport\",\"fields\":[{\"name\":\"teleOneId\",\"dbName\":\"tele_one_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teleTwoId\",\"dbName\":\"tele_two_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"teleOneId\",\"teleTwoId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemWired\":{\"dbName\":\"item_wired\",\"fields\":[{\"name\":\"triggerId\",\"dbName\":\"trigger_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triggerData2\",\"dbName\":\"trigger_data_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triggerData\",\"dbName\":\"trigger_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allUserTriggerable\",\"dbName\":\"all_user_triggerable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"triggersItem\",\"dbName\":\"triggers_item\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"delay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogChat\":{\"dbName\":\"log_chat\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"dbName\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LogChatToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"room\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Room\",\"relationName\":\"LogChatToRoom\",\"relationFromFields\":[\"roomId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogChatPub\":{\"dbName\":\"log_chat_pub\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"dbName\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogCommand\":{\"dbName\":\"log_command\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userName\",\"dbName\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"command\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extraData\",\"dbName\":\"extra_data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogFlagme\":{\"dbName\":\"log_flagme\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oldusername\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newusername\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogLogin\":{\"dbName\":\"log_login\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userAgent\",\"dbName\":\"user_agent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LogLoginToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogLootbox\":{\"dbName\":\"log_lootbox\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interactionType\",\"dbName\":\"interaction_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"baseId\",\"dbName\":\"base_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LogLootboxToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemBase\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ItemBase\",\"relationName\":\"ItemBaseToLogLootbox\",\"relationFromFields\":[\"baseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogPayment\":{\"dbName\":\"log_payment\",\"fields\":[{\"name\":\"historyPaymentId\",\"dbName\":\"history_payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"docId\",\"dbName\":\"doc_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"awards\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"externalReference\",\"dbName\":\"external_reference\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"promoId\",\"dbName\":\"promo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogShop\":{\"dbName\":\"log_shop\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"catalogItemId\",\"dbName\":\"catalog_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LogShopToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogSlotmachine\":{\"dbName\":\"log_slotmachine\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isWin\",\"dbName\":\"is_win\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LogSlotmachineToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogStaff\":{\"dbName\":\"log_staff\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pseudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogTrade\":{\"dbName\":\"log_trade\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userOneId\",\"dbName\":\"user_one_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTwoId\",\"dbName\":\"user_two_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userOneItems\",\"dbName\":\"user_one_items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTwoItems\",\"dbName\":\"user_two_items\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userOneTrade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userOneTrade\",\"relationFromFields\":[\"userOneId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTwoTrade\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"userTwoTrade\",\"relationFromFields\":[\"userTwoId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogVpn\":{\"dbName\":\"log_vpn\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipCountry\",\"dbName\":\"ip_country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestampCreated\",\"dbName\":\"timestamp_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isVpn\",\"dbName\":\"is_vpn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LogSandbox\":{\"dbName\":\"log_sandbox\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"LogSandboxToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editName\",\"dbName\":\"edit_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editKey\",\"dbName\":\"edit_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessengerFriendship\":{\"dbName\":\"messenger_friendship\",\"fields\":[{\"name\":\"userOneId\",\"dbName\":\"user_one_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTwoId\",\"dbName\":\"user_two_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"relation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userOneId\",\"userTwoId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessengerOfflineMessage\":{\"dbName\":\"messenger_offline_message\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toId\",\"dbName\":\"to_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fromId\",\"dbName\":\"from_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MessengerRequest\":{\"dbName\":\"messenger_request\",\"fields\":[{\"name\":\"fromId\",\"dbName\":\"from_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"toId\",\"dbName\":\"to_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"fromId\",\"toId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModerationPreset\":{\"dbName\":\"moderation_preset\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ModerationPresetType\",\"default\":\"message\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModerationResolution\":{\"dbName\":\"moderation_resolution\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ModerationResolutionType\",\"default\":\"Sexual\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banHours\",\"dbName\":\"ban_hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enableMute\",\"dbName\":\"enable_mute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"muteHours\",\"dbName\":\"mute_hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reminder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModerationTicket\":{\"dbName\":\"moderation_ticket\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ModerationTicketStatus\",\"default\":\"open\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senderId\",\"dbName\":\"sender_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reportedId\",\"dbName\":\"reported_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderatorId\",\"dbName\":\"moderator_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomName\",\"dbName\":\"room_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestamp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModerationTopic\":{\"dbName\":\"moderation_topic\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caption\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModerationTopicAction\":{\"dbName\":\"moderation_topic_action\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentId\",\"dbName\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caption\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"messageText\",\"dbName\":\"message_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"defaultSanction\",\"dbName\":\"default_sanction\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"muteTime\",\"dbName\":\"mute_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banTime\",\"dbName\":\"ban_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipTime\",\"dbName\":\"ip_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tradeLockTime\",\"dbName\":\"trade_lock_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NavigatorCategory\":{\"dbName\":\"navigator_category\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NavigatorCategoryCategory\",\"default\":\"hotel_view\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryIdentifier\",\"dbName\":\"category_identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicName\",\"dbName\":\"public_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"viewMode\",\"dbName\":\"view_mode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NavigatorCategoryViewMode\",\"default\":\"REGULAR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requiredRank\",\"dbName\":\"required_rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryType\",\"dbName\":\"category_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"category\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"searchAllowance\",\"dbName\":\"search_allowance\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NavigatorCategorySearchAllowance\",\"default\":\"SHOW_MORE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimized\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"dbName\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NavigatorPublic\":{\"dbName\":\"navigator_public\",\"fields\":[{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"dbName\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderNum\",\"dbName\":\"order_num\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"langue\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"NavigatorPublicLangue\",\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoryType\",\"dbName\":\"category_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"featured\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Roleplay\":{\"dbName\":\"roleplay\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"dbName\":\"owner_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hopitalId\",\"dbName\":\"hopital_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prisonId\",\"dbName\":\"prison_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoleplayEnemy\":{\"dbName\":\"roleplay_enemy\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RoleplayEnemyType\",\"default\":\"bot\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"health\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponFarId\",\"dbName\":\"weapon_far_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":4,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponCacId\",\"dbName\":\"weapon_cac_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deadTimer\",\"dbName\":\"dead_timer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":30,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lootItemId\",\"dbName\":\"loot_item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moneyDrop\",\"dbName\":\"money_drop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dropScriptId\",\"dbName\":\"drop_script_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":5461,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"teamId\",\"dbName\":\"team_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aggroDistance\",\"dbName\":\"aggro_distance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zoneDistance\",\"dbName\":\"zone_distance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resetPosition\",\"dbName\":\"reset_position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lostAggroDistance\",\"dbName\":\"lost_aggro_distance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":12,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zombieMode\",\"dbName\":\"zombie_mode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"id\",\"type\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoleplayItem\":{\"dbName\":\"roleplay_item\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleplayItemType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowstack\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoleplayItemCategory\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoleplayWeapon\":{\"dbName\":\"roleplay_weapon\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RoleplayWeaponType\",\"default\":\"cac\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domageMin\",\"dbName\":\"domage_min\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domageMax\",\"dbName\":\"domage_max\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"interaction\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RoleplayWeaponInteraction\",\"default\":\"none\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"freezeTime\",\"dbName\":\"freeze_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"distance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Room\":{\"dbName\":\"room\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"caption\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Room\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"RoomState\",\"default\":\"open\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usersMax\",\"dbName\":\"users_max\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":25,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelName\",\"dbName\":\"model_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tags\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallpaper\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"floor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"landscape\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowPets\",\"dbName\":\"allow_pets\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowPetsEat\",\"dbName\":\"allow_pets_eat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowWalkthrough\",\"dbName\":\"allow_walkthrough\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowHidewall\",\"dbName\":\"allow_hidewall\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallthick\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"floorthick\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderationMuteFuse\",\"dbName\":\"moderation_mute_fuse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowRightsoverride\",\"dbName\":\"allow_rightsoverride\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderationKickFuse\",\"dbName\":\"moderation_kick_fuse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moderationBanFuse\",\"dbName\":\"moderation_ban_fuse\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupId\",\"dbName\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatType\",\"dbName\":\"chat_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatBalloon\",\"dbName\":\"chat_balloon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatSpeed\",\"dbName\":\"chat_speed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatMaxDistance\",\"dbName\":\"chat_max_distance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chatFloodProtection\",\"dbName\":\"chat_flood_protection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trocStatus\",\"dbName\":\"troc_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usersNow\",\"dbName\":\"users_now\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allowHidewireds\",\"dbName\":\"allow_hidewireds\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wiredSecurity\",\"dbName\":\"wired_security\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LogChat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogChat\",\"relationName\":\"LogChatToRoom\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoomModel\":{\"dbName\":\"room_model\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorX\",\"dbName\":\"door_x\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorY\",\"dbName\":\"door_y\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorZ\",\"dbName\":\"door_z\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorDir\",\"dbName\":\"door_dir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":2,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heightmap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoomModelCustom\":{\"dbName\":\"room_model_custom\",\"fields\":[{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorX\",\"dbName\":\"door_x\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorY\",\"dbName\":\"door_y\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorZ\",\"dbName\":\"door_z\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"doorDir\",\"dbName\":\"door_dir\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heightmap\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wallHeight\",\"dbName\":\"wall_height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoomRight\":{\"dbName\":\"room_right\",\"fields\":[{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roomId\",\"userId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoomBan\":{\"dbName\":\"room_ban\",\"fields\":[{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expire\",\"dbName\":\"expire\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"roomId\",\"userId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoomSwearwordFilter\":{\"dbName\":\"room_swearword_filter\",\"fields\":[{\"name\":\"word\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"user\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authTicket\",\"dbName\":\"auth_ticket\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":50000,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"activityPoints\",\"dbName\":\"activity_points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"look\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"hr-115-42.hd-190-1.ch-215-62.lg-285-91.sh-290-62\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserGender\",\"default\":\"M\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountCreated\",\"dbName\":\"account_created\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastOnline\",\"dbName\":\"last_online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipLast\",\"dbName\":\"ip_last\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"machineId\",\"dbName\":\"machine_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"homeRoom\",\"dbName\":\"home_room\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blockNewfriends\",\"dbName\":\"block_newfriends\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hideOnline\",\"dbName\":\"hide_online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hideInroom\",\"dbName\":\"hide_inroom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastOffline\",\"dbName\":\"last_offline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"moisVip\",\"dbName\":\"mois_vip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"100,100,100\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vipPoints\",\"dbName\":\"vip_points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitCoins\",\"dbName\":\"limit_coins\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"acceptTrading\",\"dbName\":\"accept_trading\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cameraFollowDisabled\",\"dbName\":\"camera_follow_disabled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ignoreRoomInvite\",\"dbName\":\"ignore_room_invite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastdailycredits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"00/00\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hideGamealert\",\"dbName\":\"hide_gamealert\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipcountry\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gamePoints\",\"dbName\":\"game_points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gamePointsMonth\",\"dbName\":\"game_points_month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mazoscore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mazo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nuxEnable\",\"dbName\":\"nux_enable\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"langue\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserLangue\",\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"runPoints\",\"dbName\":\"run_points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"runPointsMonth\",\"dbName\":\"run_points_month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isBanned\",\"dbName\":\"is_banned\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bannerId\",\"dbName\":\"banner_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":-1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logLogin\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogLogin\",\"relationName\":\"LogLoginToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logChat\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogChat\",\"relationName\":\"LogChatToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logSlotmachine\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogSlotmachine\",\"relationName\":\"LogSlotmachineToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logShop\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogShop\",\"relationName\":\"LogShopToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logLootbox\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogLootbox\",\"relationName\":\"LogLootboxToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logSandbox\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogSandbox\",\"relationName\":\"LogSandboxToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userOneTrade\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogTrade\",\"relationName\":\"userOneTrade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userTwoTrade\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogTrade\",\"relationName\":\"userTwoTrade\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserAchievement\":{\"dbName\":\"user_achievement\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"group\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"group\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserBadge\":{\"dbName\":\"user_badge\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"badgeId\",\"dbName\":\"badge_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"badgeSlot\",\"dbName\":\"badge_slot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"badgeId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserBanner\":{\"dbName\":\"user_banner\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banner_id\",\"dbName\":\"banner_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserPhoto\":{\"dbName\":\"user_photo\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"photo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserPremium\":{\"dbName\":\"user_premium\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestampActivated\",\"dbName\":\"timestamp_activated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestampExpireClassic\",\"dbName\":\"timestamp_expire_classic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestampExpireEpic\",\"dbName\":\"timestamp_expire_epic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timestampExpireLegend\",\"dbName\":\"timestamp_expire_legend\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserQuest\":{\"dbName\":\"user_quest\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questId\",\"dbName\":\"quest_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"questId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserRoleplay\":{\"dbName\":\"user_roleplay\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roleplayId\",\"dbName\":\"roleplay_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"health\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"energy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"munition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"exp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponFar\",\"dbName\":\"weapon_far\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weaponCac\",\"dbName\":\"weapon_cac\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hygiene\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money1\",\"dbName\":\"money_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money2\",\"dbName\":\"money_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money3\",\"dbName\":\"money_3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money4\",\"dbName\":\"money_4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"roleplayId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserRoleplayItem\":{\"dbName\":\"user_roleplay_item\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rpId\",\"dbName\":\"rp_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"itemId\",\"dbName\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserStats\":{\"dbName\":\"user_stats\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"onlineTime\",\"dbName\":\"online_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respect\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"respectGiven\",\"dbName\":\"respect_given\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftsGiven\",\"dbName\":\"gifts_given\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"giftsReceived\",\"dbName\":\"gifts_received\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyRespectPoints\",\"dbName\":\"daily_respect_points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dailyPetRespectPoints\",\"dbName\":\"daily_pet_respect_points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievementScore\",\"dbName\":\"achievement_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questId\",\"dbName\":\"quest_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questProgress\",\"dbName\":\"quest_progress\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"levBuilder\",\"dbName\":\"lev_builder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"levSocial\",\"dbName\":\"lev_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"levIdentity\",\"dbName\":\"lev_identity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"levExplore\",\"dbName\":\"lev_explore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"groupId\",\"dbName\":\"group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserWardrobe\":{\"dbName\":\"user_wardrobe\",\"fields\":[{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slotId\",\"dbName\":\"slot_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"look\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"UserWardrobeGender\",\"default\":\"M\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"slotId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserFavorite\":{\"dbName\":\"user_favorite\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roomId\",\"dbName\":\"room_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WordFilterRetro\":{\"dbName\":\"word_filter_retro\",\"fields\":[{\"name\":\"word\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"BanBantype\":{\"values\":[{\"name\":\"user\",\"dbName\":null},{\"name\":\"ip\",\"dbName\":null},{\"name\":\"machine\",\"dbName\":null},{\"name\":\"ignoreall\",\"dbName\":null}],\"dbName\":null},\"CatalogVoucherType\":{\"values\":[{\"name\":\"credits\",\"dbName\":null},{\"name\":\"duckets\",\"dbName\":null}],\"dbName\":null},\"GuildItemType\":{\"values\":[{\"name\":\"base\",\"dbName\":null},{\"name\":\"symbol\",\"dbName\":null},{\"name\":\"color\",\"dbName\":null},{\"name\":\"color2\",\"dbName\":null},{\"name\":\"color3\",\"dbName\":null}],\"dbName\":null},\"ModerationResolutionType\":{\"values\":[{\"name\":\"Sexual\",\"dbName\":null},{\"name\":\"PII\",\"dbName\":null}],\"dbName\":null},\"NavigatorCategoryCategory\":{\"values\":[{\"name\":\"official_view\",\"dbName\":null},{\"name\":\"hotel_view\",\"dbName\":null},{\"name\":\"myworld_view\",\"dbName\":null},{\"name\":\"roomads_view\",\"dbName\":null},{\"name\":\"query\",\"dbName\":null},{\"name\":\"rooms_game\",\"dbName\":null}],\"dbName\":null},\"RoleplayEnemyType\":{\"values\":[{\"name\":\"bot\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null}],\"dbName\":null},\"RoleplayWeaponType\":{\"values\":[{\"name\":\"cac\",\"dbName\":null},{\"name\":\"far\",\"dbName\":null}],\"dbName\":null},\"ItemBaseType\":{\"values\":[{\"name\":\"s\",\"dbName\":null},{\"name\":\"i\",\"dbName\":null},{\"name\":\"r\",\"dbName\":null},{\"name\":\"b\",\"dbName\":null},{\"name\":\"p\",\"dbName\":null},{\"name\":\"c\",\"dbName\":null}],\"dbName\":null},\"ModerationPresetType\":{\"values\":[{\"name\":\"message\",\"dbName\":null},{\"name\":\"roommessage\",\"dbName\":null}],\"dbName\":null},\"ModerationTicketStatus\":{\"values\":[{\"name\":\"open\",\"dbName\":null},{\"name\":\"picked\",\"dbName\":null},{\"name\":\"resolved\",\"dbName\":null},{\"name\":\"abusive\",\"dbName\":null},{\"name\":\"invalid\",\"dbName\":null},{\"name\":\"deleted\",\"dbName\":null}],\"dbName\":null},\"UserWardrobeGender\":{\"values\":[{\"name\":\"F\",\"dbName\":null},{\"name\":\"M\",\"dbName\":null}],\"dbName\":null},\"NavigatorCategoryViewMode\":{\"values\":[{\"name\":\"REGULAR\",\"dbName\":null},{\"name\":\"THUMBNAIL\",\"dbName\":null}],\"dbName\":null},\"NavigatorPublicLangue\":{\"values\":[{\"name\":\"fr\",\"dbName\":null},{\"name\":\"en\",\"dbName\":null},{\"name\":\"br\",\"dbName\":null}],\"dbName\":null},\"RoleplayItemType\":{\"values\":[{\"name\":\"munition\",\"dbName\":null},{\"name\":\"health\",\"dbName\":null},{\"name\":\"energy\",\"dbName\":null},{\"name\":\"weapon_cac\",\"dbName\":null},{\"name\":\"weapon_far\",\"dbName\":null},{\"name\":\"none\",\"dbName\":null},{\"name\":\"money\",\"dbName\":null},{\"name\":\"healthenergy\",\"dbName\":null},{\"name\":\"healthtired\",\"dbName\":null},{\"name\":\"showtime\",\"dbName\":null},{\"name\":\"enable\",\"dbName\":null},{\"name\":\"hit\",\"dbName\":null},{\"name\":\"openguide\",\"dbName\":null},{\"name\":\"energytired\",\"dbName\":null},{\"name\":\"openpage\",\"dbName\":null}],\"dbName\":null},\"RoleplayWeaponInteraction\":{\"values\":[{\"name\":\"none\",\"dbName\":null}],\"dbName\":null},\"CatalogBotPresetAiType\":{\"values\":[{\"name\":\"pet\",\"dbName\":null},{\"name\":\"generic\",\"dbName\":null},{\"name\":\"bartender\",\"dbName\":null}],\"dbName\":null},\"BotUserAiType\":{\"values\":[{\"name\":\"generic\",\"dbName\":null},{\"name\":\"bartender\",\"dbName\":null},{\"name\":\"chatgpt\",\"dbName\":null}],\"dbName\":null},\"EmulatorLootboxCategory\":{\"values\":[{\"name\":\"furni\",\"dbName\":null},{\"name\":\"badge\",\"dbName\":null},{\"name\":\"winwin\",\"dbName\":null},{\"name\":\"credits\",\"dbName\":null}],\"dbName\":null},\"RoomState\":{\"values\":[{\"name\":\"open\",\"dbName\":null},{\"name\":\"locked\",\"dbName\":null},{\"name\":\"password\",\"dbName\":null},{\"name\":\"hide\",\"dbName\":null}],\"dbName\":null},\"NavigatorCategorySearchAllowance\":{\"values\":[{\"name\":\"NOTHING\",\"dbName\":null},{\"name\":\"SHOW_MORE\",\"dbName\":null}],\"dbName\":null},\"RoleplayItemCategory\":{\"values\":[{\"name\":\"EQUIP\",\"dbName\":null},{\"name\":\"UTIL\",\"dbName\":null},{\"name\":\"RESSOURCE\",\"dbName\":null},{\"name\":\"QUETE\",\"dbName\":null}],\"dbName\":null},\"UserGender\":{\"values\":[{\"name\":\"M\",\"dbName\":null},{\"name\":\"F\",\"dbName\":null}],\"dbName\":null},\"UserLangue\":{\"values\":[{\"name\":\"fr\",\"dbName\":null},{\"name\":\"en\",\"dbName\":null},{\"name\":\"br\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

