//#region  require packages used in the project  
//#region 1. Express相關套件
/**Include express and express-handlebars */
const express = require('express')
const exphbs = require('express-handlebars')
/**Define server related variables */
const app = express()
const port = 3000
//#endregion

//#region  2. 其他需要工具
/**Include Restaurant.json */
const restaurantList = require('./restaurant.json')
//#endregion
//#endregion

//#region  app Setting
/**Setting template engine*/
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
/**Setting static files*/
app.use(express.static('public'))
//#endregion

//#region  Setting routes
/**Index 頁面資料取得與渲染 */
app.get('/', (req, res) => {
  res.render('index',{restaurants:restaurantList.results})
})
/**Show 頁面資料取得與渲染 */
app.get('/restaurants/:restaurant_id', (req,res)=>{
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  
  res.render('show' , {restaurant})
})
/**Search 頁面資料取得與渲染*/
app.get('/search' ,(req,res) =>{
  const keyword= req.query.keyword
  let restaurants
  const searchResult = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase())) 
  searchResult.length !== 0 
   ? restaurants = searchResult
   : restaurants = restaurantList.results.filter(restaurant => restaurant.category.toLowerCase().includes(keyword.toLowerCase())) 
  
   res.render('index',{restaurants , keyword})
})
//#endregion

//#region  Starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
//#endregion