const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files

// Database file paths
const DB_DIR = path.join(__dirname, 'database');
const POSTS_DB = path.join(DB_DIR, 'posts.json');
const NOTIFICATIONS_DB = path.join(DB_DIR, 'notifications.json');
const ENTERPRISES_DB = path.join(DB_DIR, 'enterprises.json');

// Initialize database
async function initDatabase() {
    try {
        await fs.mkdir(DB_DIR, { recursive: true });
        
        // Initialize posts.json if not exists
        try {
            await fs.access(POSTS_DB);
        } catch {
            await fs.writeFile(POSTS_DB, JSON.stringify([], null, 2));
        }
        
        // Initialize notifications.json if not exists
        try {
            await fs.access(NOTIFICATIONS_DB);
        } catch {
            await fs.writeFile(NOTIFICATIONS_DB, JSON.stringify([], null, 2));
        }
        
        // Initialize enterprises.json if not exists
        try {
            await fs.access(ENTERPRISES_DB);
        } catch {
            const sampleEnterprises = [
                {
                    id: uuidv4(),
                    code: 'DN-0001',
                    name: 'Công ty TNHH Năng lượng Xanh Việt',
                    category: 'energy',
                    size: 'medium',
                    employeeCount: 120,
                    email: 'info@greenenergyVN.com',
                    phone: '0283456789',
                    address: '123 Đường ABC, Quận 1',
                    district: 'Quận 1',
                    status: 'active',
                    createdAt: new Date().toISOString()
                },
                {
                    id: uuidv4(),
                    code: 'DN-0002',
                    name: 'Siêu thị Co.opMart Nguyễn Kiệm',
                    category: 'trade',
                    size: 'large',
                    employeeCount: 350,
                    email: 'contact@coopmart.vn',
                    phone: '0283456790',
                    address: '456 Nguyễn Kiệm, Phú Nhuận',
                    district: 'Phú Nhuận',
                    status: 'active',
                    createdAt: new Date().toISOString()
                },
                {
                    id: uuidv4(),
                    code: 'DN-0003',
                    name: 'KCN Tân Bình JSC',
                    category: 'industry',
                    size: 'large',
                    employeeCount: 450,
                    email: 'info@tanbinhip.com',
                    phone: '0283456791',
                    address: '789 Tân Bình, Quận Tân Bình',
                    district: 'Tân Bình',
                    status: 'active',
                    createdAt: new Date().toISOString()
                }
            ];
            await fs.writeFile(ENTERPRISES_DB, JSON.stringify(sampleEnterprises, null, 2));
        }
        
        console.log('✅ Database initialized');
    } catch (error) {
        console.error('❌ Database initialization error:', error);
    }
}

// Helper functions
async function readDB(filePath) {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
}

async function writeDB(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// ==================== POSTS API ====================

// Get all posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await readDB(POSTS_DB);
        const { status } = req.query;
        
        let filtered = posts;
        if (status && status !== 'all') {
            filtered = posts.filter(post => post.status === status);
        }
        
        res.json({
            success: true,
            data: filtered
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Get single post
app.get('/api/posts/:id', async (req, res) => {
    try {
        const posts = await readDB(POSTS_DB);
        const post = posts.find(p => p.id === req.params.id);
        
        if (!post) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }
        
        res.json({
            success: true,
            data: post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Create post
app.post('/api/posts', async (req, res) => {
    try {
        const posts = await readDB(POSTS_DB);
        const newPost = {
            id: uuidv4(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        posts.unshift(newPost);
        await writeDB(POSTS_DB, posts);
        
        res.status(201).json({
            success: true,
            data: newPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Update post
app.put('/api/posts/:id', async (req, res) => {
    try {
        const posts = await readDB(POSTS_DB);
        const index = posts.findIndex(p => p.id === req.params.id);
        
        if (index === -1) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }
        
        posts[index] = {
            ...posts[index],
            ...req.body,
            updatedAt: new Date().toISOString()
        };
        
        await writeDB(POSTS_DB, posts);
        
        res.json({
            success: true,
            data: posts[index]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Delete post
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const posts = await readDB(POSTS_DB);
        const filtered = posts.filter(p => p.id !== req.params.id);
        
        if (filtered.length === posts.length) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }
        
        await writeDB(POSTS_DB, filtered);
        
        res.json({
            success: true,
            message: 'Post deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Publish post
app.post('/api/posts/:id/publish', async (req, res) => {
    try {
        const posts = await readDB(POSTS_DB);
        const index = posts.findIndex(p => p.id === req.params.id);
        
        if (index === -1) {
            return res.status(404).json({
                success: false,
                error: 'Post not found'
            });
        }
        
        posts[index].status = 'published';
        posts[index].publishDate = new Date().toISOString();
        posts[index].updatedAt = new Date().toISOString();
        
        await writeDB(POSTS_DB, posts);
        
        res.json({
            success: true,
            data: posts[index]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ==================== NOTIFICATIONS API ====================

// Get all notifications
app.get('/api/notifications', async (req, res) => {
    try {
        const notifications = await readDB(NOTIFICATIONS_DB);
        res.json({
            success: true,
            data: notifications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Create notification
app.post('/api/notifications', async (req, res) => {
    try {
        const notifications = await readDB(NOTIFICATIONS_DB);
        const newNotification = {
            id: uuidv4(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        notifications.unshift(newNotification);
        await writeDB(NOTIFICATIONS_DB, notifications);
        
        res.status(201).json({
            success: true,
            data: newNotification
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Update notification
app.put('/api/notifications/:id', async (req, res) => {
    try {
        const notifications = await readDB(NOTIFICATIONS_DB);
        const index = notifications.findIndex(n => n.id === req.params.id);
        
        if (index === -1) {
            return res.status(404).json({
                success: false,
                error: 'Notification not found'
            });
        }
        
        notifications[index] = {
            ...notifications[index],
            ...req.body,
            updatedAt: new Date().toISOString()
        };
        
        await writeDB(NOTIFICATIONS_DB, notifications);
        
        res.json({
            success: true,
            data: notifications[index]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Delete notification
app.delete('/api/notifications/:id', async (req, res) => {
    try {
        const notifications = await readDB(NOTIFICATIONS_DB);
        const filtered = notifications.filter(n => n.id !== req.params.id);
        
        if (filtered.length === notifications.length) {
            return res.status(404).json({
                success: false,
                error: 'Notification not found'
            });
        }
        
        await writeDB(NOTIFICATIONS_DB, filtered);
        
        res.json({
            success: true,
            message: 'Notification deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Send notification
app.post('/api/notifications/:id/send', async (req, res) => {
    try {
        const notifications = await readDB(NOTIFICATIONS_DB);
        const index = notifications.findIndex(n => n.id === req.params.id);
        
        if (index === -1) {
            return res.status(404).json({
                success: false,
                error: 'Notification not found'
            });
        }
        
        notifications[index].status = 'sent';
        notifications[index].sentDate = new Date().toISOString();
        notifications[index].updatedAt = new Date().toISOString();
        
        await writeDB(NOTIFICATIONS_DB, notifications);
        
        res.json({
            success: true,
            data: notifications[index],
            message: 'Notification sent successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ==================== ENTERPRISES API ====================

// Get all enterprises
app.get('/api/enterprises', async (req, res) => {
    try {
        const enterprises = await readDB(ENTERPRISES_DB);
        const { category, size, district, search } = req.query;
        
        let filtered = enterprises;
        
        if (category && category !== 'all') {
            filtered = filtered.filter(e => e.category === category);
        }
        
        if (size) {
            filtered = filtered.filter(e => e.size === size);
        }
        
        if (district) {
            filtered = filtered.filter(e => e.district === district);
        }
        
        if (search) {
            const searchLower = search.toLowerCase();
            filtered = filtered.filter(e => 
                e.name.toLowerCase().includes(searchLower) ||
                e.code.toLowerCase().includes(searchLower)
            );
        }
        
        res.json({
            success: true,
            data: filtered
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Create enterprise
app.post('/api/enterprises', async (req, res) => {
    try {
        const enterprises = await readDB(ENTERPRISES_DB);
        const newEnterprise = {
            id: uuidv4(),
            ...req.body,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        enterprises.unshift(newEnterprise);
        await writeDB(ENTERPRISES_DB, enterprises);
        
        res.status(201).json({
            success: true,
            data: newEnterprise
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Update enterprise
app.put('/api/enterprises/:id', async (req, res) => {
    try {
        const enterprises = await readDB(ENTERPRISES_DB);
        const index = enterprises.findIndex(e => e.id === req.params.id);
        
        if (index === -1) {
            return res.status(404).json({
                success: false,
                error: 'Enterprise not found'
            });
        }
        
        enterprises[index] = {
            ...enterprises[index],
            ...req.body,
            updatedAt: new Date().toISOString()
        };
        
        await writeDB(ENTERPRISES_DB, enterprises);
        
        res.json({
            success: true,
            data: enterprises[index]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Delete enterprise
app.delete('/api/enterprises/:id', async (req, res) => {
    try {
        const enterprises = await readDB(ENTERPRISES_DB);
        const filtered = enterprises.filter(e => e.id !== req.params.id);
        
        if (filtered.length === enterprises.length) {
            return res.status(404).json({
                success: false,
                error: 'Enterprise not found'
            });
        }
        
        await writeDB(ENTERPRISES_DB, filtered);
        
        res.json({
            success: true,
            message: 'Enterprise deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Start server
initDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   🚀 CMS API Server đang chạy!                            ║
║                                                            ║
║   📍 URL: http://localhost:${PORT}                           ║
║   📂 Database: ./database/                                 ║
║                                                            ║
║   📝 API Endpoints:                                        ║
║   • GET    /api/posts                                      ║
║   • POST   /api/posts                                      ║
║   • PUT    /api/posts/:id                                  ║
║   • DELETE /api/posts/:id                                  ║
║   • POST   /api/posts/:id/publish                          ║
║                                                            ║
║   🔔 Notifications:                                        ║
║   • GET    /api/notifications                              ║
║   • POST   /api/notifications                              ║
║   • PUT    /api/notifications/:id                          ║
║   • DELETE /api/notifications/:id                          ║
║   • POST   /api/notifications/:id/send                     ║
║                                                            ║
║   🏢 Enterprises:                                          ║
║   • GET    /api/enterprises                                ║
║   • POST   /api/enterprises                                ║
║   • PUT    /api/enterprises/:id                            ║
║   • DELETE /api/enterprises/:id                            ║
║                                                            ║
║   ⚡ Nhấn Ctrl+C để dừng server                           ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
        `);
    });
});
