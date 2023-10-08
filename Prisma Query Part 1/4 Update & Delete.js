// ================Update===================

try {
    const prisma = new PrismaClient()
    const updateUser = await prisma.User.update({
       where: {id: 2},
       data: {email: 'Jhon1@gmail.com', password: '123'}
     })
    console.log(updateUser)
}
catch (e) {
    console.log(e)
}



// ================Delete===================

try {
    const prisma = new PrismaClient()
    const updateUser = await prisma.User.delete({
       where: {id: 2}
    })
    console.log(updateUser)
}
catch (e) {
    console.log(e)
}