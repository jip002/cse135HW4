const express = require('express');
const router = express.Router();
const {Static, Performance, Activity, Timing} = require('../models/data');

router.get('/static', async (req, res) => {
    try {
        const staticData = await Static.find({}); 
        res.status(200).json(staticData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/performance', async (req, res) => {
    try {
        const performanceData = await Performance.find({}); 
        res.status(200).json(performanceData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/activity', async (req, res) => {
    try {
        const activityData = await Activity.find({}); 
        res.status(200).json(activityData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.post('/', async (req, res) => {
    const static = new Static({
        userAgent: req.body.staticData.userAgent,
        userLanguage: req.body.staticData.language,
        cookieEnabled: req.body.staticData.cookieEnabled,
        screenSize: {
            width: req.body.staticData.screenSize.width,
            height: req.body.staticData.screenSize.height
        },
        windowSize:{
            width: req.body.staticData.windowSize.width,
            height: req.body.staticData.windowSize.height
        },
        connection: req.body.staticData.connection
    });

    const timing = new Timing({
        name: req.body.performanceData.timing.name,
        entryType: req.body.performanceData.timing.entryType,
        startTime: req.body.performanceData.timing.startTime,
        duration: req.body.performanceData.timing.duration,
        initiatorType: req.body.performanceData.timing.initiatorType,
        nextHopProtocol: req.body.performanceData.timing.nextHopProtocol,
        renderBlockingStatus: req.body.performanceData.timing.renderBlockingStatus,
        workerStart: req.body.performanceData.timing.workerStart,
        redirectStart: req.body.performanceData.timing.redirectStart,
        redirectEnd: req.body.performanceData.timing.redirectEnd,
        fetchStart: req.body.performanceData.timing.fetchStart,
        domainLookupStart: req.body.performanceData.timing.domainLookupStart,
        domainLookupEnd: req.body.performanceData.timing.domainLookupEnd,
        connectStart: req.body.performanceData.timing.connectStart,
        secureConnectionStart: req.body.performanceData.timing.secureConnectionStart,
        connectEnd: req.body.performanceData.timing.connectEnd,
        requestStart: req.body.performanceData.timing.requestStart,
        responseStart: req.body.performanceData.timing.responseStart,
        responseEnd: req.body.performanceData.timing.responseEnd,
        transferSize: req.body.performanceData.timing.transferSize,
        encodedBodySize: req.body.performanceData.timing.encodedBodySize,
        decodedBodySize: req.body.performanceData.timing.decodedBodySize,
        responseStatus: req.body.performanceData.timing.responseStatus,
        unloadEventStart: req.body.performanceData.timing.unloadEventStart,
        unloadEventEnd: req.body.performanceData.timing.unloadEventEnd,
        domInteractive: req.body.performanceData.timing.domInteractive,
        domContentLoadedEventStart: req.body.performanceData.timing.domContentLoadedEventStart,
        domContentLoadedEventEnd: req.body.performanceData.timing.domContentLoadedEventEnd,
        domComplete: req.body.performanceData.timing.domComplete,
        loadEventStart: req.body.performanceData.timing.loadEventStart,
        loadEventEnd: req.body.performanceData.timing.loadEventEnd,
        type: req.body.performanceData.timing.type,
        redirectCount: req.body.performanceData.timing.redirectCount,
        activationStart: req.body.performanceData.timing.activationStart
    })
    const performance = new Performance({
        timing: timing,
        pageLoadStart: req.body.performanceData.pageLoadStart,
        pageLoadEnd: req.body.performanceData.pageLoadEnd,
        totalLoadTime: req.body.performanceData.totalLoadTime
    })

    const resultPerformance = await performance.save();
    const resultStatic = await static.save();
    res.status(200).json(req.body);
})

router.post('/activity', async (req, res) => {
    const activity = new Activity({
        mousePosition:{
            xCoordinate : req.body.mousePosition.xCoordinate,
            yCoordinate : req.body.mousePosition.yCoordinate
        },
        lastClick:{
            x: req.body.lastClick.x,
            y: req.body.lastClick.y,
            button: req.body.lastClick.button,
            time: req.body.lastClick.time
        },
        lastKeydown:{
            key: req.body.lastKeydown.key,
            time: req.body.lastKeydown.time
        },
        scrollPosition: req.body.scrollPosition
    })
    const resultActivity = await activity.save();
    res.status(200).json(req.body);
})

module.exports = router;