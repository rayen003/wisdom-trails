import { Search, Home, Users, Briefcase, MessageSquare, Bell, Grid3x3, ChevronDown } from "lucide-react";

export const LinkedInNav = () => {
  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--card))] border-b border-[hsl(var(--border))] shadow-sm">
      <div className="max-w-[1128px] mx-auto px-4 flex items-center gap-2 h-[52px]">
        {/* Logo */}
        <div className="w-[34px] h-[34px] bg-primary rounded flex items-center justify-center shrink-0">
          <span className="text-primary-foreground font-black text-lg leading-none tracking-tight">in</span>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-[hsl(var(--muted))] rounded px-3 py-1.5 w-[250px] shrink-0">
          <Search className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-[13px] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] outline-none w-full"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Nav items */}
        <nav className="flex items-center">
          {[
            { icon: Home, label: "Home", active: true },
            { icon: Users, label: "My Network" },
            { icon: Briefcase, label: "Jobs" },
            { icon: MessageSquare, label: "Messaging" },
            { icon: Bell, label: "Notifications" },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 min-w-[70px] border-b-2 transition-colors ${
                active
                  ? "border-[hsl(var(--foreground))] text-[hsl(var(--foreground))]"
                  : "border-transparent text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium leading-none">{label}</span>
            </button>
          ))}

          <div className="w-px h-8 bg-[hsl(var(--border))] mx-2" />

          {/* For Business */}
          <button className="flex flex-col items-center gap-0.5 px-2 py-1 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
            <Grid3x3 className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-[10px] font-medium leading-none flex items-center gap-0.5">
              For Business <ChevronDown className="w-2.5 h-2.5" />
            </span>
          </button>

          {/* Premium CTA */}
          <button className="ml-1 px-2 py-1 text-[10px] font-semibold text-[#915907] hover:underline leading-tight max-w-[80px] text-center">
            Reactivate Premium: 50% Off
          </button>
        </nav>
      </div>
    </header>
  );
};
