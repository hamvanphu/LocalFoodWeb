import ImageWithFallback from "@/components/ui/ImageWithFallback";
import type { Dish } from "@/lib/types";

export default function DishCard({ dish, priority = false }: { dish: Dish; priority?: boolean }) {
  return (
    <article
      id={dish.slug}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-sm"
    >
      <ImageWithFallback
        slug={dish.slug}
        name={dish.name}
        images={dish.images}
        className="h-56 w-full"
        priority={priority}
      />

      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">
            {dish.name}
            {dish.isHero && (
              <span className="ml-2 rounded-full bg-chili/10 px-2 py-0.5 text-xs font-medium text-chili align-middle">
                Món đặc trưng
              </span>
            )}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {dish.tasteTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-muted px-2 py-0.5 text-xs text-ink/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-ink/80">{dish.description}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-herb">
              Nguyên liệu chính
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-ink/80">
              {dish.keyIngredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-herb">
              Cách làm sơ lược
            </h4>
            <ol className="mt-2 list-decimal space-y-1 pl-4 text-sm text-ink/80">
              {dish.prepOutline.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="rounded-xl bg-turmeric/10 p-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-amber">
            Cách ăn gợi ý
          </h4>
          <p className="mt-1 text-sm text-ink/80">{dish.howToEat}</p>
        </div>
      </div>
    </article>
  );
}
