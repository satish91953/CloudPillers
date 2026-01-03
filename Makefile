.PHONY: help build up down restart logs clean dev prod

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build all Docker images
	docker-compose build

up: ## Start all services in production mode
	docker-compose up -d

down: ## Stop all services
	docker-compose down

restart: ## Restart all services
	docker-compose restart

logs: ## View logs from all services
	docker-compose logs -f

logs-backend: ## View backend logs
	docker-compose logs -f backend

logs-frontend: ## View frontend logs
	docker-compose logs -f frontend

logs-mongodb: ## View MongoDB logs
	docker-compose logs -f mongodb

dev: ## Start all services in development mode
	docker-compose -f docker-compose.dev.yml up --build

dev-down: ## Stop development services
	docker-compose -f docker-compose.dev.yml down

dev-logs: ## View development logs
	docker-compose -f docker-compose.dev.yml logs -f

clean: ## Remove all containers, volumes, and images
	docker-compose down -v
	docker-compose -f docker-compose.dev.yml down -v
	docker system prune -f

prod: build up ## Build and start in production mode

rebuild: ## Rebuild and restart all services
	docker-compose up -d --build --force-recreate

shell-backend: ## Open shell in backend container
	docker-compose exec backend sh

shell-frontend: ## Open shell in frontend container
	docker-compose exec frontend sh

shell-mongodb: ## Open MongoDB shell
	docker-compose exec mongodb mongosh -u admin -p ${MONGO_ROOT_PASSWORD:-changeme} --authenticationDatabase admin

