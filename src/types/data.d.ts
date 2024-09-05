export default interface dataNCX {
  LI_SID: string | undefined;
  ORDER_ID: string | undefined;
  AGREE_NAME: string | undefined;
  NIPNAS: string | undefined;
  CUSTACCNTNUM: string | undefined;
  CUSTACCNTNAME: string | undefined;
  BILLACCNTNAME: string | undefined;
  SERVACCNTNAME: string | undefined;
  CUST_SEGMEN: string | undefined;
  AGREE_STATUS: "Active" | "Closed" | "Expired" | undefined;
  ORDER_CREATED_DATE: string | undefined;
  LI_STATUS_DATE: string | undefined;
  BULAN_BC: string | undefined;
  AGREE_END_DATE: string | undefined;
  LI_PRODUCT_NAME: string | undefined;
  LI_BANDWIDTH: string | undefined;
  LI_MONTHLY_PRICE: string | undefined;
  LI_OTC_PRICE: string | undefined;
  ORDER_SUBTYPE:
    | "Disconnect"
    | "Modify"
    | "Modify BA"
    | "Modify Price"
    | "New Install"
    | "Renewal Agreement"
    | "Resume"
    | "Suspend";
  LI_STATUS:
    | "Complete"
    | "Failed"
    | "In Progress"
    | "Pending BASO"
    | "Pending Billing Approval";
  LI_MILESTONE:
    | "BASO STARTED"
    | "BILLING APPROVAL STARTED"
    | "FULFILL BILLING COMPLETE"
    | "FULFILL BILLING FAILED"
    | "PROVISION DESIGNED"
    | "PROVISION FAILED"
    | "PROVISION ISSUED"
    | "PROVISION START"
    | "TSQ FAILED";
  ORDER_STATUS: "Abandoned" | "Closed" | "Complete" | "Failed" | "In Progress";
  ORDER_CREATEDBY_NAME: string | undefined;
  AGREE_CREATEDBY_NAME: string | undefined;
  CHANGE_REASON_CD:
    | "Bad Debt"
    | "Customer Request"
    | "System Request"
    | undefined;
  CUST_WITEL: string | undefined;
  BILL_WITEL: string | undefined;
  SERVICE_WITEL: string | undefined;
  EDK_STATUS: string | undefined;
  SEGMENT_VALIDASI: "DGS" | "DPS" | "DSS" | "RBS";
  AM_VALIDASI:
    | "AMAR, KANA"
    | "ARIEF RAHMAN"
    | "BAWIAS, RIVO"
    | "DJABAR TIMUMUN"
    | "FAJAR, MARWAN"
    | "FIKRI RAMADAN, MOH."
    | "HALID, FITYAN"
    | "LIMONU, DESRIYANTI"
    | "MUHAMMAD, MUHAMMAD"
    | "NUGROHO, AGUNG"
    | "P. TOAGO, SADDAM"
    | "PRAMONO RAUF, MOH.INDRA"
    | "RIESKA ALFIAH, RANIYANTI"
    | "SHINTA KRISTIANTI, THERESIA"
    | "ZULFIKAR, ZULFIKAR";
  INPUTER_VALIDASI:
    | "KARINA"
    | "MAGFIRAH"
    | "NOVITA"
    | "SIFA"
    | "WAWAN"
    | "YANTO"
    | "YUNI";
}

export interface INPDATA {
  name: "KARINA" | "MAGFIRAH" | "NOVITA" | "SIFA" | "WAWAN" | "YANTO" | "YUNI";
  username: string;
  id: string;
  data: dataNCX[];
}
export interface AMDATA {
  name:
    | "AMAR, KANA"
    | "ARIEF RAHMAN"
    | "BAWIAS, RIVO"
    | "DJABAR TIMUMUN"
    | "FAJAR, MARWAN"
    | "FIKRI RAMADAN, MOH."
    | "HALID, FITYAN"
    | "LIMONU, DESRIYANTI"
    | "MUHAMMAD, MUHAMMAD"
    | "NUGROHO, AGUNG"
    | "P. TOAGO, SADDAM"
    | "PRAMONO RAUF, MOH.INDRA"
    | "RIESKA ALFIAH, RANIYANTI"
    | "SHINTA KRISTIANTI, THERESIA"
    | "ZULFIKAR, ZULFIKAR";
  username: string;
  id: string;
  data: dataNCX[];
}

export interface dataCount {
  pending: number;
  billing: number;
  complete: number;
}

export interface COUNTDATA {
  name:
    | "AMAR, KANA"
    | "ARIEF RAHMAN"
    | "BAWIAS, RIVO"
    | "DJABAR TIMUMUN"
    | "FAJAR, MARWAN"
    | "FIKRI RAMADAN, MOH."
    | "HALID, FITYAN"
    | "LIMONU, DESRIYANTI"
    | "MUHAMMAD, MUHAMMAD"
    | "NUGROHO, AGUNG"
    | "P. TOAGO, SADDAM"
    | "PRAMONO RAUF, MOH.INDRA"
    | "RIESKA ALFIAH, RANIYANTI"
    | "SHINTA KRISTIANTI, THERESIA"
    | "ZULFIKAR, ZULFIKAR";
  username: string;
  id: string;
  data?: dataCount;
}
