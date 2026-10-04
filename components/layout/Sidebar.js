import Link from "next/link"
import { nav } from "@/data/site"

export default function Sidebar({ onNavigate }) {
    return (
        <>
            <ul className="navigation">
                {nav.map((item) => (
                    <li key={item.href}><Link href={item.href} onClick={onNavigate}>{item.label}</Link></li>
                ))}
            </ul>
        </>
    )
}
