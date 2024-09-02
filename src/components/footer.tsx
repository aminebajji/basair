import Link from "next/link";
import SvgDivider from "./svg-divider";

export default function Footer() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-black overflow-hidden">
      <SvgDivider position="top" />
      <footer className="text-muted-foreground pb-12 pt-32 md:pt-44 md:pb-12">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div className="grid gap-4">
            <h3 className="text-lg font-bold">Girls Team</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <FacebookIcon className="w-5 h-5" />
                <span>Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <TwitterIcon className="w-5 h-5" />
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-bold">Boys Team</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <FacebookIcon className="w-5 h-5" />
                <span>Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <TwitterIcon className="w-5 h-5" />
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-bold">About</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="hover:underline" prefetch={false}>
                Our Mission
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Our History
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="grid gap-4 text-white">
            <h3 className="text-lg font-bold">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="#" className="hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between text-white">
          <p className="text-sm">
            &copy; 2024 Sports Teams. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
