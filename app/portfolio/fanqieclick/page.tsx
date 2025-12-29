import React from 'react';
import Image from 'next/image';

// 定义截图数据接口
interface Screenshot {
  id: number;
  src: string;
  title: string;
  description: string;
}

// 模拟数据：请替换 src 为你实际的图片路径 (放在 public 文件夹下)
const screenshots: Screenshot[] = [
  {
    id: 1,
    src: 'https://image.keepdev.fun/fanqieclick/click1.jpeg', // 对应图1：主页/设置
    title: '极简专注设定',
    description: '基于单核工作法，将任务与番茄钟结合。清晰的专注、短休、长休模式切换，让你快速进入心流状态。',
  },
  {
    id: 2,
    src: 'https://image.keepdev.fun/fanqieclick/click2.jpeg', // 对应图2：倒计时运行中
    title: '沉浸式计时体验',
    description: '摒弃多余干扰，全屏红色主调激发紧迫感与专注力。可视化的进度条，让时间的流逝更有质感。',
  },
  {
    id: 3,
    src: 'https://image.keepdev.fun/fanqieclick/click3.jpeg', // 对应图3：个人中心/统计
    title: '数据复盘与回顾',
    description: '自动记录累计专注时长与完成番茄数。清晰的待办清单（To-do List）管理，让每一分努力都有迹可循。',
  }
];

const FeatureIcon = ({ path }: { path: string }) => (
  <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

export default function PomodoroShowcase() {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部介绍区域 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-4">
            🍅 效率工具
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            微信小程序-番茄钟专注助手
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            这是一款基于“番茄工作法”与“单核工作法”理念开发的专注力小程序。
            在这个碎片化的时代，它帮助你一次只做一件事，通过 25 分钟的高效冲刺与 5 分钟的休息，
            重拾对时间的掌控权。
          </p>
        </div>

        {/* 截图展示区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {screenshots.map((item) => (
            <div key={item.id} className="group flex flex-col items-center">
              
              {/* 手机外壳模拟容器 */}
              <div className="relative w-64 h-[500px] mb-8 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                {/* 阴影效果 */}
                <div className="absolute inset-0 bg-rose-200 blur-2xl opacity-20 group-hover:opacity-40 rounded-full transform translate-y-10"></div>
                
                {/* 手机边框 */}
                <div className="relative h-full w-full bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                  {/* 摄像头开孔 */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                  
                  {/* 屏幕区域 - 图片容器 */}
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* 文字描述 */}
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 底部技术栈或功能列表 (可选) */}
        <div className="mt-20 border-t border-rose-100 pt-12">
          <h4 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            核心特性 & 技术亮点
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: '番茄工作法', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: '任务清单管理', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
              { label: '数据统计', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              { label: '专注白噪音', icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-rose-50 flex flex-col items-center gap-2">
                <div className="bg-rose-50 p-2 rounded-lg">
                  <FeatureIcon path={feature.icon} />
                </div>
                <span className="text-gray-700 font-medium text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}