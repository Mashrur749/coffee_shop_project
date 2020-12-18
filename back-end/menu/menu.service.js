const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Menu.findAll();
}

async function getById(id) {
    return await getMenuItem(id);
}

async function create(params) {
    // validate
    if (await db.Menu.findOne({ where: { itemname: params.itemname } })) {
        throw 'menu Item "' + params.itemname + '" is already exists';
    }
    // save menu item
    await db.Menu.create(params);
}

async function update(id, params) {
    const menuItem = await getMenuItem(id);

    // validate
    const menuItemChange = params.username && user.username !== params.username;
    if (menuItemChange && await db.Menu.findOne({ where: { itemname: params.itemname } })) {
        throw 'Item name "' + params.itemname + '" is already exists';
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

async function getMenuItem(id) {
    const menuItem = await db.Menu.findByPk(id);
    if (!menuItem) throw 'Menu item not found';
    return menuItem;
}

