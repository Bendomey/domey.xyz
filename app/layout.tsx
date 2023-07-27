import { classNames } from '@/lib/classnames'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import myMemoji from '@/assets/images/smile.png';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Domey Benjamin',
  description: 'I\'m a software engineer based in Accra, Ghana.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-zinc-950')}>
        <div className='px-32 py-16 grid grid-cols-11 gap-8'>
          <div className='col-span-11 sm:col-span-11 lg:col-span-3 '>
            <div className='bg-zinc-900 px-10 py-8 rounded-2xl border border-zinc-800'>
              <div className='flex justify-center items-center'>
                <div className=' bg-zinc-800 rounded-3xl px-9 py-4'>
                  <Image alt='My Memoji' src={myMemoji} className=' w-auto' />
                </div>
              </div>
              <div className='mt-7'>
                <h1 className='text-center font-semibold text-2xl'>Domey Benjamin</h1>
              </div>
              <div className='flex justify-center mt-5'>
                <div className='bg-zinc-800 px-5 py-1 rounded-lg'>
                  <span className='text-xs'>Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-11 sm:col-span-11 lg:col-span-8 '>
            <div className='bg-zinc-900 rounded-2xl border border-zinc-800'>
              <div className='flex items-end justify-between'>
                <div>
                  <div className='px-10'>
                    <h1 className='font-bold text-3xl'>About Me</h1>
                  </div>
                </div>
                <div className='px-5 py-5 border-b border-l border-zinc-800 rounded-bl-3xl rounded-tr-2xl bg-zinc-800 bg-opacity-50 flex align-items'>
                  {
                    ['About', 'Resume', 'Projects', 'Writings'].map((item, index) => (
                      <div className='mx-7 cursor-pointer' key={index}>
                        <span className={classNames('text-lg text-zinc-400 hover:text-emerald-600', index === 0 ? 'text-emerald-600' : '')}>{item}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='p-10'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
