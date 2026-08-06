"use client";

import { ShoppingBag } from "lucide-react";

const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

type CartBarProps = {
    itemCount: number;
    total: number;
};

const CartBar = ({ itemCount, total }: CartBarProps) => {
    const visible = itemCount > 0;

    return (
        <div
            className={`fixed inset-x-0 bottom-6 z-30 flex justify-center px-6 transition-all duration-500 ease-out ${
                visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-6 opacity-0"
            }`}
            aria-hidden={!visible}
        >
            <button
                type="button"
                className="flex items-center gap-4 rounded-full bg-black pl-5 pr-2 py-2 text-white shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <ShoppingBag strokeWidth={1.5} className="h-4 w-4" />
                    <span
                        key={itemCount}
                        className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-semibold text-black cart-bump"
                    >
                        {itemCount}
                    </span>
                </span>

                <span className="text-sm font-medium pr-2">
                    {formatRupiah(total)}
                </span>

                <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
                    Lihat Keranjang
                </span>
            </button>
        </div>
    );
};

export default CartBar;