let a = 10;
let b = 0;
let c = 5; // ✅ define c so it doesn't cause ReferenceError
let arr = [];

arr.push(a, b);

console.log(arr); // [10, 0]

try {
    arr.push(a, b, c); // now this works
    console.log(arr);  // [10, 0, 10, 0, 5]
    throw new Error("hello how are you"); // ✅ this will now be thrown
} catch (err) {
    console.log(err.message); // ✅ prints: hello how are you
    arr.push(a, b);
    console.log(arr);
} finally {
    console.log("Process is Over");
}