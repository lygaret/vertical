export function monthName(monthIdx, style = 'long') {
  const date = new Date(2023, monthIdx, 1);
  return date.toLocaleDateString('en-US', { month: style });
}

export function weekdayName(dayIndex, style = 'long') {
  // jan 1, 2023 was a sunday, so adding index gives us a valid weekday
  const date = new Date(2023, 0, 1 + dayIndex);
  return date.toLocaleDateString('en-US', { weekday: style });
}

export const YearOptions = [
  { label: '2024', value: 2024 },
  { label: '2025', value: 2025 },
  { label: '2026', value: 2026 },
  { label: '2027', value: 2027 },
  { label: '2028', value: 2028 },
  { label: '2029', value: 2029 },
  { label: '2030', value: 2030 },
];

export const MonthOptions = [];
for (let i = 0; i < 12; i++) {
  MonthOptions.push({ label: monthName(i), value: i });
}
