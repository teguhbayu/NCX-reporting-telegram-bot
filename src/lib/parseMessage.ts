import type dataNCX from "../types/data";
import { getMonth } from "./atomics";

export default async function parseMessage(
  RBS: dataNCX[],
  DGS: dataNCX[],
  DPS: dataNCX[],
  DSS: dataNCX[]
) {
  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const rbs = `<b>Order Status Suspend - RBS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${RBS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}`
).join("\n-----------\n")}
cc : pak <a href="tg://user?id=107034617">@aawaris</a>`;

  const dgs = `<b>Order Status Suspend - DGS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DGS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=84620775">@raunsayGil</a>`;

  const dps = `<b>Order Status Suspend - DPS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DPS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`;

  const dss = `<b>Order Status Suspend - DSS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DSS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`;

  return { rbs, dgs, dps, dss };
}
