export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
}

export const posts: BlogPost[] = [
  {
    id: "the-art-of-slow-living",
    title: "The Art of Slow Living",
    excerpt: "In a world obsessed with speed and productivity, there's a quiet revolution happening — people are choosing to slow down, savor moments, and find meaning in simplicity.",
    content: `In a world obsessed with speed and productivity, there's a quiet revolution happening — people are choosing to slow down, savor moments, and find meaning in simplicity.

The concept of slow living isn't about doing everything at a snail's pace. It's about being intentional. It's about choosing quality over quantity, depth over breadth, and presence over distraction.

Morning rituals become sacred. A cup of coffee isn't just caffeine — it's warmth cradled in your hands, the aroma filling the kitchen, the quiet before the world demands your attention. A walk isn't exercise — it's noticing the way light filters through leaves, the sound of birdsong you'd otherwise miss.

Slow living asks us to question the narratives we've internalized: that busyness equals importance, that rest is laziness, that more is always better. What if enough is already here?

The practice begins small. Put your phone in another room during dinner. Read a physical book. Cook a meal from scratch without rushing. Watch the sunset without photographing it. These aren't radical acts — they're reclamations of your attention, your most precious resource.`,
    date: "February 12, 2026",
    author: "Elena Moreau",
    readTime: "5 min read",
  },
  {
    id: "designing-for-silence",
    title: "Designing for Silence",
    excerpt: "Great design isn't always loud. Sometimes the most powerful interfaces are the ones that get out of the way — creating space for thought, focus, and clarity.",
    content: `Great design isn't always loud. Sometimes the most powerful interfaces are the ones that get out of the way — creating space for thought, focus, and clarity.

We live in an era of notification badges, infinite scrolls, and attention-grabbing animations. Every pixel fights for your gaze. But what if we designed for the opposite? What if silence was the feature?

Consider the blank page. Writers have feared it for centuries, but it's also the most generous canvas — pure potential, free of noise. The best writing tools understand this. They strip away toolbars, sidebars, and menus until all that remains is you and your words.

This philosophy extends beyond text editors. Maps that show only what you need. Calendars that breathe. Music players that let the album art speak. These are designs that trust their users, that resist the urge to fill every corner with something.

Designing for silence requires courage. It means saying no to features that "might be useful." It means accepting that white space isn't wasted space — it's breathing room. It means believing that what you remove is just as important as what you add.

The result? Interfaces that feel like a deep breath. Products that respect your time and attention. Experiences that linger, not because they were flashy, but because they were thoughtful.`,
    date: "February 8, 2026",
    author: "Thomas Akira",
    readTime: "6 min read",
  },
  {
    id: "letters-we-never-send",
    title: "Letters We Never Send",
    excerpt: "There's a drawer in everyone's mind filled with unsent letters — words we composed but never delivered. What do these phantom messages tell us about connection?",
    content: `There's a drawer in everyone's mind filled with unsent letters — words we composed but never delivered. What do these phantom messages tell us about connection?

We've all done it. Typed a message, stared at it, then deleted every character. Written an email that said exactly what we felt, then saved it to drafts where it still sits, months later. Rehearsed a conversation in the shower that we'll never actually have.

These unsent letters aren't failures of communication. They're evidence of its complexity. They show that we think carefully about our words, that we weigh the cost of honesty against the comfort of silence.

Sometimes the unsent letter is an act of mercy — words that would wound without healing. Sometimes it's fear — vulnerability that feels too expensive. And sometimes it's simply timing — the right words arriving after the moment has passed.

But here's what's beautiful about them: the act of writing, even without sending, changes us. It clarifies our thinking, processes our emotions, and sometimes — just sometimes — it's enough. The letter doesn't need a recipient to serve its purpose.

So keep writing them. Keep that drawer full. And every once in a while, when the moment is right and the courage is there, reach in and finally send one. You might be surprised by what comes back.`,
    date: "February 3, 2026",
    author: "Mia Chen",
    readTime: "4 min read",
  },
  {
    id: "the-geography-of-memory",
    title: "The Geography of Memory",
    excerpt: "Places hold our memories like vessels. A street corner, a café, a park bench — each one a coordinate in the atlas of our lives, waiting to be revisited.",
    content: `Places hold our memories like vessels. A street corner, a café, a park bench — each one a coordinate in the atlas of our lives, waiting to be revisited.

You can move across the world, but you can never truly leave the places that shaped you. They live in your body — in the way certain lighting makes you nostalgic, how a particular smell transports you decades backward in an instant, why some streets feel like home even when you've never lived on them.

Memory and place are entangled in ways neuroscience is only beginning to understand. The hippocampus, the brain's memory center, is also its spatial navigation system. We don't just remember events — we remember where they happened. The room, the weather, the quality of light.

This is why revisiting old places can be so disorienting. The café where you had your first date now serves different coffee. The childhood playground has been rebuilt. The city has grown around your memories, indifferent to their significance.

But the coordinates remain. Stand on that corner, and your body remembers what your mind might have filed away. The geography of memory is always there, beneath the surface, waiting for you to walk its streets again.`,
    date: "January 28, 2026",
    author: "Rafael Souza",
    readTime: "5 min read",
  },
];

export function getPostById(id: string): BlogPost | undefined {
  return posts.find((p) => p.id === id);
}
