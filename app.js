 async function loadDataAndRenderCharts() {
      const response = await fetch('data.json');
      const data = await response.json();

      const selectedUserId = "U001";
      const user = data.users.find(u => u.id === selectedUserId);

      // Profile info
      document.getElementById("userName").textContent = user.name;
      document.getElementById("userDate").textContent = `Date Hired: ${user.dateHired}`;

      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const getDailyCounts = (week) =>
        daysOfWeek.map(day => {
          const entry = data.activity.find(a => a.userId === selectedUserId && a.week === week && a.day === day);
          return entry ? entry.count : 0;
        });

      const countsLastWeek = getDailyCounts("last");
      const countsThisWeek = getDailyCounts("this");

      // Weekly Activity Chart
      new Chart(document.getElementById('weeklyActivityChart'), {
        type: 'line',
        data: {
          labels: daysOfWeek,
          datasets: [
            {
              label: 'This Week',
              data: countsThisWeek,
              borderColor: 'rgba(54, 162, 235, 0.8)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              yAxisID: 'y1',
              tension: 0.3
            },
            {
              label: 'Last Week',
              data: countsLastWeek,
              borderColor: 'rgba(255, 99, 132, 0.8)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              yAxisID: 'y2',
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: { title: { display: true, text: 'Day of the Week' } },
            y1: {
              type: 'linear',
              display: true,
              position: 'left',
              title: { display: true, text: 'This Week' }
            },
            y2: {
              type: 'linear',
              display: true,
              position: 'right',
              title: { display: true, text: 'Last Week' },
              grid: { drawOnChartArea: false }
            }
          }
        }
      });

      // Function Usage
      const functionData = data.functionUsage.filter(f => f.userId === selectedUserId);
      const functionLabels = functionData.map(f => f.function);
      const functionCounts = functionData.map(f => f.successCount);

      new Chart(document.getElementById('functionUsageChart'), {
        type: 'bar',
        data: {
          labels: functionLabels,
          datasets: [{
            label: 'Success Count',
            data: functionCounts,
            backgroundColor: 'rgba(255, 205, 86, 0.6)'
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Success Count'
              }
            }
          }
        }
      });

      // Radar Chart
      const radarLabels = Object.keys(user.characteristics);
      const radarScores = Object.values(user.characteristics);

      new Chart(document.getElementById('radarChart'), {
        type: 'radar',
        data: {
          labels: radarLabels,
          datasets: [{
            label: 'Performance',
            data: radarScores,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)'
          }]
        },
        options: {
          responsive: true,
          scales: {
            r: {
              beginAtZero: true,
              min: 0,
              max: 5,
              ticks: { stepSize: 1 }
            }
          }
        }
      });
    }

    loadDataAndRenderCharts();