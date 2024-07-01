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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_27_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk1LFxuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4LFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICA0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSG54VGhiWFhxWjFESWFyN3dCY0RYV2h6bjc4SE02amJDQkMzNEZnZ3pSST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZGhIblBkSlNRVnllQnotVlRHLW5hd1wiLFxuICBcInBob25lSWRcIjogXCI1MzI2ZGYwOC04Mjg4LTRlN2MtYWVmNi05MzNhYzU4ZTA3NjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA4MSxcbiAgICAgIDQ5LFxuICAgICAgMTM0LFxuICAgICAgMTAwLFxuICAgICAgMjIwLFxuICAgICAgMjExLFxuICAgICAgNjcsXG4gICAgICA2MCxcbiAgICAgIDE4OCxcbiAgICAgIDEyNixcbiAgICAgIDI2LFxuICAgICAgOTQsXG4gICAgICAxNDAsXG4gICAgICAzNCxcbiAgICAgIDkwLFxuICAgICAgMTc4LFxuICAgICAgMjMzLFxuICAgICAgMjM1LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOCxcbiAgICAgIDE1OCxcbiAgICAgIDE4OCxcbiAgICAgIDE5MyxcbiAgICAgIDI0MCxcbiAgICAgIDIsXG4gICAgICAxMTksXG4gICAgICAxMzMsXG4gICAgICAyMDQsXG4gICAgICAxNTMsXG4gICAgICA2MixcbiAgICAgIDIwLFxuICAgICAgMjI5LFxuICAgICAgMTgwLFxuICAgICAgNTIsXG4gICAgICAyMDIsXG4gICAgICAxNixcbiAgICAgIDEyMixcbiAgICAgIDI0NCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFGWEZGMldOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTcyODgzNjA6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJjYXJvbFwiLFxuICAgIFwibGlkXCI6IFwiMTY3OTM3OTM1NzIwNDgxOjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ003Wjc0b0RFSW1KaXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVVE1OUdXWW9UWWRQeWczQk1tVmJKZ00zMzdJVHJOTW5KQkJZV2lMRG8yMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXYi9VNzA0MC9NU05OdUhCSFF6UnNqRnNIRHBCL3lPREhjMGRPZ0drbzVLSUhGaVVWdGR5UXd5dEdYN3Z5RkFyR3paMHFFRVQ1VjRmOFVPZmVOQXNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFaGtxcWFucm5KYk5DSU1DNnVKZkhCODhVaHV2YmVVcEZhS1RqZjlGOCt4Uk4vRVZaQ05XTXNBdThpVWk4U3RocFZqd0JPYnBtNVpoV25jME4wQ05pUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTcyODgzNjA6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODI5NjQ3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
