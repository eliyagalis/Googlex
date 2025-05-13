export type Typography = {
    fontSize: {
      xs: string;
      sm: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
    };
    weight: {
      thin: string;
      normal: string;
      bold: string;
    };
  };
  
  export const typography: Typography = {
    fontSize: {
      xs: "text-sm",
      sm: "text-lg",
      lg: "text-xl",
      xl: "text-2xl",
      "2xl": "text-3xl",
      "3xl": "text-6xl"
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      bold: "font-semibold"
    }
  };
  