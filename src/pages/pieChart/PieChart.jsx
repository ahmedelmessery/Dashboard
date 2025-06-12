import { Box } from "@mui/material";
import Header from "../../components/Header";
import Pie from "./pie";

const PieChart = () => {
  // const theme = useTheme();
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </Box>
  );
};

export default PieChart;