'use strict';

/**
 * execution service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::execution.execution');
