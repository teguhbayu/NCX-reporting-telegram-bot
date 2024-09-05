import bot from "../lib/bot";
import filterDataSuspend, {
  filterDataCount,
  filterDataCountbyInputers,
  filterDataPBA,
  filterDataPendingBASO,
  filterDataPendingBASObyInputer,
  filterDataPendingProgres,
  filterDataResume,
} from "../lib/filter";
import parseMessageSuspend, {
  parseMessageBASO,
  parseMessageBASObyInputer,
  parseMessageCount,
  parseMessageInProgress,
  parseMessagePBA,
  parseMessageResume,
} from "../lib/parseMessage";
import type { dataQuery } from "../types/query";
import { sleep } from "../utils/atomics";
import { recursiveLog } from "../utils/log";

export async function sendSuspendMessage(
  chatId: string,
  suspendID: number,
  data: dataQuery
) {
  try {
    const { RBS, DGS, DPS, DSS } = await filterDataSuspend(data.data);
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

export async function sendResumeMessage(
  chatId: string,
  resumeID: number,
  data: dataQuery
) {
  try {
    const { RBS, DGS, DPS, DSS } = await filterDataResume(data.data);
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

export async function sendBASOMessage(
  chatId: string,
  basoID: number,
  data: dataQuery
) {
  try {
    const { dataByAM } = await filterDataPendingBASO(data.data);
    const { messages } = await parseMessageBASO(dataByAM);
    for (let i = 0, len = messages.length, text = ""; i < len; i++) {
      await bot.sendMessage(chatId, messages[i], {
        parse_mode: "HTML",
        reply_to_message_id: basoID,
      });
      recursiveLog(i, messages.length);
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

export async function sendPBAMessage(
  chatId: string,
  data: dataQuery
) {
  try {
    const { RBS, DGS, DSS, DPS } = await filterDataPBA(data.data);
    const { messages } = await parseMessagePBA(RBS, DGS, DSS, DPS);
    for (let i = 0, len = messages.length, text = ""; i < len; i++) {
      await bot.sendMessage(chatId, messages[i], {
        parse_mode: "HTML",
      });
      recursiveLog(i, messages.length);
      await sleep(3000);
    }
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error", {
      parse_mode: "HTML",
    });
  }
}

export async function sendBASOMessagebyInputer(
  chatId: string,
  basoInpID: number,
  data: dataQuery
) {
  try {
    const { dataByInputer } = await filterDataPendingBASObyInputer(data.data);
    const { messages } = await parseMessageBASObyInputer(dataByInputer);
    for (let i = 0, len = messages.length, text = ""; i < len; i++) {
      await bot.sendMessage(chatId, messages[i], {
        parse_mode: "HTML",
        reply_to_message_id: basoInpID,
      });
      recursiveLog(i, messages.length);
      await sleep(3000);
    }
    await bot.sendMessage(
      chatId,
      'Berikut Report Data OGP status pending BASO per masing2 Inputer, mohon untuk di follow up yah rekan2\n\ncc : pak <a href="tg://user?id=107034617">@aawaris</a> pak <a href="tg://user?id=21307163">@kfahmi90</a> pak <a href="tg://user?id=84620775">@raunsayGil</a>',
      {
        parse_mode: "HTML",
        reply_to_message_id: basoInpID,
      }
    );
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error", {
      parse_mode: "HTML",
      reply_to_message_id: basoInpID,
    });
  }
}

export async function sendInProgressMessage(
  chatId: string,
  inPID: number,
  data: dataQuery
) {
  try {
    const { dataByAM } = await filterDataPendingProgres(data.data);
    const { messages } = await parseMessageInProgress(dataByAM);
    for (let i = 0, len = messages.length, text = ""; i < len; i++) {
      await bot.sendMessage(chatId, messages[i], {
        parse_mode: "HTML",
        reply_to_message_id: inPID,
      });
      console.log(`message sent! (${(i + 1).toString()}/15)`);
      await sleep(3000);
    }
    await bot.sendMessage(
      chatId,
      'Berikut Report Data OGP status In Progress per masing2 AM, mohon untuk di follow up yah rekan2\n\ncc : pak <a href="tg://user?id=107034617">@aawaris</a> pak <a href="tg://user?id=21307163">@kfahmi90</a> pak <a href="tg://user?id=84620775">@raunsayGil</a>',
      {
        parse_mode: "HTML",
        reply_to_message_id: inPID,
      }
    );
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error", {
      parse_mode: "HTML",
      reply_to_message_id: inPID,
    });
  }
}

export async function sendCountMessage(
  chatId: string,
  basoID: number,
  data: dataQuery
) {
  try {
    const { countByAM, totalCount } = await filterDataCount(data.data);
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

export async function sendCountbyInputerMessage(
  chatId: string,
  countID: number,
  data: dataQuery
) {
  try {
    const { countByInputer, totalCount } = await filterDataCountbyInputers(data.data);
    const message = await parseMessageCount(countByInputer, totalCount);

    await bot.sendMessage(chatId, message, {
      parse_mode: "HTML",
      reply_to_message_id: countID,
    });
    console.log(`message sent!`);
  } catch (e) {
    console.log(e);
    await bot.sendMessage(chatId, "Internal Server Error", {
      parse_mode: "HTML",
      reply_to_message_id: countID,
    });
  }
}
