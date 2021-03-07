# Restaurant Search--Version2

## 目錄--Summary

* [專案概述--Project Description](#1)
* [開發工具與環境--Prerequisites](#2)
* [測試用資料--Testing Data](#3)
* [專案畫面--Running the tests](#4)
* [使用者故事--User Story](#5)
* [專案安裝流程--Installing](#6)
* [專案開發人員--Contributor](#7)


<h2 id="1"> 專案概述--Project Description</h2>

>--ver2-- 
>
>使用者可點擊Home回到首頁，在搜尋框輸入餐廳名稱或餐廳分類進行餐廳搜尋，點擊餐廳卡片會顯示該餐廳詳細資訊；點擊Add Restaurant可跳轉至新增餐廳頁面新增新的餐廳至清單

>--ver1--
>
>使用者可在搜尋框輸入餐廳名稱或餐廳分類進行餐廳搜尋，點擊餐廳卡片會顯示該餐廳詳細資訊

<h2 id="2"> 開發工具與環境--Prerequisites</h2>

1. Windows 10
2. [VSCode](https://code.visualstudio.com/download)
3. [Git](https://git-scm.com/)
4. [Fork](https://git-fork.com//)
5. [nvm](https://github.com/coreybutler/nvm-windows/releases) ([nvm安裝教學](https://www.onejar99.com/nvm-install-for-windows/))
6. Node.js (LTS 10.15.0)([安裝教學](https://www.onejar99.com/nvm-install-for-windows/))
7. Express 
8. Sass/SCSS([安裝與基本語法教學](https://tw.alphacamp.co/blog/css-preprocessor-sass-scss))
9. JavaScript
10. [Bootstrap (v4.5)](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

<h2 id="3"> 測試用資料--Testing Data</h2>
可參考下表或自行新增

| Option         | Description                                                                                                                                                                                                                                    |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 餐廳中文名     | RW Coffee                                                                                                                                                                                                                                      |
| 餐廳英文名     | RW Coffee                                                                                                                                                                                                                                      |
| 餐廳類別       | 咖啡                                                                                                                                                                                                                                           |
| 餐廳照片       | https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/69403679_2104842216485258_2508966920473018368_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=84YQDSPWt6MAX-LHNm3&_nc_ht=scontent.ftpe7-4.fna&oh=62c90e53486eace412de4d448b07907a&oe=6069637E |
| 餐廳地址       | 台南市東區東興路4號                                                                                                                                                                                                                            |
| 餐廳電話       | 06 235 9600                                                                                                                                                                                                                                    |
| 餐廳Google Map | https://g.page/RWcoffee?share                                                                                                                                                                                                                  |
| 餐廳評分       | 4.9                                                                                                                                                                                                                                            |
| 餐廳簡介       | 自家烘培的豆子，帶給你口味多樣的各式咖啡，也有其他飲品喔～歡迎大家前來品嚐。                                                                                                                                                                       |


<h2 id="4"> 專案畫面--Running the tests</h2>

### 首頁
![homePage](/public/img/homePage.png)

### 搜尋畫面
![searchPage](/public/img/searchPage.png)

### 詳細資料畫面
![showPage](/public/img/showPage.png)

### 新增餐廳畫面
![addPage](/public/img/addPage.png)

<h2 id="5"> 使用者故事--User Story</h2>

1. 使用者可以在搜尋框輸入餐廳中、英關鍵字進行搜尋
2. 使用者可以在搜尋框輸入餐廳類別關鍵字進行搜尋
3. 使用者可以瀏覽全部餐廳
4. 使用者可以點擊某一餐廳卡片查看該餐廳詳細資訊
5. 使用者可以點擊箭頭符號跳轉至Google Map
6. 使用者可以新增新的餐廳至餐廳清單
7. 使用者可以在新增餐廳時，在有欄位未填寫時，無法送出資料

<h2 id="6">專案安裝流程--Installing</h2>

>1. 打開終端機(Git Bash or Terminal)，進入您要clone此專案的目錄底下(EX：D槽)
>```
>$ cd d:
>```

>2. Clone 此專案至該目錄底下
>```
>$  git clone https://github.com/>HungXingYu/07.Restaurant_Search.git
>```

>3. 進入此專案資料夾
>```
>$ cd 07.Restaurant_Search
>```

>4. 安裝npm套件
>```
>$  npm install
>```

>5. 啟動伺服器並執行app.js
>```
>$ nodemon app.js
>```
>當終端機最後出現以下內容，及代表伺服器成功啟動
>```
>Express app listening on port 3000.
>```

>6. 開啟任一瀏覽器，輸入 http://localhost:3000 即可開始使用此專案

<h2 id="7">專案開發人員--Contributor</h2>

> ### Clarehung 、ALPHAcamp學期2-3課程教案