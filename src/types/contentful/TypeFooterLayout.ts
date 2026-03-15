import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

/**
 * Fields type definition for content type 'TypeFooterLayout'
 * @name TypeFooterLayoutFields
 * @type {TypeFooterLayoutFields}
 * @memberof TypeFooterLayout
 */
export interface TypeFooterLayoutFields {
    /**
     * Field type definition for field 'companyName' (Company Name)
     * @name Company Name
     * @localized true
     */
    companyName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized true
     */
    description?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'links' (Links)
     * @name Links
     * @localized false
     */
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    /**
     * Field type definition for field 'email' (Email)
     * @name Email
     * @localized false
     */
    email?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'phone' (Phone)
     * @name Phone
     * @localized false
     */
    phone?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'address' (Address)
     * @name Address
     * @localized true
     */
    address?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'facebook' (Facebook)
     * @name Facebook
     * @localized false
     */
    facebook?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'instagram' (Instagram)
     * @name Instagram
     * @localized false
     */
    instagram?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'whatsapp' (WhatsApp)
     * @name WhatsApp
     * @localized false
     */
    whatsapp?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'footerLayout' (Layout footer)
 * @name TypeFooterLayoutSkeleton
 * @type {TypeFooterLayoutSkeleton}
 * @since 2026-03-15T04:23:29.088Z
 * @version 5
 */
export type TypeFooterLayoutSkeleton = EntrySkeletonType<TypeFooterLayoutFields, "footerLayout">;
/**
 * Entry type definition for content type 'footerLayout' (Layout footer)
 * @name TypeFooterLayout
 * @type {TypeFooterLayout}
 * @since 2026-03-15T04:23:29.088Z
 * @version 5
 */
export type TypeFooterLayout<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFooterLayoutSkeleton, Modifiers, Locales>;
