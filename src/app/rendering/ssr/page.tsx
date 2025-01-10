import Image from "next/image"
export const dynamic = 'force-dynamic' // SSR強制

export default async function SSRPage() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
       cache: 'no-store' 
    })
    
    const resJson = await res.json()
    const image = resJson.message

    const timestamp = new Date().toISOString()

  return (
    <div>
      SSR 毎回リロード: { timestamp }
      <Image src={image} width={400} alt="" />
    </div>
  )
}
