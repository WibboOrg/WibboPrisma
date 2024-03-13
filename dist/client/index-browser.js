
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
  haveLayer: 'haveLayer'
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
  WordFilterRetro: 'WordFilterRetro'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
