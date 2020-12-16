const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const orderService = require('./order.service');
const authorize = require('_middleware/authorize')

// routes
router.post('/add', authorize(), itemSchema, addItem);
router.get('/', authorize(), getAll);
router.get('/:username', authorize(), getByUsername);
router.put('/:id', authorize(), update);
router.delete('/:id', authorize(), _delete);

module.exports = router;



function itemSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        itemIds: Joi.string().required(),
        totalCost: Joi.number().required(),
        isReady: Joi.boolean().default(false)
    });
    validateRequest(req, next, schema);
}

function addItem(req, res, next) {
    orderService.create(req.body)
        .then(() => res.json({ message: 'Order Added' }))
        .catch(next);
}

function getAll(req, res, next) {
    orderService.getAll({order: '"createdAt" DESC' })
        .then(orders => res.json(orders))
        .catch(next);
}

function getById(req, res, next) {
    orderService.getById(req.params.id)
        .then(orderItem => res.json(orderItem))
        .catch(next);
}

function getByUsername(req, res, next) {
    orderService.getByUsername(req.params.username)
        .then(orderItem => res.json(orderItem))
        .catch(next);
}


function update(req, res, next) {
    orderService.update(req.params.id, req.body)
        .then(orderItem => res.json(orderItem))
        .catch(next);
}

function _delete(req, res, next) {
    orderService.delete(req.params.id)
        .then(() => res.json({ message: 'Order deleted successfully' }))
        .catch(next);
}