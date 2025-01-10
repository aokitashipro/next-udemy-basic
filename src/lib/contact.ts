import { prisma } from '@/lib/prisma'

export async function getContacts(){
    return await prisma.contact.findMany({
        select:{
            id: true,
            name: true,
            email: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
}

export async function getContact(id: string){
    return await prisma.contact.findFirst({
        select: { name: true, email: true }
    })
}