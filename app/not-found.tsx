import NotFoundView from "@/components/pages/NotFoundView";

/**
 * `not-found` là một file duy nhất phục vụ cả `/` lẫn `/en`, và nó chạy ở server nên
 * không biết người dùng đang ở nhánh ngôn ngữ nào. Phần nội dung vì thế là client và tự
 * đọc URL — xem ghi chú ở `lib/useLocale.ts`.
 */
export default function NotFound() {
  return <NotFoundView />;
}
