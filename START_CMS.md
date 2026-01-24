# 🚀 HƯỚNG DẪN CHẠY CMS VỚI CHỨC NĂNG THẬT

## ✅ Bước 1: Khởi động Backend Server

Mở terminal và chạy:

```bash
npm start
```

Server sẽ chạy tại: **http://localhost:3001**

Bạn sẽ thấy:
```
╔════════════════════════════════════════════════════════════╗
║   🚀 CMS API Server đang chạy!                            ║
║   📍 URL: http://localhost:3001                           ║
╚════════════════════════════════════════════════════════════╝
```

**Lưu ý:** Giữ terminal này mở, đừng tắt!

---

## ✅ Bước 2: Mở trang CMS

Mở file: **`cms-demo.html`** trong browser

Hoặc truy cập: **http://localhost:3001/cms-demo.html**

---

## 🎯 Test các chức năng

### 1. ✅ Quản lý Bài viết

#### Tạo bài viết mới:
1. Click tab "📝 Quản lý bài viết"
2. Click "➕ Tạo bài viết mới"
3. Nhập:
   - Tiêu đề: "Bài viết test"
   - Danh mục: "Tin tức"
   - Nội dung: "Nội dung test..."
   - Trạng thái: "Lưu nháp"
4. Click "💾 Lưu bài viết"
5. ✅ **Kết quả:** Bài viết xuất hiện trong table, lưu vào `database/posts.json`

#### Sửa bài viết:
1. Click nút "✏️" trên bài viết
2. Form sẽ load dữ liệu bài viết
3. Chỉnh sửa thông tin
4. Click "💾 Lưu bài viết"
5. ✅ **Kết quả:** Bài viết được cập nhật

#### Xóa bài viết:
1. Click nút "🗑️"
2. Confirm "OK"
3. ✅ **Kết quả:** Bài viết bị xóa khỏi table và database

#### Duyệt bài viết (Pending → Published):
1. Tạo bài với status "Gửi duyệt"
2. Click nút "✓ Duyệt"
3. Confirm "OK"
4. ✅ **Kết quả:** Status chuyển thành "Đã xuất bản"

#### Xuất bản bài viết (Draft → Published):
1. Tạo bài với status "Lưu nháp"
2. Click nút "📤 Xuất bản"
3. Confirm "OK"
4. ✅ **Kết quả:** Status chuyển thành "Đã xuất bản"

#### Filter bài viết:
1. Click các tab: "Tất cả", "Đã xuất bản", "Nháp", "Chờ duyệt"
2. ✅ **Kết quả:** Table chỉ hiển thị bài viết theo status

---

### 2. ✅ Quản lý Thông báo

#### Tạo thông báo:
1. Click tab "🔔 Quản lý thông báo"
2. Click "➕ Tạo thông báo mới"
3. Nhập:
   - Tiêu đề: "Thông báo test"
   - Loại: "QUAN TRỌNG"
   - Nội dung: "Nội dung thông báo..."
   - Đối tượng: "Tất cả doanh nghiệp (856 DN)"
   - Thời gian: "Gửi ngay"
4. Click "📤 Gửi thông báo"
5. ✅ **Kết quả:** Thông báo được gửi, lưu vào `database/notifications.json`

#### Lên lịch thông báo:
1. Tạo thông báo
2. Chọn "Lên lịch gửi"
3. Chọn ngày giờ
4. Click "📤 Gửi thông báo"
5. ✅ **Kết quả:** Thông báo lưu với status "Đã lên lịch"

#### Gửi ngay thông báo đã lên lịch:
1. Click nút "📤 Gửi ngay" trên thông báo đã lên lịch
2. Confirm "OK"
3. ✅ **Kết quả:** Status chuyển thành "Đã gửi"

#### Xóa thông báo:
1. Click nút "🗑️"
2. Confirm "OK"
3. ✅ **Kết quả:** Thông báo bị xóa

---

### 3. ✅ Quản lý Doanh nghiệp

1. Click tab "🏢 Doanh nghiệp"
2. Xem danh sách 3 doanh nghiệp mẫu
3. Click nút "👁️" để xem chi tiết

---

## 📂 Kiểm tra Database

Sau khi thực hiện các thao tác, check các file:

### `database/posts.json`
```json
[
  {
    "id": "uuid-generated",
    "title": "Bài viết test",
    "category": "news",
    "content": "Nội dung test...",
    "author": "Admin",
    "status": "draft",
    "createdAt": "2025-10-30T...",
    "updatedAt": "2025-10-30T..."
  }
]
```

### `database/notifications.json`
```json
[
  {
    "id": "uuid-generated",
    "title": "Thông báo test",
    "type": "important",
    "content": "Nội dung thông báo...",
    "targetAudience": {"type": "all"},
    "recipientCount": 856,
    "status": "sent",
    "sentDate": "2025-10-30T...",
    "createdAt": "2025-10-30T..."
  }
]
```

### `database/enterprises.json`
```json
[
  {
    "id": "uuid",
    "code": "DN-0001",
    "name": "Công ty TNHH Năng lượng Xanh Việt",
    "category": "energy",
    "size": "medium",
    "employeeCount": 120,
    "email": "info@greenenergyVN.com",
    ...
  }
]
```

---

## 🧪 Test API với Browser Console

Mở Console (F12) và chạy:

```javascript
// Test get posts
api.getPosts().then(console.log);

// Test create post
api.createPost({
  title: "Test từ console",
  category: "news",
  content: "Nội dung test",
  author: "Admin",
  status: "draft"
}).then(console.log);

// Test get notifications
api.getNotifications().then(console.log);

// Test get enterprises
api.getEnterprises().then(console.log);
```

---

## ✨ Tính năng đã hoàn thành

### Posts (Bài viết):
- ✅ **CREATE:** Tạo bài viết mới
- ✅ **READ:** Xem danh sách, xem chi tiết
- ✅ **UPDATE:** Sửa bài viết
- ✅ **DELETE:** Xóa bài viết
- ✅ **PUBLISH:** Xuất bản bài viết
- ✅ **FILTER:** Lọc theo status

### Notifications (Thông báo):
- ✅ **CREATE:** Tạo thông báo
- ✅ **READ:** Xem danh sách
- ✅ **UPDATE:** Sửa thông báo
- ✅ **DELETE:** Xóa thông báo
- ✅ **SEND:** Gửi thông báo
- ✅ **SCHEDULE:** Lên lịch gửi

### Enterprises (Doanh nghiệp):
- ✅ **READ:** Xem danh sách
- ✅ **FILTER:** Lọc theo category, size, district
- ✅ **SEARCH:** Tìm kiếm theo tên, mã

---

## 🔍 Troubleshooting

### ❌ Lỗi: "Failed to fetch"
**Nguyên nhân:** Server chưa chạy hoặc sai URL

**Giải pháp:**
1. Check server đang chạy: `npm start`
2. Check URL trong `api-client.js`: `http://localhost:3001`

### ❌ Lỗi: "CORS policy"
**Nguyên nhân:** CORS chưa được cấu hình

**Giải pháp:** Server đã có CORS, đảm bảo mở từ `http://localhost:3001`

### ❌ Dữ liệu không hiển thị
**Giải pháp:**
1. Mở Console (F12) xem lỗi
2. Check file `database/*.json` có tồn tại không
3. Refresh page (Ctrl+F5)

### ❌ Lỗi: "Cannot find module"
**Giải pháp:** Chạy lại `npm install`

---

## 📊 API Endpoints đã implement

```
✅ GET    /api/posts
✅ GET    /api/posts/:id
✅ POST   /api/posts
✅ PUT    /api/posts/:id
✅ DELETE /api/posts/:id
✅ POST   /api/posts/:id/publish

✅ GET    /api/notifications
✅ POST   /api/notifications
✅ PUT    /api/notifications/:id
✅ DELETE /api/notifications/:id
✅ POST   /api/notifications/:id/send

✅ GET    /api/enterprises
✅ POST   /api/enterprises
✅ PUT    /api/enterprises/:id
✅ DELETE /api/enterprises/:id
```

---

## 🎬 Demo Flow

1. **Start server:** `npm start`
2. **Open:** `cms-demo.html`
3. **Create post:** Tạo 2-3 bài viết với status khác nhau
4. **Filter:** Test filter theo status
5. **Edit:** Sửa 1 bài viết
6. **Publish:** Xuất bản 1 bài draft
7. **Delete:** Xóa 1 bài viết
8. **Create notification:** Tạo thông báo
9. **Send:** Gửi thông báo
10. **Check database:** Xem files JSON đã được cập nhật

---

## 🎯 Next Steps

Sau khi test xong, bạn có thể:

1. **Tích hợp vào `index.html` chính**
2. **Thêm authentication** (login/logout)
3. **Thêm file upload** cho hình ảnh
4. **Thêm rich text editor** (TinyMCE, Quill)
5. **Deploy lên server thật**

---

**Status:** ✅ READY TO TEST

Chạy `npm start` và mở `cms-demo.html` để bắt đầu!
