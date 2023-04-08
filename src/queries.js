

class testDatabaseQueriesClass {
    getAllPersons = "SELECT * FROM person";
}

class roleDatabaseQueriesClass {
    getPersonRole = "SELECT name FROM role INNER JOIN person ON role.id = person.role_id WHERE person.email = $1"
}

const testDatabaseQueries = new testDatabaseQueriesClass();
const roleDatabaseQueries = new roleDatabaseQueriesClass();

module.exports = {
    testDatabaseQueries,
    roleDatabaseQueries
};