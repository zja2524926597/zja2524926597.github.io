let themeFunc = async function() {
    let btn = document.getElementById("theme-btn");
    let root = document.documentElement;

    // 图标切换函数
    function updateThemeIcons() {
        const isDark = root.getAttribute('theme') === 'dark';
        document.querySelectorAll('.theme-sensitive-icon').forEach(img => {
            img.src = isDark ? img.dataset.dark : img.dataset.light;
        });
    }

    // 初始化时先设置一次
    updateThemeIcons();

    btn.addEventListener('click', e => {
        if (root.getAttribute('theme') == 'dark') {
            root.setAttribute('theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            root.setAttribute('theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateThemeIcons(); // 切换完之后更新图标
    });
};
themeFunc();

