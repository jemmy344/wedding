import { SpringOptions, useSpring, useTransform } from "framer-motion";

export function useSmoothTransform(value: any, springOptions: SpringOptions | undefined, transformer: (input: any) => any) {
    return useSpring(useTransform(value, transformer), springOptions);
}
