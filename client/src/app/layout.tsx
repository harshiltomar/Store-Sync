import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "./dashboard-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StockSync",
  description: "Full Stack Inventory Management Dashboard Application using Nextjs, Redux, RTK Query, Tailwind, Material-UI, Node+ Express, Prisma + PostgreSQL and AWS EC2, RDS, Amplify and S3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardWrapper>
          {children}
        </DashboardWrapper>
      </body>
    </html>
  );
}
