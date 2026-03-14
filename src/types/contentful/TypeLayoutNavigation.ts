import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

/**
 * Fields type definition for content type 'TypeLayoutNavigation'
 * @name TypeLayoutNavigationFields
 * @type {TypeLayoutNavigationFields}
 * @memberof TypeLayoutNavigation
 */
export interface TypeLayoutNavigationFields {
    /**
     * Field type definition for field 'links' (Links)
     * @name Links
     * @localized false
     */
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'layoutNavigation' (Layout navigation)
 * @name TypeLayoutNavigationSkeleton
 * @type {TypeLayoutNavigationSkeleton}
 * @since 2026-03-14T20:11:12.147Z
 * @version 1
 */
export type TypeLayoutNavigationSkeleton = EntrySkeletonType<TypeLayoutNavigationFields, "layoutNavigation">;
/**
 * Entry type definition for content type 'layoutNavigation' (Layout navigation)
 * @name TypeLayoutNavigation
 * @type {TypeLayoutNavigation}
 * @since 2026-03-14T20:11:12.147Z
 * @version 1
 */
export type TypeLayoutNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLayoutNavigationSkeleton, Modifiers, Locales>;
