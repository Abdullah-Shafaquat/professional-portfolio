# Muhammad Abdullah - Portfolio Website

A modern, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Features
- **Next.js 15 App Router** - Modern React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **Dark Mode Support** - Dark theme with black and white colors
- **Responsive Design** - Fully responsive on all devices
- **SEO Optimized** - Metadata, Open Graph, Twitter Cards, sitemap.xml, robots.txt

### Pages
- **Home** - Hero section with featured project and quick stats
- **About** - Personal information, skills, and approach
- **Skills** - Animated skill cards organized by category
- **Projects** - Project showcase with filters, search, and featured project
- **Experience** - Professional experience and skills development journey
- **Contact** - Contact form with Resend API integration

### Project Section Features
- Category filters (AI, Next.js, TypeScript, Python, GitHub)
- Search functionality
- Featured AI project display
- Live demo and GitHub buttons
- Responsive project cards

### Animations
- Smooth fade-in animations
- Scroll reveal effects
- Hover effects on cards
- Animated hero text
- Animated project and skill cards
- Page transitions
- Counter animations

### Contact Form
- Name, Email, and Message fields
- Form validation
- Success/error states
- Resend API integration
- Email notifications

## 📦 Tech Stack

### Frontend
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend
- **Next.js API Routes** - Server-side functionality
- **Resend** - Email service

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abdullah-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the environment file
cp .env.local.example .env.local

# Add your Resend API key
RESEND_API_KEY=your_resend_api_key_here
CONTACT_FROM_EMAIL=portfolio@yourdomain.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_FROM_EMAIL=portfolio@yourdomain.com
```

### Getting Resend API Key

1. Visit [Resend](https://resend.com/)
2. Sign up for an account
3. Get your API key from the dashboard
4. Add it to your `.env.local` file

## 📁 Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── api/               # API routes
│   ├── globals.css       # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
├── data/                  # Data files
│   ├── personal.ts        # Personal information
│   ├── skills.ts          # Skills data
│   ├── experience.ts      # Experience data
│   └── projects.ts        # Projects data
├── public/                # Static assets
│   ├── robots.txt         # Robots.txt
│   └── sitemap.xml        # Sitemap
├── tailwind.config.js     # Tailwind configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Laptop** (1024px - 1440px)
- **Desktop** (1440px+)

## 🎨 Design System

- **Color Palette**: Black and white with primary accent
- **Typography**: Geist Sans and Geist Mono
- **Spacing**: Consistent padding and margins
- **Components**: Reusable design system components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Connect to Vercel
3. Deploy automatically

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Other Platforms

```bash
# Export static files
npm run export
```

## 🔍 SEO Features

- **Meta Tags**: Comprehensive metadata
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling rules

## 📊 Analytics

You can add analytics by modifying the layout.tsx to include your preferred analytics service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: alishafaqat4473@gmail.com
- **LinkedIn**: [Muhammad Abdullah](https://www.linkedin.com/in/muhammad-abdullah-608284302/)
- **GitHub**: [Abdullah-Shafaquat](https://github.com/Abdullah-Shafaquat)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion.