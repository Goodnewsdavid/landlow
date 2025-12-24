import { TreePine } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const EnvironmentalImpact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Environmental Impact | 5% Net Profit Reforestation Pledge | LandLow"
        description="Discover how LandLow donates 5% of net profits annually to plant trees through One Tree Planted."
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Our Environmental Impact
          </h1>
          
          <p className="text-lg text-muted-foreground mb-16">
            Land is powerful — for people, and for the planet. At LandLow, we want our business to support healthier land long-term, not just land ownership on paper.
          </p>

          {/* 5% Net Profit Giving Pledge */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TreePine className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-montserrat font-semibold text-foreground">
                5% Net Profit Giving Pledge
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Each year, LandLow donates 5% of our net profits to One Tree Planted, a nonprofit focused on global reforestation. Every dollar helps plant new trees in areas that need them most, supporting healthier soil, cleaner air, and better habitats for wildlife.
            </p>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-6">
              How It Works
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>At the end of each calendar year, we calculate our net profit.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>We donate 5% of that net profit to One Tree Planted.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 text-xl">•</span>
                <span>We then update this page with:
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>○ The year</li>
                    <li>○ Our total donation amount</li>
                    <li>○ The estimated number of trees funded (per their $1 = 1 tree model)</li>
                  </ul>
                </span>
              </li>
            </ul>
          </section>

          {/* Annual Impact Summary */}
          <section className="mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-6">
              Annual Impact Summary
            </h2>
            <div className="bg-primary rounded-lg p-8">
              <p className="text-muted-foreground text-center">
                Our first annual impact report will be published here after our first full year of operation.
              </p>
            </div>
          </section>

          {/* Why Trees? */}
          <section className="mb-16">
            <h2 className="text-3xl font-montserrat font-semibold text-foreground mb-6">
              Why Trees?
            </h2>
            <p className="text-lg text-muted-foreground">
              Trees support healthier land, cleaner air, wildlife habitats, and more resilient communities. Because our business is built on land, we believe it's our responsibility to help restore and protect it for future generations.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EnvironmentalImpact;
