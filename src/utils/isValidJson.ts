export const isValidJSON = (str: string) => {
  try {
    JSON.parse(str);
  } catch {
    return false;
  }

  return str;
};
