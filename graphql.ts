/* eslint-disable */
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  support: Maybe<Support>;
  supportCollection: Maybe<SupportCollection>;
  homepage: Maybe<Homepage>;
  homepageCollection: Maybe<HomepageCollection>;
  article: Maybe<Article>;
  articleCollection: Maybe<ArticleCollection>;
  aboutUs: Maybe<AboutUs>;
  aboutUsCollection: Maybe<AboutUsCollection>;
  building: Maybe<Building>;
  buildingCollection: Maybe<BuildingCollection>;
  animal: Maybe<Animal>;
  animalCollection: Maybe<AnimalCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
  where: Maybe<AssetFilter>;
  order: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QuerySupportArgs = {
  id: Scalars['String'];
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type QuerySupportCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
  where: Maybe<SupportFilter>;
  order: Maybe<Array<Maybe<SupportOrder>>>;
};


export type QueryHomepageArgs = {
  id: Scalars['String'];
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type QueryHomepageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
  where: Maybe<HomepageFilter>;
  order: Maybe<Array<Maybe<HomepageOrder>>>;
};


export type QueryArticleArgs = {
  id: Scalars['String'];
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type QueryArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
  where: Maybe<ArticleFilter>;
  order: Maybe<Array<Maybe<ArticleOrder>>>;
};


export type QueryAboutUsArgs = {
  id: Scalars['String'];
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type QueryAboutUsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
  where: Maybe<AboutUsFilter>;
  order: Maybe<Array<Maybe<AboutUsOrder>>>;
};


export type QueryBuildingArgs = {
  id: Scalars['String'];
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type QueryBuildingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
  where: Maybe<BuildingFilter>;
  order: Maybe<Array<Maybe<BuildingOrder>>>;
};


export type QueryAnimalArgs = {
  id: Scalars['String'];
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type QueryAnimalCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
  where: Maybe<AnimalFilter>;
  order: Maybe<Array<Maybe<AnimalOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  contentType: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  firstPublishedAt: Maybe<Scalars['DateTime']>;
  publishedVersion: Maybe<Scalars['Int']>;
};


export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format: Maybe<ImageFormat>;
};



export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
  homepageCollection: Maybe<HomepageCollection>;
  articleCollection: Maybe<ArticleCollection>;
  buildingCollection: Maybe<BuildingCollection>;
  animalCollection: Maybe<AnimalCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsHomepageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsBuildingCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsAnimalCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type HomepageCollection = {
  __typename?: 'HomepageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Homepage>>;
};

/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/homepage) */
export type Homepage = Entry & {
  __typename?: 'Homepage';
  sys: Sys;
  linkedFrom: Maybe<HomepageLinkingCollections>;
  title: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  whoWeAreTitle: Maybe<Scalars['String']>;
  whoWeAreText: Maybe<HomepageWhoWeAreText>;
  fotkyCollection: Maybe<AssetCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/homepage) */
export type HomepageLinkedFromArgs = {
  allowedLocales: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/homepage) */
export type HomepageTitleArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/homepage) */
export type HomepageTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/homepage) */
export type HomepageWhoWeAreTitleArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/homepage) */
export type HomepageWhoWeAreTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/homepage) */
export type HomepageFotkyCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type HomepageLinkingCollections = {
  __typename?: 'HomepageLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type HomepageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type HomepageWhoWeAreText = {
  __typename?: 'HomepageWhoWeAreText';
  json: Scalars['JSON'];
  links: HomepageWhoWeAreTextLinks;
};


export type HomepageWhoWeAreTextLinks = {
  __typename?: 'HomepageWhoWeAreTextLinks';
  entries: HomepageWhoWeAreTextEntries;
  assets: HomepageWhoWeAreTextAssets;
};

export type HomepageWhoWeAreTextEntries = {
  __typename?: 'HomepageWhoWeAreTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type HomepageWhoWeAreTextAssets = {
  __typename?: 'HomepageWhoWeAreTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type ArticleCollection = {
  __typename?: 'ArticleCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Article>>;
};

/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type Article = Entry & {
  __typename?: 'Article';
  sys: Sys;
  linkedFrom: Maybe<ArticleLinkingCollections>;
  title: Maybe<Scalars['String']>;
  img: Maybe<Asset>;
  type: Maybe<Scalars['String']>;
  perex: Maybe<Scalars['String']>;
  text: Maybe<ArticleText>;
  galleryCollection: Maybe<AssetCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type ArticleLinkedFromArgs = {
  allowedLocales: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type ArticleTitleArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type ArticleImgArgs = {
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type ArticleTypeArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type ArticlePerexArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type ArticleTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/article) */
export type ArticleGalleryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type ArticleLinkingCollections = {
  __typename?: 'ArticleLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type ArticleLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type ArticleText = {
  __typename?: 'ArticleText';
  json: Scalars['JSON'];
  links: ArticleTextLinks;
};

export type ArticleTextLinks = {
  __typename?: 'ArticleTextLinks';
  entries: ArticleTextEntries;
  assets: ArticleTextAssets;
};

export type ArticleTextEntries = {
  __typename?: 'ArticleTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type ArticleTextAssets = {
  __typename?: 'ArticleTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type BuildingCollection = {
  __typename?: 'BuildingCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Building>>;
};

/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/building) */
export type Building = Entry & {
  __typename?: 'Building';
  sys: Sys;
  linkedFrom: Maybe<BuildingLinkingCollections>;
  img: Maybe<Asset>;
  name: Maybe<Scalars['String']>;
  text: Maybe<BuildingText>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/building) */
export type BuildingLinkedFromArgs = {
  allowedLocales: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/building) */
export type BuildingImgArgs = {
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/building) */
export type BuildingNameArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/building) */
export type BuildingTextArgs = {
  locale: Maybe<Scalars['String']>;
};

export type BuildingLinkingCollections = {
  __typename?: 'BuildingLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type BuildingLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type BuildingText = {
  __typename?: 'BuildingText';
  json: Scalars['JSON'];
  links: BuildingTextLinks;
};

export type BuildingTextLinks = {
  __typename?: 'BuildingTextLinks';
  entries: BuildingTextEntries;
  assets: BuildingTextAssets;
};

export type BuildingTextEntries = {
  __typename?: 'BuildingTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type BuildingTextAssets = {
  __typename?: 'BuildingTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AnimalCollection = {
  __typename?: 'AnimalCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Animal>>;
};

/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/animal) */
export type Animal = Entry & {
  __typename?: 'Animal';
  sys: Sys;
  linkedFrom: Maybe<AnimalLinkingCollections>;
  img: Maybe<Asset>;
  name: Maybe<Scalars['String']>;
  text: Maybe<AnimalText>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/animal) */
export type AnimalLinkedFromArgs = {
  allowedLocales: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/animal) */
export type AnimalImgArgs = {
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/animal) */
export type AnimalNameArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/animal) */
export type AnimalTextArgs = {
  locale: Maybe<Scalars['String']>;
};

export type AnimalLinkingCollections = {
  __typename?: 'AnimalLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type AnimalLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type AnimalText = {
  __typename?: 'AnimalText';
  json: Scalars['JSON'];
  links: AnimalTextLinks;
};

export type AnimalTextLinks = {
  __typename?: 'AnimalTextLinks';
  entries: AnimalTextEntries;
  assets: AnimalTextAssets;
};

export type AnimalTextEntries = {
  __typename?: 'AnimalTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type AnimalTextAssets = {
  __typename?: 'AnimalTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys: Maybe<SysFilter>;
  title_exists: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  title_not: Maybe<Scalars['String']>;
  title_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains: Maybe<Scalars['String']>;
  title_not_contains: Maybe<Scalars['String']>;
  description_exists: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['String']>;
  description_not: Maybe<Scalars['String']>;
  description_in: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains: Maybe<Scalars['String']>;
  description_not_contains: Maybe<Scalars['String']>;
  url_exists: Maybe<Scalars['Boolean']>;
  url: Maybe<Scalars['String']>;
  url_not: Maybe<Scalars['String']>;
  url_in: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains: Maybe<Scalars['String']>;
  url_not_contains: Maybe<Scalars['String']>;
  size_exists: Maybe<Scalars['Boolean']>;
  size: Maybe<Scalars['Int']>;
  size_not: Maybe<Scalars['Int']>;
  size_in: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt: Maybe<Scalars['Int']>;
  size_gte: Maybe<Scalars['Int']>;
  size_lt: Maybe<Scalars['Int']>;
  size_lte: Maybe<Scalars['Int']>;
  contentType_exists: Maybe<Scalars['Boolean']>;
  contentType: Maybe<Scalars['String']>;
  contentType_not: Maybe<Scalars['String']>;
  contentType_in: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains: Maybe<Scalars['String']>;
  contentType_not_contains: Maybe<Scalars['String']>;
  fileName_exists: Maybe<Scalars['Boolean']>;
  fileName: Maybe<Scalars['String']>;
  fileName_not: Maybe<Scalars['String']>;
  fileName_in: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains: Maybe<Scalars['String']>;
  fileName_not_contains: Maybe<Scalars['String']>;
  width_exists: Maybe<Scalars['Boolean']>;
  width: Maybe<Scalars['Int']>;
  width_not: Maybe<Scalars['Int']>;
  width_in: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt: Maybe<Scalars['Int']>;
  width_gte: Maybe<Scalars['Int']>;
  width_lt: Maybe<Scalars['Int']>;
  width_lte: Maybe<Scalars['Int']>;
  height_exists: Maybe<Scalars['Boolean']>;
  height: Maybe<Scalars['Int']>;
  height_not: Maybe<Scalars['Int']>;
  height_in: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt: Maybe<Scalars['Int']>;
  height_gte: Maybe<Scalars['Int']>;
  height_lt: Maybe<Scalars['Int']>;
  height_lte: Maybe<Scalars['Int']>;
  OR: Maybe<Array<Maybe<AssetFilter>>>;
  AND: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['String']>;
  id_not: Maybe<Scalars['String']>;
  id_in: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains: Maybe<Scalars['String']>;
  id_not_contains: Maybe<Scalars['String']>;
  publishedAt_exists: Maybe<Scalars['Boolean']>;
  publishedAt: Maybe<Scalars['String']>;
  publishedAt_not: Maybe<Scalars['String']>;
  publishedAt_in: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_contains: Maybe<Scalars['String']>;
  publishedAt_not_contains: Maybe<Scalars['String']>;
  firstPublishedAt_exists: Maybe<Scalars['Boolean']>;
  firstPublishedAt: Maybe<Scalars['String']>;
  firstPublishedAt_not: Maybe<Scalars['String']>;
  firstPublishedAt_in: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_contains: Maybe<Scalars['String']>;
  firstPublishedAt_not_contains: Maybe<Scalars['String']>;
  publishedVersion_exists: Maybe<Scalars['Boolean']>;
  publishedVersion: Maybe<Scalars['String']>;
  publishedVersion_not: Maybe<Scalars['String']>;
  publishedVersion_in: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_contains: Maybe<Scalars['String']>;
  publishedVersion_not_contains: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type Support = Entry & {
  __typename?: 'Support';
  sys: Sys;
  linkedFrom: Maybe<SupportLinkingCollections>;
  title: Maybe<Scalars['String']>;
  supportUsTitle: Maybe<Scalars['String']>;
  text: Maybe<Scalars['String']>;
  supportUsText: Maybe<SupportSupportUsText>;
  links: Maybe<SupportLinks>;
  supportUs: Maybe<Scalars['String']>;
  ctaButton: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportLinkedFromArgs = {
  allowedLocales: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportTitleArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportSupportUsTitleArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportSupportUsTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportLinksArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportSupportUsArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/support) */
export type SupportCtaButtonArgs = {
  locale: Maybe<Scalars['String']>;
};

export type SupportLinkingCollections = {
  __typename?: 'SupportLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type SupportLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type SupportSupportUsText = {
  __typename?: 'SupportSupportUsText';
  json: Scalars['JSON'];
  links: SupportSupportUsTextLinks;
};

export type SupportSupportUsTextLinks = {
  __typename?: 'SupportSupportUsTextLinks';
  entries: SupportSupportUsTextEntries;
  assets: SupportSupportUsTextAssets;
};

export type SupportSupportUsTextEntries = {
  __typename?: 'SupportSupportUsTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type SupportSupportUsTextAssets = {
  __typename?: 'SupportSupportUsTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type SupportLinks = {
  __typename?: 'SupportLinks';
  json: Scalars['JSON'];
  links: SupportLinksLinks;
};

export type SupportLinksLinks = {
  __typename?: 'SupportLinksLinks';
  entries: SupportLinksEntries;
  assets: SupportLinksAssets;
};

export type SupportLinksEntries = {
  __typename?: 'SupportLinksEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type SupportLinksAssets = {
  __typename?: 'SupportLinksAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type SupportFilter = {
  sys: Maybe<SysFilter>;
  title_exists: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  title_not: Maybe<Scalars['String']>;
  title_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains: Maybe<Scalars['String']>;
  title_not_contains: Maybe<Scalars['String']>;
  supportUsTitle_exists: Maybe<Scalars['Boolean']>;
  supportUsTitle: Maybe<Scalars['String']>;
  supportUsTitle_not: Maybe<Scalars['String']>;
  supportUsTitle_in: Maybe<Array<Maybe<Scalars['String']>>>;
  supportUsTitle_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  supportUsTitle_contains: Maybe<Scalars['String']>;
  supportUsTitle_not_contains: Maybe<Scalars['String']>;
  text_exists: Maybe<Scalars['Boolean']>;
  text: Maybe<Scalars['String']>;
  text_not: Maybe<Scalars['String']>;
  text_in: Maybe<Array<Maybe<Scalars['String']>>>;
  text_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  text_contains: Maybe<Scalars['String']>;
  text_not_contains: Maybe<Scalars['String']>;
  supportUs_exists: Maybe<Scalars['Boolean']>;
  supportUs: Maybe<Scalars['String']>;
  supportUs_not: Maybe<Scalars['String']>;
  supportUs_in: Maybe<Array<Maybe<Scalars['String']>>>;
  supportUs_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  supportUs_contains: Maybe<Scalars['String']>;
  supportUs_not_contains: Maybe<Scalars['String']>;
  ctaButton_exists: Maybe<Scalars['Boolean']>;
  ctaButton: Maybe<Scalars['String']>;
  ctaButton_not: Maybe<Scalars['String']>;
  ctaButton_in: Maybe<Array<Maybe<Scalars['String']>>>;
  ctaButton_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  ctaButton_contains: Maybe<Scalars['String']>;
  ctaButton_not_contains: Maybe<Scalars['String']>;
  OR: Maybe<Array<Maybe<SupportFilter>>>;
  AND: Maybe<Array<Maybe<SupportFilter>>>;
};

export enum SupportOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SupportUsTitleAsc = 'supportUsTitle_ASC',
  SupportUsTitleDesc = 'supportUsTitle_DESC',
  CtaButtonAsc = 'ctaButton_ASC',
  CtaButtonDesc = 'ctaButton_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SupportCollection = {
  __typename?: 'SupportCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Support>>;
};

export type HomepageFilter = {
  sys: Maybe<SysFilter>;
  title_exists: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  title_not: Maybe<Scalars['String']>;
  title_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains: Maybe<Scalars['String']>;
  title_not_contains: Maybe<Scalars['String']>;
  text_exists: Maybe<Scalars['Boolean']>;
  text: Maybe<Scalars['String']>;
  text_not: Maybe<Scalars['String']>;
  text_in: Maybe<Array<Maybe<Scalars['String']>>>;
  text_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  text_contains: Maybe<Scalars['String']>;
  text_not_contains: Maybe<Scalars['String']>;
  whoWeAreTitle_exists: Maybe<Scalars['Boolean']>;
  whoWeAreTitle: Maybe<Scalars['String']>;
  whoWeAreTitle_not: Maybe<Scalars['String']>;
  whoWeAreTitle_in: Maybe<Array<Maybe<Scalars['String']>>>;
  whoWeAreTitle_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  whoWeAreTitle_contains: Maybe<Scalars['String']>;
  whoWeAreTitle_not_contains: Maybe<Scalars['String']>;
  fotkyCollection_exists: Maybe<Scalars['Boolean']>;
  OR: Maybe<Array<Maybe<HomepageFilter>>>;
  AND: Maybe<Array<Maybe<HomepageFilter>>>;
};

export enum HomepageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WhoWeAreTitleAsc = 'whoWeAreTitle_ASC',
  WhoWeAreTitleDesc = 'whoWeAreTitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ArticleFilter = {
  sys: Maybe<SysFilter>;
  title_exists: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  title_not: Maybe<Scalars['String']>;
  title_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains: Maybe<Scalars['String']>;
  title_not_contains: Maybe<Scalars['String']>;
  img_exists: Maybe<Scalars['Boolean']>;
  type_exists: Maybe<Scalars['Boolean']>;
  type: Maybe<Scalars['String']>;
  type_not: Maybe<Scalars['String']>;
  type_in: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  type_contains: Maybe<Scalars['String']>;
  type_not_contains: Maybe<Scalars['String']>;
  perex_exists: Maybe<Scalars['Boolean']>;
  perex: Maybe<Scalars['String']>;
  perex_not: Maybe<Scalars['String']>;
  perex_in: Maybe<Array<Maybe<Scalars['String']>>>;
  perex_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  perex_contains: Maybe<Scalars['String']>;
  perex_not_contains: Maybe<Scalars['String']>;
  galleryCollection_exists: Maybe<Scalars['Boolean']>;
  OR: Maybe<Array<Maybe<ArticleFilter>>>;
  AND: Maybe<Array<Maybe<ArticleFilter>>>;
};

export enum ArticleOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUs = Entry & {
  __typename?: 'AboutUs';
  sys: Sys;
  linkedFrom: Maybe<AboutUsLinkingCollections>;
  title: Maybe<Scalars['String']>;
  whoWeAre: Maybe<Scalars['String']>;
  whoWeAreText: Maybe<AboutUsWhoWeAreText>;
  vision: Maybe<Scalars['String']>;
  visionText: Maybe<AboutUsVisionText>;
  project: Maybe<Scalars['String']>;
  projectText: Maybe<AboutUsProjectText>;
  contact: Maybe<Scalars['String']>;
  contactText: Maybe<AboutUsContactText>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsLinkedFromArgs = {
  allowedLocales: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsTitleArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsWhoWeAreArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsWhoWeAreTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsVisionArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsVisionTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsProjectArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsProjectTextArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsContactArgs = {
  locale: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/idt22mp7qe5g/content_types/about-us) */
export type AboutUsContactTextArgs = {
  locale: Maybe<Scalars['String']>;
};

export type AboutUsLinkingCollections = {
  __typename?: 'AboutUsLinkingCollections';
  entryCollection: Maybe<EntryCollection>;
};


export type AboutUsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview: Maybe<Scalars['Boolean']>;
  locale: Maybe<Scalars['String']>;
};

export type AboutUsWhoWeAreText = {
  __typename?: 'AboutUsWhoWeAreText';
  json: Scalars['JSON'];
  links: AboutUsWhoWeAreTextLinks;
};

export type AboutUsWhoWeAreTextLinks = {
  __typename?: 'AboutUsWhoWeAreTextLinks';
  entries: AboutUsWhoWeAreTextEntries;
  assets: AboutUsWhoWeAreTextAssets;
};

export type AboutUsWhoWeAreTextEntries = {
  __typename?: 'AboutUsWhoWeAreTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type AboutUsWhoWeAreTextAssets = {
  __typename?: 'AboutUsWhoWeAreTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AboutUsVisionText = {
  __typename?: 'AboutUsVisionText';
  json: Scalars['JSON'];
  links: AboutUsVisionTextLinks;
};

export type AboutUsVisionTextLinks = {
  __typename?: 'AboutUsVisionTextLinks';
  entries: AboutUsVisionTextEntries;
  assets: AboutUsVisionTextAssets;
};

export type AboutUsVisionTextEntries = {
  __typename?: 'AboutUsVisionTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type AboutUsVisionTextAssets = {
  __typename?: 'AboutUsVisionTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AboutUsProjectText = {
  __typename?: 'AboutUsProjectText';
  json: Scalars['JSON'];
  links: AboutUsProjectTextLinks;
};

export type AboutUsProjectTextLinks = {
  __typename?: 'AboutUsProjectTextLinks';
  entries: AboutUsProjectTextEntries;
  assets: AboutUsProjectTextAssets;
};

export type AboutUsProjectTextEntries = {
  __typename?: 'AboutUsProjectTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type AboutUsProjectTextAssets = {
  __typename?: 'AboutUsProjectTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AboutUsContactText = {
  __typename?: 'AboutUsContactText';
  json: Scalars['JSON'];
  links: AboutUsContactTextLinks;
};

export type AboutUsContactTextLinks = {
  __typename?: 'AboutUsContactTextLinks';
  entries: AboutUsContactTextEntries;
  assets: AboutUsContactTextAssets;
};

export type AboutUsContactTextEntries = {
  __typename?: 'AboutUsContactTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type AboutUsContactTextAssets = {
  __typename?: 'AboutUsContactTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AboutUsFilter = {
  sys: Maybe<SysFilter>;
  title_exists: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  title_not: Maybe<Scalars['String']>;
  title_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains: Maybe<Scalars['String']>;
  title_not_contains: Maybe<Scalars['String']>;
  whoWeAre_exists: Maybe<Scalars['Boolean']>;
  whoWeAre: Maybe<Scalars['String']>;
  whoWeAre_not: Maybe<Scalars['String']>;
  whoWeAre_in: Maybe<Array<Maybe<Scalars['String']>>>;
  whoWeAre_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  whoWeAre_contains: Maybe<Scalars['String']>;
  whoWeAre_not_contains: Maybe<Scalars['String']>;
  vision_exists: Maybe<Scalars['Boolean']>;
  vision: Maybe<Scalars['String']>;
  vision_not: Maybe<Scalars['String']>;
  vision_in: Maybe<Array<Maybe<Scalars['String']>>>;
  vision_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  vision_contains: Maybe<Scalars['String']>;
  vision_not_contains: Maybe<Scalars['String']>;
  project_exists: Maybe<Scalars['Boolean']>;
  project: Maybe<Scalars['String']>;
  project_not: Maybe<Scalars['String']>;
  project_in: Maybe<Array<Maybe<Scalars['String']>>>;
  project_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  project_contains: Maybe<Scalars['String']>;
  project_not_contains: Maybe<Scalars['String']>;
  contact_exists: Maybe<Scalars['Boolean']>;
  contact: Maybe<Scalars['String']>;
  contact_not: Maybe<Scalars['String']>;
  contact_in: Maybe<Array<Maybe<Scalars['String']>>>;
  contact_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  contact_contains: Maybe<Scalars['String']>;
  contact_not_contains: Maybe<Scalars['String']>;
  OR: Maybe<Array<Maybe<AboutUsFilter>>>;
  AND: Maybe<Array<Maybe<AboutUsFilter>>>;
};

export enum AboutUsOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WhoWeAreAsc = 'whoWeAre_ASC',
  WhoWeAreDesc = 'whoWeAre_DESC',
  VisionAsc = 'vision_ASC',
  VisionDesc = 'vision_DESC',
  ProjectAsc = 'project_ASC',
  ProjectDesc = 'project_DESC',
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AboutUsCollection = {
  __typename?: 'AboutUsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<AboutUs>>;
};

export type BuildingFilter = {
  sys: Maybe<SysFilter>;
  img_exists: Maybe<Scalars['Boolean']>;
  name_exists: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  OR: Maybe<Array<Maybe<BuildingFilter>>>;
  AND: Maybe<Array<Maybe<BuildingFilter>>>;
};

export enum BuildingOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AnimalFilter = {
  sys: Maybe<SysFilter>;
  img_exists: Maybe<Scalars['Boolean']>;
  name_exists: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  name_not: Maybe<Scalars['String']>;
  name_in: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains: Maybe<Scalars['String']>;
  name_not_contains: Maybe<Scalars['String']>;
  OR: Maybe<Array<Maybe<AnimalFilter>>>;
  AND: Maybe<Array<Maybe<AnimalFilter>>>;
};

export enum AnimalOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AboutUsQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutUsQuery = (
  { __typename?: 'Query' }
  & { aboutUs: Maybe<(
    { __typename?: 'AboutUs' }
    & Pick<AboutUs, 'title' | 'whoWeAre' | 'vision' | 'project' | 'contact'>
    & { whoWeAreText: Maybe<(
      { __typename?: 'AboutUsWhoWeAreText' }
      & Pick<AboutUsWhoWeAreText, 'json'>
    )>, visionText: Maybe<(
      { __typename?: 'AboutUsVisionText' }
      & Pick<AboutUsVisionText, 'json'>
    )>, projectText: Maybe<(
      { __typename?: 'AboutUsProjectText' }
      & Pick<AboutUsProjectText, 'json'>
    )>, contactText: Maybe<(
      { __typename?: 'AboutUsContactText' }
      & Pick<AboutUsContactText, 'json'>
    )> }
  )> }
);

export type AnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type AnimalsQuery = (
  { __typename?: 'Query' }
  & { animalCollection: Maybe<(
    { __typename?: 'AnimalCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Animal' }
      & Pick<Animal, 'name'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ), img: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'url' | 'width' | 'height' | 'title'>
      )>, text: Maybe<(
        { __typename?: 'AnimalText' }
        & Pick<AnimalText, 'json'>
      )> }
    )>> }
  )> }
);

export type HomepageArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageArticlesQuery = (
  { __typename?: 'Query' }
  & { articleCollection: Maybe<(
    { __typename?: 'ArticleCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'title' | 'perex'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id' | 'publishedAt'>
      ), img: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'url' | 'width' | 'height' | 'title'>
      )> }
    )>> }
  )> }
);

export type ListArticlesQueryVariables = Exact<{
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  category: Scalars['String'];
}>;


export type ListArticlesQuery = (
  { __typename?: 'Query' }
  & { articleCollection: Maybe<(
    { __typename?: 'ArticleCollection' }
    & Pick<ArticleCollection, 'total'>
    & { items: Array<Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'title' | 'perex'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id' | 'publishedAt'>
      ), img: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'url' | 'width' | 'height' | 'title'>
      )> }
    )>> }
  )> }
);

export type ArticleDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ArticleDetailQuery = (
  { __typename?: 'Query' }
  & { article: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'title' | 'perex'>
    & { sys: (
      { __typename?: 'Sys' }
      & Pick<Sys, 'publishedAt'>
    ), img: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'url' | 'width' | 'height' | 'title'>
    )>, text: Maybe<(
      { __typename?: 'ArticleText' }
      & Pick<ArticleText, 'json'>
    )>, galleryCollection: Maybe<(
      { __typename?: 'AssetCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'url' | 'width' | 'height' | 'description' | 'title'>
      )>> }
    )> }
  )> }
);

export type ListBuildingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBuildingsQuery = (
  { __typename?: 'Query' }
  & { buildingCollection: Maybe<(
    { __typename?: 'BuildingCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Building' }
      & Pick<Building, 'name'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ), img: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'url' | 'width' | 'height' | 'title'>
      )>, text: Maybe<(
        { __typename?: 'BuildingText' }
        & Pick<BuildingText, 'json'>
      )> }
    )>> }
  )> }
);

export type HomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageQuery = (
  { __typename?: 'Query' }
  & { homepage: Maybe<(
    { __typename?: 'Homepage' }
    & Pick<Homepage, 'title' | 'text' | 'whoWeAreTitle'>
    & { whoWeAreText: Maybe<(
      { __typename?: 'HomepageWhoWeAreText' }
      & Pick<HomepageWhoWeAreText, 'json'>
    )>, fotkyCollection: Maybe<(
      { __typename?: 'AssetCollection' }
      & { items: Array<Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'url' | 'width' | 'height' | 'title' | 'description'>
      )>> }
    )> }
  )> }
);

export type SupportQueryVariables = Exact<{ [key: string]: never; }>;


export type SupportQuery = (
  { __typename?: 'Query' }
  & { support: Maybe<(
    { __typename?: 'Support' }
    & Pick<Support, 'title' | 'supportUsTitle' | 'supportUs' | 'text' | 'ctaButton'>
    & { supportUsText: Maybe<(
      { __typename?: 'SupportSupportUsText' }
      & Pick<SupportSupportUsText, 'json'>
    )>, links: Maybe<(
      { __typename?: 'SupportLinks' }
      & Pick<SupportLinks, 'json'>
    )> }
  )> }
);
