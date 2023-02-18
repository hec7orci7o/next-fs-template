import prisma from 'prisma/prisma';
import {pbkdf2, randomBytes} from 'crypto';
import {setStatus} from '@/lib/status';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const {username, email, password} = req.body;
      const salt = randomBytes(16);
      pbkdf2(password, salt, 310000, 64, 'sha512', (err, derivedKey) => {
        if (err != null) console.error(err);

        prisma.user.create({
          data: {username, email, password: derivedKey, salt},
        })
            .then((user) => {
              console.log(user);
              res
                  .status(201)
                  .json(Object.assign({}, {data: user}, setStatus(req, 0, 'User created successfully')));
            })
            .catch((err) => {
              console.log(err);
              res
                  .status(500)
                  .json(setStatus(req, 500, 'Internal server error'));
            });
      });
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
