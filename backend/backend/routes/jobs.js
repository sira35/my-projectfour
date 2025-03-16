const express = require('express');
const router = express.Router();
const { getAllJobs, getJobById, filterJobs } = require('../models/jobs');

// 获取所有职位
router.get('/', (req, res) => {
    try {
        const { location, salary, company, type } = req.query;
        
        // 如果有查询参数，则进行筛选
        if (location || salary || company || type) {
            const filteredJobs = filterJobs({ location, salary, company, type });
            return res.json({
                success: true,
                data: filteredJobs
            });
        }

        // 否则返回所有职位
        const jobs = getAllJobs();
        res.json({
            success: true,
            data: jobs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: '获取职位列表失败'
        });
    }
});

// 获取单个职位详情
router.get('/:id', (req, res) => {
    try {
        const job = getJobById(req.params.id);
        if (!job) {
            return res.status(404).json({
                success: false,
                error: '职位不存在'
            });
        }
        res.json({
            success: true,
            data: job
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: '获取职位详情失败'
        });
    }
});

module.exports = router; 