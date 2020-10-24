import Link from 'next/link'

export default function Links() {
  return (
      <ul className="navbar">
        <li><Link href={'/'}><a>Home</a></Link></li>
        <span>
          <li><Link href={'/profile'}><a>Profile</a></Link></li>
          <li><Link href={'/login'}><a>Login</a></Link></li>
        </span>
      </ul>
  )
}