function greet(name) {
    console.log("Hello, " + name);
}

function processUser(name, callback) {
    console.log("Processing user...");
    callback(name); // call the callback function
}

processUser("Yash", greet);