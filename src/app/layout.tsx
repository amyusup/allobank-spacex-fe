import "@/styles/globals.css";

import { AlertProvider } from "@/components/fragment/Alert/alert.context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AlloBank - SpaceX",
  description: "AlloBank SpaceX project FE",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <AlertProvider>{children} </AlertProvider>
      </body>
    </html>
  );
};

export default RootLayout;
