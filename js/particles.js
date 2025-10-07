document.addEventListener('DOMContentLoaded', function() {
  // 这里放入完整的粒子效果代码
  // 示例：简单的粒子效果实现（可替换为开源库代码）
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '-1'; // 放在页面底层
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  
  // 粒子数组
  const particles = [];
  const particleCount = 50;
  
  // 创建粒子
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      color: 'rgba(102, 126, 234, 0.8)', // 与技能树色调匹配
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25
    });
  }
  
  // 动画循环
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(particle => {
      // 绘制粒子
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // 移动粒子
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // 边界检测
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
    });
    
    requestAnimationFrame(animate);
  }
  
  // 窗口大小变化时调整canvas
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
  
  animate();
});