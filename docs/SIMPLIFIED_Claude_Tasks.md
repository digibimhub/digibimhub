# Simplified Claude Code Tasks - Training First Website

## 📋 QUICK SUMMARY

10 Tasks, ~1 week, ~20-25 hours with Claude Code Agent

---

## ✅ TASK 1: Homepage (2-3 hours)

```
Ask Claude:

"Create a React homepage for a BIM training website with:

1. Navigation bar:
   - Company logo placeholder
   - Links: Training | Software | Consultancy | Contact
   - Mobile hamburger menu

2. Hero section:
   - Large heading: 'Master BIM. Build Your Career.'
   - Subheading: 'From Fresher to Manager Level'
   - Two buttons: [EXPLORE COURSES] [TAKE QUIZ]
   - Use your brand color as background

3. Three service cards:
   - Training: '5 Specialized Courses'
   - Software: 'Revit Add-ons for Windows'
   - Consultancy: 'Career Guidance & Placement'

4. Quick stats section:
   - '500+ Students Trained'
   - '150+ Jobs Placed'
   - '85% Success Rate'

5. Footer:
   - Links: About | Contact | Privacy
   - Contact info: WhatsApp: +91 85915 56811, Email: domesticsoundlines@gmail.com
   - Copyright notice

Use Tailwind CSS, make it responsive (mobile-friendly).
Color palette: Primary={your_brand_color}, Secondary=light gray, Text=dark gray"
```

**Deliverable:** Homepage component with all sections

---

## ✅ TASK 2: Training Overview Page (1-2 hours)

```
Ask Claude:

"Create a training courses overview page at /training with:

1. Page header:
   - Title: 'Our BIM Training Programs'
   - Subtitle: 'Choose your level and start learning'

2. Five course cards in a grid:
   
   Card 1 - Green (#10B981):
   - Title: 'Junior BIM Modeler'
   - Badge: 'Level 1 • Fresher'
   - Duration: '4 months'
   - Price: '₹15,000'
   - Requirement: 'Diploma/Degree'
   - Button: 'VIEW COURSE'
   
   Card 2 - Blue (#3B82F6):
   - Title: 'BIM Modeler – MEP'
   - Badge: 'Level 2 • Intermediate'
   - Duration: '5 months'
   - Price: '₹25,000'
   - Requirement: '2-3 years experience'
   - Button: 'VIEW COURSE'
   
   Card 3 - Purple (#A855F7):
   - Title: 'BIM Coordinator – MEP'
   - Badge: 'Level 3 • Advanced'
   - Duration: '6 months'
   - Price: '₹35,000'
   - Requirement: '3-6 years experience'
   - Button: 'VIEW COURSE'
   
   Card 4 - Red (#EF4444):
   - Title: 'Senior BIM Modeler – MEP'
   - Badge: 'Level 4 • Senior'
   - Duration: '6 months'
   - Price: '₹40,000'
   - Requirement: '2-5 Gulf project years'
   - Button: 'VIEW COURSE'
   
   Card 5 - Dark Red (#7F1D1D):
   - Title: 'BIM Manager – MEP'
   - Badge: 'Level 5 • Manager'
   - Duration: '8 months'
   - Price: '₹50,000'
   - Requirement: '10-15 years experience'
   - Button: 'VIEW COURSE'

3. Action buttons below cards:
   - [TAKE SKILL QUIZ] (links to /training/quiz)
   - [COMPARE COURSES] (shows comparison)

Cards should be clickable and navigate to individual course pages.
Use Tailwind CSS, make responsive grid (1 col on mobile, 2 on tablet, auto on desktop)."
```

**Deliverable:** Course overview page with 5 clickable cards

---

## ✅ TASK 3: Course Detail Pages (4-5 hours)

```
Ask Claude:

"Create 5 course detail pages using the same template:

Routes:
- /training/junior-bim-modeler (Green #10B981)
- /training/bim-modeler (Blue #3B82F6)
- /training/bim-coordinator (Purple #A855F7)
- /training/senior-bim-modeler (Red #EF4444)
- /training/bim-manager (Dark Red #7F1D1D)

Each page structure:

1. Header (colored background matching course level):
   - Course title
   - Level badge
   - Duration, Price, Placement rate, Avg salary

2. Two columns section:
   Left column:
   - 'Who Should Enroll' (5 bullet points)
   Right column:
   - 'What You'll Learn' (5 bullet points)

3. Course timeline section:
   Title: 'Course Timeline'
   
   Phase 1 (Months 1-2):
   - Heading: 'Foundations'
   - 3-4 bullet points of topics
   
   Phase 2 (Months 3-4):
   - Heading: 'Intermediate Skills'
   - 3-4 bullet points of topics
   
   Phase 3 (Months 5-6):
   - Heading: 'Advanced Concepts'
   - 3-4 bullet points of topics
   
   Phase 4 (Months 7-8):
   - Heading: 'Real Projects & Placement'
   - 3-4 bullet points of topics

4. Instructor section:
   - Show 2-3 instructor profile cards (name, role, expertise)

5. Testimonials section:
   - 2 student testimonial cards (name, quote, rating)

6. Enrollment form:
   - Fields: Name, Email, Phone, Experience (dropdown)
   - Submit button
   - Message: 'We'll contact you within 24 hours'

Use course-specific color for buttons and accents.
Make responsive and professional looking.
Pass course data as props or use React Router params."
```

**Deliverable:** All 5 course pages with same template, different content/colors

---

## ✅ TASK 4: Skill Assessment Quiz (2 hours)

```
Ask Claude:

"Create a skill assessment quiz at /training/quiz with:

1. Quiz header:
   - Title: 'Find Your Right BIM Course'
   - Description: 'Answer 10 quick questions to get personalized recommendation'

2. Quiz questions (10 questions):
   Question 1: 'What's your current experience level?'
   - No experience (Fresher)
   - 0-2 years
   - 2-5 years
   - 5-10 years
   - 10+ years

   Question 2: 'Have you worked on Gulf projects?'
   - Never heard of them
   - Heard about them
   - Worked 1-2 projects
   - Worked 3-5 projects
   - Regular Gulf project work

   [Similar 8 more questions about: BIM tools, leadership, MEP knowledge, etc]

3. Quiz logic:
   - Based on answers, calculate a score
   - Display recommended course level
   - Show why that course is recommended
   - Button: [ENROLL IN RECOMMENDED COURSE]

4. Design:
   - One question per screen
   - Progress bar showing quiz progress
   - Easy navigation (Previous/Next buttons)
   - Clean, simple design

Use primary brand color for accents and buttons."
```

**Deliverable:** Interactive quiz with logic to recommend course levels

---

## ✅ TASK 5: Software Add-ons Page (2 hours)

```
Ask Claude:

"Create a software/add-ons page at /software with:

1. Header:
   - Title: 'Revit Add-ons for Windows'
   - Description: 'Professional tools to boost your productivity'

2. Grid of 8 add-on cards:

   ADD-ON DATA (use dummy data for now):
   [
     {
       name: 'MEP Connector Tool',
       features: ['Auto-connect pipes & ducts', 'Smart junction detection', 'One-click coordination'],
       revit: '2022-2025'
     },
     {
       name: 'Clash Detector',
       features: ['Real-time clash detection', 'Auto-report generation', 'Color-coded warnings'],
       revit: '2022-2025'
     },
     {
       name: 'Schedule Exporter',
       features: ['Export to Excel', 'Custom filters', 'Batch processing'],
       revit: '2022-2025'
     },
     {
       name: 'Model Organizer',
       features: ['Auto-organize elements', 'Naming conventions', 'Bulk parameter updates'],
       revit: '2022-2025'
     },
     {
       name: 'View Generator',
       features: ['Auto-create standard views', 'Custom view sets', 'Sheet creation automation'],
       revit: '2022-2025'
     },
     {
       name: 'Annotation Tool',
       features: ['Smart annotations', 'Dimension helpers', 'Text formatting automation'],
       revit: '2022-2025'
     },
     {
       name: 'Family Manager',
       features: ['Organize families', 'Batch parameter editor', 'Type catalogs generator'],
       revit: '2022-2025'
     },
     {
       name: 'Report Generator',
       features: ['Create PDF reports', 'Custom templates', 'Bulk report generation'],
       revit: '2022-2025'
     }
   ]

3. Each card should show:
   - Add-on name
   - 3 features (bullet points)
   - Supported Revit versions
   - Buttons: [DOWNLOAD] [REQUEST DEMO]

4. Bottom section:
   - Heading: 'Custom Development'
   - Text: 'We develop custom Revit add-ons for your specific needs'
   - Button: [REQUEST CUSTOM DEVELOPMENT]

Use primary brand color for buttons and accents.
Make responsive grid layout."
```

**Deliverable:** Software page with 8 dummy add-on cards

---

## ✅ TASK 6: Consultancy One-Pager (1 hour)

```
Ask Claude:

"Create a consultancy page at /consultancy with simple content:

1. Hero section:
   - Title: 'Career Guidance & Job Placement Support'
   - 1-2 lines of description

2. What We Offer (4 blocks):
   - Career Path Guidance
   - Portfolio Review & Feedback
   - Interview Preparation
   - Job Placement Support

3. Success Stats (3 numbers):
   - 150+ Students Placed
   - 85% Placement Rate
   - Avg Salary: 12 LPA

4. How It Works (5 simple steps):
   1. Enroll in Training Course
   2. Complete Your Training
   3. Get Career Counseling
   4. Receive Job Recommendations
   5. Get Placed

5. Latest Job Openings:
   [Simple list of 5-10 dummy job openings]
   Each job card shows: Title | Company | Salary Range

6. Testimonials:
   3-4 short testimonials from placed students

7. CTA buttons:
   [EXPLORE TRAINING COURSES] [GET CAREER ADVICE]

Keep it simple and minimal.
Use primary brand color for highlights."
```

**Deliverable:** Simple consultancy one-pager

---

## ✅ TASK 7: Student Portal (2-3 hours)

```
Ask Claude:

"Create student portal with login, register, and dashboard:

1. /portal/login:
   - Email input
   - Password input
   - 'Remember me' checkbox
   - [LOGIN] button
   - 'Don't have account?' → link to /portal/register
   - 'Forgot password?' → link
   - Use JWT authentication

2. /portal/register:
   - Name input
   - Email input
   - Phone input
   - Password input
   - Confirm password input
   - [REGISTER] button
   - 'Already have account?' → link to /portal/login
   - Store in MongoDB

3. /portal/dashboard (Protected route - requires login):
   
   Header:
   - Welcome, [Student Name]
   - [Logout] button
   
   Section 1: Enrolled Courses
   - Show list of courses enrolled
   - Progress bar for each course (0-100%)
   - Current module/lesson info
   - [CONTINUE LEARNING] button per course
   
   Section 2: Recommended Jobs
   - 3-5 job cards matching skill level
   - Job title, company, salary
   - [VIEW MORE JOBS] button
   
   Section 3: Certificates
   - List of completed courses with certificate downloads
   - [DOWNLOAD CERTIFICATE] button
   
   Section 4: Profile
   - Show user info
   - [EDIT PROFILE] button
   - [CHANGE PASSWORD] button

Use primary brand color for buttons.
Make responsive.
Implement basic JWT authentication."
```

**Deliverable:** Login, register, and dashboard pages with auth

---

## ✅ TASK 8: Backend APIs (3-4 hours)

```
Ask Claude:

"Create Node.js/Express backend with MongoDB for:

1. Database setup:
   - Connect to MongoDB Atlas (or local MongoDB)
   - Create collections: users, courses, enrollments, testimonials, addons, jobs

2. User API endpoints:
   POST /api/auth/register - Register new user
   POST /api/auth/login - Login user (returns JWT token)
   GET /api/users/:id - Get user profile (requires auth)
   PUT /api/users/:id - Update user profile (requires auth)

3. Course API endpoints:
   GET /api/courses - Get all courses
   GET /api/courses/:id - Get course details
   POST /api/enrollments - Enroll in course
   GET /api/enrollments/user/:userId - Get user enrollments

4. Testimonial API:
   GET /api/testimonials - Get all testimonials
   GET /api/testimonials/:courseId - Get testimonials for course
   POST /api/testimonials - Add new testimonial (requires auth)

5. Add-ons API:
   GET /api/addons - Get all add-ons
   GET /api/addons/:id - Get add-on details

6. Jobs API:
   GET /api/jobs - Get all job openings
   GET /api/jobs/:id - Get job details

7. Implementation requirements:
   - Use Express.js
   - Use MongoDB
   - Implement JWT authentication
   - Use bcrypt for password hashing
   - Proper error handling
   - Validation for all inputs
   - CORS enabled

Return full Node.js project structure with all endpoints."
```

**Deliverable:** Full backend with 15+ API endpoints

---

## ✅ TASK 9: Styling & Responsive Design (2-3 hours)

```
Ask Claude:

"Review all pages and ensure:

1. Responsive design:
   - Mobile (320px): Single column, large text
   - Tablet (768px): 2-column layouts
   - Desktop (1024px+): Multi-column layouts
   - Test with mobile viewport

2. Styling consistency:
   - Use Tailwind CSS utilities
   - Apply brand color throughout
   - Consistent button styling
   - Hover effects on interactive elements
   - Smooth transitions

3. Typography:
   - Headings: 24-48px, bold
   - Body: 16px, regular
   - Small text: 14px
   - Good line-height for readability

4. Spacing:
   - Consistent padding/margins
   - 16-32px gaps between sections
   - 8-16px gaps between components

5. Color consistency:
   - Use brand color for primary CTAs
   - Gray for secondary elements
   - Level-specific colors for course cards

6. Mobile optimization:
   - Touch-friendly buttons (min 44px)
   - Hamburger menu for navigation
   - Stack layouts vertically
   - Readable text on small screens

Test on real mobile devices or browser DevTools."
```

**Deliverable:** Polished, responsive design on all pages

---

## ✅ TASK 10: Deployment to Vercel (1 hour)

```
Ask Claude:

"Deploy the BIM training website to Vercel with your custom domain:

1. Prerequisites:
   - GitHub repository with all code
   - Vercel account created
   - Domain name: [yourdomain.com]
   - Domain registered (GoDaddy, Namecheap, etc)

2. Frontend deployment:
   - Connect GitHub repo to Vercel
   - Set build command: npm run build
   - Set install command: npm install
   - Add environment variables for API endpoint

3. Environment variables needed:
   REACT_APP_API_URL=[your-backend-url]
   Example: https://api.yourdomain.com or https://backend.railway.app

4. Custom domain setup:
   - Add domain to Vercel project
   - Vercel will provide nameservers
   - Update nameservers at your domain registrar
   - Wait 24-48 hours for propagation
   - Verify domain is connected (green checkmark in Vercel)

5. SSL/TLS:
   - Vercel automatically provisions SSL certificate
   - Enable HTTPS redirect

6. Deployment:
   - Push code to GitHub main branch
   - Vercel auto-deploys
   - Check deployment logs for errors
   - Site should be live at yourdomain.com in 2-3 minutes

Provide step-by-step Vercel deployment guide for your specific domain."
```

**Deliverable:** Live website on your custom domain

---

## 🚀 HOW TO USE THESE TASKS

1. **Read Task 1** completely
2. **Copy the 'Ask Claude' text** exactly
3. **Paste into Claude** (or Claude Code Agent)
4. **Let Claude build it**
5. **Review output**
6. **Ask for fixes if needed**
7. **Move to Task 2**

---

## ✅ EXPECTED RESULTS

**Task 1:** Homepage component ready to use
**Task 2:** Course overview page (reusable)
**Task 3:** 5 course detail pages (complete)
**Task 4:** Working quiz with logic
**Task 5:** Software add-ons page
**Task 6:** Consultancy one-pager
**Task 7:** Full student portal with auth
**Task 8:** Complete backend with APIs
**Task 9:** Professional styling throughout
**Task 10:** Live on your domain!

---

## ⏱️ TIME BREAKDOWN

- Task 1: 2-3 hours
- Task 2: 1-2 hours
- Task 3: 4-5 hours (largest)
- Task 4: 2 hours
- Task 5: 2 hours
- Task 6: 1 hour
- Task 7: 2-3 hours
- Task 8: 3-4 hours (backend)
- Task 9: 2-3 hours
- Task 10: 1 hour

**TOTAL: 20-25 hours = ~1 week with Claude**

---

## 💡 TIPS

✓ Do tasks in order (frontend first, then backend)
✓ Test each task before moving to next
✓ Keep Claude outputs organized
✓ Ask for revisions if needed
✓ Don't skip styling - it matters
✓ Test responsive design on mobile
✓ Deploy early, iterate later

---

**Ready? Start with Task 1, copy the prompt, give it to Claude!** 🚀
