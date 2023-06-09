import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
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

export type GetFormQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetFormQuery = { __typename?: 'Query', form?: { __typename: 'Form', id: number, title: string, questions?: Array<{ __typename: 'Question', id: number, index: number, content: string, multiple: boolean, options?: Array<{ __typename: 'Option', id: number, index: number, content: string }> | null, logics?: Array<{ __typename: 'Logic', id: number, index: number, isIf: boolean, isElse: boolean, isReturn: boolean, options?: Array<{ __typename?: 'Option', id: number, index: number }> | null, formOutput?: { __typename?: 'FormOutput', id: number, title: string } | null, nextQuestion?: { __typename?: 'Question', id: number, index: number } | null }> | null }> | null } | null };

export type SetFormTitleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type SetFormTitleMutation = { __typename?: 'Mutation', updateForm?: { __typename?: 'Form', id: number, title: string } | null };

export type CreateQuestionMutationVariables = Exact<{
  formId: Scalars['Int']['input'];
}>;


export type CreateQuestionMutation = { __typename?: 'Mutation', createQuestion?: { __typename?: 'Question', id: number, index: number, content: string, multiple: boolean } | null };

export type UpdateQuestionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  index?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  multiple?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type UpdateQuestionMutation = { __typename?: 'Mutation', updateQuestion?: { __typename?: 'Question', id: number, index: number, content: string, multiple: boolean } | null };

export type UpdateOptionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateOptionMutation = { __typename?: 'Mutation', updateOption?: { __typename?: 'Option', id: number, index: number, content: string } | null };

export type CreateOptionMutationVariables = Exact<{
  questionId: Scalars['Int']['input'];
}>;


export type CreateOptionMutation = { __typename?: 'Mutation', createOption?: { __typename?: 'Option', id: number, index: number, content: string } | null };

export type DeleteQuestionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteQuestionMutation = { __typename?: 'Mutation', deleteQuestion: boolean };

export type DeleteOptionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteOptionMutation = { __typename?: 'Mutation', deleteOption: boolean };

export type DeleteLogicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteLogicMutation = { __typename?: 'Mutation', deleteLogic: boolean };

export type CreateLogicMutationVariables = Exact<{
  questionId: Scalars['Int']['input'];
  isElse: Scalars['Boolean']['input'];
}>;


export type CreateLogicMutation = { __typename?: 'Mutation', createLogic?: { __typename: 'Logic', id: number, index: number, isIf: boolean, isElse: boolean, isReturn: boolean, options?: Array<{ __typename?: 'Option', id: number, index: number }> | null, formOutput?: { __typename?: 'FormOutput', id: number, title: string } | null, nextQuestion?: { __typename?: 'Question', id: number, index: number } | null } | null };

export type UpdateLogicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  isElse?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
  isReturn?: InputMaybe<Scalars['Boolean']['input']>;
  nextQuestionId?: InputMaybe<Scalars['Int']['input']>;
  formOutputId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateLogicMutation = { __typename?: 'Mutation', updateLogic?: { __typename: 'Logic', id: number, index: number, isIf: boolean, isElse: boolean, isReturn: boolean, options?: Array<{ __typename?: 'Option', id: number, index: number }> | null, formOutput?: { __typename?: 'FormOutput', id: number, title: string } | null, nextQuestion?: { __typename?: 'Question', id: number, index: number } | null } | null };

export type GetFormOutputsQueryVariables = Exact<{
  formId: Scalars['Int']['input'];
}>;


export type GetFormOutputsQuery = { __typename?: 'Query', form?: { __typename: 'Form', id: number, formOutputs?: Array<{ __typename: 'FormOutput', id: number, content: string, title: string }> | null } | null };

export type CreateFormOutputMutationVariables = Exact<{
  formId: Scalars['Int']['input'];
}>;


export type CreateFormOutputMutation = { __typename?: 'Mutation', createFormOutput?: { __typename: 'FormOutput', id: number, content: string, title: string } | null };

export type UpdateFormOutputMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateFormOutputMutation = { __typename?: 'Mutation', updateFormOutput?: { __typename: 'FormOutput', id: number, title: string, content: string } | null };

export type DeleteFormOutputMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteFormOutputMutation = { __typename?: 'Mutation', deleteFormOutput: boolean };

export type GetFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormsQuery = { __typename?: 'Query', forms: Array<{ __typename?: 'Form', id: number, title: string }> };

export type CreateFormMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFormMutation = { __typename?: 'Mutation', createForm?: { __typename?: 'Form', id: number, title: string } | null };

export type DeleteFormMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteFormMutation = { __typename?: 'Mutation', deleteForm: boolean };


export const GetFormDocument = gql`
    query GetForm($id: Int!) {
  form(id: $id) {
    __typename
    id
    title
    questions {
      __typename
      id
      index
      content
      multiple
      options {
        __typename
        id
        index
        content
      }
      logics {
        __typename
        id
        index
        isIf
        isElse
        options {
          id
          index
        }
        isReturn
        formOutput {
          id
          title
        }
        nextQuestion {
          id
          index
        }
      }
    }
  }
}
    `;

/**
 * __useGetFormQuery__
 *
 * To run a query within a React component, call `useGetFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFormQuery(baseOptions: Apollo.QueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
      }
export function useGetFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export type GetFormQueryHookResult = ReturnType<typeof useGetFormQuery>;
export type GetFormLazyQueryHookResult = ReturnType<typeof useGetFormLazyQuery>;
export type GetFormQueryResult = Apollo.QueryResult<GetFormQuery, GetFormQueryVariables>;
export function refetchGetFormQuery(variables: GetFormQueryVariables) {
      return { query: GetFormDocument, variables: variables }
    }
export const SetFormTitleDocument = gql`
    mutation SetFormTitle($id: Int!, $title: String!) {
  updateForm(id: $id, title: $title) {
    id
    title
  }
}
    `;
export type SetFormTitleMutationFn = Apollo.MutationFunction<SetFormTitleMutation, SetFormTitleMutationVariables>;

/**
 * __useSetFormTitleMutation__
 *
 * To run a mutation, you first call `useSetFormTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFormTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFormTitleMutation, { data, loading, error }] = useSetFormTitleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSetFormTitleMutation(baseOptions?: Apollo.MutationHookOptions<SetFormTitleMutation, SetFormTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetFormTitleMutation, SetFormTitleMutationVariables>(SetFormTitleDocument, options);
      }
export type SetFormTitleMutationHookResult = ReturnType<typeof useSetFormTitleMutation>;
export type SetFormTitleMutationResult = Apollo.MutationResult<SetFormTitleMutation>;
export type SetFormTitleMutationOptions = Apollo.BaseMutationOptions<SetFormTitleMutation, SetFormTitleMutationVariables>;
export const CreateQuestionDocument = gql`
    mutation CreateQuestion($formId: Int!) {
  createQuestion(formId: $formId) {
    id
    index
    content
    multiple
  }
}
    `;
export type CreateQuestionMutationFn = Apollo.MutationFunction<CreateQuestionMutation, CreateQuestionMutationVariables>;

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useCreateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(CreateQuestionDocument, options);
      }
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<CreateQuestionMutation, CreateQuestionMutationVariables>;
export const UpdateQuestionDocument = gql`
    mutation UpdateQuestion($id: Int!, $index: Int, $content: String, $multiple: Boolean) {
  updateQuestion(id: $id, index: $index, content: $content, multiple: $multiple) {
    id
    index
    content
    multiple
  }
}
    `;
export type UpdateQuestionMutationFn = Apollo.MutationFunction<UpdateQuestionMutation, UpdateQuestionMutationVariables>;

/**
 * __useUpdateQuestionMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionMutation, { data, loading, error }] = useUpdateQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      index: // value for 'index'
 *      content: // value for 'content'
 *      multiple: // value for 'multiple'
 *   },
 * });
 */
export function useUpdateQuestionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(UpdateQuestionDocument, options);
      }
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = Apollo.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>;
export const UpdateOptionDocument = gql`
    mutation UpdateOption($id: Int!, $content: String) {
  updateOption(id: $id, content: $content) {
    id
    index
    content
  }
}
    `;
export type UpdateOptionMutationFn = Apollo.MutationFunction<UpdateOptionMutation, UpdateOptionMutationVariables>;

/**
 * __useUpdateOptionMutation__
 *
 * To run a mutation, you first call `useUpdateOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOptionMutation, { data, loading, error }] = useUpdateOptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateOptionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOptionMutation, UpdateOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOptionMutation, UpdateOptionMutationVariables>(UpdateOptionDocument, options);
      }
export type UpdateOptionMutationHookResult = ReturnType<typeof useUpdateOptionMutation>;
export type UpdateOptionMutationResult = Apollo.MutationResult<UpdateOptionMutation>;
export type UpdateOptionMutationOptions = Apollo.BaseMutationOptions<UpdateOptionMutation, UpdateOptionMutationVariables>;
export const CreateOptionDocument = gql`
    mutation CreateOption($questionId: Int!) {
  createOption(questionId: $questionId) {
    id
    index
    content
  }
}
    `;
export type CreateOptionMutationFn = Apollo.MutationFunction<CreateOptionMutation, CreateOptionMutationVariables>;

/**
 * __useCreateOptionMutation__
 *
 * To run a mutation, you first call `useCreateOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOptionMutation, { data, loading, error }] = useCreateOptionMutation({
 *   variables: {
 *      questionId: // value for 'questionId'
 *   },
 * });
 */
export function useCreateOptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOptionMutation, CreateOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOptionMutation, CreateOptionMutationVariables>(CreateOptionDocument, options);
      }
export type CreateOptionMutationHookResult = ReturnType<typeof useCreateOptionMutation>;
export type CreateOptionMutationResult = Apollo.MutationResult<CreateOptionMutation>;
export type CreateOptionMutationOptions = Apollo.BaseMutationOptions<CreateOptionMutation, CreateOptionMutationVariables>;
export const DeleteQuestionDocument = gql`
    mutation DeleteQuestion($id: Int!) {
  deleteQuestion(id: $id)
}
    `;
export type DeleteQuestionMutationFn = Apollo.MutationFunction<DeleteQuestionMutation, DeleteQuestionMutationVariables>;

/**
 * __useDeleteQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionMutation, { data, loading, error }] = useDeleteQuestionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteQuestionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteQuestionMutation, DeleteQuestionMutationVariables>(DeleteQuestionDocument, options);
      }
export type DeleteQuestionMutationHookResult = ReturnType<typeof useDeleteQuestionMutation>;
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>;
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<DeleteQuestionMutation, DeleteQuestionMutationVariables>;
export const DeleteOptionDocument = gql`
    mutation deleteOption($id: Int!) {
  deleteOption(id: $id)
}
    `;
export type DeleteOptionMutationFn = Apollo.MutationFunction<DeleteOptionMutation, DeleteOptionMutationVariables>;

/**
 * __useDeleteOptionMutation__
 *
 * To run a mutation, you first call `useDeleteOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOptionMutation, { data, loading, error }] = useDeleteOptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOptionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOptionMutation, DeleteOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOptionMutation, DeleteOptionMutationVariables>(DeleteOptionDocument, options);
      }
export type DeleteOptionMutationHookResult = ReturnType<typeof useDeleteOptionMutation>;
export type DeleteOptionMutationResult = Apollo.MutationResult<DeleteOptionMutation>;
export type DeleteOptionMutationOptions = Apollo.BaseMutationOptions<DeleteOptionMutation, DeleteOptionMutationVariables>;
export const DeleteLogicDocument = gql`
    mutation deleteLogic($id: Int!) {
  deleteLogic(id: $id)
}
    `;
export type DeleteLogicMutationFn = Apollo.MutationFunction<DeleteLogicMutation, DeleteLogicMutationVariables>;

/**
 * __useDeleteLogicMutation__
 *
 * To run a mutation, you first call `useDeleteLogicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLogicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLogicMutation, { data, loading, error }] = useDeleteLogicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteLogicMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLogicMutation, DeleteLogicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLogicMutation, DeleteLogicMutationVariables>(DeleteLogicDocument, options);
      }
export type DeleteLogicMutationHookResult = ReturnType<typeof useDeleteLogicMutation>;
export type DeleteLogicMutationResult = Apollo.MutationResult<DeleteLogicMutation>;
export type DeleteLogicMutationOptions = Apollo.BaseMutationOptions<DeleteLogicMutation, DeleteLogicMutationVariables>;
export const CreateLogicDocument = gql`
    mutation createLogic($questionId: Int!, $isElse: Boolean!) {
  createLogic(questionId: $questionId, isElse: $isElse) {
    __typename
    id
    index
    isIf
    isElse
    options {
      id
      index
    }
    isReturn
    formOutput {
      id
      title
    }
    nextQuestion {
      id
      index
    }
  }
}
    `;
export type CreateLogicMutationFn = Apollo.MutationFunction<CreateLogicMutation, CreateLogicMutationVariables>;

/**
 * __useCreateLogicMutation__
 *
 * To run a mutation, you first call `useCreateLogicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLogicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLogicMutation, { data, loading, error }] = useCreateLogicMutation({
 *   variables: {
 *      questionId: // value for 'questionId'
 *      isElse: // value for 'isElse'
 *   },
 * });
 */
export function useCreateLogicMutation(baseOptions?: Apollo.MutationHookOptions<CreateLogicMutation, CreateLogicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLogicMutation, CreateLogicMutationVariables>(CreateLogicDocument, options);
      }
export type CreateLogicMutationHookResult = ReturnType<typeof useCreateLogicMutation>;
export type CreateLogicMutationResult = Apollo.MutationResult<CreateLogicMutation>;
export type CreateLogicMutationOptions = Apollo.BaseMutationOptions<CreateLogicMutation, CreateLogicMutationVariables>;
export const UpdateLogicDocument = gql`
    mutation updateLogic($id: Int!, $isElse: Boolean, $options: [Int!], $isReturn: Boolean, $nextQuestionId: Int, $formOutputId: Int) {
  updateLogic(
    id: $id
    isElse: $isElse
    options: $options
    isReturn: $isReturn
    nextQuestionId: $nextQuestionId
    formOutputId: $formOutputId
  ) {
    __typename
    id
    index
    isIf
    isElse
    options {
      id
      index
    }
    isReturn
    formOutput {
      id
      title
    }
    nextQuestion {
      id
      index
    }
  }
}
    `;
export type UpdateLogicMutationFn = Apollo.MutationFunction<UpdateLogicMutation, UpdateLogicMutationVariables>;

/**
 * __useUpdateLogicMutation__
 *
 * To run a mutation, you first call `useUpdateLogicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLogicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLogicMutation, { data, loading, error }] = useUpdateLogicMutation({
 *   variables: {
 *      id: // value for 'id'
 *      isElse: // value for 'isElse'
 *      options: // value for 'options'
 *      isReturn: // value for 'isReturn'
 *      nextQuestionId: // value for 'nextQuestionId'
 *      formOutputId: // value for 'formOutputId'
 *   },
 * });
 */
export function useUpdateLogicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLogicMutation, UpdateLogicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLogicMutation, UpdateLogicMutationVariables>(UpdateLogicDocument, options);
      }
export type UpdateLogicMutationHookResult = ReturnType<typeof useUpdateLogicMutation>;
export type UpdateLogicMutationResult = Apollo.MutationResult<UpdateLogicMutation>;
export type UpdateLogicMutationOptions = Apollo.BaseMutationOptions<UpdateLogicMutation, UpdateLogicMutationVariables>;
export const GetFormOutputsDocument = gql`
    query GetFormOutputs($formId: Int!) {
  form(id: $formId) {
    __typename
    id
    formOutputs {
      __typename
      id
      content
      title
    }
  }
}
    `;

/**
 * __useGetFormOutputsQuery__
 *
 * To run a query within a React component, call `useGetFormOutputsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormOutputsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormOutputsQuery({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useGetFormOutputsQuery(baseOptions: Apollo.QueryHookOptions<GetFormOutputsQuery, GetFormOutputsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormOutputsQuery, GetFormOutputsQueryVariables>(GetFormOutputsDocument, options);
      }
export function useGetFormOutputsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormOutputsQuery, GetFormOutputsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormOutputsQuery, GetFormOutputsQueryVariables>(GetFormOutputsDocument, options);
        }
export type GetFormOutputsQueryHookResult = ReturnType<typeof useGetFormOutputsQuery>;
export type GetFormOutputsLazyQueryHookResult = ReturnType<typeof useGetFormOutputsLazyQuery>;
export type GetFormOutputsQueryResult = Apollo.QueryResult<GetFormOutputsQuery, GetFormOutputsQueryVariables>;
export function refetchGetFormOutputsQuery(variables: GetFormOutputsQueryVariables) {
      return { query: GetFormOutputsDocument, variables: variables }
    }
export const CreateFormOutputDocument = gql`
    mutation CreateFormOutput($formId: Int!) {
  createFormOutput(formId: $formId) {
    __typename
    id
    content
    title
  }
}
    `;
export type CreateFormOutputMutationFn = Apollo.MutationFunction<CreateFormOutputMutation, CreateFormOutputMutationVariables>;

/**
 * __useCreateFormOutputMutation__
 *
 * To run a mutation, you first call `useCreateFormOutputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFormOutputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFormOutputMutation, { data, loading, error }] = useCreateFormOutputMutation({
 *   variables: {
 *      formId: // value for 'formId'
 *   },
 * });
 */
export function useCreateFormOutputMutation(baseOptions?: Apollo.MutationHookOptions<CreateFormOutputMutation, CreateFormOutputMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFormOutputMutation, CreateFormOutputMutationVariables>(CreateFormOutputDocument, options);
      }
export type CreateFormOutputMutationHookResult = ReturnType<typeof useCreateFormOutputMutation>;
export type CreateFormOutputMutationResult = Apollo.MutationResult<CreateFormOutputMutation>;
export type CreateFormOutputMutationOptions = Apollo.BaseMutationOptions<CreateFormOutputMutation, CreateFormOutputMutationVariables>;
export const UpdateFormOutputDocument = gql`
    mutation UpdateFormOutput($id: Int!, $content: String, $title: String) {
  updateFormOutput(id: $id, content: $content, title: $title) {
    __typename
    id
    title
    content
  }
}
    `;
export type UpdateFormOutputMutationFn = Apollo.MutationFunction<UpdateFormOutputMutation, UpdateFormOutputMutationVariables>;

/**
 * __useUpdateFormOutputMutation__
 *
 * To run a mutation, you first call `useUpdateFormOutputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFormOutputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFormOutputMutation, { data, loading, error }] = useUpdateFormOutputMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateFormOutputMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFormOutputMutation, UpdateFormOutputMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFormOutputMutation, UpdateFormOutputMutationVariables>(UpdateFormOutputDocument, options);
      }
export type UpdateFormOutputMutationHookResult = ReturnType<typeof useUpdateFormOutputMutation>;
export type UpdateFormOutputMutationResult = Apollo.MutationResult<UpdateFormOutputMutation>;
export type UpdateFormOutputMutationOptions = Apollo.BaseMutationOptions<UpdateFormOutputMutation, UpdateFormOutputMutationVariables>;
export const DeleteFormOutputDocument = gql`
    mutation DeleteFormOutput($id: Int!) {
  deleteFormOutput(id: $id)
}
    `;
export type DeleteFormOutputMutationFn = Apollo.MutationFunction<DeleteFormOutputMutation, DeleteFormOutputMutationVariables>;

/**
 * __useDeleteFormOutputMutation__
 *
 * To run a mutation, you first call `useDeleteFormOutputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFormOutputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFormOutputMutation, { data, loading, error }] = useDeleteFormOutputMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFormOutputMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFormOutputMutation, DeleteFormOutputMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFormOutputMutation, DeleteFormOutputMutationVariables>(DeleteFormOutputDocument, options);
      }
export type DeleteFormOutputMutationHookResult = ReturnType<typeof useDeleteFormOutputMutation>;
export type DeleteFormOutputMutationResult = Apollo.MutationResult<DeleteFormOutputMutation>;
export type DeleteFormOutputMutationOptions = Apollo.BaseMutationOptions<DeleteFormOutputMutation, DeleteFormOutputMutationVariables>;
export const GetFormsDocument = gql`
    query GetForms {
  forms {
    id
    title
  }
}
    `;

/**
 * __useGetFormsQuery__
 *
 * To run a query within a React component, call `useGetFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFormsQuery(baseOptions?: Apollo.QueryHookOptions<GetFormsQuery, GetFormsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormsQuery, GetFormsQueryVariables>(GetFormsDocument, options);
      }
export function useGetFormsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormsQuery, GetFormsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormsQuery, GetFormsQueryVariables>(GetFormsDocument, options);
        }
export type GetFormsQueryHookResult = ReturnType<typeof useGetFormsQuery>;
export type GetFormsLazyQueryHookResult = ReturnType<typeof useGetFormsLazyQuery>;
export type GetFormsQueryResult = Apollo.QueryResult<GetFormsQuery, GetFormsQueryVariables>;
export function refetchGetFormsQuery(variables?: GetFormsQueryVariables) {
      return { query: GetFormsDocument, variables: variables }
    }
export const CreateFormDocument = gql`
    mutation CreateForm($title: String) {
  createForm(title: $title) {
    id
    title
  }
}
    `;
export type CreateFormMutationFn = Apollo.MutationFunction<CreateFormMutation, CreateFormMutationVariables>;

/**
 * __useCreateFormMutation__
 *
 * To run a mutation, you first call `useCreateFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFormMutation, { data, loading, error }] = useCreateFormMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateFormMutation(baseOptions?: Apollo.MutationHookOptions<CreateFormMutation, CreateFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFormMutation, CreateFormMutationVariables>(CreateFormDocument, options);
      }
export type CreateFormMutationHookResult = ReturnType<typeof useCreateFormMutation>;
export type CreateFormMutationResult = Apollo.MutationResult<CreateFormMutation>;
export type CreateFormMutationOptions = Apollo.BaseMutationOptions<CreateFormMutation, CreateFormMutationVariables>;
export const DeleteFormDocument = gql`
    mutation deleteForm($id: Int!) {
  deleteForm(id: $id)
}
    `;
export type DeleteFormMutationFn = Apollo.MutationFunction<DeleteFormMutation, DeleteFormMutationVariables>;

/**
 * __useDeleteFormMutation__
 *
 * To run a mutation, you first call `useDeleteFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFormMutation, { data, loading, error }] = useDeleteFormMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFormMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFormMutation, DeleteFormMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFormMutation, DeleteFormMutationVariables>(DeleteFormDocument, options);
      }
export type DeleteFormMutationHookResult = ReturnType<typeof useDeleteFormMutation>;
export type DeleteFormMutationResult = Apollo.MutationResult<DeleteFormMutation>;
export type DeleteFormMutationOptions = Apollo.BaseMutationOptions<DeleteFormMutation, DeleteFormMutationVariables>;