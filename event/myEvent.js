// My Events Module

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', (message) => {
    console.log('myEvent triggered:', message);
});

const myListener = (data) => {
    console.log('myEvent listener received data:', data);
}               
eventEmitter.once('singleCallEvent', () => {
    console.log('singleCallEvent triggered only once');
});

// Emitting the single callable event
// This event only run only once  but only onece becouse hence we use once method   
eventEmitter.emit('singleCallEvent');
eventEmitter.emit('singleCallEvent'); // This will not trigger the event again
eventEmitter.on('multiCallEvent', myListener);
// Emitting the multiple callable event
eventEmitter.emit('multiCallEvent', 'First call');
eventEmitter.emit('multiCallEvent', 'Second call');

// Emitting the event
eventEmitter.emit('myEvent', 'Hello, this is a custom event!');

eventEmitter.removeListener('multiCallEvent', myListener);
eventEmitter.emit('multiCallEvent', 'This will not be logged.');


