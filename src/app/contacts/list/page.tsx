import { getContacts, getContact } from "@/lib/contact"

export default async function ListPage() {
    const contacts = await getContacts()
    const first = await getContact('1')
  return (
    <div>
      複数
      <ul>
        {contacts.map((contact)=>(
            <li key={contact.id}>
                {contact.name} : {contact.email}
            </li>
        ))}
      </ul>
      1件
      <div>{ first ? first.name : '登録されていません' }</div>
    </div>
  )
}
