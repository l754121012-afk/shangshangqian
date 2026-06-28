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
  { id: 'tangle', grade: '解签', rarity: 'NEG', type: 'negative', seal: '缠', name: '心乱如麻', text: '今天的混乱不是坏事，说明你在同时推进好几件事。', do: '列清单', avoid: '全放脑子里', action: '把所有待办写在一张纸上。', score: 25 }
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
    dissolveInput: ''
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
    this.renderAll()
  },

  pickCard() {
    const r = Math.random()
    // 大吉签 4张 (20%)
    if (r < .05) return cards[0]
    if (r < .10) return cards[1]
    if (r < .15) return cards[10]
    if (r < .20) return cards[11]
    // 上上签 5张 (20%)
    if (r < .24) return cards[2]
    if (r < .28) return cards[3]
    if (r < .32) return cards[4]
    if (r < .36) return cards[12]
    if (r < .40) return cards[13]
    // 上签 4张 (20%)
    if (r < .45) return cards[5]
    if (r < .50) return cards[6]
    if (r < .55) return cards[14]
    if (r < .60) return cards[15]
    // 平签 4张 (20%)
    if (r < .65) return cards[7]
    if (r < .70) return cards[8]
    if (r < .75) return cards[16]
    if (r < .80) return cards[17]
    // 解签 3张 (20%)
    if (r < .87) return cards[9]
    if (r < .94) return cards[18]
    return cards[19]
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
    if (card.type !== 'good') {
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

  renderAll() {
    const left = Math.max(0, 3 - this.data.freeUsed)
    const collection = this.data.collection || []

    // 构建牌册展示列表（按等级分类）
    const gradeOrder = ['大吉签', '上上签', '上签', '平签']
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
      { name: '我', card: myCard, grade: myGrade, score: myScore, isMe: true },
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
      dissolveInputVisible: false, dissolveInput: ''
    })
    wx.setStorageSync('drawDate', todayKey())
    wx.setStorageSync('todayScore', 0)
    wx.setStorageSync('todayDrawCount', 0)
    this.renderAll()
  }
})
