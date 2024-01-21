#### How to start?
open this project in terminal and run:

```bash
node app.js
```

#### Available meteo endpoints

`http://localhost:3000/places` -> this gives list of places

`http://localhost:3000/places/vilnius/forecasts/long-term` -> this gives forecasts

#### Usage With React

```javascript
fetch("http://localhost:3000/places").then((res) => res.json()).then((data) => setData(data))
```
