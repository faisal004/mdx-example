import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: `blog/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },

    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Blog],
    mdx: {
        // @ts-ignore
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: "github-dark" }]]
    }
})