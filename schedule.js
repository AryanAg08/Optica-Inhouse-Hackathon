const Tt = require("./Models/1schedule");
const { SendMail } = require("./sendmail");

async function ParticularDate() {
    const schedule = require("node-schedule");

    const getTimestamp = new Date().getTime();

    var j = schedule.scheduleJob("*/1 * * * *", async function () {
        console.log("Schedule running");
        const T1 = await Tt.find();

        if (T1) {
            for (ee of T1) {
                const TimeSt = ee.TimeStamp;
                const Mail = ee.Email;

                if (TimeSt === getTimestamp) {
                    SendMail(Mail);
                }
            }
        }
    })
}

module.exports = {
    ParticularDate
}