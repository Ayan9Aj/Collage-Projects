# GrandStay - Multi-Hotel Booking Platform

> **BCA Final Year College Project**  
> **Status:** Stage 1 (Foundation & Design System) &amp; Stage 2 (Customer Homepage Implementation) Completed  

---

## 1. Project Overview

**GrandStay** is a commercial-grade, multi-hotel booking web platform. The platform is designed for travelers to discover premier hotels and resorts, compare room categories and prices, reserve accommodation, customize their stay with sightseeing tour packages, and manage bookings.

This project is structured for academic evaluation as a Bachelor of Computer Applications (BCA) capstone project, demonstrating professional frontend architecture, UI/UX design tokens, and modular React programming.

---

## 2. Technology Stack

### Current Frontend Stack (Stages 1 & 2)
- **Library:** React 19 (Functional Components + Hooks)
- **Language:** JavaScript & JSX *(pure JS, no TypeScript)*
- **Styling:** Vanilla CSS with Design System Tokens (`variables.css` + `global.css`)
- **Icons:** Lightweight, inline SVGs *(zero external icon library bloat, 100% offline support)*
- **Build Tool & Dev Server:** Vite 8
- **Linter:** Oxlint

### Planned Future Stack (Upcoming Stages)
- **Routing:** `react-router-dom` *(multi-page routes in Stages 3 & 4)*
- **Backend API:** Python, Django & Django REST Framework (DRF)
- **Database:** MySQL

---

## 3. Project Folder Structure

```
frontend/
├── public/                     # Static public assets & favicon
│   └── favicon.svg
├── src/
│   ├── assets/                 # Brand images & artwork
│   ├── components/             # Reusable UI component library
│   │   ├── common/
│   │   │   ├── Badge/          # Rating & status pills (sm, md, variants)
│   │   │   ├── Button/         # Primary (Navy), Accent (Gold), Outline, Text
│   │   │   ├── Card/           # Base card container with elevation
│   │   │   ├── EmptyState/     # Polite fallback for empty searches/bookings
│   │   │   ├── ErrorMessage/   # Accessible error alerts with retry action
│   │   │   ├── HotelCard/      # Commercial hotel card with rating, tags, pricing
│   │   │   ├── Input/          # Accessible text, date, and select inputs
│   │   │   ├── LoadingState/   # Animated luxury spinner & card skeleton shimmers
│   │   │   └── Icons.jsx       # Handcrafted SVG icons (Star, MapPin, Wifi, etc.)
│   │   ├── home/               # Homepage domain components (Stage 2)
│   │   │   ├── HeroSection/    # Hero banner & working hotel search form
│   │   │   ├── DestinationsSection/ # Popular Indian destinations grid
│   │   │   ├── FeaturedHotelsSection/ # Filterable hotel listings & sorting
│   │   │   ├── ToursSection/   # Optional sightseeing tour packages preview
│   │   │   ├── OffersSection/  # Deals, coupons & copy code interaction
│   │   │   ├── TrustSection/   # Value propositions & service highlights
│   │   │   ├── HotelDetailsModal/ # Full hotel & room preview modal
│   │   │   └── SignInModal/    # Prototype guest login & registration modal
│   │   └── layout/
│   │       ├── Container/      # Responsive max-width container wrapper
│   │       ├── Header/         # Sticky navigation header with mobile drawer
│   │       └── Footer/         # Footer with academic credits & sitemap
│   ├── data/                   # Mock datasets (separated from presentation)
│   │   ├── sampleHotels.js     # Luxury hotels across India with rooms & policies
│   │   ├── sampleDestinations.js # Goa, Jaipur, Udaipur, Manali, Kerala
│   │   ├── sampleTours.js      # Optional sightseeing tour packages
│   │   └── sampleOffers.js     # Promotional coupons and deals
│   ├── pages/
│   │   └── HomePage/           # Customer-facing homepage assembly
│   ├── styles/
│   │   ├── variables.css       # Central design system CSS custom properties
│   │   └── global.css          # CSS reset, typography scale & focus indicators
│   ├── App.jsx                 # Stage 2: Customer Homepage + Evaluation Switcher
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 4. How to Install and Run

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm (Node Package Manager)

### Step 1: Open the Frontend Directory
```bash
cd c:\Project-Hotel-Management\frontend
```

### Step 2: Install Dependencies (if not already installed)
```bash
npm install
```

### Step 3: Start the Development Server
```bash
npm run dev
```
*(On Windows PowerShell, if execution policy limits scripts, run: `npm.cmd run dev`)*

Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### Step 4: Run Code Checks & Build
- Run linter (oxlint):
  ```bash
  npm run lint
  ```
- Build for production (vite build):
  ```bash
  npm run build
  ```

---

## 5. What Was Implemented in Stage 2

### 1. Navigation Bar
- Working navigation links to `#hotels`, `#destinations`, `#tours`, and `#offers` using smooth scrolling.
- "Sign In" button opens a dedicated prototype authentication modal dialog.
- "Book a Stay" scrolls directly to the search bar.
- Fully responsive mobile drawer menu.

### 2. Hero Section & Working Search Form
- Search form supporting: Destination, Check-in date, Check-out date, and Guests.
- **Form Validation:** Validates required fields and strictly enforces that Check-out date is later than Check-in date with an accessible inline error alert.
- Submitting filters the hotel catalog and scrolls to the results.
- Quick filter shortcut pills for popular cities (Goa, Jaipur, Udaipur, Manali, Kerala).

### 3. Popular Destinations (India)
- Cards for **Goa, Jaipur, Udaipur, Manali, and Kerala** with high-resolution imagery and starting rates.
- Selecting any destination card automatically updates the search form and filters the hotel list.

### 4. Featured Hotels & Hotel Details Modal
- Reuses the Stage 1 `HotelCard` component.
- Interactive wishlist heart toggle with instant toast notification.
- Destination filtering tabs ("All Stays", "Goa", "Jaipur", "Udaipur", "Manali", "Kerala") and sorting dropdown (Recommended, Rating, Price).
- Clicking **"View Details"** opens a comprehensive `HotelDetailsModal` with:
  - High-res photo & badges
  - Star rating & verified reviews
  - Amenity tags
  - Room categories (Deluxe, Suite, Villa) with prices
  - Check-in, check-out, and cancellation policies
  - "Book This Stay" button with reservation feedback

### 5. Tour Packages Preview
- Showcases optional sightseeing packages (Goa Heritage & Spices, Udaipur Sunset Cruise, Manali Snow Point 4x4, Alleppey Houseboat).
- Displays duration, included transport, guide, meals, and pricing type (per person vs per group).
- Clarifies that tours are **optional add-ons**, not mandatory.

### 6. Deals & Offers
- Promotional coupon codes (`EARLYBIRD20`, `ROYALSTAY`, `MONSOON15`).
- Interactive **"Copy"** button with clipboard feedback.
- Clearly labeled as demonstration data for project evaluation.

### 7. Trust & Service Highlights
- 4 pillars: Verified Properties, Flexible Payment Architecture, Dedicated Guest Assistance, Curated Local Experiences.
- Explicit note on backend readiness.

### 8. Evaluation Switcher (Top Bar)
- Allows college examiners to toggle between the **Customer Homepage (Stage 2)** and the **Design System Tokens & Component Library (Stage 1)**.

---

## 6. Remaining Limitations (To Be Addressed in Future Stages)

1. **Backend Integration:** No live Python/Django REST API endpoints yet. Data is stored in mock JavaScript modules (`src/data/`).
2. **Database:** MySQL database is not yet connected.
3. **Authentication:** The Sign-In modal is a frontend prototype; user credentials are not yet validated against a database.
4. **Payments:** No actual payment gateway (Razorpay/Stripe) is active.
5. **Multi-Page Routing:** Stage 2 uses section navigation; full page routing (`react-router-dom`) will be introduced in Stages 3 & 4.
