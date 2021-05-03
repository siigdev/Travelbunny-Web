export const convertSecondsToClock = (seconds, format) => {
    seconds = Number(seconds);
    var h = ('0' + Math.floor(seconds / 3600)).slice(-2);
    var m = ('0' + Math.floor(seconds % 3600 / 60)).slice(-2);
    var s = ('0' + Math.floor(seconds % 3600 % 60)).slice(-2);
    try {
        switch(format){
            case 'MMSS':
                return `${m}:${s}`;
            case 'HHMM':
                return `${h}:${m}`; 
            case 'HHMMSS':
                return `${h}:${m}:${s}`;
            default:
                return `${h}:${m}:${s}`
            
        }
    } catch (e) {
        throw new Error({code: 400, message: "Error: Could not apply time conversion"});
    }
}

export const convertSecondsToTimestring = (seconds) => {
    seconds = Number(seconds);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 3600 % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return `${hDisplay}  ${mDisplay}  ${sDisplay}`; 
}

export const convertDateTimeToHHMM = (datetime) => {
    var date = new Date(datetime);
    var minutes = ('0'+date.getMinutes()).slice(-2);
    var hours = ('0'+date.getHours()).slice(-2);
    return `${hours}:${minutes}`
}
export const convertDateTimeToDDMMYYYY = (datetime) => {
    var date = new Date(datetime);
    var day = ('0'+date.getDate()).slice(-2);
    var month = ('0'+(date.getMonth() + 1)).slice(-2); //getMonth counting from 0
    var year = date.getFullYear();
    return `${day}-${month}-${year}`
}