var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "Marach", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Gain or Loss",
        data: [0, 10, 5, 3, 12, 23],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        tension: 0.3,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
