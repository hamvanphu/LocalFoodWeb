import type { Locale } from "./locale";

/**
 * Chuỗi giao diện hai ngôn ngữ.
 *
 * Cố ý dùng object phẳng thay vì kéo thư viện i18n: dự án chỉ có 2 ngôn ngữ và ~40 chuỗi,
 * thêm một phụ thuộc nữa chỉ để tra khoá là không đáng — và bản đồ đã là phần nặng nhất
 * của bundle rồi (rủi ro R12).
 *
 * Quy ước: tên món, tên tỉnh, tên quần đảo KHÔNG nằm ở đây — chúng luôn giữ tiếng Việt.
 */
const strings = {
  vi: {
    "nav.allProvinces": "Tất cả tỉnh",
    "nav.recommend": "Trưa nay ăn gì?",

    "rec.title": "Trưa nay ăn gì?",
    "rec.lead": "Bấm một nút, nhận hai món hợp bữa trưa kèm luôn công thức. Không phải rà 197 món.",
    "rec.reroll": "Đổi món khác",
    "rec.rerolling": "Đang bốc…",
    "rec.poolNote": "Bốc từ {n} món ăn no được. Món nhậu, ăn vặt, tráng miệng và đặc sản mua về làm quà đã được loại khỏi danh sách này.",
    "rec.limitTitle": "Gợi ý MÓN, không phải gợi ý QUÁN",
    "rec.limitBody": "Trang này không có giá, địa chỉ hay khoảng cách — nó nói bạn nên ăn món gì, không nói ăn ở đâu. Phân loại món là phán đoán của người biên tập, không phải chuẩn dinh dưỡng.",
    "rec.empty": "Chưa có món nào trong danh sách gợi ý. Có thể dữ liệu phân loại chưa xong.",
    "rec.seeProvince": "Xem trang {name}",
    "rec.optionA": "Món thứ nhất",
    "rec.optionB": "Món thứ hai",

    "flag.cay": "cay",
    "flag.monNuoc": "món nước",
    "flag.chayDuoc": "chay được",
    "flag.nangMui": "nặng mùi",
    "flag.nhieuDauMo": "nhiều dầu mỡ",
    "nav.search": "Tìm món ăn, tỉnh thành…",
    "nav.clearSearch": "Xoá tìm kiếm",
    "search.empty": "Không tìm thấy món ăn hay tỉnh nào khớp",

    "hero.headline": "Bản đồ ẩm thực",
    "hero.headlineAccent": "Việt Nam",
    "hero.body": "Khám phá món ăn đặc trưng của từng tỉnh thành — bấm vào một điểm trên bản đồ để xem công thức, nguyên liệu và cách thưởng thức chuẩn vị địa phương.",
    "hero.cta": "Bắt đầu khám phá",

    "home.highlights": "Tỉnh nổi bật",
    "home.highlightsHint": "Chưa quen thao tác bản đồ? Bấm thẳng vào tỉnh bạn muốn khám phá bên dưới.",
    "home.viewAll": "Xem tất cả {n} tỉnh",
    "home.recentReviews": "Cảm nhận mới nhất",
    "home.recentReviewsHint": "Đánh giá gần đây từ người ghé thăm. Bạn cũng có thể chấm sao ở trang từng món.",

    "map.hint": "Bấm vào một điểm để khám phá món ăn",
    "map.loading": "Đang tải bản đồ…",
    "map.zoomIn": "Phóng to",
    "map.zoomOut": "Thu nhỏ",
    "map.reset": "Về toàn cảnh Việt Nam",

    "dish.hero": "Món đặc trưng",

    // Khẩu vị: giá trị trong data là slug tiếng Anh (TASTE_TAGS) — chỉ đổi cách HIỂN THỊ,
    // không đụng 63 file dữ liệu. Bản EN cũng đi qua đây để bỏ dấu gạch nối.
    "taste.spicy": "cay",
    "taste.sour": "chua",
    "taste.sweet": "ngọt",
    "taste.savory": "đậm đà",
    "taste.herb-forward": "nhiều rau thơm",
    "taste.street-food": "ăn đường phố",
    "taste.noodle-soup": "món nước",
    "taste.grilled": "nướng",
    "taste.seafood": "hải sản",
    "taste.vegetarian-friendly": "hợp ăn chay",
    "dish.zoom": "Phóng to ảnh {name}",

    "occasion.Quanh năm": "Quanh năm",
    "occasion.Mùa xuân": "Mùa xuân",
    "occasion.Mùa hè": "Mùa hè",
    "occasion.Mùa thu": "Mùa thu",
    "occasion.Mùa đông": "Mùa đông",
    "occasion.Tết Nguyên Đán": "Tết Nguyên Đán",
    "occasion.Tết Trung Thu": "Tết Trung Thu",

    "region.Bắc": "Miền Bắc",
    "region.Trung": "Miền Trung",
    "region.Nam": "Miền Nam",

    "province.backToMap": "Quay lại bản đồ",
    "province.dishes": "Món ăn đặc trưng",
    "province.overview": "Tổng quan",
    "province.journey": "Hành trình",
    "province.source": "Nguồn tham chiếu:",
    "province.ingredients": "Nguyên liệu chính",
    "province.steps": "Cách làm sơ lược",
    "province.howToEat": "Cách ăn gợi ý",

    "browse.title": "Tất cả tỉnh thành",
    "browse.intro": "Hiện có {n}/63 tỉnh thành trước sáp nhập đã có dữ liệu món ăn — danh sách sẽ mở rộng dần.",
    "browse.filter": "Lọc theo mùa/lễ hội:",
    "browse.emptyFilter": "Chưa có tỉnh nào gắn dịp “{occasion}” — thử bỏ lọc hoặc chọn dịp khác.",
    "browse.groupCount": "({n} tỉnh)",
    "card.heroDish": "Món tiêu biểu:",

    "review.title": "Đánh giá món này",
    "review.tabReview": "Đánh giá món",
    "review.tabReport": "Báo nội dung sai",
    "review.prompt": "Bạn thấy món này thế nào?",
    "review.name": "Tên của bạn",
    "review.comment": "Cảm nhận của bạn (không bắt buộc)",
    "review.reportPlaceholder": "Sai ở chỗ nào? (bắt buộc)",
    "review.submit": "Gửi đánh giá",
    "review.submitReport": "Gửi báo lỗi",
    "review.sending": "Đang gửi…",
    "review.thanks": "Cảm ơn bạn đã đánh giá!",
    "review.reportThanks": "Đã gửi tới người quản trị. Cảm ơn bạn đã giúp nội dung chính xác hơn!",
    "review.none": "Chưa có đánh giá nào cho món này — bạn là người đầu tiên nhé!",
    "review.loading": "Đang tải đánh giá…",
    "review.loadError": "Chưa tải được đánh giá lúc này. Nội dung món ăn phía trên vẫn xem bình thường.",
    "review.count": "({n} đánh giá)",
    "review.kindLabel": "Loại phản hồi",
    "review.reportPrompt": "Mô tả giúp chỗ sai — báo lỗi gửi riêng tới người quản trị, không hiện công khai.",
    "review.reportLead": "Thấy thông tin chưa đúng về",
    "review.rateLabel": "Chấm điểm cho {name}",
    "review.avgLabel": "Trung bình {avg} trên 5 sao",
    "review.commentLabel": "Bình luận",
    "review.reportLabel": "Mô tả chỗ sai",
    "review.chars": "{n}/{max} ký tự",
    "review.cooldownReport": "Bạn vừa báo lỗi cho món này. Đợi một chút rồi thử lại nhé.",
    "review.cooldownReview": "Bạn vừa gửi đánh giá cho món này. Đợi một chút rồi thử lại nhé.",
    "review.failed": "Gửi đánh giá thất bại.",

    "validate.needName": "Hãy nhập tên của bạn.",
    "validate.nameTooLong": "Tên tối đa {max} ký tự.",
    "validate.commentTooLong": "Nội dung tối đa {max} ký tự.",
    "validate.reportTooShort": "Hãy mô tả chỗ sai (ít nhất {min} ký tự) để chúng tôi sửa được.",
    "validate.needStars": "Hãy chọn số sao từ 1 đến 5.",

    "time.justNow": "vừa xong",
    "time.minutes": "{n} phút trước",
    "time.hours": "{n} giờ trước",
    "time.days": "{n} ngày trước",

    "notFound.title": "Không tìm thấy tỉnh này trên bản đồ",
    "notFound.body": "Trang bạn tìm không tồn tại — có thể tỉnh này chưa có dữ liệu, hoặc đường dẫn bị gõ sai. Quay lại bản đồ để khám phá các tỉnh đã có nhé.",
    "notFound.cta": "Về bản đồ ẩm thực",

    "footer.telemetry": "Telemetry — cách dự án này được xây",
    "footer.about": "Dự án cá nhân giới thiệu ẩm thực địa phương Việt Nam. Ảnh món ăn dùng nguồn Wikimedia Commons theo giấy phép Creative Commons, ghi chú nguồn tại từng ảnh. Mỗi món đều kèm nguồn tham chiếu để bạn tự đối chiếu — nếu thấy thông tin chưa đúng, dùng nút",
    "footer.aboutEnd": "ở trang món ăn để chúng tôi sửa.",

    "image.failed": "Ảnh tạm thời không tải được",
    "image.pending": "Ảnh minh hoạ đang cập nhật",
    "image.close": "Đóng ảnh",
    "sheet.close": "Đóng",

    "lang.switchTo": "English",
    "lang.label": "Ngôn ngữ",
  },

  en: {
    "nav.allProvinces": "All provinces",
    "nav.recommend": "What's for lunch?",

    "rec.title": "What's for lunch?",
    "rec.lead": "One tap, two dishes that work for a workday lunch — recipe included. No scrolling through 197 of them.",
    "rec.reroll": "Show me two others",
    "rec.rerolling": "Picking…",
    "rec.poolNote": "Picked from {n} dishes substantial enough to be lunch. Drinking food, snacks, desserts and take-home specialities are excluded from this pool.",
    "rec.limitTitle": "This suggests a DISH, not a RESTAURANT",
    "rec.limitBody": "No prices, addresses or distances here — it tells you what to eat, not where. The classification is an editor's judgement, not a nutritional standard.",
    "rec.empty": "No dishes in the suggestion pool yet. The classification data may be incomplete.",
    "rec.seeProvince": "Open {name}",
    "rec.optionA": "First option",
    "rec.optionB": "Second option",

    "flag.cay": "spicy",
    "flag.monNuoc": "soupy",
    "flag.chayDuoc": "vegetarian-friendly",
    "flag.nangMui": "strong-smelling",
    "flag.nhieuDauMo": "rich / fried",
    "nav.search": "Search dishes or provinces…",
    "nav.clearSearch": "Clear search",
    "search.empty": "No dish or province matches",

    // Tách dòng tiêu đề làm hai để phần nhấn màu rơi đúng vào tên nước ở cả hai ngôn ngữ
    "hero.headline": "A food map of",
    "hero.headlineAccent": "Vietnam",
    "hero.body": "Explore the signature dish of every province — tap a marker on the map to see the ingredients, the method, and how locals actually eat it.",
    "hero.cta": "Start exploring",

    "home.highlights": "Featured provinces",
    "home.highlightsHint": "New to the map? Jump straight into a province below.",
    "home.viewAll": "See all {n} provinces",
    "home.recentReviews": "Recent impressions",
    "home.recentReviewsHint": "Recent reviews from visitors. You can rate any dish on its own page.",

    "map.hint": "Tap a marker to explore its dish",
    "map.loading": "Loading the map…",
    "map.zoomIn": "Zoom in",
    "map.zoomOut": "Zoom out",
    "map.reset": "Back to full view of Vietnam",

    "dish.hero": "Signature dish",

    "taste.spicy": "spicy",
    "taste.sour": "sour",
    "taste.sweet": "sweet",
    "taste.savory": "savoury",
    "taste.herb-forward": "herb-forward",
    "taste.street-food": "street food",
    "taste.noodle-soup": "noodle soup",
    "taste.grilled": "grilled",
    "taste.seafood": "seafood",
    "taste.vegetarian-friendly": "vegetarian-friendly",
    "dish.zoom": "Enlarge photo of {name}",

    // Mùa dịch bình thường, nhưng hai cái Tết giữ nguyên: đây là tên lễ riêng của Việt Nam,
    // "Lunar New Year" đúng nghĩa nhưng mất tên gọi — theo đúng nguyên tắc của glossary.
    "occasion.Quanh năm": "All year round",
    "occasion.Mùa xuân": "Spring",
    "occasion.Mùa hè": "Summer",
    "occasion.Mùa thu": "Autumn",
    "occasion.Mùa đông": "Winter",
    "occasion.Tết Nguyên Đán": "Tết Nguyên Đán (Lunar New Year)",
    "occasion.Tết Trung Thu": "Tết Trung Thu (Mid-Autumn Festival)",

    // Tên vùng dịch được vì đây là phương hướng địa lý, không phải danh từ riêng ẩm thực
    "region.Bắc": "Northern Vietnam",
    "region.Trung": "Central Vietnam",
    "region.Nam": "Southern Vietnam",

    "province.backToMap": "Back to the map",
    "province.dishes": "Signature dishes",
    "province.overview": "Overview",
    "province.journey": "Walkthrough",
    "province.source": "Sources:",
    "province.ingredients": "Key ingredients",
    "province.steps": "How it is made",
    "province.howToEat": "How to eat it",

    "browse.title": "All provinces",
    "browse.intro": "{n} of the 63 pre-2025 provinces have dish data so far — the list keeps growing.",
    "browse.filter": "Filter by season or festival:",
    "browse.emptyFilter": "No province is tagged for “{occasion}” — clear the filter or pick another one.",
    "browse.groupCount": "({n} provinces)",
    "card.heroDish": "Signature dish:",

    "review.title": "Rate this dish",
    "review.tabReview": "Rate the dish",
    "review.tabReport": "Report wrong content",
    "review.prompt": "What did you think of it?",
    "review.name": "Your name",
    "review.comment": "Your thoughts (optional)",
    "review.reportPlaceholder": "What is wrong? (required)",
    "review.submit": "Submit review",
    "review.submitReport": "Send report",
    "review.sending": "Sending…",
    "review.thanks": "Thanks for your review!",
    "review.reportThanks": "Sent to the site owner. Thanks for helping keep this accurate!",
    "review.none": "No reviews yet — be the first!",
    "review.loading": "Loading reviews…",
    "review.loadError": "Reviews could not load right now. The dish content above is unaffected.",
    "review.count": "({n} reviews)",
    "review.kindLabel": "Type of feedback",
    "review.reportPrompt": "Tell us what is wrong — reports go privately to the site owner and are not shown publicly.",
    "review.reportLead": "Spotted something inaccurate about",
    "review.rateLabel": "Rate {name}",
    "review.avgLabel": "Average {avg} out of 5 stars",
    "review.commentLabel": "Comment",
    "review.reportLabel": "Describe the error",
    "review.chars": "{n}/{max} characters",
    "review.cooldownReport": "You just reported this dish. Give it a moment before trying again.",
    "review.cooldownReview": "You just reviewed this dish. Give it a moment before trying again.",
    "review.failed": "Could not submit your review.",

    "validate.needName": "Please enter your name.",
    "validate.nameTooLong": "Name can be at most {max} characters.",
    "validate.commentTooLong": "Text can be at most {max} characters.",
    "validate.reportTooShort": "Please describe what is wrong (at least {min} characters) so we can fix it.",
    "validate.needStars": "Please pick a rating from 1 to 5 stars.",

    "time.justNow": "just now",
    "time.minutes": "{n} min ago",
    "time.hours": "{n} h ago",
    "time.days": "{n} d ago",

    "notFound.title": "That province is not on the map",
    "notFound.body": "This page does not exist — the province may not have data yet, or the address was mistyped. Head back to the map to see what is there.",
    "notFound.cta": "Back to the food map",

    "footer.telemetry": "Telemetry — how this project was built",
    "footer.about": "A personal project introducing Vietnam's regional food. Dish photos come from Wikimedia Commons under Creative Commons licences, credited on each image. Every dish carries its reference sources so you can check them yourself — if something looks wrong, use the",
    "footer.aboutEnd": "button on the dish page and we will fix it.",

    "image.failed": "Image could not load right now",
    "image.pending": "Photo coming soon",
    "image.close": "Close photo",
    "sheet.close": "Close",

    "lang.switchTo": "Tiếng Việt",
    "lang.label": "Language",
  },
} as const;

export type StringKey = keyof (typeof strings)["vi"];

/** Lấy chuỗi giao diện. `vars` để thay `{n}` — tránh phải nối chuỗi rải rác trong JSX. */
export function t(
  locale: Locale,
  key: StringKey,
  vars?: Record<string, string | number>,
): string {
  const raw: string = strings[locale][key] ?? strings.vi[key] ?? key;
  if (!vars) return raw;
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    raw,
  );
}
