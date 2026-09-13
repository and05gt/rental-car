# RentalCar

A modern car rental application built with Next.js and TypeScript. Rent cars
easily and efficiently with a user-friendly interface.

- **Live Demo:**
  [https://rental-car-xi-blue.vercel.app/](https://rental-car-xi-blue.vercel.app/)
- **Repository:**
  [https://github.com/and05gt/rental-car](https://github.com/and05gt/rental-car)

## Features

- Browse available cars for rent
- Filter cars by brand, price and mileage
- View detailed information about each car
- Booking a car

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [React Hot Toast](https://react-hot-toast.com/)

## Data Flow & Architecture

1. **SSR Prefetching:** The server prefetches car data using Next.js Server
   Components and TanStack Query dehydrate utilities during request time.
2. **Hydration:** Query data is hydrated directly into the client cache on
   initial load, eliminating layout shifts and initial loaders.
3. **Client Mutations & Cache Invalidation:** All CRUD actions trigger automatic
   cache invalidation and UI synchronization via React Query hooks.

## Routes

| Route              | Description                                                                                    |
| :----------------- | :--------------------------------------------------------------------------------------------- |
| `/`                | Home page with general overview and quick links                                                |
| `/catalog`         | Catalog page with a list of available cars with filtering options _(SSR prefetch + Hydration)_ |
| `/catalog/[carId]` | Car details page _(SSR prefetch + Hydration)_                                                  |
| `[...not_found]`   | Custom 404 page for non-existent routes                                                        |

## Project Structure

```
├─ app/
│  ├─ catalog/                       # Catalog page
│  │  ├─ [carId]/                    # Car details page
│  ├─ layout.tsx                     # Root layout with provider (TanstackProvider)
│  ├─ not-found.tsx                  # Custom 404 page
│  └─ page.tsx                       # Home page
├─ components/                       # Reusable UI components & corresponding CSS modules
├─ lib/                              # Axios instance and API functions
├─ types/                            # TypeScript interfaces and global type declarations
├─ utils/                            # Utility functions
└─ public/                           # Static assets (images, icons, etc.)
```

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/and05gt/rental-car
   cd rental-car
   ```

2. Install the dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to
   [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
