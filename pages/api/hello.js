// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from 'prisma/prisma';

export default async function handler(req, res) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
