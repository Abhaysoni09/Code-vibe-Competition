const ctx = document.getElementById('carbonChart').getContext('2d');

const carbonChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Site A', 'Site B', 'Site C', 'Site D', 'Site E', 'Site F'],
    datasets: [{
      label: 'Complete Projects',
      data: [549, 875, 508, 881, 269, 607],
      backgroundColor: '#5a2a2a'
    },
    {
      label: 'Estimates',
      data: [278, 617, 191, 538, 82, 528],
      backgroundColor: '#a96d6d'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Embodied carbon intensity (kgCO₂e/m²)'
        },
        ticks: {
          stepSize: 200
        }
      }
    },
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 500,
            yMax: 500,
            borderColor: '#888',
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'Target 2030'
            }
          },
          line2: {
            type: 'line',
            yMin: 600,
            yMax: 600,
            borderColor: '#444',
            borderWidth: 2,
            label: {
              enabled: true,
              content: 'Target 2025'
            }
          }
        }
      }
    }
  }
});
