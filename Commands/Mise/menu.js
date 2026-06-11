const { formatUptime } = require('../../lib/functions')
const config = require('../../config')

module.exports = {
    name: 'menu',
    aliases: ['help', 'start', 'list', 'cmds', 'commands', 'm'],
    description: 'Show full command menu',
    category: 'misc',
    async run({ sock, m }) {
        const uptime = formatUptime(process.uptime())
        const p = config.prefix
        const now = new Date().toLocaleString('ur-PK', { timeZone: 'Asia/Karachi' })

        const menu = `╭───────────────⭓
│ ✨ *MARCO MALIK MD BOT* ✨
╰───────────────⭓

┏━━━━━━━━━━━━━━━━━━━┓
👤 *OWNER :* ${config.ownerName}
🚀 *UPTIME :* ${uptime}
📂 *COMMANDS :* 500+
⚙️ *MODE :* ${config.mode.toUpperCase()}
🔥 *VERSION :* ${config.version}
🕐 *TIME :* ${now}
┗━━━━━━━━━━━━━━━━━━━┛

◇══════【 🤖 AI 】══════◇
⚡ ${p}ai — Chat with AI
⚡ ${p}gpt — GPT-4 Chat
⚡ ${p}gpt5 — GPT-5 Mode
⚡ ${p}deepseek — DeepSeek AI
⚡ ${p}gemini — Google Gemini
⚡ ${p}copilot — Microsoft Copilot
⚡ ${p}blackbox — BlackBox AI
⚡ ${p}codeai — Code Generator
⚡ ${p}felo — Felo AI Search
⚡ ${p}bot — Bot Chat
⚡ ${p}claude — Claude AI
⚡ ${p}llama — LLaMA AI
⚡ ${p}imagine — AI Image Gen
⚡ ${p}draw — AI Draw
⚡ ${p}describe — Describe Image

◇══════【 📥 DOWNLOAD 】══════◇
📥 ${p}play — YouTube Song (Audio)
📥 ${p}song — Song Download
📥 ${p}music — Music Download
📥 ${p}audio — Audio Download
📥 ${p}video — YouTube Video
📥 ${p}vid — Video Download
📥 ${p}yt — YouTube Audio URL
📥 ${p}yta — YouTube Audio
📥 ${p}ytv — YouTube Video
📥 ${p}youtube — YouTube DL
📥 ${p}tiktok — TikTok Video
📥 ${p}tt — TikTok DL
📥 ${p}ttaudio — TikTok Audio
📥 ${p}fb — Facebook Video
📥 ${p}facebook — FB Video DL
📥 ${p}ig — Instagram Video
📥 ${p}instagram — IG Reel DL
📥 ${p}apk — APK Download
📥 ${p}app — App Download
📥 ${p}movie — Movie Download
📥 ${p}film — Film Search

◇══════【 🔍 SEARCH 】══════◇
🔍 ${p}google — Google Search
🔍 ${p}search — Web Search
🔍 ${p}wiki — Wikipedia
🔍 ${p}wikipedia — Wikipedia
🔍 ${p}news — Today's News (Urdu)
🔍 ${p}lyrics — Song Lyrics
🔍 ${p}lyric — Lyrics Search
🔍 ${p}weather — Weather Info
🔍 ${p}climate — Climate Info
🔍 ${p}anime — Anime Search
🔍 ${p}manga — Manga Info
🔍 ${p}img — Google Image
🔍 ${p}image — Image Search
🔍 ${p}gif — GIF Search

◇══════【 👥 GROUP 】══════◇
👥 ${p}tagall — Tag Everyone
👥 ${p}tag — Tag All
👥 ${p}everyone — Tag All
👥 ${p}hidetag — Hidden Tag
👥 ${p}kick — Kick Member
👥 ${p}remove — Remove Member
👥 ${p}ban — Ban User
👥 ${p}add — Add Member
👥 ${p}invite — Group Invite Link
👥 ${p}promote — Make Admin
👥 ${p}admin — Make Admin
👥 ${p}demote — Remove Admin
👥 ${p}mute — Mute Group
👥 ${p}unmute — Unmute Group
👥 ${p}lock — Lock Group
👥 ${p}unlock — Unlock Group
👥 ${p}setname — Set Group Name
👥 ${p}setdesc — Set Description
👥 ${p}welcome — Welcome Toggle
👥 ${p}setwelcome — Set Welcome Msg
👥 ${p}antilink — Anti-Link Toggle
👥 ${p}antidelete — Anti-Delete
👥 ${p}antispam — Anti Spam
👥 ${p}antibot — Anti Bot
👥 ${p}groupinfo — Group Info
👥 ${p}members — Group Members
👥 ${p}admins — List Admins

◇══════【 😂 FUN 】══════◇
😂 ${p}joke — Random Joke
😂 ${p}jokes — More Jokes
❤️ ${p}ship — Love Calculator
💘 ${p}love — Love Percentage
🔥 ${p}roast — Roast Someone
🎯 ${p}truth — Truth Question
🎭 ${p}dare — Dare Challenge
💑 ${p}couple — Couple Match
🌹 ${p}flirt — Flirt Message
💬 ${p}quote — Random Quote
🧠 ${p}fact — Random Fact
🤔 ${p}riddle — Riddle
🎱 ${p}8ball — Magic 8-Ball
🪙 ${p}flip — Coin Flip
🎲 ${p}dice — Roll Dice
⭐ ${p}rate — Rate Anything
🎭 ${p}choose — Choose Option
🧮 ${p}calc — Calculator
🌍 ${p}country — Country Info
🐾 ${p}animal — Animal Fact
🌿 ${p}plant — Plant Info

◇══════【 🖼 STICKER 】══════◇
🖼 ${p}sticker — Make Sticker
🖼 ${p}s — Quick Sticker
📦 ${p}toimg — Sticker to Image
🎥 ${p}take — Sticker from Video
✨ ${p}attp — Animated Text Sticker
🎨 ${p}smeme — Sticker Meme
📸 ${p}webp — WebP Sticker

◇══════【 ✍️ IMAGE GEN 】══════◇
🎨 ${p}marco — Marco Style Name
🎨 ${p}zahid — Zahid Style Name
🎨 ${p}waqar — Waqar Style Name
🎨 ${p}saeed — Saeed Style Name
🎨 ${p}devil — Devil Style Name
🎨 ${p}neon — Neon Text Effect
🎨 ${p}fire — Fire Text Effect
🎨 ${p}stylish — Stylish Text
🎨 ${p}text3d — 3D Text Effect
🎨 ${p}glitch — Glitch Text
🎨 ${p}shadow — Shadow Text
🎨 ${p}rainbow — Rainbow Text
🎨 ${p}wanted — Wanted Poster

◇══════【 🎁 GREETINGS 】══════◇
🌅 ${p}gm — Good Morning
🌙 ${p}gn — Good Night
☀️ ${p}ge — Good Evening
🕌 ${p}jummah — Jumma Mubarak
🎂 ${p}birthday — Birthday Wish
🌙 ${p}ramadan — Ramadan Mubarak
🎉 ${p}eid — Eid Mubarak
❤️ ${p}hug — Virtual Hug
💌 ${p}love — Love Message
🤲 ${p}dua — Islamic Dua

◇══════【 ⚙️ TOOLS 】══════◇
🔊 ${p}tts — Text to Speech
🌐 ${p}translate — Translate Text
🔍 ${p}viewonce — View Once
💻 ${p}sourcecode — Website Source
📊 ${p}carbon — Code to Image
📱 ${p}qr — Generate QR Code
🔗 ${p}shorturl — Shorten URL
📋 ${p}totext — Image to Text
🎵 ${p}recognize — Song Recognition
📧 ${p}tempmail — Temp Email
🔐 ${p}password — Gen Password
📝 ${p}notes — Save Notes
🗑️ ${p}delnotes — Delete Notes
📏 ${p}resize — Resize Image
🎨 ${p}enhance — Enhance Image
🔎 ${p}reverse — Reverse Image Search

◇══════【 ℹ️ INFO 】══════◇
🏓 ${p}ping — Bot Speed
⏱️ ${p}uptime — Bot Uptime
👤 ${p}owner — Owner Info
🤖 ${p}botinfo — Bot Info
📊 ${p}stats — Bot Stats
🆔 ${p}id — Get Chat ID
📱 ${p}profile — Profile Info
📡 ${p}status — Check Status

◇══════【 👑 OWNER 】══════◇
📢 ${p}broadcast — Broadcast Msg
🚫 ${p}block — Block User
✅ ${p}unblock — Unblock User
🔄 ${p}restart — Restart Bot
🛑 ${p}shutdown — Shutdown Bot
🖼 ${p}setpp — Set Bot Profile Pic
📝 ${p}setbio — Set Bot Bio
⚙️ ${p}setprefix — Change Prefix
📋 ${p}eval — Run JS Code
💻 ${p}exec — Run Shell Cmd
🔃 ${p}update — Update Bot
📊 ${p}grouplist — All Groups
👥 ${p}userlist — All Users

━━━━━━━━━━━━━━━━━━━━━━━━
🌐 *REPOSITORY*
📲 bit.ly/marco-malik-repo

🚀 *DEPLOY RAILWAY*
📲 bit.ly/marco-railway

☁️ *DEPLOY HEROKU*
📲 bit.ly/marco-heroku

📞 *CONTACT OWNER*
📲 wa.me/923001234567

📢 *WHATSAPP CHANNEL*
📲 bit.ly/marco-channel
━━━━━━━━━━━━━━━━━━━━━━━━

_Powered by *Marco Malik* 👑_
_Made with ❤️ in Pakistan 🇵🇰_`

        await sock.sendMessage(m.from, { text: menu }, { quoted: m.key ? { key: m.key, message: m.message } : undefined })
    }
}
