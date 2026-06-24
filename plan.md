# Home Services Website - Implementation Plan

A professional, comprehensive home services platform featuring service categories, before/after galleries, cost estimators, and an online booking system.

## Scope Summary
- **Landing Page**: High-impact hero section, service highlights, emergency CTA, and service area map.
- **Service Categories**: Dedicated pages/sections for various home services (Plumbing, Electrical, HVAC, etc.).
- **Before/After Gallery**: Interactive image comparison or gallery showing project transformations.
- **Scheduling/Booking**: Calendar-based booking system (simulated frontend logic) with contact forms.
- **Cost Estimator**: Logic-based calculator for common home service tasks.
- **Resources**: Customer reviews, maintenance tips, and warranty information.
- **Data Layer**: Mocked data for services, reviews, and gallery items. LocalStorage for booking persistence.

## Non-Goals
- Real-time backend calendar sync (e.g., Google Calendar API).
- Real payment processing (simulated checkout only).
- User authentication/profiles (unless scoped to localStorage).

## Assumptions
- Images will be sourced from Unsplash.
- Maps will be implemented using a static map image or a lightweight library (e.g., Lucide icons + styled containers).
- Persistence of bookings will use `localStorage`.

## Affected Areas
- **Frontend**: All UI components, layouts, and interactive logic.
- **Routing**: Multi-page or heavy single-page application structure.
- **Styles**: Tailwind CSS for professional branding and responsive design.

## Ordered Phases

### Phase 1: Foundation & Navigation
- Set up project structure and routing.
- Create shared UI components (Header, Footer, Navigation).
- Define theme colors (trustworthy blues/greys/whites).
- **Owner**: `frontend_engineer`

### Phase 2: Service Discovery & Content
- Build the Hero section with "Emergency Service" banner.
- Implement Service Category cards and detailed Service Pages.
- Create the "Before/After" Gallery component.
- **Owner**: `frontend_engineer`

### Phase 3: Interactive Tools (Booking & Estimator)
- Develop the Cost Estimator logic and UI.
- Implement the Online Booking system with a calendar view.
- Setup form validation and "Thank You" states.
- **Owner**: `frontend_engineer`

### Phase 4: Trust & Local Presence
- Add Customer Reviews/Testimonials section.
- Create the Service Area Map and Warranty Information section.
- Build the Maintenance Tips / Blog list.
- **Owner**: `frontend_engineer`

### Phase 5: Refinement & Mobile Optimization
- Final CSS polish and responsive adjustments.
- Ensure all Unsplash images are properly sized and attributed.
- Final "quick fixes" for typos or layout inconsistencies.
- **Owner**: `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build core structure, services, and interactive tools.
2. quick_fix_engineer — Final polish and text/image refinement.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases**: 1, 2, 3, 4
- **Scope**: Create a full-featured React app. Use `@/components/ui` for base elements. Implement a `useBooking` hook to manage `localStorage` bookings. Build the Cost Estimator as a state-driven calculator.
- **Files**: `src/App.tsx`, `src/components/*`, `src/hooks/useBooking.ts`, `src/data/services.ts`.
- **Depends on**: none
- **Acceptance criteria**: Working routing, functional booking form (saves to local state), interactive estimator, and before/after gallery display.

### 2. quick_fix_engineer
- **Phases**: 5
- **Scope**: Review all text for professionalism. Ensure all images from Unsplash are high quality. Adjust any small margin/padding issues on mobile.
- **Files**: `src/index.css`, `src/App.tsx`, and component files.
- **Depends on**: frontend_engineer
- **Acceptance criteria**: Zero layout shifts on mobile, professional copy, and consistent branding.
