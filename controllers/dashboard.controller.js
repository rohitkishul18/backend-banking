const Dashboard = require("../models/dashboard.model");

exports.getDashboardData = async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne().sort({ updatedAt: -1 });
    if (!dashboard) {
      return res.status(404).json({ message: "No dashboard data found" });
    }
    res.json(dashboard);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ message: "Server error" });
  }
};
