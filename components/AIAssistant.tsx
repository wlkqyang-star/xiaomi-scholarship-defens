import React, { useState, useEffect, useRef } from 'react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '身份已验证。正在访问研究数据库……我可以如何协助了解候选人杜靖洋？' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    const API_KEY = import.meta.env.VITE_API_KEY as string | undefined;
    const MODEL_NAME = (import.meta.env.VITE_MODEL_NAME as string | undefined) || 'qwen-max';
    const BASE_URL_RAW = (import.meta.env.VITE_BASE_URL as string | undefined) || '';
    const BASE_URL = BASE_URL_RAW.replace(/[`'"\s]/g, '');

    try {
      if (!API_KEY || !BASE_URL) {
        throw new Error('missing_env');
      }
      const res = await fetch(`${BASE_URL}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [
            { role: 'system', content: '你是一位专业的中文智能助手，帮助用户了解候选人杜靖洋的项目、竞赛与实习。' },
            { role: 'user', content: userMsg }
          ],
          temperature: 0.7
        })
      });
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content || '接口无有效返回';
      setMessages(prev => [...prev, { role: 'ai', text }]);
    } catch (e) {
      let response = '正在访问模块… ';
      if (userMsg.includes('项目') || userMsg.includes('23BXW109')) {
        response += '23BXW109（国家社科）聚焦少数民族文化传播的‘失真机理’；2025-GMJ-034项目中，候选人自主开发Agent并微调大模型。';
      } else if (userMsg.includes('奖') || userMsg.includes('一等奖')) {
        response += '已获全国一等奖3项。代表作：《赛博词典》（数据可视化）融合AI算法。';
      } else if (userMsg.includes('实习') || userMsg.includes('CCTV') || userMsg.includes('光明日报')) {
        response += '媒体影响：光明日报稿件阅读量达84万+；AI视频《美猴王》已在CCTV播出。';
      } else {
        response += '候选人画像：既懂AI技术又懂大众传播的复合型人才；参与国家级项目与顶级竞赛，成果突出。';
      }
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Holographic Window */}
      {isOpen && (
        <div className="mb-6 w-80 md:w-96 bg-azure-bg-dark/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl shadow-[0_0_40px_rgba(0,200,255,0.2)] overflow-hidden flex flex-col h-96 animate-in fade-in slide-in-from-bottom-10 duration-300 hologram-border">
          <div className="bg-cyan-500/10 px-4 py-3 flex justify-between items-center border-b border-cyan-400/20">
            <span className="text-cyan-300 font-mono text-xs font-bold flex items-center gap-2 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              智能助手 // AI Agent
            </span>
            <button onClick={() => setIsOpen(false)} className="text-cyan-400 hover:text-white transition-colors">✕</button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl ${
                  m.role === 'user' 
                    ? 'bg-azure-bg text-white border border-white/10' 
                    : 'bg-cyan-900/40 text-cyan-100 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,255,0.1)]'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                 <div className="flex gap-1 items-center px-4 py-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
                 </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="p-3 bg-azure-bg-dark/90 border-t border-cyan-400/20 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="查询数据库…"
              className="flex-1 bg-black/20 border border-cyan-900 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.2)] font-mono transition-all placeholder:text-cyan-800"
            />
          </div>
        </div>
      )}

      {/* Floating Activator */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-600 to-azure-bg rounded-full shadow-[0_0_20px_rgba(0,200,255,0.4)] hover:shadow-[0_0_35px_rgba(0,200,255,0.6)] border border-cyan-300/50 transition-all hover:scale-105 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10">
          <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
        </svg>
        
        {/* Orbiting rings */}
        <span className="absolute inset-0 rounded-full border border-cyan-400/30 scale-125 animate-spin-slow"></span>
        <span className="absolute inset-0 rounded-full border border-dashed border-white/20 scale-150 animate-spin-slow duration-[15s]"></span>
      </button>
    </div>
  );
};

export default AIAssistant;
