import { classNames } from '@/lib/classnames'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import myMemoji from '@/assets/images/smile.png';
import { SVGProps } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Domey Benjamin',
  description: 'I\'m a software engineer based in Accra, Ghana.',
}


const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/benjamin-armah-kesey-domey',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Bendomey',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/DomeyBenjamin',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },

  {
    name: 'GMail',
    href: 'mailto:domeybenjamin1@gmail.com',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>

    ),
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-zinc-950')}>
          <div className='px-5 md:px-32 py-5 md:py-16 grid grid-cols-11 gap-8'>
            <div className='col-span-11 sm:col-span-11 lg:col-span-3 '>
              <div className='bg-zinc-900 px-10 py-8 rounded-2xl border border-zinc-800'>
                <div className='flex justify-center items-center'>
                  <div className=' bg-zinc-800 rounded-3xl px-9 py-4'>
                    <Image alt='My Memoji' src={myMemoji} className=' w-auto' />
                  </div>
                </div>
                <div className='mt-5'>
                  <h1 className='text-center font-semibold text-2xl'>Domey Benjamin</h1>
                </div>
                <div className='flex justify-center mt-3'>
                  <div className='bg-zinc-800 px-5 py-1 rounded-lg'>
                    <span className='text-xs'>Software Engineer</span>
                  </div>
                </div>

                <div className='flex justify-center items-center mt-5'>
                  <div className="flex space-x-6 ">
                    {socials.map((item) => (
                      <a key={item.name} target='__blank' href={item.href} className="text-gray-500 hover:text-gray-400">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-11 sm:col-span-11 lg:col-span-8'>
              <div className='bg-zinc-900 rounded-2xl border border-zinc-800'>
                <div className='flex items-end justify-between'>
                  <div />
                  <div className='hidden px-5 py-5 border-b border-l border-zinc-800 rounded-bl-3xl rounded-tr-2xl bg-zinc-800 bg-opacity-50 md:flex align-items'>
                    {
                      ['About', 'Resume', 'Projects', 'Writings'].map((item, index) => (
                        <div className='mx-7 cursor-pointer' key={index}>
                          <span className={classNames('text-lg text-zinc-400 hover:text-emerald-600', index === 0 ? 'text-emerald-600' : '')}>{item}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className='px-5 md:px-10 py-10 lg:max-h-[75vh] overflow-scroll'>
                  {children}
                </div>
              </div>
            </div>
          </div>
      </body>
    </html>
  )
}
