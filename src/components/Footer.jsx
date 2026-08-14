import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[.06]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div><span className="font-medium text-white/65">{profile.name}</span> · {profile.role}</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#github">GitHub</a>
          <a className="hover:text-white" href={profile.linkedin}>LinkedIn</a>
          <a className="hover:text-white" href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}