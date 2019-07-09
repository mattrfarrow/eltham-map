const getTimeAsString = (date) => {
    if(!date) return "";
    const minutes = date.getMinutes() && date.getMinutes() !== 0
        ? ":" + date.getMinutes()
        : ":00";

    if(date.getHours()>12) {
        return (date.getHours()-12) + minutes + "pm";
    } else if (date.getHours() === 12) {
        return date.getHours() + minutes + "pm";
    } else {
        return date.getHours() + minutes + "am";
    }
};

module.exports = getTimeAsString;