import { GithubIcon, MenuIcon, MoonIcon, SunIcon } from "lucide-react"
import Logo from "./logo"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useTheme } from "../theme-provider"





const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    display: 'flex',
}

const pages = [
    { name: 'Accueil', link: '/' },
    { name: 'Connaissances', link: '/about' },
    { name: 'Avis', link: '/avis' },
    { name: 'Projets', link: '/services' },
    { name: 'Contact', link: '/contact' }
]

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    return (
        <header className="p-[2vh] px-[5vh]">
            <nav style={headerStyle}>
                <>
                    <Logo />
                    <div className="flex-1"></div>
                    <DropdownMenu>
                        <DropdownMenuTrigger><MenuIcon className="scale-[200%]" /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {pages.map(page => (
                                <DropdownMenuItem key={page.name} onClick={() => { document.location.href = page.link }}>{page.name}</DropdownMenuItem>
                            ))}
                            <DropdownMenuItem onClick={() => document.location.href = "https://github.com/hitokii"}><GithubIcon /> GitHub</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? 'light' : 'dark')}>{theme === "dark" ? <MoonIcon /> : <SunIcon />} Theme</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            </nav>
        </header>
    )
}