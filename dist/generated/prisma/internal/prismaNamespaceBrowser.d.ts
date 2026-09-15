import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Profile: 'Profile';
    readonly Project: 'Project';
    readonly Analysis: 'Analysis';
    readonly Issue: 'Issue';
    readonly AiReview: 'AiReview';
    readonly AIissue: 'AIissue';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly username: 'username';
    readonly email: 'email';
    readonly password: 'password';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProfileScalarFieldEnum: {
    readonly id: 'id';
    readonly bio: 'bio';
    readonly githubUrl: 'githubUrl';
    readonly linkedinUrl: 'linkedinUrl';
    readonly websiteUrl: 'websiteUrl';
    readonly userId: 'userId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly description: 'description';
    readonly githubUrl: 'githubUrl';
    readonly liveUrl: 'liveUrl';
    readonly repository: 'repository';
    readonly branch: 'branch';
    readonly userId: 'userId';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const AnalysisScalarFieldEnum: {
    readonly id: 'id';
    readonly projectId: 'projectId';
    readonly score: 'score';
    readonly issues: 'issues';
    readonly security: 'security';
    readonly complexity: 'complexity';
    readonly duplication: 'duplication';
    readonly createdAt: 'createdAt';
};
export type AnalysisScalarFieldEnum = (typeof AnalysisScalarFieldEnum)[keyof typeof AnalysisScalarFieldEnum];
export declare const IssueScalarFieldEnum: {
    readonly id: 'id';
    readonly analysisId: 'analysisId';
    readonly file: 'file';
    readonly line: 'line';
    readonly type: 'type';
    readonly message: 'message';
    readonly severity: 'severity';
    readonly createdAt: 'createdAt';
};
export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum];
export declare const AiReviewScalarFieldEnum: {
    readonly id: 'id';
    readonly analysisId: 'analysisId';
    readonly file: 'file';
    readonly summary: 'summary';
    readonly createdAt: 'createdAt';
};
export type AiReviewScalarFieldEnum = (typeof AiReviewScalarFieldEnum)[keyof typeof AiReviewScalarFieldEnum];
export declare const AIissueScalarFieldEnum: {
    readonly id: 'id';
    readonly reviewId: 'reviewId';
    readonly severity: 'severity';
    readonly category: 'category';
    readonly title: 'title';
    readonly description: 'description';
    readonly line: 'line';
    readonly recommendation: 'recommendation';
    readonly suggestedFix: 'suggestedFix';
    readonly createdAt: 'createdAt';
};
export type AIissueScalarFieldEnum = (typeof AIissueScalarFieldEnum)[keyof typeof AIissueScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map