docker rm -f mini-web mini-rbac mini-db
docker rmi mini-backend mini-frontend mysql:8.0
docker-compose up
#docker-compose up -d
