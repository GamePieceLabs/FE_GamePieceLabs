import type { CardImageTitleProps } from '@/components/shared/card-image-title';

export type UpcomingProduct = CardImageTitleProps & {
    id: string;
};

export const upcomingProducts = [
    {
        id: 'seti-space-agencies-organizer',
        imageSrc:
            '/images/laserox/seti.webp',
        imageAlt: 'SETI Space Agencies board game cover art',
        href: '/products?game=seti-space-agencies',
    },
    {
        id: 'nemesis-retaliation-expansion-organizer',
        imageSrc:
            '/images/laserox/Nemesis.webp',
        imageAlt: 'Nemesis Retaliation board game cover art',
        href: '/products?game=nemesis-retaliation',
    },
    {
        id: 'twilight-imperium-thunders-edge-crate',
        imageSrc:
            '/images/laserox/TI4_kieg.webp',
        imageAlt: "Twilight Imperium Thunder's Edge expansion cover art",
        href: '/products?game=twilight-imperium-thunders-edge',
    },
    {
        id: 'stalker-organizer',
        imageSrc:
            '/images/laserox/s.t.a.l.k.e.r..png',
        imageAlt: 'S.T.A.L.K.E.R. The Board Game cover art',
        href: '/products?game=stalker-the-board-game',
    },
    {
        id: 'clans-of-caledonia-industria-organizer',
        imageSrc:
            '/images/laserox/clans.webp',
        imageAlt: 'Clans of Caledonia and Industria board game cover art',
        href: '/products?game=clans-of-caledonia-industria',
    },
] as const satisfies readonly UpcomingProduct[];
