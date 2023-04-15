import { MONTHS } from "@constants/constants";

export type DateFormat = "dd/mm/yyyy" | "DD MM YYYY";
const formatDate = (date: Date, format: DateFormat) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  switch (format) {
    case "dd/mm/yyyy": {
      return `${day} ${month + 1} ${year} `;
    }
    case "DD MM YYYY": {
      return `${day} ${MONTHS[month]} ${year}`;
    }
    default:
      return date.toDateString();
  }
};

export const DateUtils = { formatDate };
