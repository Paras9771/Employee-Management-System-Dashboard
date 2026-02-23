const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "Rahul@gmail.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create responsive landing page UI",
        date: "2026-02-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve mobile navbar alignment issue",
        date: "2026-02-21",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Resume",
        description: "Add latest projects to resume",
        date: "2026-02-22",
        category: "Personal",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create Login Page",
        description: "Develop login UI with validation",
        date: "2026-02-23",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress and lazy load images",
        date: "2026-02-24",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "Amit@gmail.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Create Dashboard",
        description: "Build admin dashboard layout",
        date: "2026-02-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect frontend with backend API",
        date: "2026-02-21",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Prepare project documentation",
        date: "2026-02-22",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Improve UI",
        description: "Enhance UI animations",
        date: "2026-02-23",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Issue",
        description: "Solve incorrect password bug",
        date: "2026-02-24",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "Priya@gmail.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Create Profile Page",
        description: "Develop profile page UI",
        date: "2026-02-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Test Application",
        description: "Perform functional testing",
        date: "2026-02-21",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix CSS Issues",
        description: "Resolve layout bugs",
        date: "2026-02-22",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Create Charts",
        description: "Add charts to dashboard",
        date: "2026-02-23",
        category: "Data",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Code",
        description: "Refactor components",
        date: "2026-02-24",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "Neha@gmail.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Create About Page",
        description: "Design about section",
        date: "2026-02-20",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy Project",
        description: "Deploy site on Netlify",
        date: "2026-02-21",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Footer Bug",
        description: "Resolve footer overlap",
        date: "2026-02-22",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Add Dark Mode",
        description: "Implement dark theme",
        date: "2026-02-23",
        category: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Improve Accessibility",
        description: "Add aria labels",
        date: "2026-02-24",
        category: "Accessibility",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstName: "Khushboo",
    email: "Khushboo@gmail.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Create Contact Page",
        description: "Build contact form",
        date: "2026-02-20",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Form Bug",
        description: "Validate email input",
        date: "2026-02-21",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Add tests for components",
        date: "2026-02-22",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Add Animations",
        description: "GSAP animations",
        date: "2026-02-23",
        category: "Animation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Improve Performance",
        description: "Reduce bundle size",
        date: "2026-02-24",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Paras Tomar",
    email: "parastomar851@gmail.com",
    password: "paras@123"
  }
];

export const setLocalStorage = () => {

  const employeesData = localStorage.getItem("employees");
  const adminData = localStorage.getItem("admin");

  if (!employeesData || JSON.parse(employeesData).length === 0) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!adminData || JSON.parse(adminData).length === 0) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))

  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}
