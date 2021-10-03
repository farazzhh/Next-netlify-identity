import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <Image src="/volks.png" width={80} height={55} />
        
        <h1>VolksVibes</h1>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/guides"><a>Guides</a></Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/volks banner.png" width="auto" height="auto" />
      </div>
    </div>
  )
}
