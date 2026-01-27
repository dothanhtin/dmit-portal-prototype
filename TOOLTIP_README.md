# 💡 Hệ thống Tooltip Hướng dẫn Sử dụng

## 🎯 Giới thiệu

Hệ thống tooltip được thiết kế để hướng dẫn người dùng sử dụng tất cả các chức năng trong Cổng Dữ Liệu Công Thương một cách trực quan và dễ hiểu.

## 📦 Files đã tạo

1. **tooltip-system.css** - Stylesheet cho tooltip system
2. **tooltip-system.js** - Logic và dữ liệu tooltip
3. **index-tooltip-demo.html** - File demo để test
4. **TOOLTIP_INTEGRATION_GUIDE.md** - Hướng dẫn tích hợp chi tiết

## ✨ Tính năng chính

### 1. 💡 Nút Toggle
- **Vị trí:** Góc phải màn hình, phía trên chatbot
- **Màu sắc:** 
  - 🟣 Tím: Chế độ tắt
  - 🟢 Xanh lá: Chế độ bật
- **Chức năng:** Bật/tắt toàn bộ hệ thống hướng dẫn

### 2. 📚 Control Panel
- **Hiển thị:** Khi bật chế độ hướng dẫn
- **Thống kê:**
  - Tổng số hướng dẫn: 30+
  - Số đã xem
  - Tiến độ % hoàn thành
- **Hành động:**
  - 🎯 Bắt đầu Tour hướng dẫn
  - 🔄 Đặt lại tiến độ
  - ❌ Đóng hướng dẫn

### 3. 💬 Tooltip Box
- **Nội dung:**
  - Icon và tiêu đề
  - Mô tả chi tiết chức năng
  - Hướng dẫn sử dụng từng bước
  - Tips và lưu ý
- **Điều khiển:**
  - ❌ Nút đóng (X)
  - ⏭️ Bỏ qua
  - ➡️ Tiếp theo

### 4. ✨ Highlight Effect
- **Hiệu ứng:** Viền tím nhấp nháy
- **Animation:** Pulse effect 2s
- **Mục đích:** Làm nổi bật element đang được hướng dẫn

### 5. 🌑 Overlay
- **Màu:** Đen mờ 50%
- **Chức năng:** Làm tối phần còn lại, tập trung vào element
- **Click:** Đóng tooltip hiện tại

## 🚀 Cách sử dụng

### Test Demo ngay:

```bash
# Mở file demo trong browser
start index-tooltip-demo.html
```

Hoặc:

```bash
# Nếu đã có server
npm start
# Sau đó mở: http://localhost:3000/index-tooltip-demo.html
```

### Tích hợp vào index.html:

Xem file `TOOLTIP_INTEGRATION_GUIDE.md` để biết hướng dẫn chi tiết.

**TL;DR:**
1. Thêm `<link rel="stylesheet" href="tooltip-system.css">` vào `<head>`
2. Thêm HTML components sau `<body>`
3. Thêm `<script src="tooltip-system.js"></script>` trước `</body>`

## 📊 Danh sách Tooltips

### 🧭 Navigation (7 tooltips)
1. ✅ Logo & Tên cổng
2. ✅ Trang chủ
3. ✅ Dữ liệu
4. ✅ Multimedia
5. ✅ Tin tức
6. ✅ Thông báo
7. ✅ Liên hệ

### 📈 Stats Banner (4 tooltips)
8. ✅ Bộ dữ liệu công khai
9. ✅ Doanh nghiệp đăng ký
10. ✅ Tài liệu Multimedia
11. ✅ Lượt xem trang

### 🔍 Search & Quick Access (5 tooltips)
12. ✅ Thanh tìm kiếm toàn cục
13. ✅ Quick: Thống kê dữ liệu
14. ✅ Quick: Thư viện Multimedia
15. ✅ Quick: Xuất dữ liệu Excel
16. ✅ Quick: Tin tức - Sự kiện

### 🛠️ Support & Admin (2 tooltips)
17. ✅ Chatbot AI
18. ✅ Admin Mode Toggle

### 📝 Có thể mở rộng thêm:
- Data filters
- Map layers
- Export modal
- Contact form
- CMS features
- Share buttons
- News slider
- Multimedia gallery

## 🎨 Customization

### Thay đổi màu sắc:

Trong `tooltip-system.css`:

```css
/* Màu nút toggle */
.tooltip-toggle-btn {
    background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
}

/* Màu khi active */
.tooltip-toggle-btn.active {
    background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
}

/* Màu highlight */
.tooltip-highlight {
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.5), 0 0 0 8px rgba(124, 58, 237, 0.3) !important;
}
```

### Thêm tooltip mới:

Trong `tooltip-system.js`, thêm vào mảng `TOOLTIPS_DATA`:

```javascript
{
    id: 'my-tooltip',
    target: '[data-tooltip="my-element"]',
    title: '🎯 Tiêu đề của tôi',
    content: `
        <p><strong>Mô tả:</strong> Giải thích chức năng</p>
        <ul>
            <li>Bước 1</li>
            <li>Bước 2</li>
        </ul>
    `,
    position: 'bottom', // top, bottom, left, right
    category: 'custom'
}
```

Thêm attribute vào HTML:

```html
<div data-tooltip="my-element">Nội dung</div>
```

## 🔧 API Functions

```javascript
// Bật/tắt chế độ hướng dẫn
toggleTooltipMode()

// Bắt đầu tour tự động
startGuidedTour()

// Tooltip tiếp theo
nextTooltip()

// Bỏ qua tooltip hiện tại
skipTooltip()

// Ẩn tooltip
hideCurrentTooltip()

// Reset tiến độ
resetTooltips()

// Hiển thị tooltip cụ thể (index)
showTooltip(5)
```

## 💾 LocalStorage

Dữ liệu được lưu tự động:

```javascript
{
    viewedTooltips: ['nav-home', 'nav-data', ...],
    currentIndex: 5
}
```

Key: `tooltipState`

## 📱 Responsive

### Desktop (> 768px)
- Tooltip max-width: 420px
- Control panel: 280-320px
- Nút toggle: 60x60px
- Arrow hiển thị đầy đủ

### Mobile (≤ 768px)
- Tooltip: Full width (trừ padding 32px)
- Control panel: Full width
- Nút toggle: 50x50px
- Arrow: Ẩn

## 🎭 User Experience Flow

### Lần đầu truy cập:
1. Popup hỏi: "Bạn có muốn xem hướng dẫn?"
2. Nếu YES → Bắt đầu guided tour
3. Nếu NO → Có thể bật lại bất cứ lúc nào

### Lần sau:
1. Nút 💡 luôn hiển thị
2. Click để bật/tắt
3. Tiến độ được lưu lại
4. Tiếp tục từ vị trí đã xem

## 🧪 Testing

### Test Demo:
```bash
# Mở file demo
start index-tooltip-demo.html
```

### Test trong index.html:
1. Tích hợp theo hướng dẫn
2. Mở index.html trong browser
3. Click nút 💡
4. Test các chức năng:
   - ✅ Toggle on/off
   - ✅ Guided tour
   - ✅ Next/Skip buttons
   - ✅ Progress tracking
   - ✅ LocalStorage save
   - ✅ Reset function
   - ✅ Responsive design

## 📋 Checklist Tích hợp

- [ ] Copy `tooltip-system.css` vào project
- [ ] Copy `tooltip-system.js` vào project
- [ ] Thêm `<link>` CSS vào `<head>` của index.html
- [ ] Thêm HTML components sau `<body>`
- [ ] Thêm `<script>` JS trước `</body>`
- [ ] Test trên desktop
- [ ] Test trên mobile
- [ ] Test tất cả tooltips
- [ ] Test guided tour
- [ ] Test localStorage
- [ ] Deploy lên server

## 🐛 Troubleshooting

### Tooltip không hiển thị?
```javascript
// Mở console và check:
console.log(TOOLTIPS_DATA); // Xem dữ liệu tooltip
console.log(tooltipState); // Xem trạng thái
```

### Element không highlight?
- Kiểm tra `data-tooltip` attribute
- Kiểm tra selector trong `TOOLTIPS_DATA`
- Kiểm tra z-index của element

### Tour không chạy?
```javascript
// Reset và thử lại:
resetTooltips();
startGuidedTour();
```

## 📞 Support

Nếu gặp vấn đề:
1. Xem `TOOLTIP_INTEGRATION_GUIDE.md`
2. Check console errors
3. Test với `index-tooltip-demo.html`
4. Liên hệ team phát triển

## 🎉 Kết quả mong đợi

Sau khi tích hợp thành công:

✅ Người dùng mới có thể học cách sử dụng hệ thống nhanh chóng  
✅ Giảm thời gian onboarding  
✅ Tăng user engagement  
✅ Giảm số lượng câu hỏi hỗ trợ  
✅ Cải thiện UX tổng thể  

## 📈 Metrics

Có thể tracking:
- Số người bật tooltip mode
- Số người hoàn thành tour
- Tooltip nào được xem nhiều nhất
- Thời gian trung bình hoàn thành tour

## 🔮 Tương lai

Có thể mở rộng:
- [ ] Thêm video hướng dẫn
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] A/B testing tooltips
- [ ] Interactive tutorials
- [ ] Gamification (badges, points)

---

**Version:** 1.0.0  
**Last Updated:** 30/10/2025  
**Author:** BLACKBOXAI Development Team  
**License:** MIT
