import schedule from "node-schedule";
import getData, { syncData } from "./api/ncx";
import {
  sendBASOMessage,
  sendBASOMessagebyInputer,
  sendCountbyInputerMessage,
  sendCountMessage,
  sendEDKMessage,
  sendInProgressMessage,
  sendPBAMessage,
  sendResumeMessage,
  sendSuspendMessage,
} from "./lib/sendMessage";
import { sleep } from "./utils/atomics";


const chatId = process.env.GROUP_CHAT_ID!;
const satgasChatId = process.env.SATGAS_CHAT_ID!;
const suspendID = process.env.SUSPEND_TOPIC_ID! as unknown as number;
const resumeID = process.env.RESUME_TOPIC_ID! as unknown as number;
const pendingID = process.env.PENDING_TOPIC_ID! as unknown as number;
const progressID = process.env.PROGRESS_TOPIC_ID! as unknown as number;
const inPID = process.env.INP_TOPIC_ID! as unknown as number;
const pendingInpPID = process.env.PENDING_INP_TOPIC_ID! as unknown as number;
const edkPID = process.env.EDK_TOPIC_ID! as unknown as number;

console.log("Running Telegram Bot");

const job = schedule.scheduleJob("0 8 * * *", async function () {
  console.log("syncing DB data...");
  const sync = await syncData();
  console.log(sync.data);
  console.log("Data is synced!");
  console.log("Fetching data...");
  const data = await getData();
  console.log("Data Fetched!");
  console.log("sending Suspend info...");
  await sendSuspendMessage(chatId, suspendID, data);
  await sleep(5000);
  console.log("sending Resume info...");
  await sendResumeMessage(chatId, resumeID, data);
  await sleep(5000);
  console.log("sending BASO info...");
  await sendBASOMessage(chatId, pendingID, data);
  await sleep(5000);
  console.log("sending BASO by Inputer info...");
  await sendBASOMessagebyInputer(chatId, pendingInpPID, data);
  await sleep(5000);
  console.log("sending In Progress info...");
  await sendInProgressMessage(chatId, inPID, data);
  await sleep(5000);
  console.log("sending PBA info...");
  await sendPBAMessage(satgasChatId, data)
  await sleep(5000);
  console.log("sending EDK info...");
  await sendEDKMessage(chatId, edkPID,data)
  await sleep(5000);
  console.log("sending Progress info...");
  await sendCountMessage(chatId, progressID, data);
  await sleep(5000);
  await sendCountbyInputerMessage(chatId, progressID, data);
});