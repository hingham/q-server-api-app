'use strict';

const Q = require('./lib/subscriber.js');

const db = new Q('database');
const network = new Q('network');

db.subscribe('delete', (payload, count, pings) => {
  console.log('delete happened', payload, pings);
});

db.subscribe('create', (payload, count, pings) => {
  console.log('create happened', payload, pings);
});


db.subscribe('read', (payload, count, pings) => {
  console.log('read happened', payload, pings);
});


db.subscribe('update', (payload, count, pings) => {
  console.log('update happened', payload, pings);
});


console.log(db.subscriptions());
