const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const menuService = require('./menu.service');

// routes
router.post('/add', itemSchema, addItem);
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;



function itemSchema(req, res, next) {
    const schema = Joi.object({
        itemname: Joi.string().required(),
        category: Joi.string().required(),
        price: Joi.number().required()
    });
    validateRequest(req, next, schema);
}

function addItem(req, res, next) {
    menuService.create(req.body)
        .then(() => res.json({ message: 'Item Added' }))
        .catch(next);
}

function getAll(req, res, next) {
    menuService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next) {
    menuService.getById(req.params.id)
        .then(menuItem => res.json(menuItem))
        .catch(next);
}


function update(req, res, next) {
    menuService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}

function _delete(req, res, next) {
    menuService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}