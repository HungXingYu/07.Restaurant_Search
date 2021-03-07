// let newRestaurant = {  
//       "id": 9,
//       "name": "RW Coffee",
//       "name_en": "RW Coffee",
//       "category": "咖啡",
//       "image": "https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.0-9/69403679_2104842216485258_2508966920473018368_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=84YQDSPWt6MAX-LHNm3&_nc_ht=scontent.ftpe7-4.fna&oh=62c90e53486eace412de4d448b07907a&oe=6069637E",
//       "location": "台南市東區東興路4號",
//       "phone": "06 235 9600",
//       "google_map": "https://g.page/RWcoffee?share",
//       "rating": 4.9,
//       "description": "自家烘培的豆子，帶給你口味多樣的各式咖啡，也有其他飲品喔～歡迎大家前來品嚐。"
    
// }

function insertRestaurantJson(fs ,newRestaurant){
    fs.readFile('./restaurant.json' , function(err , restaurantJson){
        if(err){
            return console.log(err)
        }

        let restaurants = restaurantJson.toString()
        restaurants = JSON.parse(restaurants)
        restaurants.results.push(newRestaurant)
        restaurants.total = restaurants.results.length

        const str = JSON.stringify(restaurants)
        fs.writeFile('./restaurant.json' , str ,function(err ,){
            if(err){
                console.error(err)
            }
            console.log('Add new restaurant to restaurant.json') 
        })        
    })
}

module.exports = insertRestaurantJson

