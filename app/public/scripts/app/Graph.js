"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MyResponsiveBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _bar = require("@nivo/bar");

var _chord = require("@nivo/chord");

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
var MyResponsiveBar = function MyResponsiveBar() {
  return /*#__PURE__*/_react.default.createElement(_bar.ResponsiveBar, {
    data: [{
      country: "AD",
      "hot dog": 22,
      "hot dogColor": "hsl(259, 70%, 50%)",
      burger: 61,
      burgerColor: "hsl(325, 70%, 50%)",
      sandwich: 195,
      sandwichColor: "hsl(156, 70%, 50%)",
      kebab: 126,
      kebabColor: "hsl(136, 70%, 50%)",
      fries: 120,
      friesColor: "hsl(169, 70%, 50%)",
      donut: 183,
      donutColor: "hsl(54, 70%, 50%)"
    }, {
      country: "AE",
      "hot dog": 2,
      "hot dogColor": "hsl(318, 70%, 50%)",
      burger: 183,
      burgerColor: "hsl(109, 70%, 50%)",
      sandwich: 24,
      sandwichColor: "hsl(340, 70%, 50%)",
      kebab: 90,
      kebabColor: "hsl(97, 70%, 50%)",
      fries: 60,
      friesColor: "hsl(308, 70%, 50%)",
      donut: 161,
      donutColor: "hsl(142, 70%, 50%)"
    }, {
      country: "AF",
      "hot dog": 173,
      "hot dogColor": "hsl(231, 70%, 50%)",
      burger: 189,
      burgerColor: "hsl(276, 70%, 50%)",
      sandwich: 159,
      sandwichColor: "hsl(61, 70%, 50%)",
      kebab: 39,
      kebabColor: "hsl(57, 70%, 50%)",
      fries: 65,
      friesColor: "hsl(78, 70%, 50%)",
      donut: 50,
      donutColor: "hsl(259, 70%, 50%)"
    }, {
      country: "AG",
      "hot dog": 150,
      "hot dogColor": "hsl(198, 70%, 50%)",
      burger: 176,
      burgerColor: "hsl(40, 70%, 50%)",
      sandwich: 103,
      sandwichColor: "hsl(249, 70%, 50%)",
      kebab: 77,
      kebabColor: "hsl(174, 70%, 50%)",
      fries: 199,
      friesColor: "hsl(271, 70%, 50%)",
      donut: 54,
      donutColor: "hsl(266, 70%, 50%)"
    }, {
      country: "AI",
      "hot dog": 178,
      "hot dogColor": "hsl(341, 70%, 50%)",
      burger: 60,
      burgerColor: "hsl(355, 70%, 50%)",
      sandwich: 171,
      sandwichColor: "hsl(23, 70%, 50%)",
      kebab: 28,
      kebabColor: "hsl(246, 70%, 50%)",
      fries: 62,
      friesColor: "hsl(349, 70%, 50%)",
      donut: 102,
      donutColor: "hsl(357, 70%, 50%)"
    }, {
      country: "AL",
      "hot dog": 82,
      "hot dogColor": "hsl(243, 70%, 50%)",
      burger: 43,
      burgerColor: "hsl(321, 70%, 50%)",
      sandwich: 89,
      sandwichColor: "hsl(78, 70%, 50%)",
      kebab: 42,
      kebabColor: "hsl(308, 70%, 50%)",
      fries: 70,
      friesColor: "hsl(326, 70%, 50%)",
      donut: 64,
      donutColor: "hsl(39, 70%, 50%)"
    }, {
      country: "AM",
      "hot dog": 103,
      "hot dogColor": "hsl(350, 70%, 50%)",
      burger: 180,
      burgerColor: "hsl(229, 70%, 50%)",
      sandwich: 144,
      sandwichColor: "hsl(307, 70%, 50%)",
      kebab: 66,
      kebabColor: "hsl(268, 70%, 50%)",
      fries: 162,
      friesColor: "hsl(16, 70%, 50%)",
      donut: 59,
      donutColor: "hsl(101, 70%, 50%)"
    }],
    keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],
    indexBy: "country",
    margin: {
      top: 50,
      right: 130,
      bottom: 50,
      left: 60
    },
    padding: 0.3,
    colors: {
      scheme: "nivo"
    },
    defs: [{
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "#38bcb2",
      size: 4,
      padding: 1,
      stagger: true
    }, {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "#eed312",
      rotation: -45,
      lineWidth: 6,
      spacing: 10
    }],
    fill: [{
      match: {
        id: "fries"
      },
      id: "dots"
    }, {
      match: {
        id: "sandwich"
      },
      id: "lines"
    }],
    borderColor: {
      from: "color",
      modifiers: [["darker", 1.6]]
    },
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40
    },
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    labelTextColor: {
      from: "color",
      modifiers: [["darker", 1.6]]
    },
    legends: [{
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [{
        on: "hover",
        style: {
          itemOpacity: 1
        }
      }]
    }],
    animate: true,
    motionStiffness: 90,
    motionDamping: 15
  });
};

exports.MyResponsiveBar = MyResponsiveBar;

var MyResponsiveChord = function MyResponsiveChord() {
  return /*#__PURE__*/_react.default.createElement(_chord.ResponsiveChord, {
    matrix: [[223, 698, 40, 129, 187], [332, 170, 1276, 101, 366], [38, 339, 313, 432, 5], [159, 42, 284, 433, 448], [1640, 339, 854, 217, 1670]],
    keys: ["John", "Raoul", "Jane", "Marcel", "Ibrahim"],
    margin: {
      top: 60,
      right: 60,
      bottom: 90,
      left: 60
    },
    valueFormat: ".2f",
    padAngle: 0.02,
    innerRadiusRatio: 0.96,
    innerRadiusOffset: 0.02,
    arcOpacity: 1,
    arcBorderWidth: 1,
    arcBorderColor: {
      from: "color",
      modifiers: [["darker", 0.4]]
    },
    ribbonOpacity: 0.5,
    ribbonBorderWidth: 1,
    ribbonBorderColor: {
      from: "color",
      modifiers: [["darker", 0.4]]
    },
    enableLabel: true,
    label: "id",
    labelOffset: 12,
    labelRotation: -90,
    labelTextColor: {
      from: "color",
      modifiers: [["darker", 1]]
    },
    colors: {
      scheme: "nivo"
    },
    isInteractive: true,
    arcHoverOpacity: 1,
    arcHoverOthersOpacity: 0.25,
    ribbonHoverOpacity: 0.75,
    ribbonHoverOthersOpacity: 0.25,
    animate: true,
    motionStiffness: 90,
    motionDamping: 7,
    legends: [{
      anchor: "bottom",
      direction: "row",
      justify: false,
      translateX: 0,
      translateY: 70,
      itemWidth: 80,
      itemHeight: 14,
      itemsSpacing: 0,
      itemTextColor: "#999",
      itemDirection: "left-to-right",
      symbolSize: 12,
      symbolShape: "circle",
      effects: [{
        on: "hover",
        style: {
          itemTextColor: "#000"
        }
      }]
    }]
  });
};

var _default = MyResponsiveChord;
exports.default = _default;