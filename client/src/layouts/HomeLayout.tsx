import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const HomeLayout = () => {
  return (
    <main className='w-full p-4'>
        <section className="z-10 bg-[url('./HomeLayoutImage.jpg')] bg-cover h-screen rounded-xl">
            <Navbar />
        </section>
        <Outlet/>
    </main>
  )
}

export default HomeLayout