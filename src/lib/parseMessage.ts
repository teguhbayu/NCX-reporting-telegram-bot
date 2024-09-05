import type { AMDATA, COUNTDATA, dataCount, INPDATA } from "../types/data";
import type dataNCX from "../types/data";
import { getMonth } from "../utils/atomics";

/**
 * This function is used to parse the message that contains Suspend sales data.
 *
 * @param {dataNCX[]} RBS Filtered data of RBS.
 * @param {dataNCX[]} DGS Filtered data of DGS.
 * @param {dataNCX[]} DPS Filtered data of DPS.
 * @param {dataNCX[]} DSS Filtered data of DSS.
 */
export default async function parseMessageSuspend(
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

/**
 * This function is used to parse the message that contains Resume sales data.
 *
 * @param {dataNCX[]} RBS Filtered data of RBS.
 * @param {dataNCX[]} DGS Filtered data of DGS.
 * @param {dataNCX[]} DPS Filtered data of DPS.
 * @param {dataNCX[]} DSS Filtered data of DSS.
 */
export async function parseMessageResume(
  RBS: dataNCX[],
  DGS: dataNCX[],
  DPS: dataNCX[],
  DSS: dataNCX[]
) {
  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  const rbs = `<b>Order Status Resume - RBS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${RBS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}`
).join("\n-----------\n")}
cc : pak <a href="tg://user?id=107034617">@aawaris</a>`;

  const dgs = `<b>Order Status Resume - DGS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DGS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=84620775">@raunsayGil</a>`;

  const dps = `<b>Order Status Resume - DPS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DPS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`;

  const dss = `<b>Order Status Resume - DSS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DSS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${i.SERVACCNTNAME}
💬 ${i.CHANGE_REASON_CD}
👤 ${i.AM_VALIDASI}
📑 ${i.LI_PRODUCT_NAME}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`;

  return { rbs, dgs, dps, dss };
}

/**
 * This function is used to parse the message that contains Pending Baso sales data.
 *
 * @param {AMDATA[]} sortedData data returned from filterDataPendingBASO function.
 */
export async function parseMessageBASO(sortedData: AMDATA[]) {
  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  let messages: string[] = [];

  sortedData.map((i) => {
    if (
      i.name === "MUHAMMAD, MUHAMMAD" ||
      i.name === "RIESKA ALFIAH, RANIYANTI"
    ) {
      messages.push(
        `<b>Order Status Pending BASO - ${i.name}</b> (<a href="tg://user?id=${
          i.id
        }">${
          i.username
        }</a>)\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
          .map(
            (n) =>
              `🔴 ${n.ORDER_ID} / ${n.SERVACCNTNAME} / ${n.LI_PRODUCT_NAME} / ${n.SEGMENT_VALIDASI}`
          )
          .join("\n")}`
      );
    } else {
      messages.push(
        `<b>Order Status Pending BASO - ${i.name}</b> (<a href="tg://user?id=${
          i.id
        }">${
          i.username
        }</a>)\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
          .map(
            (n) =>
              `🔴 ${n.ORDER_ID} / ${n.ORDER_SUBTYPE} / ${n.SERVACCNTNAME} / ${n.LI_PRODUCT_NAME} / ${n.AGREE_NAME} / ${n.SEGMENT_VALIDASI} / End Date : ${n.AGREE_END_DATE}`
          )
          .join("\n")}`
      );
    }
  });

  return { messages };
}

/**
 * This function is used to parse the message that contains Pending Baso sales data by inputer.
 *
 * @param {AMDATA[]} sortedData data returned from filterDataPendingBASO function.
 */
export async function parseMessageBASObyInputer(sortedData: INPDATA[]) {
  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  let messages: string[] = [];
  const Abbr = {
    Disconnect: "DO",
    Modify: "MO",
    "Modify BA": "MO BA",
    "Modify Price": "MO Price",
    "New Install": "AO",
    "Renewal Agreement": "RE",
    Resume: "RO",
    Suspend: "SO",
    "Wifi Managed Service": "WMS",
    "Satelit Internet Broadband MangoeSky": "MangoeSky",
  };

  function filterLongName(name: string) {
    if (
      name === "Wifi Managed Service" ||
      name === "Satelit Internet Broadband MangoeSky"
    ) {
      return Abbr[
        name as "Wifi Managed Service" | "Satelit Internet Broadband MangoeSky"
      ];
    } else {
      return name;
    }
  }

  sortedData.map((i) => {
    messages.push(
      `<b>Order Status Pending BASO - ${i.name}</b> (<a href="tg://user?id=${
        i.id
      }">${i.username}</a>)\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
        .map(
          (n) =>
            `🔴 ${n.ORDER_ID} / ${Abbr[n.ORDER_SUBTYPE]} / ${
              n.SERVACCNTNAME?.length! > 13
                ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                : n.SERVACCNTNAME
            } / ${filterLongName(n.LI_PRODUCT_NAME!)} / AM : ${
              n.AM_VALIDASI.split(" ")[0]
            }`
        )
        .join("\n")}`
    );
  });

  return { messages };
}

/**
 * This function is used to parse the message that contains In Progress sales data.
 *
 * @param {AMDATA[]} sortedData data returned from filterDataPendingProgres function.
 */
export async function parseMessageInProgress(sortedData: AMDATA[]) {
  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  let messages: string[] = [];

  sortedData.map((i) => {
    if (i.name === "MUHAMMAD, MUHAMMAD") {
      messages.push(
        `<b>Order Status In Progress - ${i.name}</b> (<a href="tg://user?id=${
          i.id
        }">${
          i.username
        }</a>)\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
          .map(
            (n) =>
              `🔴 ${n.ORDER_ID} / ${n.SERVACCNTNAME} / ${n.LI_PRODUCT_NAME} / ${n.SEGMENT_VALIDASI}`
          )
          .join("\n")}`
      );
    } else {
      messages.push(
        `<b>Order Status In Progress - ${i.name}</b> (<a href="tg://user?id=${
          i.id
        }">${
          i.username
        }</a>)\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
          .map(
            (n) =>
              `🔴 ${n.ORDER_ID} / ${n.ORDER_SUBTYPE} / ${n.SERVACCNTNAME} / ${n.LI_PRODUCT_NAME} / ${n.AGREE_NAME} / ${n.SEGMENT_VALIDASI} / End Date : ${n.AGREE_END_DATE}`
          )
          .join("\n")}`
      );
    }
  });

  return { messages };
}

/**
 * This function is used to parse the message that contains per Admin sales data count.
 *
 * @param {COUNTDATA[]} countData per admin all status sales data count
 */
export async function parseMessageCount(
  countData: COUNTDATA[],
  totalCount: dataCount
) {
  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();

  const message = `<b>Report Housekeeping Order Sulbagteng</b>\n<i>Update : ${day} ${month} ${year}</i>\n----------------------------\n\n${countData
    .map(
      (i) =>
        `<b>${i.name}</b> (<a href="tg://user?id=${i.id}">${i.username}</a>)\n- Pending Baso : ${i.data?.pending} Order\n- PBA : ${i.data?.billing} Order\n- Complete : ${i.data?.complete} Order`
    )
    .join(
      "\n\n"
    )}\n\n----------------------------\n<b>Total All</b>\n- Pending Baso : ${
    totalCount.pending
  } Order\n- PBA : ${totalCount.billing} Order\n- Complete : ${
    totalCount.complete
  } Order\n\ncc : pak <a href="tg://user?id=107034617">@aawaris</a> pak <a href="tg://user?id=21307163">@kfahmi90</a> pak <a href="tg://user?id=84620775">@raunsayGil</a>`;

  return message;
}
