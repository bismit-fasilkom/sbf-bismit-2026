import { redirect } from 'next/navigation';

/**
 * Halaman alias untuk Modul Pembelajaran JavaScript (10 Menit).
 * Mengarahkan langsung ke rute dokumentasi terstruktur Fumadocs.
 */
export default function ModulJsPage() {
  redirect('/docs/javascript-fundamentals');
}
