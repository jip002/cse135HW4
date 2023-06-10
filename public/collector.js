// collector.js
//<script src="/collector.js"></script>
// Define an object to store the collected data
let collectedData = {
    staticData: {},
    performanceData: {},
    activityData: {
      mousePosition:{
          xCoordinate : 0,
          yCoordinate : 0
      },
      lastClick:{
          x: 0,
          y: 0,
          button: 0,
          time: ""
      },
      lastKeydown:{
          key: "",
          time: ""
      },
      scrollPosition: 0
    }
  };


  // if (document.getElementById('cssCheck').offsetHeight === 0){
  //   collectedData.staticData.cssAllowed = true;
  // } else {
  //   collectedData.staticData.cssAllowed = false;
  // }

  var img = new Image();
  img.src = "https://www.wikihow.com/images/thumb/6/6d/Get-the-URL-for-Pictures-Step-4-Version-6.jpg/aid597183-v4-728px-Get-the-URL-for-Pictures-Step-4-Version-6.jpg";
  img.onload = function () {
    collectedData.staticData.imageAllowed = true;
  };
  img.onerror = function () {
    collectedData.staticData.imageAllowed = false;
  };

  collectedData.staticData.javaScriptAllowed = true;
  collectedData.staticData.userAgent = navigator.userAgent;
  collectedData.staticData.language = navigator.language;
  collectedData.staticData.cookieEnabled = navigator.cookieEnabled;
  collectedData.staticData.screenSize = {
    width: screen.width,
    height: screen.height
  };
  collectedData.staticData.windowSize = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  collectedData.staticData.connection = navigator.connection
    ? navigator.connection.effectiveType
    : "unknown";
  
  //-------Performance-Data-Collection-----------------------
  const navigationEntries = performance.getEntriesByType("navigation")[0]; // returns an array of a single object by default so we're directly getting that out.
  const dnsTime = navigationEntries.domainLookupEnd - navigationEntries.domainLookupStart;
  collectedData.performanceData.timing = navigationEntries;
  collectedData.performanceData.pageLoadStart = navigationEntries.domainLookupStart;
  collectedData.performanceData.pageLoadEnd = navigationEntries.domainLookupEnd;
  collectedData.performanceData.totalLoadTime = dnsTime;
  
  //-------Activity-Data-Collection-----------------------
  document.onerror = function (message, source, lineno, colno, error) {
    let errorData = {
        message: message,
        source: source,
        lineno: lineno,
        colno: colno,
        error: error
    };
    collectedData.errors = errorData;
  };
  
  // Function to send the collected data to the server
  const data = {
     userAgent:navigator.userAgent,
     userLanguage:"en",
     other:"3",
  }

  //const url = 'https://reporting.jip002.site/api/data';
  //const actUrl = 'https://reporting.jip002.site/api/data/activity';
  const url = 'http://localhost:3004/api/data';
  const actUrl = 'http://localhost:3004/api/data/activity';


  async function sendData() {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(collectedData)
    }).then(response=>{
      console.log(response);
    });
  };

  async function sendActivityData() {
    const res = await fetch(actUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(collectedData.activityData)
    }).then(response=>{
      console.log(response);
    });
  };

  //-------Sending-Activity-Data----------------------
  document.addEventListener("click", function(event) {
    collectedData.activityData.lastClick = {
      x: event.clientX,
      y: event.clientY,
      button: event.button,
      time: new Date()
    };
    sendActivityData();
  });

  document.addEventListener("keydown", function(event) {
    collectedData.activityData.lastKeydown = {
      key: event.key,
      time: new Date()
    };
    sendActivityData();
  });

  document.addEventListener('scroll', function() {
    lastKnownScrollPosition = window.scrollY;
    collectedData.activityData.scrollPosition = lastKnownScrollPosition;
    sendActivityData();
  });

 
  document.addEventListener("mousemove", (event)=>{
    const x = event.offsetX;
    const y = event.offsetY;
    collectedData.activityData.mousePosition = {
      xCoordinate : x,
      yCoordinate : y,
    }
    sendActivityData();
  });

  sendData();