# 🎾 PadelPlay

**PadelPlay** is a modern, premium padel court booking platform built with Next.js 16, featuring a sleek UI/UX design and seamless WhatsApp integration for instant booking confirmations.

---

## ✨ Features

### 🏟️ Court Booking System
- **Interactive Date Selector**: Horizontal scrollable date strip showing the next 14 days
- **Smart Time Slot Validation**: Automatically disables past time slots for today's date
- **Real-time Availability**: Visual feedback for available and unavailable slots
- **Customer Information**: Collect customer name for personalized bookings

### 🎨 Premium UI/UX
- **Glassmorphism Effects**: Modern, translucent design elements
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark Theme**: Eye-friendly dark mode with neon accent colors
- **Interactive Add-ons**: Selectable equipment and services with real-time price updates

### 💬 WhatsApp Integration
- **Direct Booking**: Instant redirect to WhatsApp with pre-filled booking details
- **Comprehensive Messages**: Includes customer name, court, date, time, add-ons, and total price
- **No Payment Gateway**: Simplified booking flow with payment confirmation via WhatsApp

### 🔐 Authentication (Optional)
- **Supabase Auth**: Secure user authentication with email/password
- **User Profiles**: Avatar support and personalized user menu
- **Guest Booking**: Book courts without creating an account

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Authentication**: Supabase
- **Deployment**: Vercel-ready

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd padelplay
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎯 Usage

### Booking a Court

1. **Browse Courts**: Navigate to `/courts` to view available padel courts
2. **Select a Court**: Click "Book Now" on your preferred court
3. **Enter Your Name**: Provide your full name for the booking
4. **Choose Date**: Select from the next 14 days using the horizontal date scroller
5. **Pick Time Slot**: Choose an available time (past slots are automatically disabled)
6. **Add Extras** (Optional): Select add-ons like professional rackets, ball packs, or coaching
7. **Review & Confirm**: Check your booking details and total price
8. **WhatsApp Confirmation**: Click "Confirm via WhatsApp" to send booking details to the admin

### Customizing WhatsApp Number

Update the admin WhatsApp number in `src/app/booking/[id]/page.tsx`:

```typescript
const phoneNumber = "6285975296363"; // Replace with your admin number
```

---

## 📁 Project Structure

```
padelplay/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── booking/[id]/      # Dynamic booking page
│   │   ├── courts/            # Courts listing page
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable React components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Features.tsx       # Features showcase
│   │   ├── HowItWorks.tsx     # Process explanation
│   │   ├── FAQ.tsx            # Frequently asked questions
│   │   └── Footer.tsx         # Footer component
│   ├── context/               # React Context providers
│   │   └── AuthContext.tsx    # Authentication context
│   └── lib/                   # Utility functions
│       └── supabase.ts        # Supabase client
├── public/                    # Static assets
│   └── image/                 # Court images
├── .env.local                 # Environment variables (not in repo)
└── package.json               # Dependencies
```

---

## 🎨 Design Philosophy

PadelPlay follows a **premium, sport-focused design** with:
- **Neon Green (#DFFF00)** as the primary accent color
- **Deep Navy (#050A18)** as the background
- **Glassmorphism** for modern, translucent UI elements
- **Bold, italic typography** for a dynamic, energetic feel
- **Micro-animations** for enhanced user engagement

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Key Technologies

- **Next.js 16**: Latest features including Turbopack for faster builds
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling with custom configuration
- **Framer Motion**: Declarative animations
- **Supabase**: Backend-as-a-Service for authentication

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/padelplay)

---

## 📝 License

This project is private and proprietary.

---

## 🤝 Contributing

This is a private project. For inquiries, please contact the project owner.

---

## 📧 Contact

For support or inquiries, reach out via WhatsApp: **+62 859-7529-6363**

---

**Built with ❤️ for the padel community**
