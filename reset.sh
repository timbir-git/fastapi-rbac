docker rm -f mini-web mini-rbac mini-db
docker rmi -f mini-rbac_backend mini-rbac_frontend mini-rbac-backend mini-rbac-frontend
docker-compose up -d
