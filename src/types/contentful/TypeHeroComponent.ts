import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

/**
 * Fields type definition for content type 'TypeHeroComponent'
 * @name TypeHeroComponentFields
 * @type {TypeHeroComponentFields}
 * @memberof TypeHeroComponent
 */
export interface TypeHeroComponentFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'subtitle' (Subtitle)
     * @name Subtitle
     * @localized true
     */
    subtitle?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'cta' (Cta)
     * @name Cta
     * @localized false
     */
    cta?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'imageReverse' (Image reverse)
     * @name Image reverse
     * @localized false
     */
    imageReverse?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'backgroundImage' (Background image)
     * @name Background image
     * @localized false
     */
    backgroundImage?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

/**
 * Entry skeleton type definition for content type 'heroComponent' (Hero)
 * @name TypeHeroComponentSkeleton
 * @type {TypeHeroComponentSkeleton}
 * @since 2026-03-14T08:34:47.851Z
 * @version 17
 */
export type TypeHeroComponentSkeleton = EntrySkeletonType<TypeHeroComponentFields, "heroComponent">;
/**
 * Entry type definition for content type 'heroComponent' (Hero)
 * @name TypeHeroComponent
 * @type {TypeHeroComponent}
 * @since 2026-03-14T08:34:47.851Z
 * @version 17
 */
export type TypeHeroComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroComponentSkeleton, Modifiers, Locales>;
