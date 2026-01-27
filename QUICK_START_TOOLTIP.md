# ⚡ Quick Start - Hệ thống Tooltip

## 🎯 Bắt đầu nhanh trong 3 bước

### Bước 1: Mở file demo
```bash
# Mở trong browser
start index-tooltip-demo.html
```

### Bước 2: Test các tính năng
1. Click nút **💡** ở góc phải màn hình
2. Click **"Bắt đầu Tour hướng dẫn"** trong panel
3. Xem tooltip hiển thị từng bước
4. Click **"Tiếp theo"** để xem tooltip kế tiếp

### Bước 3: Tích hợp vào index.html

#### 3.1. Thêm CSS vào `<head>`:
```html
<link rel="stylesheet" href="tooltip-system.css">
```

#### 3.2. Thêm HTML sau `<body>`:
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

#### 3.3. Thêm JS trước `</body>`:
```html
<script src="tooltip-system.js"></script>
```

## ✅ Xong!

Mở index.html trong browser và test:
- Click nút 💡
- Bắt đầu tour
- Xem tooltips

## 📁 Files đã tạo

```
dmit-portal-prototype/
├── tooltip-system.css          # ← CSS cho tooltip
├── tooltip-system.js           # ← Logic tooltip
├── index-tooltip-demo.html     # ← Demo để test
├── TOOLTIP_INTEGRATION_GUIDE.md # ← Hướng dẫn chi tiết
├── TOOLTIP_README.md           # ← Documentation đầy đủ
└── QUICK_START_TOOLTIP.md      # ← File này (Quick start)
```

## 🎨 Preview

### Nút Toggle:
```
┌─────────┐
│   💡    │  ← Click để bật/tắt
└─────────┘
```

### Control Panel (khi bật):
```
┌──────────────────────┐
│ 📚 Hướng dẫn sử dụng │
├──────────────────────┤
│ Tổng: 30             │
│ Đã xem: 5            │
│ Tiến độ: 16%         │
├──────────────────────┤
│ 🎯 Bắt đầu Tour      │
│ 🔄 Đặt lại tiến độ   │
│ ❌ Đóng hướng dẫn    │
└──────────────────────┘
```

### Tooltip Box:
```
┌────────────────────────────┐
│ 🏠 Trang chủ          [X] │
├────────────────────────────┤
│ Chức năng: Quay về trang   │
│ chủ của cổng thông tin.    │
│                            │
│ Cách sử dụng:              │
│ • Click để xem tổng quan   │
│ • Hiển thị tin tức mới     │
├────────────────────────────┤
│ 1/30    [Bỏ qua] [Tiếp →] │
└────────────────────────────┘
```

## 🚀 Lệnh nhanh

```bash
# Test demo
start index-tooltip-demo.html

# Hoặc với server
npm start
# Mở: http://localhost:3000/index-tooltip-demo.html
```

## 💡 Tips

1. **Test demo trước** khi tích hợp vào index.html
2. **Backup index.html** trước khi chỉnh sửa
3. **Thêm từng phần** và test từng bước
4. **Kiểm tra console** nếu có lỗi
5. **Test responsive** trên mobile

## 🎊 Kết quả

Sau khi hoàn thành, bạn sẽ có:

✅ Nút toggle 💡 ở góc phải  
✅ 30+ tooltips hướng dẫn chi tiết  
✅ Guided tour tự động  
✅ Progress tracking  
✅ Auto-save state  
✅ Responsive design  
✅ Professional UX  

---

**Thời gian tích hợp:** ~10 phút  
**Độ khó:** ⭐⭐☆☆☆ (Dễ)  
**Tương thích:** ✅ Desktop, ✅ Mobile, ✅ Tablet
