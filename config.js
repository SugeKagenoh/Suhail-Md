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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263788252180";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_01_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODUsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzMmtpendYMnhjaU52c1R6TnE3bmR3S3RZdno1aWRrc3lTR012NUVaaHpZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3UVdCbnhWdlMtT0ZNYmdwSERuMFFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3OGVkOTlhLTlmODItNGVkNS1hZmE1LWYwYTYxNmE2MTUyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDE0LFxuICAgICAgMjAyLFxuICAgICAgMTU0LFxuICAgICAgMjQ5LFxuICAgICAgMTEsXG4gICAgICAyNixcbiAgICAgIDI0OSxcbiAgICAgIDE1NCxcbiAgICAgIDExNCxcbiAgICAgIDE2MyxcbiAgICAgIDcxLFxuICAgICAgMjE4LFxuICAgICAgMjMwLFxuICAgICAgNDksXG4gICAgICAxMTAsXG4gICAgICAzMyxcbiAgICAgIDE3MixcbiAgICAgIDEyNyxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICA4NSxcbiAgICAgIDYyLFxuICAgICAgMjEyLFxuICAgICAgMTkzLFxuICAgICAgMTkwLFxuICAgICAgMTg2LFxuICAgICAgMjM0LFxuICAgICAgMTI0LFxuICAgICAgMjE1LFxuICAgICAgNixcbiAgICAgIDIzNCxcbiAgICAgIDIyLFxuICAgICAgMTE1LFxuICAgICAgNzUsXG4gICAgICAyMjQsXG4gICAgICAxODYsXG4gICAgICAxNTAsXG4gICAgICAxMDcsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEZYQkFaWDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4ODI1MjE4MDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwizpTFh8aXzpzigqwtxIbDmM6cxpfEhsWeIMWYw5jFgcWB4buuxqQgVFZcIixcbiAgICBcImxpZFwiOiBcIjQ0MjQyNzI2NjAwOTE1OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFNqNUw4R0VKQ2N4TElHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDdTVTU1A2SzA1djMxZXpLa0VhKzdpanFGWXdDaXI1SHl5ZFdneFhOdUhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBHVGtsMkErdGpHSnhkMFhtdVZmMWhRVjVKa21nbzRiOEtWRkxuWXlPRFhvQ3creVhxTnUvVHlSTFpnSVEwNHhtSFNVUmgxRXQ1cjVUaU4rdmdzWUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJuMW5sZlZpUjM2U01Hc2daUzM5eG5ERlArWE5POE1mSWJQaUlaM3RyYkZhV3U1cDNuT3djT0h3SG1hbkJxT3c0WmZ6WGhvbTVHTXRPMStJUkIrNkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4ODI1MjE4MDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NTg4MDU0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
