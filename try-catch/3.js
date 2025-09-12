let age = -5;

try {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    console.log("Age is valid");
} catch (err) {
    console.log("Error:", err.message);
}