// ===== 全局变量 =====
let currentTheme = localStorage.getItem("theme") || "light";

// ===== DOM加载完成后初始化 =====
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  initNavigation();
  initSearch();
  initCategoryToggle();
  initSmoothScroll();
});

// ===== 主题切换 =====
function initTheme() {
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  // 设置初始主题
  body.setAttribute("data-theme", currentTheme);
  updateThemeIcon();

  // 主题切换事件
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeIcon = document.querySelector(".theme-toggle i");
  if (themeIcon) {
    themeIcon.className =
      currentTheme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}

// ===== 导航栏 =====
function initNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    // 点击导航链接时关闭移动端菜单
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }

  // 滚动时改变导航栏样式
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".site-nav");
    if (nav) {
      if (window.scrollY > 50) {
        nav.style.background =
          currentTheme === "light"
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(15, 23, 42, 0.95)";
      } else {
        nav.style.background =
          currentTheme === "light"
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(15, 23, 42, 0.9)";
      }
    }
  });
}

// ===== 搜索功能 =====
function initSearch() {
  const searchToggle = document.querySelector(".search-toggle");
  const searchModal = document.getElementById("searchModal");
  const searchClose = document.getElementById("searchClose");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchOverlay = document.querySelector(".search-overlay");

  if (!searchToggle || !searchModal) return;

  // 打开搜索模态框
  searchToggle.addEventListener("click", function () {
    searchModal.classList.add("active");
    searchInput.focus();
  });

  // 关闭搜索模态框
  function closeSearch() {
    searchModal.classList.remove("active");
    searchInput.value = "";
    searchResults.innerHTML =
      '<div class="search-placeholder"><i class="fas fa-search"></i><p>输入关键词开始搜索</p></div>';
  }

  searchClose.addEventListener("click", closeSearch);
  searchOverlay.addEventListener("click", closeSearch);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && searchModal.classList.contains("active")) {
      closeSearch();
    }
  });

  // 搜索功能
  let searchTimeout;
  searchInput.addEventListener("input", function () {
    const query = this.value.trim();

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (query.length > 0) {
        performSearch(query);
      } else {
        searchResults.innerHTML =
          '<div class="search-placeholder"><i class="fas fa-search"></i><p>输入关键词开始搜索</p></div>';
      }
    }, 300);
  });
}

function performSearch(query) {
  const searchResults = document.getElementById("searchResults");

  if (!window.searchData) {
    searchResults.innerHTML =
      '<div class="search-placeholder"><p>搜索数据未加载</p></div>';
    return;
  }

  const results = window.searchData.filter((post) => {
    const searchText = (
      post.title +
      " " +
      post.content +
      " " +
      post.categories.join(" ") +
      " " +
      post.tags.join(" ")
    ).toLowerCase();
    return searchText.includes(query.toLowerCase());
  });

  if (results.length === 0) {
    searchResults.innerHTML =
      '<div class="search-placeholder"><p>未找到相关文章</p></div>';
    return;
  }

  const resultsHTML = results
    .map(
      (post) => `
        <div class="search-result-item" style="padding: 1rem; border-bottom: 1px solid var(--border-color);">
            <h3 style="margin-bottom: 0.5rem;">
                <a href="${
                  post.url
                }" style="color: var(--text-color); text-decoration: none;">
                    ${highlightText(post.title, query)}
                </a>
            </h3>
            <p style="color: var(--text-light); margin-bottom: 0.5rem; font-size: 0.875rem;">
                ${highlightText(post.content, query)}
            </p>
            <div style="display: flex; gap: 1rem; font-size: 0.75rem; color: var(--text-muted);">
                <span>${post.date}</span>
                ${
                  post.categories.length > 0
                    ? `<span>分类: ${post.categories.join(", ")}</span>`
                    : ""
                }
            </div>
        </div>
    `
    )
    .join("");

  searchResults.innerHTML = resultsHTML;
}

function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(
    regex,
    '<mark style="background-color: var(--primary-color); color: white; padding: 0.1rem 0.2rem; border-radius: 0.2rem;">$1</mark>'
  );
}

// ===== 分类页面展开/收起 =====
function initCategoryToggle() {
  const showMoreButtons = document.querySelectorAll(".show-more-posts");

  showMoreButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const category = this.getAttribute("data-category");
      const allPosts = document.getElementById(`all-${category}`);
      const categoryCard = document.getElementById(category);
      const categoryPosts = categoryCard.querySelector(".category-posts");

      if (allPosts.style.display === "none" || !allPosts.style.display) {
        allPosts.style.display = "block";
        categoryPosts.appendChild(allPosts);
        this.textContent = "收起";
      } else {
        allPosts.style.display = "none";
        this.textContent = `查看更多 (${allPosts.children.length} 篇)`;
      }
    });
  });
}

// ===== 平滑滚动 =====
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 100; // 考虑固定导航栏的高度

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// ===== 工具函数 =====

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// 返回顶部功能
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// 延迟加载图片
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// 初始化延迟加载
document.addEventListener("DOMContentLoaded", lazyLoadImages);
