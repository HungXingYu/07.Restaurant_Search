const { body, validationResult } = require('express-validator')

function validateRule( ) {
  return [
      body('name').trim().isLength({ min: 1 }).withMessage('中文名不得僅輸入空白!'),
      body('name_en').trim().isLength({ min: 1 }).withMessage('英文名不得僅輸入空白!'),
      body('category').trim().isLength({ min: 1 }).withMessage('類別不得僅輸入空白!'),
      body('image').trim().isLength({ min: 1 }).withMessage('圖片不得僅輸入空白!'),
      body('image').trim().isURL().withMessage('圖片必須輸入符合網址格式的網址!'),
      body('location').trim().isLength({ min: 1 }).withMessage('地址不得僅輸入空白!'),
      body('phone').trim().isLength({ min: 1 }).withMessage('電話不得僅輸入空白!'),
      body('google_map').trim().isLength({ min: 1 }).withMessage('Google Map不得僅輸入空白!'),
      body('google_map').trim().isURL().withMessage('Google Map必須輸入符合網址格式的網址!'),
      body('rating').trim().isLength({ min: 1 }).withMessage('評分不得僅輸入空白!'),
      body('description').trim().isLength({ min: 1 }).withMessage('簡介不得僅輸入空白!'),
  ]
}

function validate  (req, res, next) {
    const newRestaurant = req.body
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      const errorMessages = errors.array()
      return res.render('add', {errorMessages, newRestaurant})
    }

    next()
}

module.exports = {
  validateRule,
  validate,
}