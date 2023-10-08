export async function GET() {
  // ================Insert One==================

  try {
    const prisma = new PrismaClient();
    const newUser = await prisma.User.create({
      data: {
        email: "Jhon@gmail.com",
        password: "123",
      },
    });
    console.log(newUser);
    return NextResponse.json({ status: "Success", data: newUser });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", data: error });
  }
}


export async function GET() {
  // ===============Insert Many================

  try {
    const prisma = new PrismaClient();
    const newUser = await prisma.User.createMany({
      data: [
        { email: "Jhon1@gmail.com", password: "123" },
        { email: "Jhon2@gmail.com", password: "123" },
        { email: "Jhon3@gmail.com", password: "123" },
      ],
    });
    console.log(newUser);
    return NextResponse.json({ status: "Success", data: newUser });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: "fail", data: error });
  }
}


export async function GET() {
  // ================Inserting with Relations=================

  try {
    const prisma = new PrismaClient();
    const newUser = await prisma.User.create({
      data: {
        email: "Jhon@gmail.com",
        password: "123",
        profile: {
          create: {
            firstName: "Jhon",
            lastName: "De",
            mobile: "01700000000",
            city: "Dhaka",
          },
        },
      },
    });
    return NextResponse.json({ newUser });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
