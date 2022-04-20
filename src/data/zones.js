const zoneList = [
    {
        "value": "AST",
        "offset": "GMT-9:00",
        "name": "Alaska Standard Time",
        "label": "Alaska Standard Time (GMT-9:00)"
    },
    {
        "value": "AGT",
        "offset": "GMT-3:00",
        "name": "Argentina Standard Time",
        "label": "Argentina Standard Time (GMT-3:00)"
    },
    {
        "value": "ACT",
        "offset": "GMT+9:30",
        "name": "Australia Central Time",
        "label": "Australia Central Time (GMT+9:30)"
    },
    {
        "value": "AET",
        "offset": "GMT+10:00",
        "name": "Australia Eastern Time",
        "label": "Australia Eastern Time (GMT+10:00)"
    },
    {
        "value": "BST",
        "offset": "GMT+6:00",
        "name": "Bangladesh Standard Time",
        "label": "Bangladesh Standard Time (GMT+6:00)"
    },
    {
        "value": "BET",
        "offset": "GMT-3:00",
        "name": "Brazil Eastern Time",
        "label": "Brazil Eastern Time (GMT-3:00)"
    },
    {
        "value": "CNT",
        "offset": "GMT-3:30",
        "name": "Canada Newfoundland Time",
        "label": "Canada Newfoundland Time (GMT-3:30)"
    },
    {
        "value": "CAT",
        "offset": "GMT-1:00",
        "name": "Central African Time",
        "label": "Central African Time (GMT-1:00)"
    },
    {
        "value": "CST",
        "offset": "GMT-6:00",
        "name": "Central Standard Time",
        "label": "Central Standard Time (GMT-6:00)"
    },
    {
        "value": "CTT",
        "offset": "GMT+8:00",
        "name": "China Taiwan Time",
        "label": "China Taiwan Time (GMT+8:00)"
    },
    {
        "value": "EAT",
        "offset": "GMT+3:00",
        "name": "Eastern African Time",
        "label": "Eastern African Time (GMT+3:00)"
    },
    {
        "value": "EET",
        "offset": "GMT+2:00",
        "name": "Eastern European Time",
        "label": "Eastern European Time (GMT+2:00)"
    },
    {
        "value": "EST5EDT",
        "offset": "GMT-5:00",
        "name": "Eastern Standard Time",
        "label": "Eastern Standard Time (GMT-5:00)",
        "short": "EST",
    },
    {
        "value": "ECT",
        "offset": "GMT+1:00",
        "name": "European Central Time",
        "label": "European Central Time (GMT+1:00)"
    },
    {
        "value": "GMT",
        "offset": "GMT",
        "name": "Greenwich Mean Time",
        "label": "Greenwich Mean Time (GMT)"
    },
    {
        "value": "HST",
        "offset": "GMT-10:00",
        "name": "Hawaii Standard Time",
        "label": "Hawaii Standard Time (GMT-10:00)"
    },
    {
        "value": "IST",
        "offset": "GMT+5:30",
        "name": "India Standard Time",
        "label": "India Standard Time (GMT+5:30)"
    },
    {
        "value": "IET",
        "offset": "GMT-5:00",
        "name": "Indiana Eastern Standard Time",
        "label": "Indiana Eastern Standard Time (GMT-5:00)"
    },
    {
        "value": "JST",
        "offset": "GMT+9:00",
        "name": "Japan Standard Time",
        "label": "Japan Standard Time (GMT+9:00)"
    },
    {
        "value": "MET",
        "offset": "GMT+3:30",
        "name": "Middle East Time",
        "label": "Middle East Time (GMT+3:30)"
    },
    {
        "value": "MIT",
        "offset": "GMT-11:00",
        "name": "Midway Islands Time",
        "label": "Midway Islands Time (GMT-11:00)"
    },
    {
        "value": "MST",
        "offset": "GMT-7:00",
        "name": "Mountain Standard Time",
        "label": "Mountain Standard Time (GMT-7:00)"
    },
    {
        "value": "NET",
        "offset": "GMT+4:00",
        "name": "Near East Time",
        "label": "Near East Time (GMT+4:00)"
    },
    {
        "value": "NST",
        "offset": "GMT+12:00",
        "name": "New Zealand Standard Time",
        "label": "New Zealand Standard Time (GMT+12:00)"
    },
    {
        "value": "PST",
        "offset": "GMT-8:00",
        "name": "Pacific Standard Time",
        "label": "Pacific Standard Time (GMT-8:00)"
    },
    {
        "value": "PLT",
        "offset": "GMT+5:00",
        "name": "Pakistan Lahore Time",
        "label": "Pakistan Lahore Time (GMT+5:00)"
    },
    {
        "value": "PNT",
        "offset": "GMT-7:00",
        "name": "Phoenix Standard Time",
        "label": "Phoenix Standard Time (GMT-7:00)"
    },
    {
        "value": "PRT",
        "offset": "GMT-4:00",
        "name": "Puerto Rico and US Virgin Islands Time",
        "label": "Puerto Rico and US Virgin Islands Time (GMT-4:00)"
    },
    {
        "value": "SST",
        "offset": "GMT+11:00",
        "name": "Solomon Standard Time",
        "label": "Solomon Standard Time (GMT+11:00)"
    },
    {
        "value": "UTC",
        "offset": "GMT",
        "name": "Universal Coordinated Time",
        "label": "Universal Coordinated Time (GMT)"
    },
    {
        "value": "VST",
        "offset": "GMT+7:00",
        "name": "Vietnam Standard Time",
        "label": "Vietnam Standard Time (GMT+7:00)"
    }
]
const zones = zoneList.reduce(
    (tz, info) => ({
        ...tz,
        [info.value]: info.label
    }),
    {}
)

export {
    zoneList,
    zones,
}
