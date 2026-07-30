import { InfiniteRibbon } from "@/components/ui/infinite-ribbon"

export default function InfiniteRibbonDemo() {
  return (
    <div className="relative flex h-70 w-full items-center justify-center overflow-hidden bg-white py-8">
      <InfiniteRibbon 
        rotation={3} 
        className="absolute w-[120%] bg-black text-white uppercase font-bold text-xs tracking-[0.2em] py-3 border-y border-white/10"
        duration={15}
        repeat={6}
      >
        ORVELLA COFFEE • PREMIUM QUALITY BEANS • FRESHLY BREWED DAILY • CRAFTED WITH PASSION • 
      </InfiniteRibbon>
      <InfiniteRibbon 
        reverse={true} 
        rotation={-3}
        className="absolute w-[120%] bg-white text-black uppercase font-bold text-xs tracking-[0.2em] py-3 border-y border-black/10 shadow-sm"
        duration={15}
        repeat={6}
      >
        VISIT OUR CAFE • SENSE THE FLAVORS • FRESH INGREDIENTS • ARTISANAL EXPERIENCE • 
      </InfiniteRibbon>
    </div>
  )
}
