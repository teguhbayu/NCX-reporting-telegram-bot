import type dataNCX from "../types/data";

export default async function filterData(data: dataNCX[]) {
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
