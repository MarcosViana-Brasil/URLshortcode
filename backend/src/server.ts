import app from './app'

import database from './database'

database.sync()
console.log('Database running at 3306 🏆')


app.listen(3001)

console.log('Server running ar 3001')
