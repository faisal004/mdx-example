import { allBlogs } from "@/.contentlayer/generated"




export default async function Blog({ params }: { params: any }) {
    console.log(allBlogs[0]._raw.flattenedPath)
    console.log(params.slug)
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === `blog/${params.slug}`)
console.log(blog)
  if (!blog) {
    return
  }

  return (
    <div className="flex flex-col  pt-28 text-white  bg-zinc-900 items-center justify-start mx-auto min-h-screen px-3  md:px-0">
  
      
      <article className=" mb-10 max-w-[700px] ">
        <div className="flex flex-col gap-8 mx-1 md:mx-0   ">
          <div className="flex max-w-2xl flex-col gap-4 text-pretty  w-full">
            <h1 className="text-3xl font-bold leading-tight tracking-tight  text-left">
              {blog.title}
            </h1>
          </div>
       
        </div>
   
      </article>
    </div>
  )
}
