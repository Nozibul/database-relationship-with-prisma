// =================findMany==============

const userList1 = await prisma.User.findMany();



// ============findMany Where And Select=================

const userList2 = await prisma.User.findMany(
      {
       where: {email: "Alice@gmail.com"},
       select: {id: true}
      }
);



// ============findUnique by id=================

const userList3 = await prisma.User.findUnique(
   {
     where: {email: "Alice@gmail.com"},
     select: {id: true,email:true}
   }
);



// ============findFirst()=================

const userList4 = await prisma.User.findFirst();




// ============find orderBy=================

const userList5 = await prisma.User.findMany(
    { orderBy: { id: "desc"} }
);



// ============Find Last using findFirst()=================

const list1 = await prisma.User.findFirst(
    {orderBy:{id:"desc"}}
);



// ===========Find With Limit Skip========================

// Retrieve the first 5 users
const list2 = await prisma.User.findMany({
     take:5
});


// Retrieve the next 5 users
const list3 = await prisma.User.findMany({
   skip: 5,
   take: 5
});

// Retrieve the last 5 users
const list4 = await prisma.User.findMany({
    orderBy: {
        id: 'desc'
    },
    take: -5
});


// ===========Find With Relation========================

const usersWithProfile = await prisma.User.findMany({
     include: {profile: true}
});
console.log(usersWithProfile)


const usersWithProfileAndPost = await prisma.User.findMany({
     include: {profile: true,post:true},
});
console.log(usersWithProfileAndPost)



// ===========Find With Nested Relations=====================




// ===========Find Filtering and Sorting With Nested Relations========================

const usersWithFilteredPosts = await prisma.User.findMany({
	include: {
		post: {
			where: {
				title: {
					contains: "Prisma"
				}
			},
			orderBy: {
				id: 'desc'
			}
		}
	}
});

console.log(usersWithFilteredPosts);



// ===========Find Search========================

 const nameTerm = "Alice";
  const emailTerm = "example";

  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: nameTerm,
          },
        },
        {
          email: {
            contains: emailTerm,
          },
        },
      ],
    },
  });
