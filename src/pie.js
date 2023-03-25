// import React, { useEffect, useRef } from 'react';
// import { Chart, Doughnut } from 'chart.js';


// const PieChart = ({ data }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = chartRef.current.getContext('2d');

//     new Chart(chart, {
//       type: 'doughnut',
//       data: {
//         labels: data.labels,
//         datasets: [
//           {
//             data: data.values,
//             backgroundColor: data.colors,
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         legend: {
//           position: 'bottom',
//         },
//       },
//     });
//   }, [data]);

//   return (
//     <div className='pie'>
//         ho
//       <canvas ref={chartRef} />
//     </div>
//   );
// };

// export default PieChart;
