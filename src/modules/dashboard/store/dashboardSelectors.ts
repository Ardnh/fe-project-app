import { RootState } from "../../../app/store";

export const getCurrentDate = (state: RootState) => {
  const date = new Date(
    state.dashboard.currentDate.toISOString().split("T")[0],
  );

  // Cek apakah tanggal valid
  if (isNaN(date.getTime())) {
    throw new Error("Tanggal tidak valid");
  }

  // Opsi format untuk Intl.DateTimeFormat
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // Nama hari (misalnya: Kamis)
    year: "numeric", // Tahun (misalnya: 2024)
    month: "long", // Nama bulan lengkap (misalnya: Oktober)
    day: "numeric", // Hari dalam bulan (misalnya: 17)
  };

  // Format tanggal sesuai lokal Indonesia
  const formattedDate = date.toLocaleDateString("id-ID", options);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
