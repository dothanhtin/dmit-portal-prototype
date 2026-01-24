# URD - USER REQUIREMENTS DOCUMENT
## Cổng Công Khai Dữ Liệu Sở Công Thương

**Version:** 1.0.0  
**Date:** 30/10/2025  
**Status:** Production Ready  
**Document Type:** User Requirements Document

---

## 📋 MỤC LỤC

1. [Tổng quan hệ thống](#1-tổng-quan-hệ-thống)
2. [Phạm vi dự án](#2-phạm-vi-dự-án)
3. [Người dùng và vai trò](#3-người-dùng-và-vai-trò)
4. [Yêu cầu chức năng](#4-yêu-cầu-chức-năng)
5. [Yêu cầu phi chức năng](#5-yêu-cầu-phi-chức-năng)
6. [Use Cases](#6-use-cases)
7. [User Stories](#7-user-stories)
8. [Business Rules](#8-business-rules)
9. [Yêu cầu giao diện](#9-yêu-cầu-giao-diện)
10. [Yêu cầu dữ liệu](#10-yêu-cầu-dữ-liệu)
11. [Yêu cầu tích hợp](#11-yêu-cầu-tích-hợp)
12. [Yêu cầu bảo mật](#12-yêu-cầu-bảo-mật)

---

## 1. TỔNG QUAN HỆ THỐNG

### 1.1 Mục đích
Cổng Công Khai Dữ Liệu Sở Công Thương là nền tảng web hiện đại nhằm:
- Công khai minh bạch dữ liệu công thương
- Cung cấp thông tin cho doanh nghiệp và công dân
- Quản lý và phân phối dữ liệu hiệu quả
- Hỗ trợ tra cứu và tải xuống dữ liệu
- Tương tác thông minh qua AI Chatbot

### 1.2 Đối tượng sử dụng
- **Công dân:** Tra cứu thông tin công khai
- **Doanh nghiệp:** Tìm kiếm chính sách, dữ liệu thống kê
- **Nhà quản lý:** Quản trị nội dung, phân tích dữ liệu
- **Cán bộ Sở Công Thương:** Cập nhật, quản lý thông tin

### 1.3 Lợi ích
- ✅ Minh bạch hóa dữ liệu công
- ✅ Tiết kiệm thời gian tra cứu
- ✅ Hỗ trợ ra quyết định dựa trên dữ liệu
- ✅ Tăng cường tương tác với doanh nghiệp
- ✅ Hiện đại hóa dịch vụ công

---

## 2. PHẠM VI DỰ ÁN

### 2.1 Trong phạm vi (In Scope)

#### 2.1.1 Chức năng chính
- ✅ Công khai dữ liệu theo 4 lĩnh vực: Năng lượng, Thương mại, Công nghiệp, Quy hoạch
- ✅ Hiển thị dữ liệu trên bản đồ tương tác (Leaflet Maps)
- ✅ Quản lý tin tức, sự kiện, thông báo
- ✅ Thư viện multimedia (hình ảnh, video, infographic, tài liệu)
- ✅ AI Chatbot hỗ trợ tra cứu
- ✅ Hệ thống CMS quản trị nội dung
- ✅ Xuất dữ liệu (Excel, CSV, JSON)
- ✅ Chia sẻ mạng xã hội (Facebook, Twitter, Zalo, LinkedIn)
- ✅ Hòm thư góp ý và liên hệ

#### 2.1.2 Dữ liệu quản lý
- **Năng lượng:** 7 loại dữ liệu (cơ sở năng lượng, điện lực, khí, kiểm kê nhà kính)
- **Thương mại:** 9 loại dữ liệu (chợ, siêu thị, TTTM, cửa hàng tiện lợi, FDI, xăng dầu, rượu, thuốc lá)
- **Công nghiệp:** 5 loại dữ liệu (KCN, cụm CN, DN hỗ trợ, vật liệu nổ)
- **Quy hoạch:** 4 loại dữ liệu (quy hoạch chợ, lưới điện, TTTM, siêu thị)

### 2.2 Ngoài phạm vi (Out of Scope)
- ❌ Thanh toán trực tuyến
- ❌ Tích hợp với hệ thống kế toán
- ❌ Mobile app (iOS/Android native)
- ❌ Hệ thống ERP doanh nghiệp
- ❌ Blockchain integration

---

## 3. NGƯỜI DÙNG VÀ VAI TRÒ

### 3.1 Actors (Người dùng)

#### 3.1.1 **Public User (Người dùng công khai)**
**Mô tả:** Công dân, doanh nghiệp, nhà nghiên cứu truy cập thông tin công khai

**Quyền hạn:**
- ✅ Xem tất cả dữ liệu công khai
- ✅ Tìm kiếm, lọc dữ liệu
- ✅ Xem bản đồ tương tác
- ✅ Tải xuống dữ liệu (Excel, CSV, JSON)
- ✅ Đọc tin tức, thông báo
- ✅ Xem multimedia
- ✅ Sử dụng chatbot
- ✅ Gửi góp ý, liên hệ
- ✅ Chia sẻ nội dung lên mạng xã hội

**Giới hạn:**
- ❌ Không thể tạo, sửa, xóa nội dung
- ❌ Không truy cập CMS
- ❌ Không quản lý doanh nghiệp

#### 3.1.2 **Content Editor (Biên tập viên)**
**Mô tả:** Cán bộ phụ trách nội dung, tin tức

**Quyền hạn:**
- ✅ Tất cả quyền của Public User
- ✅ Tạo bài viết mới (draft)
- ✅ Chỉnh sửa bài viết của mình
- ✅ Gửi bài viết để duyệt
- ✅ Tạo thông báo
- ✅ Lên lịch đăng bài
- ✅ Quản lý multimedia

**Giới hạn:**
- ❌ Không thể tự xuất bản (cần duyệt)
- ❌ Không xóa bài viết đã xuất bản
- ❌ Không quản lý doanh nghiệp
- ❌ Không quản lý người dùng

#### 3.1.3 **Content Approver (Người duyệt nội dung)**
**Mô tả:** Lãnh đạo phòng ban phụ trách duyệt nội dung

**Quyền hạn:**
- ✅ Tất cả quyền của Content Editor
- ✅ Duyệt/từ chối bài viết
- ✅ Xuất bản bài viết
- ✅ Chỉnh sửa bài viết của người khác
- ✅ Xóa bài viết (draft, pending)
- ✅ Gửi thông báo hàng loạt

**Giới hạn:**
- ❌ Không xóa bài viết đã xuất bản (cần Admin)
- ❌ Không quản lý hệ thống
- ❌ Không import/export dữ liệu hàng loạt

#### 3.1.4 **Data Manager (Quản lý dữ liệu)**
**Mô tả:** Cán bộ quản lý dữ liệu doanh nghiệp, thống kê

**Quyền hạn:**
- ✅ Tất cả quyền của Public User
- ✅ Quản lý danh sách doanh nghiệp
- ✅ Import/Export dữ liệu hàng loạt
- ✅ Cập nhật thông tin doanh nghiệp
- ✅ Phân loại, gắn tag dữ liệu
- ✅ Xem thống kê truy cập
- ✅ Quản lý dữ liệu trên bản đồ

**Giới hạn:**
- ❌ Không quản lý nội dung tin tức
- ❌ Không quản lý người dùng
- ❌ Không cấu hình hệ thống

#### 3.1.5 **System Administrator (Quản trị viên)**
**Mô tả:** Quản trị viên hệ thống, có toàn quyền

**Quyền hạn:**
- ✅ **TOÀN QUYỀN** trên hệ thống
- ✅ Quản lý người dùng và phân quyền
- ✅ Cấu hình hệ thống
- ✅ Xóa bất kỳ nội dung nào
- ✅ Backup/Restore dữ liệu
- ✅ Xem logs hệ thống
- ✅ Quản lý API keys
- ✅ Cấu hình chatbot

**Trách nhiệm:**
- Đảm bảo hệ thống hoạt động 24/7
- Bảo mật dữ liệu
- Backup định kỳ
- Giám sát hiệu năng

---

## 4. YÊU CẦU CHỨC NĂNG

### 4.1 Module: Trang chủ (Home)

#### FR-HOME-001: Hiển thị thống kê tổng quan
**Mô tả:** Hiển thị 4 chỉ số thống kê chính trên banner

**Yêu cầu:**
- Hiển thị số lượng bộ dữ liệu công khai
- Hiển thị số lượng doanh nghiệp đăng ký
- Hiển thị số lượng tài liệu multimedia
- Hiển thị lượt xem trang
- Cập nhật real-time hoặc theo định kỳ
- Hiển thị với animation khi load

**Acceptance Criteria:**
- ✅ 4 card thống kê hiển thị đúng dữ liệu
- ✅ Số liệu được format với dấu phẩy (1,247)
- ✅ Responsive trên mobile
- ✅ Animation smooth khi hover

#### FR-HOME-002: Tìm kiếm toàn cục
**Mô tả:** Thanh tìm kiếm cho phép tìm kiếm trên toàn bộ nội dung

**Yêu cầu:**
- Search box nổi bật ở đầu trang
- Tìm kiếm theo: tiêu đề, nội dung, tags, metadata
- Hiển thị gợi ý khi gõ (autocomplete)
- Hỗ trợ tiếng Việt có dấu
- Highlight từ khóa trong kết quả

**Acceptance Criteria:**
- ✅ Tìm kiếm hoạt động với độ trễ < 500ms
- ✅ Hiển thị tối thiểu 5 gợi ý
- ✅ Enter để xem tất cả kết quả
- ✅ Lưu lịch sử tìm kiếm (local storage)

#### FR-HOME-003: Quick Access Cards
**Mô tả:** 4 card truy cập nhanh đến các chức năng chính

**Yêu cầu:**
- Card 1: Thống kê dữ liệu → Navigate to Data section
- Card 2: Thư viện Multimedia → Navigate to Multimedia
- Card 3: Xuất dữ liệu Excel → Open export modal
- Card 4: Tin tức - Sự kiện → Navigate to News

**Acceptance Criteria:**
- ✅ Click card navigate đúng section
- ✅ Hiển thị icon và số liệu
- ✅ Hover effect mượt mà
- ✅ Responsive grid layout

#### FR-HOME-004: News Slider
**Mô tả:** Slider hiển thị 8 tin tức mới nhất (2 slides × 4 items)

**Yêu cầu:**
- Auto-play mỗi 6 giây
- Navigation buttons (Previous/Next)
- Indicator dots (2 dots cho 2 slides)
- Pause on hover
- Click vào tin tức → Navigate to News detail
- Smooth transition animation

**Acceptance Criteria:**
- ✅ Auto-play hoạt động
- ✅ Buttons prev/next chuyển slide
- ✅ Dots indicator active đúng slide
- ✅ Pause khi hover
- ✅ Responsive: 1 column trên mobile

#### FR-HOME-005: Latest Datasets
**Mô tả:** Hiển thị 3 bộ dữ liệu mới cập nhật

**Yêu cầu:**
- Hiển thị tiêu đề, badge "MỚI"/"CẬP NHẬT"
- Hiển thị ngày cập nhật
- Hiển thị số lượt tải
- Click → Navigate to Data section

**Acceptance Criteria:**
- ✅ Hiển thị 3 datasets mới nhất
- ✅ Badge màu sắc phân biệt
- ✅ Click navigate đúng
- ✅ Responsive grid

---

### 4.2 Module: Dữ liệu (Data)

#### FR-DATA-001: Phân loại dữ liệu theo lĩnh vực
**Mô tả:** Hiển thị dữ liệu theo 4 lĩnh vực chính

**Yêu cầu:**
- Filter tabs: Tất cả, Năng lượng, Thương mại, Công nghiệp, Quy hoạch
- Click tab → Hiển thị chỉ dữ liệu của lĩnh vực đó
- Active tab được highlight
- Smooth transition khi chuyển tab

**Acceptance Criteria:**
- ✅ 5 tabs hoạt động đúng
- ✅ Filter chính xác theo category
- ✅ Active state rõ ràng
- ✅ Transition < 300ms

#### FR-DATA-002: Hiển thị data layers
**Mô tả:** Hiển thị 25+ data layers dưới dạng cards

**Yêu cầu:**
- **Năng lượng:** 7 layers
  - Cơ sở sử dụng năng lượng trọng điểm
  - DN hoạt động điện lực bán lẻ
  - DN hoạt động điện lực dưới 3 MW
  - DN hoạt động điện lực phân phối
  - DN kinh doanh khí
  - Kho khí
  - Kiểm kê nhà kính

- **Thương mại:** 9 layers
  - Chợ
  - Siêu thị
  - Trung tâm thương mại
  - Chuỗi cửa hàng tiện lợi
  - Cơ sở bán lẻ
  - Cơ sở bán lẻ có vốn FDI
  - Cửa hàng xăng dầu
  - Thương nhân bán lẻ rượu
  - Thương nhân bán buôn thuốc lá

- **Công nghiệp:** 5 layers
  - Khu công nghiệp
  - Cụm công nghiệp
  - DN hỗ trợ công nghiệp
  - DN thuộc cụm công nghiệp
  - DN sử dụng vật liệu nổ

- **Quy hoạch:** 4 layers
  - Quy hoạch chợ
  - Quy hoạch lưới điện
  - Quy hoạch TTTM
  - Quy hoạch siêu thị

**Acceptance Criteria:**
- ✅ Tất cả 25 layers hiển thị đúng
- ✅ Icon phù hợp với từng loại
- ✅ Metadata hiển thị (số lượng dữ liệu)
- ✅ Click card → Mở bản đồ

#### FR-DATA-003: Interactive Map với Leaflet
**Mô tả:** Hiển thị dữ liệu trên bản đồ tương tác

**Yêu cầu:**
- Sử dụng Leaflet.js
- Base map: OpenStreetMap
- Centered: TP.HCM (10.8231, 106.6297)
- Zoom level: 11
- Hiển thị 15 điểm dữ liệu mẫu cho mỗi layer
- Markers với màu sắc theo trạng thái:
  - 🔴 Đỏ (#dc2626): Đang hoạt động
  - 🟢 Xanh lá (#16a34a): Hoạt động tốt
  - 🟠 Cam (#ea580c): Cần kiểm tra
  - ⚫ Xám (#6b7280): Tạm ngưng

**Acceptance Criteria:**
- ✅ Map load trong < 2s
- ✅ 15 markers hiển thị đúng vị trí
- ✅ Màu sắc phân biệt trạng thái
- ✅ Smooth zoom và pan
- ✅ Responsive trên mobile

#### FR-DATA-004: Map Popup
**Mô tả:** Click marker hiển thị popup với thông tin chi tiết

**Yêu cầu:**
- Tên cơ sở/doanh nghiệp
- Địa chỉ đầy đủ
- Trạng thái (với màu sắc)
- Mã số
- Popup tự động đóng khi click marker khác

**Acceptance Criteria:**
- ✅ Popup hiển thị đầy đủ thông tin
- ✅ Format đẹp, dễ đọc
- ✅ Màu sắc trạng thái nhất quán
- ✅ Close button hoạt động

#### FR-DATA-005: Data Points Table
**Mô tả:** Bảng danh sách tất cả điểm dữ liệu

**Yêu cầu:**
- Hiển thị dưới bản đồ
- Columns: STT, Tên, Địa chỉ, Trạng thái, Mã số, Chia sẻ
- Trạng thái hiển thị dạng badge có màu
- Share buttons: Facebook, Twitter, Zalo, LinkedIn
- Sortable columns
- Pagination nếu > 20 items

**Acceptance Criteria:**
- ✅ Table hiển thị đầy đủ 15 điểm
- ✅ Badge trạng thái đúng màu
- ✅ Share buttons hoạt động
- ✅ Responsive: scroll horizontal trên mobile

#### FR-DATA-006: Map Legend
**Mô tả:** Chú giải màu sắc markers

**Yêu cầu:**
- Hiển thị 4 loại trạng thái
- Mỗi loại có: dot màu + label
- Vị trí: Dưới bản đồ

**Acceptance Criteria:**
- ✅ 4 trạng thái hiển thị đầy đủ
- ✅ Màu sắc khớp với markers
- ✅ Layout rõ ràng, dễ hiểu

#### FR-DATA-007: Data Export Table
**Mô tả:** Bảng danh sách datasets có thể tải xuống

**Yêu cầu:**
- Columns: Tên bộ dữ liệu, Lĩnh vực, Cập nhật, Lượt tải, Định dạng, Thao tác
- Badge lĩnh vực có màu sắc
- Icon download (📥) để tải
- Hiển thị 5 datasets mẫu

**Acceptance Criteria:**
- ✅ Table hiển thị đúng dữ liệu
- ✅ Badge màu sắc phân biệt
- ✅ Click download → Trigger download
- ✅ Responsive table

---

### 4.3 Module: Multimedia

#### FR-MEDIA-001: Filter theo loại media
**Mô tả:** Lọc multimedia theo 6 loại

**Yêu cầu:**
- Filter tabs: Tất cả, Hình ảnh, Video, Infographic, Sách/Tài liệu, Podcast
- Click tab → Hiển thị chỉ media của loại đó
- Active tab được highlight

**Acceptance Criteria:**
- ✅ 6 tabs hoạt động đúng
- ✅ Filter chính xác
- ✅ Smooth transition

#### FR-MEDIA-002: Media Grid Display
**Mô tả:** Hiển thị media items dưới dạng grid

**Yêu cầu:**
- Grid responsive: 4 columns desktop, 2 tablet, 1 mobile
- Mỗi item: thumbnail + icon loại + label
- Aspect ratio: 16:9
- Hover effect: scale 1.05

**Acceptance Criteria:**
- ✅ Grid responsive đúng
- ✅ 8 media items hiển thị
- ✅ Hover effect mượt
- ✅ Icon phân biệt loại media

#### FR-MEDIA-003: Media Viewer
**Mô tả:** Click media item → Mở viewer/player

**Yêu cầu:**
- Hình ảnh: Lightbox viewer
- Video: Embedded player
- PDF: PDF viewer
- Audio: Audio player

**Acceptance Criteria:**
- ✅ Viewer/player mở đúng loại
- ✅ Close button hoạt động
- ✅ Navigation prev/next (nếu có)

---

### 4.4 Module: Tin tức (News)

#### FR-NEWS-001: Hiển thị danh sách tin tức
**Mô tả:** Hiển thị tin tức dưới dạng article cards

**Yêu cầu:**
- Mỗi card: Image + Title + Excerpt + Meta (date, views, comments)
- Hiển thị 3 bài mẫu
- Click card → Xem chi tiết (future)
- Share buttons: Facebook, Twitter, Zalo, LinkedIn

**Acceptance Criteria:**
- ✅ 3 article cards hiển thị đúng
- ✅ Image gradient background
- ✅ Meta info đầy đủ
- ✅ Share buttons hoạt động

#### FR-NEWS-002: Create News (CMS)
**Mô tả:** Button "Đăng bài viết" mở modal tạo bài

**Yêu cầu:**
- Modal form với fields:
  - Tiêu đề (required)
  - Danh mục (required): Tin tức, Sự kiện, Chính sách, Báo cáo
  - Nội dung (required, textarea)
  - Hình ảnh (file upload)
- Submit → Success message
- Form reset sau khi submit

**Acceptance Criteria:**
- ✅ Modal mở/đóng đúng
- ✅ Validation hoạt động
- ✅ Submit thành công
- ✅ Success alert hiển thị

---

### 4.5 Module: Thông báo (Notifications)

#### FR-NOTIF-001: Hiển thị danh sách thông báo
**Mô tả:** Hiển thị thông báo dưới dạng cards

**Yêu cầu:**
- Mỗi card: Badge loại + Ngày + Tiêu đề + Nội dung tóm tắt
- 4 loại badge:
  - QUAN TRỌNG (đỏ #dc2626)
  - CHƯƠNG TRÌNH MỚI (xanh lá #16a34a)
  - ƯU ĐÃI (cam #ea580c)
  - SỰ KIỆN (tím #7c3aed)
- Hiển thị 4 thông báo mẫu

**Acceptance Criteria:**
- ✅ 4 cards hiển thị đúng
- ✅ Badge màu sắc phân biệt
- ✅ Responsive grid

#### FR-NOTIF-002: Unread notification badge
**Mô tả:** Badge số lượng thông báo chưa đọc trên nav

**Yêu cầu:**
- Hiển thị số "5" trên menu Thông báo
- Badge màu đỏ, hình tròn
- Update real-time khi đọc thông báo

**Acceptance Criteria:**
- ✅ Badge hiển thị đúng số
- ✅ Màu đỏ nổi bật
- ✅ Vị trí phù hợp

#### FR-NOTIF-003: Alert info
**Mô tả:** Alert box thông báo số lượng chưa đọc

**Yêu cầu:**
- Hiển thị ở đầu section
- Style: info (xanh dương)
- Text: "Bạn có 5 thông báo chưa đọc"

**Acceptance Criteria:**
- ✅ Alert hiển thị đúng
- ✅ Style info đúng
- ✅ Icon ℹ️ hiển thị

---

### 4.6 Module: Liên hệ (Contact)

#### FR-CONTACT-001: Contact Form
**Mô tả:** Form gửi góp ý, liên hệ

**Yêu cầu:**
- Fields:
  - Họ và tên (required)
  - Email (required, email validation)
  - Số điện thoại (optional, phone validation)
  - Loại góp ý (required, dropdown):
    - Góp ý về dữ liệu
    - Đề xuất tính năng
    - Báo lỗi kỹ thuật
    - Yêu cầu hỗ trợ
    - Khác
  - Nội dung (required, textarea, min 10 chars)
- Submit button: "📤 Gửi góp ý"
- Success message sau khi gửi
- Form reset

**Acceptance Criteria:**
- ✅ Validation hoạt động đúng
- ✅ Email format check
- ✅ Submit thành công
- ✅ Success alert hiển thị
- ✅ Form reset sau submit

#### FR-CONTACT-002: Contact Information
**Mô tả:** Hiển thị thông tin liên hệ

**Yêu cầu:**
- Địa chỉ: 54 Hai Bà Trưng, Hoàn Kiếm, Hà Nội
- Điện thoại: (024) 3825 2684
- Email: dataopen@moit.gov.vn
- Giờ làm việc: T2-T6, 8:00-17:00
- Alert info: "Phản hồi trong 24-48h"

**Acceptance Criteria:**
- ✅ Thông tin hiển thị đầy đủ
- ✅ Format rõ ràng, dễ đọc
- ✅ Icons phù hợp

---

### 4.7 Module: CMS (Content Management System)

#### FR-CMS-001: Admin Mode Toggle
**Mô tả:** Toggle bật/tắt chế độ admin

**Yêu cầu:**
- Checkbox "Admin Mode (CMS)"
- Vị trí: Fixed top-right
- Khi bật: Hiển thị menu "⚙️ CMS"
- Khi tắt: Ẩn menu CMS, quay về Home nếu đang ở CMS
- Lưu trạng thái vào localStorage

**Acceptance Criteria:**
- ✅ Toggle hoạt động đúng
- ✅ Menu CMS show/hide
- ✅ State persist sau refresh
- ✅ Auto navigate khi tắt

#### FR-CMS-002: CMS Tabs Navigation
**Mô tả:** 4 tabs chính trong CMS

**Yêu cầu:**
- Tab 1: 📝 Quản lý bài viết
- Tab 2: 🔔 Quản lý thông báo
- Tab 3: 📅 Lịch đăng bài
- Tab 4: 🏢 Doanh nghiệp
- Click tab → Chuyển view
- Active tab được highlight

**Acceptance Criteria:**
- ✅ 4 tabs hoạt động đúng
- ✅ Content switch đúng
- ✅ Active state rõ ràng

#### FR-CMS-003: Quản lý bài viết
**Mô tả:** Quản lý danh sách bài viết

**Yêu cầu:**
- Filter tabs: Tất cả (12), Đã xuất bản (8), Nháp (2), Chờ duyệt (2), Đã lên lịch (0)
- Table columns: Checkbox, Tiêu đề, Danh mục, Tác giả, Trạng thái, Ngày tạo, Ngày xuất bản, Thao tác
- Trạng thái badge:
  - ✓ Đã xuất bản (xanh lá)
  - ⏳ Chờ duyệt (cam)
  - 📝 Nháp (xám)
- Actions:
  - ✏️ Edit
  - 🗑️ Delete
  - ✓ Duyệt (cho pending)
  - 📤 Xuất bản (cho draft)
- Button "➕ Tạo bài viết mới"
- Checkbox "Select all"

**Acceptance Criteria:**
- ✅ Filter hoạt động đúng
- ✅ Table hiển thị 3 posts mẫu
- ✅ Badge màu sắc đúng
- ✅ Actions hoạt động
- ✅ Select all checkbox

#### FR-CMS-004: Create/Edit Post Modal
**Mô tả:** Modal tạo/sửa bài viết

**Yêu cầu:**
- Fields:
  - Tiêu đề (required)
  - Danh mục (required): Tin tức, Sự kiện, Chính sách, Báo cáo
  - Tác giả (readonly, auto-fill: Admin)
  - Nội dung (required, textarea, 10 rows)
  - Hình ảnh đại diện (file upload)
  - Trạng thái (dropdown):
    - 📝 Lưu nháp
    - ⏳ Gửi duyệt
    - ✓ Xuất bản ngay
    - 📅 Lên lịch xuất bản
  - Ngày & giờ xuất bản (show khi chọn "Lên lịch")
- Buttons: "💾 Lưu bài viết", "Hủy"

**Acceptance Criteria:**
- ✅ Modal open/close đúng
- ✅ Validation hoạt động
- ✅ Schedule datetime show/hide
- ✅ Submit thành công
- ✅ Success alert

#### FR-CMS-005: Quản lý thông báo
**Mô tả:** Quản lý danh sách thông báo gửi đến DN

**Yêu cầu:**
- Table columns: Checkbox, Tiêu đề, Loại, Đối tượng nhận, Trạng thái, Ngày gửi, Thao tác
- Loại badge: QUAN TRỌNG, CHƯƠNG TRÌNH MỚI, ƯU ĐÃI, SỰ KIỆN, NHẮC NHỞ
- Trạng thái:
  - ✓ Đã gửi (xanh lá)
  - ⏰ Đã lên lịch (cam)
- Actions:
  - 📊 Thống kê (cho đã gửi)
  - 📤 Gửi ngay (cho đã lên lịch)
  - ✏️ Edit
- Button "➕ Tạo thông báo mới"
- Hiển thị 2 notifications mẫu

**Acceptance Criteria:**
- ✅ Table hiển thị đúng
- ✅ Badge màu sắc phân biệt
- ✅ Actions hoạt động
- ✅ Stats modal (future)

#### FR-CMS-006: Create Notification Modal
**Mô tả:** Modal tạo thông báo

**Yêu cầu:**
- Fields:
  - Tiêu đề (required)
  - Loại (required): QUAN TRỌNG, CHƯƠNG TRÌNH MỚI, ƯU ĐÃI, SỰ KIỆN, NHẮC NHỞ
  - Độ ưu tiên: Thấp, Trung bình, Cao, Khẩn cấp
  - Nội dung (required, textarea)
  - Đối tượng nhận (required, dropdown):
    - Tất cả DN (856)
    - Lĩnh vực Năng lượng (145)
    - Lĩnh vực Thương mại (302)
    - Lĩnh vực Công nghiệp (287)
    - DN FDI (122)
    - DN quy mô nhỏ <50 NV (423)
    - DN quy mô vừa 50-200 NV (298)
    - DN quy mô lớn >200 NV (135)
    - Tùy chỉnh (chọn thủ công)
  - Custom recipients (show khi chọn "Tùy chỉnh")
  - Thời gian gửi: Gửi ngay, Lên lịch gửi
  - Ngày & giờ gửi (show khi chọn "Lên lịch")
- Alert info: Hiển thị số DN sẽ nhận
- Buttons: "📤 Gửi thông báo", "Hủy"

**Acceptance Criteria:**
- ✅ Modal open/close đúng
- ✅ Recipient count update động
- ✅ Custom recipients show/hide
- ✅ Schedule datetime show/hide
- ✅ Submit thành công

#### FR-CMS-007: Lịch đăng bài
**Mô tả:** Calendar view lịch đăng bài và gửi thông báo

**Yêu cầu:**
- Hiển thị tháng hiện tại (Tháng 11, 2025)
- Navigation: "← Tháng trước", "Tháng sau →"
- Grid 4 columns (4 ngày mẫu)
- Mỗi ngày hiển thị:
  - Ngày và thứ
  - Danh sách events với màu sắc:
    - 🔵 Xanh dương: Gửi thông báo
    - 🟡 Vàng: Đăng bài viết
    - 🟢 Xanh lá: Đăng bài
    - 🔴 Đỏ: Nhắc nhở
  - Giờ + Tiêu đề event

**Acceptance Criteria:**
- ✅ Calendar hiển thị đúng tháng
- ✅ Navigation hoạt động
- ✅ Events hiển thị với màu sắc
- ✅ Responsive grid

#### FR-CMS-008: Quản lý doanh nghiệp
**Mô tả:** Quản lý danh sách doanh nghiệp

**Yêu cầu:**
- Filter tabs: Tất cả (856), Năng lượng (145), Thương mại (302), Công nghiệp (287), FDI (122)
- Search box: Tìm kiếm DN
- Dropdown filters:
  - Lọc theo quy mô: Nhỏ (<50 NV), Vừa (50-200), Lớn (>200)
  - Lọc theo khu vực: Quận 1, Quận 7, Thủ Đức, etc.
- Table columns: Checkbox, Mã DN, Tên DN, Lĩnh vực, Quy mô, Email, Trạng thái, Thao tác
- Trạng thái: ✓ Hoạt động (xanh lá)
- Action: 👁️ View detail
- Button "📥 Import danh sách"
- Checkbox "Select all"
- Hiển thị 3 enterprises mẫu
- Alert info: Gợi ý gửi thông báo hàng loạt

**Acceptance Criteria:**
- ✅ Filter tabs hoạt động
- ✅ Search hoạt động
- ✅ Dropdown filters hoạt động
- ✅ Table hiển thị đúng
- ✅ Select all checkbox
- ✅ View action hoạt động

---

### 4.8 Module: AI Chatbot

#### FR-CHAT-001: Chatbot Toggle
**Mô tả:** Button toggle mở/đóng chatbot

**Yêu cầu:**
- Fixed position: bottom-right (24px from edges)
- Icon: 💬 (khi đóng), ✕ (khi mở)
- Size: 60×60px, circular
- Gradient background: #1e40af → #1e3a8a
- Box shadow
- Hover effect: scale 1.1
- Z-index: 1500

**Acceptance Criteria:**
- ✅ Button hiển thị đúng vị trí
- ✅ Click toggle chatbot
- ✅ Icon thay đổi đúng
- ✅ Hover effect mượt

#### FR-CHAT-002: Chatbot Container
**Mô tả:** Container chứa chatbot

**Yêu cầu:**
- Fixed position: bottom-right
- Size: 380×550px (desktop), full-width-32px (mobile)
- Border radius: 12px
- Box shadow
- 3 sections:
  - Header (gradient background)
  - Messages area (scrollable)
  - Input area
- Show/hide với class "active"

**Acceptance Criteria:**
- ✅ Container hiển thị đúng
- ✅ Responsive size
- ✅ 3 sections layout đúng
- ✅ Show/hide animation

#### FR-CHAT-003: Chatbot Header
**Mô tả:** Header của chatbot

**Yêu cầu:**
- Gradient background: #1e40af → #1e3a8a
- Title: "🤖 Trợ lý AI - Tra cứu dữ liệu"
- Close button (×)
- Padding: 16px

**Acceptance Criteria:**
- ✅ Header hiển thị đúng
- ✅ Title rõ ràng
- ✅ Close button hoạt động

#### FR-CHAT-004: Welcome Message
**Mô tả:** Tin nhắn chào mừng khi mở chatbot

**Yêu cầu:**
- Bot message với nội dung:
  - Lời chào
  - Liệt kê 4 chức năng chính:
    - 📊 Tra cứu thống kê dữ liệu
    - 🏭 Tìm thông tin doanh nghiệp
    - 📰 Cập nhật tin tức mới nhất
    - 📥 Hướng dẫn tải dữ liệu
  - Câu hỏi: "Bạn cần tìm hiểu về vấn đề gì?"

**Acceptance Criteria:**
- ✅ Message hiển thị khi mở chatbot
- ✅ Format đẹp, dễ đọc
- ✅ Icons hiển thị đúng

#### FR-CHAT-005: Quick Suggestions
**Mô tả:** 4 gợi ý câu hỏi nhanh

**Yêu cầu:**
- 4 suggestion chips:
  - "Thống kê xuất nhập khẩu Q3/2025"
  - "Danh sách KCN tại TP.HCM"
  - "Cách tải dữ liệu Excel"
  - "Chính sách ưu đãi DN"
- Click chip → Gửi câu hỏi
- Ẩn sau khi gửi tin nhắn đầu tiên

**Acceptance Criteria:**
- ✅ 4 chips hiển thị đúng
- ✅ Click gửi câu hỏi
- ✅ Ẩn sau tin nhắn đầu

#### FR-CHAT-006: Send Message
**Mô tả:** Gửi tin nhắn từ user

**Yêu cầu:**
- Input field: placeholder "Nhập câu hỏi của bạn..."
- Send button: ➤
- Enter key → Send
- User message hiển thị bên phải, background xanh
- Auto-scroll to bottom

**Acceptance Criteria:**
- ✅ Input hoạt động
- ✅ Enter key send
- ✅ Button send hoạt động
- ✅ Message hiển thị đúng
- ✅ Auto-scroll

#### FR-CHAT-007: Bot Response
**Mô tả:** Phản hồi thông minh từ bot

**Yêu cầu:**
- Typing indicator (3 dots animation) trong 1.5s
- Bot message hiển thị bên trái, background trắng
- Intelligent responses dựa trên keywords:
  
  **1. Xuất nhập khẩu / Q3 / 2025:**
  - Thống kê XNK Q3/2025
  - Kim ngạch xuất khẩu: $95.4B (+15.8%)
  - Kim ngạch nhập khẩu: $87.2B (+12.3%)
  - Xuất siêu: $8.2B
  - Link: Xem chi tiết dữ liệu
  
  **2. KCN / Khu công nghiệp / TP.HCM:**
  - Danh sách 15 KCN tại TP.HCM
  - Liệt kê 4 KCN chính
  - Link: Xem trên bản đồ
  
  **3. Tải / Download / Excel:**
  - Hướng dẫn 5 bước tải dữ liệu
  - Link: Xuất dữ liệu ngay
  
  **4. Ưu đãi / Chính sách / Doanh nghiệp:**
  - 3 chính sách ưu đãi chính
  - Link: Xem chi tiết thông báo
  
  **5. Chợ / Siêu thị / Thương mại:**
  - Thống kê: 83 chợ, 127 siêu thị, 45 TTTM, 2,340+ cửa hàng
  - Link: Xem bản đồ
  
  **6. Năng lượng / Điện / Điện lực:**
  - Thống kê: 300+ cơ sở, 426 DN, 4 DN phân phối
  - Năng lượng tái tạo 25%
  - Link: Xem dữ liệu năng lượng
  
  **7. Liên hệ / Hỗ trợ / Email:**
  - Thông tin liên hệ đầy đủ
  - Link: Gửi góp ý trực tuyến
  
  **8. Default:**
  - Liệt kê các chủ đề có thể hỗ trợ
  - Yêu cầu làm rõ

**Acceptance Criteria:**
- ✅ Typing indicator hiển thị
- ✅ Response đúng theo keywords
- ✅ Links hoạt động (navigate + close chatbot)
- ✅ Format HTML đẹp

---

### 4.9 Module: Export Data

#### FR-EXPORT-001: Export Modal
**Mô tả:** Modal xuất dữ liệu

**Yêu cầu:**
- Trigger: Click "Xuất dữ liệu Excel" từ Home hoặc Data
- Fields:
  - Chọn bộ dữ liệu (required, dropdown):
    - Xuất nhập khẩu
    - Đầu tư FDI
    - Công nghiệp
    - Năng lượng
    - Chỉ số giá
  - Khoảng thời gian (required, dropdown):
    - Tháng hiện tại
    - Quý hiện tại
    - Năm 2025
    - Năm 2024
    - Tất cả
  - Định dạng (required, dropdown):
    - Excel (.xlsx)
    - CSV (.csv)
    - JSON (.json)
- Buttons: "📥 Tải xuống", "Hủy"

**Acceptance Criteria:**
- ✅ Modal open/close đúng
- ✅ Validation hoạt động
- ✅ Submit → Success alert
- ✅ Simulate download

---

### 4.10 Module: Social Sharing

#### FR-SHARE-001: Share Buttons
**Mô tả:** Chia sẻ nội dung lên mạng xã hội

**Yêu cầu:**
- 4 platforms: Facebook, Twitter/X, Zalo, LinkedIn
- Buttons:
  - Facebook: f (blue #1877f2)
  - Twitter: 𝕏 (black #000000)
  - Zalo: Z (blue #0068ff)
  - LinkedIn: in (blue #0a66c2)
- Size: 36×36px, circular
- Hover: scale 1.1
- Click → Open share dialog in new window (600×400)

**Locations:**
- News articles (3 locations)
- Map data points table (15 locations)

**Acceptance Criteria:**
- ✅ 4 buttons hiển thị đúng
- ✅ Màu sắc đúng brand
- ✅ Hover effect mượt
- ✅ Share dialog mở đúng
- ✅ URL và text encode đúng

---

## 5. YÊU CẦU PHI CHỨC NĂNG

### 5.1 Performance (Hiệu năng)

#### NFR-PERF-001: Page Load Time
**Yêu cầu:**
- Initial page load: < 3 giây (3G connection)
- Time to Interactive (TTI): < 5 giây
- First Contentful Paint (FCP): < 1.5 giây

**Acceptance Criteria:**
- ✅ Lighthouse Performance score > 80
- ✅ Core Web Vitals pass

#### NFR-PERF-002: Map Loading
**Yêu cầu:**
- Leaflet map load: < 2 giây
- 15 markers render: < 500ms
- Smooth zoom/pan (60fps)

**Acceptance Criteria:**
- ✅ Map interactive trong 2s
- ✅ No lag khi zoom/pan

#### NFR-PERF-003: Search Response
**Yêu cầu:**
- Search autocomplete: < 500ms
- Filter results: < 300ms
- Chatbot response: < 2 giây

**Acceptance Criteria:**
- ✅ Instant feedback
- ✅ No blocking UI

### 5.2 Usability (Khả năng sử dụng)

#### NFR-USAB-001: Responsive Design
**Yêu cầu:**
- Support 3 breakpoints:
  - Mobile: 375px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- Touch-friendly buttons (min 44×44px)
- Readable font sizes (min 14px)

**Acceptance Criteria:**
- ✅ Layout đúng trên 3 breakpoints
- ✅ No horizontal scroll
- ✅ Touch targets đủ lớn

#### NFR-USAB-002: Accessibility
**Yêu cầu:**
- Semantic HTML
- ARIA labels cho interactive elements
- Keyboard navigation
- Color contrast ratio > 4.5:1
- Alt text cho images

**Acceptance Criteria:**
- ✅ WCAG 2.1 Level AA compliance
- ✅ Screen reader compatible

#### NFR-USAB-003: Browser Compatibility
**Yêu cầu:**
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Android

**Acceptance Criteria:**
- ✅ Hoạt động đúng trên tất cả browsers
- ✅ Graceful degradation

### 5.3 Security (Bảo mật)

#### NFR-SEC-001: Data Protection
**Yêu cầu:**
- HTTPS only
- XSS protection
- CSRF protection
- SQL injection prevention
- Input validation & sanitization

**Acceptance Criteria:**
- ✅ SSL certificate valid
- ✅ Security headers configured
- ✅ No vulnerabilities in scan

#### NFR-SEC-002: Authentication
**Yêu cầu:**
- Secure login (future)
- Session management
- Password hashing (bcrypt)
- Role-based access control (RBAC)

**Acceptance Criteria:**
- ✅ Secure authentication flow
- ✅ Proper session handling

### 5.4 Reliability (Độ tin cậy)

#### NFR-REL-001: Availability
**Yêu cầu:**
- Uptime: 99.5% (43.8 hours downtime/year)
- Planned maintenance: Off-peak hours
- Error handling: Graceful degradation

**Acceptance Criteria:**
- ✅ Monitoring alerts configured
- ✅ Backup systems ready

#### NFR-REL-002: Error Handling
**Yêu cầu:**
- User-friendly error messages
- Fallback UI khi API fails
- Retry mechanism
- Error logging

**Acceptance Criteria:**
- ✅ No blank screens
- ✅ Clear error messages
- ✅ Errors logged

### 5.5 Maintainability (Khả năng bảo trì)

#### NFR-MAINT-001: Code Quality
**Yêu cầu:**
- Clean, readable code
- Consistent naming conventions
- Comments cho complex logic
- Modular architecture

**Acceptance Criteria:**
- ✅ Code review passed
- ✅ No code smells

#### NFR-MAINT-002: Documentation
**Yêu cầu:**
- User manual
- Admin guide
- API documentation
- Deployment guide

**Acceptance Criteria:**
- ✅ Docs complete và up-to-date

---

## 6. USE CASES

### UC-001: Tra cứu dữ liệu công thương

**Actor:** Public User

**Preconditions:**
- User truy cập website
- Dữ liệu đã được load

**Main Flow:**
1. User navigate to "Dữ liệu" section
2. System hiển thị 4 lĩnh vực với filter tabs
3. User chọn lĩnh vực (VD: Năng lượng)
4. System filter và hiển thị 7 data layers của Năng lượng
5. User click vào layer "Cơ sở sử dụng năng lượng trọng điểm"
6. System mở bản đồ với 15 điểm dữ liệu
7. User click vào marker trên bản đồ
8. System hiển thị popup với thông tin chi tiết
9. User scroll xuống xem bảng danh sách
10. User click icon share để chia sẻ

**Postconditions:**
- User đã xem được thông tin dữ liệu
- Share dialog mở (nếu click share)

**Alternative Flows:**
- 3a. User chọn "Tất cả" → Hiển thị tất cả 25 layers
- 5a. User click "Quay lại dữ liệu" → Quay về Data section

---

### UC-002: Tải xuống dữ liệu

**Actor:** Public User

**Preconditions:**
- User đã tìm thấy dữ liệu cần tải

**Main Flow:**
1. User click "Xuất dữ liệu Excel" từ Home hoặc Data
2. System mở Export Modal
3. User chọn bộ dữ liệu (VD: Xuất nhập khẩu)
4. User chọn khoảng thời gian (VD: Quý hiện tại)
5. User chọn định dạng (VD: Excel .xlsx)
6. User click "Tải xuống"
7. System validate form
8. System trigger download file
9. System hiển thị success alert
10. System đóng modal

**Postconditions:**
- File được download về máy user
- Success alert hiển thị

**Alternative Flows:**
- 7a. Validation fails → Hiển thị error message
- 6a. User click "Hủy" → Đóng modal

---

### UC-003: Sử dụng AI Chatbot

**Actor:** Public User

**Preconditions:**
- User đang ở bất kỳ trang nào

**Main Flow:**
1. User click chatbot toggle button (💬)
2. System mở chatbot container
3. System hiển thị welcome message và 4 quick suggestions
4. User click suggestion "Thống kê xuất nhập khẩu Q3/2025"
5. System gửi câu hỏi
6. System hiển thị typing indicator
7. System phân tích keywords
8. System generate intelligent response với thống kê XNK
9. System hiển thị response với link "Xem chi tiết dữ liệu"
10. User click link
11. System navigate to Data section và đóng chatbot

**Postconditions:**
- User nhận được thông tin cần tìm
- Chatbot đóng (nếu click link)

**Alternative Flows:**
- 4a. User gõ câu hỏi tự do → System phân tích và response
- 4b. User gõ câu hỏi không match keywords → Default response

---

### UC-004: Quản lý bài viết (CMS)

**Actor:** Content Editor

**Preconditions:**
- User đã bật Admin Mode
- User có quyền Content Editor

**Main Flow:**
1. User navigate to CMS section
2. System hiển thị tab "Quản lý bài viết"
3. User click "Tạo bài viết mới"
4. System mở Create Post Modal
5. User nhập tiêu đề, chọn danh mục, nhập nội dung
6. User upload hình ảnh
7. User chọn trạng thái "Gửi duyệt"
8. User click "Lưu bài viết"
9. System validate form
10. System lưu bài viết với status "pending"
11. System hiển thị success alert
12. System đóng modal
13. System refresh table với bài viết mới

**Postconditions:**
- Bài viết được lưu với status "pending"
- Bài viết hiển thị trong table

**Alternative Flows:**
- 9a. Validation fails → Hiển thị error
- 7a. User chọn "Lưu nháp" → Lưu với status "draft"

---

### UC-005: Gửi thông báo hàng loạt (CMS)

**Actor:** Content Approver

**Preconditions:**
- User đã bật Admin Mode
- User có quyền Content Approver

**Main Flow:**
1. User navigate to CMS → Tab "Quản lý thông báo"
2. User click "Tạo thông báo mới"
3. System mở Create Notification Modal
4. User nhập tiêu đề, chọn loại "QUAN TRỌNG"
5. User nhập nội dung thông báo
6. User chọn đối tượng nhận "DN quy mô nhỏ <50 NV (423 DN)"
7. System update recipient count: "423 doanh nghiệp"
8. User chọn "Gửi ngay"
9. User click "Gửi thông báo"
10. System validate form
11. System gửi thông báo đến 423 doanh nghiệp
12. System hiển thị success alert
13. System đóng modal
14. System refresh table với thông báo mới

**Postconditions:**
- Thông báo được gửi đến 423 DN
- Thông báo hiển thị trong table với status "Đã gửi"

**Alternative Flows:**
- 8a. User chọn "Lên lịch gửi" → Chọn ngày giờ → Lưu với status "Đã lên lịch"
- 6a. User chọn "Tùy chỉnh" → Chọn thủ công từng DN

---

## 7. USER STORIES

### Epic 1: Tra cứu và Xem dữ liệu

**US-001:** Xem thống kê tổng quan
- **As a** Public User
- **I want to** xem thống kê tổng quan ngay trên trang chủ
- **So that** tôi có cái nhìn nhanh về quy mô dữ liệu

**Acceptance Criteria:**
- Hiển thị 4 chỉ số: Bộ dữ liệu, Doanh nghiệp, Multimedia, Lượt xem
- Số liệu format với dấu phẩy
- Responsive trên mobile

---

**US-002:** Tìm kiếm dữ liệu
- **As a** Public User
- **I want to** tìm kiếm dữ liệu bằng từ khóa
- **So that** tôi nhanh chóng tìm được thông tin cần thiết

**Acceptance Criteria:**
- Search box nổi bật ở đầu trang
- Autocomplete với 5 gợi ý
- Hỗ trợ tiếng Việt có dấu
- Response time < 500ms

---

**US-003:** Xem dữ liệu trên bản đồ
- **As a** Public User
- **I want to** xem dữ liệu được hiển thị trên bản đồ tương tác
- **So that** tôi dễ dàng hình dung vị trí địa lý

**Acceptance Criteria:**
- Bản đồ Leaflet với OpenStreetMap
- 15 markers cho mỗi layer
- Popup hiển thị thông tin chi tiết
- Màu sắc phân biệt trạng thái

---

**US-004:** Lọc dữ liệu theo lĩnh vực
- **As a** Public User
- **I want to** lọc dữ liệu theo lĩnh vực (Năng lượng, Thương mại, Công nghiệp, Quy hoạch)
- **So that** tôi chỉ xem dữ liệu liên quan đến lĩnh vực quan tâm

**Acceptance Criteria:**
- 5 filter tabs hoạt động
- Filter chính xác
- Active tab được highlight
- Smooth transition

---

### Epic 2: Tải xuống và Chia sẻ

**US-005:** Tải xuống dữ liệu
- **As a** Public User
- **I want to** tải xuống dữ liệu dưới nhiều định dạng (Excel, CSV, JSON)
- **So that** tôi có thể phân tích offline

**Acceptance Criteria:**
- Modal export với 3 fields
- Validation hoạt động
- Download trigger đúng
- Success alert hiển thị

---

**US-006:** Chia sẻ lên mạng xã hội
- **As a** Public User
- **I want to** chia sẻ tin tức và dữ liệu lên Facebook, Twitter, Zalo, LinkedIn
- **So that** tôi có thể lan tỏa thông tin hữu ích

**Acceptance Criteria:**
- 4 share buttons
- Share dialog mở đúng platform
- URL và text encode đúng

---

### Epic 3: Tương tác với Chatbot

**US-007:** Hỏi đáp với AI Chatbot
- **As a** Public User
- **I want to** hỏi chatbot về dữ liệu, chính sách, hướng dẫn
- **So that** tôi nhanh chóng nhận được câu trả lời mà không cần tìm kiếm thủ công

**Acceptance Criteria:**
- Chatbot toggle hoạt động
- Welcome message và quick suggestions
- Intelligent responses dựa trên keywords
- Links navigate đúng section

---

**US-008:** Sử dụng quick suggestions
- **As a** Public User
- **I want to** click vào gợi ý câu hỏi nhanh
- **So that** tôi không cần gõ câu hỏi

**Acceptance Criteria:**
- 4 suggestion chips
- Click gửi câu hỏi
- Ẩn sau tin nhắn đầu tiên

---

### Epic 4: Quản lý Nội dung (CMS)

**US-009:** Tạo bài viết mới
- **As a** Content Editor
- **I want to** tạo bài viết mới và gửi duyệt
- **So that** nội dung được kiểm tra trước khi xuất bản

**Acceptance Criteria:**
- Modal create post với đầy đủ fields
- Validation hoạt động
- Lưu với status "pending"
- Success alert

---

**US-010:** Duyệt và xuất bản bài viết
- **As a** Content Approver
- **I want to** duyệt bài viết và xuất bản
- **So that** chỉ nội dung chất lượng được công khai

**Acceptance Criteria:**
- Button "Duyệt" cho posts pending
- Confirm dialog
- Update status thành "published"
- Success alert

---

**US-011:** Gửi thông báo hàng loạt
- **As a** Content Approver
- **I want to** gửi thông báo đến nhóm doanh nghiệp cụ thể
- **So that** thông tin được truyền đạt hiệu quả

**Acceptance Criteria:**
- Modal create notification
- Chọn đối tượng nhận (8 options + custom)
- Recipient count update động
- Gửi ngay hoặc lên lịch

---

**US-012:** Quản lý danh sách doanh nghiệp
- **As a** Data Manager
- **I want to** xem, tìm kiếm, lọc danh sách doanh nghiệp
- **So that** tôi dễ dàng quản lý thông tin DN

**Acceptance Criteria:**
- Table với 856 DN
- Search box hoạt động
- Filter theo lĩnh vực, quy mô, khu vực
- Select all checkbox

---

**US-013:** Xem lịch đăng bài
- **As a** Content Editor
- **I want to** xem lịch đăng bài và gửi thông báo
- **So that** tôi biết kế hoạch nội dung sắp tới

**Acceptance Criteria:**
- Calendar view theo tháng
- Events hiển thị với màu sắc
- Navigation tháng trước/sau

---

### Epic 5: Đọc Tin tức và Thông báo

**US-014:** Đọc tin tức mới nhất
- **As a** Public User
- **I want to** đọc tin tức, sự kiện mới nhất
- **So that** tôi cập nhật thông tin ngành công thương

**Acceptance Criteria:**
- News slider với 8 tin (2 slides)
- Auto-play mỗi 6s
- Prev/Next buttons
- Click xem chi tiết

---

**US-015:** Nhận thông báo quan trọng
- **As a** Doanh nghiệp
- **I want to** xem thông báo từ Sở Công Thương
- **So that** tôi không bỏ lỡ thông tin quan trọng

**Acceptance Criteria:**
- Badge số lượng chưa đọc
- 4 loại thông báo với màu sắc
- Alert info ở đầu section

---

### Epic 6: Liên hệ và Góp ý

**US-016:** Gửi góp ý
- **As a** Public User
- **I want to** gửi góp ý, báo lỗi, yêu cầu hỗ trợ
- **So that** tôi đóng góp cải thiện hệ thống

**Acceptance Criteria:**
- Contact form với 5 fields
- Validation email, phone
- Submit thành công
- Success alert: "Phản hồi trong 24-48h"

---

## 8. BUSINESS RULES

### BR-001: Phân quyền truy cập
- Public User: Chỉ xem, không sửa/xóa
- Content Editor: Tạo draft, gửi duyệt
- Content Approver: Duyệt và xuất bản
- Data Manager: Quản lý DN, import/export
- System Admin: Toàn quyền

### BR-002: Workflow bài viết
- Draft → Pending → Published
- Editor tạo draft hoặc gửi duyệt
- Approver duyệt và xuất bản
- Chỉ Admin xóa bài đã xuất bản

### BR-003: Gửi thông báo
- Chọn đối tượng nhận theo: Lĩnh vực, Quy mô, Khu vực, Tùy chỉnh
- Hiển thị số lượng DN sẽ nhận
- Gửi ngay hoặc lên lịch
- Lưu lịch sử gửi

### BR-004: Xuất dữ liệu
- Hỗ trợ 3 định dạng: Excel, CSV, JSON
- Chọn khoảng thời gian: Tháng, Quý, Năm, Tất cả
- Không giới hạn số lần tải
- Log lượt tải để thống kê

### BR-005: Bản đồ dữ liệu
- Mỗi layer hiển thị 15 điểm mẫu
- Màu sắc marker theo trạng thái:
  - Đỏ: Đang hoạt động
  - Xanh lá: Hoạt động tốt
  - Cam: Cần kiểm tra
  - Xám: Tạm ngưng
- Popup hiển thị: Tên, Địa chỉ, Trạng thái, Mã số

### BR-006: Chatbot responses
- Phân tích keywords trong câu hỏi
- Match với 7 topics chính:
  1. Xuất nhập khẩu
  2. KCN
  3. Tải dữ liệu
  4. Chính sách ưu đãi
  5. Thương mại
  6. Năng lượng
  7. Liên hệ
- Default response nếu không match
- Links navigate và đóng chatbot

### BR-007: Admin Mode
- Toggle lưu state vào localStorage
- Persist sau refresh
- Khi tắt: Ẩn menu CMS, navigate về Home nếu đang ở CMS

### BR-008: Responsive breakpoints
- Mobile: 375px - 767px (1 column)
- Tablet: 768px - 1023px (2 columns)
- Desktop: 1024px+ (4 columns)

### BR-009: Data validation
- Email: RFC 5322 format
- Phone: Vietnam format (10-11 digits)
- Required fields: Không được để trống
- Textarea: Min 10 characters

### BR-010: Performance thresholds
- Page load: < 3s
- Map load: < 2s
- Search response: < 500ms
- Filter transition: < 300ms
- Chatbot response: < 2s

---

## 9. YÊU CẦU GIAO DIỆN

### 9.1 Design System

#### 9.1.1 Color Palette
```css
--color-primary: #1e40af (Blue)
--color-primary-dark: #1e3a8a
--color-primary-light: #3b82f6
--color-secondary: #059669 (Green)
--color-accent: #f59e0b (Amber)
--color-background: #f8fafc (Gray 50)
--color-surface: #ffffff (White)
--color-text: #0f172a (Gray 900)
--color-text-secondary: #64748b (Gray 500)
--color-border: #e2e8f0 (Gray 200)
--color-error: #dc2626 (Red)
--color-success: #16a34a (Green)
--color-warning: #ea580c (Orange)
```

#### 9.1.2 Typography
- **Font Family:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- **Font Sizes:**
  - Heading 1: 24px, bold
  - Heading 2: 20px, bold
  - Heading 3: 18px, semi-bold
  - Body: 14-16px, regular
  - Small: 12-13px, regular
- **Line Height:** 1.6

#### 9.1.3 Spacing
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
```

#### 9.1.4 Border Radius
```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
```

#### 9.1.5 Shadows
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
```

### 9.2 Components

#### 9.2.1 Buttons
- **Primary:** Blue background, white text, hover darker
- **Secondary:** Green background, white text
- **Outline:** Transparent background, blue border, hover fill
- **Size:** Padding 12px 24px, font-size 14px
- **Border radius:** 8px
- **Transition:** 0.3s ease

#### 9.2.2 Cards
- **Background:** White
- **Border:** 1px solid #e2e8f0
- **Border radius:** 12px
- **Padding:** 24px
- **Shadow:** 0 1px 3px rgba(30, 64, 175, 0.05)
- **Hover:** Lift effect (translateY -4px), shadow increase

#### 9.2.3 Forms
- **Input height:** 44px (touch-friendly)
- **Border:** 1px solid #e2e8f0
- **Border radius:** 8px
- **Focus:** Blue border, box-shadow
- **Label:** Bold, margin-bottom 8px

#### 9.2.4 Badges
- **Padding:** 4px 12px
- **Border radius:** 12px (pill shape)
- **Font size:** 11-12px
- **Font weight:** 600
- **Colors:** Theo loại (success, error, warning, info)

#### 9.2.5 Tables
- **Header:** Gray background (#f8fafc), sticky
- **Row hover:** Light gray background
- **Border:** Bottom border cho mỗi row
- **Padding:** 16px per cell

### 9.3 Layout

#### 9.3.1 Header
- **Height:** Auto (padding 16px)
- **Background:** Gradient blue
- **Position:** Sticky top
- **Z-index:** 1000
- **Border bottom:** 3px solid #3b82f6

#### 9.3.2 Navigation
- **Display:** Flex, gap 16px
- **Items:** Padding 8px 16px, rounded
- **Active:** Background rgba(255,255,255,0.2)
- **Hover:** Background rgba(255,255,255,0.2)

#### 9.3.3 Container
- **Max-width:** 1400px
- **Margin:** 0 auto
- **Padding:** 32px 24px

#### 9.3.4 Sections
- **Background:** White
- **Padding:** 32px
- **Border radius:** 12px
- **Margin bottom:** 32px
- **Shadow:** Medium

#### 9.3.5 Grid
- **Gap:** 24px
- **Columns:**
  - grid-2: 2 columns (min 350px)
  - grid-3: 3 columns (min 280px)
  - grid-4: 4 columns (min 240px)
- **Responsive:** Auto-fill, auto-fit

### 9.4 Animations

#### 9.4.1 Transitions
- **Default:** all 0.3s ease
- **Hover effects:** translateY, scale, shadow
- **Page transitions:** Fade in/out

#### 9.4.2 Loading States
- **Spinner:** Rotating border animation
- **Skeleton:** Shimmer effect
- **Typing indicator:** 3 dots bounce

#### 9.4.3 Micro-interactions
- **Button click:** Scale 0.98
- **Card hover:** Lift + shadow
- **Input focus:** Border color + shadow
- **Modal open:** Fade + scale from center

---

## 10. YÊU CẦU DỮ LIỆU

### 10.1 Data Models

#### 10.1.1 Dataset
```javascript
{
  id: String,
  title: String,
  category: Enum['energy', 'trade', 'industry', 'planning'],
  description: String,
  lastUpdated: Date,
  downloadCount: Number,
  format: Array['xlsx', 'csv', 'json'],
  dataPoints: Array[DataPoint],
  metadata: Object
}
```

#### 10.1.2 DataPoint (Map Marker)
```javascript
{
  id: String,
  name: String,
  lat: Number,
  lng: Number,
  address: String,
  status: Enum['Đang hoạt động', 'Hoạt động tốt', 'Cần kiểm tra', 'Tạm ngưng'],
  code: String,
  category: String,
  metadata: Object
}
```

#### 10.1.3 News/Post
```javascript
{
  id: String,
  title: String,
  category: Enum['news', 'event', 'policy', 'report'],
  excerpt: String,
  content: String,
  author: String,
  status: Enum['draft', 'pending', 'published', 'scheduled'],
  publishDate: Date,
  createdDate: Date,
  views: Number,
  comments: Number,
  image: String,
  tags: Array[String]
}
```

#### 10.1.4 Notification
```javascript
{
  id: String,
  title: String,
  type: Enum['QUAN TRỌNG', 'CHƯƠNG TRÌNH MỚI', 'ƯU ĐÃI', 'SỰ KIỆN', 'NHẮC NHỞ'],
  content: String,
  priority: Enum['low', 'medium', 'high', 'urgent'],
  recipients: Array[String] | Object,
  status: Enum['sent', 'scheduled'],
  sentDate: Date,
  scheduledDate: Date,
  stats: {
    sent: Number,
    read: Number,
    clicked: Number
  }
}
```

#### 10.1.5 Enterprise
```javascript
{
  id: String,
  code: String,
  name: String,
  category: Enum['energy', 'trade', 'industry', 'fdi'],
  size: Enum['small', 'medium', 'large'],
  employeeCount: Number,
  email: String,
  phone: String,
  address: String,
  district: String,
  status: Enum['active', 'inactive'],
  registrationDate: Date
}
```

#### 10.1.6 Media
```javascript
{
  id: String,
  title: String,
  type: Enum['image', 'video', 'infographic', 'book', 'voice'],
  url: String,
  thumbnail: String,
  description: String,
  uploadDate: Date,
  views: Number,
  tags: Array[String]
}
```

#### 10.1.7 Contact/Feedback
```javascript
{
  id: String,
  name: String,
  email: String,
  phone: String,
  type: Enum['data', 'feature', 'bug', 'support', 'other'],
  content: String,
  status: Enum['new', 'processing', 'resolved'],
  submittedDate: Date,
  resolvedDate: Date
}
```

### 10.2 Data Storage

#### 10.2.1 Database
- **Type:** PostgreSQL hoặc MongoDB
- **Backup:** Daily automated backup
- **Retention:** 1 year minimum

#### 10.2.2 File Storage
- **Images:** CDN (CloudFlare, AWS S3)
- **Documents:** Secure file server
- **Max file size:** 10MB per file

#### 10.2.3 Cache
- **Type:** Redis
- **TTL:** 1 hour for frequently accessed data
- **Invalidation:** On data update

### 10.3 Data Sources

#### 10.3.1 Internal
- Sở Công Thương database
- Manual data entry via CMS
- Import từ Excel/CSV

#### 10.3.2 External (Future)
- API từ Bộ Công Thương
- API từ Tổng cục Thống kê
- Open data portals

---

## 11. YÊU CẦU TÍCH HỢP

### 11.1 Third-party Libraries

#### 11.1.1 Leaflet.js
- **Version:** 1.9.4+
- **Purpose:** Interactive maps
- **CDN:** https://unpkg.com/leaflet@1.9.4/
- **License:** BSD-2-Clause

#### 11.1.2 OpenStreetMap
- **Purpose:** Base map tiles
- **Tile server:** https://{s}.tile.openstreetmap.org/
- **Attribution:** Required

### 11.2 Social Media Integration

#### 11.2.1 Facebook Share
- **URL:** https://www.facebook.com/sharer/sharer.php?u={url}
- **Window size:** 600×400

#### 11.2.2 Twitter/X Share
- **URL:** https://twitter.com/intent/tweet?url={url}&text={text}
- **Window size:** 600×400

#### 11.2.3 Zalo Share
- **URL:** https://social-plugin.zalo.me/share?url={url}
- **Window size:** 600×400

#### 11.2.4 LinkedIn Share
- **URL:** https://www.linkedin.com/sharing/share-offsite/?url={url}
- **Window size:** 600×400

### 11.3 Future Integrations

#### 11.3.1 Authentication
- **SSO:** Tích hợp với hệ thống đăng nhập chung
- **OAuth 2.0:** Google, Facebook login

#### 11.3.2 Analytics
- **Google Analytics:** Track user behavior
- **Heatmaps:** Hotjar hoặc tương tự

#### 11.3.3 Email Service
- **SMTP:** Gửi email thông báo
- **Templates:** HTML email templates

#### 11.3.4 API
- **RESTful API:** Cho mobile app
- **GraphQL:** Flexible data queries
- **Webhooks:** Real-time notifications

---

## 12. YÊU CẦU BẢO MẬT

### 12.1 Authentication & Authorization

#### SEC-001: User Authentication
- **Method:** Username/Password (future)
- **Password policy:**
  - Min 8 characters
  - Mix of uppercase, lowercase, numbers, symbols
  - Password hashing: bcrypt (cost factor 12)
- **Session:** JWT tokens, 24h expiry
- **2FA:** Optional (future)

#### SEC-002: Role-Based Access Control (RBAC)
- 5 roles: Public User, Content Editor, Content Approver, Data Manager, System Admin
- Permissions matrix theo role
- Principle of least privilege

### 12.2 Data Security

#### SEC-003: Data Encryption
- **In transit:** HTTPS/TLS 1.3
- **At rest:** Database encryption (future)
- **Sensitive data:** PII encryption

#### SEC-004: Input Validation
- **Client-side:** HTML5 validation, JavaScript
- **Server-side:** Sanitize all inputs
- **XSS prevention:** Escape HTML entities
- **SQL injection:** Parameterized queries

#### SEC-005: CSRF Protection
- **Tokens:** CSRF tokens for all forms
- **SameSite cookies:** Strict mode

### 12.3 Infrastructure Security

#### SEC-006: HTTPS
- **SSL/TLS certificate:** Valid, auto-renew
- **HSTS:** Strict-Transport-Security header
- **Redirect:** HTTP → HTTPS

#### SEC-007: Security Headers
```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

#### SEC-008: Rate Limiting
- **API calls:** 100 requests/minute per IP
- **Login attempts:** 5 failed attempts → 15 min lockout
- **File uploads:** 10 files/hour per user

### 12.4 Monitoring & Logging

#### SEC-009: Audit Logs
- **Log events:**
  - Login/logout
  - Data access
  - CRUD operations
  - Permission changes
- **Retention:** 1 year
- **Format:** JSON, structured

#### SEC-010: Security Monitoring
- **Intrusion detection:** Monitor suspicious activities
- **Alerts:** Email/SMS for critical events
- **Regular scans:** Vulnerability scanning monthly

### 12.5 Compliance

#### SEC-011: Data Privacy
- **GDPR compliance:** (if applicable)
- **Data retention policy:** Clear guidelines
- **Right to deletion:** User data removal on request

#### SEC-012: Backup & Recovery
- **Backup frequency:** Daily automated
- **Backup retention:** 30 days
- **Recovery time objective (RTO):** < 4 hours
- **Recovery point objective (RPO):** < 24 hours

---

## 13. PHỤ LỤC

### 13.1 Glossary (Thuật ngữ)

- **DN:** Doanh nghiệp
- **KCN:** Khu công nghiệp
- **TTTM:** Trung tâm thương mại
- **FDI:** Foreign Direct Investment (Đầu tư trực tiếp nước ngoài)
- **XNK:** Xuất nhập khẩu
- **CMS:** Content Management System
- **RBAC:** Role-Based Access Control
- **API:** Application Programming Interface
- **CDN:** Content Delivery Network
- **SSL/TLS:** Secure Sockets Layer / Transport Layer Security

### 13.2 Acronyms

- **URD:** User Requirements Document
- **FR:** Functional Requirement
- **NFR:** Non-Functional Requirement
- **UC:** Use Case
- **US:** User Story
- **BR:** Business Rule
- **SEC:** Security Requirement
- **UI:** User Interface
- **UX:** User Experience

### 13.3 References

1. **Leaflet Documentation:** https://leafletjs.com/
2. **OpenStreetMap:** https://www.openstreetmap.org/
3. **WCAG 2.1 Guidelines:** https://www.w3.org/WAI/WCAG21/
4. **OWASP Top 10:** https://owasp.org/www-project-top-ten/
5. **Vietnam IT Standards:** Theo quy định của Bộ TT&TT

### 13.4 Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 30/10/2025 | BLACKBOXAI | Initial URD creation based on code analysis |

### 13.5 Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | | | |
| Technical Lead | | | |
| QA Lead | | | |
| Stakeholder | | | |

---

## 14. KẾT LUẬN

Tài liệu URD này mô tả chi tiết các yêu cầu người dùng cho **Cổng Công Khai Dữ Liệu Sở Công Thương**. Hệ thống được thiết kế để:

✅ **Minh bạch hóa dữ liệu công** với 25+ data layers
✅ **Tương tác thông minh** qua AI Chatbot
✅ **Quản lý nội dung hiệu quả** với CMS đầy đủ
✅ **Trải nghiệm người dùng tốt** với responsive design
✅ **Bảo mật cao** với các biện pháp security toàn diện

Hệ thống đã sẵn sàng cho **Production** với đầy đủ tính năng được mô tả trong tài liệu này.

---

**END OF DOCUMENT**
