export type NavItem = {
  href: string;
  label: string;
};

export type ContactAction = {
  href: string;
  label: string;
  description: string;
  external?: boolean;
};

export type ContactDetail = {
  label: string;
  value: string;
  hint: string;
};

export type QuickContactKind =
  | "email"
  | "phone"
  | "github"
  | "linkedin"
  | "telegram"
  | "discord";

export type QuickContact = {
  kind: QuickContactKind;
  label: string;
  value: string;
  href: string;
};

export type Site = {
  name: string;
  shortName: string;
  title: string;
  description: string;
  location: string;
  availability: string;
  roles: string[];
  navItems: NavItem[];
  contactActions: ContactAction[];
  contactDetails: ContactDetail[];
  quickContacts: QuickContact[];
};
