import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

type IconComponent = LucideIcon | IconType;

interface ContactDetailRowProps {
  icon: IconComponent;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  iconClassName?: string;
}

export default function ContactDetailRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  iconClassName = "text-foreground",
}: ContactDetailRowProps) {
  const content = href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-foreground hover:text-muted-foreground transition-colors break-words"
    >
      {value}
    </a>
  ) : (
    <p className="text-foreground break-words">{value}</p>
  );

  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 bg-muted rounded-full flex items-center justify-center shrink-0 border border-border">
        <Icon size={18} className={iconClassName} />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
        {content}
      </div>
    </div>
  );
}
