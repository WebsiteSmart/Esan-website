import { Injectable, signal } from '@angular/core';
import { BusinessInfo, ClothingCategory, FeatureItem, GalleryPhoto, ReviewItem } from '../models/business.model';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  readonly info = signal<BusinessInfo>({
    name: "ESAN MEN'S WEAR",
    tagline: 'Upgrade Your Style. Define Your Look.',
    category: "Men's clothing store",
    address: 'Heavy Water Plant Colony, 5/212 B2, Tiruchendur Road, opposite Tuticorin',
    landmark: 'Opposite Tuticorin, Heavy Water Plant Colony',
    city: 'Athimarapatti, Thoothukudi',
    state: 'Tamil Nadu',
    postalCode: '628005',
    fullAddress: 'Heavy Water Plant Colony, 5/212 B2, Tiruchendur Road, opposite Tuticorin, Athimarapatti, Thoothukudi, Tamil Nadu 628005',
    phone: '+91 99444 31896',
    phoneDisplay: '+91 99444 31896',
    plusCode: 'P4PC+94, Thoothukudi',
    rating: 5.0,
    reviewCount: 5,
    openingTime: 'Opens at 9:00 AM',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ESAN+MENS+WEAR+Athimarapatti+Thoothukudi+Tamil+Nadu+628005',
    whatsappUrl: 'https://wa.me/919944431896',
    phoneUrl: 'tel:+919944431896',
    instagramUrl: 'https://instagram.com/esan_mens_wear?mdxt=aXh5MHBnMnVsb2Ez',
    instagramHandle: '@esan_mens_wear'
  });

  readonly categories = signal<ClothingCategory[]>([
    {
      id: 'solid-cotton-shirts',
      name: "Men's Shirts (Solid Cotton)",
      description: 'DACMAN premium plain and solid cotton shirts available in 18+ rich, vibrant shades.',
      imageUrl: '/images/collections/solid-cotton-shirts.jpg',
      badge: 'Real Stock',
      brandTag: 'DACMAN',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your DACMAN solid cotton shirts in different colors."
    },
    {
      id: 'cargo-denim-black',
      name: 'Cargo Jeans & Denim',
      description: 'Rugged dark-wash denim cargo jeans with utility side pockets and modern tapered fit.',
      imageUrl: '/images/collections/cargo-denim-black.jpg',
      badge: 'Trending',
      brandTag: 'IN-STORE',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your Dark Wash Cargo Jeans collection."
    },
    {
      id: 'formal-trousers-olive',
      name: 'Executive Formal Trousers',
      description: 'KS TWO tailored formal pants with clean pleat finish, comfort waistline, and wrinkle-resistant fabric.',
      imageUrl: '/images/collections/formal-trousers-olive.jpg',
      badge: 'Best Fit',
      brandTag: 'KS TWO',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your KS TWO formal trousers."
    },
    {
      id: 'cargo-jeans-cream',
      name: 'Cream & Off-White Cargo Pants',
      description: 'Comfortable casual cargo pants in neutral cream tones with durable flap pockets for everyday style.',
      imageUrl: '/images/collections/cargo-jeans-cream.jpg',
      badge: 'Popular',
      brandTag: 'IN-STORE',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your Cream Cargo Pants collection."
    },
    {
      id: 'mandarin-collar-shirts',
      name: 'Mandarin Collar Shirts',
      description: 'Smart Chinese-collar button-down shirts in earthy browns, maroon, olive, beige, and white.',
      imageUrl: '/images/collections/mandarin-collar-shirts.jpg',
      badge: 'Trending',
      brandTag: 'BARC',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your Mandarin Collar shirts."
    },
    {
      id: 'formal-chinos-cream',
      name: 'Formal Chinos & Beige Trousers',
      description: 'KS TWO premium cream & beige slim-cut trousers perfect for office wear and formal functions.',
      imageUrl: '/images/collections/formal-chinos-cream.jpg',
      badge: 'Office Wear',
      brandTag: 'KS TWO',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your KS TWO beige chinos and formal trousers."
    },
    {
      id: 'striped-casual-shirts',
      name: 'Striped Casual Shirts',
      description: 'Breathable horizontal striped cotton shirts with contrast collar details in pastel shades.',
      imageUrl: '/images/collections/striped-casual-shirts.jpg',
      badge: 'Comfort',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your Striped Casual shirts collection."
    },
    {
      id: 'premium-formal-shirts',
      name: 'South Studio Formal Range',
      description: 'Executive formal wear in smooth finishes, sage olive, lavender, black, grey, cream, and white.',
      imageUrl: '/images/collections/premium-formal-shirts.jpg',
      badge: 'New Arrival',
      brandTag: 'SOUTH STUDIO MR',
      whatsappMessage: "Hi ESAN MEN'S WEAR, I would like to enquire about your South Studio formal shirts."
    }
  ]);

  readonly features = signal<FeatureItem[]>([
    {
      id: 'feat-1',
      title: 'Quality Materials',
      description: 'Handpicked fabrics ensuring skin comfort, color retention, and long-lasting durability.',
      iconName: 'sparkles'
    },
    {
      id: 'feat-2',
      title: 'Affordable Prices',
      description: 'Direct competitive pricing making contemporary men’s fashion accessible for every budget.',
      iconName: 'tag'
    },
    {
      id: 'feat-3',
      title: 'Friendly Customer Service',
      description: 'Helpful and polite guidance to assist you in selecting the right fit, color, and design.',
      iconName: 'heart-handshake'
    },
    {
      id: 'feat-4',
      title: 'Convenient Local Shopping',
      description: 'Easily located on Tiruchendur Road, opposite Tuticorin in Athimarapatti with easy road access.',
      iconName: 'map-pin'
    }
  ]);

  readonly reviews = signal<ReviewItem[]>([
    {
      id: 'rev-1',
      quote: 'Good experience. Affordable price.',
      rating: 5,
      authorLabel: 'Verified Customer'
    },
    {
      id: 'rev-2',
      quote: 'Very good material and good service.',
      rating: 5,
      authorLabel: 'Verified Customer'
    },
    {
      id: 'rev-3',
      quote: 'Shop is good quality materials product.',
      rating: 5,
      authorLabel: 'Verified Customer'
    }
  ]);

  readonly galleryPhotos = signal<GalleryPhoto[]>([
    {
      id: 'gal-1',
      title: 'ESAN MEN’S WEAR Storefront',
      category: 'Shop Exterior',
      imageUrl: '/images/esan-storefront.png',
      isStorefront: true,
      description: 'Official storefront signage of ESAN MEN’S WEAR on Tiruchendur Road, Athimarapatti.'
    },
    {
      id: 'gal-2',
      title: 'Dark Wash Cargo Jeans & Denim',
      category: 'Denim & Cargo',
      imageUrl: '/images/collections/cargo-denim-black.jpg',
      isRealStock: true,
      description: 'Real in-store photo of dark washed utility cargo jeans featuring side flap pockets and durable denim.'
    },
    {
      id: 'gal-3',
      title: 'KS TWO Olive Executive Trousers',
      category: 'Formal Trousers',
      imageUrl: '/images/collections/formal-trousers-olive.jpg',
      isRealStock: true,
      description: 'Tailored executive formal trousers in olive khaki from KS TWO with formal waistband finish.'
    },
    {
      id: 'gal-4',
      title: 'Cream Cargo Pants Showcase',
      category: 'Casual Pants',
      imageUrl: '/images/collections/cargo-jeans-cream.jpg',
      isRealStock: true,
      description: 'In-store showcase of cream utility cargo pants surrounded by racks of shirts and denim.'
    },
    {
      id: 'gal-5',
      title: 'KS TWO Cream Formal Trousers',
      category: 'Formal Trousers',
      imageUrl: '/images/collections/formal-chinos-cream.jpg',
      isRealStock: true,
      description: 'Fine-tailored KS TWO formal trousers in clean cream color, tagged for ESAN MEN\'S WEAR.'
    },
    {
      id: 'gal-6',
      title: 'DACMAN 18+ Color Cotton Shirts',
      category: 'Men\'s Shirts',
      imageUrl: '/images/collections/solid-cotton-shirts.jpg',
      isRealStock: true,
      description: 'Full color spectrum of DACMAN plain and solid pure cotton shirts in 18+ rich shades.'
    },
    {
      id: 'gal-7',
      title: 'Mandarin Collar Shirts (BARC)',
      category: 'Casual Shirts',
      imageUrl: '/images/collections/mandarin-collar-shirts.jpg',
      isRealStock: true,
      description: 'Contemporary Chinese-collar shirts by BARC in earthy tones, maroons, and white.'
    },
    {
      id: 'gal-8',
      title: 'South Studio Formal Shirts',
      category: 'Formal Shirts',
      imageUrl: '/images/collections/premium-formal-shirts.jpg',
      isRealStock: true,
      description: 'Premium pastel and dark South Studio executive shirts for meetings and celebrations.'
    },
    {
      id: 'gal-9',
      title: 'Striped Textured Casual Shirts',
      category: 'Casual Shirts',
      imageUrl: '/images/collections/striped-casual-shirts.jpg',
      isRealStock: true,
      description: 'Comfortable textured horizontal stripe shirts in soft pastel summer shades.'
    },
    {
      id: 'gal-10',
      title: 'Retro Striped Model Styling',
      category: 'Lookbook',
      imageUrl: '/images/collections/trendy-casual-look.jpg',
      isRealStock: true,
      description: 'Trendy mustard vertical-striped casual shirt paired with off-white trousers.'
    }
  ]);

  getWhatsAppLink(customMessage?: string): string {
    const base = 'https://wa.me/919944431896';
    if (!customMessage) return base;
    return `${base}?text=${encodeURIComponent(customMessage)}`;
  }
}
