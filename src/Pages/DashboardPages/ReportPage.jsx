// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Grid, Typography, Paper } from '@mui/material';
// import { BarChart, PieChart } from '@mui/x-charts';
// import { pieArcLabelClasses } from '@mui/x-charts/PieChart';
// import '../../styles/ReportPage.css'; // Import the CSS file

// // Pie chart data
// const pieData = [
//   { id: 0, value: 48, label: 'Banana Peels', color: '#FFDE59' },
//   { id: 1, value: 22, label: 'Minion Blue', color: '#4169E1' },
//   { id: 2, value: 15, label: "Gru's Purple", color: '#800080' },
//   { id: 3, value: 15, label: 'Evil Red', color: '#FF0000' },
// ];

// const valueFormatter = (value) => `${value}%`;

// function ReportPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   return (
//     <Container maxWidth="lg" className="report-container">
//       <Typography
//         variant="h4"
//         gutterBottom
//         className="report-title"
//       >
//         Minion Reports
//       </Typography>

//       <Grid container spacing={4}>
//         {/* Pie Chart Section */}
//         <Grid item xs={12} md={6}>
//           <Paper className="report-paper">
//             <Typography variant="h6" className="chart-title">
//               Minion Color Distribution
//             </Typography>
//             <PieChart
//               width={400}
//               height={200}
//               series={[
//                 {
//                   data: pieData,
//                   arcLabel: (item) => `${item.value}%`,
//                   arcLabelMinAngle: 35,
//                   arcLabelRadius: '60%',
//                   valueFormatter,
//                 },
//               ]}
//               sx={{
//                 [`& .${pieArcLabelClasses.root}`]: {
//                   fontWeight: 'bold',
//                   fill: '#5D5D5D',
//                 },
//               }}
//             />
//             <Typography className="chart-description">
//               The majority of Minions prefer Banana Peels (48%), followed by Minion Blue uniforms (22%). Evil Red and Gru's Purple are equally unpopular at 15% each.
//             </Typography>
//           </Paper>
//         </Grid>

//         {/* Bar Chart Section */}
//         <Grid item xs={12} md={6}>
//           <Paper className="report-paper">
//             <Typography variant="h6" className="chart-title">
//               Minion Banana Activities
//             </Typography>
//             <BarChart
//               height={200}
//               series={[
//                 { data: [35, 44, 24, 34], color: '#FFDE59' },
//                 { data: [51, 6, 49, 30], color: '#4169E1' },
//                 { data: [15, 25, 30, 50], color: '#32CD32' },
//                 { data: [60, 50, 15, 25], color: '#FF6347' }
//               ]}
//               xAxis={[{
//                 data: ['Q1', 'Q2', 'Q3', 'Q4'],
//                 scaleType: 'band',
//               }]}
//             />
//             <Typography className="chart-description">
//               Q1 showed the highest activity with Evil Red operations reaching 60%. Q2 had a dramatic drop in Blue Minion participation (only 6%), while Q4 saw the highest group effort across all colors.
//             </Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default ReportPage;

import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const ReportsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reports & Analytics
      </Typography>

      <Grid container spacing={3}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Bar Chart
            </Typography>
            <BarChart
              xAxis={[{ data: ["Group A", "Group B", "Group C"] }]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              height={300}
            />
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Pie Chart
            </Typography>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "Series A" },
                    { id: 1, value: 15, label: "Series B" },
                    { id: 2, value: 20, label: "Series C" },
                  ],
                },
              ]}
              width={300}
              height={300}
            />
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              height={300}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReportsPage;
