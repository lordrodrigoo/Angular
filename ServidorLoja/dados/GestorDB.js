const mongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;

mongoClient.connect("mongodb://127.0.0.1")
 .then(conn => global.conn = conn.db("loja"))
 .catch(err => console.log(err))
 
function findAll() {
 return global.conn.collection("produtos").find().toArray();
}
function findOne(chave) {
 return global.conn.collection("produtos")
 .findOne({_id: ObjectId(chave)});
}
function insert(produto) {
 return global.conn.collection("produtos")
 .insertOne(produto);
}
function deleteOne(chave) {
 return global.conn.collection("produtos")
 .deleteOne({_id: ObjectId(chave)});
}

function createUser(usuario) {
    return global.conn.collection("usuarios").findOne({login, senha});
}

function findUser(login, senha) {
    return global.conn.collection("usuarios").findOne({login, senha})
}

module.exports = { findAll, insert, deleteOne, findOne, createUser, findUser }  
