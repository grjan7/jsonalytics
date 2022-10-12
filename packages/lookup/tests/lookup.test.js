'use strict';

const $lookUp = require('../index');

(function () {

  console.log(`\nCase 1: Fetch all comments for the movies from comments collection.\n\n`);

  const movies = require('./collections/movies.json');
  const comments = require('./collections/comments.json');

  const opts = {
    sourceArray: movies,
    targetArray: comments,
    sourceField: "id",
    targetField: "movieId",
    fetchFields: ["comment", "channel"],
    resultFieldName: "comments"
  }

  console.log($lookUp(opts));

})();

(function () {

  console.log(`\nCase 2: Fetch all ordered items by the customers from orders collection.\n\n`);

  const customers = require('./collections/customers.json');
  const orders = require('./collections/orders.json');

  const opts = {
    sourceArray: customers,
    targetArray: orders,
    sourceField: "id",
    targetField: "customerId",
    fetchFields: "items",
    resultFieldName: "orders"
  }

  console.log($lookUp(opts));

})();