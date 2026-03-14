import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeStatSkeleton } from "./TypeStat";

/**
 * Fields type definition for content type 'TypeStats'
 * @name TypeStatsFields
 * @type {TypeStatsFields}
 * @memberof TypeStats
 */
export interface TypeStatsFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'items' (Items)
     * @name Items
     * @localized false
     */
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeStatSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'stats' (Stats)
 * @name TypeStatsSkeleton
 * @type {TypeStatsSkeleton}
 * @since 2026-03-14T22:48:28.300Z
 * @version 3
 */
export type TypeStatsSkeleton = EntrySkeletonType<TypeStatsFields, "stats">;
/**
 * Entry type definition for content type 'stats' (Stats)
 * @name TypeStats
 * @type {TypeStats}
 * @since 2026-03-14T22:48:28.300Z
 * @version 3
 */
export type TypeStats<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStatsSkeleton, Modifiers, Locales>;
