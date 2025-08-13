# 🏦 Wealth Elite - Financial Dashboard

A modern, responsive financial portfolio management dashboard built with Next.js 15, featuring real-time data visualization, dark mode support, and comprehensive client management tools.

![Financial Dashboard](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Financial+Dashboard+Screenshot)

## 🚀 Features

### Core Functionality

- **📊 Portfolio Overview**: Real-time AUM and SIP tracking with percentage changes
- **📈 Interactive Charts**: Pie charts, bar charts, and area charts using Recharts
- **👥 Client Management**: Comprehensive client statistics and distribution
- **📅 Time-based Filtering**: Dynamic date range selection (1 day to 1 year)
- **🌓 Dark Mode**: Complete theme switching with system preference detection
- **📱 Responsive Design**: Mobile-first approach supporting all device sizes

### Advanced Features

- **🔍 Smart Search**: Global search functionality across investments and clients
- **🔔 Notifications**: Real-time notification system with badge indicators
- **⚡ Quick Actions**: One-click access to common tasks
- **📊 Export Functionality**: Download reports and chart data
- **🔄 Loading States**: Smooth skeleton loading animations
- **🎨 Modern UI**: Gradient backgrounds, hover effects, and smooth transitions

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Charts**: Recharts
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)
- **State Management**: React Hooks (useState, useEffect, useContext)

## 📁 Project Structure

financial-dashboard/
├── app/
│ ├── api/ # API routes
│ │ ├── aum/route.js # Assets Under Management data
│ │ ├── sip/route.js # SIP data
│ │ ├── stats/route.js # Statistics data
│ │ └── charts/route.js # Charts data
│ ├── components/
│ │ ├── dashboard/ # Dashboard components
│ │ │ ├── Header.jsx # Navigation header
│ │ │ ├── MainCards.jsx # AUM & SIP cards
│ │ │ ├── TimeFilter.jsx # Date range filters
│ │ │ ├── StatCards.jsx # Statistics cards
│ │ │ ├── Charts.jsx # Data visualizations
│ │ │ └── QuickActions.jsx # Action buttons
│ │ └── providers/
│ │ └── ThemeProvider.jsx # Dark mode provider
│ ├── globals.css # Global styles
│ ├── layout.js # Root layout
│ └── page.js # Main dashboard page
├── public/ # Static assets
├── package.json # Dependencies
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS configuration
└── README.md # Project documentation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   git clone https://github.com/rushichinnu/financial-dashboard.git
   cd financial-dashboard

2. **Install dependencies**
   npm install --legacy-peer-deps

3. **Install additional required packages**
   npm install autoprefixer postcss --legacy-peer-deps
   npm install class-variance-authority clsx tailwind-merge --legacy-peer-deps

4. **Create configuration files**

Create `postcss.config.js`:
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
}

### Running the Application

1. **Development server**

npm run dev
Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Production build**
   npm run build
   npm start
3. **Linting**
   npm run lint

## 📊 API Endpoints

The application uses mock API endpoints that simulate real financial data:

- `GET /api/aum` - Assets Under Management data
- `GET /api/sip` - Systematic Investment Plan data
- `GET /api/stats` - Client statistics and transaction data
- `GET /api/charts` - Chart visualization data

## 🎨 UI Components

### Main Dashboard Components

1. **Header Navigation**

- Brand logo and navigation menu
- Search functionality
- Theme toggle and user profile
- Responsive mobile menu

2. **Portfolio Cards**

- AUM card with trend indicators
- SIP card with monthly tracking
- Real-time data updates

3. **Interactive Charts**

- Client distribution pie chart
- SIP business growth chart
- Monthly MIS area chart

4. **Quick Actions**

- Add new client
- Process transactions
- Generate reports
- Market analysis tools

## 🌓 Dark Mode

The application features a complete dark mode implementation:

- System preference detection
- Manual toggle option
- Persistent theme storage
- Smooth transitions between themes

## 📱 Responsive Design

Mobile-first design approach with breakpoints:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Customization

### Adding New Charts

// Add to app/api/charts/route.js
export async function GET() {
return NextResponse.json({
newChart: [
{ name: 'Category', value: 100 }
]
})
}

### Styling Modifications

Tailwind classes can be customized in `tailwind.config.js`:
theme: {
extend: {
colors: {
primary: '#your-color'
}
}
}

## 🚀 Deployment

### Netlify

npm run build
Upload 'out' folder to Netlify
