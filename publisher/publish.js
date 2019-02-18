'use strict';

const Publisher = require('./lib/publisher.js');
const Q = new Publisher();

Q.publish('database', 'delete', {});
Q.publish('database', 'create', {id:99,name:'John'});
// Q.publish('database', 'read', {id:99,name:'John'});
// Q.publish('database', 'update', {id:99,name:'John'});


