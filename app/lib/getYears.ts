export function getYears(): string[] {
    const currentYear = new Date().getFullYear();
    const startYear = 1874; // Початковий рік
    const years: string[] = [];

    for (let year = currentYear; year >= startYear; year--) {
        years.push(year.toString());
    }

    return years;
}