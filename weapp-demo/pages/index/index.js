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
  { id: 'heavy', grade: '解签', rarity: 'NEG', type: 'negative', seal: '解', name: '心口石', text: '这张牌不需要收藏。它提醒你把今天压住你的东西轻轻放下。', do: '说出口', avoid: '反复咀嚼', action: '输入"我已克服"让它合并消失。', score: 30 }
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
    friendModal: {}
  },

  onLoad() {
    const storedDate = wx.getStorageSync('drawDate')
    let freeUsed = Number(wx.getStorageSync('freeUsed') || 0)
    if (storedDate !== todayKey()) {
      freeUsed = 0
      wx.setStorageSync('drawDate', todayKey())
      wx.setStorageSync('freeUsed', 0)
    }
    this.setData({
      freeUsed,
      streak: Number(wx.getStorageSync('streak') || 1),
      collection: wx.getStorageSync('collection') || []
    })
    this.renderAll()
  },

  pickCard() {
    const r = Math.random()
    if (r < .18) return cards[0]
    if (r < .32) return cards[1]
    if (r < .46) return cards[2]
    if (r < .56) return cards[3]
    if (r < .66) return cards[4]
    if (r < .80) return cards[5]
    if (r < .90) return cards[6]
    if (r < .965) return cards[7]
    if (r < .992) return cards[8]
    return cards[9]
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
      this.setData({
        current: card,
        hasDrawn: true,
        rolling: false,
        axisLeft: this.luckPos(card),
        cardClass: card.type === 'negative' ? 'negative' : card.type === 'low' ? 'low' : '',
        canTurn: card.type === 'low' || card.type === 'negative',
        verifyShown: false,
        drawButtonText: '再抽今日上上签'
      })
      this.renderAll()
      wx.showToast({ title: card.rarity === 'SSR' ? '抽中大吉签' : `抽到${card.grade}`, icon: 'none' })
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
    if (!this.data.current.id) return
    if (this.data.current.type !== 'good') {
      wx.showToast({ title: '这类牌不出现感谢入口', icon: 'none' })
      return
    }
    this.setData({ verifyShown: true })
  },

  onSupport() {
    this.showMockAd('这是验证成功后的轻支持入口，用来测试用户是否接受这种感谢式收益点。', () => {
      wx.showToast({ title: '已模拟添一束好运火', icon: 'none' })
    })
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

  onDissolve() {
    const card = cards[5]
    this.setData({ current: card, axisLeft: this.luckPos(card), cardClass: '', canTurn: false })
    wx.showToast({ title: '负面牌已合并消失', icon: 'none' })
  },

  onShareCard() { wx.showToast({ title: '已生成比手气卡', icon: 'none' }) },

  renderAll() {
    const left = Math.max(0, 3 - this.data.freeUsed)
    const collection = this.data.collection || []

    // 构建牌册展示列表
    const collected = cards.filter(c => c.type !== 'negative' && collection.includes(c.id))
    const uncollected = cards.filter(c => c.type !== 'negative' && !collection.includes(c.id))
    const albumDisplay = [...collected, ...uncollected.map(c => ({ ...c, locked: true }))]

    // 统计
    const albumDajiCount = collected.filter(c => c.grade === '大吉签').length
    const albumSSCount = collected.filter(c => c.grade === '上上签').length
    const albumSCount = collected.filter(c => c.grade === '上签').length

    // 漂流签
    const driftList = mockDrift

    const cur = this.data.current.id ? this.data.current : cards[0]
    const friends = [
      { name: '你', card: cur.name, rarity: cur.rarity, score: cur.score },
      { name: '阿泽', card: '稳步进财', rarity: 'SR', score: 86 },
      { name: '小林', card: '回神', rarity: 'R', score: 73 },
      { name: 'Momo', card: '轻装', rarity: 'R', score: 69 }
    ].sort((a, b) => b.score - a.score)

    this.setData({
      quotaText: left > 0 ? `今日免费签 ${left} / 3` : '今日免费签已用完 · 额外抽签需看广告',
      albumDisplay,
      albumTotal: collected.length,
      albumDajiCount,
      albumSSCount,
      albumSCount,
      driftList,
      friends
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

  switchTab(e) { this.setData({ tab: e.currentTarget.dataset.tab }) },

  onCopy() {
    const card = this.data.current
    wx.setClipboardData({ data: `我抽到「${card.name || '今日上上签'}」，来比比你今天的手气。` })
  },

  onReset() {
    wx.clearStorageSync()
    this.setData({
      current: {}, hasDrawn: false, axisLeft: 0, freeUsed: 0, collection: [],
      drawButtonText: '抽今日上上签', verifyShown: false
    })
    wx.setStorageSync('drawDate', todayKey())
    this.renderAll()
  }
})
