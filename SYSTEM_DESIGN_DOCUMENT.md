# SDD - SYSTEM DESIGN DOCUMENT
## Cổng Công Khai Dữ Liệu Sở Công Thương

**Version:** 1.0.0  
**Date:** 30/10/2025  
**Status:** Production Ready  
**Document Type:** System Design Document

---

## 📋 MỤC LỤC

1. [Tổng quan Kiến trúc](#1-tổng-quan-kiến-trúc)
2. [Kiến trúc Hệ thống](#2-kiến-trúc-hệ-thống)
3. [Database Design](#3-database-design)
4. [API Design](#4-api-design)
5. [Frontend Architecture](#5-frontend-architecture)
6. [Backend Architecture](#6-backend-architecture)
7. [Security Architecture](#7-security-architecture)
8. [Deployment Architecture](#8-deployment-architecture)
9. [Data Flow Diagrams](#9-data-flow-diagrams)
10. [Sequence Diagrams](#10-sequence-diagrams)
11. [Component Diagrams](#11-component-diagrams)
12. [Performance Optimization](#12-performance-optimization)
13. [Scalability Strategy](#13-scalability-strategy)
14. [Monitoring & Logging](#14-monitoring--logging)

---

## 1. TỔNG QUAN KIẾN TRÚC

### 1.1 Architectural Style

**Kiến trúc:** **3-Tier Architecture** với **Microservices-ready** design

```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Web App    │  │  Admin CMS   │  │   Chatbot    │      │
│  │  (HTML/CSS/  │  │  Dashboard   │  │   Widget     │      │
│  │  JavaScript) │  │              │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   API        │  │   CMS        │  │   Chatbot    │      │
│  │   Gateway    │  │   Service    │  │   Service    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Data       │  │   Auth       │  │   Export     │      │
│  │   Service    │  │   Service    │  │   Service    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                      DATA LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  PostgreSQL  │  │    Redis     │  │   MongoDB    │      │
│  │  (Relational)│  │   (Cache)    │  │  (Documents) │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐                        │
│  │   S3/CDN     │  │  Elasticsearch│                        │
│  │  (Files)     │  │   (Search)    │                        │
│  └──────────────┘  └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack

#### Frontend
- **Framework:** Vanilla JavaScript (hiện tại), React.js (future)
- **CSS:** Custom CSS với CSS Variables
- **Maps:** Leaflet.js 1.9.4
- **Build Tool:** Webpack/Vite (future)
- **State Management:** LocalStorage, Context API (future)

#### Backend
- **Runtime:** Node.js 18+ / Python 3.11+
- **Framework:** Express.js / FastAPI
- **API Style:** RESTful API
- **Authentication:** JWT + OAuth 2.0
- **Real-time:** WebSocket (Socket.io)

#### Database
- **Primary DB:** PostgreSQL 15+
- **Cache:** Redis 7+
- **Document Store:** MongoDB 6+ (optional)
- **Search Engine:** Elasticsearch 8+
- **File Storage:** AWS S3 / MinIO

#### DevOps
- **Containerization:** Docker
- **Orchestration:** Kubernetes / Docker Compose
- **CI/CD:** GitHub Actions / GitLab CI
- **Monitoring:** Prometheus + Grafana
- **Logging:** ELK Stack (Elasticsearch, Logstash, Kibana)

### 1.3 Design Principles

1. **Separation of Concerns:** Frontend, Backend, Database tách biệt
2. **Scalability:** Horizontal scaling với load balancer
3. **Security First:** Authentication, Authorization, Encryption
4. **Performance:** Caching, CDN, Lazy loading
5. **Maintainability:** Clean code, modular architecture
6. **Reliability:** Error handling, retry mechanism, fallback

---

## 2. KIẾN TRÚC HỆ THỐNG

### 2.1 High-Level Architecture

```
                        ┌─────────────────┐
                        │   CloudFlare    │
                        │   CDN + WAF     │
                        └────────┬────────┘
                                 │
                        ┌────────▼────────┐
                        │  Load Balancer  │
                        │   (Nginx/HAProxy)│
                        └────────┬────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
        ┌───────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
        │  Web Server  │ │ Web Server  │ │ Web Server  │
        │   (Node.js)  │ │  (Node.js)  │ │  (Node.js)  │
        └───────┬──────┘ └──────┬──────┘ └──────┬──────┘
                │                │                │
                └────────────────┼────────────────┘
                                 │
                        ┌────────▼────────┐
                        │  API Gateway    │
                        │  (Kong/Express) │
                        └────────┬────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
┌───────▼──────┐        ┌───────▼──────┐        ┌───────▼──────┐
│ Data Service │        │  CMS Service │        │ Auth Service │
│              │        │              │        │              │
└───────┬──────┘        └───────┬──────┘        └───────┬──────┘
        │                        │                        │
        └────────────────────────┼────────────────────────┘
                                 │
        ┌────────────────────────┼────────────────────────┐
        │                        │                        │
┌───────▼──────┐        ┌───────▼──────┐        ┌───────▼──────┐
│  PostgreSQL  │        │    Redis     │        │   MongoDB    │
│   (Primary)  │        │   (Cache)    │        │  (Optional)  │
└──────────────┘        └──────────────┘        └──────────────┘
```

### 2.2 Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND LAYER                          │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              UI Components                            │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐        │   │
│  │  │ Header │ │  Map   │ │Chatbot │ │  CMS   │        │   │
│  │  └────────┘ └────────┘ └────────┘ └────────┘        │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              State Management                         │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐                   │   │
│  │  │ Store  │ │Actions │ │Reducers│                   │   │
│  │  └────────┘ └────────┘ └────────┘                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              API Client Layer                         │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐                   │   │
│  │  │ Axios  │ │ Fetch  │ │WebSocket│                  │   │
│  │  └────────┘ └────────┘ └────────┘                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↕ HTTP/HTTPS
┌─────────────────────────────────────────────────────────────┐
│                      BACKEND LAYER                           │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              API Gateway                              │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐                   │   │
│  │  │ Router │ │ Auth   │ │RateLimit│                  │   │
│  │  └────────┘ └────────┘ └────────┘                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Business Logic Layer                     │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐        │   │
│  │  │ Data   │ │  CMS   │ │ Auth   │ │Chatbot │        │   │
│  │  │Service │ │Service │ │Service │ │Service │        │   │
│  │  └────────┘ └────────┘ └────────┘ └────────┘        │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Data Access Layer                        │   │
│  │  ┌────────┐ ┌────────┐ ┌────────┐                   │   │
│  │  │  ORM   │ │ Cache  │ │ Search │                   │   │
│  │  │(Prisma)│ │Manager │ │ Client │                   │   │
│  │  └────────┘ └────────┘ └────────┘                   │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
└─────────────────────────────────────────────────────────────┘
                              ↕ SQL/NoSQL
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                          │
├─────────────────────────────────────────────────────────────┤
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐              │
│  │Postgres│ │ Redis  │ │ Mongo  │ │Elastic │              │
│  │  SQL   │ │ Cache  │ │  DB    │ │ Search │              │
│  └────────┘ └────────┘ └────────┘ └────────┘              │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. DATABASE DESIGN

### 3.1 Entity Relationship Diagram (ERD)

```
┌─────────────────┐         ┌─────────────────┐
│     Users       │         │     Roles       │
├─────────────────┤         ├─────────────────┤
│ id (PK)         │◄───────►│ id (PK)         │
│ username        │   M:N   │ name            │
│ email           │         │ permissions     │
│ password_hash   │         │ created_at      │
│ role_id (FK)    │         └─────────────────┘
│ created_at      │
│ updated_at      │
└─────────────────┘
        │
        │ 1:N
        ▼
┌─────────────────┐         ┌─────────────────┐
│     Posts       │         │   Categories    │
├─────────────────┤         ├─────────────────┤
│ id (PK)         │◄───────►│ id (PK)         │
│ title           │   M:1   │ name            │
│ content         │         │ slug            │
│ excerpt         │         │ description     │
│ author_id (FK)  │         │ created_at      │
│ category_id(FK) │         └─────────────────┘
│ status          │
│ publish_date    │
│ created_at      │
│ updated_at      │
└─────────────────┘
        │
        │ 1:N
        ▼
┌─────────────────┐
│   Post_Tags     │
├─────────────────┤
│ post_id (FK)    │
│ tag_id (FK)     │
└─────────────────┘
        │
        │ M:N
        ▼
┌─────────────────┐
│      Tags       │
├─────────────────┤
│ id (PK)         │
│ name            │
│ slug            │
│ created_at      │
└─────────────────┘

┌─────────────────┐         ┌─────────────────┐
│  Notifications  │         │  Enterprises    │
├─────────────────┤         ├─────────────────┤
│ id (PK)         │◄───────►│ id (PK)         │
│ title           │   M:N   │ code            │
│ content         │         │ name            │
│ type            │         │ category        │
│ priority        │         │ size            │
│ status          │         │ email           │
│ sent_date       │         │ phone           │
│ created_at      │         │ address         │
└─────────────────┘         │ district        │
        │                   │ status          │
        │ 1:N               │ created_at      │
        ▼                   └─────────────────┘
┌─────────────────┐                 │
│Notification_    │                 │ 1:N
│  Recipients     │                 ▼
├─────────────────┤         ┌─────────────────┐
│ notification_id │         │   DataPoints    │
│ enterprise_id   │         ├─────────────────┤
│ read_at         │         │ id (PK)         │
│ clicked_at      │         │ name            │
└─────────────────┘         │ lat             │
                            │ lng             │
┌─────────────────┐         │ address         │
│    Datasets     │         │ status          │
├─────────────────┤         │ code            │
│ id (PK)         │◄───────►│ category        │
│ title           │   1:N   │ enterprise_id   │
│ category        │         │ dataset_id (FK) │
│ description     │         │ metadata        │
│ last_updated    │         │ created_at      │
│ download_count  │         └─────────────────┘
│ format          │
│ metadata        │
│ created_at      │
└─────────────────┘

┌─────────────────┐         ┌─────────────────┐
│     Media       │         │   Contacts      │
├─────────────────┤         ├─────────────────┤
│ id (PK)         │         │ id (PK)         │
│ title           │         │ name            │
│ type            │         │ email           │
│ url             │         │ phone           │
│ thumbnail       │         │ type            │
│ description     │         │ content         │
│ upload_date     │         │ status          │
│ views           │         │ submitted_at    │
│ tags            │         │ resolved_at     │
│ created_at      │         └─────────────────┘
└─────────────────┘
```

### 3.2 Database Schema

#### 3.2.1 Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role_id UUID REFERENCES roles(id),
    full_name VARCHAR(255),
    avatar_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_role_id ON users(role_id);
```

#### 3.2.2 Roles Table
```sql
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) UNIQUE NOT NULL,
    display_name VARCHAR(100),
    permissions JSONB,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default roles
INSERT INTO roles (name, display_name, permissions) VALUES
('public_user', 'Public User', '{"read": true}'),
('content_editor', 'Content Editor', '{"read": true, "create": true, "update_own": true}'),
('content_approver', 'Content Approver', '{"read": true, "create": true, "update": true, "approve": true}'),
('data_manager', 'Data Manager', '{"read": true, "manage_data": true, "import_export": true}'),
('system_admin', 'System Administrator', '{"all": true}');
```

#### 3.2.3 Posts Table
```sql
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    author_id UUID REFERENCES users(id),
    category_id UUID REFERENCES categories(id),
    status VARCHAR(20) DEFAULT 'draft', -- draft, pending, published, scheduled
    featured_image VARCHAR(500),
    views INTEGER DEFAULT 0,
    publish_date TIMESTAMP,
    scheduled_date TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_posts_author_id ON posts(author_id);
CREATE INDEX idx_posts_category_id ON posts(category_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_publish_date ON posts(publish_date);
CREATE INDEX idx_posts_slug ON posts(slug);
```

#### 3.2.4 Categories Table
```sql
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id UUID REFERENCES categories(id),
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_categories_parent_id ON categories(parent_id);
```

#### 3.2.5 Notifications Table
```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(500) NOT NULL,
    content TEXT NOT NULL,
    type VARCHAR(50) NOT NULL, -- QUAN_TRONG, CHUONG_TRINH_MOI, UU_DAI, SU_KIEN, NHAC_NHO
    priority VARCHAR(20) DEFAULT 'medium', -- low, medium, high, urgent
    status VARCHAR(20) DEFAULT 'draft', -- draft, scheduled, sent
    target_audience JSONB, -- {type: 'all'|'category'|'size'|'custom', value: [...]}
    sent_date TIMESTAMP,
    scheduled_date TIMESTAMP,
    stats JSONB DEFAULT '{"sent": 0, "read": 0, "clicked": 0}',
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_notifications_status ON notifications(status);
CREATE INDEX idx_notifications_type ON notifications(type);
CREATE INDEX idx_notifications_sent_date ON notifications(sent_date);
```

#### 3.2.6 Enterprises Table
```sql
CREATE TABLE enterprises (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(500) NOT NULL,
    category VARCHAR(50), -- energy, trade, industry, fdi
    size VARCHAR(20), -- small, medium, large
    employee_count INTEGER,
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,
    district VARCHAR(100),
    lat DECIMAL(10, 8),
    lng DECIMAL(11, 8),
    status VARCHAR(20) DEFAULT 'active', -- active, inactive
    registration_date DATE,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_enterprises_code ON enterprises(code);
CREATE INDEX idx_enterprises_category ON enterprises(category);
CREATE INDEX idx_enterprises_size ON enterprises(size);
CREATE INDEX idx_enterprises_district ON enterprises(district);
CREATE INDEX idx_enterprises_status ON enterprises(status);
CREATE INDEX idx_enterprises_location ON enterprises USING GIST (
    ll_to_earth(lat, lng)
);
```

#### 3.2.7 Datasets Table
```sql
CREATE TABLE datasets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    category VARCHAR(50) NOT NULL, -- energy, trade, industry, planning
    description TEXT,
    last_updated TIMESTAMP,
    download_count INTEGER DEFAULT 0,
    format JSONB DEFAULT '["xlsx", "csv", "json"]',
    file_url VARCHAR(500),
    file_size BIGINT,
    metadata JSONB,
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_datasets_category ON datasets(category);
CREATE INDEX idx_datasets_slug ON datasets(slug);
CREATE INDEX idx_datasets_last_updated ON datasets(last_updated);
```

#### 3.2.8 DataPoints Table
```sql
CREATE TABLE data_points (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(500) NOT NULL,
    lat DECIMAL(10, 8) NOT NULL,
    lng DECIMAL(11, 8) NOT NULL,
    address TEXT,
    status VARCHAR(50), -- Đang hoạt động, Hoạt động tốt, Cần kiểm tra, Tạm ngưng
    code VARCHAR(100),
    category VARCHAR(50),
    enterprise_id UUID REFERENCES enterprises(id),
    dataset_id UUID REFERENCES datasets(id),
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_data_points_category ON data_points(category);
CREATE INDEX idx_data_points_status ON data_points(status);
CREATE INDEX idx_data_points_enterprise_id ON data_points(enterprise_id);
CREATE INDEX idx_data_points_dataset_id ON data_points(dataset_id);
CREATE INDEX idx_data_points_location ON data_points USING GIST (
    ll_to_earth(lat, lng)
);
```

#### 3.2.9 Media Table
```sql
CREATE TABLE media (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL, -- image, video, infographic, book, voice
    url VARCHAR(500) NOT NULL,
    thumbnail VARCHAR(500),
    description TEXT,
    file_size BIGINT,
    duration INTEGER, -- for video/audio in seconds
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    views INTEGER DEFAULT 0,
    tags JSONB DEFAULT '[]',
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_media_type ON media(type);
CREATE INDEX idx_media_upload_date ON media(upload_date);
```

#### 3.2.10 Contacts Table
```sql
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    type VARCHAR(50) NOT NULL, -- data, feature, bug, support, other
    content TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'new', -- new, processing, resolved
    assigned_to UUID REFERENCES users(id),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_type ON contacts(type);
CREATE INDEX idx_contacts_submitted_at ON contacts(submitted_at);
```

### 3.3 Redis Cache Structure

```javascript
// Cache Keys Pattern
{
  // User sessions
  "session:{userId}": {
    userId: "uuid",
    username: "string",
    role: "string",
    permissions: {},
    expiresAt: "timestamp"
  },
  
  // Data cache
  "datasets:all": [...],
  "datasets:{category}": [...],
  "dataset:{id}": {...},
  
  // Map data cache
  "datapoints:{layerType}": [...],
  
  // News cache
  "posts:latest": [...],
  "posts:category:{categoryId}": [...],
  
  // Statistics cache
  "stats:overview": {
    totalDatasets: 1247,
    totalEnterprises: 856,
    totalMedia: 2430,
    totalViews: 15678
  },
  
  // Search cache
  "search:{query}": [...],
  
  // Rate limiting
  "ratelimit:{ip}:{endpoint}": {
    count: 10,
    resetAt: "timestamp"
  }
}
```

### 3.4 MongoDB Collections (Optional)

```javascript
// Chatbot Conversations
{
  _id: ObjectId,
  sessionId: "string",
  userId: "uuid|null",
  messages: [
    {
      role: "user|bot",
      content: "string",
      timestamp: ISODate,
      metadata: {}
    }
  ],
  context: {},
  createdAt: ISODate,
  updatedAt: ISODate
}

// Audit Logs
{
  _id: ObjectId,
  userId: "uuid",
  action: "string", // create, update, delete, login, etc.
  resource: "string", // posts, users, datasets, etc.
  resourceId: "uuid",
  changes: {},
  ipAddress: "string",
  userAgent: "string",
  timestamp: ISODate
}

// Analytics Events
{
  _id: ObjectId,
  eventType: "string", // page_view, download, search, etc.
  userId: "uuid|null",
  sessionId: "string",
  data: {},
  timestamp: ISODate
}
```

---

## 4. API DESIGN

### 4.1 API Architecture

**Style:** RESTful API  
**Base URL:** `https://api.congkhai-dulieu.gov.vn/v1`  
**Authentication:** JWT Bearer Token  
**Content-Type:** `application/json`

### 4.2 API Endpoints

#### 4.2.1 Authentication APIs

```
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh-token
GET    /auth/me
PUT    /auth/profile
POST   /auth/forgot-password
POST   /auth/reset-password
```

**Example: Login**
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response 200 OK:
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "username": "user123",
      "email": "user@example.com",
      "role": "content_editor"
    },
    "token": "eyJhbGciO
