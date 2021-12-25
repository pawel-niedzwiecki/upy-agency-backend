'use strict';

/**
 * execution router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::execution.execution');
