#  打造餐廳清單
此專案提供使用者瀏覽全部餐廳名稱以及詳細資訊，並可在搜尋欄搜尋相關資訊
##  功能列表

- 可透過名稱搜尋餐廳
- 可透過類別搜尋餐廳
- 可以在首頁看到所有餐廳的卡片資訊
- 點擊卡片可看餐廳的詳細資訊
## 安裝

1.開啟終端機(Terminal) cd 到存放專案本機位置執行:

```
git clone https://github.com/bowbow19/restaurant.git
```

2.初始環境設定

```
npm  install express  //安裝npm套件
``` 
3.安裝nodemon，使伺服器持續監聽並改變畫面
```
npm  install -g nodemon  //如已安裝過可省略
```

4.啟動伺服器
```
nodemon app.js
```

5.若terminal顯示此訊息，表示已成功啟動
```
Express is listening in localhost:3000
```
6.在瀏覽器輸入以下網址，即可看到畫面
```
http://localhost:3000
```
