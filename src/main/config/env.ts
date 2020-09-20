export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/zenvia-hack',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'TDYshdg234348==sj213j',
  zenviaToken: process.env.ZENVIA_API_TOKEN || 'YDMMMIyuJQadnunKcQ7Ol8AXz9G_ZsN_tpXY'
}