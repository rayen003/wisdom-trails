import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import {
  X,
  BookOpen,
  TrendingUp,
  Briefcase,
  Brain,
  Users,
  BookmarkPlus,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import bookAi from "@/assets/book-ai.jpg";
import bookZero from "@/assets/book-zero.jpg";
import bookThink from "@/assets/book-think.jpg";
import bookInspired from "@/assets/book-inspired.jpg";
import bookLeaders from "@/assets/book-leaders.jpg";
import bookDeepwork from "@/assets/book-deepwork.jpg";
import avatarJane from "@/assets/avatar-jane.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";

type HookIcon = "trending" | "briefcase" | "brain" | "users" | "sparkles";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  hookIcon: HookIcon;
  hookText: string;
  likers: { name: string; avatar: string; initials: string }[];
  likersExtra: number;
}

const BOOKS: Book[] = [
  {
    id: "1",
    title: "The Age of AI: And Our Human Future",
    author: "Henry A. Kissinger, Eric Schmidt, Daniel Huttenlocher",
    cover: bookAi,
    hookIcon: "trending",
    hookText: "Because you follow AI topics",
    likers: [
      { name: "Sophie Marchetti", avatar: avatarJane, initials: "SM" },
      { name: "Marcus Webb", avatar: avatarMarcus, initials: "MW" },
    ],
    likersExtra: 312,
  },
  {
    id: "2",
    title: "Zero to One: Notes on Startups, or How to Build the Future",
    author: "Peter Thiel & Blake Masters",
    cover: bookZero,
    hookIcon: "sparkles",
    hookText: "Popular in your network",
    likers: [
      { name: "Marcus Webb", avatar: avatarMarcus, initials: "MW" },
      { name: "Sophie Marchetti", avatar: avatarJane, initials: "SM" },
    ],
    likersExtra: 84,
  },
  {
    id: "3",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: bookThink,
    hookIcon: "brain",
    hookText: "Based on your interest in psychology",
    likers: [
      { name: "Sophie Marchetti", avatar: avatarJane, initials: "SM" },
      { name: "Marcus Webb", avatar: avatarMarcus, initials: "MW" },
    ],
    likersExtra: 509,
  },
  {
    id: "4",
    title: "Inspired: How to Create Tech Products Customers Love",
    author: "Marty Cagan",
    cover: bookInspired,
    hookIcon: "briefcase",
    hookText: "Based on your Product Management skills",
    likers: [
      { name: "Marcus Webb", avatar: avatarMarcus, initials: "MW" },
      { name: "Sophie Marchetti", avatar: avatarJane, initials: "SM" },
    ],
    likersExtra: 47,
  },
  {
    id: "5",
    title: "Leaders Eat Last: Why Some Teams Pull Together and Others Don't",
    author: "Simon Sinek",
    cover: bookLeaders,
    hookIcon: "users",
    hookText: "Trending in Leadership",
    likers: [
      { name: "Sophie Marchetti", avatar: avatarJane, initials: "SM" },
      { name: "Marcus Webb", avatar: avatarMarcus, initials: "MW" },
    ],
    likersExtra: 221,
  },
  {
    id: "6",
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    cover: bookDeepwork,
    hookIcon: "trending",
    hookText: "Trending in Productivity",
    likers: [
      { name: "Marcus Webb", avatar: avatarMarcus, initials: "MW" },
      { name: "Sophie Marchetti", avatar: avatarJane, initials: "SM" },
    ],
    likersExtra: 178,
  },
];

const HookIconComponent = ({ icon }: { icon: HookIcon }) => {
  const cls = "w-3 h-3 shrink-0";
  switch (icon) {
    case "trending": return <TrendingUp className={cls} />;
    case "briefcase": return <Briefcase className={cls} />;
    case "brain": return <Brain className={cls} />;
    case "users": return <Users className={cls} />;
    case "sparkles": return <Sparkles className={cls} />;
  }
};

interface BookCardProps {
  book: Book;
  saved: boolean;
  onSave: (id: string) => void;
}

const BookCard = ({ book, saved, onSave }: BookCardProps) => {
  return (
    <div className="w-[200px] shrink-0 flex flex-col gap-2 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3 hover:shadow-md transition-shadow duration-200">
      {/* Hook */}
      <div className="flex items-center gap-1 text-[hsl(var(--muted-foreground))] min-h-[16px]">
        <HookIconComponent icon={book.hookIcon} />
        <span className="text-[11px] leading-tight line-clamp-1">{book.hookText}</span>
      </div>

      {/* Cover Image */}
      <div className="aspect-[2/3] w-full overflow-hidden rounded-md shadow-sm bg-muted">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="text-[13px] font-semibold text-[hsl(var(--card-foreground))] leading-snug line-clamp-2 mt-0.5">
        {book.title}
      </h3>

      {/* Author */}
      <p className="text-[11px] text-[hsl(var(--muted-foreground))] leading-tight line-clamp-2 -mt-1">
        {book.author}
      </p>

      {/* Social proof */}
      <div className="flex items-center gap-1.5 mt-auto pt-1">
        <div className="flex -space-x-1.5">
          {book.likers.map((liker) => (
            <Avatar key={liker.name} className="w-5 h-5 border-2 border-[hsl(var(--card))]">
              <AvatarImage src={liker.avatar} alt={liker.name} />
              <AvatarFallback className="text-[8px] bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
                {liker.initials}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <span className="text-[10px] text-[hsl(var(--muted-foreground))] leading-tight">
          Liked by <span className="font-medium text-[hsl(var(--card-foreground))]">{book.likers[0].name.split(" ")[0]}</span> and {book.likersExtra} others
        </span>
      </div>

      {/* Save Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onSave(book.id)}
        className={`w-full text-[11px] h-8 font-medium transition-all duration-200 gap-1.5 ${
          saved
            ? "border-primary text-primary bg-accent hover:bg-accent"
            : "border-border text-[hsl(var(--card-foreground))] hover:border-primary hover:bg-accent hover:text-primary"
        }`}
      >
        {saved ? (
          <>
            <BookmarkCheck className="w-3.5 h-3.5" />
            Saved
          </>
        ) : (
          <>
            <BookmarkPlus className="w-3.5 h-3.5" />
            Save to List
          </>
        )}
      </Button>
    </div>
  );
};

export const BooksWidget = () => {
  const [dismissed, setDismissed] = useState(false);
  const [savedBooks, setSavedBooks] = useState<Set<string>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSave = (id: string) => {
    if (savedBooks.has(id)) return;
    setSavedBooks((prev) => new Set(prev).add(id));
    const book = BOOKS.find((b) => b.id === id);
    toast({
      title: "Saved to your reading list!",
      description: `"${book?.title}" has been added to your list.`,
      duration: 3000,
    });
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 220;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (dismissed) return null;

  return (
    <Card className="w-full max-w-[600px] bg-[hsl(var(--card))] border-[hsl(var(--border))] rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[hsl(var(--primary))]" />
          <div>
            <h2 className="text-[15px] font-bold text-[hsl(var(--card-foreground))] leading-tight">
              Books you might like
            </h2>
            <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
              Promoted by LinkedIn Learning
            </p>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-full text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--card-foreground))] transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-[hsl(var(--border))] mx-0" />

      {/* Scroll area + nav buttons */}
      <div className="relative group">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-md flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-md flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Book cards scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth-x px-4 py-4"
        >
          {BOOKS.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              saved={savedBooks.has(book.id)}
              onSave={handleSave}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center py-3 border-t border-[hsl(var(--border))]">
        <button className="text-[13px] font-semibold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--card-foreground))] transition-colors">
          View all recommendations →
        </button>
      </div>
    </Card>
  );
};
