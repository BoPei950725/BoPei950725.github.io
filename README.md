# 復古 Macintosh 風格履歷網頁 (Retro Mac-Style Resume)

這是一個使用純 HTML 和 CSS 打造的個人履歷網頁，其視覺靈感來自 1990 年代的 Macintosh Classic (System 7) 復古作業系統介面。

---

## 🚀 功能特色

* **復古桌面介面：** 模擬經典 Mac OS 的視窗、頂部選單列 (Menu Bar) 和底部的 Dock。
* **可互動的視窗：**
    * 使用純 CSS 的 "Checkbox Hack" 技巧，無需 JavaScript 即可實現點擊 Dock 圖示來開啟/關閉對應的視窗。
    * 視窗標題列的關閉按鈕同樣綁定 Checkbox，可關閉視窗。
* **RWD 響應式設計：** 專案包含三種主要的版面佈局：
    1.  **大螢幕 (Desktop > 1512px)：** 完整的桌面體驗。使用 `position: absolute` 定位所有視窗，並透過一個 `1512px` 寬的容器 (`.desktop-area`) 將整體版面在 2K/4K 大螢幕上置中。
    2.  **直向手機 (Portrait)：** 介面轉換為單欄、全寬的垂直列表。使用 CSS Flexbox 的 `order` 屬性重新排列內容順序，確保閱讀邏輯通順（例如將「聯絡我」和「版權」移至最下方）。
    3.  **橫向平板/手機 (Landscape)：** 採用 CSS Grid 重新排版。將內容分為兩欄式佈局，並將「專案經歷」等項目設為全寬，以達到最佳的閱讀體驗。

---

## 🛠️ 使用技術

這個專案**完全**只使用了 `HTML5` 和 `CSS3`，沒有使用任何 JavaScript。

### HTML5

* **語意化標籤 (Semantic HTML)：**
    * 根據老師的作業要求，使用 `<header>` (頂部選單列), `<nav>` (底部 Dock), `<section>` (個人資訊), `<article>` (專案經歷), `<aside>` (程式能力), 和 `<footer>` (版權) 來建構頁面。
* **Checkbox Hack：**
    * 利用 `<input type="checkbox" class="hidden-toggle">` 搭配 `<label>` (Dock 上的圖示) 和 CSS 的「一般兄弟層選擇器 (`~`)」來控制 `.mac-window` 的 `opacity` 和 `transform` 屬性，實現視窗的開關動畫。

### CSS3

* **版面佈局 (Layout)：**
    * `position: absolute`: 用於建構核心的桌面版面，允許視窗自由拖曳（未來可擴充）和重疊。
    * `CSS Flexbox`: 用於「直向手機」版面 (`orientation: portrait`)，透過 `flex-direction: column` 和 `order` 屬性來控制內容的垂直排列順序。
    * `CSS Grid`: 用於「橫向平板」版面 (`orientation: landscape`)，建立 `grid-template-columns: 2fr 1fr;` 的兩欄式佈局，並透過 `grid-column: 1 / 3;` 讓特定項目（如專案經歷）橫跨全寬。
* **響應式設計 (RWD)：**
    * `@media (max-width: ...)`: 偵測裝置寬度。
    * `@media (orientation: ...)`: 偵測裝置是「直向」(portrait) 還是「橫向」(landscape)，並根據不同方向套用完全不同的版面邏輯。
* **視覺風格：**
    * `Google Fonts`: 引入 `DotGothic16` 像素字體，營造整體的復古顆粒感。
    * `background-image: repeating-linear-gradient(...)`: 用於製作背景的 2px 仿 Dither 抖動圖樣。
    * `box-shadow`: 製作視窗和 Dock 的 3D 陰影效果。
    * `image-rendering: pixelated;`: 確保所有圖片（未來如果使用）在放大時保持像素風格，而不是變得模糊。

---

## ⚙️ 如何使用

1.  Clone (下載) 本專案。
2.  直接在任何現代瀏覽器中開啟 `index.html` 檔案即可。
