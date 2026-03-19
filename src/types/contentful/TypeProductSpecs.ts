import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSpecSkeleton } from "./TypeSpec";

/**
 * Fields type definition for content type 'TypeProductSpecs'
 * @name TypeProductSpecsFields
 * @type {TypeProductSpecsFields}
 * @memberof TypeProductSpecs
 */
export interface TypeProductSpecsFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title?: EntryFieldTypes.Symbol;
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
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'items' (Items)
     * @name Items
     * @localized false
     */
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSpecSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'productSpecs' (Product Specs)
 * @name TypeProductSpecsSkeleton
 * @type {TypeProductSpecsSkeleton}
 * @since 2026-03-19T06:13:45.685Z
 * @version 1
 */
export type TypeProductSpecsSkeleton = EntrySkeletonType<TypeProductSpecsFields, "productSpecs">;
/**
 * Entry type definition for content type 'productSpecs' (Product Specs)
 * @name TypeProductSpecs
 * @type {TypeProductSpecs}
 * @since 2026-03-19T06:13:45.685Z
 * @version 1
 */
export type TypeProductSpecs<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductSpecsSkeleton, Modifiers, Locales>;
