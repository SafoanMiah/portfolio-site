import React, { createContext, useContext, useState, ReactNode } from "react";

interface AccentColorContextType {
    accentColor: string;
    changeAccentColor: () => void;
}

const AccentColorContext = createContext<AccentColorContextType | undefined>(undefined);

export const AccentColorProvider = ({ children }: { children: ReactNode }) => {
    const [accentColor, setAccentColor] = useState("#14B8A6");

    const changeAccentColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setAccentColor(randomColor);
    };

    return (
        <AccentColorContext.Provider value={{ accentColor, changeAccentColor }}>
            {children}
        </AccentColorContext.Provider>
    );
};

export const useAccentColor = () => {
    const context = useContext(AccentColorContext);
    if (!context) {
        throw new Error("useAccentColor must be used within an AccentColorProvider");
    }
    return context;
}; 