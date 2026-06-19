import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-navy-900">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-extrabold text-gold-500">
              ScaleWise
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Connecting businesses with verified experts for consultancy,
              business coaching and leadership development.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Platform</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Find Experts</li>
              <li>Become an Expert</li>
              <li>Industries</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Company</h3>

            <ul className="space-y-3 text-slate-400">
              <li>About</li>
              <li>FAQ</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Contact</h3>

            <ul className="space-y-3 text-slate-400">
              <li>support@scalewise.co.ke</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} ScaleWise. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
