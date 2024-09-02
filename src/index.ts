import bot from "./lib/bot";
import getData from "./api/ncx";
import filterData from "./lib/filter";
import parseMessage from "./lib/parseMessage";

const chatId = process.env.GROUP_CHAT_ID!;
const topicID = process.env.GROUP_TOPIC_ID! as unknown as number

async function sendMessage() {
  try {
    const get = await getData();
    const { RBS, DGS, DPS, DSS } = await filterData(get.data);
    const message = await parseMessage(RBS, DGS, DPS, DSS);
    await bot.sendMessage(chatId, message.rbs, { parse_mode: "HTML", reply_to_message_id: topicID });
    await bot.sendMessage(chatId, message.dgs, { parse_mode: "HTML", reply_to_message_id: topicID });
    await bot.sendMessage(chatId, message.dps, { parse_mode: "HTML", reply_to_message_id: topicID });
    await bot.sendMessage(chatId, message.dss, { parse_mode: "HTML", reply_to_message_id: topicID });
    console.log("Message sent!")
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error");
  }
}

console.log("Running Telegram Bot");
// sendMessage()

let now = new Date();
let millisTill = ((new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0, 0)) as unknown as number) - (now as unknown as number)
if (millisTill < 0) {
  millisTill += 86400000;
}
setTimeout(function () {
  sendMessage()
}, millisTill);



