import type { month } from "../types/data";

export function getMonth(i: number) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return months[i]
}

export function getMonthIndex(i: month) {
  const months = {
    "JAN":1,
    "FEB":2,
    "MAR":3,
    "APR":4,
    "MAY":5,
    "JUN":6,
    "JUL":7,
    "AUG":8,
    "SEP":9,
    "OCT":10,
    "NOV":11,
    "DEC":12,
  };
  return months[i]
}

export function sleep (time:number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

