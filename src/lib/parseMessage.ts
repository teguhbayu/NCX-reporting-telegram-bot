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
  const inputers = {
    KARINA: {
      username: "@karinaspoliyama",
      id: "5200640067",
    },
    MAGFIRAH: {
      username: "@Magfirha",
      id: "116744785",
    },
    NOVITA: {
      username: "@novitazf",
      id: "1008894420",
    },
    SIFA: {
      username: "@Silfa_BGES",
      id: "107580671",
    },
    WAWAN: {
      username: "@Andiwawan",
      id: "5033717404",
    },
    YANTO: {
      username: "@MohNuryanto",
      id: "97404704",
    },
    YUNI: {
      username: "@yuniakadji",
      id: "450302218",
    },
  };

  const admins = {
    "AMAR, KANA": {
      username: "@kana_amar",
      id: "104111782",
    },
    "ARIEF RAHMAN": {
      username: "@ariefr4",
      id: "506038155",
    },
    "BAWIAS, RIVO": {
      username: "@ipongalai",
      id: "491601656",
    },
    "DJABAR TIMUMUN": {
      username: "@Djabar_BGES",
      id: "110506213",
    },
    "FAJAR, MARWAN": {
      username: "@Marwanfajar",
      id: "5206603276",
    },
    "FIKRI RAMADAN, MOH.": {
      username: "@L_Fikri",
      id: "271825149",
    },
    "HALID, FITYAN": {
      username: "@fityanhalid",
      id: "264343410",
    },
    "LIMONU, DESRIYANTI": {
      username: "@ecylimonu",
      id: "350728586",
    },
    "MUHAMMAD, MUHAMMAD": {
      username: "@Matong88",
      id: "175501176",
    },
    "NUGROHO, AGUNG": {
      username: "@agungnugroho9605",
      id: "5591009493",
    },
    "P. TOAGO, SADDAM": {
      username: "@Saddam_BKU",
      id: "221136697",
    },
    "PRAMONO RAUF, MOH.INDRA": {
      username: "@indrarauf",
      id: "117794621",
    },
    "RIESKA ALFIAH, RANIYANTI": {
      username: "@rieskaalfiah",
      id: "822091091",
    },
    "SHINTA KRISTIANTI, THERESIA": {
      username: "@thrsshinta",
      id: "1865032257",
    },
    "ZULFIKAR, ZULFIKAR": {
      username: "@AMzulfikar",
      id: "755954432",
    },
  };

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
    "TELKOM Addendum VPN IP": "VPN IP",
  };

  function filterLongName(name: string) {
    if (
      name === "Wifi Managed Service" ||
      name === "Satelit Internet Broadband MangoeSky" ||
      name === "TELKOM Addendum VPN IP"
    ) {
      return Abbr[
        name as
          | "Wifi Managed Service"
          | "Satelit Internet Broadband MangoeSky"
          | "TELKOM Addendum VPN IP"
      ];
    } else {
      return name;
    }
  }

  const rbs =
    RBS.length > 0
      ? `<b>Order Status Suspend - RBS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${RBS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
📊 ${i.LI_STATUS}
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join(
  "\n-----------\n"
)}\n\ncc : pak <a href="tg://user?id=107034617">@aawaris</a>`
      : undefined;

  const dgs =
    DGS.length > 0
      ? `<b>Order Status Suspend - DGS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DGS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
📊 ${i.LI_STATUS}
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=84620775">@raunsayGil</a>`
      : undefined;

  const dps =
    DPS.length > 0
      ? `<b>Order Status Suspend - DPS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DPS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
📊 ${i.LI_STATUS}
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`
      : undefined;

  const dss =
    DSS.length > 0
      ? `<b>Order Status Suspend - DSS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DSS.map(
  (i) =>
    `🔴 <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
📊 ${i.LI_STATUS}
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`
      : undefined;

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
  const inputers = {
    KARINA: {
      username: "@karinaspoliyama",
      id: "5200640067",
    },
    MAGFIRAH: {
      username: "@Magfirha",
      id: "116744785",
    },
    NOVITA: {
      username: "@novitazf",
      id: "1008894420",
    },
    SIFA: {
      username: "@Silfa_BGES",
      id: "107580671",
    },
    WAWAN: {
      username: "@Andiwawan",
      id: "5033717404",
    },
    YANTO: {
      username: "@MohNuryanto",
      id: "97404704",
    },
    YUNI: {
      username: "@yuniakadji",
      id: "450302218",
    },
  };

  const admins = {
    "AMAR, KANA": {
      username: "@kana_amar",
      id: "104111782",
    },
    "ARIEF RAHMAN": {
      username: "@ariefr4",
      id: "506038155",
    },
    "BAWIAS, RIVO": {
      username: "@ipongalai",
      id: "491601656",
    },
    "DJABAR TIMUMUN": {
      username: "@Djabar_BGES",
      id: "110506213",
    },
    "FAJAR, MARWAN": {
      username: "@Marwanfajar",
      id: "5206603276",
    },
    "FIKRI RAMADAN, MOH.": {
      username: "@L_Fikri",
      id: "271825149",
    },
    "HALID, FITYAN": {
      username: "@fityanhalid",
      id: "264343410",
    },
    "LIMONU, DESRIYANTI": {
      username: "@ecylimonu",
      id: "350728586",
    },
    "MUHAMMAD, MUHAMMAD": {
      username: "@Matong88",
      id: "175501176",
    },
    "NUGROHO, AGUNG": {
      username: "@agungnugroho9605",
      id: "5591009493",
    },
    "P. TOAGO, SADDAM": {
      username: "@Saddam_BKU",
      id: "221136697",
    },
    "PRAMONO RAUF, MOH.INDRA": {
      username: "@indrarauf",
      id: "117794621",
    },
    "RIESKA ALFIAH, RANIYANTI": {
      username: "@rieskaalfiah",
      id: "822091091",
    },
    "SHINTA KRISTIANTI, THERESIA": {
      username: "@thrsshinta",
      id: "1865032257",
    },
    "ZULFIKAR, ZULFIKAR": {
      username: "@AMzulfikar",
      id: "755954432",
    },
  };

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
    "TELKOM Addendum VPN IP": "VPN IP",
  };

  function filterLongName(name: string) {
    if (
      name === "Wifi Managed Service" ||
      name === "Satelit Internet Broadband MangoeSky" ||
      name === "TELKOM Addendum VPN IP"
    ) {
      return Abbr[
        name as
          | "Wifi Managed Service"
          | "Satelit Internet Broadband MangoeSky"
          | "TELKOM Addendum VPN IP"
      ];
    } else {
      return name;
    }
  }

  const rbs =
    RBS.length > 0
      ? `<b>Order Status Resume - RBS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${RBS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join(
  "\n-----------\n"
)}\n\ncc : pak <a href="tg://user?id=107034617">@aawaris</a>`
      : undefined;

  const dgs =
    DGS.length > 0
      ? `<b>Order Status Resume - DGS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DGS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=84620775">@raunsayGil</a>`
      : undefined;

  const dps =
    DPS.length > 0
      ? `<b>Order Status Resume - DPS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DPS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`
      : undefined;

  const dss =
    DSS.length > 0
      ? `<b>Order Status Resume - DSS Sulbagteng</b>
<i>Update : ${day} ${month} ${year}</i>

${DSS.map(
  (i) =>
    `🔴 RO <a href="${i.ORDER_ID}">${i.ORDER_ID}</a> ${
      i.SERVACCNTNAME?.length! > 10
        ? i.SERVACCNTNAME?.substring(0, 10) + "..."
        : i.SERVACCNTNAME
    }
💬 ${i.CHANGE_REASON_CD}
👤 AM : ${i.AM_VALIDASI.split(" ")[0]} <a href="tg://user?id=${
      admins[i.AM_VALIDASI].id
    }">${admins[i.AM_VALIDASI].username}</a>
📑 ${filterLongName(i.LI_PRODUCT_NAME!)}
🔔Status : ${i.LI_STATUS}
📆End Date Kontrak : ${i.AGREE_END_DATE}
👤 Inputer : ${i.INPUTER_VALIDASI} <a href="tg://user?id=${
      inputers[i.INPUTER_VALIDASI].id
    }">${inputers[i.INPUTER_VALIDASI].username}</a>`
).join("\n-----------\n")}

cc : pak <a href="tg://user?id=21307163">@kfahmi90</a>`
      : undefined;

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
    if (i.data.length > 0)
      messages.push(
        `<b>Order Status Pending BASO - ${i.name}</b> (<a href="tg://user?id=${
          i.id
        }">${
          i.username
        }</a>)\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
          .map(
            (n) =>
              `🔴 ${n.ORDER_ID} / ${Abbr[n.ORDER_SUBTYPE]} / ${
                n.SERVACCNTNAME?.length! > 13
                  ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                  : n.SERVACCNTNAME
              } / ${filterLongName(n.LI_PRODUCT_NAME!)} / Inputer : ${
                n.INPUTER_VALIDASI
              }`
          )
          .join("\n")}`
      );
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
    if (i.data.length > 0)
      messages.push(
        `<b>Order Status Pending BASO - ${i.name}</b> (<a href="tg://user?id=${
          i.id
        }">${
          i.username
        }</a>)\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
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

export async function parseMessagePBA(
  RBS: dataNCX[],
  DGS: dataNCX[],
  DPS: dataNCX[],
  DSS: dataNCX[]
) {
  const date = new Date();
  const day = date.getDate();
  const month = getMonth(date.getMonth());
  const year = date.getFullYear();
  let messages: (string | undefined)[] = [];
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
  const admins = {
    "AMAR, KANA": {
      username: "@kana_amar",
      id: "104111782",
    },
    "ARIEF RAHMAN": {
      username: "@ariefr4",
      id: "506038155",
    },
    "BAWIAS, RIVO": {
      username: "@ipongalai",
      id: "491601656",
    },
    "DJABAR TIMUMUN": {
      username: "@Djabar_BGES",
      id: "110506213",
    },
    "FAJAR, MARWAN": {
      username: "@Marwanfajar",
      id: "5206603276",
    },
    "FIKRI RAMADAN, MOH.": {
      username: "@L_Fikri",
      id: "271825149",
    },
    "HALID, FITYAN": {
      username: "@fityanhalid",
      id: "264343410",
    },
    "LIMONU, DESRIYANTI": {
      username: "@ecylimonu",
      id: "350728586",
    },
    "MUHAMMAD, MUHAMMAD": {
      username: "@Matong88",
      id: "175501176",
    },
    "NUGROHO, AGUNG": {
      username: "@agungnugroho9605",
      id: "5591009493",
    },
    "P. TOAGO, SADDAM": {
      username: "@Saddam_BKU",
      id: "221136697",
    },
    "PRAMONO RAUF, MOH.INDRA": {
      username: "@indrarauf",
      id: "117794621",
    },
    "RIESKA ALFIAH, RANIYANTI": {
      username: "@rieskaalfiah",
      id: "822091091",
    },
    "SHINTA KRISTIANTI, THERESIA": {
      username: "@thrsshinta",
      id: "1865032257",
    },
    "ZULFIKAR, ZULFIKAR": {
      username: "@AMzulfikar",
      id: "755954432",
    },
  };
  const inputers = {
    KARINA: {
      username: "@karinaspoliyama",
      id: "5200640067",
    },
    MAGFIRAH: {
      username: "@Magfirha",
      id: "116744785",
    },
    NOVITA: {
      username: "@novitazf",
      id: "1008894420",
    },
    SIFA: {
      username: "@Silfa_BGES",
      id: "107580671",
    },
    WAWAN: {
      username: "@Andiwawan",
      id: "5033717404",
    },
    YANTO: {
      username: "@MohNuryanto",
      id: "97404704",
    },
    YUNI: {
      username: "@yuniakadji",
      id: "450302218",
    },
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

  const rest =
    DPS.length + DSS.length + RBS.length > 0
      ? `<b>Order Status PBA</b> - DPS, DSS & RBS\n<i>Update : ${day} ${month} ${year}</i>\n\n${DPS.map(
          (n) =>
            `🔴 ${n.ORDER_ID} / ${Abbr[n.ORDER_SUBTYPE]} / ${
              n.SERVACCNTNAME?.length! > 13
                ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                : n.SERVACCNTNAME
            } / ${filterLongName(
              n.LI_PRODUCT_NAME!
            )} / AM : <a href="tg://user?id=${admins[n.AM_VALIDASI].id}">${
              admins[n.AM_VALIDASI].username
            }</a> / INPUTER : <a href="tg://user?id=${
              inputers[n.INPUTER_VALIDASI].id
            }">${inputers[n.INPUTER_VALIDASI].username}</a>`
        ).join("\n")}${DSS.length > 0 ? "\n" : ""}${DSS.map(
          (n) =>
            `🔴 ${n.ORDER_ID} / ${Abbr[n.ORDER_SUBTYPE]} / ${
              n.SERVACCNTNAME?.length! > 13
                ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                : n.SERVACCNTNAME
            } / ${filterLongName(
              n.LI_PRODUCT_NAME!
            )} / AM : <a href="tg://user?id=${admins[n.AM_VALIDASI].id}">${
              admins[n.AM_VALIDASI].username
            }</a> / INPUTER : <a href="tg://user?id=${
              inputers[n.INPUTER_VALIDASI].id
            }">${inputers[n.INPUTER_VALIDASI].username}</a>`
        ).join("\n")}${RBS.length > 0 ? "\n" : ""}${RBS.map(
          (n) =>
            `🔴 ${n.ORDER_ID} / ${Abbr[n.ORDER_SUBTYPE]} / ${
              n.SERVACCNTNAME?.length! > 13
                ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                : n.SERVACCNTNAME
            } / ${filterLongName(
              n.LI_PRODUCT_NAME!
            )} / AM : <a href="tg://user?id=${admins[n.AM_VALIDASI].id}">${
              admins[n.AM_VALIDASI].username
            }</a> / INPUTER : <a href="tg://user?id=${
              inputers[n.INPUTER_VALIDASI].id
            }">${inputers[n.INPUTER_VALIDASI].username}</a>`
        ).join(
          "\n"
        )}\n\nCc : <a href="tg://user?id=5233713214">@damayantitri</a> <a href="tg://user?id=5348800291">@budipratiwi</a> <a href="tg://user?id=5563612511">@khairasyifa</a>`
      : undefined;

  const dgs =
    DGS.length > 0
      ? `<b>Order Status PBA</b> - DGS\n<i>Update : ${day} ${month} ${year}</i>\n\n${DGS.map(
          (n) =>
            `🔴 ${n.ORDER_ID} / ${Abbr[n.ORDER_SUBTYPE]} / ${
              n.SERVACCNTNAME?.length! > 13
                ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                : n.SERVACCNTNAME
            } / ${filterLongName(
              n.LI_PRODUCT_NAME!
            )} / AM : <a href="tg://user?id=${admins[n.AM_VALIDASI].id}">${
              admins[n.AM_VALIDASI].username
            }</a> / INPUTER : <a href="tg://user?id=${
              inputers[n.INPUTER_VALIDASI].id
            }">${inputers[n.INPUTER_VALIDASI].username}</a>`
        ).join("\n")}\n\nCc : <a href="tg://user?id=194252201">@Malik02</a>`
      : undefined;

  messages.push(rest, dgs);

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
      if (i.data.length > 0)
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
      if (i.data.length > 0)
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
        `<b>${i.name}</b> (<a href="tg://user?id=${i.id}">${i.username}</a>)\n- In Progress : ${i.data?.inprogress}\n- Pending Baso : ${i.data?.pending} Order\n- PBA : ${i.data?.billing} Order\n- Complete : ${i.data?.complete} Order`
    )
    .join(
      "\n\n"
    )}\n\n----------------------------\n<b>Total All</b>\n- In Progress : ${
    totalCount.inprogress
  }\n- Pending Baso : ${totalCount.pending} Order\n- PBA : ${
    totalCount.billing
  } Order\n- Complete : ${
    totalCount.complete
  } Order\n\ncc : pak <a href="tg://user?id=107034617">@aawaris</a> pak <a href="tg://user?id=21307163">@kfahmi90</a> pak <a href="tg://user?id=84620775">@raunsayGil</a>`;

  return message;
}

export async function parseMessageEDK(sortedData: AMDATA[]) {
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
  const inputers = {
    KARINA: {
      username: "@karinaspoliyama",
      id: "5200640067",
    },
    MAGFIRAH: {
      username: "@Magfirha",
      id: "116744785",
    },
    NOVITA: {
      username: "@novitazf",
      id: "1008894420",
    },
    SIFA: {
      username: "@Silfa_BGES",
      id: "107580671",
    },
    WAWAN: {
      username: "@Andiwawan",
      id: "5033717404",
    },
    YANTO: {
      username: "@MohNuryanto",
      id: "97404704",
    },
    YUNI: {
      username: "@yuniakadji",
      id: "450302218",
    },
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
    if (i.name === "MUHAMMAD, MUHAMMAD") {
      if (i.data.length > 0)
        messages.push(
          `Order Butuh Follow Up Input (MO/DO/RE)\n👤 AM : ${
            i.name.split(" ")[0]
          } (<a href="tg://user?id=${i.id}">${i.username}</a>)\n👤 Inputer : ${
            i.data[0] ? i.data[0].INPUTER_VALIDASI : "-"
          } ${
            i.data[0]
              ? `(<a href="tg://user?id=${
                  inputers[i.data[0].INPUTER_VALIDASI].id
                }">${inputers[i.data[0].INPUTER_VALIDASI].username}</a>)`
              : ""
          }\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
            .map(
              (n) =>
                `🔴 ${n.ORDER_ID} / ${
                  Abbr[n.ORDER_SUBTYPE]
                } / ...${n.AGREE_NAME?.substring(
                  n.AGREE_NAME.length - 10,
                  n.AGREE_NAME.length
                )} / ${
                  n.SERVACCNTNAME?.length! > 13
                    ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                    : n.SERVACCNTNAME
                } / ${filterLongName(n.LI_PRODUCT_NAME!)} / End Date : ${
                  n.AGREE_END_DATE
                }`
            )
            .join("\n")}`
        );
    } else {
      if (i.data.length > 0)
        messages.push(
          `Order Butuh Follow Up Input (MO/DO/RE)\n👤 AM : ${
            i.name.split(" ")[0]
          } (<a href="tg://user?id=${i.id}">${i.username}</a>)\n👤 Inputer : ${
            i.data[0] ? i.data[0].INPUTER_VALIDASI : "-"
          } ${
            i.data[0]
              ? `(<a href="tg://user?id=${
                  inputers[i.data[0].INPUTER_VALIDASI].id
                }">${inputers[i.data[0].INPUTER_VALIDASI].username}</a>)`
              : ""
          }\n<i>Update : ${day} ${month} ${year}</i>\n\n${i.data
            .map(
              (n) =>
                `🔴 ${n.ORDER_ID} / ${Abbr[n.ORDER_SUBTYPE]} / ${
                  n.AGREE_NAME
                } / ${
                  n.SERVACCNTNAME?.length! > 13
                    ? n.SERVACCNTNAME?.substring(0, 13) + "...."
                    : n.SERVACCNTNAME
                } / ${filterLongName(n.LI_PRODUCT_NAME!)} / End Date : ${
                  n.AGREE_END_DATE
                }`
            )
            .join("\n")}`
        );
    }
  });
  return { messages };
}
