export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((num: string): number => parseInt(num))
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

