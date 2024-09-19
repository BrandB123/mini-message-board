const pool = require("./pool");

async function getAllMessages(){
    const { rows } = await pool.query("Select * FROM messages");
    return rows;
}

async function insertMessage(name, message, timestamp) {
    await pool.query(`INSERT INTO messages (name, message, timestamp) 
                      VALUES ($1, $2, $3)`, [name, message, timestamp]);
}

module.exports = {
    getAllMessages,
    insertMessage
};