document.addEventListener('DOMContentLoaded', function() {
      // 需要添加滚动动画的元素
      const animatedElements = document.querySelectorAll('.animate__animated');
      
      // 初始隐藏元素（避免页面加载时瞬间显示）
      animatedElements.forEach(el => {
        el.style.opacity = '0'; // 先隐藏
        el.style.animationPlayState = 'paused'; // 暂停动画
      });
      
      // 检查元素是否在可视区域内
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        // 元素顶部进入可视区域底部100px时触发
        return rect.top < window.innerHeight - 100;
      }
      
      // 触发动画
      function triggerAnimation() {
        animatedElements.forEach(el => {
          if (isInViewport(el) && el.style.animationPlayState === 'paused') {
            el.style.opacity = '1'; // 显示元素
            el.style.animationPlayState = 'running'; // 播放动画
          }
        });
      }
      
      // 初始加载时检查一次
      triggerAnimation();
      
      // 监听滚动事件，实时检查
      window.addEventListener('scroll', triggerAnimation);
    });
    