export function handleTextBoolean(text: boolean) {
  return text ? "Sim" : "Não";
}

function isValidDate(dateStr: string): boolean {
  const dateObj = new Date(dateStr);
  return !isNaN(dateObj.getTime());
}

export function convertDateFormat(inputDate: string): string {
  if (isValidDate(inputDate) && typeof inputDate !== "number") {
    const dateObj = new Date(inputDate);
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear();

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;

    return `${formattedDay}/${formattedMonth}/${year}`;
  } else {
    return inputDate;
  }
}

export function handleShowObjectText(text: { name: string } | string) {
  return typeof text === "object" ? text.name : text;
}

export function filterColumns(columns: any[], remove: string[]) {
  return columns.filter((column) => !remove.includes(column.property));
}

export function extractNamesFromData(data: any[]) {
  return data.map((item) => item.name);
}

export function removeObjectFromCode(data: any) {
  const { measure, sector, supplier, category, is_available, ...rest } = data;
  return {
    ...rest,
    measure: parseInt(measure?.id, 10) || measure,
    sector: parseInt(sector?.id, 10) || sector,
    supplier: parseInt(supplier?.id, 10) || supplier,
    category: parseInt(category?.id, 10) || category,
    is_available: is_available?.name === "Sim" ? true : false,
  };
}

export function isBooleanDisplay(data: any) {
  if (typeof data === "boolean") {
    return data ? "sim" : "nao";
  } else {
    return data;
  }
}

export const is_available = [
  { name: "Sim", id: 1 },
  { name: "Não", id: 2 },
];
