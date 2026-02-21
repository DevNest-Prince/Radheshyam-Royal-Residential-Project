# Radheshyam Royal - Premium Residential Project Website

A modern, production-ready real estate website built with React, Vite, Tailwind CSS 4.0, and React Router.

## 🏠 Project Overview

**Radheshyam Royal** is a premium residential project featuring:
- OC Received - Ready to Move
- MAHARERA Approved
- Located on Kalyan-Shilphata Highway
- 12 Minutes from Ghansoli Station
- 1 Minute from Upcoming Metro Station
- 2 Towers with G+7 Storey Buildings

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Built with best practices for search engine optimization
- **Fast Performance** - Utilizes Vite for lightning-fast builds and hot reload
- **Production Ready** - Optimized and ready for deployment

## 📦 Tech Stack

- **React 19.2.0** - Latest React version with concurrent features
- **Vite 7.3.1** - Next generation frontend tooling
- **Tailwind CSS 4.2.0** - Utility-first CSS framework
- **React Router Dom 7.13.0** - Declarative routing for React

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project**
   ```bash
   cd client
   ```

2. **Install dependencies** (Already done)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to: `http://localhost:5173` (or the port shown in terminal)

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready optimized bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📂 Project Structure

```
client/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation bar with page routing
│   │   ├── Hero.jsx       # Landing section with key highlights
│   │   ├── Features.jsx   # Project features and connectivity
│   │   ├── Amenities.jsx  # World-class amenities section
│   │   ├── FloorPlans.jsx # Interactive floor plan selector
│   │   ├── Location.jsx   # Location advantages and map
│   │   ├── Contact.jsx    # Contact form and information
│   │   ├── Footer.jsx     # Footer with links and social media
│   │   └── ScrollToTop.jsx # Scroll to top on route change
│   ├── pages/              # Page components
│   │   ├── Home.jsx       # All sections in single page
│   │   ├── HomePage.jsx   # Landing/Hero only
│   │   ├── AboutPage.jsx  # About the project
│   │   ├── FloorPlansPage.jsx  # Floor plans details
│   │   ├── AmenitiesPage.jsx   # Features & amenities
│   │   ├── LocationPage.jsx    # Location details
│   │   ├── GalleryPage.jsx     # Image gallery
│   │   └── ContactPage.jsx     # Contact form
│   ├── routes/
│   │   └── index.jsx      # Centralized routing configuration
│   ├── App.jsx            # Main app component
│   ├── App.css            # Custom styles
│   ├── index.css          # Tailwind imports
│   └── main.jsx           # Application entry point
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🌐 Pages Overview

### 1. **Home Page** (`/`)
- Hero section with key highlights
- Call-to-action buttons
- Starting price display

### 2. **About Page** (`/about`)
- Project vision and overview
- Key highlights and statistics
- Why choose Radheshyam Royal

### 3. **Amenities Page** (`/amenities`)
- Project features and connectivity
- World-class amenities with icons
- 20+ premium facilities

### 4. **Floor Plans Page** (`/floor-plans`)
### 4. **Floor Plans Page** (`/floor-plans`)
- Interactive configuration selector
- 1 BHK & 2 BHK options with pricing
- Detailed features and specifications
- Quick comparison table

### 5. **Location Page** (`/location`)
- Strategic location details
- Nearby facilities (schools, hospitals, malls)
- Transportation access
- Map integration

### 6. **Gallery Page** (`/gallery`)
- Project image gallery
- Category-wise filtering
- Exterior, interior, and amenity photos

### 7. **Contact Page** (`/contact`)
- Enquiry form with validation
- Contact information and office hours
- WhatsApp integration
- Social media links

## 🛣️ Routing Structure

The application uses **centralized routing** configuration:
- Routes are defined in `src/routes/index.jsx`
- Easy to maintain and extend
- Includes 404 Not Found page
- Automatic scroll to top on route change

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deployment Options

1. **Vercel** (Recommended)
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Netlify**
   - Drag and drop the `dist` folder to Netlify

3. **GitHub Pages**
   - Push to GitHub and enable GitHub Pages from settings

4. **Traditional Hosting**
   - Upload contents of `dist/` folder to your web server

## ⚙️ Customization

### Update Contact Information

Edit these files to update contact details:
- `src/components/Footer.jsx` - Phone, email, address
- `src/components/Contact.jsx` - Contact info and WhatsApp link

### Add Real Images

Replace placeholder sections in:
- Hero section
- Floor plans visualizations
- Location map

### Customize Colors

To change the primary color scheme:
- Replace `amber-600` with your preferred color
- Replace `orange-600` for gradient combinations

## 📱 Responsive Design

Fully optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholder text and images with actual project photos
2. **Connect Backend**: Set up a backend API for form submissions
3. **SEO Optimization**: Add meta tags, sitemap, and structured data
4. **Analytics**: Integrate Google Analytics
5. **Gallery Section**: Add image gallery
6. **Virtual Tour**: Add 360° virtual tour
7. **Testimonials**: Add customer reviews section

## 📞 Contact

- Email: info@radheshyamroyal.com
- Phone: +91 XXXXX XXXXX

---

**Built with ❤️ for Radheshyam Royal**
