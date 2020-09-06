/**
 * 日期格式化
 * @param {Date} date
 */
function convertDate(date) {

    let newDate = date.toISOString().split('T');
    let day = newDate[0];
    let newTime = newDate[1].split('.')[0];
    return day + ' ' + newTime;
}
let time = new Date();
let date = convertDate(time);
console.log(date);
