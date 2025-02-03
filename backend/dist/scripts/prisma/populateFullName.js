import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function populateFullName() {
    try {
        const users = await prisma.agent.findMany();
        console.log("users", users);
        for (const user of users) {
            let fullname = `${user.first_name} ${user.last_name}`;
            console.log('fullname', fullname);
            await prisma.agent.update({
                where: { id: user?.id },
                data: {
                    full_name: fullname,
                },
            });
        }
        console.log("Populated the fullnamein the database");
    }
    catch (error) {
        console.log("Error while populating the fullname", error);
    }
    finally {
        prisma.$disconnect();
    }
}
populateFullName();
