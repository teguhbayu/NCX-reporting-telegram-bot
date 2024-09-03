import { sendBASOMessage, sendCountMessage, sendResumeMessage, sendSuspendMessage } from "./lib/sendMessage";
import { sleep } from "./utils/atomics";

const chatId = process.env.GROUP_CHAT_ID!;
const suspendID = process.env.SUSPEND_TOPIC_ID! as unknown as number;
const resumeID = process.env.RESUME_TOPIC_ID! as unknown as number;
const pendingID = process.env.PENDING_TOPIC_ID! as unknown as number;
const progressID = process.env.PROGRESS_TOPIC_ID! as unknown as number;

console.log("Running Telegram Bot");


let now = new Date();
let millisTill =
  (new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    8,
    0,
    0,
    0
  ) as unknown as number) - (now as unknown as number);
if (millisTill < 0) {
  millisTill += 86400000;
}
setTimeout(async function () {
  console.log("sending Suspend info...")
  await sendSuspendMessage(chatId, suspendID);
  await sleep(5000)
  console.log("sending Resume info...")
  await sendResumeMessage(chatId, resumeID);
  await sleep(5000)
  console.log("sending BASO info...")
  await sendBASOMessage(chatId, pendingID)
  await sleep(5000)
  console.log("sending Progress info...")
  await sendBASOMessage(chatId, progressID)
}, millisTill);