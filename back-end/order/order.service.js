const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
    getByUsername
};

async function getAll() {
    return await db.Order.findAll();
}

async function getByUsername(username){
    return db.Order.findAll({ where: { username: username } })
}

async function getById(id) {
    return await getOrderItem(id);
}

async function create(params) {
    // save order item
    await db.Order.create(params);
}

async function update(id, params) {
    const menuItem = await getMenuItem(id);

    // validate
    const menuItemChange = params.username && user.username !== params.username;
    if (menuItemChange && await db.Order.findOne({ where: { username: params.username } })) {
        throw 'Item name "' + params.itemname + '" already exists';
    }

    // copy params to user and save
    Object.assign(menuItem, params);
    await menuItem.save();

    return menuItem;
}

async function _delete(id) {
    const menuItem = await getMenuItem(id);
    await menuItem.destroy();
}

// helper functions

async function getOrderItem(id) {
    const menuItem = await db.Order.findByPk(id);
    if (!menuItem) throw 'order item not found';
    return menuItem;
}

