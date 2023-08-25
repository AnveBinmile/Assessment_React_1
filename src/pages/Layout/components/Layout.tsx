import LayoutText from './LayoutText'
import LayoutImage from './LayoutImage'

const Layout = () => {
    return (
        <div className='flex mt-[50px] sm:items-center sm:justify-end gap-[50px]  md:gap-0 xl:gap-[200px] xl:flex-row flex-col items-center'>
           <LayoutText/>
           <LayoutImage/>
        </div>
      )
}

export default Layout;