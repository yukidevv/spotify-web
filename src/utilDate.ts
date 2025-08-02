/**
 * 現在日付をyyyy/MM/ddで返します
 * @param date
 * @returns
 */

export function formatDate(date = new Date()): string {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("/");
}
