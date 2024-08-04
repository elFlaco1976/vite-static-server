console.log("main.js");

console.log(import.meta.env);

if (import.meta.env.MODE === "development") {
  console.log("Development mode");
}
