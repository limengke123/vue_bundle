/**
 * Created by li on 2018/2/7 9:36.
 */
const timeFormat = (date = new Date()) => {
    if(!(date instanceof Date)){
        if(typeof date === 'string'){
            date = new Date(date)
            if(date.toString() === "Invalid Date"){
                throw "string you passed into this function is not a valid time"
            }
        } else {
            throw "timeFormat need string or Date params"
        }
    }
    console.log(date)
    const [year,month,days,hours,minutes,seconds] = [date.getFullYear(),date.getMonth() + 1,date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds()]
    return `${year}年${month}月${days}日 ${hours}:${minutes}:${seconds}`
}

export {
    timeFormat
}