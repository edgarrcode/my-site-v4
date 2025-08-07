export default function Hero() {
  return (
    <section className="hero">
        <p className="max-w-(--breakpoint-md) text-lg/7 font-medium text-gray-900 max-sm:px-4 dark:text-gray-400">Edgar E. Rodriguez</p>
        <h1 className="text-4xl tracking-tighter text-balance max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl">
          Digital products design, development, & strategy.
        </h1>
        <p className="font-mono">
          I am an experienced design technologist who helps businesses achieve their goals through the strategic implementation of digital products.
        </p>
        <ol className="font-mono list-inside list-decimal text-sm/6 sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
    </section>
  );
}