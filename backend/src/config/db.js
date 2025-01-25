// import mysql from 'mysql2/promise';

// const pool = await  mysql.createConnection({
//   host: process.env.SQL_HOST || "localhost",
//   user: process.env.SQL_USER  || "root",
//   password: process.env.SQL_PASSWORD || "abhi1234",
//   database: process.env.SQL_DATABASE || "building_blocks",
//   // authPlugins: {
//   //   mysql_native_password: () => () =>
//   //     Promise.resolve({ plugin: "mysql_native_password" }),
//   // },
// });

// pool.connect((error) => {
//   if (error) {
//     console.log({
//       SQL_HOST: process.env.SQL_HOST,
//       SQL_USER: process.env.SQL_USER,
//       SQL_PASSWORD: process.env.SQL_PASSWORD,
//       SQL_DATABASE: process.env.SQL_DATABASE,
//     });
//     console.log("Error connection to mysql", error);
//     return;
//   }

//   console.log("Connected to MySQL");
//   return pool;
// });

// export default pool;



import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  // log : ['query']
})


export default prisma