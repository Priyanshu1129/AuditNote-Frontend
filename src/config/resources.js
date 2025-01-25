import {
  DashboardOutlined,
  FileTextOutlined, // For memo
  UnorderedListOutlined, // For request list
  CalendarOutlined, // For planning
  FileProtectOutlined, // For workpaper
  SafetyOutlined, // For risk register
  FileDoneOutlined, // For evidences
  BarChartOutlined, // For reporting
  CheckCircleOutlined, // For approvals
  TeamOutlined, // For exit meetings
  RedoOutlined, // For revalidation
} from "@ant-design/icons";

export const resources = [
  {
    key: "memo",
    label: "Memo",
    icon: <FileTextOutlined />,
  },
  {
    key: "request-list",
    label: "Request List",
    icon: <UnorderedListOutlined />,
  },
  {
    key: "planning",
    label: "Planning",
    icon: <CalendarOutlined />,
    children: [
      {
        key: "planning/memo",
        label: "Memo",
        icon: <FileTextOutlined />,
      },
      {
        key: "planning/minutes",
        label: "Minutes",
        icon: <FileTextOutlined />,
      },
    ],
  },
  {
    key: "fieldwork",
    label: "Fieldwork",
    icon: <SafetyOutlined />,
    children: [
      {
        key: "fieldwork/workpaper",
        label: "WorkPaper",
        icon: <FileProtectOutlined />,
      },
      {
        key: "fieldwork/risk-register",
        label: "Risk Register",
        icon: <SafetyOutlined />,
      },
      {
        key: "fieldwork/evidences",
        label: "Evidences",
        icon: <FileDoneOutlined />,
      },
    ],
  },
  {
    key: "reporting",
    label: "Reporting",
    icon: <BarChartOutlined />,
    children: [
      {
        key: "reporting/reports",
        label: "Reports",
        icon: <BarChartOutlined />,
      },
    ],
  },
  {
    key: "closure",
    label: "Closure",
    icon: <CheckCircleOutlined />,
    children: [
      {
        key: "closure/approvals",
        label: "Approvals",
        icon: <CheckCircleOutlined />,
      },
      {
        key: "closure/exit-meetings",
        label: "Exit Meetings",
        icon: <TeamOutlined />, // Represents collaboration or group discussions
      },
      {
        key: "closure/revalidation",
        label: "Revalidation",
        icon: <RedoOutlined />,
      },
    ],
  },
];
