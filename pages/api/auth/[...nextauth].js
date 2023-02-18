/* eslint-disable new-cap */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {label: 'username', type: 'text'},
        password: {label: 'password', type: 'password'},
      },
      async authorize(credentials, req) {
        return await fetch('http://localhost:3000/api/auth/sign-in', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {'Content-Type': 'application/json'},
        })
            .then((res) => res.json())
            .then((res) => {
              const {error_code: status} = res.status;
              if (status == 200 && res?.data) return res?.data;
              return null;
            })
            .catch((_) => {
              return null;
            });
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
