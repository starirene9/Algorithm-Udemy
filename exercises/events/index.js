// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.
// basic javascript concept of the library

class Events {
    // Register an event handler

    constructor() {
        this.events = {}; // an empty object
    }

    on(eventName, callback) {
        if (this.events[eventName]) { // [eventName] added as a key
            this.events[eventName].push(callback); // 이미 eventName 이 있는 경우라면 simply push callback
        } else {
            this.events[eventName] = [callback];
        }
    }

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        if (this.events[eventName]) { // exist
            for (let cb of this.events[eventName]) { // iterate through it
                cb(); //cb = callback
            }
        }
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete this.events[eventName];
    }
}

module.exports = Events;
