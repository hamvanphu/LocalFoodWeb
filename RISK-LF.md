# [6] Risk List — Local Food

> Input: `EST-LF.md` (đã đóng Cổng hiểu bước [5], chốt Phương án A + checkpoint 2026-08-31).

| # | Rủi ro | Xác suất | Tác động | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Vượt deadline (PERT ~50.7h > quỹ PM ~30-40h) | Cao | Cao | Checkpoint bắt buộc hết ngày 2026-08-31: nếu nền tảng (W1-1→W1-9) chưa xong, tự động chuyển Phương án B (5 tỉnh) | PM |
| R2 | **[Rủi ro AI-sinh]** Hallucination nội dung ẩm thực — AI viết sai lệch văn hoá/công thức | Trung bình | Cao (uy tín nội dung) | `sourceRef` bắt buộc trong schema (ARCH); PM đọc + xác nhận nguồn trước khi coi 1 tỉnh là "xong", không chỉ đọc qua | PM |
| R3 | **[Rủi ro AI-sinh]** Rubber-stamping — PM duyệt bừa output AI, đặc biệt khi gấp deadline dễ có xu hướng bỏ qua Cổng hiểu | Trung bình (đã giảm nhiều qua phiên này) | Cao nếu tái diễn | Duy trì kỷ luật Cổng hiểu ở MỌI bước còn lại, kể cả khi gấp — đặc biệt bước [8] BUILD, nơi cám dỗ "để AI chạy nhanh cho kịp" cao nhất | PM |
| R4 | Ảnh Wikimedia thưa cho một số món đặc sản vùng miền (đã xác nhận: Bánh đa cua, Bún cá Nha Trang, Lẩu mắm, Bún cá Châu Đốc) | Cao (đã xảy ra thật) | Thấp (đã có fallback) | Placeholder gradient theo Design System (đã code ở `ImageWithFallback`) | AI (đã xử lý), PM (kiểm tra kết quả trông có ổn không) |
| R5 | Ảnh Wikimedia lỗi tải lúc runtime (đã xảy ra thật: 429 khi test dồn dập) | Trung bình | Trung bình (UI vỡ nếu không xử lý) | Fix GAP-01 (W1-8): `onError` fallback sang placeholder | AI |
| R6 | Chưa có MapTiler key thật, bản đồ dùng style demo dễ bị rate-limit | Trung bình | Trung bình | PM đăng ký key sớm (song song, không chặn code); AI dùng style demo làm fallback có sẵn | PM |
| R7 | **[Rủi ro AI-sinh]** Rò rỉ secret (API key) vào code/git commit | Thấp | Cao nếu xảy ra | `.env.local` đã trong `.gitignore`; đã kiểm tra không commit key thật nào (hiện tại rỗng); AI không tự điền giá trị secret thay PM | AI + PM (review trước khi push nếu có remote sau này) |
| R8 | Wishlist (phase-2) mất dữ liệu khi đổi thiết bị/xoá cache (localStorage) | Trung bình (chỉ phát sinh khi build tính năng này) | Trung bình | **Chưa chốt mitigation cụ thể** — khi tới lúc code US-09, cân nhắc export/import JSON thủ công (nhẹ, không cần backend) thay vì chấp nhận mất trắng; PM quyết định lúc đó, không quyết vội bây giờ vì ngoài MVP 2 tuần | PM (quyết định khi bắt tay US-09) |
| R9 | Nhạy cảm ranh giới hành chính trước/sau sáp nhập 2025 | Thấp | Thấp (dự án học thuật) | Ghi rõ context "bản đồ dùng ranh giới trước sáp nhập 2025" là theo yêu cầu đề bài (đủ độ chi tiết địa lý cho nội dung ẩm thực vùng miền), không phải quan điểm chính trị | PM |
| R10 | **[Mới, sau D3]** Spam/troll/nội dung phản cảm trên review công khai — không có auth, không kiểm duyệt trước khi đăng | Cao (form công khai ẩn danh luôn bị spam bot/troll sớm muộn) | Trung bình (uy tín trang, trải nghiệm người đọc) | Giảm thiểu tối thiểu cho 2 tuần: giới hạn độ dài comment, chặn gửi lặp nhanh (debounce/localStorage flag phía client — không hoàn hảo nhưng chặn bot đơn giản), PM tự ẩn (`status='hidden'`) qua Supabase dashboard khi phát hiện. **Không có kiểm duyệt trước khi đăng (pre-moderation)** — chấp nhận rủi ro này cho bản nộp bài, ghi rõ là hạn chế đã biết | PM (theo dõi thủ công), AI (rào chắn kỹ thuật tối thiểu) |
| R11 | **[Mới, sau D3]** Thiếu RLS (Row Level Security) trên bảng Supabase → anon key lộ trong code client cho phép đọc/ghi/xoá toàn bộ dữ liệu | Thấp nếu làm đúng quy trình, **Cao nếu quên** | Cao (mất/hỏng toàn bộ dữ liệu review) | Bật RLS + viết policy đúng (`ARCH-LF.md` D3) là điều kiện **bắt buộc** trước khi đưa tính năng lên, không phải fast-follow | AI (code policy), PM (xác nhận đã bật RLS trên Supabase dashboard trước khi coi tính năng "xong") |
| R12 | **[Mới, W1-11b]** Trang chủ không đạt NFR "LCP < 2.5s" do MapLibre GL JS (thư viện bản đồ WebGL) tự thân nặng ~700KB-1MB script, chiếm 6-10s scripting lúc khởi tạo | Cao (đã đo được, không phải suy đoán) | Trung bình (UX vẫn dùng được, chỉ điểm Lighthouse xấu) | Chấp nhận đánh đổi — bản đồ là tính năng lõi bắt buộc theo đề bài, không thể bỏ để đạt điểm đẹp hơn. Đã tối ưu phần trong tầm kiểm soát (ảnh marker giảm 14MB→211KB). Ghi rõ trong `PERFORMANCE-LF.md`, không che giấu ở hồ sơ viva | PM (chấp nhận rủi ro), AI (đã tối ưu phần khả thi) |

---

## 🔒 Cổng hiểu — bước [6] (chung với `DELEGATION-MAP-LF.md`)

Xem cổng hiểu ở cuối `DELEGATION-MAP-LF.md` — 2 artefact này dùng chung 1
cổng vì cùng thuộc bước [6] theo Capstone Playbook.
