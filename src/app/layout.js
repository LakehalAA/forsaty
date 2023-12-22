import './globals.css'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import Head from 'next/head'

export const metadata = {
  title: 'Forsaty',
  description: 'Forsaty',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <body className={`text-base text-slate-950 dark:text-white dark:bg-slate-900`}>{children}</body>
    </html>
  )
}
