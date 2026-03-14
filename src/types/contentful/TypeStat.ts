import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeStat'
 * @name TypeStatFields
 * @type {TypeStatFields}
 * @memberof TypeStat
 */
export interface TypeStatFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'value' (Value)
     * @name Value
     * @localized true
     */
    value: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized true
     */
    description?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'stat' (Stat)
 * @name TypeStatSkeleton
 * @type {TypeStatSkeleton}
 * @since 2026-03-14T22:50:44.346Z
 * @version 1
 */
export type TypeStatSkeleton = EntrySkeletonType<TypeStatFields, "stat">;
/**
 * Entry type definition for content type 'stat' (Stat)
 * @name TypeStat
 * @type {TypeStat}
 * @since 2026-03-14T22:50:44.346Z
 * @version 1
 */
export type TypeStat<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStatSkeleton, Modifiers, Locales>;
