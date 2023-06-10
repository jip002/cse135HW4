const mongoose = require('mongoose');

const staticSchema = mongoose.Schema(
    {   userAgent: String,
        userLanguage: String,
        cookieEnabled: Boolean,
        screenSize: {
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            }
        },
        windowSize:{
            width: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            }
        },
        connection: String
    }
);

const timingSchema = mongoose.Schema({
    name: String,
    entryType: String,
    startTime: Number,
    duration: Number,
    initiatorType: String,
    nextHopProtocol: String,
    renderBlockingStatus: String,
    workerStart: Number,
    redirectStart: Number,
    redirectEnd: Number,
    fetchStart: Number,
    domainLookupStart: Number,
    domainLookupEnd: Number,
    connectStart: Number,
    secureConnectionStart: Number,
    connectEnd: Number,
    requestStart: Number,
    responseStart: Number,
    responseEnd: Number,
    transferSize: Number,
    encodedBodySize: Number,
    decodedBodySize: Number,
    responseStatus: Number,
    unloadEventStart: Number,
    unloadEventEnd: Number,
    domInteractive: Number,
    domContentLoadedEventStart: Number,
    domContentLoadedEventEnd: Number,
    domComplete: Number,
    loadEventStart: Number,
    loadEventEnd: Number,
    type: String,
    redirectCount: Number,
    activationStart: Number
});

const performanceSchema = mongoose.Schema(
    {
        timing: timingSchema,   
        pageLoadStart: Number,
        pageLoadEnd: Number,
        totalLoadTime: Number
    }
);

const activitySchema = mongoose.Schema(
    {
        mousePosition:{
            xCoordinate : {
                type: Number,
                default: 0
            },
            yCoordinate : {
                type: Number,
                default: 0
            }
        },
        lastClick:{
            x: {
                type: Number,
                default: 0
            },
            y: {
                type: Number,
                default: 0
            },
            button: {
                type: Number,
                default: 0
            },
            time: {
                type: String,
                default: 0
            }
        },
        lastKeydown:{
            key: {
                type: String,
                default: " "
            },
            time: {
                type: String,
                default: " "
            }
        },
        scrollPosition: {
            type: Number,
            default: 0
        }
    }
);

const Static = mongoose.model('Static', staticSchema);
const Performance = mongoose.model('Performance', performanceSchema);
const Activity = mongoose.model("Activity", activitySchema);
const Timing = mongoose.model("Timing", timingSchema);

exports.Static = Static;
exports.Performance = Performance;
exports.Activity = Activity;
exports.Timing = Timing;