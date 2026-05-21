export default function HeroBackground() {
  return (
    <>
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)]
          bg-size-[90px_90px]
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,#080808_100%)]
        "
      />
    </>
  );
}
