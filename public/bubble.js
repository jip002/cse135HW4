fetch('http://localhost:3004/api/data/activity')
  .then(response => response.json())
  .then(data => {
for(let i = 0; i < 50; i++){
    console.log(data[i].mousePosition);
}

// INIT
// -----------------------------
// Define Module Location
zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
// Load module(s)
zingchart.loadModules('bubble-legend');

// DEFINE CHART LOCATIONS (IDS)
// -----------------------------
// Main chart render location(s)
let chartId = 'myChart';

// DOM ELEMENTS
// -----------------------------
//let controlBar = document.querySelector('[data-jsref="control-bar"]');

// CHART EVENTS
// -----------------------------

function load(p) {
  controlBar.classList.add('loaded');
}

// RENDER CHART
// -----------------------------

function renderChart() {
  // VARS
  // -----------------------------
  //let layout = layoutEl.value;
  let min = ZC._r_(1, 100);
  let max = ZC._r_(500, 50000);
  let factor1 = ZC._r_(-10, 4);
  let data1 = [];

  for(let i = 0; i < 200; i++){
    data1.push([data[i].mousePosition.xCoordinate, data[i].mousePosition.yCoordinate, 1000]);
  }

  // CHART CONFIG
  // -----------------------------
  let chartConfig = {
    type: 'bubble',
    title: {
      text: 'User Mouse Movement Position Tracking',
      align: 'left',
      fontSize: '11px',
    },
    plot: {
      decimalsSeparator: '.',
      hoverMarker: {
        visible: false,
      },
      minSize: 5,
      scaling: 'area',
      thousandsSeparator: ',',
    },
    plotarea: {
      margin: '30 140 30 30',
    },
    scaleX: {
      backgroundColor: '#55154D',
      height: '500px',
      width: '500px',
      x: '30px',
      y: '30px',
    },
    scaleY: {
      height: '500px',
      width: '500px',
      x: '30px',
      y: '30px',
    },
    scaleXN: {
      alpha: 0.4,
      blended: true,
      item: {
        fontSize: '10px',
      },
      maxItems: 10,
      offset: '25px',
      placement: 'default',
      values: '0:500:50',
    },
    scaleYN: {
      alpha: 0.4,
      blended: true,
      item: {
        fontSize: 10,
      },
      maxItems: 10,
      offset: '25px',
      placement: 'default',
      values: '0:500:50',
    },

    series: [
      {
        values: data1,
        decimals: factor1 < 0 ? -factor1 : 0,
        marker: {
          fillType: 'radial',
          backgroundColor: '#55154D #21081d',
        },
        sizingGroup: 1,
      },
    ],
  };

  zingchart.render({
    id: chartId,
    width: '600px',
    height:'500px',
    output: 'svg',
    data: chartConfig,
    modules: 'bubble-legend',
    events: {
      load: load,
    },
  });
}

// DOM EVENTS
// -----------------------------

//renderBtn.addEventListener('click', renderChart);

// RENDER CHART ON LOAD
// -----------------------------
renderChart();
  });