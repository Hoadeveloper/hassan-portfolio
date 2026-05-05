"use client";

import { useActionState } from "react";

import { loginAction } from "@/app/admin/actions";

const initialState = { error: undefined as string | undefined };

export function LoginForm() {
  const [state, action] = useActionState(loginAction, initialState);

  return (
    <form action={action} className="space-y-4">
      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-200">Admin username</span>
        <input
          type="text"
          name="username"
          autoComplete="username"
          required
          className="rounded-[14px] border border-white/10 bg-[#092635] px-4 py-3 text-sm text-white outline-none"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-slate-200">Admin password</span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
          className="rounded-[14px] border border-white/10 bg-[#092635] px-4 py-3 text-sm text-white outline-none"
        />
      </label>

      {state.error ? (
        <div className="rounded-[14px] border border-cyan-300/18 bg-cyan-300/[0.08] px-4 py-3 text-sm text-cyan-100">
          {state.error}
        </div>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-[16px] bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
      >
        Sign in
      </button>
    </form>
  );
}
