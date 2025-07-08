# 🪨📄✂️ Rock Paper Scissors Game

一個使用 React 和 Firebase 建立的現代化猜拳遊戲。

## ✨ 功能特點

- 🎮 **互動式遊戲體驗** - 美觀的 UI 設計和流暢的動畫效果
- 📊 **即時計分系統** - 追蹤勝負記錄和統計數據
- 🔥 **雲端資料同步** - 使用 Firebase 儲存遊戲歷史
- 📱 **響應式設計** - 支援桌面和行動裝置
- 🏆 **成就系統** - 根據勝率顯示不同等級
- 📈 **遊戲歷史** - 查看過往遊戲記錄和統計
- 🎯 **篩選功能** - 依結果類型篩選遊戲歷史
- 💾 **離線支援** - 網路中斷時仍可正常遊戲

## 🚀 技術棧

- **前端**: React 19.1.0 + Vite
- **資料庫**: Firebase Firestore
- **樣式**: CSS3 + CSS Grid + Flexbox
- **部署**: GitHub Pages (即將推送)

## 🎯 遊戲規則

- 🪨 石頭 勝 ✂️ 剪刀
- 📄 布 勝 🪨 石頭  
- ✂️ 剪刀 勝 📄 布
- 相同選擇為平手

## 🏅 成就等級

- 🌱 **新手** (勝率 < 40%)
- 👌 **普通** (勝率 40-49%)
- 👍 **良好** (勝率 50-59%)
- ⭐ **專家** (勝率 60-69%)
- 🏆 **傳奇** (勝率 ≥ 70%)

## 🛠️ 本地開發

### 環境需求

- Node.js 16.0+
- npm 或 yarn

### 安裝與執行

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
```

### Firebase 設定

1. 建立 Firebase 專案
2. 啟用 Firestore Database
3. 複製 Firebase 配置到 `src/config/firebase.js`
4. 設定 Firestore 安全規則

## 📱 功能截圖

### 主遊戲畫面
- 玩家選擇區域
- 電腦選擇顯示
- 即時計分板
- 遊戲結果動畫

### 遊戲歷史
- 完整遊戲記錄
- 結果篩選
- 統計數據
- 時間戳記

## 🔧 專案結構

```
src/
├── components/          # React 組件
│   ├── Game.jsx        # 主遊戲組件
│   ├── GameBoard.jsx   # 遊戲板
│   ├── ScoreBoard.jsx  # 計分板
│   ├── GameHistory.jsx # 遊戲歷史
│   └── VersionIndicator.jsx # 版本顯示
├── config/             # 配置檔案
│   └── firebase.js     # Firebase 設定
├── services/           # 服務層
│   └── firebaseService.js # Firebase 操作
├── utils/              # 工具函數
│   └── gameLogic.js    # 遊戲邏輯
└── App.jsx            # 應用程式入口
```

## 🎨 設計特色

- **漸層背景** - 現代化視覺效果
- **毛玻璃效果** - backdrop-filter 實現半透明效果
- **微互動** - 按鈕懸停和點擊動畫
- **響應式佈局** - 適配各種螢幕尺寸
- **emoji 圖示** - 友善的視覺語言

## 📊 Firebase 資料結構

```javascript
gameHistory: {
  playerName: string,
  playerChoice: string,
  computerChoice: string,
  result: string,
  score: {
    player: number,
    computer: number,
    draws: number
  },
  timestamp: Date,
  version: string
}
```

## 🚀 部署

專案使用 GitHub Actions 自動部署到 GitHub Pages。

每次推送到 main 分支時會自動：
1. 建構專案
2. 部署到 gh-pages 分支
3. 更新線上版本

## 📝 更新日誌

### v1.0.0 (2025-07-08)
- ✨ 初始版本發布
- 🎮 基本猜拳遊戲功能
- 📊 計分和統計系統
- 💾 Firebase 資料同步
- 📱 響應式設計
- 🏆 成就系統

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License

## 👨‍💻 開發者

Yanchen - [GitHub](https://github.com/yanchen184)

---

🎮 **開始遊戲，挑戰你的運氣和策略！**