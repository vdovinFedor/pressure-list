const parceDiaryDate = (date: string): Record<string, string> => {
    const [day, month, year] = date.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    const formattedDate = dateObj.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
    });
    const weekday = dateObj.toLocaleDateString('ru-RU', {
        weekday: 'short',
    });
    return {
        formattedDate,
        weekday,
        isoDate: dateObj.toISOString().split('T')[0],
    };
};

export default parceDiaryDate;
