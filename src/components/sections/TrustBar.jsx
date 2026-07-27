import { useCountUp } from "../../hooks/useCountUp";
import { STATS } from "../../utils/constants";

/**
 * Animated counters, triggered once on scroll-into-view (see useCountUp).
 * Sits directly under the hero as a dedicated trust signal — in the
 * original site these numbers were static text with no visual weight.
 */
export default function TrustBar() {
  return (
    <section className="relative -mt-1 bg-ink-900">
      <div className="container-kis grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 sm:py-14">
        {STATS.map((s) => (
          <Counter key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-3xl text-gold-400 sm:text-4xl">
        {current}
        {suffix}
      </p>
      <p className="mt-1.5 text-xs uppercase tracking-wide text-ink-200/70">{label}</p>
    </div>
  );
}
