require('dotenv').config();
const { db } = require('./database/config');
const app = require('./app');

db.authenticate()
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Database connection failed');
        console.log(err);
    });

db.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((err) => {
        console.log('Database sync failed');
        console.log(err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
