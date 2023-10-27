'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div>
      {
        pathname !== "/about/aboutcollege" ? <ul>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/dashboard">dashboard</Link></li>
          <li><Link href="#">demo-2</Link></li>
        </ul> : null
      }
      {children}
    </div>
  )
};
export default Layout;