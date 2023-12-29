const Tt = require("./Models/1schedule");
const { SendMail } = require("./sendmail");

async function ParticularDate() {
    const schedule = require("node-schedule");

    const getTimestampInSeconds = Math.floor(new Date().getTime() / 1000);

    var j = schedule.scheduleJob("*/1 * * * *", async function () {
        console.log("Schedule running");
        const T1 = await Tt.find();

        if (T1) {
            for (ee of T1) {
                const TimeSt = Math.floor(ee.TimeStamp / 1000); // Convert to seconds
                const Mail = ee.Email;
console.log(getTimestampInSeconds);
                if (TimeSt == getTimestampInSeconds) {
                    console.log("sending mails");
                    console.log(TimeSt);
                    
                    SendMail(Mail);
                }
            }
        }
    })
}

module.exports = {
    ParticularDate
}
