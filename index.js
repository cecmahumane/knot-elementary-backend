require('dotenv').config({path:"./.env"});

const app = require("./src/api");

const PORT = process.env.PORT || 4000;

const devState = process.env.NODE_ENV;




console.log(devState);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})