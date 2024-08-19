import { format } from "date-fns";

export const formatDate = (date: Date): string => {
  const postYear: number = date.getFullYear();
  const currentYear: number = new Date().getFullYear();

  if (postYear === currentYear) {
    return format(date, "dd MMM");
  } else {
    return format(date, "dd MMM yyyy");
  }
};

export const formatNumber = (number: number) => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`.replace(/\.0$/, "");
  } else if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}K`.replace(/\.0$/, "");
  } else {
    return number.toString();
  }
};
