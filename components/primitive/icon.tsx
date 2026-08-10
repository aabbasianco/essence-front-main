import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  GetPalette,
  appearances,
  tones,
  type Appearance,
  type Tone,
} from "@/lib/design-system/resolver/resolver";
import {
  Heart,
  HeartOff,
  Search,
  User,
  Star,
  StarOff,
  Flame,
  Clock,
  Clock3,
  AlertCircle,
  AlertTriangle,
  Check,
  CheckCheck,
  X,
  Plus,
  Minus,
  Eye,
  EyeOff,
  Package,
  Truck,
  ShoppingCart,
  ShoppingBag,
  Sparkles,
  Astroid,
  ArrowRight,
  ArrowLeft,
  Earth,
  Mars,
  Radio,
  Venus,
  VenusAndMars,
  Wind,
  Mail,
  Calendar,
  BellRing,
  Bell,
} from "lucide-react";

const DsIcons = {
  heart: Heart,
  "heart-off": HeartOff,
  search: Search,
  user: User,
  star: Star,
  "star-off": StarOff,
  flame: Flame,
  clock: Clock,
  "clock-3": Clock3,
  check: Check,
  "check-double": CheckCheck,
  plus: Plus,
  minus: Minus,
  x: X,
  eye: Eye,
  "eye-off": EyeOff,
  package: Package,
  truck: Truck,
  cart: ShoppingCart,
  "shopping-bag": ShoppingBag,
  sparkles: Sparkles,
  astroid: Astroid,
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  earth: Earth,
  mars: Mars,
  radio: Radio,
  venus: Venus,
  "venus-and-mars": VenusAndMars,
  wind: Wind,
  "alert-circle": AlertCircle,
  "alert-triangle": AlertTriangle,
  mail: Mail,
  calendar: Calendar,
  bell: Bell,
  "bell-ring": BellRing,
} as const;
export type IconName = keyof typeof DsIcons;

const iconSizes = {
  auto: {
    inline: "size-auto",
    standalone: "p-1! size-auto",
    display: "",
  },
  xs: {
    inline: "size-4!",
    standalone: "p-0.5! size-5!",
    display: "",
  },
  sm: {
    inline: "size-5!",
    standalone: "p-1! size-7!",
    display: "",
  },
  md: {
    inline: "size-5!",
    standalone: "p-1! size-8!",
    display: "",
  },
  lg: {
    inline: "size-5!",
    standalone: "p-1! size-9!",
    display: "",
  },
  xl: {
    inline: "size-6!",
    standalone: "p-1! size-11!",
    display: "",
  },
};
type IconPurpose = keyof (typeof iconSizes)["md"];
type IconSize = keyof typeof iconSizes;
type IconPropsSet = {
  size: IconSize;
  purpose: IconPurpose;
};

const iconVariants = cva(
  "text-[var(--icon-foreground)] [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      appearance: appearances,
      tone: tones,
      size: iconSizes,

      purpose: iconSizes.md,
    },

    defaultVariants: {
      appearance: "text",
      size: "auto",
      purpose: "inline",
    },
  },
);

type IconProps = Omit<React.ComponentProps<typeof Heart>, "strokeWidth"> &
  VariantProps<typeof iconVariants> & {
    name: IconName;
    appearance?: Appearance;
    tone?: Tone;
    size?: IconSize;
    purpose?: IconPurpose;
    strokeWidth?: number;
  };

function Icon({
  className,
  name,
  appearance = "text",
  tone,
  size = "auto",
  purpose = "inline",
  strokeWidth = 2,
  style,
  ...props
}: IconProps) {
  const Component = DsIcons[name];
  const sizeClass = iconSizes[size][purpose];
  const palette = tone ? GetPalette(appearance, tone) : undefined;

  return (
    <Component
      strokeWidth={strokeWidth}
      data-appearance={appearance}
      data-tone={tone}
      data-size={size}
      data-purpose={purpose}
      className={cn(
        iconVariants({
          appearance,
          tone,
          size,
          purpose,
        }),
        sizeClass,
        className,
      )}
      style={
        {
          "--icon-foreground": palette?.default.foreground ?? "currentColor",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

type IconDefinition =
  | IconName
  | {
      name: IconName;
      tone?: Tone;
      size?: IconSize;
      purpose?: IconPurpose;
      appearance?: Appearance;
      strokeWidth?: number;
    };

type IconOverrides = Omit<Extract<IconDefinition, { name: IconName }>, "name">;

function RenderIcon(icon?: IconDefinition, overrides?: IconOverrides) {
  if (!icon) return null;

  if (typeof icon === "string") {
    return <Icon name={icon} {...overrides} />;
  }

  return <Icon {...icon} {...overrides} />;
}

export {
  RenderIcon,
  type IconDefinition,
  type IconOverrides,
  DsIcons,
  iconSizes,
  type IconSize,
  type IconPurpose,
  type IconPropsSet,
};
