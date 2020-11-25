This is an example of how to use gRPC with NodeJS and NextJS

## Getting Started

First: start the NodeJS gRPC server and the Envoy proxy (Docker needed):

```bash
cd server && yarn install && yarn start-server & yarn start-proxy
```

Second: from a new terminal tab, start the NextJS client

```bash
cd client && yarn install && yarn dev
```

Access this endpoint on your web browser:
```
http://localhost:3000
```
