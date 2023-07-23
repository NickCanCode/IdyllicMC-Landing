let minecraft;
let minecraftData;
let url = "https://rgghgh.com/minecraft/mcp/api/play.idyllicmc.xyz/"

async function getInfo() {
  let response = await fetch("https://rgghgh.com/minecraft/mcp/api/play.idyllicmc.xyz/");
  let responseData = await response.json();
  console.log(responseData);
}
