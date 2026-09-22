import type {
    CompanyLink,
    CompanyLinkId,
} from '@/features/home/types/company-link';

export const companyLinks = {
    about: {
        title: 'Về chúng tôi',
        imageSrc: '/images/company-links/about-us.webp',
        imageAlt: 'Nghệ nhân chà nhám bàn chơi bằng gỗ sáng màu',
        href: '/about',
        imagePosition: 'center',
    },
    materials: {
        title: 'Chất liệu',
        imageSrc: '/images/company-links/materials.webp',
        imageAlt: 'Cạnh nhiều lớp và vân gỗ tự nhiên của tấm gỗ ép bạch dương',
        href: '/about',
        imagePosition: 'center',
    },
    sustainability: {
        title: 'Chơi xanh',
        imageSrc: '/images/company-links/we-are-green.webp',
        imageAlt: 'Biểu tượng tái chế tạo bởi khoảng trống trong khu rừng xanh',
        href: '/about',
        imagePosition: 'center',
    },
    contact: {
        title: 'Liên hệ',
        imageSrc: '/images/company-links/contact-us.webp',
        imageAlt: 'Khách hàng dùng điện thoại để liên hệ bộ phận hỗ trợ',
        href: '/contact',
        imagePosition: 'center',
    },
} as const satisfies Record<CompanyLinkId, CompanyLink>;
