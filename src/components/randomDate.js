export default function randomDate(start, end) {
    let myNewDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return `${myNewDate.getFullYear()}-${myNewDate.getMonth() + Number(1)}-${myNewDate.getDate()}`
    }