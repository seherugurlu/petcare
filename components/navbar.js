import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#c9f0c1' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/pets">My Pets</Link> |{' '}
      <Link href="/appointments">Appointments</Link>
    </nav>
  );
}
