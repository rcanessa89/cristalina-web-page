import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";

/**
 * Fields type definition for content type 'TypeCardList'
 * @name TypeCardListFields
 * @type {TypeCardListFields}
 * @memberof TypeCardList
 */
export interface TypeCardListFields {
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
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'cardList' (Card list)
 * @name TypeCardListSkeleton
 * @type {TypeCardListSkeleton}
 * @since 2026-03-14T23:41:05.333Z
 * @version 3
 */
export type TypeCardListSkeleton = EntrySkeletonType<TypeCardListFields, "cardList">;
/**
 * Entry type definition for content type 'cardList' (Card list)
 * @name TypeCardList
 * @type {TypeCardList}
 * @since 2026-03-14T23:41:05.333Z
 * @version 3
 */
export type TypeCardList<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCardListSkeleton, Modifiers, Locales>;
