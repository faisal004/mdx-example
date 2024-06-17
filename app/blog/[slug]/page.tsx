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
    <div className="flex flex-col  pt-28 text-white  bg-zinc-900 items-start  justify-start mx-auto min-h-screen px-3  md:px-0">
      <article className=" mb-10 max-w-[700px] p-10  ">
        <div className="flex flex-col gap-8 mx-1 md:mx-0   ">
          <div className="flex max-w-2xl flex-col gap-4 text-pretty  w-full">
            <h1 className="text-3xl font-bold leading-tight tracking-tight  text-left">
              {blog.title}
            </h1>
          </div>
          <div>
            <Mdx code={blog.body.code} />
          </div>
        </div>
      </article>
    </div>
  )
}
