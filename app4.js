console.log("🏁  Program started");

setTimeout(() => {
    console.log("1️⃣  First timeout");
}, 3000);

setTimeout(() => {
    console.log("2️⃣  Second timeout");
}, 1);

setTimeout(() => {
    console.log("3️⃣  Third timeout");
}, 0);

console.log("🔚  Program ended");