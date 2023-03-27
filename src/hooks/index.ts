import { useMemo } from "react";

interface BackgroundType {
  image: string;
  size: {
    height: number;
    width: number;
  };
}

export type ThemeType = "light" | "dark";

const backgrounds: Record<
  ThemeType,
  Record<"mobile" | "desktop", BackgroundType>
> = {
  light: {
    mobile: {
      image: "/bg-mobile-light.jpg",
      size: { height: 200, width: 375 },
    },
    desktop: {
      image: "/bg-desktop-light.jpg",
      size: { height: 300, width: 1440 },
    },
  },
  dark: {
    mobile: {
      image: "/bg-mobile-dark.jpg",
      size: { height: 200, width: 375 },
    },
    desktop: {
      image: "/bg-desktop-dark.jpg",
      size: { height: 300, width: 1440 },
    },
  },
};

export function useGetBackground(width: number, theme: ThemeType) {
  return useMemo(() => {
    const isDesktop = width > 768;
    const bg = backgrounds[theme];
    return isDesktop ? bg?.desktop : bg?.mobile;
  }, [width, theme]);
}

export function useGenerateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);
  return timestamp + randomNum;
}
