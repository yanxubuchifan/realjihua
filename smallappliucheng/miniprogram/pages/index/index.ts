// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Component({
  data: {
    // 部门数据 - 不包含简介
    departments: [
      {
        id: 1,
        name: "厂长办公室（党委办公室）",
        initial: "厂",
        color: "#3578e5"
      },
      {
        id: 2,
        name: "党群工作科",
        initial: "党",
        color: "#e53935"
      },
      {
        id: 3,
        name: "人事科（党委组织科）",
        initial: "人",
        color: "#43a047"
      },
      {
        id: 4,
        name: "纪委办公室",
        initial: "纪",
        color: "#7b1fa2"
      }
    ]
  },
  methods: {
    // 跳转到部门详情页
    goToDepartmentDetail(e: any) {
      const deptId = e.currentTarget.dataset.id;
      // 可以在这里添加跳转逻辑
      wx.showToast({
        title: `进入${this.data.departments[deptId-1].name}`,
        icon: 'none'
      });
    }
  }
})