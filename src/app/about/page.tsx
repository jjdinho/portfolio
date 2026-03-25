export default function About() {
  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight mb-8">About</h1>
      <div className="prose prose-invert max-w-none">
        <p>
          I&apos;m Jake Johnson.
          Here is where I write. Expansively expanding interests. No AI-generated content (but this blog was built by Claude).
        </p>
        <p>
          You can find me on{" "}
          <a href="https://x.com/jakesjohnson" target="_blank">Twitter</a> and{" "}
          <a href="https://www.linkedin.com/in/jake-s-johnson" target="_blank">LinkedIn</a>.
        </p>
        <p>
          Trying to build better product analytics without losing my soul, at{" "}
          <a href="https://sessionvision.com" target="_blank">sessionvision.com</a>.
        </p>
      </div>
    </section>
  );
}
