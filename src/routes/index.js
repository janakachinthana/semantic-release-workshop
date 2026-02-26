'use strict';

const express = require('express');
const pkg = require('../../package.json');

const router = express.Router();

/**
 * GET /
 * Home route - returns API info and available endpoints
 */
router.get('/', (req, res) => {
  res.json({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    endpoints: {
      'GET /': 'API information',
      'GET /health': 'Health check',
      'GET /users': 'List all users',
      'GET /users/:id': 'Get user by ID',
      'POST /users': 'Create a new user',
      'PUT /users/:id': 'Update a user',
      'DELETE /users/:id': 'Delete a user',
    },
  });
});

/**
 * GET /health
 * Health check endpoint
 */
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.get('/test', (req, res) => {
  res.json({ status: 'test', timestamp: new Date().toISOString() });
});

module.exports = router;
