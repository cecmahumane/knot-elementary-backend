const express = require("express");
const roleRouter = express.Router();
const pool = require("../Config/DatabaseConfig");
const queries = require("../queries");

roleRouter.get("/", async (req, res, next) => {
    console.log("Role Route hit");
    try {
        const data = await pool.query(queries.roleDatabaseQueries.getPersonRole);
        // console.log(data)
        res.send(data.rows);
    } catch (error) {
        
    }
});

module.exports = roleRouter;