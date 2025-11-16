// pages/taskList/taskList.ts
// 获取应用实例
const app = getApp<IAppOption>()

Component({
  data: {
    currentFilter: 'all', // 当前筛选条件: 'all', 'pending', 'processing', 'completed'
    tasks: [
      {
        id: 1,
        title: '完成车间设备年度检修计划制定',
        department: '技术部',
        assignee: '张三',
        deadline: '2024-06-30',
        status: { text: '处理中', color: '#ff9f1c' }, // 黄色
        priority: { text: '高', color: '#f5222d' } // 红色
      },
      {
        id: 2,
        title: '组织新员工入职培训',
        department: '人事科（党委组织科）',
        assignee: '李四',
        deadline: '2024-06-15',
        status: { text: '待处理', color: '#ccc' }, // 灰色
        priority: { text: '中', color: '#ff9f1c' } // 橙色
      },
      {
        id: 3,
        title: '2024年第二季度安全生产检查',
        department: '厂长办公室（党委办公室）',
        assignee: '王五',
        deadline: '2024-06-20',
        status: { text: '已完成', color: '#07c160' }, // 绿色
        priority: { text: '高', color: '#f5222d' } // 红色
      },
      {
        id: 4,
        title: '更新公司宣传册内容',
        department: '党群工作科',
        assignee: '赵六',
        deadline: '2024-07-05',
        status: { text: '待处理', color: '#ccc' }, // 灰色
        priority: { text: '低', color: '#07c160' } // 绿色
      },
      {
        id: 5,
        title: '审核上月财务报表',
        department: '财务部',
        assignee: '孙七',
        deadline: '2024-06-10',
        status: { text: '已完成', color: '#07c160' }, // 绿色
        priority: { text: '中', color: '#ff9f1c' } // 橙色
      },
      {
        id: 6,
        title: '制定下半年市场推广方案',
        department: '市场部',
        assignee: '周八',
        deadline: '2024-06-25',
        status: { text: '处理中', color: '#ff9f1c' }, // 黄色
        priority: { text: '高', color: '#f5222d' } // 红色
      },
    ],
    filteredTasks: [], // 筛选后的任务列表
  },

  // 页面加载时执行
  lifetimes: {
    attached() {
      // 初始化时筛选一次任务
      this.filterTasks();
    }
  },

  methods: {
    // 根据当前筛选条件过滤任务
    filterTasks() {
      const { tasks, currentFilter } = this.data;
      let result = tasks;

      switch (currentFilter) {
        case 'pending':
          result = tasks.filter(task => task.status.text === '待处理');
          break;
        case 'processing':
          result = tasks.filter(task => task.status.text === '处理中');
          break;
        case 'completed':
          result = tasks.filter(task => task.status.text === '已完成');
          break;
        // case 'all' 或其他情况，返回全部
        default:
          result = tasks;
          break;
      }

      this.setData({
        filteredTasks: result
      });
    },

    // 切换筛选条件
    changeFilter(e: any) {
      const filterType = e.currentTarget.dataset.type;
      this.setData({
        currentFilter: filterType
      }, () => {
        // 在 setData 回调中执行筛选，确保数据已更新
        this.filterTasks();
      });
    },

    // 跳转到任务详情页
    goToTaskDetail(e: any) {
      const taskId = e.currentTarget.dataset.id;
      // 这里可以添加跳转到任务详情页的逻辑
      wx.showToast({
        title: `查看任务 ID: ${taskId}`,
        icon: 'none'
      });
    }
  }
})  