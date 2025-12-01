import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const RecentlySold = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Recently Sold Properties
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Here are some examples of properties other buyers have secured through LandLow.
          </p>

          <div className="bg-muted rounded-lg p-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              We'll showcase our recently sold properties here as soon as they close. Check back soon, or browse our current inventory on the Properties page.
            </p>
            <Link 
              to="/properties" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Browse Available Properties
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecentlySold;
