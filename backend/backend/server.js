const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const jobsRouter = require('./routes/jobs');

const app = express();

// 中间件
app.use(cors());  // 启用 CORS
app.use(morgan('dev'));  // 日志记录
app.use(express.json());  // 解析 JSON 请求体

// 路由
app.use('/api/jobs', jobsRouter);

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        error: '服务器内部错误'
    });
});

// 处理 404
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: '未找到请求的资源'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
}); 