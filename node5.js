// Chapter 5 – Events & EventEmitter Example

const EventEmitter = require("events");
const emitter = new EventEmitter();

// 1. Simple Listener
emitter.on("hello", () => {
    console.log("Hello Event Triggered!");
});

// Emit the event
emitter.emit("hello");


// 2. Sending Data with Events
emitter.on("userLogged", (username) => {
    console.log(`${username} has logged in`);
});

emitter.emit("userLogged", "Mounika");


// 3. Multiple Listeners
emitter.on("start", () => console.log("Start listener 1"));
emitter.on("start", () => console.log("Start listener 2"));

emitter.emit("start");


// 4. Using once()
emitter.once("load", () => {
    console.log("Loaded only once!");
});

emitter.emit("load");
emitter.emit("load"); // This will not trigger again
