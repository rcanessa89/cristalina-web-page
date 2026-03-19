import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardListSkeleton } from "./TypeCardList";
import type { TypeCtaBannerSkeleton } from "./TypeCtaBanner";
import type { TypeFeaturedListSkeleton } from "./TypeFeaturedList";
import type { TypeHeroComponentSkeleton } from "./TypeHeroComponent";
import type { TypeLogoBarSkeleton } from "./TypeLogoBar";
import type { TypeProductSpecsSkeleton } from "./TypeProductSpecs";
import type { TypeStatsSkeleton } from "./TypeStats";

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized true
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'metaDescription' (Meta Description)
     * @name Meta Description
     * @localized true
     */
    metaDescription?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'ogImage' (OG Image)
     * @name OG Image
     * @localized false
     */
    ogImage?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'content' (Content)
     * @name Content
     * @localized false
     */
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardListSkeleton | TypeCtaBannerSkeleton | TypeFeaturedListSkeleton | TypeHeroComponentSkeleton | TypeLogoBarSkeleton | TypeProductSpecsSkeleton | TypeStatsSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @since 2026-03-14T08:38:57.905Z
 * @version 21
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @since 2026-03-14T08:38:57.905Z
 * @version 21
 */
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
