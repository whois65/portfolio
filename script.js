const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const current = localStorage.getItem('theme') || 'dark';
    if(current === 'light'){
      root.style.setProperty('--bg','#f7fafc');root.style.setProperty('--card','#ffffff');root.style.setProperty('--muted','#4b5563');document.body.style.background='linear-gradient(180deg,#ffffff,#f1f5f9)';toggle.textContent='🌞'
    }
    toggle.addEventListener('click',() => {
      if(localStorage.getItem('theme') === 'light'){
        localStorage.setItem('theme','dark');location.reload();
      } else {localStorage.setItem('theme','light');location.reload();}
    })

    // entrance animation
    document.querySelectorAll('.fade-up').forEach((el,i)=>{el.style.animationDelay=(i*80)+'ms'});
