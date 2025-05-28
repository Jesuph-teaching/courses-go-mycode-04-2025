# Eventa: Event Planning & Ticketing Platform

## 🎉 **Project Overview**

Users can create public or private events (e.g., workshops, concerts, local meetups), and others can book tickets. Admin has a full overview with dashboards and stats.

---

### ✨ Key Features (User Side)

-   **Authentication** (register/login/logout)
-   Create/Edit/Delete **Events**
-   Join/book events (free or paid)
-   View events by category/date/location
-   Comment on event pages
-   Dashboard: “My Events” and “My Bookings”

---

### ✨ Admin Dashboard

-   Overview board:

    -   Total users
    -   Total events
    -   Revenue stats
    -   Top 5 most booked events

-   Manage:

    -   Users (ban/delete)
    -   Events (feature/remove)
    -   See recent signups & activity

---

### 📊 Tech Concepts Covered

| Skill                  | Description                            |
| ---------------------- | -------------------------------------- |
| Redux Toolkit          | Event list, user bookings, auth, admin |
| MongoDB relationships  | Users ↔ Events ↔ Bookings              |
| JWT Auth + Role system | User/Admin                             |
| Charts                 | Use `recharts` or `chart.js` for stats |
| REST API               | Users, Events, Bookings                |
| File Upload            | Event banners with Multer              |
| Filtering & Pagination | Events search and browse               |
| Protected Routes       | Dashboard and admin panels             |

## 🎨 **Visual Design Concepts for Eventa**

---

### 1. **Homepage (Public)**

**Goal:** Attract users, show featured events, allow discovery.

**Layout:**

```
-------------------------------------------------------
| Logo | Home | Events | Login/Register              |
-------------------------------------------------------
| 📸 [Hero image: big upcoming event banner]         |
|                                                    |
| 🔍 [Search bar: location, date, category]          |
-------------------------------------------------------
| ⭐ Featured Events                                  |
| [Event Card] [Event Card] [Event Card]             |
-------------------------------------------------------
```

---

### 2. **Event Card (Reusable Component)**

**Used in:** Homepage, event listings, admin dashboard, user dashboard.

**Design:**

```
+------------------------+
| [Thumbnail Image]      |
| 🎉 Event Title         |
| 📍 Location            |
| 📆 Date + Time         |
| 💲 Price or Free       |
| 👤 Host                |
| 📥 [Book / View Button]|
+------------------------+
```

---

### 3. **Event Detail Page**

```
-------------------------------------------------------
| [Back to Events]                                    |
-------------------------------------------------------
| 📸 Big Cover Image                                  |
| 🎉 Title        📆 Date    📍 Location             |
| 👤 Hosted by UserName                              |
-------------------------------------------------------
| 📝 Description                                      |
| 💰 Ticket Price                                     |
| 🔘 Book Now button                                  |
| 💬 Comments section (optional)                     |
-------------------------------------------------------
```

---

### 4. **User Dashboard**

```
-------------------------------------------------------
| Sidebar: [My Events] [My Bookings] [Profile]       |
-------------------------------------------------------
| 📊 Quick Stats: Booked Events, Tickets, etc.       |
| 📋 My Created Events (with Edit/Delete buttons)    |
| 📥 My Bookings (with status and date)              |
-------------------------------------------------------
```

---

### 5. **Admin Dashboard (with boards and stats)**

```
-------------------------------------------------------
| Sidebar: [Dashboard] [Users] [Events] [Stats]      |
-------------------------------------------------------
| 📊 Overview                                         |
|   - Total Users     👥                              |
|   - Total Events    🎉                              |
|   - Revenue This Month 💰                           |
|   - Top Booked Events 📈                            |
-------------------------------------------------------
| 📌 Latest Events Table (title, creator, date)       |
| 🧑‍💻 Recent Users Table (email, signup date)       |
-------------------------------------------------------
| 📈 [Charts Section] (Bookings per Day, etc.)        |
-------------------------------------------------------
```

**Tech Tip:** Use libraries like:

-   `react-chartjs-2` or `recharts` or 'd3' for graphs
-   `react-table` or `shadcn/ui` table components
-   `sonner` for alerts/notifications

---

### 6. **Create/Edit Event Form**

```
-------------------------------------------------------
| 📄 Event Details Form                              |
| Title, Description, Location, Date, Time, Price    |
| Upload Banner Image                                |
| Categories (select box)                            |
| [Save / Cancel] buttons                            |
-------------------------------------------------------
```
