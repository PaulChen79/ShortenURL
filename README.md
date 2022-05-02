# 縮短網址網頁APP

這是一個使用express與Node.js打造的縮短網頁，可以取得縮短後的網址，用縮短後的網址可以瀏覽原網頁


### Installing 安裝流程

先將此專案Clone到主機的資料夾

```
git clone https://github.com/PaulChen79/ShortenURL.git
```

在下載的資料夾底下安裝dependencies

```
npm install
```

下載完成後執行add.js檔案

```
npm run dev
```

如果ternimal有出現 "Server is running on port: 3000" 字樣，即可在 http://localhost:3000 看到此網頁



## Features 功能

-首頁可以輸入想要縮短的網址  

![image](https://github.com/PaulChen79/Restaurant-list/blob/e5fa34f3d38c167711e57d970740fe5cd39fab57/public/screenshot/home.png)  
  

-若URL格式錯誤會有錯誤提示訊息  
  
![image](https://github.com/PaulChen79/Restaurant-list/blob/656a4482766816c57581db8d0ee82fdb3f7cd327/public/screenshot/wrong.png)  
  

-若輸入空白URL也會有錯誤提示訊息  

![image](https://github.com/PaulChen79/Restaurant-list/blob/48a9875d8668ba22ebf9532ee7f8fa8e636e78d5/public/screenshot/empty.png)  
  

-成功縮短網址即可按下copy複製已縮短後的網址  
  
![image](https://github.com/PaulChen79/Restaurant-list/blob/929f8321e73586225d12fd8ef1d426be274ffdaa/public/screenshot/localhost_3000_%20(4).png)  


## Dependencies 使用套件

Node.js v4.16.0  
express  
express-handlebars  
express-session  
connect-flash  
dotenv  
method-override  
mongoose  
modemon  
valid-url


## Contributor 開發人員

Pin Hsu Chen

