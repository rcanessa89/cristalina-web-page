import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeLink'
 * @name TypeLinkFields
 * @type {TypeLinkFields}
 * @memberof TypeLink
 */
export interface TypeLinkFields {
    /**
     * Field type definition for field 'linkText' (Link text)
     * @name Link text
     * @localized true
     */
    linkText: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'url' (Url)
     * @name Url
     * @localized false
     */
    url: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'link' (Link)
 * @name TypeLinkSkeleton
 * @type {TypeLinkSkeleton}
 * @since 2026-03-14T09:00:25.652Z
 * @version 1
 */
export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
/**
 * Entry type definition for content type 'link' (Link)
 * @name TypeLink
 * @type {TypeLink}
 * @since 2026-03-14T09:00:25.652Z
 * @version 1
 */
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;
