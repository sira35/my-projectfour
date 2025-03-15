// 通用函数
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-white text-sm z-50 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// 表单验证
function validatePhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
}

function validatePassword(password) {
    return password.length >= 6;
}

// 登录处理
function handleLogin(event) {
    event.preventDefault();
    const phone = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!validatePhone(phone)) {
        showToast('请输入正确的手机号', 'error');
        return;
    }

    if (!validatePassword(password)) {
        showToast('密码至少需要6个字符', 'error');
        return;
    }

    // 模拟登录成功
    showToast('登录成功');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// 职位投递处理
function handleJobApply() {
    showToast('简历投递成功');
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.textContent = '已投递';
        applyBtn.disabled = true;
        applyBtn.className = 'w-full bg-gray-400 text-white py-3 rounded-full font-medium cursor-not-allowed';
    }
}

// 收藏职位
function handleJobCollect(element) {
    const isCollected = element.dataset.collected === 'true';
    element.dataset.collected = !isCollected;
    element.innerHTML = !isCollected ? 
        '<path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1z"/>' :
        '<path stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1z"/>';
    element.className = !isCollected ? 'w-6 h-6 text-red-500' : 'w-6 h-6 text-gray-400';
    showToast(!isCollected ? '已收藏职位' : '已取消收藏');
}

// 设置页面功能
function handleNotificationToggle(element) {
    const isEnabled = element.checked;
    showToast(isEnabled ? '通知已开启' : '通知已关闭');
}

function handleClearCache() {
    showToast('缓存清除成功');
    document.querySelector('.cache-size').textContent = '0KB';
}

function handleLogout() {
    if (confirm('确定要退出登录吗？')) {
        showToast('退出成功');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1000);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化登录表单
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // 初始化投递按钮
    const applyBtn = document.querySelector('.apply-btn');
    if (applyBtn) {
        applyBtn.addEventListener('click', handleJobApply);
    }

    // 初始化收藏按钮
    const collectBtns = document.querySelectorAll('.collect-btn');
    collectBtns.forEach(btn => {
        btn.addEventListener('click', () => handleJobCollect(btn));
    });

    // 初始化设置页面
    const notificationToggle = document.querySelector('.notification-toggle');
    if (notificationToggle) {
        notificationToggle.addEventListener('change', (e) => handleNotificationToggle(e.target));
    }

    const clearCacheBtn = document.querySelector('.clear-cache-btn');
    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', handleClearCache);
    }

    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
}); 