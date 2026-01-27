/**
 * Hệ thống Tooltip Hướng dẫn Sử dụng
 * Tích hợp vào Cổng Dữ Liệu Công Thương
 */

// Tooltip Data - Định nghĩa tất cả các tooltip
const TOOLTIPS_DATA = [
    // Navigation (7 tooltips)
    {
        id: 'nav-home',
        target: '[data-tooltip="nav-home"]',
        title: '🏠 Trang chủ',
        content: `
            <p><strong>Chức năng:</strong> Quay về trang chủ của cổng thông tin.</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Click vào nút "Trang chủ" để xem tổng quan</li>
                <li>Hiển thị tin tức mới nhất, dữ liệu nổi bật</li>
                <li>Truy cập nhanh các chức năng chính</li>
            </ul>
        `,
        position: 'bottom',
        category: 'navigation'
    },
    {
        id: 'nav-data',
        target: '[data-tooltip="nav-data"]',
        title: '📊 Dữ liệu',
        content: `
            <p><strong>Chức năng:</strong> Truy cập kho dữ liệu công thương.</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Xem dữ liệu theo 4 lĩnh vực: Năng lượng, Thương mại, Công nghiệp, Quy hoạch</li>
                <li>Lọc dữ liệu theo danh mục</li>
                <li>Xem dữ liệu trên bản đồ tương tác</li>
                <li>Tải xuống dữ liệu định dạng Excel, CSV, JSON</li>
            </ul>
            <p style="margin-top: 12px;">
                <button onclick="navigateToSection('data')" style="padding: 8px 16px; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    🔗 Đi đến trang Dữ liệu
                </button>
            </p>
        `,
        position: 'bottom',
        category: 'navigation',
        navigateTo: 'data'
    },
    {
        id: 'nav-multimedia',
        target: '[data-tooltip="nav-multimedia"]',
        title: '🎬 Multimedia',
        content: `
            <p><strong>Chức năng:</strong> Thư viện đa phương tiện.</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Xem video, hình ảnh, infographic</li>
                <li>Tải tài liệu, sách điện tử</li>
                <li>Nghe podcast về chính sách</li>
                <li>Lọc theo loại media</li>
            </ul>
            <p style="margin-top: 12px;">
                <button onclick="navigateToSection('multimedia')" style="padding: 8px 16px; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    🔗 Đi đến Multimedia
                </button>
            </p>
        `,
        position: 'bottom',
        category: 'navigation',
        navigateTo: 'multimedia'
    },
    {
        id: 'nav-news',
        target: '[data-tooltip="nav-news"]',
        title: '📰 Tin tức',
        content: `
            <p><strong>Chức năng:</strong> Tin tức và sự kiện mới nhất.</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Đọc tin tức cập nhật hàng ngày</li>
                <li>Xem thông tin sự kiện</li>
                <li>Chia sẻ bài viết lên mạng xã hội</li>
                <li>Đăng bài viết mới (nếu có quyền)</li>
            </ul>
            <p style="margin-top: 12px;">
                <button onclick="navigateToSection('news')" style="padding: 8px 16px; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    🔗 Đi đến Tin tức
                </button>
            </p>
        `,
        position: 'bottom',
        category: 'navigation',
        navigateTo: 'news'
    },
    {
        id: 'nav-notifications',
        target: '[data-tooltip="nav-notifications"]',
        title: '🔔 Thông báo',
        content: `
            <p><strong>Chức năng:</strong> Thông báo đến doanh nghiệp.</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Xem thông báo quan trọng</li>
                <li>Nhận thông tin chương trình mới</li>
                <li>Cập nhật chính sách ưu đãi</li>
                <li>Badge đỏ hiển thị số thông báo chưa đọc</li>
            </ul>
            <p style="margin-top: 12px;">
                <button onclick="navigateToSection('notifications')" style="padding: 8px 16px; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    🔗 Đi đến Thông báo
                </button>
            </p>
        `,
        position: 'bottom',
        category: 'navigation',
        navigateTo: 'notifications'
    },
    {
        id: 'nav-contact',
        target: '[data-tooltip="nav-contact"]',
        title: '✉️ Liên hệ',
        content: `
            <p><strong>Chức năng:</strong> Gửi góp ý và liên hệ.</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Điền form góp ý trực tuyến</li>
                <li>Xem thông tin liên hệ</li>
                <li>Gửi yêu cầu hỗ trợ</li>
                <li>Phản hồi trong 24-48 giờ</li>
            </ul>
            <p style="margin-top: 12px;">
                <button onclick="navigateToSection('contact')" style="padding: 8px 16px; background: #1e40af; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">
                    🔗 Đi đến Liên hệ
                </button>
            </p>
        `,
        position: 'bottom',
        category: 'navigation',
        navigateTo: 'contact'
    },
    {
        id: 'logo',
        target: '[data-tooltip="logo"]',
        title: '🏢 Logo & Tên Cổng',
        content: `
            <p><strong>Chức năng:</strong> Nhận diện thương hiệu.</p>
            <p><strong>Thông tin:</strong></p>
            <ul>
                <li>Tên: Công Khai Dữ Liệu Sở Công Thương</li>
                <li>Click logo để quay về trang chủ</li>
                <li>Cổng thông tin chính thức và minh bạch</li>
            </ul>
        `,
        position: 'bottom',
        category: 'navigation'
    },

    // Stats Banner (4 tooltips)
    {
        id: 'stat-datasets',
        target: '[data-tooltip="stat-datasets"]',
        title: '📊 Bộ dữ liệu công khai',
        content: `
            <p><strong>Thống kê:</strong> 1,247 bộ dữ liệu</p>
            <p><strong>Bao gồm:</strong></p>
            <ul>
                <li>Dữ liệu năng lượng (300+ cơ sở)</li>
                <li>Dữ liệu thương mại (chợ, siêu thị, TTTM)</li>
                <li>Dữ liệu công nghiệp (KCN, cụm CN)</li>
                <li>Dữ liệu quy hoạch</li>
            </ul>
            <p><strong>Tip:</strong> Click vào thẻ để xem chi tiết!</p>
        `,
        position: 'bottom',
        category: 'stats'
    },
    {
        id: 'stat-enterprises',
        target: '[data-tooltip="stat-enterprises"]',
        title: '🏢 Doanh nghiệp đăng ký',
        content: `
            <p><strong>Thống kê:</strong> 856 doanh nghiệp</p>
            <p><strong>Phân loại:</strong></p>
            <ul>
                <li>Năng lượng: 145 DN</li>
                <li>Thương mại: 302 DN</li>
                <li>Công nghiệp: 287 DN</li>
                <li>FDI: 122 DN</li>
            </ul>
            <p><strong>Tip:</strong> Dữ liệu được cập nhật liên tục!</p>
        `,
        position: 'bottom',
        category: 'stats'
    },
    {
        id: 'stat-multimedia',
        target: '[data-tooltip="stat-multimedia"]',
        title: '🎬 Tài liệu Multimedia',
        content: `
            <p><strong>Thống kê:</strong> 2,430 tài liệu</p>
            <p><strong>Bao gồm:</strong></p>
            <ul>
                <li>Video hội nghị, sự kiện</li>
                <li>Hình ảnh hoạt động</li>
                <li>Infographic thống kê</li>
                <li>Sách, tài liệu, podcast</li>
            </ul>
        `,
        position: 'bottom',
        category: 'stats'
    },
    {
        id: 'stat-views',
        target: '[data-tooltip="stat-views"]',
        title: '👁️ Lượt xem trang',
        content: `
            <p><strong>Thống kê:</strong> 15,678 lượt xem</p>
            <p><strong>Thông tin:</strong></p>
            <ul>
                <li>Lượt xem tháng này</li>
                <li>Tăng 23% so với tháng trước</li>
                <li>Phản ánh sự quan tâm của cộng đồng</li>
            </ul>
        `,
        position: 'bottom',
        category: 'stats'
    },

    // Search & Quick Access (5 tooltips)
    {
        id: 'search-bar',
        target: '[data-tooltip="search-bar"]',
        title: '🔍 Tìm kiếm toàn cục',
        content: `
            <p><strong>Chức năng:</strong> Tìm kiếm nhanh mọi nội dung.</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Nhập từ khóa: tên dữ liệu, doanh nghiệp, tin tức...</li>
                <li>Kết quả hiển thị ngay khi gõ</li>
                <li>Tìm kiếm thông minh với gợi ý</li>
            </ul>
            <p><strong>Ví dụ:</strong> "xuất nhập khẩu", "KCN", "năng lượng"</p>
        `,
        position: 'bottom',
        category: 'search'
    },
    {
        id: 'quick-data',
        target: '[data-tooltip="quick-data"]',
        title: '📊 Thống kê dữ liệu',
        content: `
            <p><strong>Truy cập nhanh:</strong> Vào trang Dữ liệu</p>
            <p><strong>Nội dung:</strong></p>
            <ul>
                <li>1,247 bộ dữ liệu công khai</li>
                <li>Phân loại theo 4 lĩnh vực</li>
                <li>Xem trên bản đồ</li>
                <li>Tải xuống miễn phí</li>
            </ul>
            <p><strong>Tip:</strong> Click để chuyển đến trang Dữ liệu!</p>
        `,
        position: 'top',
        category: 'quick-access'
    },
    {
        id: 'quick-multimedia',
        target: '[data-tooltip="quick-multimedia"]',
        title: '🎬 Thư viện Multimedia',
        content: `
            <p><strong>Truy cập nhanh:</strong> Vào thư viện Media</p>
            <p><strong>Nội dung:</strong></p>
            <ul>
                <li>2,430 tài liệu đa phương tiện</li>
                <li>Video, hình ảnh, infographic</li>
                <li>Sách điện tử, podcast</li>
                <li>Lọc theo loại media</li>
            </ul>
        `,
        position: 'top',
        category: 'quick-access'
    },
    {
        id: 'quick-export',
        target: '[data-tooltip="quick-export"]',
        title: '📥 Xuất dữ liệu Excel',
        content: `
            <p><strong>Chức năng:</strong> Tải dữ liệu về máy</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Chọn bộ dữ liệu cần tải</li>
                <li>Chọn khoảng thời gian</li>
                <li>Chọn định dạng: Excel, CSV, JSON</li>
                <li>Click "Tải xuống"</li>
            </ul>
            <p><strong>Tip:</strong> Hỗ trợ xuất hàng loạt!</p>
        `,
        position: 'top',
        category: 'quick-access'
    },
    {
        id: 'quick-news',
        target: '[data-tooltip="quick-news"]',
        title: '📰 Tin tức - Sự kiện',
        content: `
            <p><strong>Truy cập nhanh:</strong> Vào trang Tin tức</p>
            <p><strong>Nội dung:</strong></p>
            <ul>
                <li>Tin tức cập nhật hàng ngày</li>
                <li>Sự kiện quan trọng</li>
                <li>Chính sách mới</li>
                <li>Chia sẻ lên mạng xã hội</li>
            </ul>
        `,
        position: 'top',
        category: 'quick-access'
    },

    // Chatbot (1 tooltip)
    {
        id: 'chatbot',
        target: '#chatbotToggle',
        title: '💬 Trợ lý AI',
        content: `
            <p><strong>Chức năng:</strong> Chatbot hỗ trợ 24/7</p>
            <p><strong>Có thể hỏi về:</strong></p>
            <ul>
                <li>📊 Tra cứu thống kê dữ liệu</li>
                <li>🏭 Thông tin doanh nghiệp, KCN</li>
                <li>📥 Hướng dẫn tải dữ liệu</li>
                <li>🎁 Chính sách ưu đãi</li>
                <li>📧 Thông tin liên hệ</li>
            </ul>
            <p><strong>Tip:</strong> Click để mở chatbot và đặt câu hỏi!</p>
        `,
        position: 'left',
        category: 'support'
    },

    // Admin Mode (1 tooltip)
    {
        id: 'admin-toggle',
        target: '#adminModeToggle',
        title: '🔧 Admin Mode',
        content: `
            <p><strong>Chức năng:</strong> Bật chế độ quản trị</p>
            <p><strong>Khi bật:</strong></p>
            <ul>
                <li>Hiển thị menu CMS</li>
                <li>Quản lý bài viết</li>
                <li>Quản lý thông báo</li>
                <li>Quản lý doanh nghiệp</li>
                <li>Lên lịch đăng bài</li>
            </ul>
            <p><strong>Lưu ý:</strong> Chỉ dành cho Admin!</p>
        `,
        position: 'left',
        category: 'admin'
    },

    // DATA SECTION - Filter & Categories (5 tooltips)
    {
        id: 'data-filter-tabs',
        target: '#data-section .filter-tabs',
        title: '🔍 Lọc dữ liệu theo lĩnh vực',
        content: `
            <p><strong>Chức năng:</strong> Lọc dữ liệu nhanh chóng</p>
            <p><strong>Các lĩnh vực:</strong></p>
            <ul>
                <li>⚡ Năng lượng - 300+ cơ sở</li>
                <li>🛒 Thương mại - Chợ, siêu thị, TTTM</li>
                <li>🏭 Công nghiệp - KCN, cụm công nghiệp</li>
                <li>🗺️ Quy hoạch - Lưới điện, chợ, siêu thị</li>
            </ul>
            <p><strong>Tip:</strong> Click tab để lọc dữ liệu theo lĩnh vực!</p>
        `,
        position: 'bottom',
        category: 'data'
    },
    {
        id: 'data-map-view',
        target: '.data-category .card',
        title: '🗺️ Xem dữ liệu trên bản đồ',
        content: `
            <p><strong>Chức năng:</strong> Hiển thị dữ liệu trên bản đồ tương tác</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Click vào bất kỳ thẻ dữ liệu nào</li>
                <li>Bản đồ hiển thị các điểm dữ liệu</li>
                <li>Click marker để xem chi tiết</li>
                <li>Xem danh sách dưới bản đồ</li>
            </ul>
            <p><strong>Tip:</strong> Sử dụng Leaflet map với OpenStreetMap!</p>
        `,
        position: 'top',
        category: 'data'
    },
    {
        id: 'data-table',
        target: '#dataTableBody',
        title: '📋 Bảng dữ liệu chi tiết',
        content: `
            <p><strong>Chức năng:</strong> Xem danh sách dữ liệu dạng bảng</p>
            <p><strong>Thông tin hiển thị:</strong></p>
            <ul>
                <li>Tên bộ dữ liệu</li>
                <li>Lĩnh vực</li>
                <li>Ngày cập nhật</li>
                <li>Lượt tải</li>
                <li>Định dạng file</li>
            </ul>
            <p><strong>Tip:</strong> Click icon 📥 để tải xuống!</p>
        `,
        position: 'top',
        category: 'data'
    },
    {
        id: 'data-download',
        target: '.download-icon',
        title: '📥 Tải xuống dữ liệu',
        content: `
            <p><strong>Chức năng:</strong> Download dữ liệu về máy</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Click icon 📥 trên bảng</li>
                <li>Hoặc click "Xuất dữ liệu Excel"</li>
                <li>Chọn định dạng: XLSX, CSV, JSON</li>
                <li>File tự động tải về</li>
            </ul>
            <p><strong>Tip:</strong> Miễn phí và không giới hạn!</p>
        `,
        position: 'left',
        category: 'data'
    },
    {
        id: 'data-export-modal',
        target: '#exportModal',
        title: '📤 Form xuất dữ liệu',
        content: `
            <p><strong>Chức năng:</strong> Xuất dữ liệu tùy chỉnh</p>
            <p><strong>Các bước:</strong></p>
            <ul>
                <li>1. Chọn bộ dữ liệu</li>
                <li>2. Chọn khoảng thời gian</li>
                <li>3. Chọn định dạng file</li>
                <li>4. Click "Tải xuống"</li>
            </ul>
            <p><strong>Tip:</strong> Có thể xuất nhiều bộ dữ liệu cùng lúc!</p>
        `,
        position: 'top',
        category: 'data'
    },

    // MULTIMEDIA SECTION (3 tooltips)
    {
        id: 'multimedia-filters',
        target: '#multimedia-section .filter-tabs',
        title: '🎬 Lọc Multimedia',
        content: `
            <p><strong>Chức năng:</strong> Lọc theo loại media</p>
            <p><strong>Các loại:</strong></p>
            <ul>
                <li>📷 Hình ảnh - Albums, photos</li>
                <li>🎥 Video - Hội nghị, sự kiện</li>
                <li>📊 Infographic - Biểu đồ, thống kê</li>
                <li>📚 Sách/Tài liệu - PDF, ebooks</li>
                <li>🎙️ Podcast - Audio content</li>
            </ul>
        `,
        position: 'bottom',
        category: 'multimedia'
    },
    {
        id: 'multimedia-grid',
        target: '#mediaGrid',
        title: '🖼️ Thư viện Media',
        content: `
            <p><strong>Chức năng:</strong> Xem và tải media</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Click vào item để xem chi tiết</li>
                <li>Hover để xem preview</li>
                <li>Download hoặc share</li>
                <li>Lọc theo loại media</li>
            </ul>
        `,
        position: 'top',
        category: 'multimedia'
    },
    {
        id: 'multimedia-item',
        target: '.media-item',
        title: '📁 Media Item',
        content: `
            <p><strong>Chức năng:</strong> Xem và tải file media</p>
            <p><strong>Thông tin:</strong></p>
            <ul>
                <li>Icon hiển thị loại file</li>
                <li>Tên file ở dưới</li>
                <li>Click để xem/tải</li>
                <li>Hover để zoom</li>
            </ul>
        `,
        position: 'top',
        category: 'multimedia'
    },

    // NEWS SECTION (4 tooltips)
    {
        id: 'news-slider',
        target: '.news-slider-container',
        title: '📰 Slider Tin tức',
        content: `
            <p><strong>Chức năng:</strong> Xem tin tức mới nhất</p>
            <p><strong>Cách sử dụng:</strong></p>
            <ul>
                <li>Tự động chuyển slide sau 6 giây</li>
                <li>Click nút ‹ › để chuyển thủ công</li>
                <li>Click dot bên dưới để jump</li>
                <li>Hover để tạm dừng auto-play</li>
            </ul>
            <p><strong>Tip:</strong> Mỗi slide có 4 tin tức!</p>
        `,
        position: 'bottom',
        category: 'news'
    },
    {
        id: 'news-card',
        target: '.news-card',
        title: '📄 Thẻ tin tức',
        content: `
            <p><strong>Chức năng:</strong> Xem chi tiết tin tức</p>
            <p><strong>Thông tin:</strong></p>
            <ul>
                <li>Badge: Loại tin (TIN MỚI, SỰ KIỆN...)</li>
                <li>Tiêu đề và tóm tắt</li>
                <li>Ngày đăng và lượt xem</li>
                <li>Click để đọc toàn bộ</li>
            </ul>
        `,
        position: 'top',
        category: 'news'
    },
    {
        id: 'news-share',
        target: '.share-buttons',
        title: '🔗 Chia sẻ bài viết',
        content: `
            <p><strong>Chức năng:</strong> Share lên mạng xã hội</p>
            <p><strong>Nền tảng hỗ trợ:</strong></p>
            <ul>
                <li>📘 Facebook</li>
                <li>🐦 X (Twitter)</li>
                <li>💬 Zalo</li>
                <li>💼 LinkedIn</li>
            </ul>
            <p><strong>Tip:</strong> Click icon để mở popup share!</p>
        `,
        position: 'top',
        category: 'news'
    },
    {
        id: 'news-create',
        target: '#createNewsModal',
        title: '✍️ Đăng bài viết mới',
        content: `
            <p><strong>Chức năng:</strong> Tạo bài viết mới</p>
            <p><strong>Các bước:</strong></p>
            <ul>
                <li>1. Nhập tiêu đề</li>
                <li>2. Chọn danh mục</li>
                <li>3. Viết nội dung</li>
                <li>4. Upload hình ảnh (optional)</li>
                <li>5. Click "Đăng bài"</li>
            </ul>
            <p><strong>Tip:</strong> Bài viết sẽ chờ phê duyệt trước khi xuất bản!</p>
        `,
        position: 'top',
        category: 'news'
    }
];

// Tooltip State
let tooltipState = {
    isActive: false,
    currentIndex: 0,
    viewedTooltips: new Set(),
    isGuidedTour: false
};

// Initialize Tooltip System
function initTooltipSystem() {
    console.log('🎯 Initializing Tooltip System...');
    
    // Load saved state from localStorage
    loadTooltipState();
    
    // Update stats
    updateTooltipStats();
    
    // Add data-tooltip attributes to elements
    addTooltipAttributes();
    
    console.log('✅ Tooltip System Ready!');
}

// Add tooltip attributes to elements
function addTooltipAttributes() {
    // Add to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length >= 6) {
        navItems[0].setAttribute('data-tooltip', 'nav-home');
        navItems[1].setAttribute('data-tooltip', 'nav-data');
        navItems[2].setAttribute('data-tooltip', 'nav-multimedia');
        navItems[3].setAttribute('data-tooltip', 'nav-news');
        navItems[4].setAttribute('data-tooltip', 'nav-notifications');
        navItems[5].setAttribute('data-tooltip', 'nav-contact');
    }
    
    // Add to stats cards
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 4) {
        statCards[0].setAttribute('data-tooltip', 'stat-datasets');
        statCards[1].setAttribute('data-tooltip', 'stat-enterprises');
        statCards[2].setAttribute('data-tooltip', 'stat-multimedia');
        statCards[3].setAttribute('data-tooltip', 'stat-views');
    }
    
    // Add to search
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.setAttribute('data-tooltip', 'search-bar');
    }
    
    // Add to quick access cards
    const quickCards = document.querySelectorAll('#home-section .grid-4 .card');
    if (quickCards.length >= 4) {
        quickCards[0].setAttribute('data-tooltip', 'quick-data');
        quickCards[1].setAttribute('data-tooltip', 'quick-multimedia');
        quickCards[2].setAttribute('data-tooltip', 'quick-export');
        quickCards[3].setAttribute('data-tooltip', 'quick-news');
    }
    
    // Add to logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.setAttribute('data-tooltip', 'logo');
    }
    
    // Add to admin toggle
    const adminToggle = document.querySelector('#adminModeToggle');
    if (adminToggle) {
        adminToggle.parentElement.setAttribute('data-tooltip', 'admin-toggle');
    }
}

// Toggle Tooltip Mode
function toggleTooltipMode() {
    tooltipState.isActive = !tooltipState.isActive;
    
    const toggleBtn = document.getElementById('tooltipToggleBtn');
    const controlPanel = document.getElementById('tooltipControlPanel');
    const overlay = document.getElementById('tooltipOverlay');
    
    if (tooltipState.isActive) {
        toggleBtn.classList.add('active');
        toggleBtn.title = 'Tắt hướng dẫn';
        controlPanel.classList.add('active');
        
        // Show welcome tooltip
        showWelcomeTooltip();
    } else {
        toggleBtn.classList.remove('active');
        toggleBtn.title = 'Bật hướng dẫn sử dụng';
        controlPanel.classList.remove('active');
        overlay.classList.remove('active');
        hideCurrentTooltip();
    }
    
    saveTooltipState();
}

// Show Welcome Tooltip
function showWelcomeTooltip() {
    const tooltipBox = document.getElementById('tooltipBox');
    const tooltipTitle = document.getElementById('tooltipTitleText');
    const tooltipIcon = document.getElementById('tooltipIcon');
    const tooltipContent = document.getElementById('tooltipContent');
    const tooltipProgress = document.getElementById('tooltipProgress');
    
    tooltipIcon.textContent = '👋';
    tooltipTitle.textContent = 'Chào mừng đến với Hướng dẫn!';
    tooltipContent.innerHTML = `
        <p><strong>Hệ thống hướng dẫn sử dụng đã được kích hoạt!</strong></p>
        <p>Bạn có thể:</p>
        <ul>
            <li>🎯 <strong>Bắt đầu Tour:</strong> Xem hướng dẫn từng bước</li>
            <li>💡 <strong>Xem từng mục:</strong> Click vào các phần tử có highlight</li>
            <li>📊 <strong>Theo dõi tiến độ:</strong> Xem panel bên phải</li>
        </ul>
        <p style="margin-top: 12px; padding: 12px; background: #f0f9ff; border-radius: 8px; border-left: 3px solid var(--color-primary);">
            <strong>💡 Gợi ý:</strong> Click "Bắt đầu Tour hướng dẫn" để được dẫn qua tất cả chức năng!
        </p>
    `;
    tooltipProgress.textContent = 'Chào mừng';
    
    // Position at center
    tooltipBox.style.top = '50%';
    tooltipBox.style.left = '50%';
    tooltipBox.style.transform = 'translate(-50%, -50%)';
    tooltipBox.classList.add('active');
    
    // Hide arrow for welcome tooltip
    document.getElementById('tooltipArrow').style.display = 'none';
}

// Start Guided Tour
function startGuidedTour() {
    tooltipState.isGuidedTour = true;
    tooltipState.currentIndex = 0;
    showTooltip(0);
}

// Show Tooltip by Index
function showTooltip(index) {
    if (index < 0 || index >= TOOLTIPS_DATA.length) {
        endGuidedTour();
        return;
    }
    
    const tooltip = TOOLTIPS_DATA[index];
    const targetElement = document.querySelector(tooltip.target);
    
    if (!targetElement) {
        console.warn(`Target not found for tooltip: ${tooltip.id}`);
        nextTooltip();
        return;
    }
    
    tooltipState.currentIndex = index;
    
    // Show overlay
    document.getElementById('tooltipOverlay').classList.add('active');
    
    // Highlight target element
    removeAllHighlights();
    targetElement.classList.add('tooltip-highlight');
    
    // Scroll to element
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Update tooltip content
    document.getElementById('tooltipIcon').textContent = tooltip.title.split(' ')[0];
    document.getElementById('tooltipTitleText').textContent = tooltip.title.substring(tooltip.title.indexOf(' ') + 1);
    document.getElementById('tooltipContent').innerHTML = tooltip.content;
    document.getElementById('tooltipProgress').textContent = `${index + 1}/${TOOLTIPS_DATA.length}`;
    
    // Position tooltip
    positionTooltip(targetElement, tooltip.position);
    
    // Show tooltip
    document.getElementById('tooltipBox').classList.add('active');
    
    // Mark as viewed
    tooltipState.viewedTooltips.add(tooltip.id);
    updateTooltipStats();
    saveTooltipState();
}

// Position Tooltip
function positionTooltip(targetElement, position) {
    const tooltipBox = document.getElementById('tooltipBox');
    const tooltipArrow = document.getElementById('tooltipArrow');
    const rect = targetElement.getBoundingClientRect();
    const tooltipRect = tooltipBox.getBoundingClientRect();
    
    tooltipArrow.style.display = 'block';
    tooltipArrow.className = 'tooltip-arrow ' + position;
    
    let top, left;
    
    switch(position) {
        case 'bottom':
            top = rect.bottom + 20;
            left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
            break;
        case 'top':
            top = rect.top - tooltipRect.height - 20;
            left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
            break;
        case 'left':
            top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
            left = rect.left - tooltipRect.width - 20;
            break;
        case 'right':
            top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
            left = rect.right + 20;
            break;
        default:
            top = rect.bottom + 20;
            left = rect.left;
    }
    
    // Ensure tooltip stays within viewport
    const maxLeft = window.innerWidth - tooltipRect.width - 20;
    const maxTop = window.innerHeight - tooltipRect.height - 20;
    
    left = Math.max(20, Math.min(left, maxLeft));
    top = Math.max(20, Math.min(top, maxTop));
    
    tooltipBox.style.top = top + 'px';
    tooltipBox.style.left = left + 'px';
    tooltipBox.style.transform = 'none';
}

// Next Tooltip
function nextTooltip() {
    const nextIndex = tooltipState.currentIndex + 1;
    if (nextIndex < TOOLTIPS_DATA.length) {
        showTooltip(nextIndex);
    } else {
        endGuidedTour();
    }
}

// Skip Tooltip
function skipTooltip() {
    hideCurrentTooltip();
}

// Hide Current Tooltip
function hideCurrentTooltip() {
    document.getElementById('tooltipBox').classList.remove('active');
    document.getElementById('tooltipOverlay').classList.remove('active');
    removeAllHighlights();
}

// Remove All Highlights
function removeAllHighlights() {
    document.querySelectorAll('.tooltip-highlight').forEach(el => {
        el.classList.remove('tooltip-highlight');
    });
}

// End Guided Tour
function endGuidedTour() {
    tooltipState.isGuidedTour = false;
    hideCurrentTooltip();
    
    // Show completion message
    alert('🎉 Hoàn thành tour hướng dẫn!\n\nBạn đã xem tất cả các chức năng. Bạn có thể bật lại hướng dẫn bất cứ lúc nào bằng nút 💡 ở góc phải màn hình.');
}

// Reset Tooltips
function resetTooltips() {
    if (confirm('Bạn có chắc muốn đặt lại tiến độ hướng dẫn?')) {
        tooltipState.viewedTooltips.clear();
        tooltipState.currentIndex = 0;
        updateTooltipStats();
        saveTooltipState();
        alert('✅ Đã đặt lại tiến độ hướng dẫn!');
    }
}

// Update Tooltip Stats
function updateTooltipStats() {
    const total = TOOLTIPS_DATA.length;
    const viewed = tooltipState.viewedTooltips.size;
    const percent = Math.round((viewed / total) * 100);
    
    document.getElementById('totalTooltips').textContent = total;
    document.getElementById('viewedTooltips').textContent = viewed;
    document.getElementById('progressPercent').textContent = percent + '%';
}

// Save Tooltip State
function saveTooltipState() {
    const state = {
        viewedTooltips: Array.from(tooltipState.viewedTooltips),
        currentIndex: tooltipState.currentIndex
    };
    localStorage.setItem('tooltipState', JSON.stringify(state));
}

// Load Tooltip State
function loadTooltipState() {
    const saved = localStorage.getItem('tooltipState');
    if (saved) {
        try {
            const state = JSON.parse(saved);
            tooltipState.viewedTooltips = new Set(state.viewedTooltips || []);
            tooltipState.currentIndex = state.currentIndex || 0;
        } catch (e) {
            console.error('Error loading tooltip state:', e);
        }
    }
}

// Show Section (override existing function if needed)
function showSection(sectionName, element) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Add active class to clicked nav item
    if (element) {
        element.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    initTooltipSystem();
    
    // Check if should show tooltip on first visit
    const isFirstVisit = !localStorage.getItem('tooltipState');
    if (isFirstVisit) {
        setTimeout(() => {
            const shouldShow = confirm('👋 Chào mừng bạn đến với Cổng Dữ Liệu Công Thương!\n\nBạn có muốn xem hướng dẫn sử dụng các chức năng không?');
            if (shouldShow) {
                toggleTooltipMode();
                setTimeout(() => startGuidedTour(), 500);
            }
        }, 1000);
    }
});

// Navigate to Section (with tooltip support)
function navigateToSection(sectionName) {
    // Close current tooltip
    hideCurrentTooltip();
    
    // Navigate to section
    showSection(sectionName, null);
    
    // If in guided tour, continue after navigation
    if (tooltipState.isGuidedTour) {
        setTimeout(() => {
            nextTooltip();
        }, 800);
    }
}

// Export functions to global scope
window.toggleTooltipMode = toggleTooltipMode;
window.startGuidedTour = startGuidedTour;
window.nextTooltip = nextTooltip;
window.skipTooltip = skipTooltip;
window.hideCurrentTooltip = hideCurrentTooltip;
window.resetTooltips = resetTooltips;
window.showSection = showSection;
window.navigateToSection = navigateToSection;
