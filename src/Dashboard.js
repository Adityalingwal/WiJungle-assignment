import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import data from './data/eve.json';

const Dashboard = () => {
  const alerts = data.map((alert) => alert.alert);

  const categoryData = {};
  const severityData = {};

  alerts.forEach((alert) => {
    categoryData[alert.category] = (categoryData[alert.category] || 0) + 1;
    severityData[alert.severity] = (severityData[alert.severity] || 0) + 1;
  });

  const categoryChartData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        label: 'Alert Categories',
        data: Object.values(categoryData),
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#cc65fe',
          '#ffce56',
          '#2ecc71',
          '#95f9fc'
        ],
      },
    ],
  };

  const severityChartData = {
    labels: Object.keys(severityData),
    datasets: [
      {
        label: 'Severity Levels',
        data: Object.values(severityData),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56','#2ecc71','#cc65fe'],
      },
    ],
  };

  const lineChartData = {
    labels: alerts.map((_, index) => index),
    datasets: [
      {
        label: 'Alerts Over Time',
        data: alerts.map((alert) => alert.severity),
        fill: false,
        backgroundColor: '#36a2eb',
        borderColor: '#36a2eb',
      },
    ],
  };

  return (
    <div className="space-y-10 min-h-screen p-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Alert Categories</h2>
        <div className="relative w-full h-96">
          <Pie data={categoryChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
     
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Severity Levels</h2>
        <div className="relative w-full h-96">
          <Bar data={severityChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Alerts Over Time</h2>
        <div className="relative w-full h-96">
          <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
