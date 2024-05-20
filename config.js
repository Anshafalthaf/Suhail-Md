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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_00_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSmdoRHB5aXp1VnRqMk15RVZsT1dJRGljUVdPN1pFL3czemtELzJha0Q5UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NTQ4MTgwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNURCREZGMDVGMDkwQkE5NjJBOERFMzBDNjM0NkM3NEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2MTk1NjA1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFhNVdlU0tfU3BHUTA4dDZrTGVGQXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2M3MDNjODAtODcwZS00ZjU5LThjZWQtMzg3NTg3ZTU2MGRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDEzNSxcbiAgICAgIDgsXG4gICAgICAyMzIsXG4gICAgICA3NyxcbiAgICAgIDE2MCxcbiAgICAgIDE3NSxcbiAgICAgIDIzNixcbiAgICAgIDY4LFxuICAgICAgMjAwLFxuICAgICAgMixcbiAgICAgIDIyMixcbiAgICAgIDE1NixcbiAgICAgIDY4LFxuICAgICAgODksXG4gICAgICA2MSxcbiAgICAgIDQ0LFxuICAgICAgMjE3LFxuICAgICAgMjI3LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgMTc3LFxuICAgICAgMTk3LFxuICAgICAgMTI3LFxuICAgICAgMTQ1LFxuICAgICAgODQsXG4gICAgICAxNzEsXG4gICAgICA1MyxcbiAgICAgIDEwMCxcbiAgICAgIDE2LFxuICAgICAgNjgsXG4gICAgICA4MSxcbiAgICAgIDIzMSxcbiAgICAgIDM5LFxuICAgICAgMjQyLFxuICAgICAgMTQyLFxuICAgICAgMjAxLFxuICAgICAgMTIwLFxuICAgICAgMTExLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJIU1pYVERRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NTQ4MTgwMzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIjzwnZ6b8J2elvCdmL8t8J2ek/CdmY7wnZ6S8J2emD5cIixcbiAgICBcImxpZFwiOiBcIjU5NTMzMDc4NTc3MTkwOjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01lS3M1TUJFSTJpckxJR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzJ6OFlMdTdod2dtdTJIUms3K1p0MTQxeGw4TzRJY1B1UndVMGlQUisyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPOC9MVGdhYjU2elJEb2FIMzBoU2VpbE13Z3RrMWd5NlAwUmxtTkdrRld1WmQ0emJteFpGK2taK1pUMW1jZ2pBOW9KVmZrMStJSkVxb3d3dVo5cXhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqV0tWMGxjTlhWcFI4eEh6SmRydnM4dkdNNkpJTXJ3RFU3anB2QlRjOG9kYkxvMjhvMTFzOXdSME00VkkzNzM2ZmVKaXdTaEZmRTIrTDdYcmMvdDlBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NTQ4MTgwMzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MTk1NjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkFpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGQWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQVWJMV2ppa0ZEcW9LSnoxTEhteDVKblAzM0V1TlEyWkhadllCQUZRYVlJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwOTExODI3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1NTg2NTc3NzI4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
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
