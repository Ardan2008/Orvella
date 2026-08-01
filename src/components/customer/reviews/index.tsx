import { Marquee } from "@/components/ui/marquee";
import { BlurReveal } from "@/components/ui/blur-reveal";
import Image from "next/image";
import { Star } from "lucide-react";

const items = [
  {
    name: "Emma Wilson",
    image: "/ava.png",
    rating: 5,
    body: "This design system has transformed our workflow. The components are intuitive and well-documented.",
  },
  {
    name: "Lucas Chen",
    image: "/ava.png",
    rating: 5,
    body: "The components are well-structured and customizable. They've significantly reduced our development time.",
  },
  {
    name: "Sophia Martinez",
    image: "/ava.png",
    rating: 4,
    body: "Every component feels polished and professional. It's become our go-to resource for all projects.",
  },
  {
    name: "Oliver Thompson",
    image: "/ava.png",
    rating: 5,
    body: "This design system brings consistency and efficiency to our creative process. Beautiful and functional.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-2 flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-neutral-200 text-neutral-200 dark:fill-neutral-800 dark:text-neutral-800"
          }`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ item }: { item: (typeof items)[number] }) {
  return (
    <div className="relative flex h-full w-[20rem] flex-col items-start justify-between rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
      <div>
        <StarRating rating={item.rating} />
        <div className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
          {item.body}
        </div>
      </div>
      <div className="mt-auto flex items-center gap-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
            width={50}
            height={50}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-medium text-neutral-950 dark:text-neutral-50">
            {item.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="from-background absolute inset-y-0 left-0 z-10 w-30 bg-linear-to-r to-transparent" />
      <div className="from-background absolute inset-y-0 right-0 z-10 w-30 bg-linear-to-l to-transparent" />
      <Marquee className="py-2" direction="left">
        {[...items, ...items].map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </Marquee>
      <Marquee className="py-2" direction="right">
        {[...items, ...items].map((item, index) => (
          <TestimonialCard key={index} item={item} />
        ))}
      </Marquee>
    </div>
  )
}

const Reviews = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden border-t border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-black/50">
            What they say
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            <BlurReveal>Customer</BlurReveal>{" "}
            <BlurReveal delay={0.1}>
              <span className="italic">Reviews</span>
            </BlurReveal>
          </h2>
        </div>

        <MarqueeDemo />
      </div>
    </section>
  );
};

export default Reviews;