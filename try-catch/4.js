function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero"); // unexpected case
    }
    return a / b; // normal return
}

try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // ❌ throws error
} catch (err) {
    console.log("Error:", err.message); // Error: Cannot divide by zero
}
