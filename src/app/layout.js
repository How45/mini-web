import { Kanit } from 'next/font/google';

export const metadata = {
  title: 'Home Projects',
  description: 'Different projects on Next.js',
}

const kanitFont = Kanit({
  path: './Kanit-Regular.woff2',
  weight: ['300','400','500'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kanitFont.className}>{children}</body>
    </html>
  )
}
