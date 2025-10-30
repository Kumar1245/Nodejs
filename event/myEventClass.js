const EventEmitter = require('events');

class MyEventClass extends EventEmitter {
    constructor(){
        super();
        this.on('myEvent',(message)=>{
            console.log('myEvent triggered:',message);
        });     
        this.on('multiCallEvent',(data)=>{
            console.log('multiCallEvent listener received data:',data);
        });
        this.once('singleCallEvent',()=>{
            console.log('singleCallEvent triggered only once');
        }); 
    }

    triggerSingleCallEvent(){
        this.emit('singleCallEvent');
    }
    triggerMultiCallEvent(data){
        this.emit('multiCallEvent',data);
    }   
    triggerMyEvent(message){
        this.emit('myEvent', message);
    }
}

class Chat extends EventEmitter {
    sendMessage(message) {
        console.log(`first message is ${message}`);
        this.emit('messageSent', message);
    }
}

const chat = new Chat();
chat.on('messageSent', (message) => {
    console.log(`Message received in chat: ${message}`);
});

// Event Emission
chat.sendMessage('Hello, this is a chat message!');

module.exports = MyEventClass;

        // Event Emission
        chat.sendMessage('Hello, this is a chat message!');

        module.exports = MyEventClass;


