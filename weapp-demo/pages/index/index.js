const cards = [
  { id: 'fortune-door', grade: '大吉签', rarity: 'SSR', type: 'good', seal: '旺', name: '财气临门', text: '今天适合把一个正在犹豫的机会推进半步。', do: '主动推进', avoid: '空想暴富', action: '发出一条能推动事情的小消息。', score: 92 },
  { id: 'noble-guide', grade: '大吉签', rarity: 'SSR', type: 'good', seal: '盛', name: '贵人指路', text: '留意身边主动给你建议的人，今天他们的话值得听。', do: '主动倾听', avoid: '自顾自走', action: '回复一个你拖延了的对话。', score: 90 },
  { id: 'gold-flow', grade: '上上签', rarity: 'SR', type: 'good', seal: '进', name: '稳步进财', text: '不要追最快的机会，先守住能稳定变好的部分。', do: '整理账目', avoid: '冲动下单', action: '记录今天一笔不必要支出。', score: 86 },
  { id: 'rising-star', grade: '上上签', rarity: 'SR', type: 'good', seal: '升', name: '步步高升', text: '今天推进的事情，比昨天多走一小步就是赢。', do: '先收尾', avoid: '又开新坑', action: '把昨天未完成的一件小事收尾。', score: 83 },
  { id: 'turn-key', grade: '上上签', rarity: 'SR', type: 'good', seal: '转', name: '转机将至', text: '今天的机会藏在一个你平时忽略的小入口里。', do: '换个入口', avoid: '死磕旧路', action: '把卡住的事换一种问法。', score: 82 },
  { id: 'steady', grade: '上签', rarity: 'R', type: 'normal', seal: '稳', name: '稳住', text: '先完成一件可以交付的小事，再评价自己。', do: '拆小步', avoid: '比进度', action: '写下 10 分钟内能完成的一步。', score: 76 },
  { id: 'light-pack', grade: '上签', rarity: 'R', type: 'normal', seal: '轻', name: '轻装', text: '你不需要带着所有担心出门，今天先少拿一件负担。', do: '减一项', avoid: '全都要', action: '删除一个今天不必完成的任务。', score: 71 },
  { id: 'small-block', grade: '平签', rarity: 'N', type: 'low', seal: '阻', name: '小阻', text: '今天慢一点不是坏事，先看清楚哪里不顺。', do: '停三秒', avoid: '硬推进', action: '暂停一次冲动回复。', score: 55 },
  { id: 'fog', grade: '平签', rarity: 'N', type: 'low', seal: '雾', name: '雾中行', text: '你现在看不清全部，但可以先确定脚下这一步。', do: '问清楚', avoid: '脑补结果', action: '写下一个需要确认的问题。', score: 49 },
  { id: 'heavy', grade: '解签', rarity: 'NEG', type: 'negative', seal: '解', name: '心口石', text: '这张牌不需要收藏。它提醒你把今天压住你的东西轻轻放下。', do: '说出口', avoid: '反复咀嚼', action: '输入"我已克服"让它合并消失。', score: 30 },
  { id: 'wealth-arrive', grade: '大吉签', rarity: 'SSR', type: 'good', seal: '发', name: '财源广进', text: '今天的每一个小决定，都会在未来三周产生回响。', do: '做选择', avoid: '拖延决定', action: '把最犹豫的一件事写下利弊。', score: 95 },
  { id: 'smooth-road', grade: '大吉签', rarity: 'SSR', type: 'good', seal: '顺', name: '一帆风顺', text: '今天遇到的人，可能比你想的更愿意帮你。', do: '主动开口', avoid: '独自硬撑', action: '向一个你觉得可以信任的人问一个问题。', score: 93 },
  { id: 'wealth-gate', grade: '上上签', rarity: 'SR', type: 'good', seal: '进', name: '开门见财', text: '今天适合把一个新想法说给第一个人听。', do: '开口表达', avoid: '闷头做事', action: '用一句话描述你最近的一个小想法。', score: 85 },
  { id: 'lucky-star', grade: '上上签', rarity: 'SR', type: 'good', seal: '星', name: '福星高照', text: '今天适合做一件你一直说"等准备好了再做"的事。', do: '直接开始', avoid: '继续准备', action: '花5分钟做那件"还没准备好"的事。', score: 84 },
  { id: 'gather', grade: '上签', rarity: 'R', type: 'normal', seal: '聚', name: '聚气', text: '今天适合把注意力收回到一件具体的事上。', do: '单线程', avoid: '多任务', action: '关掉一个不需要的通知。', score: 75 },
  { id: 'rest', grade: '上签', rarity: 'R', type: 'normal', seal: '歇', name: '缓行', text: '今天不是冲刺的日子，把节奏放慢半拍。', do: '留白', avoid: '排满', action: '给自己留15分钟什么都不做。', score: 70 },
  { id: 'cloud', grade: '平签', rarity: 'N', type: 'low', seal: '云', name: '云遮月', text: '今天有些事情看不清楚，先不急着下结论。', do: '等一等', avoid: '急着表态', action: '把一个待决定的事推迟到明天。', score: 54 },
  { id: 'bend', grade: '平签', rarity: 'N', type: 'low', seal: '弯', name: '绕路', text: '今天直线走不通的时候，弯一下也没关系。', do: '灵活', avoid: '硬碰硬', action: '换个时间或方式再试一次。', score: 48 },
  { id: 'stone', grade: '解签', rarity: 'NEG', type: 'negative', seal: '石', name: '绊脚石', text: '今天有个小障碍，跨过去比绕过去更快。', do: '直接面对', avoid: '假装没看见', action: '写下这个障碍，然后做最小的一步。', score: 28 },
  { id: 'tangle', grade: '解签', rarity: 'NEG', type: 'negative', seal: '缠', name: '心乱如麻', text: '今天的混乱不是坏事，说明你在同时推进好几件事。', do: '列清单', avoid: '全放脑子里', action: '把所有待办写在一张纸上。', score: 25 },
  { id: 'splendid', grade: '大吉签', rarity: 'SSR', type: 'good', seal: '锦', name: '锦绣前程', text: '今天适合做一件能留下痕迹的小事，它会慢慢变成大事。', do: '落笔', avoid: '空想', action: '写一条今天的工作或学习记录。', score: 96 },
  { id: 'purple-qi', grade: '大吉签', rarity: 'SSR', type: 'good', seal: '紫', name: '紫气东来', text: '今天遇到的机会，比你以为的要多一个。', do: '多看一眼', avoid: '埋头', action: '打开一个你很久没点开的 app 或链接。', score: 94 },
  { id: 'turn-luck', grade: '上上签', rarity: 'SR', type: 'good', seal: '转', name: '时来运转', text: '今天适合把一件卡住的事换一个入口再试一次。', do: '换入口', avoid: '死磕', action: '把卡住的事换一种问法或路径。', score: 83 },
  { id: 'keep-simple', grade: '上签', rarity: 'R', type: 'normal', seal: '拙', name: '守拙', text: '今天不用做新东西，把已有的做好就足够了。', do: '打磨', avoid: '开新', action: '找出昨天做的一件事，优化一个小细节。', score: 74 },
  { id: 'gather-momentum', grade: '上签', rarity: 'R', type: 'normal', seal: '势', name: '蓄势', text: '今天不是发力的时候，是准备的时候。', do: '准备', avoid: '冲刺', action: '列出明天要做的第一件事。', score: 72 },
  { id: 'stick-old', grade: '平签', rarity: 'N', type: 'low', seal: '守', name: '守旧', text: '今天不适合改变计划，按原计划推进就好。', do: '坚持', avoid: '改动', action: '把今天原定计划中的第一件事完成。', score: 52 },
  { id: 'wait-quiet', grade: '平签', rarity: 'N', type: 'low', seal: '静', name: '静待', text: '今天的结果不会立刻出现，耐心等一等。', do: '等待', avoid: '催促', action: '给一件正在推进的事设一个明天的提醒。', score: 50 },
  { id: 'headwind', grade: '解签', rarity: 'NEG', type: 'negative', seal: '风', name: '逆风', text: '今天阻力比平时大，但这不是你的问题。', do: '借力', avoid: '硬撑', action: '找一个今天可以帮你分担的人。', score: 27 },
  { id: 'hidden-reef', grade: '解签', rarity: 'NEG', type: 'negative', seal: '礁', name: '暗礁', text: '今天有个你看不见的障碍，慢一点没坏处。', do: '慢行', avoid: '冒进', action: '把今天最急的事推迟1小时再做。', score: 24 },
  { id: 'lost-way', grade: '解签', rarity: 'NEG', type: 'negative', seal: '迷', name: '迷途', text: '今天感觉方向不清，先停下来确认一下。', do: '确认', avoid: '盲走', action: '写下一个你最想确认的问题。', score: 22 },
  { id: 'peach-blossom', grade: '彩蛋签', theme: 'peach', rarity: 'SP', type: 'bonus', seal: '桃', name: '桃花', text: '今天适合主动联系一个你想念的人。', do: '开口', avoid: '等待', action: '发一条消息给一个你很久没联系的人。', score: 88 },
  { id: 'golden-list', grade: '彩蛋签', theme: 'golden', rarity: 'SP', type: 'bonus', seal: '榜', name: '金榜', text: '今天适合把学到的知识用一句话讲出来。', do: '输出', avoid: '只输入', action: '用一句话总结今天学到的一个点。', score: 86 },
  { id: 'return-home', grade: '彩蛋签', theme: 'home', rarity: 'SP', type: 'bonus', seal: '归', name: '归家', text: '今天适合给家里打一个电话或做一件家务。', do: '顾家', avoid: '忽略', action: '给家里人发一条问候消息。', score: 82 },
  { id: 'far-travel', grade: '彩蛋签', theme: 'travel', rarity: 'SP', type: 'bonus', seal: '远', name: '远行', text: '今天适合查看一个你从未去过的地方。', do: '探索', avoid: '守旧', action: '在地图上标记一个你想去的地方。', score: 80 }
]

const mockDrift = [
  { id: 'd1', avatar: '林', name: '林小北', grade: '大吉签', quote: '"今天签说贵人指路，结果下午真的收到了一个合作邀约。把这份好运传给你。"', from: '匿名漂流', canAddFriend: false },
  { id: 'd2', avatar: '陈', name: '陈先生', grade: '上上签', quote: '"签上写步步高升，刚好今天升职消息下来了。送出去让更多人沾沾喜气。"', from: '实名 · 上海', canAddFriend: true },
  { id: 'd3', avatar: '?', name: '匿名用户', grade: '平签', quote: '"今天签说小阻，确实下午遇到了一点麻烦。但签的提醒让我冷静下来了。"', from: '匿名漂流', canAddFriend: false }
]

function todayKey() { return new Date().toISOString().slice(0, 10) }

Page({
  data: {
    tab: 'draw',
    current: {},
    hasDrawn: false,
    rolling: false,
    axisLeft: 0,
    cardClass: '',
    drawButtonText: '抽今日上上签',
    quotaText: '今日免费签 3 / 3',
    streak: 1,
    freeUsed: 0,
    collection: [],
    albumDisplay: [],
    albumTotal: 0,
    albumDajiCount: 0,
    albumSSCount: 0,
    albumSCount: 0,
    friends: [],
    verifyShown: false,
    adVisible: false,
    adCopy: '',
    canTurn: false,
    driftSubTab: 'received',
    driftList: [],
    friendModalVisible: false,
    friendModal: {},
    shareFlying: false,
    shareReceived: false,
    todayScore: 0,
    todayDrawCount: 0,
    supportVisible: false,
    surveyVisible: false,
    surveySubmitted: false,
    surveyRewardClaimed: false,
    surveyAnswers: {},
    surveyFeedback: '',
    dissolveInputVisible: false,
    dissolveInput: '',
    dailyPool: [],
    myTitle: '',
    myTitles: []
  },

  onLoad() {
    const storedDate = wx.getStorageSync('drawDate')
    let freeUsed = Number(wx.getStorageSync('freeUsed') || 0)
    if (storedDate !== todayKey()) {
      freeUsed = 0
      wx.setStorageSync('drawDate', todayKey())
      wx.setStorageSync('freeUsed', 0)
    }
    const todayScore = Number(wx.getStorageSync('todayScore') || 0)
    const todayDrawCount = Number(wx.getStorageSync('todayDrawCount') || 0)
    this.setData({
      freeUsed,
      streak: Number(wx.getStorageSync('streak') || 1),
      collection: wx.getStorageSync('collection') || [],
      todayScore: todayScore,
      todayDrawCount: todayDrawCount
    })
    // 日轮换签池初始化（版本变化时强制重生成）
    const poolVersion = 'v3'
    const storedPoolVer = wx.getStorageSync('poolVersion') || 'v0'
    const poolDate = wx.getStorageSync('poolDate')
    const needRegen = poolDate !== todayKey() || storedPoolVer !== poolVersion
    if (needRegen) {
      wx.setStorageSync('poolVersion', poolVersion)
      const dailyPool = this.generateDailyPool()
      wx.setStorageSync('poolDate', todayKey())
      wx.setStorageSync('dailyPool', dailyPool)
      this.setData({ dailyPool })
    } else {
      this.setData({ dailyPool: wx.getStorageSync('dailyPool') || [] })
    }
    // 加载称号
    const collection = wx.getStorageSync('collection') || []
    const titles = []
    const titleMap = { '大吉签': '大吉之人', '上上签': '福星高照', '上签': '稳步前行', '平签': '波澜不惊', '彩蛋签': '奇遇收藏家' }
    for (const grade in titleMap) {
      const allIds = cards.filter(c => c.grade === grade).map(c => c.id)
      if (allIds.length === 0) continue
      const isComplete = allIds.every(id => collection.includes(id))
      if (isComplete) titles.push(titleMap[grade])
    }
    const myTitle = titles.length > 0 ? titles[titles.length - 1] : ''
    this.setData({ myTitle, myTitles: titles })
    this.renderAll()
  },

  generateDailyPool() {
    const baseIndices = []
    cards.forEach((c, i) => {
      if (c.type !== 'bonus' && c.type !== 'negative') baseIndices.push(i)
    })
    return baseIndices.sort(() => Math.random() - 0.5).slice(0, 24)
  },

  pickCard() {
    const r = Math.random()
    // 彩蛋签 4.5% (约22次出现1次)
    if (r < .045) {
      const bonusCards = cards.filter(c => c.type === 'bonus')
      return bonusCards[Math.floor(Math.random() * bonusCards.length)]
    }
    // 解签 5% (约20次出现1次)
    if (r < .095) {
      const negativeCards = cards.filter(c => c.type === 'negative')
      return negativeCards[Math.floor(Math.random() * negativeCards.length)]
    }
    // 基础签从当日签池抽取 (只含 good/normal/low)
    const pool = this.data.dailyPool || []
    if (pool.length === 0) return cards[0]
    return cards[pool[Math.floor(Math.random() * pool.length)]]
  },

  luckPos(card) {
    if (card.grade === '大吉签') return 100
    if (card.grade === '上上签') return 67
    if (card.grade === '上签') return 35
    return 0
  },

  onDraw() {
    if (this.data.freeUsed < 3) {
      const freeUsed = this.data.freeUsed + 1
      wx.setStorageSync('freeUsed', freeUsed)
      this.setData({ freeUsed })
      this.performDraw()
      return
    }
    this.showMockAd('今日免费签已用完。看完这段短广告后，再抽一张今日补充签。', () => this.performDraw())
  },

  performDraw() {
    this.setData({ rolling: true, drawButtonText: '签位滚动中…' })
    setTimeout(() => {
      const card = this.pickCard()
      const todayScore = this.data.todayScore + (card.score || 0)
      const todayDrawCount = this.data.todayDrawCount + 1
      this.setData({
        current: card,
        hasDrawn: true,
        rolling: false,
        axisLeft: this.luckPos(card),
        cardClass: card.type === 'negative' ? 'negative' : card.type === 'low' ? 'low' : '',
        canTurn: card.type === 'low' || card.type === 'negative',
        verifyShown: false,
        drawButtonText: '再抽今日上上签',
        todayScore: todayScore,
        todayDrawCount: todayDrawCount
      })
      wx.setStorageSync('todayScore', todayScore)
      wx.setStorageSync('todayDrawCount', todayDrawCount)
      this.renderAll()
      wx.showToast({ title: card.grade === '大吉签' ? '抽中大吉签！' : '抽到' + card.grade, icon: 'none' })
    }, 820)
  },

  showMockAd(copy, done) {
    this.setData({ adVisible: true, adCopy: copy })
    setTimeout(() => {
      this.setData({ adVisible: false })
      if (done) done()
    }, 2600)
  },

  onVerify() {
    const card = this.data.current
    if (!card || !card.id) {
      wx.showToast({ title: '请先抽一张签', icon: 'none' })
      return
    }
    if (card.type !== 'good' && card.type !== 'bonus') {
      wx.showToast({ title: '这类牌不出现感谢入口', icon: 'none' })
      return
    }
    this.setData({ verifyShown: true })
  },

  onSupport() {
    this.setData({ supportVisible: true })
  },
  closeSupport() {
    this.setData({ supportVisible: false })
  },
  confirmSupport(e) {
    const amount = e.currentTarget.dataset.amount || 1
    this.setData({ supportVisible: false, verifyShown: false })
    wx.showToast({ title: '感谢支持 ¥' + amount + ' 好运火已点亮', icon: 'none', duration: 2000 })
  },

  onCollect() {
    const card = this.data.current
    if (!card.id) return
    if (card.type === 'negative') {
      wx.showToast({ title: '负面牌不进入收藏', icon: 'none' })
      return
    }
    const set = new Set(this.data.collection)
    set.add(card.id)
    const collection = Array.from(set)
    wx.setStorageSync('collection', collection)
    this.setData({ collection })
    this.renderAll()
    wx.showToast({ title: '已收入牌册', icon: 'none' })
    this.checkAchievements()
  },

  onTurn() {
    this.showMockAd('看完这段短广告后，获得一张更温和的转机卡。', () => {
      const card = cards[4]
      this.setData({ current: card, axisLeft: this.luckPos(card), cardClass: '', canTurn: false })
      wx.showToast({ title: '已获得转机卡', icon: 'none' })
    })
  },

  onBonus() {
    this.showMockAd('看完这段短广告后，解锁一张补充签，用来补充今天的角度。', () => {
      const card = cards[2]
      this.setData({ current: card, axisLeft: this.luckPos(card), cardClass: '', canTurn: false })
      wx.showToast({ title: '补充签已解锁', icon: 'none' })
    })
  },

  openDissolveInput() {
    this.setData({ dissolveInputVisible: true, dissolveInput: '' })
  },
  closeDissolveInput() {
    this.setData({ dissolveInputVisible: false })
  },
  onDissolveInput(e) {
    this.setData({ dissolveInput: e.detail.value })
  },
  confirmDissolve() {
    const input = this.data.dissolveInput.trim() || '我已克服'
    const card = cards[5]
    this.setData({ current: card, axisLeft: this.luckPos(card), cardClass: '', canTurn: false, dissolveInputVisible: false, dissolveInput: '' })
    wx.showToast({ title: input + ' · 负面牌已合并消失', icon: 'none', duration: 2000 })
  },

  onShareCard() {
    this.setData({ shareReceived: true, tab: 'friends' })
    wx.showToast({ title: '比手气卡已送达好友榜', icon: 'none' })
  },

  checkAchievements() {
    const collection = this.data.collection || []
    const gradeMap = { '大吉签': '大吉之人', '上上签': '福星高照', '上签': '稳步前行', '平签': '波澜不惊', '彩蛋签': '奇遇收藏家' }
    for (const grade in gradeMap) {
      const allIds = cards.filter(c => c.grade === grade).map(c => c.id)
      if (allIds.length === 0) continue
      const isComplete = allIds.every(id => collection.includes(id))
      const key = 'achievement_' + grade
      const already = wx.getStorageSync(key)
      if (isComplete && !already) {
        wx.setStorageSync(key, true)
        wx.showToast({ title: '集齐' + grade + '！获得"' + gradeMap[grade] + '"称号', icon: 'none', duration: 2500 })
        const titles = [...this.data.myTitles, gradeMap[grade]]
        this.setData({ myTitle: gradeMap[grade], myTitles: titles })
        wx.setStorageSync('myTitles', titles)
      }
    }
  },

  renderAll() {
    const left = Math.max(0, 3 - this.data.freeUsed)
    const collection = this.data.collection || []

    // 构建牌册展示列表（按等级分类）
    const gradeOrder = ['大吉签', '上上签', '上签', '平签', '彩蛋签']
    const collected = cards.filter(c => c.type !== 'negative' && collection.includes(c.id))
    const uncollected = cards.filter(c => c.type !== 'negative' && !collection.includes(c.id))
    const albumDisplay = []
    for (const grade of gradeOrder) {
      const c = collected.filter(card => card.grade === grade)
      const u = uncollected.filter(card => card.grade === grade).map(card => ({ ...card, locked: true }))
      if (c.length > 0 || u.length > 0) {
        albumDisplay.push({ isGroupHeader: true, grade, id: 'header-' + grade, collectedCount: c.length, totalCount: c.length + u.length })
        albumDisplay.push(...c, ...u)
      }
    }

    // 统计
    const albumDajiCount = collected.filter(c => c.grade === '大吉签').length
    const albumSSCount = collected.filter(c => c.grade === '上上签').length
    const albumSCount = collected.filter(c => c.grade === '上签').length
    const albumEggCount = collected.filter(c => c.grade === '彩蛋签').length

    // 漂流签
    const driftList = mockDrift

    const cur = this.data.current.id ? this.data.current : cards[0]
    const myScore = this.data.todayScore || (cur.score || 0)
    const myGrade = cur.grade || '上签'
    const myCard = cur.name || '稳住'
    const myDrawCount = this.data.todayDrawCount || 1
    // 模拟好友数据，分数有基础值+随机波动
    const friendsBase = [
      { name: '阿泽', card: '稳步进财', grade: '上上签', baseScore: 85 },
      { name: '小林', card: '回神', grade: '上签', baseScore: 72 },
      { name: 'Momo', card: '轻装', grade: '上签', baseScore: 68 }
    ]
    const friends = [
      { name: '我', card: myCard, grade: myGrade, score: myScore, isMe: true, title: this.data.myTitle },
      ...friendsBase.map(f => ({ ...f, score: f.baseScore + Math.floor(Math.random() * 8) }))
    ].sort((a, b) => b.score - a.score)
    // 计算我的排名
    const myRank = friends.findIndex(f => f.isMe) + 1

    this.setData({
      quotaText: left > 0 ? `今日免费签 ${left} / 3` : '今日免费签已用完 · 额外抽签需看广告',
      albumDisplay,
      albumTotal: collected.length,
      albumDajiCount,
      albumSSCount,
      albumSCount,
      albumEggCount,
      driftList,
      friends,
      myRank: myRank,
      todayDrawCount: myDrawCount,
      shareReceived: this.data.shareReceived || false
    })
  },

  // 漂流签
  switchDriftTab(e) {
    this.setData({ driftSubTab: e.currentTarget.dataset.sub })
  },
  onDriftThank() { wx.showToast({ title: '已感谢', icon: 'none' }) },
  onDriftReply(e) {
    const id = e.currentTarget.dataset.id
    const item = mockDrift.find(d => d.id === id)
    if (item && item.canAddFriend) {
      this.setData({ friendModalVisible: true, friendModal: item })
    } else {
      wx.showToast({ title: '已回赠一张签', icon: 'none' })
    }
  },
  closeFriendModal() { this.setData({ friendModalVisible: false }) },
  acceptFriend() {
    this.setData({ friendModalVisible: false })
    wx.showToast({ title: '已添加好友', icon: 'none' })
  },
  onSendDrift() { wx.showToast({ title: '已送出漂流签', icon: 'none' }) },

  // 问卷
  openSurvey() {
    this.setData({ surveyVisible: true })
  },
  closeSurvey() {
    this.setData({ surveyVisible: false })
  },
  preventBubble() {},
  onSurveyFeedback(e) { this.setData({ surveyFeedback: e.detail.value }) },
  onSurveyPick(e) {
    const q = e.currentTarget.dataset.q
    const val = e.currentTarget.dataset.val
    this.setData({ ['surveyAnswers.' + q]: val })
  },
  submitSurvey() {
    if (!this.data.surveyAnswers.q1 || !this.data.surveyAnswers.q2 || !this.data.surveyAnswers.q3 || !this.data.surveyAnswers.q4) {
      wx.showToast({ title: '请回答所有问题', icon: 'none' })
      return
    }
    this.setData({ surveySubmitted: true, surveyVisible: false })
    wx.showToast({ title: '感谢反馈！奖励1次抽签机会', icon: 'none', duration: 2500 })
    const newFree = Math.max(0, this.data.freeUsed - 1)
    this.setData({ freeUsed: newFree })
    wx.setStorageSync('freeUsed', newFree)
    this.renderAll()
  },

  switchTab(e) { this.setData({ tab: e.currentTarget.dataset.tab }) },

  onCopy() {
    const card = this.data.current
    wx.setClipboardData({ data: `我抽到「${card.name || '今日上上签'}」，来比比你今天的手气。` })
  },

  onReset() {
    wx.clearStorageSync()
    this.setData({
      current: {}, hasDrawn: false, axisLeft: 0, freeUsed: 0, collection: [],
      drawButtonText: '抽今日上上签', verifyShown: false,
      todayScore: 0, todayDrawCount: 0,
      dissolveInputVisible: false, dissolveInput: '',
      dailyPool: [],
      myTitle: '',
      myTitles: []
    })
    wx.setStorageSync('drawDate', todayKey())
    wx.setStorageSync('todayScore', 0)
    wx.setStorageSync('todayDrawCount', 0)
    this.renderAll()
  }
})
