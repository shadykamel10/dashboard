import { ResponsiveChoropleth } from '@nivo/geo'
import { Box } from "@mui/material";
import {geo} from './world'
import {useTheme} from "@mui/material"
const data = [
    {
      "id": "AFG",
      "value": 263261
    },
    {
      "id": "AGO",
      "value": 822814
    },
    {
      "id": "ALB",
      "value": 55360
    },
    {
      "id": "ARE",
      "value": 167779
    },
    {
      "id": "ARG",
      "value": 251139
    },
    {
      "id": "ARM",
      "value": 621084
    },
    {
      "id": "ATA",
      "value": 533920
    },
    {
      "id": "ATF",
      "value": 467103
    },
    {
      "id": "AUT",
      "value": 400231
    },
    {
      "id": "AZE",
      "value": 936464
    },
    {
      "id": "BDI",
      "value": 646190
    },
    {
      "id": "BEL",
      "value": 707702
    },
    {
      "id": "BEN",
      "value": 726243
    },
    {
      "id": "BFA",
      "value": 173614
    },
    {
      "id": "BGD",
      "value": 221492
    },
    {
      "id": "BGR",
      "value": 414070
    },
    {
      "id": "BHS",
      "value": 844015
    },
    {
      "id": "BIH",
      "value": 471960
    },
    {
      "id": "BLR",
      "value": 330567
    },
    {
      "id": "BLZ",
      "value": 226865
    },
    {
      "id": "BOL",
      "value": 620244
    },
    {
      "id": "BRN",
      "value": 699096
    },
    {
      "id": "BTN",
      "value": 642616
    },
    {
      "id": "BWA",
      "value": 796081
    },
    {
      "id": "CAF",
      "value": 946021
    },
    {
      "id": "CAN",
      "value": 732046
    },
    {
      "id": "CHE",
      "value": 208166
    },
    {
      "id": "CHL",
      "value": 425241
    },
    {
      "id": "CHN",
      "value": 440480
    },
    {
      "id": "CIV",
      "value": 150109
    },
    {
      "id": "CMR",
      "value": 867339
    },
    {
      "id": "COG",
      "value": 190459
    },
    {
      "id": "COL",
      "value": 312349
    },
    {
      "id": "CRI",
      "value": 310223
    },
    {
      "id": "CUB",
      "value": 623115
    },
    {
      "id": "-99",
      "value": 723620
    },
    {
      "id": "CYP",
      "value": 771147
    },
    {
      "id": "CZE",
      "value": 632989
    },
    {
      "id": "DEU",
      "value": 298434
    },
    {
      "id": "DJI",
      "value": 905303
    },
    {
      "id": "DNK",
      "value": 15891
    },
    {
      "id": "DOM",
      "value": 602004
    },
    {
      "id": "DZA",
      "value": 214902
    },
    {
      "id": "ECU",
      "value": 452249
    },
    {
      "id": "EGY",
      "value": 43105
    },
    {
      "id": "ERI",
      "value": 763301
    },
    {
      "id": "ESP",
      "value": 154634
    },
    {
      "id": "EST",
      "value": 632330
    },
    {
      "id": "ETH",
      "value": 792808
    },
    {
      "id": "FIN",
      "value": 691178
    },
    {
      "id": "FJI",
      "value": 478413
    },
    {
      "id": "FLK",
      "value": 519536
    },
    {
      "id": "FRA",
      "value": 478132
    },
    {
      "id": "GAB",
      "value": 108008
    },
    {
      "id": "GBR",
      "value": 224761
    },
    {
      "id": "GEO",
      "value": 60205
    },
    {
      "id": "GHA",
      "value": 872037
    },
    {
      "id": "GIN",
      "value": 628007
    },
    {
      "id": "GMB",
      "value": 523528
    },
    {
      "id": "GNB",
      "value": 516013
    },
    {
      "id": "GNQ",
      "value": 855688
    },
    {
      "id": "GRC",
      "value": 769808
    },
    {
      "id": "GTM",
      "value": 448658
    },
    {
      "id": "GUY",
      "value": 430598
    },
    {
      "id": "HND",
      "value": 816331
    },
    {
      "id": "HRV",
      "value": 706289
    },
    {
      "id": "HTI",
      "value": 767660
    },
    {
      "id": "HUN",
      "value": 393185
    },
    {
      "id": "IDN",
      "value": 773260
    },
    {
      "id": "IND",
      "value": 559100
    },
    {
      "id": "IRL",
      "value": 881100
    },
    {
      "id": "IRN",
      "value": 579168
    },
    {
      "id": "IRQ",
      "value": 763880
    },
    {
      "id": "ISL",
      "value": 629935
    },
    {
      "id": "ISR",
      "value": 848540
    },
    {
      "id": "ITA",
      "value": 461724
    },
    {
      "id": "JAM",
      "value": 441371
    },
    {
      "id": "JOR",
      "value": 233116
    },
    {
      "id": "JPN",
      "value": 824033
    },
    {
      "id": "KAZ",
      "value": 936677
    },
    {
      "id": "KEN",
      "value": 721238
    },
    {
      "id": "KGZ",
      "value": 481523
    },
    {
      "id": "KHM",
      "value": 140203
    },
    {
      "id": "OSA",
      "value": 981149
    },
    {
      "id": "KWT",
      "value": 307652
    },
    {
      "id": "LAO",
      "value": 143608
    },
    {
      "id": "LBN",
      "value": 789783
    },
    {
      "id": "LBR",
      "value": 556554
    },
    {
      "id": "LBY",
      "value": 458790
    },
    {
      "id": "LKA",
      "value": 937617
    },
    {
      "id": "LSO",
      "value": 99584
    },
    {
      "id": "LTU",
      "value": 569696
    },
    {
      "id": "LUX",
      "value": 576462
    },
    {
      "id": "LVA",
      "value": 768072
    },
    {
      "id": "MAR",
      "value": 635410
    },
    {
      "id": "MDA",
      "value": 282856
    },
    {
      "id": "MDG",
      "value": 466244
    },
    {
      "id": "MEX",
      "value": 267617
    },
    {
      "id": "MKD",
      "value": 41654
    },
    {
      "id": "MLI",
      "value": 226173
    },
    {
      "id": "MMR",
      "value": 639671
    },
    {
      "id": "MNE",
      "value": 484583
    },
    {
      "id": "MNG",
      "value": 745432
    },
    {
      "id": "MOZ",
      "value": 691031
    },
    {
      "id": "MRT",
      "value": 893779
    },
    {
      "id": "MWI",
      "value": 473937
    },
    {
      "id": "MYS",
      "value": 552754
    },
    {
      "id": "NAM",
      "value": 920440
    },
    {
      "id": "NCL",
      "value": 407499
    },
    {
      "id": "NER",
      "value": 709405
    },
    {
      "id": "NGA",
      "value": 803887
    },
    {
      "id": "NIC",
      "value": 490701
    },
    {
      "id": "NLD",
      "value": 838967
    },
    {
      "id": "NOR",
      "value": 291656
    },
    {
      "id": "NPL",
      "value": 922176
    },
    {
      "id": "NZL",
      "value": 262822
    },
    {
      "id": "OMN",
      "value": 985380
    },
    {
      "id": "PAK",
      "value": 373958
    },
    {
      "id": "PAN",
      "value": 670587
    },
    {
      "id": "PER",
      "value": 966025
    },
    {
      "id": "PHL",
      "value": 597350
    },
    {
      "id": "PNG",
      "value": 778035
    },
    {
      "id": "POL",
      "value": 508972
    },
    {
      "id": "PRI",
      "value": 78135
    },
    {
      "id": "PRT",
      "value": 745591
    },
    {
      "id": "PRY",
      "value": 108960
    },
    {
      "id": "QAT",
      "value": 465497
    },
    {
      "id": "ROU",
      "value": 967833
    },
    {
      "id": "RUS",
      "value": 450907
    },
    {
      "id": "RWA",
      "value": 396357
    },
    {
      "id": "ESH",
      "value": 546925
    },
    {
      "id": "SAU",
      "value": 102574
    },
    {
      "id": "SDN",
      "value": 972704
    },
    {
      "id": "SDS",
      "value": 32264
    },
    {
      "id": "SEN",
      "value": 708234
    },
    {
      "id": "SLB",
      "value": 2072
    },
    {
      "id": "SLE",
      "value": 58070
    },
    {
      "id": "SLV",
      "value": 287300
    },
    {
      "id": "ABV",
      "value": 893599
    },
    {
      "id": "SOM",
      "value": 443450
    },
    {
      "id": "SRB",
      "value": 712793
    },
    {
      "id": "SUR",
      "value": 179049
    },
    {
      "id": "SVK",
      "value": 287660
    },
    {
      "id": "SVN",
      "value": 994546
    },
    {
      "id": "SWZ",
      "value": 996496
    },
    {
      "id": "SYR",
      "value": 767171
    },
    {
      "id": "TCD",
      "value": 327466
    },
    {
      "id": "TGO",
      "value": 291045
    },
    {
      "id": "THA",
      "value": 246274
    },
    {
      "id": "TJK",
      "value": 456977
    },
    {
      "id": "TKM",
      "value": 481723
    },
    {
      "id": "TLS",
      "value": 924361
    },
    {
      "id": "TTO",
      "value": 51880
    },
    {
      "id": "TUN",
      "value": 252632
    },
    {
      "id": "TUR",
      "value": 156163
    },
    {
      "id": "TWN",
      "value": 603542
    },
    {
      "id": "TZA",
      "value": 264593
    },
    {
      "id": "UGA",
      "value": 127409
    },
    {
      "id": "UKR",
      "value": 543003
    },
    {
      "id": "URY",
      "value": 159968
    },
    {
      "id": "USA",
      "value": 787332
    },
    {
      "id": "UZB",
      "value": 762397
    },
    {
      "id": "VEN",
      "value": 997128
    },
    {
      "id": "VNM",
      "value": 115012
    },
    {
      "id": "VUT",
      "value": 482189
    },
    {
      "id": "PSE",
      "value": 252957
    },
    {
      "id": "YEM",
      "value": 780037
    },
    {
      "id": "ZAF",
      "value": 384274
    },
    {
      "id": "ZMB",
      "value": 672539
    },
    {
      "id": "ZWE",
      "value": 180473
    },
    {
      "id": "KOR",
      "value": 801198
    }
  ]
  
const Index = () => {
  const theme = useTheme()
  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveChoropleth
        data={data}
        theme={{
          // @ts-ignore
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        // @ts-ignore
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  )
}

export default Index
