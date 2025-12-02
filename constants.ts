import { ResearchProject, Competition, Paper, Internship, Practice, StudentWork } from './types';

export const CANDIDATE = {
  name: "杜靖洋",
  college: "新闻与传播学院",
  major: "网络与新媒体",
  title: "创新探索 · 科技赋能传播",
  slogan: "既懂技术又懂传播的复合型人才",
  summary: "曾获国家奖学金、全国大学生数字媒体科技作品竞赛全国一等奖、'京彩台湾'两岸青年短片征集大赛一等奖等多项国家级荣誉，发表学术论文3篇。担任班长，参与4次国家级/国际性志愿服务及多次社会实践。"
};

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    id: "01",
    title: "中华民族共同体意识在少数民族题材短视频中的嵌入机制研究",
    code: "国家社科 23BXW109",
    manager: "王斌",
    role: "短视频中少数民族文化传播的失真机理研究"
  },
  {
    id: "02",
    title: "人工智能赋能铸牢中华民族共同体意识教育研究",
    code: "国家民委 2025-GMJ-034",
    manager: "韩旭",
    role: "智能体初步开发和大模型的微调",
    highlight: true
  },
  {
    id: "03",
    title: "AI赋能民族高校学生支部“讲好每一堂党课”路径研究",
    code: "高校党建2025",
    manager: "孙熙",
    role: "AI赋能路径研讨会、AI数字人赋能路径研究"
  },
  {
    id: "04",
    title: "主流媒体全媒体生产传播评价体系的实施偏差与制度优化研究",
    code: "中宣部 HX2025115",
    manager: "刘战伟",
    role: "主流媒体访谈对象的访谈及记录整理"
  }
];

export const COMPETITIONS: Competition[] = [
  {
    title: "全国大学生数字媒体科技作品及创意竞赛",
    rank: "全国一等奖",
    description: "将人工智能算法与数字媒体创作深度结合",
    works: ["《赛博词典》(数据可视化)", "《七十五载春秋》"]
  },
  {
    title: "首届'京彩台湾'两岸青年短片征集大赛",
    rank: "全国一等奖",
    description: "将摄影摄像与数字创作付诸实践，实地拍摄剪辑",
    works: [ "《满髻花开》"]
  },
  {
    title: "2024中国公益映像节 入围作品奖",
    rank: "入围奖",
    description: "纪录片创作",
    works: ["《满髻花开》"]
  },
  {
    title: "其他重要奖项",
    rank: "入围/单项奖",
    description: "影像创作能力体现",
    works: ["轩辕遗卷·礼敬先祖续古仪 VR博物馆","赛博词典，游戏场景如何塑造我们的“黑话DNA”","纪录片《考场之外》", "微短剧《情感百分比》"]
  }
];

export const PAPERS: Paper[] = [
  {
    title: "生成式引擎优化(GEO)的本质作用机制与策略研究:数字传播与营销的新范式",
    venue: "C扩《传媒》",
    status: "发表",
    type: "Journal"
  },
  {
    title: "从算法凝视到符号消费:短视频中少数民族文化传播的失真机理研究",
    venue: "铸牢中华民族共同体意识与边疆治理学术研讨会",
    status: "录用",
    type: "Conference"
  },
  {
    title: "内容、算法与制度:共同体意识在民族题材短视频中嵌入的三重路径",
    venue: "中国高校影视学会2025年敦煌论坛",
    status: "录用",
    type: "Forum"
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    company: "光明网 / 光明日报",
    role: "记者 (实习)",
    period: "2025.9 至今",
    tasks: "出席第十七届全国营养科学大会、ANSO科学创新大会等；稿件撰写与修改。",
    achievements: "代表作：《加快布局“天空之城”》(无人机救援)、《听损儿童歌声里的“无碍”之音》",
    stats: [{ label: "单篇阅读量", value: "840000+" }]
  },
  {
    company: "北京清博智能科技有限公司",
    role: "AI视频制作",
    period: "2024.11 至今",
    tasks: "AI视频生成与编辑",
    achievements: "参与制作的《美猴王》视频已播出",
    stats: [{ label: "播出平台", value: "央视频" }]
  },
  {
    company: "河南省尉氏县网信办",
    role: "网信助理",
    period: "2025.1 - 2025.2",
    tasks: "有害信息筛查、日常材料递送、宣传视频制作",
    achievements: "保障网络环境安全，提升政务宣传效率"
  }
];

export const PRACTICES: Practice[] = [
  {
    title: "'大国边疆'实践团 (民大&人大联合)",
    description: "多元一体的天山长城与民族交融寻迹",
    outcome: "纪录片被北京日报转发，主持话题 #00后的长城一日# 登上微博同城热搜榜"
  },
  {
    title: "非遗文化调研",
    description: "赴福建泉州调研'簪花'文化 (获一等奖)；赴甘肃甘南调研'三格毛'服饰",
    outcome: "产出高质量调研报告与影像作品"
  }
];

export const VOLUNTEER_EVENTS = [
  "中国-非盟能源伙伴关系推介会",
  "2024北京接诉即办改革论坛",
  "全球独角兽企业大会",
  "亚投行年会"
];

export const STUDENT_WORKS: StudentWork[] = [
  {
    role: "班长",
    period: "2023.9 至今",
    description: "协助导师服务同学",
    highlight_stat: "带领班级于大二获'校级优秀班集体'"
  },
  {
    role: "学院团委办公室负责人",
    period: "2024.9 - 2025.6",
    description: "负责团务工作及志愿活动",
    highlight_stat: "服务超700人次，3100小时+"
  },
  {
    role: "学院视频工作坊负责人",
    period: "2025.9 至今",
    description: "服务学校重要活动(如本科教育评估专家进校)",
    highlight_stat: "任务14次+"
  },
  {
    role: "校记者团成员",
    period: "2024.3 - 2024.10",
    description: "负责视频号/抖音制作",
    highlight_stat: "产出视频4条"
  }
];

export const BUDGET_PLAN = [
  { category: "学术研究", percent: 60, desc: "升级数字媒体创作工作站(AI训练/8K视频处理)，参加学术会议差旅" },
  { category: "实践服务", percent: 25, desc: "社会实践拍摄经费，报名AI/大数据分析培训课程" },
  { category: "日常生活", percent: 15, desc: "补贴生活，减轻家庭压力" }
];