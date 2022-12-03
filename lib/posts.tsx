import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export interface PostMatter {
  date: string;
  title: string;
  tags: string[];
  abstract: string;
  m3u8: string;
  time: number;
  score: number;
}

export interface PostFileData {
  id: string;
  matter: PostMatter;
  contentHtml: string;
}

export interface PostData {
  fileData: PostFileData;
  view?: number;
}

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getSortedPostsData(): Promise<PostData[]> {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData: PostData[] = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const contentHtml = await matterResultToHtml(matterResult)

    // Combine the data with the id
    return {
      fileData: {
        id: id,
        matter: matterResult.data as PostMatter,
        contentHtml: contentHtml
      },
      view: 0
    }
  }))
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.fileData.matter.date < b.fileData.matter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const contentHtml = await matterResultToHtml(matterResult)

  // Combine the data with the id and contentHtml
  return {
    fileData: {
      id: id,
      matter: matterResult.data as PostMatter,
      contentHtml: contentHtml
    },
    view: 0
  }
}

export function getAllTagList(allPostsData: PostData[]): string[] {
  const reducer = (pre: string[], current: PostData) => pre.concat(current.fileData.matter.tags)
  return Array.from(new Set<string>(allPostsData.reduce(reducer, [])))
}

async function matterResultToHtml(matterResult: matter.GrayMatterFile<string>): Promise<string> {
  const processedContent = await unified()
    .use(remarkParse) // Parse markdown.
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkRehype) // Turn it into HTML.
    .use(rehypeStringify) // Serialize HTML.
    .processSync(matterResult.content)
  return processedContent.toString().replace('<a href="https://youtu.be/thRt6aeg90A">https://youtu.be/thRt6aeg90A</a>', '<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe style="  position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/thRt6aeg90A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
}