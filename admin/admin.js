// ========== Simple Hardcoded Admin Login ==========
const adminCreds = { username: "admin", password: "venda123" };

// Handle Admin Login
if (document.getElementById("adminLoginForm")) {
  document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("adminUsername").value;
    const pass = document.getElementById("adminPassword").value;

    if (user === adminCreds.username && pass === adminCreds.password) {
      localStorage.setItem("isAdmin", "true");
      window.location.href = "admin-dashboard.html";
    } else {
      document.getElementById("errorMessage").classList.remove("hidden");
    }
  });
}

// ========== Protect Dashboard Page ==========
if (window.location.pathname.includes("admin-dashboard.html")) {
  if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "admin-login.html";
  }

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "admin-login.html";
  });

  // Dummy Data Simulation
  const bookings = [
    { name: "John Doe", service: "Solar Installation", date: "2025-10-15", status: "Pending" },
    { name: "Mary Smith", service: "Maintenance", date: "2025-10-20", status: "Pending" }
  ];

  const users = [
    { name: "Alex Mokoena", email: "alex@vve.com", status: "Pending" },
    { name: "Lerato Baloyi", email: "lerato@vve.com", status: "Approved" }
  ];

  const messages = [
    { name: "Kabelo", email: "kabelo@site.com", message: "Inquiry about pricing." },
    { name: "Naledi", email: "naledi@site.com", message: "Can I book a home wiring service?" }
  ];

  // Render Bookings
  const bookingTable = document.getElementById("bookingTable");
  bookings.forEach((b, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-3">${b.name}</td>
      <td class="p-3">${b.service}</td>
      <td class="p-3">${b.date}</td>
      <td class="p-3">
        <select id="bookingStatus${i}" class="bg-gray-700 text-white p-1 rounded">
          <option ${b.status === "Pending" ? "selected" : ""}>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </td>
    `;
    bookingTable.appendChild(row);
  });

  // Render Users
  const userTable = document.getElementById("userTable");
  users.forEach((u, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-3">${u.name}</td>
      <td class="p-3">${u.email}</td>
      <td class="p-3">
        <select id="userStatus${i}" class="bg-gray-700 text-white p-1 rounded">
          <option ${u.status === "Pending" ? "selected" : ""}>Pending</option>
          <option>Approved</option>
          <option>Denied</option>
        </select>
      </td>
    `;
    userTable.appendChild(row);
  });

  // Render Messages
  const messageList = document.getElementById("messageList");
  messages.forEach((m) => {
    const div = document.createElement("div");
    div.classList = "bg-gray-800 p-4 rounded border border-gray-700";
    div.innerHTML = `
      <p><strong>Name:</strong> ${m.name}</p>
      <p><strong>Email:</strong> ${m.email}</p>
      <p><strong>Message:</strong> ${m.message}</p>
    `;
    messageList.appendChild(div);
  });

  // Tab switching
  const tabs = document.querySelectorAll(".tab-btn");
  const tabContent = document.querySelectorAll(".tab");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabContent.forEach(tab => tab.classList.add("hidden"));
      document.getElementById(btn.dataset.tab).classList.remove("hidden");
    });
  });

  // Default show bookings tab
  document.getElementById("bookings").classList.remove("hidden");
}
