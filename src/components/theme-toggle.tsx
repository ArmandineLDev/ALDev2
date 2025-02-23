"use client";

import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

export const ThemeToggle = () => {
    const {theme, setTheme, systemTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
        setCurrentTheme(theme === "system" && systemTheme ? systemTheme : theme ?? null);
    }, [theme, systemTheme]);

    if (!mounted) return null;

    const handleToggle = () => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setCurrentTheme(newTheme);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={true}>
                <Button onClick={handleToggle} className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/20 hover:bg-primary/40 transition" aria-label={"Toggle theme"}>
                    {currentTheme === "dark"
                        ? (<Sun className="w-5 h-5"/> )
                        : (<Moon className="w-5 h-5"/>)
                    }
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}