// CMS Demo JavaScript - Real CRUD Operations

let editingPostId = null;

// Check server status
async function checkServerStatus() {
    const statusIndicator = document.getElementById('serverStatus');
    const statusText = document.getElementById('serverStatusText');
    
    try {
        const response = await fetch('http://localhost:3001/api/posts');
        if (response.ok) {
            statusIndicator.className = 'status-indicator online';
            statusText.textContent = 'Server đang chạy tại http://localhost:3001';
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        statusIndicator.className = 'status-indicator offline';
        statusText.textContent = 'Server chưa chạy - Chạy: npm start';
    }
}

// Tab switching
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');

    if (tabName === 'posts') loadPosts();
    else if (tabName === 'notifications') loadNotifications();
    else if (tabName === 'enterprises') loadEnterprises();
}

// ==================== POSTS ====================

async function loadPosts() {
    const loading = document.getElementById('postsLoading');
    const container = document.getElementById('postsContainer');
    const empty = document.getElementById('postsEmpty');
    const tbody = document.getElementById('postsTableBody');

    loading.style.display = 'block';
    container.style.display = 'none';
    empty.style.display = 'none';

    try {
        const response = await api.getPosts();
        const posts = response.data;

        loading.style.display = 'none';

        if (posts.length === 0) {
            empty.style.display = 'block';
            return;
        }

        container.style.display = 'block';
        tbody.innerHTML = posts.map(post => `
            <tr>
                <td><strong>${post.title}</strong></td>
                <td><span class="badge" style="background: ${getCategoryColor(post.category)}">${getCategoryName(post.category)}</span></td>
                <td>${post.author || 'Admin'}</td>
                <td>${getStatusBadgeHTML(post.status)}</td>
                <td>${formatDate(post.createdAt)}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="editPost('${post.id}')" style="margin-right: 4px;">✏️</button>
                    ${post.status === 'draft' ? `<button class="btn btn-sm btn-success" onclick="publishPostAction('${post.id}')" style="margin-right: 4px;">📤</button>` : ''}
                    <button class="btn btn-sm btn-danger" onclick="deletePostAction('${post.id}')">🗑️</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        loading.style.display = 'none';
        showAlert('error', 'Lỗi tải dữ liệu: ' + error.message);
    }
}

function openCreatePostModal() {
    editingPostId = null;
    document.getElementById('postModalTitle').textContent = '✍️ Tạo bài viết mới';
    document.getElementById('createPostForm').reset();
    document.getElementById('createPostModal').classList.add('active');
}

async function editPost(postId) {
    try {
        const response = await api.getPost(postId);
        const post = response.data;

        editingPostId = postId;
        document.getElementById('postModalTitle').textContent = '✏️ Sửa bài viết';
        
        const form = document.getElementById('createPostForm');
        form.title.value = post.title;
        form.category.value = post.category;
        form.content.value = post.content;
        form.status.value = post.status;

        document.getElementById('createPostModal').classList.add('active');
    } catch (error) {
        showAlert('error', 'Không thể tải bài viết: ' + error.message);
    }
}

function closePostModal() {
    document.getElementById('createPostModal').classList.remove('active');
    editingPostId = null;
}

async function handleSubmitPost(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const postData = {
        title: formData.get('title'),
        category: formData.get('category'),
        content: formData.get('content'),
        author: formData.get('author') || 'Admin',
        status: formData.get('status')
    };

    try {
        if (editingPostId) {
            await api.updatePost(editingPostId, postData);
            showAlert('success', '✅ Đã cập nhật bài viết!');
        } else {
            await api.createPost(postData);
            showAlert('success', '✅ Đã tạo bài viết mới!');
        }

        closePostModal();
        loadPosts();
    } catch (error) {
        showAlert('error', 'Lỗi: ' + error.message);
    }
}

async function deletePostAction(postId) {
    if (!confirm('Bạn có chắc chắn muốn xóa bài viết này?')) return;

    try {
        await api.deletePost(postId);
        showAlert('success', '✅ Đã xóa bài viết!');
        loadPosts();
    } catch (error) {
        showAlert('error', 'Không thể xóa: ' + error.message);
    }
}

async function publishPostAction(postId) {
    if (!confirm('Xuất bản bài viết này ngay?')) return;

    try {
        await api.publishPost(postId);
        showAlert('success', '✅ Đã xuất bản bài viết!');
        loadPosts();
    } catch (error) {
        showAlert('error', 'Không thể xuất bản: ' + error.message);
    }
}

// ==================== NOTIFICATIONS ====================

async function loadNotifications() {
    const loading = document.getElementById('notificationsLoading');
    const container = document.getElementById('notificationsContainer');
    const empty = document.getElementById('notificationsEmpty');
    const tbody = document.getElementById('notificationsTableBody');

    loading.style.display = 'block';
    container.style.display = 'none';
    empty.style.display = 'none';

    try {
        const response = await api.getNotifications();
        const notifications = response.data;

        loading.style.display = 'none';

        if (notifications.length === 0) {
            empty.style.display = 'block';
            return;
        }

        container.style.display = 'block';
        tbody.innerHTML = notifications.map(notif => `
            <tr>
                <td><strong>${notif.title}</strong></td>
                <td><span class="badge" style="background: ${getNotificationTypeColor(notif.type)}">${notif.type}</span></td>
                <td>${notif.recipientCount || 0} DN</td>
                <td>${getNotificationStatusBadgeHTML(notif.status)}</td>
                <td>${notif.sentDate ? formatDate(notif.sentDate) : '-'}</td>
                <td>
                    ${notif.status === 'scheduled' ? `<button class="btn btn-sm btn-success" onclick="sendNotificationAction('${notif.id}')" style="margin-right: 4px;">📤</button>` : ''}
                    <button class="btn btn-sm btn-danger" onclick="deleteNotificationAction('${notif.id}')">🗑️</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        loading.style.display = 'none';
        showAlert('error', 'Lỗi tải dữ liệu: ' + error.message);
    }
}

function openCreateNotificationModal() {
    document.getElementById('createNotificationForm').reset();
    document.getElementById('createNotificationModal').classList.add('active');
    updateRecipientCount(document.querySelector('[name="targetAudience"]'));
}

function closeNotificationModal() {
    document.getElementById('createNotificationModal').classList.remove('active');
}

async function handleSubmitNotification(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const notificationData = {
        title: formData.get('title'),
        type: formData.get('type'),
        priority: formData.get('priority'),
        content: formData.get('content'),
        targetAudience: { type: formData.get('targetAudience') },
        recipientCount: getRecipientCountValue(formData.get('targetAudience')),
        status: 'draft'
    };

    try {
        const response = await api.createNotification(notificationData);
        // Send immediately
        await api.sendNotification(response.data.id);
        
        showAlert('success', '✅ Đã gửi thông báo thành công!');
        closeNotificationModal();
        loadNotifications();
    } catch (error) {
        showAlert('error', 'Lỗi: ' + error.message);
    }
}

async function deleteNotificationAction(notifId) {
    if (!confirm('Bạn có chắc chắn muốn xóa thông báo này?')) return;

    try {
        await api.deleteNotification(notifId);
        showAlert('success', '✅ Đã xóa thông báo!');
        loadNotifications();
    } catch (error) {
        showAlert('error', 'Không thể xóa: ' + error.message);
    }
}

async function sendNotificationAction(notifId) {
    if (!confirm('Gửi thông báo này ngay?')) return;

    try {
        await api.sendNotification(notifId);
        showAlert('success', '✅ Đã gửi thông báo!');
        loadNotifications();
    } catch (error) {
        showAlert('error', 'Không thể gửi: ' + error.message);
    }
}

function updateRecipientCount(select) {
    const counts = {
        'all': 856,
        'energy': 145,
        'trade': 302,
        'industry': 287,
        'small': 423
    };
    const count = counts[select.value] || 856;
    document.getElementById('recipientCount').textContent = count + ' doanh nghiệp';
}

function getRecipientCountValue(targetType) {
    const counts = {
        'all': 856,
        'energy': 145,
        'trade': 302,
        'industry': 287,
        'small': 423
    };
    return counts[targetType] || 856;
}

// ==================== ENTERPRISES ====================

async function loadEnterprises() {
    const loading = document.getElementById('enterprisesLoading');
    const container = document.getElementById('enterprisesContainer');
    const tbody = document.getElementById('enterprisesTableBody');

    loading.style.display = 'block';
    container.style.display = 'none';

    try {
        const response = await api.getEnterprises();
        const enterprises = response.data;

        loading.style.display = 'none';
        container.style.display = 'block';

        tbody.innerHTML = enterprises.map(ent => `
            <tr>
                <td><strong>${ent.code}</strong></td>
                <td>${ent.name}</td>
                <td>${ent.category}</td>
                <td>${ent.size} (${ent.employeeCount} NV)</td>
                <td>${ent.email}</td>
                <td><span class="badge badge-success">✓ ${ent.status}</span></td>
            </tr>
        `).join('');
    } catch (error) {
        loading.style.display = 'none';
        showAlert('error', 'Lỗi tải dữ liệu: ' + error.message);
    }
}

// ==================== HELPER FUNCTIONS ====================

function getCategoryColor(category) {
    const colors = {
        'news': '#16a34a',
        'event': '#7c3aed',
        'policy': '#0066cc',
        'report': '#ea580c'
    };
    return colors[category] || '#64748b';
}

function getCategoryName(category) {
    const names = {
        'news': 'Tin tức',
        'event': 'Sự kiện',
        'policy': 'Chính sách',
        'report': 'Báo cáo'
    };
    return names[category] || category;
}

function getStatusBadgeHTML(status) {
    const badges = {
        'published': '<span class="badge badge-success">✓ Đã xuất bản</span>',
        'pending': '<span class="badge badge-warning">⏳ Chờ duyệt</span>',
        'draft': '<span class="badge badge-secondary">📝 Nháp</span>'
    };
    return badges[status] || badges['draft'];
}

function getNotificationTypeColor(type) {
    const colors = {
        'QUAN TRỌNG': '#dc2626',
        'CHƯƠNG TRÌNH MỚI': '#16a34a',
        'ƯU ĐÃI': '#ea580c',
        'SỰ KIỆN': '#7c3aed'
    };
    return colors[type] || '#64748b';
}

function getNotificationStatusBadgeHTML(status) {
    const badges = {
        'sent': '<span class="badge badge-success">✓ Đã gửi</span>',
        'scheduled': '<span class="badge badge-warning">⏰ Đã lên lịch</span>',
        'draft': '<span class="badge badge-secondary">📝 Nháp</span>'
    };
    return badges[status] || badges['draft'];
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}

function showAlert(type, message) {
    const alertClass = type === 'success' ? 'alert-success' : 'alert-error';
    const icon = type === 'success' ? '✓' : '⚠️';
    
    const alert = document.createElement('div');
    alert.className = `alert ${alertClass}`;
    alert.innerHTML = `<span style="font-size: 20px;">${icon}</span><div>${message}</div>`;
    alert.style.position = 'fixed';
    alert.style.top = '20px';
    alert.style.right = '20px';
    alert.style.zIndex = '10000';
    alert.style.minWidth = '300px';
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 CMS Demo initialized');
    checkServerStatus();
    loadPosts();
    
    // Check server status every 5 seconds
    setInterval(checkServerStatus, 5000);
});

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}
