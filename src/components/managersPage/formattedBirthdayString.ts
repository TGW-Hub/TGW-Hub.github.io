
export default function formattedBirthdayString(date: [number, number, number]) {
  const [yy, mm, dd] = date;
  return `${yy}年${mm}月${dd}日生まれ`;
}