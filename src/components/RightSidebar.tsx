import { ChevronRight, Info, MoreHorizontal, ExternalLink } from "lucide-react";
import avatarJane from "@/assets/avatar-jane.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import puzzleIcon from "@/assets/puzzle-icon.jpg";

const SUGGESTIONS = [
  {
    name: "Sophie Marchetti",
    title: "Machine Learning Engineer | Marvelous MLOps",
    initials: "SM",
    img: avatarJane,
  },
  {
    name: "Global Tech Ventures",
    title: "Company · IT Services and Consulting",
    initials: "GT",
    img: "",
    isCompany: true,
  },
  {
    name: "Marcus Webb",
    title: "Follow for Your Daily Dose of AI, Software Development & Systems",
    initials: "MW",
    img: avatarMarcus,
  },
];

export const RightSidebar = () => {
  return (
    <aside className="w-[300px] shrink-0 space-y-2">
      {/* Today's Puzzle */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-3">
        <h3 className="text-[14px] font-bold text-[hsl(var(--card-foreground))] mb-2">Today's puzzle</h3>
        <div className="flex items-center gap-3">
          <img src={puzzleIcon} alt="Puzzle" className="w-12 h-12 rounded-lg object-cover shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-[hsl(var(--card-foreground))] leading-tight">
              Zip - a quick brain teaser
            </p>
            <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5">Solve in 60s or less!</p>
            <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5 flex items-center gap-1">
              <span className="text-[10px]">🔒</span> Score is private to you
            </p>
          </div>
          <ChevronRight className="w-4 h-4 text-[hsl(var(--muted-foreground))] shrink-0" />
        </div>
      </div>

      {/* Add to your feed */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[14px] font-bold text-[hsl(var(--card-foreground))]">Add to your feed</h3>
          <Info className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
        </div>

        <div className="space-y-3">
          {SUGGESTIONS.map((s) => (
            <div key={s.name} className="flex items-start gap-2">
              {/* Avatar */}
              {s.img ? (
                <img src={s.img} alt={s.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-foreground flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground text-[11px] font-bold">{s.initials}</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-[hsl(var(--card-foreground))] leading-tight">{s.name}</p>
                <p className="text-[11px] text-[hsl(var(--muted-foreground))] leading-tight line-clamp-2 mt-0.5">{s.title}</p>
                <button className="mt-1.5 flex items-center gap-1 border border-[hsl(var(--muted-foreground))] rounded-full px-3 py-0.5 text-[11px] font-semibold text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:border-[hsl(var(--card-foreground))] hover:text-[hsl(var(--card-foreground))] transition-colors">
                  <span>+</span> Follow
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-3 text-[12px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--card-foreground))] flex items-center gap-1 transition-colors">
          View all recommendations <span>→</span>
        </button>
      </div>

      {/* Promoted */}
      <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] text-[hsl(var(--muted-foreground))]">Promoted</span>
          <MoreHorizontal className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
        </div>
        <div className="flex items-start gap-2">
          <div className="w-12 h-12 rounded bg-primary flex items-center justify-center shrink-0">
            <span className="text-primary-foreground text-[10px] font-bold text-center leading-tight">AI</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-[hsl(var(--card-foreground))] leading-tight">
              Add AI to your workflows
            </p>
            <p className="text-[11px] text-[hsl(var(--muted-foreground))] leading-tight mt-0.5">
              Connect OpenAI and Zapier to fuse the power of AI with automation for free.
            </p>
            <button className="mt-1.5 flex items-center gap-1 border border-[hsl(var(--muted-foreground))] rounded-full px-3 py-0.5 text-[11px] font-semibold text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] transition-colors">
              <ExternalLink className="w-3 h-3" /> Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="px-1">
        <div className="flex flex-wrap gap-x-2 gap-y-0.5">
          {["About", "Accessibility", "Help Center", "Privacy & Terms", "Ad Choices", "Advertising", "Business Services", "Get the LinkedIn app", "More"].map((link) => (
            <button key={link} className="text-[10px] text-[hsl(var(--muted-foreground))] hover:text-primary hover:underline transition-colors">
              {link}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--muted-foreground))] mt-2">LinkedIn Corporation © 2026</p>
      </div>
    </aside>
  );
};
