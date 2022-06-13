const {userModel} = require('../models')
/** 
 * obtener lista de base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await userModel.find({});

res.send({data})

}
/**
* obtener detalle de base de datos!
* @param {*} req 
* @param {*} res 
*/
const getItem = (req, res) => {};
/**
* //crear detalle de base de datos!
* @param {*} req 
* @param {*} res 
*/

const createItems = async (req, res) => {
    const {body} = req
    console.log(body)
    res.send({algo:1})
};
/**
* actualizar detalle de base de datos!
* @param {*} req 
* @param {*} res 
*/
const updateItems = (req, res) => {};
/**
* //borrar detalle de base de datos!
* @param {*} req 
* @param {*} res 
*/
const deleteItems = (req, res) => {};

module.exports = {getItems, getItem, createItems, updateItems, deleteItems };
