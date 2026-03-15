import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFeatureSkeleton } from "./TypeFeature";

/**
 * Fields type definition for content type 'TypeFeatureList'
 * @name TypeFeatureListFields
 * @type {TypeFeatureListFields}
 * @memberof TypeFeatureList
 */
export interface TypeFeatureListFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'items' (Items)
     * @name Items
     * @localized false
     */
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFeatureSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'featureList' (Feature List)
 * @name TypeFeatureListSkeleton
 * @type {TypeFeatureListSkeleton}
 */
export type TypeFeatureListSkeleton = EntrySkeletonType<TypeFeatureListFields, "featureList">;
/**
 * Entry type definition for content type 'featureList' (Feature List)
 * @name TypeFeatureList
 * @type {TypeFeatureList}
 */
export type TypeFeatureList<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFeatureListSkeleton, Modifiers, Locales>;
