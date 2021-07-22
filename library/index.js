/**
 * @description 格式化时间戳
 * 
 * @param {Date|Number} [date] 时间对象或时间戳
 * @param {String} [format='Y-M-D'] 目标格式   Y:年  M:月   D:日   h:小时   i:分   s:秒   'Y-M-D'=>'2020-01-01' 
 * 
 * @returns {String}
 */
export const formatTime = (date, format = 'Y-M-D') => {
    let result = '';

    switch (typeof date) {
        case 'undefined':
            date = new Date();
            break;

        case 'number':
            date = new Date(date);
            break;

        case 'object':
            if (date === null) {
                date = new Date();
            }
            break;

        default:
            throw new Error('date类型错误');
    }

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    [year, month, day, hour, minute, second] = [year, month, day, hour, minute, second].map(formatNumber);


    result = format.replace(/(Y)|(M)|(D)|(h)|(i)|(s)/g, (match) => {
        let result = '';
        switch (match) {
            case 'Y':
                result = year;
                break;

            case 'M':
                result = month;

                break;

            case 'D':
                result = day;

                break;

            case 'h':
                result = hour;

                break;

            case 'i':
                result = minute;

                break;

            case 's':
                result = second;

                break;
        }

        return result;
    });

    return result;
}

export const formatNumber = n => {
    n = '' + n;
    return n[1] ? n : '0' + n;
}