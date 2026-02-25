# 🌿 FoodXchange — Food Waste Exchange Portal

A Progressive Web App (PWA) connecting bulk food donors (Hotels, Weddings, Hostels) with NGOs to reduce methane emissions from food waste. Built with the **T3 Stack** — Next.js 15, TypeScript, Prisma, and Tailwind CSS.

> Every meal rescued prevents **1.5 kg of CO₂** from entering the atmosphere.

---

## ✨ Features

### 🔐 Role-Based Access Control
- **Donors** — Hotels, wedding venues, hostel mess halls
- **NGOs** — Food rescue and redistribution organizations
- Visual role picker during registration

### 🍽️ Donor Dashboard
- **Post Surplus** form — Food Type, Quantity (kg/plates), Preparation Time, Photo Upload
- Active listings with live safety status indicators
- Claimed history with QR codes for each transaction

### 📍 Real-Time NGO Feed
- **List View** — Responsive grid of available food listings
- **Map View** — Leaflet.js interactive map with **10km radius** filtering
- Geolocation-based proximity sorting via Haversine formula

### ⏱️ Dynamic Expiry System
- Custom `useExpiryTimer` React hook — 6-hour countdown from preparation time
- **Safety Status Indicators:**
  - 🟢 **Green** — More than 3 hours remaining
  - 🟡 **Yellow** — 1 to 3 hours remaining
  - 🔴 **Red** — Less than 1 hour (pulsing animation)
- Listings auto-hide when the timer reaches zero

### 🤝 Claim & Digital Handshake
- One-tap claim with real-time status update across all clients
- Unique **QR Code** generated per claim for secure pickup verification
- Full-screen QR modal for easy scanning in kitchen environments

### 📊 Impact Analytics
- Total Meals Rescued counter
- CO₂ Offset calculation (1.5 kg per meal)
- Carbon impact breakdown (production, methane, transport, water)
- Top food categories chart
- Monthly summary with success rate
- Recent claims table

### 📱 Progressive Web App
- Installable on any device via PWA manifest
- Mobile-optimized with large, high-contrast buttons
- Dark eco-themed UI with Emerald/Slate palette

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling (Emerald/Slate palette) |
| **Prisma** | Database ORM with PostgreSQL schema |
| **Supabase** | Auth + Real-time Database |
| **Leaflet.js** | Interactive map with radius filtering |
| **qrcode.react** | QR code generation for claims |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/food-waste-exchange-portal.git
cd food-waste-exchange-portal

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
DATABASE_URL="postgresql://postgres:password@localhost:5432/food_exchange"
```

> The app runs with **mock data** out of the box for demo purposes. Supabase credentials are only needed for live auth and database operations.

### Database Setup (Optional)

```bash
npx prisma db push    # Create tables in Supabase
npx prisma generate   # Generate Prisma client
```

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx ................. Landing page
│   ├── layout.tsx ............... Root layout
│   ├── globals.css .............. Global styles
│   ├── auth/login/page.tsx ...... Sign-in
│   ├── auth/register/page.tsx ... Sign-up with role picker
│   ├── donor/page.tsx ........... Donor dashboard
│   ├── donor/post/page.tsx ...... Post surplus form
│   ├── ngo/page.tsx ............. NGO feed (list + map)
│   └── analytics/page.tsx ....... Impact analytics
├── components/ .................. Reusable UI components
├── hooks/ ....................... Custom React hooks
├── lib/ ......................... Types, mock data, Supabase client
└── types/ ....................... TypeScript declarations
```

---

## 🗺️ Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, stats, features |
| `/auth/register` | Sign up with Donor/NGO role selection |
| `/auth/login` | Sign in |
| `/donor` | Donor dashboard — active listings + stats |
| `/donor/post` | Post surplus food form |
| `/ngo` | NGO feed — list view + map view toggle |
| `/analytics` | Impact analytics dashboard |

---

## 🌱 Environmental Impact

This platform helps quantify the environmental benefit of food rescue:

- **1 meal rescued** = **1.5 kg CO₂** prevented
- Sources of savings: reduced methane from landfills (35%), avoided food production (40%), saved transportation (15%), water & energy conservation (10%)

---

## 📄 License

MIT License — feel free to use, modify, and distribute.

---

Built with 💚 to fight food waste and climate change.
