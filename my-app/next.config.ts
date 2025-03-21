import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    sassOptions: {
        additionalData: `
        $main_color: #278FB4;
        $blue_color: #126893;
        $dark_color: #342F45;`,
    },
};

export default nextConfig;
