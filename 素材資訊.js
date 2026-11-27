// ===== 素材資訊(顯示在遊戲封面的「素材使用」頁面)=====
// 用記事本打開編輯,存檔時編碼選 UTF-8。只要改引號 ' ' 裡面的文字就好。
// 這個檔案要和 index.html 放在同一層。

// ── 作者資訊與個人連結 ──
// links 每一組是 ['顯示的名字','網址'],想新增、刪掉都可以。
window.JNR_AUTHOR={
  name:'潔諾 Jessroin',
  title:'插畫家・獨立遊戲創作者',
  links:[
    ['個人網站','https://jessroin.github.io/Jessroin-Commission-Website/'],
    ['X (Twitter)','https://x.com/Jessroin'],
    ['Instagram','https://www.instagram.com/jessroin_0709/'],
    ['Facebook','https://www.facebook.com/share/1CB3S7Phgd/']
  ]
};

// ── 音樂與音效來源 ──
// title=曲名/音效名  use=使用範圍  author=作者  site=來源網站名稱  url=網址  license=授權方式
// 沒填的欄位就不會顯示;全部留空的話只會顯示「來源:免費素材網站」。
window.JNR_AUDIO_CREDITS={
  bgm:{title:'美味しい！和食(曲目編號 16623)', use:'營業場景循環背景音樂', author:'', site:'OpenTracks 音樂平台', url:'https://opentracks.com/zh-tw/bgm/detail/16623', license:'依 OpenTracks 音源利用授權使用'},
  ui:{title:'介面提示音', use:'標題與遊戲內所有功能按鈕', author:'卡斯伯(Casper\'s Sidekick)', site:'Casper 音效庫', url:'https://www.casper.tw/sound-effects/zh-tw/', license:'可免費使用、可商用'},
  brass:{title:'黃銅小盤', use:'購買設備升級、配料升級', author:'卡斯伯(Casper\'s Sidekick)', site:'Casper 音效庫', url:'https://www.casper.tw/sound-effects/zh-tw/', license:'可免費使用、可商用'},
  glass:{title:'玻璃圈', use:'下鍋、起鍋、放配料、上菜', author:'卡斯伯(Casper\'s Sidekick)', site:'Casper 音效庫', url:'https://www.casper.tw/sound-effects/zh-tw/', license:'可免費使用、可商用'}
};

// ── AI 生成內容使用的工具 ──
// 例如 'Midjourney'、'Stable Diffusion'、'ComfyUI'。留空就只寫「AI 生成」。
window.JNR_AI_TOOL='Claude';
