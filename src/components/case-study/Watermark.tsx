export function Watermark() {
    return (
        <div className="fixed bottom-8 right-8 z-50 pointer-events-none mix-blend-difference hidden lg:block">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold rotate-90 origin-bottom-right translate-x-full">
                Portfolio Case Study: Financial UX Strategy
            </p>
        </div>
    );
}
