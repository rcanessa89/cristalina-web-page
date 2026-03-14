import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized true
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'content' (Content)
     * @name Content
     * @localized false
     */
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @since 2026-03-14T08:38:57.905Z
 * @version 7
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @since 2026-03-14T08:38:57.905Z
 * @version 7
 */
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
