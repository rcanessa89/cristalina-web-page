import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeLogoBar'
 * @name TypeLogoBarFields
 * @type {TypeLogoBarFields}
 * @memberof TypeLogoBar
 */
export interface TypeLogoBarFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'logos' (logos)
     * @name logos
     * @localized false
     */
    logos: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

/**
 * Entry skeleton type definition for content type 'logoBar' (Logo bar)
 * @name TypeLogoBarSkeleton
 * @type {TypeLogoBarSkeleton}
 * @since 2026-03-16T21:01:48.511Z
 * @version 1
 */
export type TypeLogoBarSkeleton = EntrySkeletonType<TypeLogoBarFields, "logoBar">;
/**
 * Entry type definition for content type 'logoBar' (Logo bar)
 * @name TypeLogoBar
 * @type {TypeLogoBar}
 * @since 2026-03-16T21:01:48.511Z
 * @version 1
 */
export type TypeLogoBar<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLogoBarSkeleton, Modifiers, Locales>;
