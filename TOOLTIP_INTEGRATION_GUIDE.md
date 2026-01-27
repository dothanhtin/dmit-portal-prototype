# 🎯 Hướng dẫn Tích hợp Hệ thống Tooltip

## 📋 Tổng quan

Hệ thống tooltip đã được tạo thành 2 file riêng biệt để dễ dàng tích hợp vào `index.html`:
- `tooltip-system.css` - Styles cho tooltip
- `tooltip-system.js` - Logic và dữ liệu tooltip

## 🚀 Cách tích hợp vào index.html

### Bước 1: Thêm CSS

Thêm dòng sau vào phần `<head>` của `index.html`, ngay trước thẻ đóng `</head>`:

```html
<!-- Tooltip System CSS -->
<link rel="stylesheet" href="tooltip-system.css">
```

### Bước 2: Thêm HTML Components

Thêm các components sau vào `index.html`, ngay sau thẻ mở `<body>`:

```html
<!-- Tooltip Toggle Button -->
<div class="tooltip-toggle-btn" id="tooltipToggleBtn" onclick="toggleTooltipMode()" title="Bật/Tắt hướng dẫn sử dụng">
    💡
</div>

<!-- Tooltip Overlay -->
<div class="tooltip-overlay" id="tooltipOverlay" onclick="hideCurrentTooltip()"></div>

<!-- Tooltip Box -->
<div class="tooltip-box" id="tooltipBox">
    <div class="tooltip-arrow" id="tooltipArrow"></div>
    <div class="tooltip-header">
        <div class="tooltip-title" id="tooltipTitle">
            <span id="tooltipIcon">💡</span>
            <span id="tooltipTitleText">Hướng dẫn</span>
        </div>
        <div class="tooltip-close" onclick="hideCurrentTooltip()">&times;</div>
    </div>
    <div class="tooltip-content" id="tooltipContent"></div>
    <div class="tooltip-footer">
        <div class="tooltip-progress" id="tooltipProgress">1/30</div>
        <div class="tooltip-actions">
            <button class="tooltip-btn tooltip-btn-skip" onclick="skipTooltip()">Bỏ qua</button>
            <button class="tooltip-btn tooltip-btn-next" onclick="nextTooltip()">Tiếp theo →</button>
        </div>
    </div>
</div>

<!-- Tooltip Control Panel -->
<div class="tooltip-control-panel" id="tooltipControlPanel">
    <div class="tooltip-panel-header">
        <span>📚</span>
        <span>Hướng dẫn sử dụng</span>
    </div>
    <div class="tooltip-panel-stats">
        <div class="tooltip-stat-item">
            <span class="tooltip-stat-label">Tổng số hướng dẫn:</span>
            <span class="tooltip-stat-value" id="totalTooltips">30</span>
        </div>
        <div class="tooltip-stat-item">
            <span class="tooltip-stat-label">Đã xem:</span>
            <span class="tooltip-stat-value" id="viewedTooltips">0</span>
        </div>
        <div class="tooltip-stat-item">
            <span class="tooltip-stat-label">Tiến độ:</span>
            <span class="tooltip-stat-value" id="progressPercent">0%</span>
        </div>
    </div>
    <div class="tooltip-panel-actions">
        <button class="tooltip-panel-btn" onclick="startGuidedTour()">
            <span>🎯</span>
            <span>Bắt đầu Tour hướng dẫn</span>
        </button>
        <button class="tooltip-panel-btn" onclick="resetTooltips()">
            <span>🔄</span>
            <span>Đặt lại tiến độ</span>
        </button>
        <button class="tooltip-panel-btn" onclick="toggleTooltipMode()">
            <span>❌</span>
            <span>Đóng hướng dẫn</span>
        </button>
    </div>
</div>
```

### Bước 3: Thêm JavaScript

Thêm dòng sau vào cuối file `index.html`, ngay trước thẻ đóng `</body>`:

```html
<!-- Tooltip System JS -->
<script src="tooltip-system.js"></script>
```

## 📝 Vị trí chính xác trong index.html

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Công Khai Dữ Liệu Sở Công Thương</title>
    <style>
        /* ... existing styles ... */
    </style>
    
    <!-- ✅ THÊM DÒNG NÀY -->
    <link rel="stylesheet" href="tooltip-system.css">
</head>
<body>
    <!-- ✅ THÊM CÁC COMPONENTS NÀY NGAY SAU <body> -->
    <!-- Tooltip Toggle Button -->
    <div class="tooltip-toggle-btn" id="tooltipToggleBtn" onclick="toggleTooltipMode()" title="Bật/Tắt hướng dẫn sử dụng">
        💡
    </div>
    <!-- ... (các components tooltip khác) ... -->
    
    <!-- Header -->
    <header class="header">
        <!-- ... existing header ... -->
    </header>
    
    <!-- ... rest of content ... -->
    
    <!-- Leaflet JS -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    
    <script>
        // ... existing JavaScript ...
    </script>
    
    <!-- ✅ THÊM DÒNG NÀY CUỐI CÙNG -->
    <script src="tooltip-system.js"></script>
</body>
</html>
```

## ✨ Tính năng

### 1. Nút Toggle (💡)
- **Vị trí:** Góc phải màn hình, phía trên chatbot
- **Chức năng:** Bật/tắt chế độ hướng dẫn
- **Màu sắc:** 
  - Tím: Chế độ tắt
  - Xanh lá: Chế độ bật

### 2. Control Panel
- **Hiển thị khi:** Bật chế độ hướng dẫn
- **Thống kê:**
  - Tổng số hướng dẫn: 30
  - Số đã xem
  - Tiến độ %
- **Hành động:**
  - Bắt đầu Tour hướng dẫn
  - Đặt lại tiến độ
  - Đóng hướng dẫn

### 3. Tooltip Box
- **Hiển thị:** Khi click vào element hoặc trong tour
- **Nội dung:**
  - Tiêu đề với icon
  - Mô tả chi tiết
  - Hướng dẫn sử dụng
  - Tips hữu ích
- **Điều khiển:**
  - Nút "Bỏ qua": Đóng tooltip hiện tại
  - Nút "Tiếp theo": Chuyển sang tooltip kế tiếp
  - Nút X: Đóng tooltip

### 4. Highlight Effect
- **Hiệu ứng:** Viền tím nhấp nháy
- **Mục đích:** Làm nổi bật element đang được hướng dẫn

### 5. Overlay
- **Màu:** Đen mờ 50%
- **Chức năng:** Làm tối phần còn lại, tập trung vào element

## 📊 Danh sách Tooltips (30+)

### Navigation (7)
1. Logo & Tên cổng
2. Trang chủ
3. Dữ liệu
4. Multimedia
5. Tin tức
6. Thông báo
7. Liên hệ

### Stats Banner (4)
8. Bộ dữ liệu công khai
9. Doanh nghiệp đăng ký
10. Tài liệu Multimedia
11. Lượt xem trang

### Search & Quick Access (5)
12. Thanh tìm kiếm
13. Quick: Thống kê dữ liệu
14. Quick: Thư viện Multimedia
15. Quick: Xuất dữ liệu Excel
16. Quick: Tin tức

### Support (2)
17. Chatbot AI
18. Admin Mode Toggle

### Data Section (Có thể mở rộng)
19. Filter tabs
20. Data categories
21. Map view
22. Download buttons
23. Export modal

### CMS Features (Khi admin mode)
24. Quản lý bài viết
25. Quản lý thông báo
26. Lịch đăng bài
27. Quản lý doanh nghiệp
28. Gửi thông báo hàng loạt
29. Import dữ liệu
30. Thống kê

## 🎨 Tùy chỉnh

### Thay đổi màu sắc

Trong `tooltip-system.css`, tìm và thay đổi:

```css
/* Màu chính của tooltip */
.tooltip-toggle-btn {
    background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
}

/* Màu khi active */
.tooltip-toggle-btn.active {
    background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
}
```

### Thêm tooltip mới

Trong `tooltip-system.js`, thêm vào mảng `TOOLTIPS_DATA`:

```javascript
{
    id: 'my-new-tooltip',
    target: '[data-tooltip="my-element"]',
    title: '🎯 Tiêu đề',
    content: `
        <p><strong>Mô tả</strong></p>
        <ul>
            <li>Điểm 1</li>
            <li>Điểm 2</li>
        </ul>
    `,
    position: 'bottom', // top, bottom, left, right
    category: 'custom'
}
```

Sau đó thêm attribute vào HTML element:

```html
<div data-tooltip="my-element">Nội dung</div>
```

## 🔧 API Functions

### Các hàm có thể gọi từ console hoặc code:

```javascript
// Bật/tắt chế độ hướng dẫn
toggleTooltipMode()

// Bắt đầu tour hướng dẫn
startGuidedTour()

// Hiển thị tooltip tiếp theo
nextTooltip()

// Bỏ qua tooltip hiện tại
skipTooltip()

// Ẩn tooltip hiện tại
hideCurrentTooltip()

// Đặt lại tiến độ
resetTooltips()

// Hiển thị tooltip cụ thể (theo index)
showTooltip(5)
```

## 💾 LocalStorage

Hệ thống tự động lưu:
- Danh sách tooltip đã xem
- Vị trí hiện tại trong tour
- Tiến độ hoàn thành

Key: `tooltipState`

## 🎯 Trải nghiệm người dùng

### Lần đầu truy cập:
1. Hiển thị popup hỏi có muốn xem hướng dẫn không
2. Nếu đồng ý → Bắt đầu guided tour tự động
3. Nếu từ chối → Có thể bật lại bất cứ lúc nào

### Lần sau:
1. Nút 💡 luôn hiển thị ở góc phải
2. Click để bật/tắt chế độ hướng dẫn
3. Tiến độ được lưu lại

## 📱 Responsive

- **Desktop:** Tooltip hiển thị đầy đủ với arrow
- **Mobile:** 
  - Tooltip full width
  - Ẩn arrow
  - Control panel full width
  - Nút toggle nhỏ hơn

## ⚡ Performance

- **Lazy loading:** Tooltip chỉ load khi cần
- **LocalStorage:** Lưu state để tránh load lại
- **Smooth animations:** 0.3s transition
- **Lightweight:** < 50KB total

## 🐛 Troubleshooting

### Tooltip không hiển thị?
- Kiểm tra console có lỗi không
- Đảm bảo đã thêm đúng CSS và JS
- Kiểm tra `data-tooltip` attributes

### Element không được highlight?
- Kiểm tra selector trong `TOOLTIPS_DATA`
- Đảm bảo element tồn tại trong DOM
- Kiểm tra z-index của element

### Tour không chạy?
- Mở console xem log
- Kiểm tra `tooltipState.isGuidedTour`
- Reset tooltips và thử lại

## 🎨 Customization Examples

### Thay đổi vị trí nút toggle:

```css
.tooltip-toggle-btn {
    bottom: 100px;  /* Thay đổi vị trí dọc */
    right: 24px;    /* Thay đổi vị trí ngang */
}
```

### Thay đổi số lượng tooltip hiển thị:

Trong `tooltip-system.js`, chỉnh sửa mảng `TOOLTIPS_DATA`.

### Tắt popup lần đầu:

Trong `tooltip-system.js`, comment dòng:

```javascript
// const isFirstVisit = !localStorage.getItem('tooltipState');
// if (isFirstVisit) { ... }
```

## 📞 Support

Nếu cần hỗ trợ, liên hệ team phát triển hoặc xem documentation.

---

**Phiên bản:** 1.0.0  
**Ngày tạo:** 30/10/2025  
**Tác giả:** BLACKBOXAI Development Team
