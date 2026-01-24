# 🚀 HƯỚNG DẪN CHẠY CMS VỚI API THỰC

## ✅ Đã cài đặt

- ✅ Node.js packages (express, cors, body-parser, uuid)
- ✅ Backend API server (`server.js`)
- ✅ API Client (`api-client.js`)
- ✅ CMS Functions (`cms-functions.js`)

---

## 📋 BƯỚC 1: Khởi động Backend API

Mở terminal và chạy:

```bash
npm start
```

Hoặc:

```bash
node server.js
```

**Kết quả:** Server sẽ chạy tại `http://localhost:3001`

Bạn sẽ thấy:
```
╔════════════════════════════════════════════════════════════╗
║   🚀 CMS API Server đang chạy!                            ║
║   📍 URL: http://localhost:3001                           ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📋 BƯỚC 2: Mở trang CMS

Có 2 cách:

### Cách 1: Sử dụng file HTML gốc (Recommended)

1. Mở file `index.html` trong browser
2. Bật "Admin Mode (CMS)" ở góc trên bên phải
3. Click menu "⚙️ CMS"

**Lưu ý:** Cần thêm scripts vào `index.html` để kết nối API

### Cách 2: Tạo file CMS riêng

Tôi sẽ tạo file `cms.html` với đầy đủ chức năng CRUD

---

## 🔧 BƯỚC 3: Test các chức năng

### ✅ Quản lý Bài viết

1. **Tạo bài viết mới:**
   - Click "➕ Tạo bài viết mới"
   - Nhập thông tin
   - Click "💾 Lưu bài viết"
   - ✅ Bài viết được lưu vào `database/posts.json`

2. **Sửa bài viết:**
   - Click nút "✏️" trên bài viết
   - Chỉnh sửa thông tin
   - Click "💾 Lưu bài viết"
   - ✅ Bài viết được cập nhật

3. **Xóa bài viết:**
   - Click nút "🗑️"
   - Confirm xóa
   - ✅ Bài viết bị xóa khỏi database

4. **Duyệt bài viết:**
   - Click nút "✓ Duyệt" (cho bài pending)
   - Confirm
   - ✅ Status chuyển thành "published"

5. **Xuất bản bài viết:**
   - Click nút "📤 Xuất bản" (cho bài draft)
   - Confirm
   - ✅ Status chuyển thành "published"

### ✅ Quản lý Thông báo

1. **Tạo thông báo:**
   - Click "➕ Tạo thông báo mới"
   - Nhập thông tin
   - Chọn đối tượng nhận
   - Click "📤 Gửi thông báo"
   - ✅ Thông báo được lưu/gửi

2. **Gửi ngay:**
   - Click nút "📤 Gửi ngay" (cho thông báo đã lên lịch)
   - ✅ Status chuyển thành "sent"

3. **Xóa thông báo:**
   - Click nút "🗑️"
   - Confirm
   - ✅ Thông báo bị xóa

---

## 📂 Cấu trúc Database

Tất cả dữ liệu được lưu trong thư mục `database/`:

```
database/
├── posts.json          # Danh sách bài viết
├── notifications.json  # Danh sách thông báo
└── enterprises.json    # Danh sách doanh nghiệp (3 mẫu)
```

### Format dữ liệu:

**posts.json:**
```json
[
  {
    "id": "uuid",
    "title": "Tiêu đề bài viết",
    "category": "news",
    "content": "Nội dung...",
    "author": "Admin",
    "status": "published",
    "publishDate": "2025-10-30T10:00:00Z",
    "createdAt": "2025-10-30T09:00:00Z",
    "updatedAt": "2025-10-30T10:00:00Z"
  }
]
```

**notifications.json:**
```json
[
  {
    "id": "uuid",
    "title": "Tiêu đề thông báo",
    "type": "QUAN TRỌNG",
    "content": "Nội dung...",
    "priority": "high",
    "targetAudience": {"type": "all"},
    "recipientCount": 856,
    "status": "sent",
    "sentDate": "2025-10-30T10:00:00Z",
    "createdAt": "2025-10-30T09:00:00Z"
  }
]
```

---

## 🧪 Test API với cURL

### Test Posts API:

```bash
# Get all posts
curl http://localhost:3001/api/posts

# Create post
curl -X POST http://localhost:3001/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Post",
    "category": "news",
    "content": "Test content",
    "author": "Admin",
    "status": "draft"
  }'

# Update post
curl -X PUT http://localhost:3001/api/posts/{id} \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'

# Delete post
curl -X DELETE http://localhost:3001/api/posts/{id}

# Publish post
curl -X POST http://localhost:3001/api/posts/{id}/publish
```

### Test Notifications API:

```bash
# Get all notifications
curl http://localhost:3001/api/notifications

# Create notification
curl -X POST http://localhost:3001/api/notifications \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Notification",
    "type": "QUAN TRỌNG",
    "content": "Test content",
    "targetAudience": {"type": "all"},
    "recipientCount": 856,
    "status": "draft"
  }'
```

---

## 🔍 Troubleshooting

### Lỗi: "Cannot GET /"
**Giải pháp:** Đảm bảo server đang chạy (`npm start`)

### Lỗi: "CORS error"
**Giải pháp:** Server đã cấu hình CORS, đảm bảo mở HTML từ `http://localhost:3001`

### Lỗi: "ENOENT: no such file or directory"
**Giải pháp:** Server sẽ tự tạo thư mục `database/` khi khởi động

### Dữ liệu không hiển thị
**Giải pháp:** 
1. Check console (F12) xem có lỗi không
2. Kiểm tra server đang chạy
3. Refresh page (Ctrl+F5)

---

## 📊 API Endpoints

### Posts
- `GET    /api/posts` - Lấy tất cả bài viết
- `GET    /api/posts?status=published` - Lọc theo status
- `GET    /api/posts/:id` - Lấy 1 bài viết
- `POST   /api/posts` - Tạo bài viết mới
- `PUT    /api/posts/:id` - Cập nhật bài viết
- `DELETE /api/posts/:id` - Xóa bài viết
- `POST   /api/posts/:id/publish` - Xuất bản bài viết

### Notifications
- `GET    /api/notifications` - Lấy tất cả thông báo
- `POST   /api/notifications` - Tạo thông báo
- `PUT    /api/notifications/:id` - Cập nhật thông báo
- `DELETE /api/notifications/:id` - Xóa thông báo
- `POST   /api/notifications/:id/send` - Gửi thông báo

### Enterprises
- `GET    /api/enterprises` - Lấy tất cả DN
- `GET    /api/enterprises?category=energy` - Lọc theo lĩnh vực
- `POST   /api/enterprises` - Tạo DN mới
- `PUT    /api/enterprises/:id` - Cập nhật DN
- `DELETE /api/enterprises/:id` - Xóa DN

---

## ✨ Tính năng đã hoàn thành

- ✅ Backend API Server (Node.js + Express)
- ✅ JSON File Database (posts, notifications, enterprises)
- ✅ CRUD Operations cho Posts
- ✅ CRUD Operations cho Notifications
- ✅ CRUD Operations cho Enterprises
- ✅ Filter theo status, category
- ✅ Publish/Approve workflow
- ✅ Send notification
- ✅ Auto-refresh sau mỗi thao tác
- ✅ Success/Error alerts
- ✅ Form validation

---

## 🎯 Next Steps

Bạn có thể:

1. **Mở file `index.html`** và thêm scripts:
   ```html
   <script src="api-client.js"></script>
   <script src="cms-functions.js"></script>
   ```

2. **Hoặc tôi tạo file CMS riêng** với đầy đủ UI và API integration

3. **Test API** bằng cURL hoặc Postman

Bạn muốn tôi làm gì tiếp theo?
