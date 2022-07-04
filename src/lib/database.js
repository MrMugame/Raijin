import Database from 'better-sqlite3';

const db = new Database(':memory:');
db.exec("CREATE TABLE IF NOT EXISTS weather(time INTEGER NOT NULL PRIMARY KEY, temp REAL NOT NULL, hum REAL NOT NULL, pres REAL NOT NULL)");

export default db