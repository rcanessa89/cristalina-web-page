import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

/**
 * Fields type definition for content type 'TypeCtaBanner'
 * @name TypeCtaBannerFields
 * @type {TypeCtaBannerFields}
 * @memberof TypeCtaBanner
 */
export interface TypeCtaBannerFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'subtitle' (Subtitle)
     * @name Subtitle
     * @localized true
     */
    subtitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'cta' (CTA)
     * @name CTA
     * @localized false
     */
    cta?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
    /**
     * Field type definition for field 'backgroundImage' (Background Image)
     * @name Background Image
     * @localized false
     */
    backgroundImage?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'ctaBanner' (CTA Banner)
 * @name TypeCtaBannerSkeleton
 * @type {TypeCtaBannerSkeleton}
 * @since 2026-03-19T06:13:48.129Z
 * @version 1
 */
export type TypeCtaBannerSkeleton = EntrySkeletonType<TypeCtaBannerFields, "ctaBanner">;
/**
 * Entry type definition for content type 'ctaBanner' (CTA Banner)
 * @name TypeCtaBanner
 * @type {TypeCtaBanner}
 * @since 2026-03-19T06:13:48.129Z
 * @version 1
 */
export type TypeCtaBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCtaBannerSkeleton, Modifiers, Locales>;
