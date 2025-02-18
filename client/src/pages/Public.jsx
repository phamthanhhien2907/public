import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomBar from '@/components/BottomBar'
import { useEffect } from 'react'

const Public = () => {
  const path = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])
  return (
    <div className='max-sm:hidden max-lg:hidden w-full'>
        <TopBar/>
        <div className='pt-[110px]'>
          <Outlet/>
        </div>
        <BottomBar/>
    </div>
  )
}

export default Public