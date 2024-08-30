import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export const featureItems = [
  {
    name: "Admin Online Shop",
    description:
      "Permudah dan percepat pengecekan ongkir dan lacak resi dengan aplikasi RajaOngkir, solusi ideal untuk admin toko online dalam merespon calon pembeli.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Pebisnis Online",
    description:
      "Nikmati kemudahan pengiriman COD & Non-COD serta pengelolaan kendala pengiriman dengan aplikasi Komship, lengkap dengan diskon ongkir 25%-45% dan flat ongkir untuk pemilik bisnis online.",
    icon: LockClosedIcon,
  },
  {
    name: "Programer",
    description:
      "RajaOngkir menyediakan API komprehensif untuk cek ongkos kirim, lacak resi, kirim barang, COD, dan penanganan kendala pengiriman. Integrasikan ke dalam toko online, aplikasi mobile, atau sistem apapun sesuai kreativitas Kamu. Pelajari dan daftar sekarang untuk mendapatkan API Key dan mulai gunakan API RajaOngkir! Ini akan membuat bisnis Kamu lebih efisien dan mudah dikelola!",
    icon: ServerIcon,
  },
];

export const heroContent = {
  title: "RajaOngkir: Rajanya Ongkos Kirim Terpadu",
  description:
    "RajaOngkir merupakan sebuah layanan yang menyediakan informasi ongkos kirim, serta Open API pengiriman barang dan COD berbagai kurir di Indonesia seperti POS Indonesia, JNE, TIKI, J&T, IDexpress, SAP, Ninja, dan SiCepat.",
  ctaButtonLabel: "Periksa Ongkir & Lacak Paket",
};

export const featureContent = {
  title: "Target",
  subTitle: "Sesuaikan dengan kebutuhan Anda",
  description:
    "Raja Ongkir berkomitmen untuk menyediakan kebutuhan dan mempermudah Admin Online Shop, Pebisnis Online, dan Programer untuk menyediakan informasi Ongkos Kirim Pengiriman Barang",
};

export const headerNavigation = [
  { name: "Periksa Ongkir & Lacak Paket", href: "/periksa-dan-lacak-paket" },
  { name: "Login", href: "/login" },
];

export const headerBlackListPath = ["/login", "/periksa-dan-lacak-paket"];
export const footerBlackListPath = ["/login", "/periksa-dan-lacak-paket"];
export const logoKurirDomestik = [
  "https://storage.googleapis.com/komerce/assets/LP-Komship/JNE.svg",
  "https://storage.googleapis.com/komerce/rajaongkir/pos.jpg",
  "https://storage.googleapis.com/komerce/rajaongkir/esl.jpg",
  "https://storage.googleapis.com/komerce/rajaongkir/tiki.jpg",
  "https://storage.googleapis.com/komerce/rajaongkir/pcp.jpg",
  "https://storage.googleapis.com/komerce/rajaongkir/rpx.jpg",
];

export const logoKurirInternational = [
  "https://4.bp.blogspot.com/-pDkLCuqPJy4/WmoddcsTDbI/AAAAAAAAAVA/zjQfPv-jthUpgPxuxqiPKDSdP5f43xu8gCLcBGAs/s1600/pos.jpg",
  "https://storage.googleapis.com/komerce/rajaongkir/tiki.jpg",
];
