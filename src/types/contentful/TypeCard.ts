import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

/**
 * Fields type definition for content type 'TypeCard'
 * @name TypeCardFields
 * @type {TypeCardFields}
 * @memberof TypeCard
 */
export interface TypeCardFields {
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
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'cta' (Call to action)
     * @name Call to action
     * @localized false
     */
    cta?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'card' (Card)
 * @name TypeCardSkeleton
 * @type {TypeCardSkeleton}
 * @since 2026-03-14T23:38:38.997Z
 * @version 3
 */
export type TypeCardSkeleton = EntrySkeletonType<TypeCardFields, "card">;
/**
 * Entry type definition for content type 'card' (Card)
 * @name TypeCard
 * @type {TypeCard}
 * @since 2026-03-14T23:38:38.997Z
 * @version 3
 */
export type TypeCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardSkeleton, Modifiers, Locales>;
