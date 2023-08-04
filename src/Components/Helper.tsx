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

export const optionsType = [
  "Portaria",
  "Ato",
  "Relatório",
  "Edital",
  "Extrato",
  "Provimento",
  "Manifestação",
  "Deliberação",
  "Resolução",
  "Licitação",
  "Contrato",
  "Errata de Publicação",
  "Dispensa de Licitação",
  "Inexigibilidade de Licitação",
  "Avisos",
  "Resultados",
  "Concursos",
  "Súmulas",
  "circular",
];
