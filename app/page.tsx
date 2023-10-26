'use client'
import { RecentWriting } from '@/components/home/recent-writing'
import { ToolsAndTech } from '@/components/home/tools-and-tech'



export default function Home() {
  return (
    <>
      <div className=' mb-5'>
        <h1 className='font-bold text-3xl'>About Me</h1>
      </div>
      <p className='font-extralight tracking-wide'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laboriosam fugit nisi est omnis molestias. Asperiores, unde, blanditiis, ipsam consectetur illo dolores sed impedit repudiandae quo magni incidunt minus cumque!
      </p>
      <p className='mt-3 tracking-wide font-extralight'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laboriosam fugit nisi est omnis molestias. Asperiores, unde, blanditiis, ipsam consectetur illo dolores sed impedit repudiandae quo magni incidunt minus cumque!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laboriosam fugit nisi est omnis molestias. Asperiores, unde, blanditiis, ipsam consectetur illo dolores sed impedit repudiandae quo magni incidunt minus cumque!
      </p>

      <div className='mt-5'>
        <h1 className='font-semibold text-lg'>Recent Writings</h1>
        <div className='mt-4'>
          <RecentWriting />
        </div>
      </div>

      <div className='mt-5'>
        <h1 className='font-semibold text-lg'>Tools And Technologies</h1>
        <div className='mt-4'>
          <ToolsAndTech />
        </div>
      </div>
    </>
  )
}
