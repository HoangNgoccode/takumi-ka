import React from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "@/lib/cartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartPanel from "@/components/CartPanel";

export default function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartPanel />
      </div>
    </CartProvider>
  );
}