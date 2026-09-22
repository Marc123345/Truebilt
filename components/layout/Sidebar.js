import Link from "next/link"
import { nav } from "@/data/site"

export default function Sidebar() {
    return (
        <>
            <ul className="navigation">
                {nav.map((item) => (
                    <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                ))}
            </ul>
        </>
    )
}
