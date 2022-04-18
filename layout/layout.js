import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'
import { useEffect, Fragment } from 'react'
import { themeChange } from 'theme-change'

export default function Layout({
  children,
  title,
  description,
  image,
  slug,
  article,
}) {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    //max-w-7xl宽度参数参考：https://tailwindcss.com/docs/max-width
    <div className="max-w-full mx-auto px-2 sm:px-4  flex flex-col h-screen">
      <SEO
        title={title}
        description={description}
        image={image}
        slug={slug}
        article={article}
      />
      <NavBar />
      <div className="max-w-7xl  mx-auto px-2 sm:px-4  flex flex-col ">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
