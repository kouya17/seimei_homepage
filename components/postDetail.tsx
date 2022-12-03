import React, { useEffect } from "react"
import { PostData } from "../lib/posts";
import Prism from 'prismjs';

interface PostDetailProps {
  postData: PostData
}

const PostDetail = ({ postData }: PostDetailProps) => {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="prose dark:prose-dark">
      <div className="line-numbers my-5">
        <div dangerouslySetInnerHTML={{ __html: postData.fileData.contentHtml }} />
      </div>
    </div>
  )
}

export default PostDetail