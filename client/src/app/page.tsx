import { Search, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import CaseCard from "./case-card"
import { NavigationMenu } from "./navigation-menu"

const cases = [
  {
    id: 1,
    name: "Emerald Blaze",
    price: 144.69,
    image: "https://static.skinrave.gg/cases/case256.webp",
    isNew: true,
    color: "from-emerald-400 to-green-600",
  },
  {
    id: 2,
    name: "Crimson Fury",
    price: 276.17,
    image: "https://static.skinrave.gg/cases/case255.webp",
    isNew: true,
    color: "from-red-500 to-rose-700",
  },
  {
    id: 3,
    name: "Sapphire Dream",
    price: 189.99,
    image: "https://static.skinrave.gg/cases/case253.webp",
    isNew: true,
    color: "from-blue-400 to-indigo-600",
  },
  {
    id: 4,
    name: "Golden Glory",
    price: 256.5,
    image: "https://static.skinrave.gg/cases/case252.webp",
    color: "from-yellow-400 to-amber-600",
  },
  {
    id: 5,
    name: "Amethyst Aura",
    price: 199.99,
    image: "https://static.skinrave.gg/cases/case254.webp",
    color: "from-purple-400 to-indigo-600",
  },
  {
    id: 6,
    name: "Neon Striker",
    price: 299.99,
    image: "https://static.skinrave.gg/cases/case271.webp",
    isRisky: true,
    color: "from-green-400 to-blue-500",
  },
  {
    id: 7,
    name: "Inferno Blaze",
    price: 178.5,
    image: "https://static.skinrave.gg/cases/case270.webp",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 8,
    name: "Arctic Frost",
    price: 145.0,
    image: "https://static.skinrave.gg/cases/case273.webp",
    color: "from-cyan-400 to-blue-600",
  },
  {
    id: 9,
    name: "Nebula Nexus",
    price: 289.99,
    image: "https://static.skinrave.gg/cases/case274.webp",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 10,
    name: "Toxic Hazard",
    price: 167.99,
    image: "https://static.skinrave.gg/cases/case272.webp",
    isNew: true,
    color: "from-green-500 to-yellow-400",
  },
  {
    id: 11,
    name: "Phantom Ops",
    price: 234.5,
    image: "https://static.skinrave.gg/cases/case275.webp",
    isRisky: true,
    color: "from-gray-600 to-gray-900",
  },
  {
    id: 12,
    name: "Cyber Punk",
    price: 189.99,
    image: "https://static.skinrave.gg/cases/case276.webp",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 13,
    name: "Dragon's Hoard",
    price: 399.99,
    image: "https://static.skinrave.gg/cases/case281.webp",
    isNew: true,
    color: "from-red-600 to-yellow-500",
  },
  {
    id: 14,
    name: "Stealth Ops",
    price: 299.99,
    image: "https://static.skinrave.gg/cases/case280.webp",
    color: "from-gray-700 to-gray-900",
  },
  {
    id: 15,
    name: "Quantum Flux",
    price: 349.99,
    image: "https://static.skinrave.gg/cases/case277.webp",
    isNew: true,
    color: "from-blue-400 to-purple-600",
  },
]

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
                  CSGO Cases
                </span>
              </div>
              <NavigationMenu />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                <Star className="w-4 h-4 mr-2" />
                Favorites
              </Button>
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 transition-opacity">
                <TrendingUp className="w-4 h-4 mr-2" />
                WALLET
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity">
                SIGN IN
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Featured Cases
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400/10 to-blue-500/10 border border-green-500/20 text-green-400">
              {cases.length} Cases Available
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px] bg-black/50 border-gray-800">
                <SelectValue placeholder="PRICE: ALL" />
              </SelectTrigger>
              <SelectContent className="bg-black border-gray-800">
                <SelectItem value="all">PRICE: ALL</SelectItem>
                <SelectItem value="low">Low to High</SelectItem>
                <SelectItem value="high">High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px] bg-black/50 border-gray-800">
                <SelectValue placeholder="NEWEST FIRST" />
              </SelectTrigger>
              <SelectContent className="bg-black border-gray-800">
                <SelectItem value="newest">NEWEST FIRST</SelectItem>
                <SelectItem value="oldest">OLDEST FIRST</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for a Case"
                className="pl-10 bg-black/50 border-gray-800 w-[200px] focus:ring-2 ring-green-500/20"
              />
            </div>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cases.map((item) => (
            <CaseCard key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  )
}

