const express = require("express");
const testRouter = express.Router();
const pool = require("../Config/DatabaseConfig");
const queries = require("../queries");

testRouter.get("/", async (req, res, next) => {
    console.log("Test Route hit");
    res.send(JSON.stringify("<---Server is working--->"));
});

testRouter.get("/dbTest", async (req, res, next) => {
    try {
        const data = await pool.query(queries.testDatabaseQueries.getAllPersons);
        // console.log(data)
        return res.send(data.rows);
    } catch (error) {
        
    }
})

module.exports = testRouter;
