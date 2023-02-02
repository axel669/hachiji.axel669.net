import sort from "@axel669/array-sort"

const zoneList = [
    {
        "name": "Alaska Standard Time",
        "value": "AST",
        "offset": 540,
        "gmtOffset": "GMT-9:00"
    },
    {
        "name": "Argentina Standard Time",
        "value": "AGT",
        "offset": 180,
        "gmtOffset": "GMT-3:00"
    },
    {
        "name": "Australia Central Time",
        "value": "ACT",
        "offset": -510,
        "gmtOffset": "GMT+9:30"
    },
    {
        "name": "Australia Eastern Time",
        "value": "AET",
        "offset": -600,
        "gmtOffset": "GMT+10:00"
    },
    {
        "name": "Bangladesh Standard Time",
        "value": "BST",
        "offset": -360,
        "gmtOffset": "GMT+6:00"
    },
    {
        "name": "Brazil Eastern Time",
        "value": "BET",
        "offset": 180,
        "gmtOffset": "GMT-3:00"
    },
    {
        "name": "Canada Newfoundland Time",
        "value": "CNT",
        "offset": 210,
        "gmtOffset": "GMT-3:30"
    },
    {
        "name": "Central African Time",
        "value": "CAT",
        "offset": 60,
        "gmtOffset": "GMT-1:00"
    },
    {
        "name": "Central Standard Time",
        "value": "CST",
        "offset": 360,
        "gmtOffset": "GMT-6:00"
    },
    {
        "name": "China Taiwan Time",
        "value": "CTT",
        "offset": -480,
        "gmtOffset": "GMT+8:00"
    },
    {
        "name": "Eastern African Time",
        "value": "EAT",
        "offset": -180,
        "gmtOffset": "GMT+3:00"
    },
    {
        "name": "Eastern European Time",
        "value": "EET",
        "offset": -120,
        "gmtOffset": "GMT+2:00"
    },
    {
        "name": "Eastern Standard Time",
        "value": "EST5EDT",
        "offset": 300,
        "gmtOffset": "GMT-5:00"
    },
    {
        "name": "European Central Time",
        "value": "ECT",
        "offset": -60,
        "gmtOffset": "GMT+1:00"
    },
    {
        "name": "Greenwich Mean Time",
        "value": "GMT",
        "offset": 0,
        "gmtOffset": "GMT"
    },
    {
        "name": "Hawaii Standard Time",
        "value": "HST",
        "offset": 600,
        "gmtOffset": "GMT-10:00"
    },
    {
        "name": "India Standard Time",
        "value": "IST",
        "offset": -270,
        "gmtOffset": "GMT+5:30"
    },
    // {
    //     "name": "Indiana Eastern Standard Time",
    //     "value": "IET",
    //     "offset": 300,
    //     "gmtOffset": "GMT-5:00"
    // },
    {
        "name": "Japan Standard Time",
        "value": "JST",
        "offset": -540,
        "gmtOffset": "GMT+9:00"
    },
    {
        "name": "Middle East Time",
        "value": "MET",
        "offset": -150,
        "gmtOffset": "GMT+3:30"
    },
    {
        "name": "Midway Islands Time",
        "value": "MIT",
        "offset": 660,
        "gmtOffset": "GMT-11:00"
    },
    {
        "name": "Mountain Standard Time",
        "value": "MST",
        "offset": 420,
        "gmtOffset": "GMT-7:00"
    },
    {
        "name": "Near East Time",
        "value": "NET",
        "offset": -240,
        "gmtOffset": "GMT+4:00"
    },
    {
        "name": "New Zealand Standard Time",
        "value": "NST",
        "offset": -720,
        "gmtOffset": "GMT+12:00"
    },
    {
        "name": "Pacific Standard Time",
        "value": "PST",
        "offset": 480,
        "gmtOffset": "GMT-8:00"
    },
    {
        "name": "Pakistan Lahore Time",
        "value": "PLT",
        "offset": -300,
        "gmtOffset": "GMT+5:00"
    },
    // {
    //     "name": "Phoenix Standard Time",
    //     "value": "PNT",
    //     "offset": 420,
    //     "gmtOffset": "GMT-7:00"
    // },
    {
        "name": "Puerto Rico and US Virgin Islands Time",
        "value": "PRT",
        "offset": 240,
        "gmtOffset": "GMT-4:00"
    },
    {
        "name": "Solomon Standard Time",
        "value": "SST",
        "offset": -660,
        "gmtOffset": "GMT+11:00"
    },
    // {
    //     "name": "Universal Coordinated Time",
    //     "value": "UTC",
    //     "offset": 0,
    //     "gmtOffset": "GMT"
    // },
    {
        "name": "Vietnam Standard Time",
        "value": "VST",
        "offset": -420,
        "gmtOffset": "GMT+7:00"
    }
]
const zoneName = zoneList.reduce(
    (tz, info) => ({
        ...tz,
        [info.value]: info.name,
    }),
    {}
)
const info = zoneList.reduce(
    (tz, info) => ({
        ...tz,
        [info.value]: info,
    }),
    {}
)
const localOffset = new Date(2000, 1, 1).getTimezoneOffset()
const localZone = zoneList.find(
    zone => zone.offset === localOffset
)

const format = (zone) => new Intl.DateTimeFormat(
    navigator.language,
    {
        timeZone: zone,
        timeStyle: "medium",
        hourCycle: "h12",
        // hourCycle: $h12 ? "h12" : "h23",
    }
).format

const zoneNameOptions = zoneList.map(
    zone => ({
        label: zone.name,
        value: zone.value,
    })
)
const zoneGMTOptions =
    zoneList
    .map(
        zone => ({
            label: zone.gmtOffset,
            offset: zone.offset,
            value: zone.value,
        })
    )
    .sort(
        sort.map(
            zone => zone.offset,
            sort.number
        )
    )

export default {
    format,
    info,
    local: localZone,
    list: zoneList,
    name: zoneName,
    options: {
        names: zoneNameOptions,
        gmts: zoneGMTOptions,
    }
}
