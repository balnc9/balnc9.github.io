import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
        title: 'Matthew Chin - Portfolio',
        description: 'Software Developer Portfolio showcasing my work and experience',
}

export default function RootLayout({
        children,
}: {
        children: React.ReactNode
}) {
        return (
                <html lang="en" className="scroll-smooth">
                        <body className={`${inter.className} bg-gray-50 text-gray-900`}>
                                {children}
                        </body>
                </html>
        )
} 