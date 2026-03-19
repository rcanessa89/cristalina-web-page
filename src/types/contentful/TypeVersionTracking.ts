import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeVersionTracking'
 * @name TypeVersionTrackingFields
 * @type {TypeVersionTrackingFields}
 * @memberof TypeVersionTracking
 */
export interface TypeVersionTrackingFields {
    /**
     * Field type definition for field 'version' (Version)
     * @name Version
     * @localized false
     */
    version: EntryFieldTypes.Integer;
}

/**
 * Entry skeleton type definition for content type 'versionTracking' (Version Tracking)
 * @name TypeVersionTrackingSkeleton
 * @type {TypeVersionTrackingSkeleton}
 * @since 2026-03-17T20:43:30.706Z
 * @version 1
 */
export type TypeVersionTrackingSkeleton = EntrySkeletonType<TypeVersionTrackingFields, "versionTracking">;
/**
 * Entry type definition for content type 'versionTracking' (Version Tracking)
 * @name TypeVersionTracking
 * @type {TypeVersionTracking}
 * @since 2026-03-17T20:43:30.706Z
 * @version 1
 */
export type TypeVersionTracking<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeVersionTrackingSkeleton, Modifiers, Locales>;
