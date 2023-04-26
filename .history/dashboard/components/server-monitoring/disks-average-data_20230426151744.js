const memory_data = {
  labels: ['9:45', '10:00', '10:15', '10:30', '10:45', '11:00', '11:15'],
  datasets: [
    {
      label: 'Disks Input Average (Kb/s) Over Time',
      data: [15, 16, 19, 21, 27, 32, 30],
      backgroundColor: 'rgb(72, 201, 176)',
      borderColor: 'rgb(72, 201, 176)',
    },
    {
      label: 'Disks Output Average (Kb/s) Over Time',
      data: [6, 6.3, 6.8, 8.9, 9.5, 14.6, 16.4],
      backgroundColor: 'rgb(165, 105, 189)',
      borderColor: 'rgb(165, 105, 189)',
    }
  ]
};

export default memory_data;
