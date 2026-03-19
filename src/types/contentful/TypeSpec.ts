import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSpec'
 * @name TypeSpecFields
 * @type {TypeSpecFields}
 * @memberof TypeSpec
 */
export interface TypeSpecFields {
    /**
     * Field type definition for field 'label' (Label)
     * @name Label
     * @localized true
     */
    label: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'value' (Value)
     * @name Value
     * @localized true
     */
    value: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'spec' (Spec)
 * @name TypeSpecSkeleton
 * @type {TypeSpecSkeleton}
 * @since 2026-03-19T06:13:43.124Z
 * @version 1
 */
export type TypeSpecSkeleton = EntrySkeletonType<TypeSpecFields, "spec">;
/**
 * Entry type definition for content type 'spec' (Spec)
 * @name TypeSpec
 * @type {TypeSpec}
 * @since 2026-03-19T06:13:43.124Z
 * @version 1
 */
export type TypeSpec<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSpecSkeleton, Modifiers, Locales>;
