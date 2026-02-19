import { Bookmark, Users2, Plus, ChevronRight } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";
import profileBanner from "@/assets/profile-banner.jpg";

export const LeftSidebar = () => {
  return (
    <aside className="w-[225px] shrink-0 space-y-2">
      {/* Profile Card */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg overflow-hidden">
        {/* Banner */}
        <div className="h-[54px] relative overflow-hidden">
          <img src={profileBanner} alt="Profile banner" className="w-full h-full object-cover" />
        </div>

        {/* Avatar */}
        <div className="px-3 pb-3">
          <div className="relative -mt-8 mb-2 w-fit">
            <img
              src={profileAvatar}
              alt="Alex Rivera"
              className="w-[60px] h-[60px] rounded-full border-2 border-[hsl(var(--card))] object-cover"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-[hsl(var(--card))] flex items-center justify-center">
              <span className="text-primary-foreground text-[7px] font-black leading-none">in</span>
            </div>
          </div>

          <h2 className="text-[14px] font-semibold text-[hsl(var(--card-foreground))] leading-tight">Alex Rivera</h2>
          <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5 leading-tight">
            Double Degree in Business Administration &amp; AI
          </p>
          <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5">Barcelona, Catalonia</p>

          <div className="mt-2 pt-2 border-t border-[hsl(var(--border))] space-y-1">
            <button className="w-full flex justify-between items-center text-[11px] hover:bg-[hsl(var(--muted))] px-1 py-0.5 rounded transition-colors">
              <span className="text-[hsl(var(--muted-foreground))]">Profile viewers</span>
              <span className="font-bold text-primary">42</span>
            </button>
            <button className="w-full flex justify-between items-center text-[11px] hover:bg-[hsl(var(--muted))] px-1 py-0.5 rounded transition-colors">
              <span className="text-[hsl(var(--muted-foreground))]">Post impressions</span>
              <span className="font-bold text-primary">128</span>
            </button>
          </div>

          {/* Premium upsell */}
          <div className="mt-2 pt-2 border-t border-[hsl(var(--border))]">
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Boost your job search</p>
            <button className="text-[11px] font-semibold text-[#915907] flex items-center gap-1 mt-0.5 hover:underline">
              <span>🏆</span>
              <span>Reactivate Premium: 50% Off</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation items */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg overflow-hidden py-1">
        {[
          { icon: Bookmark, label: "Saved items" },
          { icon: Users2, label: "Groups" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center gap-2 px-3 py-2 text-[13px] text-[hsl(var(--card-foreground))] font-medium hover:bg-[hsl(var(--muted))] transition-colors"
          >
            <Icon className="w-4 h-4 text-[hsl(var(--muted-foreground))]" strokeWidth={1.5} />
            {label}
          </button>
        ))}

        <button className="w-full flex items-center justify-between px-3 py-2 text-[12px] font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--card-foreground))] hover:bg-[hsl(var(--muted))] transition-colors">
          <span className="flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" /> Discover more
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
