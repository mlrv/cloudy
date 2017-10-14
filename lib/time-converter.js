// Parse unix timestamps
function timeConverter(UNIX_timestamp) {
    let timeObject = {};
    let timestamp = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    timeObject.year = timestamp.getFullYear();
    timeObject.month = months[timestamp.getMonth()];
    timeObject.date = timestamp.getDate();
    timeObject.hour = timestamp.getHours();
    return timeObject;
};

module.exports = timeConverter;