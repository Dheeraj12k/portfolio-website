export const metadata = {
  title: "Privacy Policy",
  description: "How I handle the information shared through this portfolio.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container py-16 space-y-10 text-white/80 text-legibility">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-emerald-300/80">
          Updated October 2025
        </p>
        <h1 className="text-3xl md:text-4xl font-serif text-white">
          Privacy Policy
        </h1>
        <p>
          Thanks for visiting my portfolio. I only collect the information that
          you voluntarily submit through the contact form—your name, email
          address, and the message you send. That data is stored securely in my
          private database so I can reply to you directly. I never sell or share
          it with anyone else.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-serif text-white">
          What data is stored?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Your name (exactly as provided in the contact form).</li>
          <li>Your email address so I can respond.</li>
          <li>The body of your message.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-serif text-white">
          How is that information used?
        </h2>
        <p>
          I only use the data to respond to your enquiry or continue the
          conversation you initiated. There are no automated marketing emails,
          newsletters, or third-party tools processing your details right now.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-serif text-white">
          How can you request removal?
        </h2>
        <p>
          Just drop me a note at{" "}
          <a
            href="mailto:dheeraj1208.k@gmail.com"
            className="text-emerald-300 hover:text-emerald-200"
          >
            dheeraj1208.k@gmail.com
          </a>{" "}
          with the subject “Privacy request” and I’ll delete your message
          history.
        </p>
      </section>
    </main>
  );
}
