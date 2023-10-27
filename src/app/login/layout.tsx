import Link from "next/link";
import NavBar from "../navbar/page";

const Layout = ({ children }: { children: React.ReactNode }) => (
    <div>
        <ul>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/dashboard">dashboard</Link></li>
            <li><Link href="#">demo-2</Link></li>
        </ul>
        {children}
    </div>
);
export default Layout;