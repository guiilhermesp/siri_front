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
  const result: any = {};
  result.initial_date = data.initial_date;
  result.final_date = data.final_date;
  result.measure = data.measure
    ? parseInt(data.measure.id, 10) || data.measure
    : undefined;
  result.sector = data.sector
    ? parseInt(data.sector.id, 10) || data.sector
    : undefined;
  result.supplier = data.supplier
    ? parseInt(data.supplier.id, 10) || data.supplier
    : undefined;
  result.category = data.category
    ? parseInt(data.category.id, 10) || data.category
    : undefined;
  result.public_defense = data.public_defense
    ? parseInt(data.public_defense.id, 10) || data.public_defense
    : undefined;
  result.product = data.product
    ? parseInt(data.product.id, 10) || data.product
    : undefined;
  if (data.is_available) {
    result.is_available = data.is_available?.name === "Sim";
  }
  return result;
}

export function handleDate(date: any) {
  return date.replace("%2F", "/");
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

type QueryParams = {
  [key: string]: string | string[] | boolean | undefined;
};

export function generateQueryString(params: QueryParams): string {
  function flattenObject(obj: Record<string, any>, prefix = ""): string[] {
    return Object.entries(obj).flatMap(([key, value]) => {
      const newKey = prefix ? `${prefix}[${key}]` : key;

      if (value === undefined || value === "") {
        return [];
      }

      if (Array.isArray(value)) {
        return value.map((item) => `${newKey}=${encodeURIComponent(item)}`);
      }

      if (typeof value === "object" && value !== null) {
        return flattenObject(value, newKey);
      }

      // Check for specific keys and handle their encoding
      if (key === "initial_date" || key === "final_date") {
        return `${newKey}=${encodeURIComponent(value).replace(/%2F/g, "/")}`;
      }

      return `${newKey}=${encodeURIComponent(value)}`;
    });
  }

  const queryString = flattenObject(params).join("&");

  return queryString;
}
