// 模拟数据库中的职位数据
const jobs = [
    {
        id: 1,
        title: '高级前端工程师',
        company: '字节跳动',
        location: '北京',
        salary: '30K-50K',
        requirements: ['React', 'Vue', 'TypeScript'],
        experience: '3-5年',
        education: '本科及以上',
        description: '负责公司核心产品的前端开发工作',
        type: '全职',
        posted_at: '2024-03-15'
    },
    {
        id: 2,
        title: '产品经理',
        company: '腾讯',
        location: '深圳',
        salary: '25K-45K',
        requirements: ['产品设计', '数据分析', '用户增长'],
        experience: '3-5年',
        education: '本科及以上',
        description: '负责产品规划和用户增长',
        type: '全职',
        posted_at: '2024-03-14'
    },
    {
        id: 3,
        title: 'Java 后端工程师',
        company: '阿里巴巴',
        location: '杭州',
        salary: '25K-45K',
        requirements: ['Java', 'Spring Boot', 'MySQL'],
        experience: '1-3年',
        education: '本科及以上',
        description: '负责电商系统后端开发',
        type: '全职',
        posted_at: '2024-03-13'
    }
];

// 获取所有职位
const getAllJobs = () => jobs;

// 根据 ID 获取职位
const getJobById = (id) => jobs.find(job => job.id === parseInt(id));

// 根据条件筛选职位
const filterJobs = (filters) => {
    return jobs.filter(job => {
        let match = true;
        if (filters.location) {
            match = match && job.location.includes(filters.location);
        }
        if (filters.salary) {
            match = match && job.salary.includes(filters.salary);
        }
        if (filters.company) {
            match = match && job.company.includes(filters.company);
        }
        if (filters.type) {
            match = match && job.type === filters.type;
        }
        return match;
    });
};

module.exports = {
    getAllJobs,
    getJobById,
    filterJobs
}; 