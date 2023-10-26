export const RecentWriting = () => {
    return (
      <div className='p-5 rounded-lg bg-zinc-800 transition-all cursor-pointer'>
        <figure className="border-l-2 border-gray-500 pl-2">
          <blockquote className="text-xs leading-2 tracking-tight text-gray-500">
            <p>
              October 26, 2023
            </p>
          </blockquote>
        </figure>
        <div className='mt-3'>
          <h1 className=' font-medium'>Mic Check</h1>
          <p className='text-sm text-gray-400 mt-2 font-light'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laboriosam fugit nisi est omnis molestias. Asperiores, unde, blanditiis, ipsam consectetur illo dolores sed impedit repudiandae quo magni incidunt minus cumque!
          </p>
  
          <div className='mt-2'>
            <a href="" className='text-emerald-600 flex items-center'>
              <span className='text-sm'>Read</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
  
            </a>
          </div>
        </div>
      </div>
    )
  }