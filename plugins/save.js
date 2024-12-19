//CODING BY AWAN ZADA
const fs = require('fs'); // برای ذخیره فایل‌ها
const path = require('path'); // برای مدیریت مسیر فایل‌ها
cmd({
  pattern: "save",
  alias: ["download", "savefile"], // دستورات مشابه
  desc: "Save and send the replied media to the sender",
  react: "💾",
  category: "utility",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
  try {
    // چک کردن اینکه پیام ریپلای شده است یا خیر
    if (!quoted || !quoted.mtype) {
      return reply("Please reply to a Video, Image, or Audio to save.");
    }

    // شناسایی نوع مدیا
    let mediaType = "";
    if (/video/.test(quoted.mtype)) {
      mediaType = "video";
    } else if (/image/.test(quoted.mtype)) {
      mediaType = "image";
    } else if (/audio/.test(quoted.mtype)) {
      mediaType = "audio";
    } else {
      return reply("Only Video, Image, or Audio can be saved.");
    }

    // دانلود مدیا
    let filePath = await conn.downloadAndSaveMediaMessage(quoted);
    if (!filePath) {
      return reply("Failed to download media. Please try again.");
    }

    // تعریف مسیر ذخیره‌سازی
    const savePath = path.join(__dirname, "downloads", `${Date.now()}-${mediaType}${path.extname(filePath)}`);
    fs.renameSync(filePath, savePath); // ذخیره فایل با نام جدید

    // ارسال فایل به فرستنده
    let options = { caption: q ? q : "Here is your saved file." };
    options[mediaType] = { url: savePath }; // اضافه کردن فایل به پیام
    await conn.sendMessage(sender, options, { quoted: m });

    reply("✅ File saved and sent successfully.");
  } catch (error) {
    console.error(error);
    reply("❌ Failed to save and send the media.");
  }
});
