// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Grid, Paper, Typography, styled } from '@mui/material';
// import { BarChart, PieChart } from '@mui/x-charts';
// import { pieArcLabelClasses } from '@mui/x-charts/PieChart';
// import { DataGrid } from '@mui/x-data-grid';
// import { 
//   EmojiPeople as MinionsIcon, 
//   PersonAdd as NewMinionIcon, 
//   Computer as ActiveMinionIcon, 
//   AttachMoney as BananaMoneyIcon,
//   Cake as BananaIcon 
// } from '@mui/icons-material';

// // Minions-themed styling
// const MinionItem = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(3),
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: '10px',
//   height: '100px',
//   justifyContent: 'center',
//   backgroundColor: '#FFDE59',
//   color: '#5D5D5D',
//   borderRadius: '12px',
//   boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//   transition: 'transform 0.3s',
//   '&:hover': {
//     transform: 'scale(1.05)',
//   },
// }));

// const MinionPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   backgroundColor: '#F0F8FF',
//   border: '2px solid #FFDE59',
//   borderRadius: '12px',
// }));

// const valueFormatter = (value) => `${value}%`;

// function DashboardPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [navigate]);

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     { 
//       field: 'name', 
//       headerName: 'Minion Name', 
//       width: 150,
//       renderCell: (params) => (
//         <span style={{ fontWeight: 'bold', color: '#4169E1' }}>
//           {params.value}
//         </span>
//       ),
//     },
//     { 
//       field: 'action', 
//       headerName: 'Banana Action', 
//       width: 150,
//       renderCell: (params) => (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <BananaIcon style={{ marginRight: 8, color: '#FFD700' }} />
//           {params.value}
//         </div>
//       ),
//     },
//   ];

//   const rows = [
//     { id: 1, name: 'Bob', action: 'Ate banana' },
//     { id: 2, name: 'Kevin', action: 'Stole banana' },
//     { id: 3, name: 'Stuart', action: 'Shared banana' },
//     { id: 4, name: 'Dave', action: 'Ate banana' },
//     { id: 5, name: 'Jerry', action: 'Ate banana' },
//     { id: 6, name: 'Tim', action: 'Shared banana' },
//     { id: 7, name: 'Mark', action: 'Stole banana' },
//     { id: 8, name: 'Phil', action: 'Ate banana' },
//   ];

//   // Count activity occurrences
//   const activityCounts = [
//     { id: 0, value: 50, label: 'Ate banana', color: '#FFDE59' },    // 4/8
//     { id: 1, value: 25, label: 'Stole banana', color: '#FF6347' },  // 2/8
//     { id: 2, value: 25, label: 'Shared banana', color: '#32CD32' }  // 2/8
//   ];

//   return (
//     <Container maxWidth="lg" sx={{ 
//       mt: 10, 
//       mb: 4, 
//       flexGrow: 1,
//       background: 'linear-gradient(to bottom, #F0F8FF, #FFFFFF)',
//     }}>
//       <Typography 
//         variant="h4" 
//         gutterBottom 
//         sx={{ 
//           color: '#4169E1',
//           fontFamily: '"Comic Sans MS", cursive, sans-serif',
//         }}
//       >
//         Minion Command Center
//       </Typography>

//       <Grid container spacing={3}>
//         {/* Summary Cards */}
//         <Grid item xs={12} sm={6} md={3}>
//           <MinionItem>
//             <MinionsIcon sx={{ fontSize: 40, color: '#4169E1' }} />
//             <Typography variant="h6" sx={{ mt: 1 }}>Total Minions</Typography>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4169E1' }}>1,250</Typography>
//           </MinionItem>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <MinionItem>
//             <NewMinionIcon sx={{ fontSize: 40, color: '#4169E1' }} />
//             <Typography variant="h6" sx={{ mt: 1 }}>New Minions</Typography>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#32CD32' }}>+57</Typography>
//           </MinionItem>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <MinionItem>
//             <ActiveMinionIcon sx={{ fontSize: 40, color: '#4169E1' }} />
//             <Typography variant="h6" sx={{ mt: 1 }}>Active Minions</Typography>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4169E1' }}>320</Typography>
//           </MinionItem>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <MinionItem>
//             <BananaMoneyIcon sx={{ fontSize: 40, color: '#4169E1' }} />
//             <Typography variant="h6" sx={{ mt: 1 }}>Banana Revenue</Typography>
//             <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FFD700' }}>$15,800</Typography>
//           </MinionItem>
//         </Grid>

//         {/* Pie Chart moved to the right side of the summary cards */}
//         <Grid item xs={12} sm={6} md={3} marginTop={5}>
//           <MinionPaper>
//             <Typography variant="h6" sx={{ color: '#4169E1', mb: 2 }}>
//               Minion Activity Distribution
//             </Typography>
//             <PieChart
//               width={400}
//               height={200}
//               series={[{
//                 data: activityCounts,
//                 arcLabel: (item) => `${item.value}%`,
//                 arcLabelMinAngle: 35,
//                 arcLabelRadius: '60%',
//                 valueFormatter,
//               }]}
//               sx={{
//                 [`& .${pieArcLabelClasses.root}`]: {
//                   fontWeight: 'bold',
//                   fill: '#5D5D5D',
//                 },
//               }}
//             />
//           </MinionPaper>
//         </Grid>

//         {/* Bar Chart */}
//         <Grid item xs={12} md={6} marginTop={5}>
//           <MinionPaper>
//             <Typography variant="h6" sx={{ color: '#4169E1', mb: 2 }}>
//               Minion Banana Activities (Per Quarter)
//             </Typography>
//             <BarChart
//               height={200}
//               series={[
//                 { data: [1, 1, 1, 1], name: 'Ate banana', color: '#FFDE59' },
//                 { data: [1, 0, 1, 0], name: 'Stole banana', color: '#FF6347' },
//                 { data: [0, 1, 0, 1], name: 'Shared banana', color: '#32CD32' }
//               ]}
//               xAxis={[{ 
//                 data: ['Q1', 'Q2', 'Q3', 'Q4'],
//                 scaleType: 'band',
//                 label: 'Quarterly Activity'
//               }]}
//             />
//           </MinionPaper>
//         </Grid>

//         {/* Activity Table */}
//         <Grid item xs={12} marginTop={5}>
//           <MinionPaper sx={{ height: 380, width: 900 }}>
//             <Typography variant="h6" sx={{ color: '#4169E1', mb: 2 }}>
//               Minion Activities
//             </Typography>
//             <DataGrid 
//               rows={rows} 
//               columns={columns} 
//               pageSize={5}
//               sx={{
//                 borderColor: '#FFDE59',
//                 '& .MuiDataGrid-cell:hover': {
//                   color: '#4169E1',
//                 },
//                 '& .MuiDataGrid-columnHeaders': {
//                   backgroundColor: '#FFDE59',
//                   color: '#4169E1',
//                 },
//               }}
//             />
//           </MinionPaper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default DashboardPage;

import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "Auto-generated from first and last name",
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params?.row?.firstName || ""} ${params?.row?.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DashboardPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3}>
        {[
          { label: "Users", value: 9 },
          { label: "Average Age", value: "47.8" },
          { label: "New Signups", value: 320 },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="subtitle1" color="textSecondary">
                {item.label}
              </Typography>
              <Typography variant="h4">{item.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Chart Section */}
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Weekly Activity
        </Typography>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"] }]}
        />
      </Paper>

      {/* Data Grid Section */}
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          User List
        </Typography>
        <Box sx={{ minHeight: 400 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
