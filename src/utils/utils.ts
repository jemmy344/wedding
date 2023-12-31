import { siteMetadata } from "@/data/siteMetadata";
import moment from "moment";

// Function to pick the first words
export function pickFirstWords(hisName: string, herName: string) {
  const hisFirstWord = hisName.split(" ")[0];
  const herFirstWord = herName.split(" ")[0];
  return { hisFirstWord, herFirstWord };
}

// Function to pick the first letters
export function pickFirstLetters(hisName: string, herName: string) {
  const hisFirstLetter = hisName.charAt(0);
  const herFirstLetter = herName.charAt(0);
  return { hisFirstLetter, herFirstLetter };
}

export const getTitleFormat = (hisName: string, herName: string) => {
  const names = pickFirstWords(hisName, herName);
  return `${names.hisFirstWord} & ${names.hisFirstWord}`;
};
export const getInitials = (hisName: string, herName: string) => {
  const names = pickFirstLetters(hisName, herName);
  return `${names.hisFirstLetter}${names.herFirstLetter}`;
};

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};
export const getFirstNames = () => {
  const hisFirstName = siteMetadata.couplesDetails.hisName.split(' ')[0];
  const herFirstName = siteMetadata.couplesDetails.herName.split(' ')[0];
  return { hisFirstName, herFirstName };
}

export const daysUntil = (date: Date) => {
  const targetDate = date

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  // Convert milliseconds to days
  const daysUntil = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysUntil;
}
export const getEndOfDayTime = (date: Date) => {
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay;
};
export const hasDateElapsed = (targetDate: Date) => {
  const now = new Date();
  return targetDate < now;
}
export const getFormattedDate = (inputDate: Date) => {
  // Assuming inputDate is a valid date string or Date object
  const currentDate = moment(inputDate);
  return currentDate.format('MMMM D, YYYY');
};