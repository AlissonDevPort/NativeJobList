export const formatingDate = (date: string | number | Date) => {
  const createdDate = new Date(date);

  return `${createdDate.getDate()}/${
    createdDate.getMonth() + 1
  }/${createdDate.getFullYear()}`;
};
