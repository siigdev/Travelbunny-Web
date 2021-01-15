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
        throw "Error: Could not apply time conversion";
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