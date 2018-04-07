const p = location.pathname;
window.location = `https://melonz.nl/blog${p.toLowerCase().replace('.html','').replace('.md','')}`
