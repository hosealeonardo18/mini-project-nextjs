# Product Search

Aplikasi frontend pencarian produk berbasis **Next.js** yang terhubung ke backend **Express.js**.

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- Express.js — Backend API (terpisah)

## Fitur

- Pencarian produk realtime berdasarkan nama
- Debounce 500ms agar tidak terlalu banyak request ke server
- Tombol clear (✕) untuk reset pencarian
- Menampilkan nama, harga, dan stok produk

## Prasyarat

- Node.js >= 18
- Backend Express.js berjalan (lihat bagian konfigurasi)

## Instalasi

```bash
git clone https://github.com/hosealeonardo18/mini-project-nextjs.git
cd mini-project-nextjs
npm install
```

## Konfigurasi

Buat file `.env` di root project:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:4001
```

Sesuaikan port dengan backend.

## Menjalankan Aplikasi

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Folder

```
app/
├── components/
│   ├── ProductSearch.jsx   # Komponen utama pencarian
│   └── ProductCard.jsx     # Card per produk
├── layout.jsx              # Root layout
└── page.jsx                # Halaman utama
next.config.mjs             # Konfigurasi rewrites ke backend
.env                        # Environment variable (tidak di-commit)
```

## Konfigurasi Proxy (CORS)

Request ke backend di-proxy melalui Next.js via `next.config.js` sehingga tidak kena CORS:

```js
async rewrites() {
    return [
        {
            source: "/api/:path*",
            destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/:path*`,
        },
    ];
}
```

## API Endpoint

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/v1/products` | Ambil semua produk |
| GET | `/api/v1/products?search=nama` | Cari produk berdasarkan nama |

## Build Production

```bash
npm run build
npm start
```