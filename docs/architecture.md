# System Architecture

## Overview
DevOps Simulator follows a **microservices architecture** designed for high availability, scalability, and developer flexibility.  
This document covers both **production** and **development** configurations.

---

## Components

### 1. Application Server
- **Technology**: Node.js + Express  
- **Production Port**: 8080  
- **Development Port**: 3000  
- **Scaling**: Horizontal auto-scaling (production only)  
- **Development Features**: Hot reload, Chrome DevTools debugging  

---

### 2. Database Layer
- **Database**: PostgreSQL 14  
- **Production**: Master–slave replication with automated daily backups  
- **Development**: Local single instance with auto-seed test data  
- **Backup Location**: `/backups` (prod) / `/tmp/backups` (dev)

---

### 3. Monitoring System
- **Production**: Prometheus + Grafana with email alerts for CPU, memory, disk, and network  
- **Development**: Console logging, optional Prometheus integration  
- **Metrics**: CPU usage | Memory | Disk | Network | Build time  

---

### 4. Container & Orchestration
- **Production**: Kubernetes cluster in `us-east-1` region  
- **Development**: Docker Compose setup with App + DB + Redis services  
- **Hot reload** and **volume mounts** enabled for local changes  

---

### 5. Authentication System (Beta in Dev)
- **Method**: OAuth2 + JWT  
- **Providers**: Google and GitHub  
- **Session Storage**: Redis cache  

---

##  Deployment Strategy

### Production
- **Method**: Rolling updates on Kubernetes  
- **Zero Downtime**:  Yes  
- **Rollback**: Automated on failure  
- **Region**: us-east-1  

### Development
- **Method**: Docker Compose  
- **Features**: Hot reload, instant feedback  
- **Testing**: Automated tests before deployment  
- **Rollback**: Manual via `git checkout`  

---

##  Security
- **Production**: SSL/TLS encryption, encrypted DB connections, regular audits  
- **Development**: SSL disabled, CORS enabled for all origins, debug endpoints exposed for testing  

---

