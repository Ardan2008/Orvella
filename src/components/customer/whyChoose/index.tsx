import { Coffee, ChefHat, Leaf, Truck, Star } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

const reasons = [
    {
        icon: Coffee,
        title: "Premium Coffee Beans",
        desc: "Handpicked beans, chosen for their quality.",
    },
    {
        icon: ChefHat,
        title: "Expert Barista",
        desc: "Crafted by skilled, experienced baristas.",
    },
    {
        icon: Leaf,
        title: "Fresh Ingredients",
        desc: "Fresh ingredients in every cup.",
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        desc: "Quick delivery, straight to your door while it's warm.",
    },
    {
        icon: Star,
        title: "Quality Service",
        desc: "Friendly service that puts your satisfaction first.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative bg-white text-black">
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

                {/* Header */}
                <div className="max-w-xl">
                    <span className="text-xs tracking-[0.3em] uppercase text-black/50">
                        Why Orvella
                    </span>
                    <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                        <BlurReveal>Why Choose</BlurReveal>{" "}
                        <BlurReveal delay={0.1}>
                            <span className="italic">Us?</span>
                        </BlurReveal>
                    </h2>
                </div>

                {/* Reasons grid */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-5 border-t border-l border-black/10">
                    {reasons.map(({ icon: Icon, title, desc }, index) => (
                        <div
                            key={title}
                            className="group relative border-r border-b border-black/10 px-6 py-10 flex flex-col items-start gap-4 transition-colors duration-300 hover:bg-black"
                        >
                            <Icon
                                strokeWidth={1.25}
                                className="h-8 w-8 text-black transition-colors duration-300 group-hover:text-white"
                            />
                            <h3 className="font-serif text-base leading-snug transition-colors duration-300 group-hover:text-white">
                                <BlurReveal delay={index * 0.1}>{title}</BlurReveal>
                            </h3>
                            <p className="text-sm text-black/60 leading-relaxed transition-colors duration-300 group-hover:text-white/70">
                                <BlurReveal delay={index * 0.1 + 0.05}>{desc}</BlurReveal>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;