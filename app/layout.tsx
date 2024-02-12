import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saleem || web developer',
  description: 'onlinesaleem@gmail.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      bg-grey-50 text-grey-950`}>
        {children}
        </body>
    </html>
  )
}
