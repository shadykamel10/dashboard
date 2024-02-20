import { Stack } from "@mui/material";
import Card from "./Card";

import { data1, data2, data3, data4 } from "./data";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { useTheme } from "@mui/material";
const Row1 = () => {
    const theme = useTheme();
  return (
    <Stack direction="row" gap={2} flexWrap={"wrap"} >
      <Card
         icon={<EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />}
        title={"12,550"}
        subtitl={"Email Sent"}
        data={data1}
        increase={"+14%"}
        scheme={"accent"}
      />
      <Card
        icon={
            <PointOfSaleIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
        title={"25,350"}
        subtitl={"Sales Amount"}
        data={data2}
        increase={"+14%"}
        scheme={"accent"}
      />
      <Card
        icon={
            <PersonAddIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
        title={'55,356'}
        subtitl={'New Clients'}
        data={data3}
        increase={"+14%"}
        scheme={"accent"}
      />
      <Card
         icon={
            <TrafficIcon
              sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
          }
        title={'75,980'}
        subtitl={'Traffic Received'}
        data={data4}
        increase={"+27%"}
        scheme={"accent"}
      />
    </Stack>
  );
};

export default Row1;
