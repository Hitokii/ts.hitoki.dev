import { GithubIcon, MenuIcon, MoonIcon, SunIcon } from "lucide-react"
import { Button } from "./button"
import Logo from "./logo"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { isMobile } from "react-device-detect"
import { useTheme } from "../theme-provider"
import Meteors from "../magicui/meteors"
import RetroGrid from "../magicui/retro-grid"




const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    display: 'flex',
}

const pages = [
    { name: 'Accueil', link: '/' },
    { name: 'Connaissances', link: '/about' },
    { name: 'Projets', link: '/services' },
    { name: 'Contact', link: '/contact' }
]

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    return (
        <header style={{ padding: '3vh', paddingInline: '15vw' }}>
            <nav style={headerStyle}>
                <>
                <Logo />
                <div style={{flex: 1}}></div>
                <DropdownMenu>
                <DropdownMenuTrigger><MenuIcon/></DropdownMenuTrigger>
                <DropdownMenuContent>
                    {pages.map(page => (
                        <DropdownMenuItem key={page.name} onClick={() => {document.location.href = page.link}}>{page.name}</DropdownMenuItem>
                    ))}
                <DropdownMenuItem onClick={() => document.location.href = "https://github.com/hitokii"}><GithubIcon/> GitHub</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme(theme == "dark" ? 'light' : 'dark')}>{theme == "dark" ? <MoonIcon/> : <SunIcon/>} Thèmes</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
                    </>
            </nav>
        </header>
    )
}