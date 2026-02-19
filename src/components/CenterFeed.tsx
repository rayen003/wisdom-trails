import { useState } from "react";
import { Image, FileText, Video, MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send } from "lucide-react";
import avatarJane from "@/assets/avatar-jane.jpg";
import avatarMarcus from "@/assets/avatar-marcus.jpg";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { BooksWidget } from "@/components/BooksWidget";

interface FeedPost {
  id: string;
  author: string;
  title: string;
  time: string;
  avatar: string;
  initials: string;
  content: string;
  likes: number;
  comments: number;
  reposts: number;
}

const POSTS: FeedPost[] = [
  {
    id: "1",
    author: "Sophie Marchetti",
    title: "Senior Product Manager · 2nd",
    time: "3h • 🌐",
    avatar: avatarJane,
    initials: "SM",
    content:
      "Just finished reading Zero to One — absolutely brilliant insight on building monopolies vs. competing. Every founder and PM should read this. The core idea: competition is for losers, monopoly is the goal. 📖\n\nWhat are you reading this month?",
    likes: 847,
    comments: 63,
    reposts: 29,
  },
  {
    id: "2",
    author: "Marcus Webb",
    title: "AI Research Lead · 1st",
    time: "1d • 🌐",
    avatar: avatarMarcus,
    initials: "MW",
    content:
      "The intersection of AI and human decision-making is one of the most fascinating areas of study right now. Reading \"Thinking, Fast and Slow\" alongside modern AI literature gives incredible perspective on where we're headed. 🧠\n\nKahneman's System 1 / System 2 framework maps almost perfectly onto how modern LLMs work.",
    likes: 2341,
    comments: 188,
    reposts: 94,
  },
];

const PostComposer = () => (
  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-3">
    <div className="flex items-center gap-2 mb-3">
      <img src={profileAvatar} alt="You" className="w-10 h-10 rounded-full object-cover border border-[hsl(var(--border))]" />
      <button className="flex-1 border border-[hsl(var(--muted-foreground))] rounded-full px-4 py-2 text-[13px] text-[hsl(var(--muted-foreground))] text-left hover:bg-[hsl(var(--muted))] transition-colors">
        Start a post
      </button>
    </div>
    <div className="flex items-center justify-between">
      {[
        { icon: Video, label: "Video", color: "text-[#5f9b41]" },
        { icon: Image, label: "Photo", color: "text-[#378fe9]" },
        { icon: FileText, label: "Write article", color: "text-[#e06847]" },
      ].map(({ icon: Icon, label, color }) => (
        <button key={label} className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-[hsl(var(--muted))] transition-colors">
          <Icon className={`w-4 h-4 ${color}`} />
          <span className="text-[12px] font-semibold text-[hsl(var(--muted-foreground))]">{label}</span>
        </button>
      ))}
    </div>
  </div>
);

const FeedPost = ({ post }: { post: FeedPost }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-start gap-2 p-3 pb-2">
        <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-[hsl(var(--border))] shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <div>
              <p className="text-[13px] font-semibold text-[hsl(var(--card-foreground))] leading-tight">{post.author}</p>
              <p className="text-[11px] text-[hsl(var(--muted-foreground))]">{post.title}</p>
              <p className="text-[11px] text-[hsl(var(--muted-foreground))]">{post.time}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="text-primary text-[12px] font-semibold hover:underline">+ Follow</button>
              <button className="p-1 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--card-foreground))]">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-3">
        <p className="text-[13px] text-[hsl(var(--card-foreground))] leading-relaxed whitespace-pre-line">{post.content}</p>
      </div>

      {/* Reactions summary */}
      <div className="flex items-center justify-between px-3 py-1 text-[11px] text-[hsl(var(--muted-foreground))] border-t border-[hsl(var(--border))]">
        <span>👍 {liked ? post.likes + 1 : post.likes}</span>
        <div className="flex gap-2">
          <span>{post.comments} comments</span>
          <span>{post.reposts} reposts</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex border-t border-[hsl(var(--border))]">
        {[
          { icon: ThumbsUp, label: "Like", action: () => setLiked(!liked), active: liked },
          { icon: MessageCircle, label: "Comment", action: () => {}, active: false },
          { icon: Repeat2, label: "Repost", action: () => {}, active: false },
          { icon: Send, label: "Send", action: () => {}, active: false },
        ].map(({ icon: Icon, label, action, active }) => (
          <button
            key={label}
            onClick={action}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[12px] font-semibold transition-colors hover:bg-[hsl(var(--muted))] ${
              active ? "text-primary" : "text-[hsl(var(--muted-foreground))]"
            }`}
          >
            <Icon className="w-4 h-4" strokeWidth={active ? 2.5 : 1.5} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const CenterFeed = () => {
  return (
    <div className="flex-1 min-w-0 max-w-[555px] space-y-2">
      {/* Feed selector */}
      <div className="flex items-center justify-end">
        <button className="text-[12px] text-[hsl(var(--muted-foreground))] font-medium flex items-center gap-1 hover:text-[hsl(var(--card-foreground))]">
          Select feed view: <span className="font-bold text-[hsl(var(--card-foreground))]">Most relevant first</span>
          <span>▾</span>
        </button>
      </div>

      {/* Post composer */}
      <PostComposer />

      {/* First post */}
      <FeedPost post={POSTS[0]} />

      {/* 📚 Books You Might Like Widget */}
      <BooksWidget />

      {/* Second post */}
      <FeedPost post={POSTS[1]} />
    </div>
  );
};
