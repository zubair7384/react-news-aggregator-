module.exports = {
  env: {
    production: true, // Add this line
  },
  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? "warn" : "error",
  },
  ignorePatterns: ["**/build/*"],
};
