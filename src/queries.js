

class testDatabaseQueriesClass {
    getAllPersons = "SELECT * FROM person";
}

class roleDatabaseQueriesClass {
    getPersonRole = "SELECT role_id, email, name, person.id FROM role INNER JOIN person ON role.id = person.role_id"
}

const testDatabaseQueries = new testDatabaseQueriesClass();
const roleDatabaseQueries = new roleDatabaseQueriesClass();

module.exports = {
    testDatabaseQueries,
    roleDatabaseQueries
};