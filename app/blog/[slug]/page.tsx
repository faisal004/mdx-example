import { allBlogs } from '@/.contentlayer/generated'
import { Mdx } from '../_components/mdx-component'

export default async function Blog({ params }: { params: any }) {
  const blog = allBlogs.find(
    (blog) => blog._raw.flattenedPath === `blog/${params.slug}`,
  )
  if (!blog) {
    return
  }

  return (
    <div className="flex flex-col   text-white  items-start  justify-start mx-auto  px-3  md:px-0">
      <article className=" mb-10 max-w-[700px] md:p-10 p-5 w-full mx-auto ">
        <div className="flex flex-col gap-8 mx-1 md:mx-0  w-full  ">
          <div className="flex max-w-2xl flex-col gap-4 text-pretty  w-full">
            <h1 className="text-3xl font-bold leading-tight tracking-tight  text-left">
              {blog.title}
            </h1>
          </div>
          <div className='prose prose-headings:text-white prose-p:text-white w-full '>
            <Mdx code={blog.body.code} />
          </div>
        </div>
      </article>
    </div>
  )
}
