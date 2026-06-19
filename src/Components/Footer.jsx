import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-extrabold text-emerald-600">
              ScaleWise
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Connecting businesses with verified experts for consultancy,
              business coaching and leadership development.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Platform</h3>

            <ul className="space-y-3 text-slate-600">
              <li>Find Experts</li>
              <li>Become an Expert</li>
              <li>Industries</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Company</h3>

            <ul className="space-y-3 text-slate-600">
              <li>About</li>
              <li>FAQ</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Contact</h3>

            <ul className="space-y-3 text-slate-600">
              <li>support@scalewise.africa</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ScaleWise. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}