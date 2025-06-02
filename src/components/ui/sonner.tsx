import { Toaster as Sonner } from "sonner";
import { useTheme } from "next-themes";

type Props = React.ComponentProps<typeof Sonner>;

const Toaster = (props: Props) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as Props["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
