const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
eventEmitter.on('errorEvent', (err) => {
    console.error('An error occurred:', err.message);
});

eventEmitter.emit('errorEvent', new Error('Something went wrong!'));    
// Simulating an error event
function simulateError() {
    try {   
        // Simulating an operation that may throw an error
        throw new Error('Simulated operation failed.');
    } catch (err) {
        eventEmitter.emit('errorEvent', err);
    }
}

function performTask() {
    try {
        // Simulating a task that may throw an error
        throw new Error('Task failed due to unexpected issue.');
    } catch (err) {
        eventEmitter.emit('errorEvent', err);
    }
}

// Simulate tasks
performTask();
simulateError();