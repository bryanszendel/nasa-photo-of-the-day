let start = new Date(2001, 0, 1)
let end = new Date()
    
export default function randomDate(start, end) {
    let myNewDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return `${myNewDate.getFullYear()}-${myNewDate.getMonth()}-${myNewDate.getDate()}`
    }

