import bot from "../lib/bot";
import getData from "../api/ncx";
import filterDataSuspend, {
  filterDataCount,
  filterDataPendingBASO,
  filterDataResume,
} from "../lib/filter";
import parseMessageSuspend, {
  parseMessageBASO,
  parseMessageCount,
  parseMessageResume,
} from "../lib/parseMessage";
import { sleep } from "../utils/atomics";

export async function sendSuspendMessage(chatId: string, suspendID: number) {
  try {
    const get = await getData();
    const { RBS, DGS, DPS, DSS } = await filterDataSuspend(get.data);
    const message = await parseMessageSuspend(RBS, DGS, DPS, DSS);
    await bot.sendMessage(chatId, message.rbs, {
      parse_mode: "HTML",
      reply_to_message_id: suspendID,
    });
    await bot.sendMessage(chatId, message.dgs, {
      parse_mode: "HTML",
      reply_to_message_id: suspendID,
    });
    await bot.sendMessage(chatId, message.dps, {
      parse_mode: "HTML",
      reply_to_message_id: suspendID,
    });
    await bot.sendMessage(chatId, message.dss, {
      parse_mode: "HTML",
      reply_to_message_id: suspendID,
    });
    console.log("Message sent!");
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error");
  }
}

export async function sendResumeMessage(chatId: string, resumeID: number) {
  try {
    const get = await getData();
    const { RBS, DGS, DPS, DSS } = await filterDataResume(get.data);
    const message = await parseMessageResume(RBS, DGS, DPS, DSS);
    await bot.sendMessage(chatId, message.rbs, {
      parse_mode: "HTML",
      reply_to_message_id: resumeID,
    });
    await bot.sendMessage(chatId, message.dgs, {
      parse_mode: "HTML",
      reply_to_message_id: resumeID,
    });
    await bot.sendMessage(chatId, message.dps, {
      parse_mode: "HTML",
      reply_to_message_id: resumeID,
    });
    await bot.sendMessage(chatId, message.dss, {
      parse_mode: "HTML",
      reply_to_message_id: resumeID,
    });
    console.log("Message sent!");
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error", {
      parse_mode: "HTML",
      reply_to_message_id: resumeID,
    });
  }
}

export async function sendBASOMessage(chatId: string, basoID: number) {
  try {
    const get = await getData();
    const { dataByAM } = await filterDataPendingBASO(get.data);
    const { messages } = await parseMessageBASO(dataByAM);
    for (let i = 0, len = messages.length, text = ""; i < len; i++) {
      await bot.sendMessage(chatId, messages[i], {
        parse_mode: "HTML",
        reply_to_message_id: basoID,
      });
      console.log(`message sent! (${(i + 1).toString()}/15)`);
      await sleep(3000);
    }
    await bot.sendMessage(
      chatId,
      'Berikut Report Data OGP status pending BASO per masing2 AM, mohon untuk di follow up yah rekan2\n\ncc : pak <a href="tg://user?id=107034617">@aawaris</a> pak <a href="tg://user?id=21307163">@kfahmi90</a> pak <a href="tg://user?id=84620775">@raunsayGil</a>',
      {
        parse_mode: "HTML",
        reply_to_message_id: basoID,
      }
    );
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error", {
      parse_mode: "HTML",
      reply_to_message_id: basoID,
    });
  }
}

export async function sendCountMessage(chatId: string, basoID: number) {
  try {
    const get = await getData();
    const { countByAM, totalCount } = await filterDataCount(get.data);
    const message = await parseMessageCount(countByAM, totalCount);

    await bot.sendMessage(chatId, message, {
      parse_mode: "HTML",
      reply_to_message_id: basoID,
    });
    console.log(`message sent!`);
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error", {
      parse_mode: "HTML",
      reply_to_message_id: basoID,
    });
  }
}
