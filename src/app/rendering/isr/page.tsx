import Image from "next/image"
export const revalidate = 10

export default async function ISRPage() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {
        next: { revalidate: 10 }  
    })
    
    const resJson = await res.json()
    const image = resJson.message

    const timestamp = new Date().toISOString()

  return (
    <div>
      ISR 10秒ごとにリロード: { timestamp }
      <Image src={image} width={400} alt="" />
    </div>
  )
}
