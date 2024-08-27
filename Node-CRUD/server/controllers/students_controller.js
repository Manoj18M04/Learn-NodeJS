const mysql = require("mysql");

// mysql connection string
const con = mysql.createPool({
    connectionLimit  :   20,
    host             :   process.env.DB_HOST,
    user             :   process.env.DB_USER,
    password         :   process.env.DB_PASS,
    database         :   process.env.DB_NAME
});

exports.view = (req, res) => {
    //check database connection
    con.getConnection((err, connection) => {
        if(err) throw err;
        connection.query("SELECT * FROM users", (err, rows) => {
            connection.release();
            if(!err) {
                if(rows[0] == undefined) {
                    res.render("home", {rows, msg : "No records found"});
                }
                else {
                    console.log(rows);
                    res.render("home", {rows});
                }
            }
            else {
                console.log("Error in listing data: " + err);
            }
        });
    });
};

exports.addUser = (req, res) => {
    res.render("addUser");
};

exports.save = (req, res) => {
    con.getConnection((err, connection) => {
        if(err) throw err;
        const {name, age, city} = req.body;
        connection.query("INSERT INTO USERS(name, age, city) VALUES (?, ?, ?)", 
            [name, age, city], (err, rows) => {
            connection.release();
            if(!err) {
                res.render("addUser", {msg: "User details added successfully!"});
            }
            else {
                console.log("Error in listing data: " + err);
            }
        });
    });
};

exports.editUser = (req,res) => {
    con.getConnection((err, connection) => {
        if(err) throw err;
        let id = req.params.id;
        connection.query("SELECT * FROM Users WHERE id = ?", [id], (err, rows) => {
            connection.release();
            if(!err) {
                res.render("editUser", {rows});
            }
            else {
                console.log("Error in listing data: " + err);
            }
        });
    });
};


exports.edit = (req, res) => {
    con.getConnection((err, connection) => {
        if(err) throw err;
        const {name, age, city} = req.body;
        let id = req.params.id;
        connection.query("update users set NAME=?, AGE=?, CITY=? where ID=?",
            [name, age, city, id], (err, rows) => {
            connection.release();
            if(!err) {
                con.getConnection((err, connection) => {
                    if(err) throw err;
                    let id = req.params.id;
                    connection.query("SELECT * FROM Users WHERE id = ?", [id], (err, rows) => {
                        connection.release();
                        if(!err) {
                            res.render("editUser", {rows, msg: "User details updated successfully!"});
                        }
                        else {
                            console.log("Error in listing data: " + err);
                        }
                    });
                });
                
            }
            else {
                console.log("Error in listing data: " + err);
            }
        });
    });
};


exports.delete = (req, res) => {
    con.getConnection((err, connection) => {
        if(err) throw err;
        let id = req.params.id;
        connection.query("delete from USERS where ID=?", [id], (err, rows) => {
            connection.release();
            if(!err) {
                res.redirect("/");
            }
            else{
                console.log("Error: " + err);
            }
        });
    });
};