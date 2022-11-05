import './globals.css'
import 'tailwindcss/tailwind.css'
import { Inconsolata } from '@next/font/google'

const inconsolata = Inconsolata({
  variable: '--inconsolata'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inconsolata.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
