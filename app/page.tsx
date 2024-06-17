import Link from 'next/link'
import { allBlogs } from '../.contentlayer/generated'

export default function Home() {
  const blogs = allBlogs
  return (
    <main className="flex min-h-screen flex-col items-start  justify-center p-24">
      <div className='text-2xl mb-10'>All Blogs</div>
      {blogs.map((blog, index) => (
        <Link href={`/${blog._raw.flattenedPath}`} key={index} className='hover:underline'>{blog.title}</Link>
      ))}
    </main>
  )
}
