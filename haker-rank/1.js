let c = [0, 0, 1, 0]; // clouds
let k = 2; // jump step
let i = 0; // starting index

for (let step = 1; step <= 6; step++) {
    i = (i + k) % c.length;
    console.log(`Step ${step}: Jumped to index ${i}`);
}
