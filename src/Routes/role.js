const express = require("express");
const roleRouter = express.Router();
const pool = require("../Config/DatabaseConfig");
const queries = require("../queries");

roleRouter.get("/", async (req, res, next) => {
    console.log("Route hit");
    try {
        const data = await pool.query(queries.roleDatabaseQueries.getPersonRole, [req.body.email]);
        // console.log(data)
        return res.send(data.rows);
    } catch (error) {
        
    }
    res.send(JSON.stringify("<---Server is working--->"));
});

module.exports = roleRouter;