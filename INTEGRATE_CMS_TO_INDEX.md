# 🔧 TÍCH HỢP CMS VÀO INDEX.HTML

## 🎯 Mục tiêu

Khi tạo bài viết mới trong CMS → Bài viết xuất hiện ngay trong section "Tin tức" của `index.html`

---

## ✅ Cách tích hợp đơn giản

### Bước 1: Thêm scripts vào cuối `index.html` (trước `</body>`)

```html
<!-- API Client -->
<script src="api-client.js"></script>

<!-- CMS Functions với API thực -->
<script src="cms-functions.js"></script>

<!-- Load posts from API when page loads -->
<script>
document.addEventListener('DOMContentLoaded', async function() {
    // Load posts from API and display in News section
    try {
        const response = await api.getPosts('published');
        if (response.success && response.data.length > 0) {
            renderNewsFromAPI(response.data);
        }
    } catch (error) {
        console.log('API not available, using static content');
    }
});

function renderNewsFromAPI(posts) {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;
    
    newsContainer.innerHTML = posts.map(post => `
        <div class="article-card">
            <div class="article-image">${getIconForCategory(post.category)}</div>
            <div class="article-content">
                <div class="article-title">${post.title}</div>
                <div class="article-excerpt">${post.content.substring(0, 200)}...</div>
                <div class="article-footer">
                    <span>📅 ${formatDate(post.createdAt)}</span>
                    <span>👁️ ${Math.floor(Math.random() * 2000)} lượt xem</span>
                    <span>💬 ${Math.floor(Math.random() * 50)} bình luận</span>
                </div>
                <div class="share-buttons">
                    <a href="#" class="share-btn facebook" onclick="shareContent('facebook', '${post.title}'); return false;">f</a>
                    <a href="#" class="share-btn twitter" onclick="shareContent('twitter', '${post.title}'); return false;">𝕏</a>
                    <a href="#" class="share-btn zalo" onclick="shareContent('zalo', '${post.title}'); return false;">Z</a>
                    <a href="#" class="share-btn linkedin" onclick="shareContent('linkedin', '${post.title}'); return false;">in</a>
                </div>
            </div>
        </div>
    `).join('');
}

function getIconForCategory(category) {
    const icons = {
        'news': '📰',
        'event': '🏭',
        'policy': '🎁',
        'report': '⚡'
    };
    return icons[category] || '📰';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}
</script>
```

### Bước 2: Cập nhật hàm `submitCMSPost` để reload News

Trong phần CMS functions, sau khi tạo/sửa bài viết thành công, thêm:

```javascript
// Reload news section if post is published
if (postData.status === 'published') {
    const response = await api.getPosts('published');
    renderNewsFromAPI(response.data);
}
```

---

## 🚀 DEMO FLOW

### 1. Khởi động server
```bash
npm start
```

### 2. Mở `index.html` từ server
Truy cập: **http://localhost:3001/index.html**

### 3. Bật Admin Mode
Click checkbox "Admin Mode (CMS)" ở góc trên bên phải

### 4. Vào CMS
Click menu "⚙️ CMS"

### 5. Tạo bài viết mới
- Click "➕ Tạo bài viết mới"
- Nhập:
  - Tiêu đề: "Bài viết test từ CMS"
  - Danh mục: "Tin tức"
  - Nội dung: "Đây là bài viết được tạo từ CMS và sẽ hiển thị trong section Tin tức"
  - Trạng thái: "✓ Xuất bản ngay"
- Click "💾 Lưu bài viết"

### 6. Xem kết quả
- Click menu "📰 Tin tức"
- ✅ **Bài viết mới xuất hiện** trong danh sách tin tức!

### 7. Sửa bài viết
- Quay lại CMS
- Click "✏️" trên bài viết
- Sửa tiêu đề
- Lưu
- ✅ **Tiêu đề được cập nhật** trong section Tin tức

### 8. Xóa bài viết
- Click "🗑️"
- Confirm
- ✅ **Bài viết biến mất** khỏi section Tin tức

---

## 📊 Luồng dữ liệu

```
CMS Section (Tạo bài viết)
         ↓
    POST /api/posts
         ↓
  database/posts.json (Lưu)
         ↓
    GET /api/posts?status=published
         ↓
News Section (Hiển thị)
```

---

## ✨ Tính năng

- ✅ Tạo bài viết trong CMS → Hiển thị ngay trong News
- ✅ Sửa bài viết → Cập nhật real-time
- ✅ Xóa bài viết → Biến mất ngay
- ✅ Chỉ bài "published" mới hiển thị
- ✅ Bài "draft" và "pending" chỉ thấy trong CMS

---

## 🎬 Video Demo Script

1. **Mở index.html** từ http://localhost:3001
2. **Bật Admin Mode**
3. **Vào CMS** → Tab "Quản lý bài viết"
4. **Tạo bài mới:**
   - Title: "Tin tức mới từ CMS"
   - Category: "Tin tức"
   - Content: "Nội dung..."
   - Status: "Xuất bản ngay"
5. **Lưu** → Success alert
6. **Navigate to News** → Bài viết mới xuất hiện!
7. **Quay CMS** → Sửa tiêu đề
8. **Refresh News** → Tiêu đề đã thay đổi
9. **Xóa bài** → Biến mất khỏi News

---

## 📝 Code cần thêm vào index.html

Thêm vào cuối file, trước `</body>`:

```html
<script src="api-client.js"></script>
<script src="cms-functions.js"></script>
<script>
// Auto-load published posts when navigating to News section
const originalShowSection = showSection;
showSection = function(sectionName, clickedElement) {
    originalShowSection.call(this, sectionName, clickedElement);
    
    if (sectionName === 'news') {
        loadPublishedPosts();
    }
};

async function loadPublishedPosts() {
    try {
        const response = await api.getPosts('published');
        if (response.success) {
            renderNewsFromAPI(response.data);
        }
    } catch (error) {
        console.log('Using static news content');
    }
}

function renderNewsFromAPI(posts) {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer || posts.length === 0) return;
    
    newsContainer.innerHTML = posts.map(post => `
        <div class="article-card">
            <div class="article-image">${getIconForCategory(post.category)}</div>
            <div class="article-content">
                <div class="article-title">${post.title}</div>
                <div class="article-excerpt">${post.content.substring(0, 200)}...</div>
                <div class="article-footer">
                    <span>📅 ${formatDateVN(post.createdAt)}</span>
                    <span>👁️ ${Math.floor(Math.random() * 2000)} lượt xem</span>
                </div>
                <div class="share-buttons">
                    <a href="#" class="share-btn facebook" onclick="shareContent('facebook', '${post.title}'); return false;">f</a>
                    <a href="#" class="share-btn twitter" onclick="shareContent('twitter', '${post.title}'); return false;">𝕏</a>
                    <a href="#" class="share-btn zalo" onclick="shareContent('zalo', '${post.title}'); return false;">Z</a>
                    <a href="#" class="share-btn linkedin" onclick="shareContent('linkedin', '${post.title}'); return false;">in</a>
                </div>
            </div>
        </div>
    `).join('');
}

function getIconForCategory(category) {
    const icons = {
        'news': '📰',
        'event': '🏭',
        'policy': '🎁',
        'report': '⚡'
    };
    return icons[category] || '📰';
}

function formatDateVN(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}
</script>
```

---

## ✅ Kết quả

Sau khi tích hợp:

1. **Tạo bài trong CMS** → Lưu với status "published"
2. **Navigate to News** → Bài viết hiển thị ngay
3. **Sửa bài trong CMS** → Refresh News → Thấy thay đổi
4. **Xóa bài trong CMS** → Bài biến mất khỏi News

**Dữ liệu thật từ `database/posts.json` được hiển thị trên portal!**
