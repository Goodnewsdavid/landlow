import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Index from "./pages/Index";
import Index from "./pages/Index";
import SellLand from "./pages/SellLand";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import HowItWorks from "./pages/HowItWorks";
import GetNotified from "./pages/GetNotified";
import RecentlySold from "./pages/RecentlySold";
import EnvironmentalImpact from "./pages/EnvironmentalImpact";
import OwnerFinancing from "./pages/OwnerFinancing";
import HowSellingWorks from "./pages/HowSellingWorks";
import WhySellToUs from "./pages/WhySellToUs";
import HowBuyingWorks from "./pages/HowBuyingWorks";
import Reserve from "./pages/Reserve";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sell" element={<SellLand />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/get-notified" element={<GetNotified />} />
          <Route path="/recently-sold" element={<RecentlySold />} />
          <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
          <Route path="/owner-financing" element={<OwnerFinancing />} />
          <Route path="/how-selling-works" element={<HowSellingWorks />} />
          <Route path="/why-sell-to-us" element={<WhySellToUs />} />
          <Route path="/how-buying-works" element={<HowBuyingWorks />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/mission" element={<Navigate to="/about" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;