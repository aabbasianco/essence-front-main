import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

// Theme mode toggle
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function LoginPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="[--card-spacing:--spacing(7)]">
        <CardHeader>
          <div className="flex flex-row-reverse items-center mb-12">
            <Image className="m-auto" src="/images/logos/essence_logo_type_primary_transparent_fa.png" alt="Logo" width={200} height={120} />
            <a><ArrowRight></ArrowRight></a>
          </div>
          <CardTitle className="text-xl">ورود یا ثبت نام در اسانس</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email" className="text-muted-foreground">
                  لطفا شماره موبایل یا ایمیل خود را وارد کنید
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  // dir="rtl"
                  placeholder="شماره موبایل یا پست الکترونیک"
                  required
                />
                <Button className="cursor-pointer" type="submit" size="xl">
                  ورود
                </Button>
                <FieldDescription className="px-6 text-center">
                  ورود شما به معنای پذیرش <a href="#">شرایط اسانس</a> و{" "}
                  <a href="#">قوانین حریم خصوصی</a> است
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
