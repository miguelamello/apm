const cpus_data = {
  labels: ['9:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15'],
  datasets: [
    {
      label: '8 CPUs Average  Over Time',
      data: [4.2, 5.7, 5.5, 6.3, 8.5, 10.8, 9.9],
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgb(75, 192, 192)',
    },
    {
      label: '8 CPUs Maximum Over Time',
      data: [6, 6.3, 6.8, 8.9, 9.5, 14.6, 16.4],
      backgroundColor: 'rgb(235, 152, 78)',
      borderColor: 'rgb(235, 152, 78)',
    }
  ]
};

export default cpus_data;
