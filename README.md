# next-template

#### Documentation
- [x] [nextjs](https://nextjs.org/)
- [x] [tailwindcss](https://tailwindcss.com/)
- [x] [eslint](https://eslint.org/)
- [x] [lint-staged](https://github.com/okonet/lint-staged)
- [x] [husky](https://github.com/typicode/husky)

## Getting Started

### Requirements

```
# https://nodejs.org/en/
node >= 16.x  
npm >= 8.15.0
```

### Installation

```
git clone https://github.com/hec7orci7o/next-template.git
npm install
```

### No Docker Usage

#### Development

```
npm run dev
```

#### Production

```
npm run build
npm run start
```

### Docker Usage

#### Docker Build

```
# Build images
docker build --tag next-template-image .
docker build --tag nginx-image ./nginx

# Create shared network
docker network create my-network

# Run containers
docker run --network my-network --name next-template-container next-template-image
docker run --network my-network --link next-template-container:nextjs --publish 80:80 nginx-image
```

#### Docker-compose

```
docker-compose up -d
```