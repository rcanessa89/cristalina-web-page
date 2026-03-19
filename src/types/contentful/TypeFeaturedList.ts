import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFeatureSkeleton } from "./TypeFeature";

/**
 * Fields type definition for content type 'TypeFeaturedList'
 * @name TypeFeaturedListFields
 * @type {TypeFeaturedListFields}
 * @memberof TypeFeaturedList
 */
export interface TypeFeaturedListFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'variant' (Variant)
     * @name Variant
     * @localized false
     */
    variant?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'items' (Items)
     * @name Items
     * @localized false
     */
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFeatureSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'featuredList' (Feature list)
 * @name TypeFeaturedListSkeleton
 * @type {TypeFeaturedListSkeleton}
 * @since 2026-03-16T02:02:49.701Z
 * @version 3
 */
export type TypeFeaturedListSkeleton = EntrySkeletonType<TypeFeaturedListFields, "featuredList">;
/**
 * Entry type definition for content type 'featuredList' (Feature list)
 * @name TypeFeaturedList
 * @type {TypeFeaturedList}
 * @since 2026-03-16T02:02:49.701Z
 * @version 3
 */
export type TypeFeaturedList<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFeaturedListSkeleton, Modifiers, Locales>;
