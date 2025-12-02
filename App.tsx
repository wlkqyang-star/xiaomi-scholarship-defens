import React from 'react';
import Background from './components/Background';
import CyberCard from './components/CyberCard';
import NumberTicker from './components/NumberTicker';
import AIAssistant from './components/AIAssistant';
import img2 from './components/img2.jpg';
import img3 from './components/img3.png';
import img4 from './components/img4.png';
import img5 from './components/img5.png';
import img7 from './components/img7.png';
import img8 from './components/img8.png';
import img10 from './components/img10.png';
import img11 from './components/img11.png';
import img12 from './components/img12.png';
import img13 from './components/img13.png';
import img14 from './components/img14.png';
import { 
  CANDIDATE, 
  RESEARCH_PROJECTS, 
  COMPETITIONS, 
  PAPERS, 
  INTERNSHIPS, 
  PRACTICES, 
  VOLUNTEER_EVENTS, 
  STUDENT_WORKS,
  BUDGET_PLAN
} from './constants';

function App() {
  return (
    <div className="relative min-h-screen text-gray-200 font-sans selection:bg-azure-orange selection:text-white">
      <Background />
      <AIAssistant />

      {/* --- 主页 --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative pt-20">
        <div className="absolute top-10 left-6 md:left-24 flex items-center gap-4 opacity-80">
           <img src={img14} alt="Xiaomi Logo" className="w-10 h-10 rounded-xl object-contain shadow-lg" />
           <div className="h-8 w-px bg-white/20"></div>
           <div className="text-xs font-mono tracking-[0.2em] text-azure-card text-glow">小米专项奖学金答辩</div>
        </div>

        <div className="max-w-5xl z-10 animate-float">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-azure-card/30 rounded-full bg-azure-bg-dark/50 backdrop-blur-md mb-8">
            <span className="w-2 h-2 bg-azure-orange rounded-full animate-pulse"></span>
            <span className="text-azure-card text-xs font-mono font-bold tracking-widest">2025</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
            {CANDIDATE.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1.5 w-24 bg-azure-orange rounded-full"></div>
            <p className="text-2xl text-azure-cream font-light italic">{CANDIDATE.slogan}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-azure-bg-dark/40 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-lg text-azure-card font-mono mb-2">候选人</p>
              <p className="text-3xl text-white font-bold">{CANDIDATE.name}</p>
              <p className="text-azure-cream mt-1">{CANDIDATE.college} | {CANDIDATE.major}</p>
            </div>
            <div className="border-l-2 border-azure-card/30 pl-8 flex items-center">
              <p className="text-base text-gray-300 leading-loose">
                {CANDIDATE.summary}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs font-mono tracking-widest text-azure-card">向下滑动浏览</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* --- RESEARCH PROJECTS --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto">
        <div className="flex items-end gap-6 mb-16 border-b border-white/10 pb-6">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">01</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              <span className="text-azure-orange">科研交叉融合</span> 创新
            </h2>
            <p className="text-azure-card font-mono text-sm">科研项目</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {RESEARCH_PROJECTS.map((project) => (
            <CyberCard 
              key={project.id} 
              title={project.code} 
              subtitle={project.manager ? `负责人：${project.manager}` : ''}
              highlight={project.highlight}
            >
              <h4 className="text-white font-bold mb-3 text-xl leading-snug">{project.title}</h4>
              <div className="mt-4 p-4 bg-azure-bg-dark/50 rounded-lg border border-white/5">
                <span className="text-xs text-azure-orange block mb-2 font-mono tracking-wider font-bold">角色与贡献</span>
                <p className="text-gray-300 text-sm">{project.role}</p>
              </div>
            </CyberCard>
          ))}
        </div>
      </section>

      {/* --- COMPETITIONS --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto bg-gradient-to-b from-transparent to-azure-bg-dark/30">
        <div className="flex items-end gap-6 mb-16 border-b border-white/10 pb-6">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">02</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              <span className="text-cyan-300">前沿引领</span> 创新
            </h2>
            <p className="text-azure-card font-mono text-sm">竞赛表现</p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Trophy Stats */}
          <div className="md:col-span-4 flex flex-col gap-4">
             <div className="flex-1 p-8 rounded-2xl bg-gradient-to-br from-azure-orange to-orange-700 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="text-7xl font-sans font-bold mb-2">x<span className="text-4xl opacity-80">3</span></div>
                  <div className="text-lg font-medium tracking-wide">全国一等奖</div>
                </div>
             </div>
             <div className="flex-1 p-8 rounded-2xl glass-panel text-center flex flex-col justify-center items-center">
                <div className="text-5xl font-sans text-azure-cream font-bold mb-2">x<span className="text-3xl opacity-60">2</span></div>
                <div className="text-sm text-azure-card tracking-wider">全国二等奖</div>
             </div>
          </div>
          
          {/* List */}
          <div className="md:col-span-8 space-y-4">
            {COMPETITIONS.map((comp, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row gap-6 p-6 glass-panel rounded-xl hover:bg-white/5 transition-colors">
                <div className="md:w-36 flex-shrink-0 pt-1">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide shadow-lg ${
                    idx === 0 || idx === 1 || idx === 2
                      ? 'bg-white text-azure-bg font-extrabold' 
                      : 'bg-azure-bg-dark text-azure-card border border-white/10'
                  }`}>
                    {comp.rank}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-azure-cream transition-colors">{comp.title}</h3>
                  <p className="text-sm text-gray-400 my-2">{comp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {comp.works.map((w, i) => {
                      const linkMap: Record<string, string> = {
                        '《满髻花开》': 'https://v.douyin.com/QkYg15GwjLE/',
                        '《赛博词典》(数据可视化)': 'https://zbl1637.github.io/game_slang_dic/',
                        '《赛博词典》': 'https://zbl1637.github.io/game_slang_dic/',
                        '赛博词典，游戏场景如何塑造我们的“黑话DNA”': 'https://zbl1637.github.io/game_slang_dic/',
                        '《考场之外》': 'https://www.bilibili.com/video/BV14KrZYJEKf/?spm_id_from=333.1387.homepage.video_card.click',
                        '纪录片《考场之外》': 'https://www.bilibili.com/video/BV14KrZYJEKf/?spm_id_from=333.1387.homepage.video_card.click',
                        '《情感百分比》': 'https://www.bilibili.com/video/BV1mPrZYDEpa/?vd_source=ff013b1eec06db74a248968a44fd8e04',
                        '微短剧《情感百分比》': 'https://www.bilibili.com/video/BV1mPrZYDEpa/?vd_source=ff013b1eec06db74a248968a44fd8e04',
                        '轩辕遗卷·礼敬先祖续古仪 VR博物馆': 'https://ve.mvpmeta.com/new/preview/#/?id=19509&secret=MTk1MDk=&ratio=256'
                      };
                      const href = linkMap[w] || linkMap[w.replace(/\s*\(.*?\)\s*/g, '')];
                      const classes = 'text-xs font-mono text-cyan-200 bg-cyan-900/30 border border-cyan-500/30 px-3 py-1 rounded-md';
                      return href ? (
                        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                          {w}
                        </a>
                      ) : (
                        <span key={i} className={classes}>{w}</span>
                      );
                    })}
                  </div>
                  {(() => {
                    const map: Record<string, string> = {
                      '全国大学生数字媒体科技作品及创意竞赛': img12,
                      "首届'京彩台湾'两岸青年短片征集大赛": img3,
                      '2024中国公益映像节 入围作品奖': img2
                    };
                    const src = map[comp.title];
                    return src ? (
                      <img src={src} alt="作品配图" className="mt-3 w-full max-w-[160px] rounded-lg border border-white/10" />
                    ) : null;
                  })()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACADEMIC & INTERNSHIPS --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto">
        <div className="flex items-end gap-6 mb-16 border-b border-white/10 pb-6">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">03</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              <span className="text-azure-orange">前沿引领</span> 创新
            </h2>
            <p className="text-azure-card font-mono text-sm">学术与行业实践</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Papers */}
          <div>
            <h3 className="text-xl font-bold text-azure-cream mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-azure-cream"></span> 已发表论文
            </h3>
            <div className="space-y-6">
              {PAPERS.map((paper, idx) => (
                <div key={idx} className="relative pl-8 border-l border-white/10 pb-2 group">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-azure-bg border-2 border-azure-card rounded-full group-hover:bg-azure-orange group-hover:border-azure-orange transition-colors"></div>
                  <div className="flex items-center gap-3 mb-2">
                     <span className="text-xs font-bold text-azure-bg bg-azure-card px-2 py-0.5 rounded-sm">{paper.type === 'Journal' ? '期刊' : paper.type === 'Conference' ? '会议' : '论坛'}</span>
                     <span className="text-xs text-azure-orange">{paper.status}</span>
                  </div>
                  <h4 className="text-lg text-white font-medium leading-relaxed mb-1 group-hover:text-cyan-200 transition-colors">{paper.title}</h4>
                  <p className="text-sm text-gray-500 font-mono italic">{paper.venue}</p>
                  {paper.title.includes('生成式引擎优化') && (
                    <img src={img4} alt="论文配图" className="mt-3 w-full max-w-[160px] rounded-lg border border-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
             <h3 className="text-xl font-bold text-azure-cream mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-azure-cream"></span> 行业实践
            </h3>
            <div className="space-y-6">
              {INTERNSHIPS.map((job, idx) => (
                <CyberCard key={idx} title={job.company} subtitle={job.period} className="bg-azure-bg-dark/40">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                       <div className="text-azure-orange text-sm font-bold mb-3 uppercase tracking-wider">{job.role}</div>
                       <p className="text-xs text-gray-300 mb-3 leading-relaxed">{job.tasks}</p>
                       <p className="text-xs text-cyan-200 border-t border-white/5 pt-3">{job.achievements}</p>
                       {(() => {
                         const map: Record<string, string> = {
                           '光明网 / 光明日报': img5,
                           '北京清博智能科技有限公司': img13
                         };
                         const src = map[job.company];
                         return src ? (
                           <img src={src} alt="实习配图" className="mt-3 w-full max-w-[160px] rounded-lg border border-white/10" />
                         ) : null;
                       })()}
                    </div>
                    {job.stats && (
                      <div className="sm:text-right min-w-[100px] bg-white/5 p-3 rounded-lg sm:bg-transparent sm:p-0">
                        {job.stats.map((s, i) => (
                          <div key={i}>
                            <div className="text-[10px] text-gray-400 uppercase tracking-widest">{s.label}</div>
                            <div className="text-2xl font-mono text-white font-bold text-glow">
                              <NumberTicker value={s.value.toString()} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CyberCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PRACTICE & LEADERSHIP --- */}
      <section className="py-24 px-6 md:px-24 max-w-8xl mx-auto bg-azure-bg-dark/20 border-y border-white/5">
        <div className="flex items-end gap-6 mb-16">
          <span className="text-6xl font-black text-white/5 font-mono -mb-2">04</span>
          <div>
            <h2 className="text-4xl font-bold text-white mb-1">
              知识与 <span className="text-cyan-300">行动</span>
            </h2>
            <p className="text-azure-card font-mono text-sm">社会实践与领导力</p>
          </div>
        </div>

        {/* Social Practice Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {PRACTICES.map((p, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-azure-orange/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
              <h4 className="text-white font-bold text-xl mb-3 relative z-10">{p.title}</h4>
              <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">{p.description}</p>
              <div className="text-sm font-medium text-cyan-200 relative z-10 pl-3 border-l-2 border-cyan-500">
                 {p.outcome}
                 {p.title === "'大国边疆'实践团 (民大&人大联合)" && (
                   <a href="https://weibo.com/1893892941/5085696219417262?wm=3333_2001&from=10EA093010&sourcetype=weixin&s_trans=5236088231_5085696219417262&s_channel=4" target="_blank" rel="noopener noreferrer" className="ml-2 text-cyan-300 underline">
                     查看详情
                   </a>
                 )}
              </div>
              {(() => {
                const map: Record<string, string> = {
                  "'大国边疆'实践团 (民大&人大联合)": img7,
                  '非遗文化调研': img8
                };
                const src = map[p.title];
                return src ? (
                  <img src={src} alt="实践配图" className="mt-3 w-full max-w-[200px] rounded-lg border border-white/10" />
                ) : null;
              })()}
            </div>
          ))}
        </div>

        {/* Volunteers */}
        <div className="mb-16">
          <h3 className="text-sm font-mono text-azure-cream mb-3 tracking-widest flex items-center gap-4">
             高水平志愿服务 <span className="flex-1 h-px bg-white/10"></span>
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <img src={img10} alt="志愿配图1" className="w-24 h-16 rounded-lg border border-white/10 object-cover" />
            <img src={img11} alt="志愿配图2" className="w-24 h-16 rounded-lg border border-white/10 object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {VOLUNTEER_EVENTS.map((evt, i) => (
              <div key={i} className="px-4 py-3 bg-azure-bg-dark border border-white/10 rounded-lg text-sm text-gray-300 text-center hover:border-azure-card transition-colors">
                {evt}
              </div>
            ))}
          </div>
        </div>

        {/* Student Work Table style */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-azure-bg-dark/30">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-xs text-azure-card font-mono tracking-wider">
                <th className="py-4 px-6">职务</th>
                <th className="py-4 px-6 hidden md:table-cell">期间</th>
                <th className="py-4 px-6">主要职责</th>
                <th className="py-4 px-6 text-right">成果</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5">
              {STUDENT_WORKS.map((work, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors group">
                  <td className="py-5 px-6 font-bold text-white group-hover:text-azure-orange transition-colors">{work.role}</td>
                  <td className="py-5 px-6 text-gray-500 font-mono text-xs hidden md:table-cell">{work.period}</td>
                  <td className="py-5 px-6 text-gray-400">{work.description}</td>
                  <td className="py-5 px-6 text-right font-mono text-cyan-300 font-bold text-base">
                    {work.highlight_stat || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* --- PLAN & FOOTER --- */}
      <section className="py-24 px-6 md:px-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-12">未来规划与预算</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-20">
          {BUDGET_PLAN.map((plan, idx) => (
            <div key={idx} className="flex-1 p-8 glass-panel rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
               {/* Progress Bar Background */}
               <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-azure-orange to-orange-500 transition-all duration-1000 group-hover:h-2" style={{width: `${plan.percent}%`}}></div>
               
               <div className="text-5xl font-sans font-black text-white mb-2">{plan.percent}<span className="text-2xl opacity-50">%</span></div>
               <div className="text-azure-orange font-bold uppercase tracking-widest text-sm mb-4">{plan.category}</div>
               <p className="text-xs text-gray-400 leading-relaxed">{plan.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-16">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-azure-orange via-purple-500 to-cyan-500 mb-8">
             <div className="bg-azure-bg px-8 py-4 rounded-full">
                <p className="text-xl md:text-2xl font-bold text-white">“深植民大基因与小米<span className="text-azure-orange">精神同频</span>。”</p>
             </div>
          </div>
          
          <div className="flex justify-center gap-8 text-xs text-gray-500 font-mono tracking-widest mt-8">
            <span>候选人：杜靖洋</span>
            <span>2025-小米特等奖学金</span>
            <span>答辩</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
