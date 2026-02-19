import { BooksWidget } from "@/components/BooksWidget";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* LinkedIn-style top bar hint */}
      <div className="max-w-[600px] mx-auto mb-5">
        <div className="flex items-center gap-2">
          {/* Fake LinkedIn logo */}
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-sm leading-none">in</span>
          </div>
          <span className="text-[13px] text-muted-foreground font-medium tracking-wide">
            LinkedIn · Newsfeed · Books you might like feature
          </span>
        </div>
      </div>

      {/* Widget centered in feed column */}
      <div className="max-w-[600px] mx-auto space-y-4">
        {/* Fake feed post above for context */}
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-foreground flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">JD</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-card-foreground">Jane Doe</p>
              <p className="text-[11px] text-muted-foreground">Senior Product Manager · 2nd · 3h</p>
            </div>
          </div>
          <p className="text-[13px] text-card-foreground leading-relaxed">
            Just finished reading <span className="text-primary font-medium">Zero to One</span> — absolutely brilliant insight on building monopolies vs. competing. Highly recommend for anyone in product or startups. 📖
          </p>
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
            <span className="text-[11px] text-muted-foreground cursor-pointer hover:text-primary transition-colors">👍 Like</span>
            <span className="text-[11px] text-muted-foreground cursor-pointer hover:text-primary transition-colors">💬 Comment</span>
            <span className="text-[11px] text-muted-foreground cursor-pointer hover:text-primary transition-colors">↗ Repost</span>
          </div>
        </div>

        {/* THE FEATURE: Books Widget */}
        <BooksWidget />

        {/* Fake feed post below for context */}
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-secondary-foreground text-sm font-bold">MK</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-card-foreground">Marcus Kim</p>
              <p className="text-[11px] text-muted-foreground">AI Research Lead at DeepMind · 1st · 1d</p>
            </div>
          </div>
          <p className="text-[13px] text-card-foreground leading-relaxed">
            The intersection of AI and human decision-making is one of the most fascinating areas of study right now. Reading "Thinking, Fast and Slow" alongside modern AI literature gives incredible perspective. 🧠
          </p>
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
            <span className="text-[11px] text-muted-foreground cursor-pointer hover:text-primary transition-colors">👍 Like</span>
            <span className="text-[11px] text-muted-foreground cursor-pointer hover:text-primary transition-colors">💬 Comment</span>
            <span className="text-[11px] text-muted-foreground cursor-pointer hover:text-primary transition-colors">↗ Repost</span>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Index;
