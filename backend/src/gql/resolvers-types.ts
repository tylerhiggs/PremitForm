import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Form = {
  __typename?: 'Form';
  formOutputs?: Maybe<Array<FormOutput>>;
  id: Scalars['Int']['output'];
  questions?: Maybe<Array<Question>>;
  responses?: Maybe<Array<Response>>;
  title: Scalars['String']['output'];
};

export type FormOutput = {
  __typename?: 'FormOutput';
  content: Scalars['String']['output'];
  form?: Maybe<Form>;
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Logic = {
  __typename?: 'Logic';
  formOutput?: Maybe<FormOutput>;
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  isElse: Scalars['Boolean']['output'];
  isIf: Scalars['Boolean']['output'];
  isReturn: Scalars['Boolean']['output'];
  nextQuestion?: Maybe<Question>;
  options?: Maybe<Array<Option>>;
  question?: Maybe<Question>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm?: Maybe<Form>;
  createFormOutput?: Maybe<FormOutput>;
  createLogic?: Maybe<Logic>;
  createOption?: Maybe<Option>;
  createQuestion?: Maybe<Question>;
  createResponse?: Maybe<Response>;
  deleteForm: Scalars['Boolean']['output'];
  deleteFormOutput: Scalars['Boolean']['output'];
  deleteLogic: Scalars['Boolean']['output'];
  deleteOption: Scalars['Boolean']['output'];
  deleteQuestion: Scalars['Boolean']['output'];
  deleteResponse: Scalars['Boolean']['output'];
  updateForm?: Maybe<Form>;
  updateFormOutput?: Maybe<FormOutput>;
  updateLogic?: Maybe<Logic>;
  updateOption?: Maybe<Option>;
  updateQuestion?: Maybe<Question>;
  updateResponse?: Maybe<Response>;
};


export type MutationCreateFormArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateFormOutputArgs = {
  formId: Scalars['Int']['input'];
};


export type MutationCreateLogicArgs = {
  isElse: Scalars['Boolean']['input'];
  questionId: Scalars['Int']['input'];
};


export type MutationCreateOptionArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  questionId: Scalars['Int']['input'];
};


export type MutationCreateQuestionArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  formId: Scalars['Int']['input'];
  multiple?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateResponseArgs = {
  formId: Scalars['Int']['input'];
  optionIds: Array<Scalars['Int']['input']>;
};


export type MutationDeleteFormArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFormOutputArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteLogicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOptionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteResponseArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateFormArgs = {
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateFormOutputArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateLogicArgs = {
  formOutputId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  isElse?: InputMaybe<Scalars['Boolean']['input']>;
  isReturn?: InputMaybe<Scalars['Boolean']['input']>;
  nextQuestionId?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type MutationUpdateOptionArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  index?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateQuestionArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  index?: InputMaybe<Scalars['Int']['input']>;
  multiple?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateResponseArgs = {
  id: Scalars['Int']['input'];
  optionIds: Array<Scalars['Int']['input']>;
};

export type Option = {
  __typename?: 'Option';
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  question?: Maybe<Question>;
  responses?: Maybe<Array<Response>>;
};

export type Query = {
  __typename?: 'Query';
  form?: Maybe<Form>;
  forms: Array<Form>;
  option?: Maybe<Option>;
  options: Array<Option>;
  question?: Maybe<Question>;
  questions: Array<Question>;
  response?: Maybe<Response>;
  responses: Array<Response>;
};


export type QueryFormArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOptionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryQuestionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryResponseArgs = {
  id: Scalars['Int']['input'];
};

export type Question = {
  __typename?: 'Question';
  content: Scalars['String']['output'];
  form?: Maybe<Form>;
  id: Scalars['Int']['output'];
  index: Scalars['Int']['output'];
  logics?: Maybe<Array<Logic>>;
  multiple: Scalars['Boolean']['output'];
  options?: Maybe<Array<Option>>;
};

export type Response = {
  __typename?: 'Response';
  form?: Maybe<Form>;
  id: Scalars['Int']['output'];
  option?: Maybe<Option>;
  selectedOptions?: Maybe<Array<Option>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Form: ResolverTypeWrapper<Form>;
  FormOutput: ResolverTypeWrapper<FormOutput>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Logic: ResolverTypeWrapper<Logic>;
  Mutation: ResolverTypeWrapper<{}>;
  Option: ResolverTypeWrapper<Option>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  Response: ResolverTypeWrapper<Response>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Form: Form;
  FormOutput: FormOutput;
  Int: Scalars['Int']['output'];
  Logic: Logic;
  Mutation: {};
  Option: Option;
  Query: {};
  Question: Question;
  Response: Response;
  String: Scalars['String']['output'];
}>;

export type FormResolvers<ContextType = any, ParentType extends ResolversParentTypes['Form'] = ResolversParentTypes['Form']> = ResolversObject<{
  formOutputs?: Resolver<Maybe<Array<ResolversTypes['FormOutput']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<ResolversTypes['Question']>>, ParentType, ContextType>;
  responses?: Resolver<Maybe<Array<ResolversTypes['Response']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FormOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['FormOutput'] = ResolversParentTypes['FormOutput']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  form?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LogicResolvers<ContextType = any, ParentType extends ResolversParentTypes['Logic'] = ResolversParentTypes['Logic']> = ResolversObject<{
  formOutput?: Resolver<Maybe<ResolversTypes['FormOutput']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isElse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isIf?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isReturn?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nextQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['Option']>>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createForm?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType, Partial<MutationCreateFormArgs>>;
  createFormOutput?: Resolver<Maybe<ResolversTypes['FormOutput']>, ParentType, ContextType, RequireFields<MutationCreateFormOutputArgs, 'formId'>>;
  createLogic?: Resolver<Maybe<ResolversTypes['Logic']>, ParentType, ContextType, RequireFields<MutationCreateLogicArgs, 'isElse' | 'questionId'>>;
  createOption?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType, RequireFields<MutationCreateOptionArgs, 'questionId'>>;
  createQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationCreateQuestionArgs, 'formId'>>;
  createResponse?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationCreateResponseArgs, 'formId' | 'optionIds'>>;
  deleteForm?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteFormArgs, 'id'>>;
  deleteFormOutput?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteFormOutputArgs, 'id'>>;
  deleteLogic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteLogicArgs, 'id'>>;
  deleteOption?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteOptionArgs, 'id'>>;
  deleteQuestion?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteQuestionArgs, 'id'>>;
  deleteResponse?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteResponseArgs, 'id'>>;
  updateForm?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType, RequireFields<MutationUpdateFormArgs, 'id' | 'title'>>;
  updateFormOutput?: Resolver<Maybe<ResolversTypes['FormOutput']>, ParentType, ContextType, RequireFields<MutationUpdateFormOutputArgs, 'id'>>;
  updateLogic?: Resolver<Maybe<ResolversTypes['Logic']>, ParentType, ContextType, RequireFields<MutationUpdateLogicArgs, 'id'>>;
  updateOption?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType, RequireFields<MutationUpdateOptionArgs, 'id'>>;
  updateQuestion?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<MutationUpdateQuestionArgs, 'id'>>;
  updateResponse?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<MutationUpdateResponseArgs, 'id' | 'optionIds'>>;
}>;

export type OptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Option'] = ResolversParentTypes['Option']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType>;
  responses?: Resolver<Maybe<Array<ResolversTypes['Response']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  form?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType, RequireFields<QueryFormArgs, 'id'>>;
  forms?: Resolver<Array<ResolversTypes['Form']>, ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType, RequireFields<QueryOptionArgs, 'id'>>;
  options?: Resolver<Array<ResolversTypes['Option']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryQuestionArgs, 'id'>>;
  questions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response']>, ParentType, ContextType, RequireFields<QueryResponseArgs, 'id'>>;
  responses?: Resolver<Array<ResolversTypes['Response']>, ParentType, ContextType>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  form?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  logics?: Resolver<Maybe<Array<ResolversTypes['Logic']>>, ParentType, ContextType>;
  multiple?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['Option']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  form?: Resolver<Maybe<ResolversTypes['Form']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType>;
  selectedOptions?: Resolver<Maybe<Array<ResolversTypes['Option']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Form?: FormResolvers<ContextType>;
  FormOutput?: FormOutputResolvers<ContextType>;
  Logic?: LogicResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Option?: OptionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
}>;

