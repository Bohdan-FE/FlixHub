export function convertToHoursAndMinutes(minutes: number) {
    const hours = Math.floor(minutes / 60); // Визначаємо години (цілочисельне ділення на 60)
    const remainingMinutes = minutes % 60; // Визначаємо залишкові хвилини (остача від ділення на 60)

    return `${hours}h:${remainingMinutes}m`;
}