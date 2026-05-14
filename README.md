# DigiB IMHub - BIM Training Website

Modern BIM training and consultancy platform with course enrollment, student portal, and Revit add-ons showcase.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (free tier available)
- Vercel account (for deployment)

### Setup

1. Clone and install:
```bash
npm install
```

2. Create `.env.local`:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_random_secret_min_32_chars
```

3. Run development server:
```bash
npm run dev
```

Visit `http://localhost:3000`

## 📋 Features

- ✅ 5 BIM Training Courses (Junior → Manager)
- ✅ Skill Assessment Quiz
- ✅ Revit Add-ons Showcase (8 tools)
- ✅ Student Portal (Login/Register)
- ✅ Job Placement Support
- ✅ Responsive Design (Mobile-friendly)
- ✅ Vercel-optimized

## 📂 Project Structure

```
app/
├── training/          # Course pages
├── software/          # Revit add-ons
├── consultancy/       # Career guidance
├── portal/            # Student login/dashboard
├── api/               # Backend APIs
├── layout.tsx         # Root layout
└── page.tsx           # Homepage

components/           # Reusable components
lib/                  # Database & utilities
```

## 🔧 Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| MONGODB_URI | Yes | MongoDB connection string |
| JWT_SECRET | Yes | JWT signing secret |
| NEXTAUTH_SECRET | No | NextAuth secret (if using) |

### Vercel Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Add custom domain (digibimhub.com)
5. Deploy!

## 📱 Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage |
| `/training` | All courses |
| `/training/[slug]` | Course details |
| `/training/quiz` | Skill assessment |
| `/software` | Revit add-ons |
| `/consultancy` | Career guidance |
| `/portal/login` | Student login |
| `/portal/register` | Create account |
| `/portal/dashboard` | Student profile |
| `/contact` | Contact form |

## 📊 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Login |
| GET | `/api/users/me` | User profile |
| GET | `/api/courses` | All courses |
| POST | `/api/enrollments` | Enroll in course |

## 🎨 Design System

- **Primary Color**: Green (#16a34a)
- **Font**: System fonts (no external fonts)
- **Framework**: Tailwind CSS
- **Breakpoints**: Mobile-first responsive

## 📝 Content Needed

Please provide:
1. Logo (PNG/SVG)
2. Course descriptions & instructor names
3. Student testimonials (2 per course)
4. Current job openings
5. Brand color preference

## 🚀 Next Steps

1. ✅ Project initialized with Next.js
2. ⏳ Connect MongoDB Atlas
3. ⏳ Implement full authentication
4. ⏳ Add course content
5. ⏳ Deploy to Vercel with digibimhub.com

## 📞 Support

- WhatsApp: +91 85915 56811
- Email: domesticsoundlines@gmail.com
- Website: soundlinesgroup.com

---

Built with Next.js 16 · Deployed on Vercel · Database: MongoDB
