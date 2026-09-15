import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model AiReview
 *
 */
export type AiReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$AiReviewPayload>;
export type AggregateAiReview = {
    _count: AiReviewCountAggregateOutputType | null;
    _min: AiReviewMinAggregateOutputType | null;
    _max: AiReviewMaxAggregateOutputType | null;
};
export type AiReviewMinAggregateOutputType = {
    id: string | null;
    analysisId: string | null;
    file: string | null;
    summary: string | null;
    createdAt: Date | null;
};
export type AiReviewMaxAggregateOutputType = {
    id: string | null;
    analysisId: string | null;
    file: string | null;
    summary: string | null;
    createdAt: Date | null;
};
export type AiReviewCountAggregateOutputType = {
    id: number;
    analysisId: number;
    file: number;
    summary: number;
    createdAt: number;
    _all: number;
};
export type AiReviewMinAggregateInputType = {
    id?: true;
    analysisId?: true;
    file?: true;
    summary?: true;
    createdAt?: true;
};
export type AiReviewMaxAggregateInputType = {
    id?: true;
    analysisId?: true;
    file?: true;
    summary?: true;
    createdAt?: true;
};
export type AiReviewCountAggregateInputType = {
    id?: true;
    analysisId?: true;
    file?: true;
    summary?: true;
    createdAt?: true;
    _all?: true;
};
export type AiReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AiReview to aggregate.
     */
    where?: Prisma.AiReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReviews to fetch.
     */
    orderBy?: Prisma.AiReviewOrderByWithRelationInput | Prisma.AiReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AiReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AiReviews
    **/
    _count?: true | AiReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AiReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AiReviewMaxAggregateInputType;
};
export type GetAiReviewAggregateType<T extends AiReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateAiReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAiReview[P]> : Prisma.GetScalarType<T[P], AggregateAiReview[P]>;
};
export type AiReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AiReviewWhereInput;
    orderBy?: Prisma.AiReviewOrderByWithAggregationInput | Prisma.AiReviewOrderByWithAggregationInput[];
    by: Prisma.AiReviewScalarFieldEnum[] | Prisma.AiReviewScalarFieldEnum;
    having?: Prisma.AiReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AiReviewCountAggregateInputType | true;
    _min?: AiReviewMinAggregateInputType;
    _max?: AiReviewMaxAggregateInputType;
};
export type AiReviewGroupByOutputType = {
    id: string;
    analysisId: string;
    file: string;
    summary: string;
    createdAt: Date;
    _count: AiReviewCountAggregateOutputType | null;
    _min: AiReviewMinAggregateOutputType | null;
    _max: AiReviewMaxAggregateOutputType | null;
};
export type GetAiReviewGroupByPayload<T extends AiReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AiReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AiReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AiReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AiReviewGroupByOutputType[P]>;
}>>;
export type AiReviewWhereInput = {
    AND?: Prisma.AiReviewWhereInput | Prisma.AiReviewWhereInput[];
    OR?: Prisma.AiReviewWhereInput[];
    NOT?: Prisma.AiReviewWhereInput | Prisma.AiReviewWhereInput[];
    id?: Prisma.StringFilter<"AiReview"> | string;
    analysisId?: Prisma.StringFilter<"AiReview"> | string;
    file?: Prisma.StringFilter<"AiReview"> | string;
    summary?: Prisma.StringFilter<"AiReview"> | string;
    createdAt?: Prisma.DateTimeFilter<"AiReview"> | Date | string;
    analysis?: Prisma.XOR<Prisma.AnalysisScalarRelationFilter, Prisma.AnalysisWhereInput>;
    issues?: Prisma.AIissueListRelationFilter;
};
export type AiReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    analysis?: Prisma.AnalysisOrderByWithRelationInput;
    issues?: Prisma.AIissueOrderByRelationAggregateInput;
};
export type AiReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AiReviewWhereInput | Prisma.AiReviewWhereInput[];
    OR?: Prisma.AiReviewWhereInput[];
    NOT?: Prisma.AiReviewWhereInput | Prisma.AiReviewWhereInput[];
    analysisId?: Prisma.StringFilter<"AiReview"> | string;
    file?: Prisma.StringFilter<"AiReview"> | string;
    summary?: Prisma.StringFilter<"AiReview"> | string;
    createdAt?: Prisma.DateTimeFilter<"AiReview"> | Date | string;
    analysis?: Prisma.XOR<Prisma.AnalysisScalarRelationFilter, Prisma.AnalysisWhereInput>;
    issues?: Prisma.AIissueListRelationFilter;
}, "id">;
export type AiReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AiReviewCountOrderByAggregateInput;
    _max?: Prisma.AiReviewMaxOrderByAggregateInput;
    _min?: Prisma.AiReviewMinOrderByAggregateInput;
};
export type AiReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.AiReviewScalarWhereWithAggregatesInput | Prisma.AiReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.AiReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AiReviewScalarWhereWithAggregatesInput | Prisma.AiReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AiReview"> | string;
    analysisId?: Prisma.StringWithAggregatesFilter<"AiReview"> | string;
    file?: Prisma.StringWithAggregatesFilter<"AiReview"> | string;
    summary?: Prisma.StringWithAggregatesFilter<"AiReview"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AiReview"> | Date | string;
};
export type AiReviewCreateInput = {
    id?: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
    analysis: Prisma.AnalysisCreateNestedOneWithoutAiReviewsInput;
    issues?: Prisma.AIissueCreateNestedManyWithoutReviewInput;
};
export type AiReviewUncheckedCreateInput = {
    id?: string;
    analysisId: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
    issues?: Prisma.AIissueUncheckedCreateNestedManyWithoutReviewInput;
};
export type AiReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: Prisma.AnalysisUpdateOneRequiredWithoutAiReviewsNestedInput;
    issues?: Prisma.AIissueUpdateManyWithoutReviewNestedInput;
};
export type AiReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    analysisId?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.AIissueUncheckedUpdateManyWithoutReviewNestedInput;
};
export type AiReviewCreateManyInput = {
    id?: string;
    analysisId: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
};
export type AiReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    analysisId?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiReviewListRelationFilter = {
    every?: Prisma.AiReviewWhereInput;
    some?: Prisma.AiReviewWhereInput;
    none?: Prisma.AiReviewWhereInput;
};
export type AiReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AiReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    analysisId?: Prisma.SortOrder;
    file?: Prisma.SortOrder;
    summary?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AiReviewScalarRelationFilter = {
    is?: Prisma.AiReviewWhereInput;
    isNot?: Prisma.AiReviewWhereInput;
};
export type AiReviewCreateNestedManyWithoutAnalysisInput = {
    create?: Prisma.XOR<Prisma.AiReviewCreateWithoutAnalysisInput, Prisma.AiReviewUncheckedCreateWithoutAnalysisInput> | Prisma.AiReviewCreateWithoutAnalysisInput[] | Prisma.AiReviewUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.AiReviewCreateOrConnectWithoutAnalysisInput | Prisma.AiReviewCreateOrConnectWithoutAnalysisInput[];
    createMany?: Prisma.AiReviewCreateManyAnalysisInputEnvelope;
    connect?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
};
export type AiReviewUncheckedCreateNestedManyWithoutAnalysisInput = {
    create?: Prisma.XOR<Prisma.AiReviewCreateWithoutAnalysisInput, Prisma.AiReviewUncheckedCreateWithoutAnalysisInput> | Prisma.AiReviewCreateWithoutAnalysisInput[] | Prisma.AiReviewUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.AiReviewCreateOrConnectWithoutAnalysisInput | Prisma.AiReviewCreateOrConnectWithoutAnalysisInput[];
    createMany?: Prisma.AiReviewCreateManyAnalysisInputEnvelope;
    connect?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
};
export type AiReviewUpdateManyWithoutAnalysisNestedInput = {
    create?: Prisma.XOR<Prisma.AiReviewCreateWithoutAnalysisInput, Prisma.AiReviewUncheckedCreateWithoutAnalysisInput> | Prisma.AiReviewCreateWithoutAnalysisInput[] | Prisma.AiReviewUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.AiReviewCreateOrConnectWithoutAnalysisInput | Prisma.AiReviewCreateOrConnectWithoutAnalysisInput[];
    upsert?: Prisma.AiReviewUpsertWithWhereUniqueWithoutAnalysisInput | Prisma.AiReviewUpsertWithWhereUniqueWithoutAnalysisInput[];
    createMany?: Prisma.AiReviewCreateManyAnalysisInputEnvelope;
    set?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    disconnect?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    delete?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    connect?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    update?: Prisma.AiReviewUpdateWithWhereUniqueWithoutAnalysisInput | Prisma.AiReviewUpdateWithWhereUniqueWithoutAnalysisInput[];
    updateMany?: Prisma.AiReviewUpdateManyWithWhereWithoutAnalysisInput | Prisma.AiReviewUpdateManyWithWhereWithoutAnalysisInput[];
    deleteMany?: Prisma.AiReviewScalarWhereInput | Prisma.AiReviewScalarWhereInput[];
};
export type AiReviewUncheckedUpdateManyWithoutAnalysisNestedInput = {
    create?: Prisma.XOR<Prisma.AiReviewCreateWithoutAnalysisInput, Prisma.AiReviewUncheckedCreateWithoutAnalysisInput> | Prisma.AiReviewCreateWithoutAnalysisInput[] | Prisma.AiReviewUncheckedCreateWithoutAnalysisInput[];
    connectOrCreate?: Prisma.AiReviewCreateOrConnectWithoutAnalysisInput | Prisma.AiReviewCreateOrConnectWithoutAnalysisInput[];
    upsert?: Prisma.AiReviewUpsertWithWhereUniqueWithoutAnalysisInput | Prisma.AiReviewUpsertWithWhereUniqueWithoutAnalysisInput[];
    createMany?: Prisma.AiReviewCreateManyAnalysisInputEnvelope;
    set?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    disconnect?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    delete?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    connect?: Prisma.AiReviewWhereUniqueInput | Prisma.AiReviewWhereUniqueInput[];
    update?: Prisma.AiReviewUpdateWithWhereUniqueWithoutAnalysisInput | Prisma.AiReviewUpdateWithWhereUniqueWithoutAnalysisInput[];
    updateMany?: Prisma.AiReviewUpdateManyWithWhereWithoutAnalysisInput | Prisma.AiReviewUpdateManyWithWhereWithoutAnalysisInput[];
    deleteMany?: Prisma.AiReviewScalarWhereInput | Prisma.AiReviewScalarWhereInput[];
};
export type AiReviewCreateNestedOneWithoutIssuesInput = {
    create?: Prisma.XOR<Prisma.AiReviewCreateWithoutIssuesInput, Prisma.AiReviewUncheckedCreateWithoutIssuesInput>;
    connectOrCreate?: Prisma.AiReviewCreateOrConnectWithoutIssuesInput;
    connect?: Prisma.AiReviewWhereUniqueInput;
};
export type AiReviewUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: Prisma.XOR<Prisma.AiReviewCreateWithoutIssuesInput, Prisma.AiReviewUncheckedCreateWithoutIssuesInput>;
    connectOrCreate?: Prisma.AiReviewCreateOrConnectWithoutIssuesInput;
    upsert?: Prisma.AiReviewUpsertWithoutIssuesInput;
    connect?: Prisma.AiReviewWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AiReviewUpdateToOneWithWhereWithoutIssuesInput, Prisma.AiReviewUpdateWithoutIssuesInput>, Prisma.AiReviewUncheckedUpdateWithoutIssuesInput>;
};
export type AiReviewCreateWithoutAnalysisInput = {
    id?: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
    issues?: Prisma.AIissueCreateNestedManyWithoutReviewInput;
};
export type AiReviewUncheckedCreateWithoutAnalysisInput = {
    id?: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
    issues?: Prisma.AIissueUncheckedCreateNestedManyWithoutReviewInput;
};
export type AiReviewCreateOrConnectWithoutAnalysisInput = {
    where: Prisma.AiReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiReviewCreateWithoutAnalysisInput, Prisma.AiReviewUncheckedCreateWithoutAnalysisInput>;
};
export type AiReviewCreateManyAnalysisInputEnvelope = {
    data: Prisma.AiReviewCreateManyAnalysisInput | Prisma.AiReviewCreateManyAnalysisInput[];
    skipDuplicates?: boolean;
};
export type AiReviewUpsertWithWhereUniqueWithoutAnalysisInput = {
    where: Prisma.AiReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.AiReviewUpdateWithoutAnalysisInput, Prisma.AiReviewUncheckedUpdateWithoutAnalysisInput>;
    create: Prisma.XOR<Prisma.AiReviewCreateWithoutAnalysisInput, Prisma.AiReviewUncheckedCreateWithoutAnalysisInput>;
};
export type AiReviewUpdateWithWhereUniqueWithoutAnalysisInput = {
    where: Prisma.AiReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.AiReviewUpdateWithoutAnalysisInput, Prisma.AiReviewUncheckedUpdateWithoutAnalysisInput>;
};
export type AiReviewUpdateManyWithWhereWithoutAnalysisInput = {
    where: Prisma.AiReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.AiReviewUpdateManyMutationInput, Prisma.AiReviewUncheckedUpdateManyWithoutAnalysisInput>;
};
export type AiReviewScalarWhereInput = {
    AND?: Prisma.AiReviewScalarWhereInput | Prisma.AiReviewScalarWhereInput[];
    OR?: Prisma.AiReviewScalarWhereInput[];
    NOT?: Prisma.AiReviewScalarWhereInput | Prisma.AiReviewScalarWhereInput[];
    id?: Prisma.StringFilter<"AiReview"> | string;
    analysisId?: Prisma.StringFilter<"AiReview"> | string;
    file?: Prisma.StringFilter<"AiReview"> | string;
    summary?: Prisma.StringFilter<"AiReview"> | string;
    createdAt?: Prisma.DateTimeFilter<"AiReview"> | Date | string;
};
export type AiReviewCreateWithoutIssuesInput = {
    id?: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
    analysis: Prisma.AnalysisCreateNestedOneWithoutAiReviewsInput;
};
export type AiReviewUncheckedCreateWithoutIssuesInput = {
    id?: string;
    analysisId: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
};
export type AiReviewCreateOrConnectWithoutIssuesInput = {
    where: Prisma.AiReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.AiReviewCreateWithoutIssuesInput, Prisma.AiReviewUncheckedCreateWithoutIssuesInput>;
};
export type AiReviewUpsertWithoutIssuesInput = {
    update: Prisma.XOR<Prisma.AiReviewUpdateWithoutIssuesInput, Prisma.AiReviewUncheckedUpdateWithoutIssuesInput>;
    create: Prisma.XOR<Prisma.AiReviewCreateWithoutIssuesInput, Prisma.AiReviewUncheckedCreateWithoutIssuesInput>;
    where?: Prisma.AiReviewWhereInput;
};
export type AiReviewUpdateToOneWithWhereWithoutIssuesInput = {
    where?: Prisma.AiReviewWhereInput;
    data: Prisma.XOR<Prisma.AiReviewUpdateWithoutIssuesInput, Prisma.AiReviewUncheckedUpdateWithoutIssuesInput>;
};
export type AiReviewUpdateWithoutIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: Prisma.AnalysisUpdateOneRequiredWithoutAiReviewsNestedInput;
};
export type AiReviewUncheckedUpdateWithoutIssuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    analysisId?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AiReviewCreateManyAnalysisInput = {
    id?: string;
    file: string;
    summary: string;
    createdAt?: Date | string;
};
export type AiReviewUpdateWithoutAnalysisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.AIissueUpdateManyWithoutReviewNestedInput;
};
export type AiReviewUncheckedUpdateWithoutAnalysisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    issues?: Prisma.AIissueUncheckedUpdateManyWithoutReviewNestedInput;
};
export type AiReviewUncheckedUpdateManyWithoutAnalysisInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    file?: Prisma.StringFieldUpdateOperationsInput | string;
    summary?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AiReviewCountOutputType
 */
export type AiReviewCountOutputType = {
    issues: number;
};
export type AiReviewCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issues?: boolean | AiReviewCountOutputTypeCountIssuesArgs;
};
/**
 * AiReviewCountOutputType without action
 */
export type AiReviewCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReviewCountOutputType
     */
    select?: Prisma.AiReviewCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AiReviewCountOutputType without action
 */
export type AiReviewCountOutputTypeCountIssuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIissueWhereInput;
};
export type AiReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    analysisId?: boolean;
    file?: boolean;
    summary?: boolean;
    createdAt?: boolean;
    analysis?: boolean | Prisma.AnalysisDefaultArgs<ExtArgs>;
    issues?: boolean | Prisma.AiReview$issuesArgs<ExtArgs>;
    _count?: boolean | Prisma.AiReviewCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiReview"]>;
export type AiReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    analysisId?: boolean;
    file?: boolean;
    summary?: boolean;
    createdAt?: boolean;
    analysis?: boolean | Prisma.AnalysisDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiReview"]>;
export type AiReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    analysisId?: boolean;
    file?: boolean;
    summary?: boolean;
    createdAt?: boolean;
    analysis?: boolean | Prisma.AnalysisDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aiReview"]>;
export type AiReviewSelectScalar = {
    id?: boolean;
    analysisId?: boolean;
    file?: boolean;
    summary?: boolean;
    createdAt?: boolean;
};
export type AiReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "analysisId" | "file" | "summary" | "createdAt", ExtArgs["result"]["aiReview"]>;
export type AiReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    analysis?: boolean | Prisma.AnalysisDefaultArgs<ExtArgs>;
    issues?: boolean | Prisma.AiReview$issuesArgs<ExtArgs>;
    _count?: boolean | Prisma.AiReviewCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AiReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    analysis?: boolean | Prisma.AnalysisDefaultArgs<ExtArgs>;
};
export type AiReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    analysis?: boolean | Prisma.AnalysisDefaultArgs<ExtArgs>;
};
export type $AiReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AiReview";
    objects: {
        analysis: Prisma.$AnalysisPayload<ExtArgs>;
        issues: Prisma.$AIissuePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        analysisId: string;
        file: string;
        summary: string;
        createdAt: Date;
    }, ExtArgs["result"]["aiReview"]>;
    composites: {};
};
export type AiReviewGetPayload<S extends boolean | null | undefined | AiReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AiReviewPayload, S>;
export type AiReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AiReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AiReviewCountAggregateInputType | true;
};
export interface AiReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AiReview'];
        meta: {
            name: 'AiReview';
        };
    };
    /**
     * Find zero or one AiReview that matches the filter.
     * @param {AiReviewFindUniqueArgs} args - Arguments to find a AiReview
     * @example
     * // Get one AiReview
     * const aiReview = await prisma.aiReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, AiReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AiReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiReviewFindUniqueOrThrowArgs} args - Arguments to find a AiReview
     * @example
     * // Get one AiReview
     * const aiReview = await prisma.aiReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AiReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AiReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReviewFindFirstArgs} args - Arguments to find a AiReview
     * @example
     * // Get one AiReview
     * const aiReview = await prisma.aiReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, AiReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AiReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReviewFindFirstOrThrowArgs} args - Arguments to find a AiReview
     * @example
     * // Get one AiReview
     * const aiReview = await prisma.aiReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AiReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AiReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiReviews
     * const aiReviews = await prisma.aiReview.findMany()
     *
     * // Get first 10 AiReviews
     * const aiReviews = await prisma.aiReview.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const aiReviewWithIdOnly = await prisma.aiReview.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AiReviewFindManyArgs>(args?: Prisma.SelectSubset<T, AiReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AiReview.
     * @param {AiReviewCreateArgs} args - Arguments to create a AiReview.
     * @example
     * // Create one AiReview
     * const AiReview = await prisma.aiReview.create({
     *   data: {
     *     // ... data to create a AiReview
     *   }
     * })
     *
     */
    create<T extends AiReviewCreateArgs>(args: Prisma.SelectSubset<T, AiReviewCreateArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AiReviews.
     * @param {AiReviewCreateManyArgs} args - Arguments to create many AiReviews.
     * @example
     * // Create many AiReviews
     * const aiReview = await prisma.aiReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AiReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, AiReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AiReviews and returns the data saved in the database.
     * @param {AiReviewCreateManyAndReturnArgs} args - Arguments to create many AiReviews.
     * @example
     * // Create many AiReviews
     * const aiReview = await prisma.aiReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AiReviews and only return the `id`
     * const aiReviewWithIdOnly = await prisma.aiReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AiReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AiReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AiReview.
     * @param {AiReviewDeleteArgs} args - Arguments to delete one AiReview.
     * @example
     * // Delete one AiReview
     * const AiReview = await prisma.aiReview.delete({
     *   where: {
     *     // ... filter to delete one AiReview
     *   }
     * })
     *
     */
    delete<T extends AiReviewDeleteArgs>(args: Prisma.SelectSubset<T, AiReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AiReview.
     * @param {AiReviewUpdateArgs} args - Arguments to update one AiReview.
     * @example
     * // Update one AiReview
     * const aiReview = await prisma.aiReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AiReviewUpdateArgs>(args: Prisma.SelectSubset<T, AiReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AiReviews.
     * @param {AiReviewDeleteManyArgs} args - Arguments to filter AiReviews to delete.
     * @example
     * // Delete a few AiReviews
     * const { count } = await prisma.aiReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AiReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, AiReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AiReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiReviews
     * const aiReview = await prisma.aiReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AiReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, AiReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AiReviews and returns the data updated in the database.
     * @param {AiReviewUpdateManyAndReturnArgs} args - Arguments to update many AiReviews.
     * @example
     * // Update many AiReviews
     * const aiReview = await prisma.aiReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AiReviews and only return the `id`
     * const aiReviewWithIdOnly = await prisma.aiReview.updateManyAndReturn({
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
    updateManyAndReturn<T extends AiReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AiReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AiReview.
     * @param {AiReviewUpsertArgs} args - Arguments to update or create a AiReview.
     * @example
     * // Update or create a AiReview
     * const aiReview = await prisma.aiReview.upsert({
     *   create: {
     *     // ... data to create a AiReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiReview we want to update
     *   }
     * })
     */
    upsert<T extends AiReviewUpsertArgs>(args: Prisma.SelectSubset<T, AiReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__AiReviewClient<runtime.Types.Result.GetResult<Prisma.$AiReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AiReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReviewCountArgs} args - Arguments to filter AiReviews to count.
     * @example
     * // Count the number of AiReviews
     * const count = await prisma.aiReview.count({
     *   where: {
     *     // ... the filter for the AiReviews we want to count
     *   }
     * })
    **/
    count<T extends AiReviewCountArgs>(args?: Prisma.Subset<T, AiReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AiReviewCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AiReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiReviewAggregateArgs>(args: Prisma.Subset<T, AiReviewAggregateArgs>): Prisma.PrismaPromise<GetAiReviewAggregateType<T>>;
    /**
     * Group by AiReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiReviewGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AiReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AiReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: AiReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AiReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AiReview model
     */
    readonly fields: AiReviewFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AiReview.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AiReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    analysis<T extends Prisma.AnalysisDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnalysisDefaultArgs<ExtArgs>>): Prisma.Prisma__AnalysisClient<runtime.Types.Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    issues<T extends Prisma.AiReview$issuesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AiReview$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIissuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AiReview model
 */
export interface AiReviewFieldRefs {
    readonly id: Prisma.FieldRef<"AiReview", 'String'>;
    readonly analysisId: Prisma.FieldRef<"AiReview", 'String'>;
    readonly file: Prisma.FieldRef<"AiReview", 'String'>;
    readonly summary: Prisma.FieldRef<"AiReview", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AiReview", 'DateTime'>;
}
/**
 * AiReview findUnique
 */
export type AiReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * Filter, which AiReview to fetch.
     */
    where: Prisma.AiReviewWhereUniqueInput;
};
/**
 * AiReview findUniqueOrThrow
 */
export type AiReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * Filter, which AiReview to fetch.
     */
    where: Prisma.AiReviewWhereUniqueInput;
};
/**
 * AiReview findFirst
 */
export type AiReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * Filter, which AiReview to fetch.
     */
    where?: Prisma.AiReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReviews to fetch.
     */
    orderBy?: Prisma.AiReviewOrderByWithRelationInput | Prisma.AiReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiReviews.
     */
    cursor?: Prisma.AiReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiReviews.
     */
    distinct?: Prisma.AiReviewScalarFieldEnum | Prisma.AiReviewScalarFieldEnum[];
};
/**
 * AiReview findFirstOrThrow
 */
export type AiReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * Filter, which AiReview to fetch.
     */
    where?: Prisma.AiReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReviews to fetch.
     */
    orderBy?: Prisma.AiReviewOrderByWithRelationInput | Prisma.AiReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AiReviews.
     */
    cursor?: Prisma.AiReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiReviews.
     */
    distinct?: Prisma.AiReviewScalarFieldEnum | Prisma.AiReviewScalarFieldEnum[];
};
/**
 * AiReview findMany
 */
export type AiReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * Filter, which AiReviews to fetch.
     */
    where?: Prisma.AiReviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AiReviews to fetch.
     */
    orderBy?: Prisma.AiReviewOrderByWithRelationInput | Prisma.AiReviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AiReviews.
     */
    cursor?: Prisma.AiReviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AiReviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AiReviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AiReviews.
     */
    distinct?: Prisma.AiReviewScalarFieldEnum | Prisma.AiReviewScalarFieldEnum[];
};
/**
 * AiReview create
 */
export type AiReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a AiReview.
     */
    data: Prisma.XOR<Prisma.AiReviewCreateInput, Prisma.AiReviewUncheckedCreateInput>;
};
/**
 * AiReview createMany
 */
export type AiReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiReviews.
     */
    data: Prisma.AiReviewCreateManyInput | Prisma.AiReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AiReview createManyAndReturn
 */
export type AiReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * The data used to create many AiReviews.
     */
    data: Prisma.AiReviewCreateManyInput | Prisma.AiReviewCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AiReview update
 */
export type AiReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a AiReview.
     */
    data: Prisma.XOR<Prisma.AiReviewUpdateInput, Prisma.AiReviewUncheckedUpdateInput>;
    /**
     * Choose, which AiReview to update.
     */
    where: Prisma.AiReviewWhereUniqueInput;
};
/**
 * AiReview updateMany
 */
export type AiReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AiReviews.
     */
    data: Prisma.XOR<Prisma.AiReviewUpdateManyMutationInput, Prisma.AiReviewUncheckedUpdateManyInput>;
    /**
     * Filter which AiReviews to update
     */
    where?: Prisma.AiReviewWhereInput;
    /**
     * Limit how many AiReviews to update.
     */
    limit?: number;
};
/**
 * AiReview updateManyAndReturn
 */
export type AiReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * The data used to update AiReviews.
     */
    data: Prisma.XOR<Prisma.AiReviewUpdateManyMutationInput, Prisma.AiReviewUncheckedUpdateManyInput>;
    /**
     * Filter which AiReviews to update
     */
    where?: Prisma.AiReviewWhereInput;
    /**
     * Limit how many AiReviews to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AiReview upsert
 */
export type AiReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the AiReview to update in case it exists.
     */
    where: Prisma.AiReviewWhereUniqueInput;
    /**
     * In case the AiReview found by the `where` argument doesn't exist, create a new AiReview with this data.
     */
    create: Prisma.XOR<Prisma.AiReviewCreateInput, Prisma.AiReviewUncheckedCreateInput>;
    /**
     * In case the AiReview was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AiReviewUpdateInput, Prisma.AiReviewUncheckedUpdateInput>;
};
/**
 * AiReview delete
 */
export type AiReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
    /**
     * Filter which AiReview to delete.
     */
    where: Prisma.AiReviewWhereUniqueInput;
};
/**
 * AiReview deleteMany
 */
export type AiReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AiReviews to delete
     */
    where?: Prisma.AiReviewWhereInput;
    /**
     * Limit how many AiReviews to delete.
     */
    limit?: number;
};
/**
 * AiReview.issues
 */
export type AiReview$issuesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.AIissueWhereInput;
    orderBy?: Prisma.AIissueOrderByWithRelationInput | Prisma.AIissueOrderByWithRelationInput[];
    cursor?: Prisma.AIissueWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIissueScalarFieldEnum | Prisma.AIissueScalarFieldEnum[];
};
/**
 * AiReview without action
 */
export type AiReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiReview
     */
    select?: Prisma.AiReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AiReview
     */
    omit?: Prisma.AiReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AiReviewInclude<ExtArgs> | null;
};
//# sourceMappingURL=AiReview.d.ts.map