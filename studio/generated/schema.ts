import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `markdown`
   *
   *
   */
  body?: Markdown;

  /**
   * SEO title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: string;

  /**
   * SEO description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: string;

  /**
   * Keywords — `string`
   *
   * A list of keywords seperated by commas.
   */
  seoKeywords?: string;

  /**
   * Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Template — `array`
   *
   *
   */
  template?: Array<SanityKeyed<string>>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Body — `markdown`
   *
   *
   */
  body?: Markdown;

  /**
   * SEO title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: string;

  /**
   * SEO description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: string;

  /**
   * Keywords — `string`
   *
   * A list of keywords seperated by commas.
   */
  seoKeywords?: string;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Body — `markdown`
   *
   *
   */
  body?: Markdown;

  /**
   * Featured Posts — `array`
   *
   * Maximum three items
   */
  featured?: Array<SanityKeyedReference<Post>>;
}

/**
 * Site
 *
 *
 */
export interface Site extends SanityDocument {
  _type: "site";

  /**
   * Site Name — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Site Description — `string`
   *
   *
   */
  siteDescription?: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Facebook Link — `string`
   *
   *
   */
  facebookLink?: string;

  /**
   * Twitter Link — `string`
   *
   *
   */
  twitterLink?: string;

  /**
   * Twitter Handle — `string`
   *
   *
   */
  twitterHandle?: string;

  /**
   * Instagram Link — `string`
   *
   *
   */
  instagramLink?: string;

  /**
   * SEO title — `string`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters).
   */
  seoTitle?: string;

  /**
   * SEO description — `string`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters).
   */
  seoDescription?: string;

  /**
   * Keywords — `string`
   *
   * A list of keywords seperated by commas.
   */
  seoKeywords?: string;

  /**
   * SEO Image — `image`
   *
   * Ideal size 1200 x 630px (if not added main image will be used).
   */
  seoImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Menu
 *
 *
 */
export interface Menu extends SanityDocument {
  _type: "menu";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Manu Items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Page>>;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Twitter Handle — `string`
   *
   *
   */
  twitterHandle?: string;

  /**
   * Bio — `markdown`
   *
   *
   */
  bio?: Markdown;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents = Post | Page | Home | Site | Menu | Category | Author;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Markdown = any;
