// Реализуйте класс EventEmitter

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach((listener) => listener(...args));
        }
    }

    off(event, listener) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter((l) => l !== listener);
    }

    once(event, listener) {
        const wrapper = (...args) => {
            listener(...args);
            this.off(event, wrapper);
        };

        this.on(event, wrapper);
    }
}

const emitter = new EventEmitter();

function responseToEvent(data) {
    console.log(`Event received with data: ${data}`);
}

emitter.on('dataReceived', responseToEvent);
emitter.emit('dataReceived', { id: 1, message: 'Hello, World!' });
emitter.off('dataReceived', responseToEvent);
emitter.emit('dataReceived', { id: 2, message: 'This will not be logged.' });

// Register a one-time event listener
emitter.once('dataReceivedOnce', (data) => {
    console.log(`One-time event received: ${data}`);
});
// Emit the one-time event
emitter.emit('dataReceivedOnce', 'This will be logged once.');
// Emit again (no output, as the listener was removed after the first call)
emitter.emit('dataReceivedOnce', 'This will not be logged.');
