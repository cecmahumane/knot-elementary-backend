const Pool = require('pg-pool');
const url = require('url');

let pool;
if (process.env.NODE_ENV ==='development') {
    pool = new Pool({
        database: process.env.DATABASE,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        port: process.env.DBPORT,
    });
    console.log('development config successful')
}

if (process.env.NODE_ENV ==='production') {
    console.log('production db config entered')
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');
    
    const config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };
    pool = new Pool(config);
    console.log('production config successful')
}

// console.log(process.env.DATABASE)

module.exports = pool;