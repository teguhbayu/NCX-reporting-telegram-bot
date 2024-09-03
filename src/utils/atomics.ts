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

export function sleep (time:number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

