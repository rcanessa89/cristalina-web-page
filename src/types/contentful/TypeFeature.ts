import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeFeature'
 * @name TypeFeatureFields
 * @type {TypeFeatureFields}
 * @memberof TypeFeature
 */
export interface TypeFeatureFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized true
     */
    description?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'feature' (Feature)
 * @name TypeFeatureSkeleton
 * @type {TypeFeatureSkeleton}
 */
export type TypeFeatureSkeleton = EntrySkeletonType<TypeFeatureFields, "feature">;
/**
 * Entry type definition for content type 'feature' (Feature)
 * @name TypeFeature
 * @type {TypeFeature}
 */
export type TypeFeature<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFeatureSkeleton, Modifiers, Locales>;
