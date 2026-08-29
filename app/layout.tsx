import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RentalCar - Car Rental Company",
  description:
    "Reliable and budget-friendly rentals for any journey. Easy online booking.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
