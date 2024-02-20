import { Box, Paper, Stack } from "@mui/material"
import { ResponsivePie } from "@nivo/pie"
// eslint-disable-next-line react/prop-types
const Card = ({icon, title, subtitl, increase,data,scheme}) => {
  return (
    <Paper sx={{
      flexGrow: 1,
      minWidth: "280px",
      p: 1.5,
      display: "flex",
      justifyContent: "space-between",
    }}>
       <Stack sx={{direction: "column",gax: 1 ,height: "100px", width: "100px",textAlign: "center",marginTop: "10px" }}>
            
                <p>{icon}</p>
                <p>{title}</p>
                <p>{subtitl}</p>
            
       </Stack>
       <Stack sx={{alignItems:"center"}}>
                
                <Box sx={{height: "100px", width: "100px",textAlign: "center"}}>
                <ResponsivePie
        data={data}
        margin={{ top: 10 , right: 0, bottom: 10, left: 0 }}
        innerRadius={0.5}
        enableArcLinkLabels={false}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={{ scheme:scheme  }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
                </Box>
                <p>{increase}</p>
       </Stack>
      </Paper>
  )
}

export default Card
