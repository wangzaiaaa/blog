// pages/about.js
import Image from "next/image";

const About = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">关于我</h1>
      <p className="mb-4">你好！欢迎来到我的博客，我是碳水怪兽👾。</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">联系方式</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer">
            📧 邮箱
          </a>
          <a href="https://github.com/wangzaiaaa" target="_blank" rel="noreferrer">
            🐙 GitHub
          </a>
          
        </div>
      </div>

      <div className='flex items-center justify-center'>
        
        <div className="mt-4">
          <Image
            src="/wechat_code.jpg" // 确保二维码图片文件位于 public 文件夹中
            alt="微信公众号二维码"
            width={200}
            height={200}
            
          />
        </div>
        <div className="mt-4">
          <Image
            src="/book.jpg" // 确保二维码图片文件位于 public 文件夹中
            alt=""
            width={200}
            height={200}
            
          />
        </div>
      </div>
    </div>
  );
};

export default About;
