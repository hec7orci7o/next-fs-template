import prisma from 'prisma/prisma';
import {pbkdf2, timingSafeEqual} from 'crypto';
import {setStatus} from '@/lib/status';

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const {username, password} = req.body;
      prisma.user.findUnique({
        where: {username},
      })
          .then((user) => {
            pbkdf2(password, user.salt, 310000, 64, 'sha512', (err, derivedKey) => {
              if (err != null) {
                return res
                    .status(500)
                    .json(setStatus(req, 500, 'Internal server error'));
              }

              if (!timingSafeEqual(user.password, derivedKey)) {
                return res
                    .status(401)
                    .json(setStatus(req, 401, 'Invalid credentials'));
              }

              return res
                  .status(200)
                  .json(Object.assign({}, {data: user}, setStatus(req, 200, 'User logged in successfully')));
            });
          })
          .catch((_) => {
            return res
                .status(500)
                .json(setStatus(req, 500, 'Internal server error'));
          });
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
