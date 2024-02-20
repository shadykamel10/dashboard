
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from '@mui/material';
// eslint-disable-next-line react/prop-types
const Index = ({isDashboard=false}) => {
    const data = [
        {
          "id": "japan",
          "color": "hsl(341, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 79
            },
            {
              "x": "helicopter",
              "y": 138
            },
            {
              "x": "boat",
              "y": 4
            },
            {
              "x": "train",
              "y": 26
            },
            {
              "x": "subway",
              "y": 246
            },
            {
              "x": "bus",
              "y": 154
            },
            {
              "x": "car",
              "y": 203
            },
            {
              "x": "moto",
              "y": 167
            },
            {
              "x": "bicycle",
              "y": 247
            },
            {
              "x": "horse",
              "y": 143
            },
            {
              "x": "skateboard",
              "y": 30
            },
            {
              "x": "others",
              "y": 60
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(299, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 295
            },
            {
              "x": "helicopter",
              "y": 152
            },
            {
              "x": "boat",
              "y": 124
            },
            {
              "x": "train",
              "y": 275
            },
            {
              "x": "subway",
              "y": 37
            },
            {
              "x": "bus",
              "y": 274
            },
            {
              "x": "car",
              "y": 91
            },
            {
              "x": "moto",
              "y": 54
            },
            {
              "x": "bicycle",
              "y": 154
            },
            {
              "x": "horse",
              "y": 128
            },
            {
              "x": "skateboard",
              "y": 130
            },
            {
              "x": "others",
              "y": 268
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(277, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 112
            },
            {
              "x": "helicopter",
              "y": 2
            },
            {
              "x": "boat",
              "y": 257
            },
            {
              "x": "train",
              "y": 44
            },
            {
              "x": "subway",
              "y": 241
            },
            {
              "x": "bus",
              "y": 172
            },
            {
              "x": "car",
              "y": 87
            },
            {
              "x": "moto",
              "y": 74
            },
            {
              "x": "bicycle",
              "y": 257
            },
            {
              "x": "horse",
              "y": 290
            },
            {
              "x": "skateboard",
              "y": 132
            },
            {
              "x": "others",
              "y": 187
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(60, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 124
            },
            {
              "x": "helicopter",
              "y": 113
            },
            {
              "x": "boat",
              "y": 223
            },
            {
              "x": "train",
              "y": 218
            },
            {
              "x": "subway",
              "y": 145
            },
            {
              "x": "bus",
              "y": 200
            },
            {
              "x": "car",
              "y": 63
            },
            {
              "x": "moto",
              "y": 1
            },
            {
              "x": "bicycle",
              "y": 55
            },
            {
              "x": "horse",
              "y": 3
            },
            {
              "x": "skateboard",
              "y": 192
            },
            {
              "x": "others",
              "y": 90
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(140, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 104
            },
            {
              "x": "helicopter",
              "y": 266
            },
            {
              "x": "boat",
              "y": 163
            },
            {
              "x": "train",
              "y": 279
            },
            {
              "x": "subway",
              "y": 126
            },
            {
              "x": "bus",
              "y": 177
            },
            {
              "x": "car",
              "y": 297
            },
            {
              "x": "moto",
              "y": 53
            },
            {
              "x": "bicycle",
              "y": 273
            },
            {
              "x": "horse",
              "y": 90
            },
            {
              "x": "skateboard",
              "y": 137
            },
            {
              "x": "others",
              "y": 259
            }
          ]
        }
      ]
      const theme = useTheme()
  return (
    <Box sx={{ height:  isDashboard ? "280px" : "75vh", }}>
           <ResponsiveLine
           
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
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
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
