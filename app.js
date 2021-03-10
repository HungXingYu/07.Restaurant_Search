//#region  require packages used in the project  
//#region 1. Express相關套件
/**Include express and express-handlebars */
const express = require('express')
const exphbs = require('express-handlebars')
const { body , validationResult  } = require('express-validator')
/**Define server related variables */
const app = express()
const port = 3000
//#endregion

//#region  2. 其他需要工具
/**Include  body-parser */
const bodyParser = require('body-parser')
/** node.js 的檔案系統，能夠幫助存取、讀取檔案*/
const fs = require('fs')
/**Include Restaurant.json */
const restaurantList = require('./restaurant.json')
/**Include insert_restaurant.js */
const insertRestaurantJson = require('./insert_restaurant_json.js')
//#endregion
//#endregion

//#region  app Setting
/**Setting template engine*/
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
/**Setting static files*/
app.use(express.static('public'))
/** Setting  body-parser*/
app.use(bodyParser.urlencoded({ extended: true }))
//#endregion

//#region  Setting routes
/**Index 頁面資料取得與渲染 */
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})
/**Show 頁面資料取得與渲染 */
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)

  res.render('show', { restaurant })
})
/**Search 資料取得與渲染*/
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  let restaurants
  const searchResult = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase()))
  searchResult.length !== 0
    ? restaurants = searchResult
    : restaurants = restaurantList.results.filter(restaurant => restaurant.category.toLowerCase().includes(keyword.toLowerCase()))

  res.render('index', { restaurants, keyword })
})
/**Add 頁面資料取得與渲染 */
app.get('/add', (req, res) => {
  res.render('add')
})
/**Post 資料取得與渲染 */
// app.post('/add', (req, res) => {
//   const newRestaurant = req.body
//   const checkEmpty = Object.values(newRestaurant).some(function(item , index , array){
//     return item.trim().length === 0
//   })
  
//   if(checkEmpty){
//     console.log('餐廳資料不得輸入空白，請重新輸入')
//   }
//   else
//   {
//     const id = parseInt(restaurantList.total) + 1
//     newRestaurant.id = id
//     restaurantList.results.push(newRestaurant)
//     insertRestaurantJson(fs, newRestaurant)
//     res.redirect('/')    
//   }
// })
/**Post 資料取得與渲染 */
app.post('/add' , [body('name').trim().isLength({ min: 1 }).withMessage('中文名不得僅輸入空白!'),
                             body('name_en').trim().isLength({ min: 1 }).withMessage('英文名不得僅輸入空白!'),
                             body('category').trim().isLength({ min: 1 }).withMessage('類別不得僅輸入空白!'),
                             body('image').trim().isLength({ min: 1 }).withMessage('圖片不得僅輸入空白!'),
                             body('image').trim().isURL().withMessage('圖片必須輸入符合網址格式的網址!'),
                             body('location').trim().isLength({ min: 1 }).withMessage('地址不得僅輸入空白!'),
                             body('phone').trim().isLength({ min: 1 }).withMessage('電話不得僅輸入空白!'),
                             body('google_map').trim().isLength({ min: 1 }).withMessage('Google Map不得僅輸入空白!'),
                             body('google_map').trim().isURL().withMessage('Google Map必須輸入符合網址格式的網址!'),
                             body('rating').trim().isLength({ min: 1 }).withMessage('評分不得僅輸入空白!'),
                             body('description').trim().isLength({ min: 1 }).withMessage('簡介不得僅輸入空白!'),],(req,res)=>{ 
    const newRestaurant = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array()
      return res.render('add', {errorMessages, newRestaurant})
    }
    const id = parseInt(restaurantList.total) + 1
    newRestaurant.id = id
    restaurantList.results.push(newRestaurant)
    insertRestaurantJson(fs, newRestaurant)
    res.redirect('/') 
})
//#endregion

//#region  Starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
//#endregion

