# next-template

#### Documentation
- [x] [nextjs](https://nextjs.org/)
- [x] [tailwindcss](https://tailwindcss.com/)
- [x] [eslint](https://eslint.org/)
- [x] [lint-staged](https://github.com/okonet/lint-staged)
- [x] [husky](https://github.com/typicode/husky)
- [x] [prisma](https://www.prisma.io/nextjs)

## Getting Started

### Requirements

```
node >= 16.x  
npm >= 8.15.0
```

### Setting up the database

> **Note**
> To change the database you have to modify the `provider` value found in the `prisma/schema.prisma` file and the environment variable `DATABASE_URL`

``` bash
npx prisma generate
npx prisma db push
```

> **Warning**
> If your project does not require a database, you can follow the following actions.

``` bash
npm uninstall prisma @prisma/client
rm -rf prisma
```

### Running the app

#### Development

``` bash
npm run dev
```

#### Production

##### Without Docker

``` bash
npm run build
npm run start
```

##### With Docker 
```bash
docker build --tag next-template-image .
docker build --tag nginx-image ./nginx

docker network create my-network

docker run --network my-network --name next-template-container next-template-image
docker run --network my-network --link next-template-container:nextjs --publish 80:80 nginx-image
```

##### With Docker Compose

```bash
docker-compose up -d
```
