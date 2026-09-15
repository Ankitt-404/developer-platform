import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AIissue
 *
 */
export type AIissueModel = runtime.Types.Result.DefaultSelection<Prisma.$AIissuePayload>;
export type AggregateAIissue = {
    _count: AIissueCountAggregateOutputType | null;
    _avg: AIissueAvgAggregateOutputType | null;
    _sum: AIissueSumAggregateOutputType | null;
    _min: AIissueMinAggregateOutputType | null;
    _max: AIissueMaxAggregateOutputType | null;
};
export type AIissueAvgAggregateOutputType = {
    line: number | null;
};
export type AIissueSumAggregateOutputType = {
    line: number | null;
};
export type AIissueMinAggregateOutputType = {
    id: string | null;
    reviewId: string | null;
    severity: string | null;
    category: string | null;
    title: string | null;
    description: string | null;
    line: number | null;
    recommendation: string | null;
    suggestedFix: string | null;
    createdAt: Date | null;
};
export type AIissueMaxAggregateOutputType = {
    id: string | null;
    reviewId: string | null;
    severity: string | null;
    category: string | null;
    title: string | null;
    description: string | null;
    line: number | null;
    recommendation: string | null;
    suggestedFix: string | null;
    createdAt: Date | null;
};
export type AIissueCountAggregateOutputType = {
    id: number;
    reviewId: number;
    severity: number;
    category: number;
    title: number;
    description: number;
    line: number;
    recommendation: number;
    suggestedFix: number;
    createdAt: number;
    _all: number;
};
export type AIissueAvgAggregateInputType = {
    line?: true;
};
export type AIissueSumAggregateInputType = {
    line?: true;
};
export type AIissueMinAggregateInputType = {
    id?: true;
    reviewId?: true;
    severity?: true;
    category?: true;
    title?: true;
    description?: true;
    line?: true;
    recommendation?: true;
    suggestedFix?: true;
    createdAt?: true;
};
export type AIissueMaxAggregateInputType = {
    id?: true;
    reviewId?: true;
    severity?: true;
    category?: true;
    title?: true;
    description?: true;
    line?: true;
    recommendation?: true;
    suggestedFix?: true;
    createdAt?: true;
};
export type AIissueCountAggregateInputType = {
    id?: true;
    reviewId?: true;
    severity?: true;
    category?: true;
    title?: true;
    description?: true;
    line?: true;
    recommendation?: true;
    suggestedFix?: true;
    createdAt?: true;
    _all?: true;
};
export type AIissueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AIissue to aggregate.
     */
    where?: Prisma.AIissueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AIissues to fetch.
     */
    orderBy?: Prisma.AIissueOrderByWithRelationInput | Prisma.AIissueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AIissueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AIissues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AIissues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AIissues
    **/
    _count?: true | AIissueCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AIissueAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AIissueSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AIissueMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AIissueMaxAggregateInputType;
};
export type GetAIissueAggregateType<T extends AIissueAggregateArgs> = {
    [P in keyof T & keyof AggregateAIissue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAIissue[P]> : Prisma.GetScalarType<T[P], AggregateAIissue[P]>;
};
export type AIissueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIissueWhereInput;
    orderBy?: Prisma.AIissueOrderByWithAggregationInput | Prisma.AIissueOrderByWithAggregationInput[];
    by: Prisma.AIissueScalarFieldEnum[] | Prisma.AIissueScalarFieldEnum;
    having?: Prisma.AIissueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AIissueCountAggregateInputType | true;
    _avg?: AIissueAvgAggregateInputType;
    _sum?: AIissueSumAggregateInputType;
    _min?: AIissueMinAggregateInputType;
    _max?: AIissueMaxAggregateInputType;
};
export type AIissueGroupByOutputType = {
    id: string;
    reviewId: string;
    severity: string;
    category: string;
    title: string;
    description: string;
    line: number | null;
    recommendation: string;
    suggestedFix: string | null;
    createdAt: Date;
    _count: AIissueCountAggregateOutputType | null;
    _avg: AIissueAvgAggregateOutputType | null;
    _sum: AIissueSumAggregateOutputType | null;
    _min: AIissueMinAggregateOutputType | null;
    _max: AIissueMaxAggregateOutputType | null;
};
export type GetAIissueGroupByPayload<T extends AIissueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AIissueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AIissueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AIissueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AIissueGroupByOutputType[P]>;
}>>;
export type AIissueWhereInput = {
    AND?: Prisma.AIissueWhereInput | Prisma.AIissueWhereInput[];
    OR?: Prisma.AIissueWhereInput[];
    NOT?: Prisma.AIissueWhereInput | Prisma.AIissueWhereInput[];
    id?: Prisma.StringFilter<"AIissue"> | string;
    reviewId?: Prisma.StringFilter<"AIissue"> | string;
    severity?: Prisma.StringFilter<"AIissue"> | string;
    category?: Prisma.StringFilter<"AIissue"> | string;
    title?: Prisma.StringFilter<"AIissue"> | string;
    description?: Prisma.StringFilter<"AIissue"> | string;
    line?: Prisma.IntNullableFilter<"AIissue"> | number | null;
    recommendation?: Prisma.StringFilter<"AIissue"> | string;
    suggestedFix?: Prisma.StringNullableFilter<"AIissue"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AIissue"> | Date | string;
    review?: Prisma.XOR<Prisma.AiReviewScalarRelationFilter, Prisma.AiReviewWhereInput>;
};
export type AIissueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reviewId?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    line?: Prisma.SortOrderInput | Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    suggestedFix?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    review?: Prisma.AiReviewOrderByWithRelationInput;
};
export type AIissueWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AIissueWhereInput | Prisma.AIissueWhereInput[];
    OR?: Prisma.AIissueWhereInput[];
    NOT?: Prisma.AIissueWhereInput | Prisma.AIissueWhereInput[];
    reviewId?: Prisma.StringFilter<"AIissue"> | string;
    severity?: Prisma.StringFilter<"AIissue"> | string;
    category?: Prisma.StringFilter<"AIissue"> | string;
    title?: Prisma.StringFilter<"AIissue"> | string;
    description?: Prisma.StringFilter<"AIissue"> | string;
    line?: Prisma.IntNullableFilter<"AIissue"> | number | null;
    recommendation?: Prisma.StringFilter<"AIissue"> | string;
    suggestedFix?: Prisma.StringNullableFilter<"AIissue"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AIissue"> | Date | string;
    review?: Prisma.XOR<Prisma.AiReviewScalarRelationFilter, Prisma.AiReviewWhereInput>;
}, "id">;
export type AIissueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reviewId?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    line?: Prisma.SortOrderInput | Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    suggestedFix?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AIissueCountOrderByAggregateInput;
    _avg?: Prisma.AIissueAvgOrderByAggregateInput;
    _max?: Prisma.AIissueMaxOrderByAggregateInput;
    _min?: Prisma.AIissueMinOrderByAggregateInput;
    _sum?: Prisma.AIissueSumOrderByAggregateInput;
};
export type AIissueScalarWhereWithAggregatesInput = {
    AND?: Prisma.AIissueScalarWhereWithAggregatesInput | Prisma.AIissueScalarWhereWithAggregatesInput[];
    OR?: Prisma.AIissueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AIissueScalarWhereWithAggregatesInput | Prisma.AIissueScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AIissue"> | string;
    reviewId?: Prisma.StringWithAggregatesFilter<"AIissue"> | string;
    severity?: Prisma.StringWithAggregatesFilter<"AIissue"> | string;
    category?: Prisma.StringWithAggregatesFilter<"AIissue"> | string;
    title?: Prisma.StringWithAggregatesFilter<"AIissue"> | string;
    description?: Prisma.StringWithAggregatesFilter<"AIissue"> | string;
    line?: Prisma.IntNullableWithAggregatesFilter<"AIissue"> | number | null;
    recommendation?: Prisma.StringWithAggregatesFilter<"AIissue"> | string;
    suggestedFix?: Prisma.StringNullableWithAggregatesFilter<"AIissue"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AIissue"> | Date | string;
};
export type AIissueCreateInput = {
    id?: string;
    severity: string;
    category: string;
    title: string;
    description: string;
    line?: number | null;
    recommendation: string;
    suggestedFix?: string | null;
    createdAt?: Date | string;
    review: Prisma.AiReviewCreateNestedOneWithoutIssuesInput;
};
export type AIissueUncheckedCreateInput = {
    id?: string;
    reviewId: string;
    severity: string;
    category: string;
    title: string;
    description: string;
    line?: number | null;
    recommendation: string;
    suggestedFix?: string | null;
    createdAt?: Date | string;
};
export type AIissueUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    line?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    suggestedFix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    review?: Prisma.AiReviewUpdateOneRequiredWithoutIssuesNestedInput;
};
export type AIissueUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    line?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    suggestedFix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIissueCreateManyInput = {
    id?: string;
    reviewId: string;
    severity: string;
    category: string;
    title: string;
    description: string;
    line?: number | null;
    recommendation: string;
    suggestedFix?: string | null;
    createdAt?: Date | string;
};
export type AIissueUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    line?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    suggestedFix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIissueUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewId?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    line?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    suggestedFix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIissueListRelationFilter = {
    every?: Prisma.AIissueWhereInput;
    some?: Prisma.AIissueWhereInput;
    none?: Prisma.AIissueWhereInput;
};
export type AIissueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AIissueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewId?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    line?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    suggestedFix?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AIissueAvgOrderByAggregateInput = {
    line?: Prisma.SortOrder;
};
export type AIissueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewId?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    line?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    suggestedFix?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AIissueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reviewId?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    line?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    suggestedFix?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AIissueSumOrderByAggregateInput = {
    line?: Prisma.SortOrder;
};
export type AIissueCreateNestedManyWithoutReviewInput = {
    create?: Prisma.XOR<Prisma.AIissueCreateWithoutReviewInput, Prisma.AIissueUncheckedCreateWithoutReviewInput> | Prisma.AIissueCreateWithoutReviewInput[] | Prisma.AIissueUncheckedCreateWithoutReviewInput[];
    connectOrCreate?: Prisma.AIissueCreateOrConnectWithoutReviewInput | Prisma.AIissueCreateOrConnectWithoutReviewInput[];
    createMany?: Prisma.AIissueCreateManyReviewInputEnvelope;
    connect?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
};
export type AIissueUncheckedCreateNestedManyWithoutReviewInput = {
    create?: Prisma.XOR<Prisma.AIissueCreateWithoutReviewInput, Prisma.AIissueUncheckedCreateWithoutReviewInput> | Prisma.AIissueCreateWithoutReviewInput[] | Prisma.AIissueUncheckedCreateWithoutReviewInput[];
    connectOrCreate?: Prisma.AIissueCreateOrConnectWithoutReviewInput | Prisma.AIissueCreateOrConnectWithoutReviewInput[];
    createMany?: Prisma.AIissueCreateManyReviewInputEnvelope;
    connect?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
};
export type AIissueUpdateManyWithoutReviewNestedInput = {
    create?: Prisma.XOR<Prisma.AIissueCreateWithoutReviewInput, Prisma.AIissueUncheckedCreateWithoutReviewInput> | Prisma.AIissueCreateWithoutReviewInput[] | Prisma.AIissueUncheckedCreateWithoutReviewInput[];
    connectOrCreate?: Prisma.AIissueCreateOrConnectWithoutReviewInput | Prisma.AIissueCreateOrConnectWithoutReviewInput[];
    upsert?: Prisma.AIissueUpsertWithWhereUniqueWithoutReviewInput | Prisma.AIissueUpsertWithWhereUniqueWithoutReviewInput[];
    createMany?: Prisma.AIissueCreateManyReviewInputEnvelope;
    set?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    disconnect?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    delete?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    connect?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    update?: Prisma.AIissueUpdateWithWhereUniqueWithoutReviewInput | Prisma.AIissueUpdateWithWhereUniqueWithoutReviewInput[];
    updateMany?: Prisma.AIissueUpdateManyWithWhereWithoutReviewInput | Prisma.AIissueUpdateManyWithWhereWithoutReviewInput[];
    deleteMany?: Prisma.AIissueScalarWhereInput | Prisma.AIissueScalarWhereInput[];
};
export type AIissueUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: Prisma.XOR<Prisma.AIissueCreateWithoutReviewInput, Prisma.AIissueUncheckedCreateWithoutReviewInput> | Prisma.AIissueCreateWithoutReviewInput[] | Prisma.AIissueUncheckedCreateWithoutReviewInput[];
    connectOrCreate?: Prisma.AIissueCreateOrConnectWithoutReviewInput | Prisma.AIissueCreateOrConnectWithoutReviewInput[];
    upsert?: Prisma.AIissueUpsertWithWhereUniqueWithoutReviewInput | Prisma.AIissueUpsertWithWhereUniqueWithoutReviewInput[];
    createMany?: Prisma.AIissueCreateManyReviewInputEnvelope;
    set?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    disconnect?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    delete?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    connect?: Prisma.AIissueWhereUniqueInput | Prisma.AIissueWhereUniqueInput[];
    update?: Prisma.AIissueUpdateWithWhereUniqueWithoutReviewInput | Prisma.AIissueUpdateWithWhereUniqueWithoutReviewInput[];
    updateMany?: Prisma.AIissueUpdateManyWithWhereWithoutReviewInput | Prisma.AIissueUpdateManyWithWhereWithoutReviewInput[];
    deleteMany?: Prisma.AIissueScalarWhereInput | Prisma.AIissueScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AIissueCreateWithoutReviewInput = {
    id?: string;
    severity: string;
    category: string;
    title: string;
    description: string;
    line?: number | null;
    recommendation: string;
    suggestedFix?: string | null;
    createdAt?: Date | string;
};
export type AIissueUncheckedCreateWithoutReviewInput = {
    id?: string;
    severity: string;
    category: string;
    title: string;
    description: string;
    line?: number | null;
    recommendation: string;
    suggestedFix?: string | null;
    createdAt?: Date | string;
};
export type AIissueCreateOrConnectWithoutReviewInput = {
    where: Prisma.AIissueWhereUniqueInput;
    create: Prisma.XOR<Prisma.AIissueCreateWithoutReviewInput, Prisma.AIissueUncheckedCreateWithoutReviewInput>;
};
export type AIissueCreateManyReviewInputEnvelope = {
    data: Prisma.AIissueCreateManyReviewInput | Prisma.AIissueCreateManyReviewInput[];
    skipDuplicates?: boolean;
};
export type AIissueUpsertWithWhereUniqueWithoutReviewInput = {
    where: Prisma.AIissueWhereUniqueInput;
    update: Prisma.XOR<Prisma.AIissueUpdateWithoutReviewInput, Prisma.AIissueUncheckedUpdateWithoutReviewInput>;
    create: Prisma.XOR<Prisma.AIissueCreateWithoutReviewInput, Prisma.AIissueUncheckedCreateWithoutReviewInput>;
};
export type AIissueUpdateWithWhereUniqueWithoutReviewInput = {
    where: Prisma.AIissueWhereUniqueInput;
    data: Prisma.XOR<Prisma.AIissueUpdateWithoutReviewInput, Prisma.AIissueUncheckedUpdateWithoutReviewInput>;
};
export type AIissueUpdateManyWithWhereWithoutReviewInput = {
    where: Prisma.AIissueScalarWhereInput;
    data: Prisma.XOR<Prisma.AIissueUpdateManyMutationInput, Prisma.AIissueUncheckedUpdateManyWithoutReviewInput>;
};
export type AIissueScalarWhereInput = {
    AND?: Prisma.AIissueScalarWhereInput | Prisma.AIissueScalarWhereInput[];
    OR?: Prisma.AIissueScalarWhereInput[];
    NOT?: Prisma.AIissueScalarWhereInput | Prisma.AIissueScalarWhereInput[];
    id?: Prisma.StringFilter<"AIissue"> | string;
    reviewId?: Prisma.StringFilter<"AIissue"> | string;
    severity?: Prisma.StringFilter<"AIissue"> | string;
    category?: Prisma.StringFilter<"AIissue"> | string;
    title?: Prisma.StringFilter<"AIissue"> | string;
    description?: Prisma.StringFilter<"AIissue"> | string;
    line?: Prisma.IntNullableFilter<"AIissue"> | number | null;
    recommendation?: Prisma.StringFilter<"AIissue"> | string;
    suggestedFix?: Prisma.StringNullableFilter<"AIissue"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AIissue"> | Date | string;
};
export type AIissueCreateManyReviewInput = {
    id?: string;
    severity: string;
    category: string;
    title: string;
    description: string;
    line?: number | null;
    recommendation: string;
    suggestedFix?: string | null;
    createdAt?: Date | string;
};
export type AIissueUpdateWithoutReviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    line?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    suggestedFix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIissueUncheckedUpdateWithoutReviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    line?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    suggestedFix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIissueUncheckedUpdateManyWithoutReviewInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    line?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    suggestedFix?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIissueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reviewId?: boolean;
    severity?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    line?: boolean;
    recommendation?: boolean;
    suggestedFix?: boolean;
    createdAt?: boolean;
    review?: boolean | Prisma.AiReviewDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIissue"]>;
export type AIissueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reviewId?: boolean;
    severity?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    line?: boolean;
    recommendation?: boolean;
    suggestedFix?: boolean;
    createdAt?: boolean;
    review?: boolean | Prisma.AiReviewDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIissue"]>;
export type AIissueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reviewId?: boolean;
    severity?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    line?: boolean;
    recommendation?: boolean;
    suggestedFix?: boolean;
    createdAt?: boolean;
    review?: boolean | Prisma.AiReviewDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aIissue"]>;
export type AIissueSelectScalar = {
    id?: boolean;
    reviewId?: boolean;
    severity?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    line?: boolean;
    recommendation?: boolean;
    suggestedFix?: boolean;
    createdAt?: boolean;
};
export type AIissueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reviewId" | "severity" | "category" | "title" | "description" | "line" | "recommendation" | "suggestedFix" | "createdAt", ExtArgs["result"]["aIissue"]>;
export type AIissueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    review?: boolean | Prisma.AiReviewDefaultArgs<ExtArgs>;
};
export type AIissueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    review?: boolean | Prisma.AiReviewDefaultArgs<ExtArgs>;
};
export type AIissueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    review?: boolean | Prisma.AiReviewDefaultArgs<ExtArgs>;
};
export type $AIissuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AIissue";
    objects: {
        review: Prisma.$AiReviewPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reviewId: string;
        severity: string;
        category: string;
        title: string;
        description: string;
        line: number | null;
        recommendation: string;
        suggestedFix: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["aIissue"]>;
    composites: {};
};
export type AIissueGetPayload<S extends boolean | null | undefined | AIissueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AIissuePayload, S>;
export type AIissueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AIissueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AIissueCountAggregateInputType | true;
};
export interface AIissueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AIissue'];
        meta: {
            name: 'AIissue';
        };
    };
    /**
     * Find zero or one AIissue that matches the filter.
     * @param {AIissueFindUniqueArgs} args - Arguments to find a AIissue
     * @example
     * // Get one AIissue
     * const aIissue = await prisma.aIissue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIissueFindUniqueArgs>(args: Prisma.SelectSubset<T, AIissueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AIissue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIissueFindUniqueOrThrowArgs} args - Arguments to find a AIissue
     * @example
     * // Get one AIissue
     * const aIissue = await prisma.aIissue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIissueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AIissueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AIissue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIissueFindFirstArgs} args - Arguments to find a AIissue
     * @example
     * // Get one AIissue
     * const aIissue = await prisma.aIissue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIissueFindFirstArgs>(args?: Prisma.SelectSubset<T, AIissueFindFirstArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AIissue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIissueFindFirstOrThrowArgs} args - Arguments to find a AIissue
     * @example
     * // Get one AIissue
     * const aIissue = await prisma.aIissue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIissueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AIissueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AIissues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIissueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIissues
     * const aIissues = await prisma.aIissue.findMany()
     *
     * // Get first 10 AIissues
     * const aIissues = await prisma.aIissue.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const aIissueWithIdOnly = await prisma.aIissue.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AIissueFindManyArgs>(args?: Prisma.SelectSubset<T, AIissueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AIissue.
     * @param {AIissueCreateArgs} args - Arguments to create a AIissue.
     * @example
     * // Create one AIissue
     * const AIissue = await prisma.aIissue.create({
     *   data: {
     *     // ... data to create a AIissue
     *   }
     * })
     *
     */
    create<T extends AIissueCreateArgs>(args: Prisma.SelectSubset<T, AIissueCreateArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AIissues.
     * @param {AIissueCreateManyArgs} args - Arguments to create many AIissues.
     * @example
     * // Create many AIissues
     * const aIissue = await prisma.aIissue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AIissueCreateManyArgs>(args?: Prisma.SelectSubset<T, AIissueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AIissues and returns the data saved in the database.
     * @param {AIissueCreateManyAndReturnArgs} args - Arguments to create many AIissues.
     * @example
     * // Create many AIissues
     * const aIissue = await prisma.aIissue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AIissues and only return the `id`
     * const aIissueWithIdOnly = await prisma.aIissue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AIissueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AIissueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AIissue.
     * @param {AIissueDeleteArgs} args - Arguments to delete one AIissue.
     * @example
     * // Delete one AIissue
     * const AIissue = await prisma.aIissue.delete({
     *   where: {
     *     // ... filter to delete one AIissue
     *   }
     * })
     *
     */
    delete<T extends AIissueDeleteArgs>(args: Prisma.SelectSubset<T, AIissueDeleteArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AIissue.
     * @param {AIissueUpdateArgs} args - Arguments to update one AIissue.
     * @example
     * // Update one AIissue
     * const aIissue = await prisma.aIissue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AIissueUpdateArgs>(args: Prisma.SelectSubset<T, AIissueUpdateArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AIissues.
     * @param {AIissueDeleteManyArgs} args - Arguments to filter AIissues to delete.
     * @example
     * // Delete a few AIissues
     * const { count } = await prisma.aIissue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AIissueDeleteManyArgs>(args?: Prisma.SelectSubset<T, AIissueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AIissues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIissueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIissues
     * const aIissue = await prisma.aIissue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AIissueUpdateManyArgs>(args: Prisma.SelectSubset<T, AIissueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AIissues and returns the data updated in the database.
     * @param {AIissueUpdateManyAndReturnArgs} args - Arguments to update many AIissues.
     * @example
     * // Update many AIissues
     * const aIissue = await prisma.aIissue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AIissues and only return the `id`
     * const aIissueWithIdOnly = await prisma.aIissue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AIissueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AIissueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AIissue.
     * @param {AIissueUpsertArgs} args - Arguments to update or create a AIissue.
     * @example
     * // Update or create a AIissue
     * const aIissue = await prisma.aIissue.upsert({
     *   create: {
     *     // ... data to create a AIissue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIissue we want to update
     *   }
     * })
     */
    upsert<T extends AIissueUpsertArgs>(args: Prisma.SelectSubset<T, AIissueUpsertArgs<ExtArgs>>): Prisma.Prisma__AIissueClient<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AIissues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIissueCountArgs} args - Arguments to filter AIissues to count.
     * @example
     * // Count the number of AIissues
     * const count = await prisma.aIissue.count({
     *   where: {
     *     // ... the filter for the AIissues we want to count
     *   }
     * })
    **/
    count<T extends AIissueCountArgs>(args?: Prisma.Subset<T, AIissueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AIissueCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AIissue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIissueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIissueAggregateArgs>(args: Prisma.Subset<T, AIissueAggregateArgs>): Prisma.PrismaPromise<GetAIissueAggregateType<T>>;
    /**
     * Group by AIissue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIissueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AIissueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AIissueGroupByArgs['orderBy'];
    } : {
        orderBy?: AIissueGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AIissueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIissueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AIissue model
     */
    readonly fields: AIissueFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AIissue.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AIissueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    review<T extends Prisma.AiReviewDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AiReviewDefaultArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the AIissue model
 */
export interface AIissueFieldRefs {
    readonly id: Prisma.FieldRef<"AIissue", 'String'>;
    readonly reviewId: Prisma.FieldRef<"AIissue", 'String'>;
    readonly severity: Prisma.FieldRef<"AIissue", 'String'>;
    readonly category: Prisma.FieldRef<"AIissue", 'String'>;
    readonly title: Prisma.FieldRef<"AIissue", 'String'>;
    readonly description: Prisma.FieldRef<"AIissue", 'String'>;
    readonly line: Prisma.FieldRef<"AIissue", 'Int'>;
    readonly recommendation: Prisma.FieldRef<"AIissue", 'String'>;
    readonly suggestedFix: Prisma.FieldRef<"AIissue", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AIissue", 'DateTime'>;
}
/**
 * AIissue findUnique
 */
export type AIissueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * Filter, which AIissue to fetch.
     */
    where: Prisma.AIissueWhereUniqueInput;
};
/**
 * AIissue findUniqueOrThrow
 */
export type AIissueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * Filter, which AIissue to fetch.
     */
    where: Prisma.AIissueWhereUniqueInput;
};
/**
 * AIissue findFirst
 */
export type AIissueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * Filter, which AIissue to fetch.
     */
    where?: Prisma.AIissueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AIissues to fetch.
     */
    orderBy?: Prisma.AIissueOrderByWithRelationInput | Prisma.AIissueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AIissues.
     */
    cursor?: Prisma.AIissueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AIissues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AIissues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AIissues.
     */
    distinct?: Prisma.AIissueScalarFieldEnum | Prisma.AIissueScalarFieldEnum[];
};
/**
 * AIissue findFirstOrThrow
 */
export type AIissueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * Filter, which AIissue to fetch.
     */
    where?: Prisma.AIissueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AIissues to fetch.
     */
    orderBy?: Prisma.AIissueOrderByWithRelationInput | Prisma.AIissueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AIissues.
     */
    cursor?: Prisma.AIissueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AIissues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AIissues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AIissues.
     */
    distinct?: Prisma.AIissueScalarFieldEnum | Prisma.AIissueScalarFieldEnum[];
};
/**
 * AIissue findMany
 */
export type AIissueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * Filter, which AIissues to fetch.
     */
    where?: Prisma.AIissueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AIissues to fetch.
     */
    orderBy?: Prisma.AIissueOrderByWithRelationInput | Prisma.AIissueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AIissues.
     */
    cursor?: Prisma.AIissueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AIissues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AIissues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AIissues.
     */
    distinct?: Prisma.AIissueScalarFieldEnum | Prisma.AIissueScalarFieldEnum[];
};
/**
 * AIissue create
 */
export type AIissueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * The data needed to create a AIissue.
     */
    data: Prisma.XOR<Prisma.AIissueCreateInput, Prisma.AIissueUncheckedCreateInput>;
};
/**
 * AIissue createMany
 */
export type AIissueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIissues.
     */
    data: Prisma.AIissueCreateManyInput | Prisma.AIissueCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AIissue createManyAndReturn
 */
export type AIissueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * The data used to create many AIissues.
     */
    data: Prisma.AIissueCreateManyInput | Prisma.AIissueCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AIissue update
 */
export type AIissueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * The data needed to update a AIissue.
     */
    data: Prisma.XOR<Prisma.AIissueUpdateInput, Prisma.AIissueUncheckedUpdateInput>;
    /**
     * Choose, which AIissue to update.
     */
    where: Prisma.AIissueWhereUniqueInput;
};
/**
 * AIissue updateMany
 */
export type AIissueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AIissues.
     */
    data: Prisma.XOR<Prisma.AIissueUpdateManyMutationInput, Prisma.AIissueUncheckedUpdateManyInput>;
    /**
     * Filter which AIissues to update
     */
    where?: Prisma.AIissueWhereInput;
    /**
     * Limit how many AIissues to update.
     */
    limit?: number;
};
/**
 * AIissue updateManyAndReturn
 */
export type AIissueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * The data used to update AIissues.
     */
    data: Prisma.XOR<Prisma.AIissueUpdateManyMutationInput, Prisma.AIissueUncheckedUpdateManyInput>;
    /**
     * Filter which AIissues to update
     */
    where?: Prisma.AIissueWhereInput;
    /**
     * Limit how many AIissues to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AIissue upsert
 */
export type AIissueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * The filter to search for the AIissue to update in case it exists.
     */
    where: Prisma.AIissueWhereUniqueInput;
    /**
     * In case the AIissue found by the `where` argument doesn't exist, create a new AIissue with this data.
     */
    create: Prisma.XOR<Prisma.AIissueCreateInput, Prisma.AIissueUncheckedCreateInput>;
    /**
     * In case the AIissue was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AIissueUpdateInput, Prisma.AIissueUncheckedUpdateInput>;
};
/**
 * AIissue delete
 */
export type AIissueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
    /**
     * Filter which AIissue to delete.
     */
    where: Prisma.AIissueWhereUniqueInput;
};
/**
 * AIissue deleteMany
 */
export type AIissueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AIissues to delete
     */
    where?: Prisma.AIissueWhereInput;
    /**
     * Limit how many AIissues to delete.
     */
    limit?: number;
};
/**
 * AIissue without action
 */
export type AIissueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIissue
     */
    select?: Prisma.AIissueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AIissue
     */
    omit?: Prisma.AIissueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AIissueInclude<ExtArgs> | null;
};
//# sourceMappingURL=AIissue.d.ts.map