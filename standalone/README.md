# A Cup of Coffee — Standalone Project

Cách chạy trên VSCode:

## 1. Tạo project mới

```bash
mkdir a-cup-of-coffee
cd a-cup-of-coffee
```

## 2. Copy tất cả file từ thư mục `standalone/` vào project

Copy toàn bộ nội dung thư mục `standalone/` (trên nền tảng Base44) vào máy bạn, giữ nguyên cấu trúc:

```
a-cup-of-coffee/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── CartContext.jsx
    ├── data/
    │   └── menuData.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── MenuSection.jsx
        ├── Tabs.jsx
        ├── AboutSection.jsx
        ├── VisitSection.jsx
        ├── Footer.jsx
        └── CartPanel.jsx
```

## 3. Cài đặt và chạy

```bash
npm install
npm run dev
```

Mở trình duyệt tại **http://localhost:5173**

## Lưu ý

- Project này KHÔNG dùng Base44 SDK — chạy hoàn toàn độc lập
- Không có auth, không có backend — chỉ là giao diện tĩnh
- Giỏ hàng dùng React state (mất khi refresh trang)