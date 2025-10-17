export const metadata = {
  title: "Terms of Use",
  description: "What you can expect when browsing my portfolio.",
};

export default function TermsPage() {
  return (
    <main className="container py-16 space-y-10 text-white/80 text-legibility">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-emerald-300/80">
          Updated October 2025
        </p>
        <h1 className="text-3xl md:text-4xl font-serif text-white">Terms of Use</h1>
        <p>
          This site showcases my personal work and experience. Feel free to read,
          share links, and explore the projects. Please don’t reuse the code,
          copy the visual assets, or duplicate the text without permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-serif text-white">Acceptable use</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Browse the content for inspiration or evaluation.</li>
          <li>
            Reach out through the contact form with opportunities or questions.
          </li>
          <li>
            Avoid automated scraping, bulk downloading, or presenting the work as
            your own.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-serif text-white">Content ownership</h2>
        <p>
          All trademarks, screenshots, and descriptions of third-party products
          remain the property of their respective owners. Everything else on this
          site was created by me unless stated otherwise.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-serif text-white">Changes</h2>
        <p>
          I may update these terms as the site evolves. The latest version will
          always be published here, and continued use of the portfolio implies
          acceptance of any updates.
        </p>
      </section>
    </main>
  );
}
