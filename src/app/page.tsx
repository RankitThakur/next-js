'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>here is home page</div>
      <Link href="/dashboard">Go to dashboard</Link>
      <br />
      <br />
      <br />

      <button onClick={() => router.push('/dashboard/navbar')}>Go to dashboard</button>
    </main>
  )
}
