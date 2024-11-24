import React, { useEffect } from "react";
import { Chart } from "chart.js";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/statistics.css';

const Statistics = () => {
  useEffect(() => {
    // Initialize Chart
    const ctx = document.getElementById("incidentChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Physical Abuse", "Sexual Harassment", "Domestic Violence", "Emotional Abuse", "Economic Abuse"],
        datasets: [{
          label: "Reported Incidents by Type",
          data: [450, 290, 380, 220, 180],
          backgroundColor: [
            "rgba(168, 85, 247, 0.5)",
            "rgba(107, 33, 168, 0.5)",
            "rgba(216, 180, 254, 0.5)",
            "rgba(147, 51, 234, 0.5)",
            "rgba(192, 132, 252, 0.5)",
          ],
          borderColor: [
            "rgba(168, 85, 247, 1)",
            "rgba(107, 33, 168, 1)",
            "rgba(216, 180, 254, 1)",
            "rgba(147, 51, 234, 1)",
            "rgba(192, 132, 252, 1)",
          ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Initialize Map
    const map = L.map("kenyaMap").setView([-0.023559, 37.906193], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 10,
      minZoom: 5,
    }).addTo(map);

    // Add Markers
    const regions = [
      {
        name: "Nairobi Region",
        coords: [-1.2921, 36.8219],
        total: 639,
      },
      {
        name: "Coast Region",
        coords: [-3.3500, 39.5833],
        total: 385,
      },
      // Add other regions here...
    ];

    regions.forEach(region => {
      L.marker(region.coords).addTo(map).bindPopup(`${region.name}: ${region.total} Incidents`);
    });
  }, []);

  return (
    <section className="statistics-page">
      <h1 className="section-title">GBV Statistics Dashboard</h1>
      <div className="stats-dashboard">
        <div className="stats-grid">
          <div className="stat-card">
            <i className="fas fa-file-alt"></i>
            <h3>1,234</h3>
            <p>Total Reports</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-check-circle"></i>
            <h3>856</h3>
            <p>Cases Resolved</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-chart-line"></i>
            <h3>89%</h3>
            <p>Response Rate</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>47</h3>
            <p>Counties Covered</p>
          </div>
        </div>
        <div className="chart-section">
          <h2>Incident Types Distribution</h2>
          <canvas id="incidentChart"></canvas>
        </div>
        <div className="map-section">
          <h2>Geographic Distribution</h2>
          <div id="kenyaMap" style={{ height: "400px" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
