import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  GetPalette,
  appearances,
  tones,
  type Appearance,
  type Tone,
} from "@/lib/design-system/palette";
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

const icons = {
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
export type IconName = keyof typeof icons;

const iconVariants = cva("text-[var(--icon-foreground)]", {
  variants: {
    appearance: appearances,
    tone: tones,
  },

  defaultVariants: {
    appearance: "text",
  },
});

type IconProps = Omit<React.ComponentProps<typeof Heart>, "strokeWidth"> &
  VariantProps<typeof iconVariants> & {
    name: IconName;
    appearance?: Appearance;
    tone?: Tone;
    strokeWidth?: number;
  };

function Icon({
  className,
  name,
  appearance = "text",
  tone,
  strokeWidth = 2,
  style,
  ...props
}: IconProps) {
  const Component = icons[name];
  const palette = tone ? GetPalette(appearance, tone) : undefined;

  return (
    <Component
      strokeWidth={strokeWidth}
      data-appearance={appearance}
      data-tone={tone}
      className={cn(
        iconVariants({
          appearance,
          tone,
        }),
        className,
      )}
      style={
        {
          "--icon-foreground": palette?.foreground,
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
      appearance?: Appearance;
      strokeWidth?: number;
    };

function RenderIcon(icon?: IconDefinition) {
  if (!icon) return null;

  if (typeof icon === "string") {
    return <Icon name={icon} />;
  }

  return <Icon {...icon} />;
}

export { RenderIcon, type IconDefinition };
