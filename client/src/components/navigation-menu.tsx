"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu as Nav,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Gamepad2, Gift, Trophy, Users, Zap } from "lucide-react"

const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
    {
        title: "Popular Cases",
        href: "/cases/popular",
        description: "Discover the most opened cases by our community.",
        icon: <Trophy className="w-4 h-4" />,
    },
    {
        title: "New Arrivals",
        href: "/cases/new",
        description: "Be the first to explore our latest case additions.",
        icon: <Zap className="w-4 h-4" />,
    },
    {
        title: "Special Events",
        href: "/events",
        description: "Limited-time cases and exclusive rewards.",
        icon: <Gift className="w-4 h-4" />,
    },
    {
        title: "Community Favorites",
        href: "/community",
        description: "Top-rated cases chosen by players like you.",
        icon: <Users className="w-4 h-4" />,
    },
]

export function NavigationMenu() {
    return (
        <Nav>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        <Gamepad2 className="w-4 h-4 mr-2" /> Browse Cases
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    className="cursor-pointer"
                                >
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        {component.icon}
                                        {component.description}
                                    </div>
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                            Rewards
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                            Support
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </Nav>
    )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</div>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    },
)
ListItem.displayName = "ListItem"

