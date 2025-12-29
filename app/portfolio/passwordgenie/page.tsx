import React from 'react';
import Image from 'next/image';

// 定义截图数据接口
interface Screenshot {
  id: number;
  src: string;
  title: string;
  description: string;
}

// 模拟数据：请替换 src 为你实际的图片路径
const screenshots: Screenshot[] = [
  {
    id: 1,
    src: 'https://image.keepdev.fun/passwordgenie/password1.jpeg', // 对应：九宫格手势输入界面
    title: '手势加密验证',
    description: '告别枯燥的文本主密码。通过独特的九宫格滑动轨迹，快速验证身份，既方便记忆又难以被旁人窥探。',
  },
  {
    id: 2,
    src: 'https://image.keepdev.fun/passwordgenie/password4.jpeg', // 对应：密码详情/helloworld界面
    title: '一键解密与复制',
    description: '验证通过后即刻展示密码明文。支持一键复制，结合标签化管理，让管理成百上千个账号变得轻松自如。',
  },
  {
    id: 3,
    src: 'https://image.keepdev.fun/passwordgenie/password5.jpeg', // 对应：设置/隐私界面
    title: '纯本地隐私沙箱',
    description: '安全是底线。所有数据经过加密后仅存储在您的手机本地，绝不上传云端，彻底杜绝服务器泄露风险。',
  }
];

const FeatureIcon = ({ path }: { path: string }) => (
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

export default function PasswordManagerShowcase() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部介绍区域 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            🛡️ 隐私安全工具
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            微信小程序-密码管理小助手
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            又忘记密码了？这是一款基于“零知识证明”理念设计的密码管理工具。
            <br className="hidden md:block" />
            **手势一划，密码再现**。它利用直观的图形记忆替代复杂的记忆负担，
            且坚持**纯本地存储**，把数据的掌控权完全交还给你。
          </p>
        </div>

        {/* 截图展示区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {screenshots.map((item) => (
            <div key={item.id} className="group flex flex-col items-center">
              
              {/* 手机外壳模拟容器 - 蓝色光晕 */}
              <div className="relative w-64 h-[500px] mb-8 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                {/* 阴影效果 */}
                <div className="absolute inset-0 bg-blue-300 blur-2xl opacity-20 group-hover:opacity-40 rounded-full transform translate-y-10"></div>
                
                {/* 手机边框 */}
                <div className="relative h-full w-full bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                  {/* 摄像头开孔 */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                  
                  {/* 屏幕区域 */}
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
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 底部技术特性列表 */}
        <div className="mt-20 border-t border-blue-100 pt-12">
          <h4 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            安全机制 & 核心功能
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { 
                label: '本地离线存储', 
                icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' 
              }, // Database/Storage icon
              { 
                label: '图形手势解密', 
                icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 8mc0 .153.053.297.143.412' 
              }, // Fingerprint/Gesture concept
              { 
                label: 'AES 加密算法', 
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' 
              }, // Lock icon
              { 
                label: '防窥隐私模式', 
                icon: 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21' 
              }, // Eye off icon
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-blue-50 flex flex-col items-center gap-2 transition-shadow hover:shadow-md">
                <div className="bg-blue-50 p-2 rounded-lg">
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