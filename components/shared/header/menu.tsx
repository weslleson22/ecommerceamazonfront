import { ShoppingCartIcon, UserIcon }  from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex items-end">
            <nav>
            <Link href="/cart" className="header-button">
                <UserIcon className="h-8 w-8 "/>
                <span className="font-bold">Sing In</span>
            </Link>
            <Link href="/cart" className="header-button">
                <ShoppingCartIcon className="h-8 w-8" />
                <span className="font-bold">Card</span>
            </Link>
            </nav>
        </div>
    )
}