import { FC } from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
interface RootLayoutProps {}
const queryClient = new QueryClient();
const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <div className=" bg-background text-foreground">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <main className=" flex justify-center items-center min-h-screen">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </main>
        <span className=" fixed bottom-8 right-5 "></span>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default RootLayout;
