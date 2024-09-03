import type { AMDATA, COUNTDATA } from "../types/data";
import type dataNCX from "../types/data";

export default async function filterDataSuspend(data: dataNCX[]) {
  const RBS = data.filter((n) => {
    return n.ORDER_SUBTYPE === "Suspend" && n.SEGMENT_VALIDASI === "RBS";
  });
  const DGS = data.filter((n) => {
    return n.ORDER_SUBTYPE === "Suspend" && n.SEGMENT_VALIDASI === "DGS";
  });
  const DPS = data.filter((n) => {
    return n.ORDER_SUBTYPE === "Suspend" && n.SEGMENT_VALIDASI === "DPS";
  });
  const DSS = data.filter((n) => {
    return n.ORDER_SUBTYPE === "Suspend" && n.SEGMENT_VALIDASI === "DSS";
  });

  return { RBS, DGS, DPS, DSS };
}

export async function filterDataResume(data: dataNCX[]) {
  const RBS = data.filter((n) => {
    return (
      n.ORDER_SUBTYPE === "Resume" &&
      n.SEGMENT_VALIDASI === "RBS" &&
      n.CHANGE_REASON_CD !== "Bad Debt"
    );
  });
  const DGS = data.filter((n) => {
    return (
      n.ORDER_SUBTYPE === "Resume" &&
      n.SEGMENT_VALIDASI === "DGS" &&
      n.CHANGE_REASON_CD !== "Bad Debt"
    );
  });
  const DPS = data.filter((n) => {
    return (
      n.ORDER_SUBTYPE === "Resume" &&
      n.SEGMENT_VALIDASI === "DPS" &&
      n.CHANGE_REASON_CD !== "Bad Debt"
    );
  });
  const DSS = data.filter((n) => {
    return (
      n.ORDER_SUBTYPE === "Resume" &&
      n.SEGMENT_VALIDASI === "DSS" &&
      n.CHANGE_REASON_CD !== "Bad Debt"
    );
  });

  return { RBS, DGS, DPS, DSS };
}

export async function filterDataPendingBASO(data: dataNCX[]) {
  const admins = [
    "AMAR, KANA",
    "ARIEF RAHMAN",
    "BAWIAS, RIVO",
    "DJABAR TIMUMUN",
    "FAJAR, MARWAN",
    "FIKRI RAMADAN, MOH.",
    "HALID, FITYAN",
    "LIMONU, DESRIYANTI",
    "MUHAMMAD, MUHAMMAD",
    "NUGROHO, AGUNG",
    "P. TOAGO, SADDAM",
    "PRAMONO RAUF, MOH.INDRA",
    "RIESKA ALFIAH, RANIYANTI",
    "SHINTA KRISTIANTI, THERESIA",
    "ZULFIKAR, ZULFIKAR",
  ];

  let dataByAM: AMDATA[] = [
    {
      name: "AMAR, KANA",
      username: "@kana_amar",
      id: "104111782",
      data: [],
    },
    {
      name: "ARIEF RAHMAN",
      username: "@ariefr4",
      id: "506038155",
      data: [],
    },
    {
      name: "BAWIAS, RIVO",
      username: "@ipongalai",
      id: "491601656",
      data: [],
    },
    {
      name: "DJABAR TIMUMUN",
      username: "@Djabar_BGES",
      id: "110506213",
      data: [],
    },
    {
      name: "FAJAR, MARWAN",
      username: "@Marwanfajar",
      id: "5206603276",
      data: [],
    },
    {
      name: "FIKRI RAMADAN, MOH.",
      username: "@L_Fikri",
      id: "271825149",
      data: [],
    },
    {
      name: "HALID, FITYAN",
      username: "@fityanhalid",
      id: "264343410",
      data: [],
    },
    {
      name: "LIMONU, DESRIYANTI",
      username: "@ecylimonu",
      id: "350728586",
      data: [],
    },
    {
      name: "MUHAMMAD, MUHAMMAD",
      username: "@Matong88",
      id: "175501176",
      data: [],
    },
    {
      name: "NUGROHO, AGUNG",
      username: "@agungnugroho9605",
      id: "5591009493",
      data: [],
    },
    {
      name: "P. TOAGO, SADDAM",
      username: "@Saddam_BKU",
      id: "221136697",
      data: [],
    },
    {
      name: "PRAMONO RAUF, MOH.INDRA",
      username: "@indrarauf",
      id: "117794621",
      data: [],
    },
    {
      name: "RIESKA ALFIAH, RANIYANTI",
      username: "@rieskaalfiah",
      id: "822091091",
      data: [],
    },
    {
      name: "SHINTA KRISTIANTI, THERESIA",
      username: "@thrsshinta",
      id: "1865032257",
      data: [],
    },
    {
      name: "ZULFIKAR, ZULFIKAR",
      username: "@AMzulfikar",
      id: "755954432",
      data: [],
    },
  ];

  admins.map((admin) => {
    let currentAM = dataByAM.filter((i) => {
      return i.name === admin;
    });
    currentAM[0].data = data.filter((n) => {
      return (
        n.LI_STATUS === "Pending BASO" &&
        n.AM_VALIDASI === admin &&
        n.ORDER_STATUS === "In Progress"
      );
    });
  });

  return { dataByAM };
}

export async function filterDataCount(data: dataNCX[]) {
  const date = new Date();
  const month =
    (date.getMonth() + 1).toString().length < 2
      ? "0" + (date.getMonth() + 1).toString()
      : date.getMonth() + 1;
  const year = date.getFullYear().toString();

  const admins = [
    "AMAR, KANA",
    "ARIEF RAHMAN",
    "BAWIAS, RIVO",
    "DJABAR TIMUMUN",
    "FAJAR, MARWAN",
    "FIKRI RAMADAN, MOH.",
    "HALID, FITYAN",
    "LIMONU, DESRIYANTI",
    "MUHAMMAD, MUHAMMAD",
    "NUGROHO, AGUNG",
    "P. TOAGO, SADDAM",
    "PRAMONO RAUF, MOH.INDRA",
    "RIESKA ALFIAH, RANIYANTI",
    "SHINTA KRISTIANTI, THERESIA",
    "ZULFIKAR, ZULFIKAR",
  ];

  let countByAM: COUNTDATA[] = [
    {
      name: "AMAR, KANA",
      username: "@kana_amar",
      id: "104111782",
    },
    {
      name: "ARIEF RAHMAN",
      username: "@ariefr4",
      id: "506038155",
    },
    {
      name: "BAWIAS, RIVO",
      username: "@ipongalai",
      id: "491601656",
    },
    {
      name: "DJABAR TIMUMUN",
      username: "@Djabar_BGES",
      id: "110506213",
    },
    {
      name: "FAJAR, MARWAN",
      username: "@Marwanfajar",
      id: "5206603276",
    },
    {
      name: "FIKRI RAMADAN, MOH.",
      username: "@L_Fikri",
      id: "271825149",
    },
    {
      name: "HALID, FITYAN",
      username: "@fityanhalid",
      id: "264343410",
    },
    {
      name: "LIMONU, DESRIYANTI",
      username: "@ecylimonu",
      id: "350728586",
    },
    {
      name: "MUHAMMAD, MUHAMMAD",
      username: "@Matong88",
      id: "175501176",
    },
    {
      name: "NUGROHO, AGUNG",
      username: "@agungnugroho9605",
      id: "5591009493",
    },
    {
      name: "P. TOAGO, SADDAM",
      username: "@Saddam_BKU",
      id: "221136697",
    },
    {
      name: "PRAMONO RAUF, MOH.INDRA",
      username: "@indrarauf",
      id: "117794621",
    },
    {
      name: "RIESKA ALFIAH, RANIYANTI",
      username: "@rieskaalfiah",
      id: "822091091",
    },
    {
      name: "SHINTA KRISTIANTI, THERESIA",
      username: "@thrsshinta",
      id: "1865032257",
    },
    {
      name: "ZULFIKAR, ZULFIKAR",
      username: "@AMzulfikar",
      id: "755954432",
    },
  ];

  let totalCount = {
    pending: 0,
    billing: 0,
    complete: 0
  }

  admins.map((admin) => {
    let currentAM = countByAM.filter((i) => {
      return i.name === admin;
    });
    const pending = data.filter((n) => {
      return (
        n.LI_STATUS === "Pending BASO" &&
        n.AM_VALIDASI === admin &&
        n.ORDER_STATUS === "In Progress"
      );
    }).length;
    const billing = data.filter((n) => {
      return (
        n.LI_STATUS === "Pending Billing Approval" && n.AM_VALIDASI === admin
      );
    }).length;
    const complete = data.filter((n) => {
      return (
        n.LI_STATUS === "Complete" &&
        n.AM_VALIDASI === admin &&
        n.BULAN_BC === `${month}-${year}`
      );
    }).length;

    currentAM[0].data = {
      pending,
      billing,
      complete,
    };
  });

  countByAM.map((n)=>{
    totalCount.billing += n.data?.billing!
    totalCount.complete += n.data?.complete!
    totalCount.pending += n.data?.pending!
  })

  return { countByAM, totalCount };
}
