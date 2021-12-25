'use strict';

/**
 *  execution controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::execution.execution');
