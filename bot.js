const TelegramBot = require('node-telegram-bot-api');
const token = '7505931881:AAF9U_4IidolvYle0OL9AQ0tR_j7XscwX2c';
const bot = new TelegramBot(token, { polling: true });

// ➤ Handle /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const message = `🎉 Selamat Datang di BOCOR188!\n\nSilakan pilih tombol di bawah ini.`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '📲 LOGIN', url: 'https://bocor188.vip' },
        ],
        [
          { text: '💬 Hubungi CS', url: 'https://t.ly/Bocor188LC' },
          { text: '👥 Komunitas', url: 'https://t.me/group_official_bocor188' }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, message, options);

});

// ➤ Command /linkalt
bot.onText(/\/linkalt/, (msg) => {
  bot.sendMessage(msg.chat.id, '🌐 Link Alt: https://bocor188.com');
});

// ➤ Command /rtp
bot.onText(/\/rtp/, (msg) => {
    bot.sendMessage(msg.chat.id, '🎰 RTP LIVE: https://bocor188.vip');
  });
