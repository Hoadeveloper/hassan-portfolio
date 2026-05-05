import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { getAdminSecurityWarning, isAdminConfigured } from "@/lib/admin-auth";

import { LoginForm } from "./LoginForm";

export default function AdminLoginPage() {
  const configured = isAdminConfigured();
  const securityWarning = getAdminSecurityWarning();

  return (
    <section className="relative overflow-hidden pb-16 pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,200,185,0.08),transparent_30%)]" />
      <Container className="relative z-10 flex justify-center">
        <div className="w-full max-w-[460px] rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.94))] p-7 shadow-[0_28px_72px_rgba(9,38,53,0.36)]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-300/88">
            Admin access
          </p>
          <h1 className="mt-3 text-[2rem] font-semibold tracking-tight text-white">
            Sign in to manage the portfolio
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-300/86">
            This admin panel controls the real managed content source for the public site.
          </p>

          {!configured ? (
            <div className="mt-6 rounded-[16px] border border-cyan-300/18 bg-cyan-300/[0.08] px-4 py-3 text-sm leading-7 text-cyan-50">
              Set <code>ADMIN_USERNAME</code>, <code>ADMIN_PASSWORD</code>, and{" "}
              <code>ADMIN_SESSION_SECRET</code> in your environment before using
              the admin panel.
            </div>
          ) : null}

          {configured && securityWarning ? (
            <div className="mt-6 rounded-[16px] border border-cyan-300/18 bg-cyan-300/[0.08] px-4 py-3 text-sm leading-7 text-cyan-50">
              {securityWarning}
            </div>
          ) : null}

          <div className="mt-6">
            <LoginForm />
          </div>

          <Link href="/" className="mt-5 inline-block text-sm text-slate-400 transition hover:text-cyan-100">
            Return to site
          </Link>
        </div>
      </Container>
    </section>
  );
}
