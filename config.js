const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_02_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDczLFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMjA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUTzFJbVZZM25sbUNVUG5PWmxaOXVORForSnl5SkRnQWhvTmc5MkxqcnRrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA3MTM0OTA3MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkxMjU4MDdERDJGOEJFODY3NTk4QzA5RUM4NTZEOTM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY2NDE1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA3MTM0OTA3MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA2QzBFRjNFQUE5REM3RTBERTMwRkFFNDUyQzEyMzk4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY2NDE1NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPOHlpVzdwRFN3dXg5WWRTUFBTTUZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiN2ViMzIxLTAxMjktNGYzOS05ZmU3LTMyMDU1Zjg4MmEzM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICA0NixcbiAgICAgIDYyLFxuICAgICAgMTUyLFxuICAgICAgNzQsXG4gICAgICAyMjQsXG4gICAgICA4OCxcbiAgICAgIDk4LFxuICAgICAgMTc0LFxuICAgICAgNTQsXG4gICAgICAxNTYsXG4gICAgICAyMTgsXG4gICAgICAyMjMsXG4gICAgICAyOSxcbiAgICAgIDIyMyxcbiAgICAgIDEwLFxuICAgICAgODksXG4gICAgICAyMjksXG4gICAgICAxMTQsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTE2LFxuICAgICAgMTQyLFxuICAgICAgMjIyLFxuICAgICAgMjI1LFxuICAgICAgNjQsXG4gICAgICAyNTIsXG4gICAgICAyNTQsXG4gICAgICA4MixcbiAgICAgIDI0NixcbiAgICAgIDExNyxcbiAgICAgIDEzOCxcbiAgICAgIDEyNCxcbiAgICAgIDEyMSxcbiAgICAgIDE0MCxcbiAgICAgIDI0MCxcbiAgICAgIDIzNSxcbiAgICAgIDE4NCxcbiAgICAgIDUsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaR1g5VEdISFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDcxMzQ5MDcxMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjU4Njg0ODgxMTgzMTc6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCZXR0eSBPZmZpY2lhbCDwn4e58J+Ht/Cfh67wn4eqXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1hHL29jQkVKT0YrclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhTHlTYThnbGZQUFAxaStSYmZGL2N5cWwrNzVzazVaY2pWRjRFNXBSKzJ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFKTUhYbGJnS0grbnRHVGxZWVNFRlNkMnNldkhubnFtOTNOQXJQV1FsUURNTU1DVmR4WkV1clZ4Wm9RTit6alY3QlZYQURqZWpaQXcwQjlEd1RrM0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJnNW5IU3liMDJlVjRyNTVhMk5JRVdlSnJiUE9lTHJ5aU1VVG9MVDRiRXNvaitrbkRIVzhzZFBPbXRDVTRSUUpINndkY3lDLzNKNzQzK08waVZtOURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA3MTM0OTA3MTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjY0MTUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1lJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHWUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUWjVsYUxkR0o1VVo3RktTTVZBSEVPZzg2cWxJUUkrL05sWVFoQXdTZFJFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4NTE4ODkwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjY0MTUzODI2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
