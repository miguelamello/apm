
const space_data = {
  labels: ['2', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15'],
  datasets: [
    {
      label: 'Storage Read Average (Kb/s) Over Time',
      data: [15, 16, 19, 21, 27, 32, 30],
      backgroundColor: 'rgb(72, 201, 176)',
      borderColor: 'rgb(72, 201, 176)',
    },
    {
      label: 'Storage Write Average (Kb/s) Over Time',
      data: [6, 6.3, 6.8, 8.9, 9.5, 14.6, 16.4],
      backgroundColor: 'rgb(236, 112, 99)',
      borderColor: 'rgb(236, 112, 99)',
    }
  ]
};

export default space_data;
