import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description: "ブログ記事の一覧が表示されます",
};

// ダミーデータ
const articles = [
    {id: "1", title: "タイトル1"},
    {id: "2", title: "タイトル2"},
    {id: "3", title: "タイトル3"},
]

// 3秒待機
async function fetchArticles(){
    await new Promise((resolve)=> setTimeout(resolve, 3000))
    // throw new Error('エラーが発生')
    return articles
}

export default async function BlogPage() {
    const articles = await fetchArticles()
  return (
    <div>
      <ul>
        { articles.map((article)=>(
            <li key={article.id}>
                title: { article.title }
            </li>
        ))}
      </ul>
    </div>
  )
}
