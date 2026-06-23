const cards = [
  { id: 'fortune-door', grade: '大吉签', rarity: 'SSR', type: 'good', seal: '旺', name: '财气临门', text: '今天适合把一个正在犹豫的机会推进半步。', do: '主动推进', avoid: '空想暴富', action: '发出一条能推动事情的小消息。', score: 92 },
  { id: 'gold-flow', grade: '上上签', rarity: 'SR', type: 'good', seal: '进', name: '稳步进财', text: '不要追最快的机会，先守住能稳定变好的部分。', do: '整理账目', avoid: '冲动下单', action: '记录今天一笔不必要支出。', score: 86 },
  { id: 'turn-key', grade: '上上签', rarity: 'SR', type: 'good', seal: '转', name: '转机将至', text: '今天的机会藏在一个你平时忽略的小入口里。', do: '换个入口', avoid: '死磕旧路', action: '把卡住的事换一种问法。', score: 82 },
  { id: 'steady', grade: '上签', rarity: 'R', type: 'normal', seal: '稳', name: '稳住', text: '先完成一件可以交付的小事，再评价自己。', do: '拆小步', avoid: '比进度', action: '写下 10 分钟内能完成的一步。', score: 76 },
  { id: 'light-pack', grade: '上签', rarity: 'R', type: 'normal', seal: '轻', name: '轻装', text: '你不需要带着所有担心出门，今天先少拿一件负担。', do: '减一项', avoid: '全都要', action: '删除一个今天不必完成的任务。', score: 71 },
  { id: 'small-block', grade: '平签', rarity: 'N', type: 'low', seal: '阻', name: '小阻', text: '今天慢一点不是坏事，先看清楚哪里不顺。', do: '停三秒', avoid: '硬推进', action: '暂停一次冲动回复。', score: 55 },
  { id: 'fog', grade: '平签', rarity: 'N', type: 'low', seal: '雾', name: '雾中行', text: '你现在看不清全部，但可以先确定脚下这一步。', do: '问清楚', avoid: '脑补结果', action: '写下一个需要确认的问题。', score: 49 },
  { id: 'heavy', grade: '解签', rarity: 'NEG', type: 'negative', seal: '解', name: '心口石', text: '这张牌不需要收藏。它提醒你把今天压住你的东西轻轻放下。', do: '说出口', avoid: '反复咀嚼', action: '输入“我已克服”让它合并消失。', score: 30 }
]

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

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
    albumCards: [],
    albumText: '收集 4 张“开局顺风组”后，会生成一段阶段性自我观察。',
    friends: [],
    verifyShown: false,
    adVisible: false,
    adCopy: '',
    canTurn: false
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
    if (r < .70) return cards[3]
    if (r < .82) return cards[4]
    if (r < .94) return cards[5]
    if (r < .975) return cards[6]
    if (r < .992) return cards[7]
    return cards[8]
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
      const card = cards[2]
      this.setData({
        current: card,
        axisLeft: this.luckPos(card),
        cardClass: '',
        canTurn: false
      })
      wx.showToast({ title: '已获得转机卡', icon: 'none' })
    })
  },

  onBonus() {
    this.showMockAd('看完这段短广告后，解锁一张补充签，用来补充今天的角度。', () => {
      const card = cards[1]
      this.setData({
        current: card,
        axisLeft: this.luckPos(card),
        cardClass: '',
        canTurn: false
      })
      wx.showToast({ title: '补充签已解锁', icon: 'none' })
    })
  },

  onDissolve() {
    const card = cards[3]
    this.setData({
      current: card,
      axisLeft: this.luckPos(card),
      cardClass: '',
      canTurn: false
    })
    wx.showToast({ title: '负面牌已合并消失', icon: 'none' })
  },

  onShareCard() {
    wx.showToast({ title: '已生成比手气卡', icon: 'none' })
  },

  renderAll() {
    const left = Math.max(0, 3 - this.data.freeUsed)
    const collection = this.data.collection || []
    const albumCards = cards.filter(c => c.type !== 'negative').map(c => ({
      ...c,
      owned: collection.includes(c.id)
    }))
    const cur = this.data.current.id ? this.data.current : cards[0]
    const friends = [
      { name: '你', card: cur.name, rarity: cur.rarity, score: cur.score },
      { name: '阿泽', card: '稳步进财', rarity: 'SR', score: 86 },
      { name: '小林', card: '回神', rarity: 'R', score: 73 },
      { name: 'Momo', card: '轻装', rarity: 'R', score: 69 }
    ].sort((a, b) => b.score - a.score)
    this.setData({
      quotaText: left > 0 ? `今日免费签 ${left} / 3` : '今日免费签已用完 · 额外抽签需看广告',
      albumCards,
      friends,
      albumText: collection.length >= 4 ? '你最近抽到的牌多集中在“推进、稳住、转机”，这一阶段更适合把已经开始的事做完。' : '收集 4 张“开局顺风组”后，会生成一段阶段性自我观察。'
    })
  },

  switchTab(e) {
    this.setData({ tab: e.currentTarget.dataset.tab })
  },

  onCopy() {
    const card = this.data.current
    wx.setClipboardData({
      data: `我抽到「${card.name || '今日上上签'}」，来比比你今天的手气。`
    })
  },

  onReset() {
    wx.clearStorageSync()
    this.setData({
      current: {},
      hasDrawn: false,
      axisLeft: 0,
      freeUsed: 0,
      collection: [],
      drawButtonText: '抽今日上上签',
      verifyShown: false
    })
    wx.setStorageSync('drawDate', todayKey())
    this.renderAll()
  }
})
