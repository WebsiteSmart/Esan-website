export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  address: string;
  landmark: string;
  city: string;
  state: string;
  postalCode: string;
  fullAddress: string;
  phone: string;
  phoneDisplay: string;
  plusCode: string;
  rating: number;
  reviewCount: number;
  openingTime: string;
  mapsUrl: string;
  whatsappUrl: string;
  phoneUrl: string;
  instagramUrl: string;
  instagramHandle: string;
}

export interface ClothingCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  badge?: string;
  brandTag?: string;
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  rating: number;
  authorLabel?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  isStorefront?: boolean;
  isRealStock?: boolean;
  description: string;
}
