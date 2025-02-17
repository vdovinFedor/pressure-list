const convertDate = (inputDate: Date | string):string => {
    let date;

    if (inputDate instanceof Date) {
        date = inputDate;
    } else if (!Number.isNaN(Date.parse(inputDate))) {
        date = new Date(inputDate);
    } else {
        throw new Error('Invalid date format. Expected a Date object or a valid ISO string.');
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};
export default convertDate;
