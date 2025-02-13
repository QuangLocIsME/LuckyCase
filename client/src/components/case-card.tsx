"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface CaseCardProps {
    id: number
    name: string
    price: number
    image: string
    isNew?: boolean
    isRisky?: boolean
    color?: string
}

export default function CaseCard({
    name,
    price,
    image,
    isNew,
    isRisky,
    color = "from-purple-500 to-blue-500",
}: CaseCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* Case Image Container */}
            <div
                className={cn(
                    "relative rounded-lg overflow-hidden transition-all duration-300",
                    isHovered && "transform scale-105 shadow-lg shadow-black/50",
                )}
            >
                {/* Case Image */}
                <div className="aspect-[4/3] relative">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority
                    />
                </div>

                {/* Overlay for better text readability */}
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent",
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    )}
                />

                {/* Glow Effect */}
                <div
                    className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-300",
                        `bg-gradient-to-r ${color} mix-blend-overlay`,
                        isHovered && "opacity-30",
                    )}
                />

                {/* Favorite Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        setIsFavorite(!isFavorite)
                    }}
                    className={cn(
                        "absolute top-2 right-2 p-2 rounded-full transition-all duration-300",
                        "bg-black/50 hover:bg-black/70",
                        "opacity-0 group-hover:opacity-100",
                        isFavorite && "text-yellow-400",
                    )}
                >
                    <Star className="w-4 h-4" />
                </button>
            </div>

            {/* Labels */}
            <div className="absolute top-2 left-2 flex gap-2">
                {isNew && (
                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
                        NEW
                    </span>
                )}
                {isRisky && (
                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
                        RISKY
                    </span>
                )}
            </div>

            {/* Case Info */}
            <div className="mt-3 text-center">
                <h3 className="text-sm font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 transition-all">
                    {name}
                </h3>
                <p className="text-sm text-gray-400">${price.toFixed(2)}</p>
            </div>
        </div>
    )
}

