export const formatDate = (date: string) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year} ${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}