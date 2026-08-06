"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type MenuSearchContextValue = {
    query: string;
    setQuery: (value: string) => void;
};

const MenuSearchContext = createContext<MenuSearchContextValue | null>(null);

export const MenuSearchProvider = ({ children }: { children: ReactNode }) => {
    const [query, setQuery] = useState("");

    return (
        <MenuSearchContext.Provider value={{ query, setQuery }}>
            {children}
        </MenuSearchContext.Provider>
    );
};

export const useMenuSearch = () => {
    const ctx = useContext(MenuSearchContext);
    if (!ctx) {
        throw new Error("useMenuSearch must be used within a MenuSearchProvider");
    }
    return ctx;
};