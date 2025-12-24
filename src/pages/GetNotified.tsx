import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";

interface NotificationFormData {
  name: string;
  email: string;
  states: string;
  budget: string;
}

const GetNotified = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<NotificationFormData>({
    name: "",
    email: "",
    states: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "We'll reach out when new land becomes available that matches what you're looking for.",
    });
    setFormData({ name: "", email: "", states: "", budget: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Get Notified About New Land Deals | LandLow"
        description="Sign up to get email alerts for new land listings, price drops, and special owner-financing offers."
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Be the First to Know About New Land Deals
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Want early access to new properties, price drops, and owner-financing deals? Join our list and we'll send you occasional updates — no spam, just real land opportunities.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="states">State(s) of Interest (optional)</Label>
              <Input
                id="states"
                type="text"
                placeholder="e.g., Nevada, Arizona, Texas"
                value={formData.states}
                onChange={(e) => setFormData({ ...formData, states: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="budget">Budget Range (optional)</Label>
              <Input
                id="budget"
                type="text"
                placeholder="e.g., $5,000 - $15,000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="mt-2"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Notify Me
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetNotified;
