import {name as displayName} from '@root/app';

export default {
  displayName,

  // UI Component
  'ui.loading': 'Sedang memuat...',
  'ui.error': 'Terjadi kesalahan',
  'ui.success': 'Berhasil',
  'ui.cancel': 'Batal',
  'ui.ok': 'OK',
  'ui.confirm': 'Konfirmasi',

  // Splash Screen
  'splashScreen.title': `Selamat datang di ${displayName}`,
  'splashScreen.subtitle':
    'Ini adalah template starter sederhana untuk React Native',

  // Login Screen
  'auth.login.placeholder': 'Masukkan {field}',
  'auth.login.or': 'atau',
  'auth.login.username': 'Nama pengguna',
  'auth.login.password': 'Kata sandi',
  'auth.login.login': 'Masuk',
  'auth.login.failedLogin': 'Gagal masuk',
  'auth.login.register': 'Daftar',

  // Register Screen
  'auth.register.or': 'atau',
  'auth.register.register': 'Gabung Sekarang',
  'auth.register.login': 'Masuk',
  'auth.register.title': 'Daftar dan mulai',
  'auth.register.subtitle': 'Silakan isi formulir di bawah ini',
  'auth.register.username': 'Nama pengguna',
  'auth.register.email': 'Alamat email',
  'auth.register.password': 'Kata sandi',
  'auth.register.confirmPassword': 'Konfirmasi kata sandi',
  'auth.register.phone': 'Nomor telepon',
  'auth.register.name': 'Nama Lengkap',
  'auth.register.placeholder.username': 'john.doe',
  'auth.register.placeholder.email': 'john.doe@email.com',
  'auth.register.placeholder.password': '********',
  'auth.register.placeholder.confirmPassword': '********',
  'auth.register.placeholder.phone': '081234567890',
  'auth.register.placeholder.name': 'John Doe',

  // dashboard
  'dasboard.title': 'Halo {name}',
  'dasboard.subtitle': 'Satu langkah menuju kehidupan yang lebih baik',
};
