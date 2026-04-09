const { exec } = require("child_process");

console.log("Stopping application...");

// Kill Node processes (backend + frontend)
exec("taskkill /F /IM node.exe", (err) => {
  if (err) {
    console.error("Error stopping processes:", err);
    return;
  }
  console.log("All Node processes stopped.");
});