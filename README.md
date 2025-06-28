# Afrin English Challenge

A modern, responsive website for the Afrin English Challenge - a 365-day English learning program that combines structured self-study with community practice.

## 🚀 Features

### SEO & Performance

- **Fully SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Programmatic SEO**: Dynamic sitemap, robots.txt, and search engine optimization
- **Performance Optimized**: Next.js 15 with Turbopack, optimized images, and bundle splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

### Responsive Design

- **Mobile-First**: Optimized for all screen sizes from mobile to desktop
- **Fluid Typography**: Responsive text scaling using CSS clamp()
- **Modern UI**: Beautiful gradients, glass morphism effects, and smooth animations
- **Touch-Friendly**: Optimized for touch devices with proper button sizes

### Technical Stack

- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **SVG Icons**: Scalable vector graphics for crisp display
- **Performance**: Optimized loading, caching, and bundle size

## 🎨 Design System

### Colors

- **Primary**: Blue (#3b82f6) - Trust and professionalism
- **Secondary**: Yellow (#f59e0b) - Energy and motivation
- **Accent**: Green (#10b981) - Success and progress
- **Gradients**: Beautiful color transitions throughout

### Typography

- **Font**: Inter - Modern, readable, and professional
- **Responsive**: Scales smoothly across all devices
- **Hierarchy**: Clear visual hierarchy with proper contrast

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/afrin-english-challenge.git
   cd afrin-english-challenge
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
afrin-english-challenge/
├── public/                 # Static assets
│   ├── favicon.svg        # SVG favicon
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # SEO sitemap
├── src/
│   └── app/               # Next.js App Router
│       ├── layout.tsx     # Root layout with SEO
│       ├── page.tsx       # Home page
│       └── globals.css    # Global styles
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# SEO
NEXT_PUBLIC_SITE_URL=https://afrinenglish.com
NEXT_PUBLIC_SITE_NAME=Afrin English Challenge
```

### SEO Configuration

Update the metadata in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Site Title",
    template: "%s | Your Site Name",
  },
  description: "Your site description",
  // ... other metadata
};
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy automatically** on every push to main branch

### Other Platforms

The app is configured for standalone output and can be deployed to:

- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Configure build settings
- **Docker**: Use the standalone output

## 📊 Performance

### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Optimizations

- **Image Optimization**: WebP/AVIF formats with responsive sizes
- **Bundle Splitting**: Automatic code splitting for optimal loading
- **Caching**: Strategic cache headers for static assets
- **Minification**: SWC minification for faster builds

## 🔍 SEO Features

### Technical SEO

- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml and robots.txt
- ✅ Canonical URLs
- ✅ Schema markup

### Content SEO

- ✅ Optimized page titles and descriptions
- ✅ Keyword optimization
- ✅ Internal linking structure
- ✅ Fast loading times
- ✅ Mobile-friendly design

## 🎯 Analytics & Tracking

### Google Analytics

Google Analytics is enabled in production using gtag.js.

## 🔒 Security

### Headers

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin
- X-DNS-Prefetch-Control: on

### Best Practices

- HTTPS only
- Secure cookie settings
- Content Security Policy
- Regular dependency updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email vennila.paramanantham@gmail.com or create an issue in this repository.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- The React community for continuous improvements
- All contributors and supporters

---

**Made with ❤️ for English learners worldwide**
