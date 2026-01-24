// CMS Functions - Real CRUD Operations

// ==================== POSTS MANAGEMENT ====================

// Load posts from API
async function loadCMSPosts(status = 'all') {
    try {
        const response = await api.getPosts(status);
        if (response.success) {
            renderPostsTable(response.data);
        }
    } catch (error) {
        console.error('Error loading posts:', error);
        showAlert('error', 'Không thể tải danh sách bài viết');
    }
}

// Render posts table
function renderPostsTable(posts) {
    const tbody = document.getElementById('cmsPostsTable');
    if (!tbody) return;

    if (posts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 40px; color: #64748b;">Không có bài viết nào</td></tr>';
        return;
    }

    tbody.innerHTML = posts.map(post => `
        <tr data-status="${post.status}" data-id="${post.id}">
            <td><input type="checkbox"></td>
            <td><strong>${post.title}</strong></td>
            <td><span class="card-badge" style="background: ${getCategoryColor(post.category)}">${post.category}</span></td>
            <td>${post.author || 'Admin'}</td>
            <td>${getStatusBadge(post.status)}</td>
            <td>${formatDate(post.createdAt)}</td>
            <td>${post.publishDate ? formatDate(post.publishDate) : '-'}</td>
            <td>
                <button class="btn btn-sm" style="padding: 4px 8px; font-size: 12px; margin-right: 4px;" onclick="editCMSPost('${post.id}')">✏️</button>
                ${post.status === 'pending' ? `<button class="btn btn-sm btn-primary" style="padding: 4px 8px; font-size: 12px; margin-right: 4px;" onclick="approvePost('${post.id}')">✓ Duyệt</button>` : ''}
                ${post.status === 'draft' ? `<button class="btn btn-sm btn-primary" style="padding: 4px 8px; font-size: 12px; margin-right: 4px;" onclick="publishPost('${post.id}')">📤 Xuất bản</button>` : ''}
                <button class="btn btn-sm" style="padding: 4px 8px; font-size: 12px; background: #dc2626;" onclick="deleteCMSPost('${post.id}')">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// Create/Edit post
async function submitCMSPost(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const postData = {
        title: formData.get('title'),
        category: formData.get('category'),
        content: formData.get('content'),
        author: formData.get('author') || 'Admin',
        status: formData.get('status') || 'draft',
        featuredImage: formData.get('featuredImage') || ''
    };

    if (postData.status === 'scheduled') {
        const scheduleDate = formData.get('scheduleDate');
        const scheduleTime = formData.get('scheduleTime');
        if (scheduleDate && scheduleTime) {
            postData.scheduledDate = `${scheduleDate}T${scheduleTime}:00`;
        }
    }

    try {
        const postId = form.dataset.postId;
        let response;
        
        if (postId) {
            // Update existing post
            response = await api.updatePost(postId, postData);
        } else {
            // Create new post
            response = await api.createPost(postData);
        }

        if (response.success) {
            closeCMSModal('createPost');
            showAlert('success', postId ? 'Đã cập nhật bài viết!' : 'Đã tạo bài viết mới!');
            loadCMSPosts();
            form.reset();
            delete form.dataset.postId;
        }
    } catch (error) {
        console.error('Error saving post:', error);
        showAlert('error', 'Không thể lưu bài viết: ' + error.message);
    }
}

// Edit post
async function editCMSPost(postId) {
    try {
        const response = await api.getPost(postId);
        if (response.success) {
            const post = response.data;
            const form = document.getElementById('createPostForm');
            
            form.dataset.postId = postId;
            form.querySelector('[name="title"]').value = post.title;
            form.querySelector('[name="category"]').value = post.category;
            form.querySelector('[name="content"]').value = post.content;
            form.querySelector('[name="status"]').value = post.status;
            
            openCMSModal('createPost');
        }
    } catch (error) {
        console.error('Error loading post:', error);
        showAlert('error', 'Không thể tải bài viết');
    }
}

// Delete post
async function deleteCMSPost(postId) {
    if (!confirm('Bạn có chắc chắn muốn xóa bài viết này?')) return;
    
    try {
        const response = await api.deletePost(postId);
        if (response.success) {
            showAlert('success', 'Đã xóa bài viết!');
            loadCMSPosts();
        }
    } catch (error) {
        console.error('Error deleting post:', error);
        showAlert('error', 'Không thể xóa bài viết');
    }
}

// Approve post
async function approvePost(postId) {
    if (!confirm('Duyệt và xuất bản bài viết này?')) return;
    
    try {
        const response = await api.publishPost(postId);
        if (response.success) {
            showAlert('success', 'Đã duyệt và xuất bản bài viết!');
            loadCMSPosts();
        }
    } catch (error) {
        console.error('Error approving post:', error);
        showAlert('error', 'Không thể duyệt bài viết');
    }
}

// Publish post
async function publishPost(postId) {
    if (!confirm('Xuất bản bài viết này ngay?')) return;
    
    try {
        const response = await api.publishPost(postId);
        if (response.success) {
            showAlert('success', 'Đã xuất bản bài viết!');
            loadCMSPosts();
        }
    } catch (error) {
        console.error('Error publishing post:', error);
        showAlert('error', 'Không thể xuất bản bài viết');
    }
}

// Filter posts
function filterCMSPosts(status, clickedElement) {
    const tabs = document.querySelectorAll('#cms-posts-tab .filter-tabs .filter-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    if (clickedElement) {
        clickedElement.classList.add('active');
    }
    
    loadCMSPosts(status);
}

// ==================== NOTIFICATIONS MANAGEMENT ====================

// Load notifications
async function loadCMSNotifications() {
    try {
        const response = await api.getNotifications();
        if (response.success) {
            renderNotificationsTable(response.data);
        }
    } catch (error) {
        console.error('Error loading notifications:', error);
        showAlert('error', 'Không thể tải danh sách thông báo');
    }
}

// Render notifications table
function renderNotificationsTable(notifications) {
    const tbody = document.querySelector('#cms-notifications-tab table tbody');
    if (!tbody) return;

    if (notifications.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #64748b;">Không có thông báo nào</td></tr>';
        return;
    }

    tbody.innerHTML = notifications.map(notif => `
        <tr data-id="${notif.id}">
            <td><input type="checkbox"></td>
            <td><strong>${notif.title}</strong></td>
            <td><span class="card-badge" style="background: ${getNotificationTypeColor(notif.type)}">${notif.type}</span></td>
            <td>${notif.targetAudience?.type || 'Tất cả'} (${notif.recipientCount || 0} DN)</td>
            <td>${getNotificationStatusBadge(notif.status)}</td>
            <td>${notif.sentDate ? formatDate(notif.sentDate) : (notif.scheduledDate ? formatDate(notif.scheduledDate) : '-')}</td>
            <td>
                ${notif.status === 'sent' ? `<button class="btn btn-sm btn-primary" style="padding: 4px 8px; font-size: 12px; margin-right: 4px;" onclick="viewNotificationStats('${notif.id}')">📊 Thống kê</button>` : ''}
                ${notif.status === 'scheduled' ? `<button class="btn btn-sm btn-primary" style="padding: 4px 8px; font-size: 12px; margin-right: 4px;" onclick="sendNotificationNow('${notif.id}')">📤 Gửi ngay</button>` : ''}
                <button class="btn btn-sm" style="padding: 4px 8px; font-size: 12px; margin-right: 4px;" onclick="editNotification('${notif.id}')">✏️</button>
                <button class="btn btn-sm" style="padding: 4px 8px; font-size: 12px; background: #dc2626;" onclick="deleteNotification('${notif.id}')">🗑️</button>
            </td>
        </tr>
    `).join('');
}

// Submit notification
async function submitCMSNotification(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const notificationData = {
        title: formData.get('title'),
        type: formData.get('type'),
        priority: formData.get('priority') || 'medium',
        content: formData.get('content'),
        targetAudience: {
            type: formData.get('targetAudience'),
            value: []
        },
        status: formData.get('schedule') === 'now' ? 'draft' : 'scheduled',
        recipientCount: getRecipientCount(formData.get('targetAudience'))
    };

    if (formData.get('schedule') === 'scheduled') {
        const scheduleDate = formData.get('scheduleDate');
        const scheduleTime = formData.get('scheduleTime');
        if (scheduleDate && scheduleTime) {
            notificationData.scheduledDate = `${scheduleDate}T${scheduleTime}:00`;
        }
    }

    try {
        const notifId = form.dataset.notificationId;
        let response;
        
        if (notifId) {
            response = await api.updateNotification(notifId, notificationData);
        } else {
            response = await api.createNotification(notificationData);
            
            // If "send now", immediately send it
            if (formData.get('schedule') === 'now') {
                await api.sendNotification(response.data.id);
            }
        }

        if (response.success) {
            closeCMSModal('createNotification');
            showAlert('success', formData.get('schedule') === 'now' ? 'Đã gửi thông báo!' : 'Đã lên lịch thông báo!');
            loadCMSNotifications();
            form.reset();
            delete form.dataset.notificationId;
        }
    } catch (error) {
        console.error('Error saving notification:', error);
        showAlert('error', 'Không thể lưu thông báo: ' + error.message);
    }
}

// Delete notification
async function deleteNotification(notifId) {
    if (!confirm('Bạn có chắc chắn muốn xóa thông báo này?')) return;
    
    try {
        const response = await api.deleteNotification(notifId);
        if (response.success) {
            showAlert('success', 'Đã xóa thông báo!');
            loadCMSNotifications();
        }
    } catch (error) {
        console.error('Error deleting notification:', error);
        showAlert('error', 'Không thể xóa thông báo');
    }
}

// Send notification now
async function sendNotificationNow(notifId) {
    if (!confirm('Gửi thông báo này ngay bây giờ?')) return;
    
    try {
        const response = await api.sendNotification(notifId);
        if (response.success) {
            showAlert('success', 'Đã gửi thông báo thành công!');
            loadCMSNotifications();
        }
    } catch (error) {
        console.error('Error sending notification:', error);
        showAlert('error', 'Không thể gửi thông báo');
    }
}

// ==================== ENTERPRISES MANAGEMENT ====================

// Load enterprises
async function loadCMSEnterprises(filters = {}) {
    try {
        const response = await api.getEnterprises(filters);
        if (response.success) {
            renderEnterprisesTable(response.data);
        }
    } catch (error) {
        console.error('Error loading enterprises:', error);
        showAlert('error', 'Không thể tải danh sách doanh nghiệp');
    }
}

// Render enterprises table
function renderEnterprisesTable(enterprises) {
    const tbody = document.querySelector('#cms-enterprises-tab table tbody');
    if (!tbody) return;

    if (enterprises.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align: center; padding: 40px; color: #64748b;">Không có doanh nghiệp nào</td></tr>';
        return;
    }

    tbody.innerHTML = enterprises.map(ent => `
        <tr data-id="${ent.id}">
            <td><input type="checkbox"></td>
            <td>${ent.code}</td>
            <td><strong>${ent.name}</strong></td>
            <td>${ent.category}</td>
            <td>${ent.size} (${ent.employeeCount} NV)</td>
            <td>${ent.email}</td>
            <td><span class="status" style="background: rgba(22, 163, 74, 0.15); color: #16a34a; padding: 4px 12px; border-radius: 12px; font-size: 12px;">✓ ${ent.status}</span></td>
            <td>
                <button class="btn btn-sm" style="padding: 4px 8px; font-size: 12px;" onclick="viewEnterprise('${ent.id}')">👁️</button>
            </td>
        </tr>
    `).join('');
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

function getStatusBadge(status) {
    const badges = {
        'published': '<span class="status" style="background: rgba(22, 163, 74, 0.15); color: #16a34a; padding: 4px 12px; border-radius: 12px; font-size: 12px; border: 1px solid rgba(22, 163, 74, 0.25);">✓ Đã xuất bản</span>',
        'pending': '<span class="status" style="background: rgba(234, 88, 12, 0.15); color: #ea580c; padding: 4px 12px; border-radius: 12px; font-size: 12px; border: 1px solid rgba(234, 88, 12, 0.25);">⏳ Chờ duyệt</span>',
        'draft': '<span class="status" style="background: rgba(107, 114, 128, 0.15); color: #6b7280; padding: 4px 12px; border-radius: 12px; font-size: 12px; border: 1px solid rgba(107, 114, 128, 0.25);">📝 Nháp</span>',
        'scheduled': '<span class="status" style="background: rgba(59, 130, 246, 0.15); color: #3b82f6; padding: 4px 12px; border-radius: 12px; font-size: 12px; border: 1px solid rgba(59, 130, 246, 0.25);">📅 Đã lên lịch</span>'
    };
    return badges[status] || badges['draft'];
}

function getNotificationTypeColor(type) {
    const colors = {
        'QUAN TRỌNG': '#dc2626',
        'CHƯƠNG TRÌNH MỚI': '#16a34a',
        'ƯU ĐÃI': '#ea580c',
        'SỰ KIỆN': '#7c3aed',
        'NHẮC NHỞ': '#0066cc'
    };
    return colors[type] || '#64748b';
}

function getNotificationStatusBadge(status) {
    const badges = {
        'sent': '<span class="status" style="background: rgba(22, 163, 74, 0.15); color: #16a34a; padding: 4px 12px; border-radius: 12px; font-size: 12px;">✓ Đã gửi</span>',
        'scheduled': '<span class="status" style="background: rgba(234, 88, 12, 0.15); color: #ea580c; padding: 4px 12px; border-radius: 12px; font-size: 12px;">⏰ Đã lên lịch</span>',
        'draft': '<span class="status" style="background: rgba(107, 114, 128, 0.15); color: #6b7280; padding: 4px 12px; border-radius: 12px; font-size: 12px;">📝 Nháp</span>'
    };
    return badges[status] || badges['draft'];
}

function getRecipientCount(targetType) {
    const counts = {
        'all': 856,
        'energy': 145,
        'trade': 302,
        'industry': 287,
        'fdi': 122,
        'small': 423,
        'medium': 298,
        'large': 135
    };
    return counts[targetType] || 0;
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
    alert.style.animation = 'slideInRight 0.3s ease';
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => alert.remove(), 300);
    }, 3000);
}

// View notification stats
function viewNotificationStats(notifId) {
    alert('Thống kê thông báo:\n\n✓ Đã gửi: 423\n✓ Đã đọc: 312 (74%)\n✓ Đã click: 187 (44%)');
}

// View enterprise details
function viewEnterprise(enterpriseId) {
    alert('Xem chi tiết doanh nghiệp #' + enterpriseId);
}

// Edit notification
function editNotification(notifId) {
    alert('Chức năng edit notification đang được phát triển');
}

// Initialize CMS when tab is shown
function initializeCMS() {
    loadCMSPosts();
}

// Auto-load data when CMS tab is shown
document.addEventListener('DOMContentLoaded', function() {
    // Load posts when CMS section is shown
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.target.id === 'cms-section' && mutation.target.classList.contains('active')) {
                loadCMSPosts();
            }
        });
    });

    const cmsSection = document.getElementById('cms-section');
    if (cmsSection) {
        observer.observe(cmsSection, { attributes: true, attributeFilter: ['class'] });
    }
});
