import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File | Blob;
};

export type AddAssigneesToTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type AddAttachmentsToTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type AddChildrenToProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type AddCommentsToTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type AddDocumentsToTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type AddProjectUsersToProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type AddRequestForSignaturesToProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type AddTasksToProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type Admin = {
  __typename?: "Admin";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
  type: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminAggregateGroupBy = {
  __typename?: "AdminAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminAvgAggregate = {
  __typename?: "AdminAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminConnection = {
  __typename?: "AdminConnection";
  /** Array of nodes. */
  nodes: Array<Admin>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type AdminCountAggregate = {
  __typename?: "AdminCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  isActive?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type AdminDeleteFilter = {
  and?: InputMaybe<Array<AdminDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdminDeleteFilter>>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type AdminDeleteResponse = {
  __typename?: "AdminDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminFilter = {
  and?: InputMaybe<Array<AdminFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdminFilter>>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type AdminMaxAggregate = {
  __typename?: "AdminMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminMinAggregate = {
  __typename?: "AdminMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminSort = {
  direction: SortDirection;
  field: AdminSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AdminSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Email = "email",
  Id = "id",
  IsActive = "isActive",
  Name = "name",
  Type = "type",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type AdminSumAggregate = {
  __typename?: "AdminSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminUpdateFilter = {
  and?: InputMaybe<Array<AdminUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdminUpdateFilter>>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ApproveFormInputDto = {
  id: Scalars["ID"];
};

export type AssignTaskInputDto = {
  projectUserIds?: InputMaybe<Array<RelationIdInput>>;
  taskId: Scalars["ID"];
};

export type AuditLog = {
  __typename?: "AuditLog";
  action: AuditLogActionType;
  content?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  module: AuditLogModuleType;
  project?: Maybe<Project>;
  projectId: Scalars["ID"];
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  user: User;
  userId: Scalars["ID"];
};

export enum AuditLogActionType {
  Assigned = "Assigned",
  Create = "Create",
  Delete = "Delete",
  Unassigned = "Unassigned",
  Update = "Update",
}

export type AuditLogActionTypeFilterComparison = {
  eq?: InputMaybe<AuditLogActionType>;
  gt?: InputMaybe<AuditLogActionType>;
  gte?: InputMaybe<AuditLogActionType>;
  iLike?: InputMaybe<AuditLogActionType>;
  in?: InputMaybe<Array<AuditLogActionType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<AuditLogActionType>;
  lt?: InputMaybe<AuditLogActionType>;
  lte?: InputMaybe<AuditLogActionType>;
  neq?: InputMaybe<AuditLogActionType>;
  notILike?: InputMaybe<AuditLogActionType>;
  notIn?: InputMaybe<Array<AuditLogActionType>>;
  notLike?: InputMaybe<AuditLogActionType>;
};

export type AuditLogAggregateGroupBy = {
  __typename?: "AuditLogAggregateGroupBy";
  action?: Maybe<AuditLogActionType>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  module?: Maybe<AuditLogModuleType>;
  projectId?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type AuditLogAvgAggregate = {
  __typename?: "AuditLogAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type AuditLogConnection = {
  __typename?: "AuditLogConnection";
  /** Array of nodes. */
  nodes: Array<AuditLog>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type AuditLogCountAggregate = {
  __typename?: "AuditLogCountAggregate";
  action?: Maybe<Scalars["Int"]>;
  content?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  module?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  taskId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type AuditLogDeleteFilter = {
  action?: InputMaybe<AuditLogActionTypeFilterComparison>;
  and?: InputMaybe<Array<AuditLogDeleteFilter>>;
  content?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  module?: InputMaybe<AuditLogModuleTypeFilterComparison>;
  or?: InputMaybe<Array<AuditLogDeleteFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  taskId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type AuditLogDeleteResponse = {
  __typename?: "AuditLogDeleteResponse";
  action?: Maybe<AuditLogActionType>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  module?: Maybe<AuditLogModuleType>;
  projectId?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type AuditLogFilter = {
  action?: InputMaybe<AuditLogActionTypeFilterComparison>;
  and?: InputMaybe<Array<AuditLogFilter>>;
  content?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  module?: InputMaybe<AuditLogModuleTypeFilterComparison>;
  or?: InputMaybe<Array<AuditLogFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  taskId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type AuditLogMaxAggregate = {
  __typename?: "AuditLogMaxAggregate";
  action?: Maybe<AuditLogActionType>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  module?: Maybe<AuditLogModuleType>;
  projectId?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type AuditLogMinAggregate = {
  __typename?: "AuditLogMinAggregate";
  action?: Maybe<AuditLogActionType>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  module?: Maybe<AuditLogModuleType>;
  projectId?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export enum AuditLogModuleType {
  DocumentComment = "DocumentComment",
  Project = "Project",
  Task = "Task",
  TaskComment = "TaskComment",
}

export type AuditLogModuleTypeFilterComparison = {
  eq?: InputMaybe<AuditLogModuleType>;
  gt?: InputMaybe<AuditLogModuleType>;
  gte?: InputMaybe<AuditLogModuleType>;
  iLike?: InputMaybe<AuditLogModuleType>;
  in?: InputMaybe<Array<AuditLogModuleType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<AuditLogModuleType>;
  lt?: InputMaybe<AuditLogModuleType>;
  lte?: InputMaybe<AuditLogModuleType>;
  neq?: InputMaybe<AuditLogModuleType>;
  notILike?: InputMaybe<AuditLogModuleType>;
  notIn?: InputMaybe<Array<AuditLogModuleType>>;
  notLike?: InputMaybe<AuditLogModuleType>;
};

export type AuditLogSort = {
  direction: SortDirection;
  field: AuditLogSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AuditLogSortFields {
  Action = "action",
  Content = "content",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Module = "module",
  ProjectId = "projectId",
  TaskId = "taskId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type AuditLogSumAggregate = {
  __typename?: "AuditLogSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type AuditLogUpdateFilter = {
  action?: InputMaybe<AuditLogActionTypeFilterComparison>;
  and?: InputMaybe<Array<AuditLogUpdateFilter>>;
  content?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  module?: InputMaybe<AuditLogModuleTypeFilterComparison>;
  or?: InputMaybe<Array<AuditLogUpdateFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  taskId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
};

export enum CategoryType {
  AllForm = "AllForm",
  BimDrawings = "BIMDrawings",
  Correspondence = "Correspondence",
  Photo = "Photo",
  ProjectDocument = "ProjectDocument",
  StandardForm = "StandardForm",
  TwoDDrawings = "TwoDDrawings",
  WorkProgramme = "WorkProgramme",
}

export type CategoryTypeFilterComparison = {
  eq?: InputMaybe<CategoryType>;
  gt?: InputMaybe<CategoryType>;
  gte?: InputMaybe<CategoryType>;
  iLike?: InputMaybe<CategoryType>;
  in?: InputMaybe<Array<CategoryType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<CategoryType>;
  lt?: InputMaybe<CategoryType>;
  lte?: InputMaybe<CategoryType>;
  neq?: InputMaybe<CategoryType>;
  notILike?: InputMaybe<CategoryType>;
  notIn?: InputMaybe<Array<CategoryType>>;
  notLike?: InputMaybe<CategoryType>;
};

export type Checklist = {
  __typename?: "Checklist";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  taskId: Scalars["ID"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistAggregateGroupBy = {
  __typename?: "ChecklistAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistAvgAggregate = {
  __typename?: "ChecklistAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistConnection = {
  __typename?: "ChecklistConnection";
  /** Array of nodes. */
  nodes: Array<Checklist>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ChecklistCountAggregate = {
  __typename?: "ChecklistCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  taskId?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ChecklistDeleteFilter = {
  and?: InputMaybe<Array<ChecklistDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ChecklistDeleteFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ChecklistDeleteResponse = {
  __typename?: "ChecklistDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistFilter = {
  and?: InputMaybe<Array<ChecklistFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ChecklistFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ChecklistItem = {
  __typename?: "ChecklistItem";
  checklistId: Scalars["ID"];
  completed: Scalars["Boolean"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistItemAggregateGroupBy = {
  __typename?: "ChecklistItemAggregateGroupBy";
  checklistId?: Maybe<Scalars["ID"]>;
  completed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistItemAvgAggregate = {
  __typename?: "ChecklistItemAvgAggregate";
  checklistId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistItemConnection = {
  __typename?: "ChecklistItemConnection";
  /** Array of nodes. */
  nodes: Array<ChecklistItem>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ChecklistItemCountAggregate = {
  __typename?: "ChecklistItemCountAggregate";
  checklistId?: Maybe<Scalars["Int"]>;
  completed?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ChecklistItemDeleteFilter = {
  and?: InputMaybe<Array<ChecklistItemDeleteFilter>>;
  checklistId?: InputMaybe<IdFilterComparison>;
  completed?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ChecklistItemDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ChecklistItemDeleteResponse = {
  __typename?: "ChecklistItemDeleteResponse";
  checklistId?: Maybe<Scalars["ID"]>;
  completed?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistItemFilter = {
  and?: InputMaybe<Array<ChecklistItemFilter>>;
  checklistId?: InputMaybe<IdFilterComparison>;
  completed?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ChecklistItemFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ChecklistItemMaxAggregate = {
  __typename?: "ChecklistItemMaxAggregate";
  checklistId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistItemMinAggregate = {
  __typename?: "ChecklistItemMinAggregate";
  checklistId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistItemSort = {
  direction: SortDirection;
  field: ChecklistItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ChecklistItemSortFields {
  ChecklistId = "checklistId",
  Completed = "completed",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Description = "description",
  Id = "id",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ChecklistItemSumAggregate = {
  __typename?: "ChecklistItemSumAggregate";
  checklistId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistItemUpdateFilter = {
  and?: InputMaybe<Array<ChecklistItemUpdateFilter>>;
  checklistId?: InputMaybe<IdFilterComparison>;
  completed?: InputMaybe<BooleanFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ChecklistItemUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ChecklistMaxAggregate = {
  __typename?: "ChecklistMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistMinAggregate = {
  __typename?: "ChecklistMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  taskId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistSort = {
  direction: SortDirection;
  field: ChecklistSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ChecklistSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  TaskId = "taskId",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ChecklistSumAggregate = {
  __typename?: "ChecklistSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ChecklistUpdateFilter = {
  and?: InputMaybe<Array<ChecklistUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ChecklistUpdateFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Company = {
  __typename?: "Company";
  avatar?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  ownerId: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanyAggregateGroupBy = {
  __typename?: "CompanyAggregateGroupBy";
  avatar?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanyAvgAggregate = {
  __typename?: "CompanyAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ownerId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanyConnection = {
  __typename?: "CompanyConnection";
  /** Array of nodes. */
  nodes: Array<Company>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type CompanyCountAggregate = {
  __typename?: "CompanyCountAggregate";
  avatar?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  ownerId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type CompanyDeleteFilter = {
  and?: InputMaybe<Array<CompanyDeleteFilter>>;
  avatar?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyDeleteFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CompanyDeleteResponse = {
  __typename?: "CompanyDeleteResponse";
  avatar?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanyFilter = {
  and?: InputMaybe<Array<CompanyFilter>>;
  avatar?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CompanyMaxAggregate = {
  __typename?: "CompanyMaxAggregate";
  avatar?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanyMinAggregate = {
  __typename?: "CompanyMinAggregate";
  avatar?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySort = {
  direction: SortDirection;
  field: CompanySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CompanySortFields {
  Avatar = "avatar",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Name = "name",
  OwnerId = "ownerId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type CompanySubscription = {
  __typename?: "CompanySubscription";
  companyId: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  subscriptionEndDate: Scalars["DateTime"];
  subscriptionPackageId: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySubscriptionAggregateGroupBy = {
  __typename?: "CompanySubscriptionAggregateGroupBy";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  subscriptionEndDate?: Maybe<Scalars["DateTime"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySubscriptionAvgAggregate = {
  __typename?: "CompanySubscriptionAvgAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  subscriptionPackageId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySubscriptionConnection = {
  __typename?: "CompanySubscriptionConnection";
  /** Array of nodes. */
  nodes: Array<CompanySubscription>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type CompanySubscriptionCountAggregate = {
  __typename?: "CompanySubscriptionCountAggregate";
  companyId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  subscriptionEndDate?: Maybe<Scalars["Int"]>;
  subscriptionPackageId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type CompanySubscriptionDeleteFilter = {
  and?: InputMaybe<Array<CompanySubscriptionDeleteFilter>>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CompanySubscriptionDeleteFilter>>;
  subscriptionEndDate?: InputMaybe<DateFieldComparison>;
  subscriptionPackageId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CompanySubscriptionDeleteResponse = {
  __typename?: "CompanySubscriptionDeleteResponse";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  subscriptionEndDate?: Maybe<Scalars["DateTime"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySubscriptionFilter = {
  and?: InputMaybe<Array<CompanySubscriptionFilter>>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CompanySubscriptionFilter>>;
  subscriptionEndDate?: InputMaybe<DateFieldComparison>;
  subscriptionPackageId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CompanySubscriptionMaxAggregate = {
  __typename?: "CompanySubscriptionMaxAggregate";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  subscriptionEndDate?: Maybe<Scalars["DateTime"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySubscriptionMinAggregate = {
  __typename?: "CompanySubscriptionMinAggregate";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  subscriptionEndDate?: Maybe<Scalars["DateTime"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySubscriptionSort = {
  direction: SortDirection;
  field: CompanySubscriptionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CompanySubscriptionSortFields {
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  SubscriptionEndDate = "subscriptionEndDate",
  SubscriptionPackageId = "subscriptionPackageId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type CompanySubscriptionSumAggregate = {
  __typename?: "CompanySubscriptionSumAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  subscriptionPackageId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanySubscriptionUpdateFilter = {
  and?: InputMaybe<Array<CompanySubscriptionUpdateFilter>>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CompanySubscriptionUpdateFilter>>;
  subscriptionEndDate?: InputMaybe<DateFieldComparison>;
  subscriptionPackageId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CompanySumAggregate = {
  __typename?: "CompanySumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ownerId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CompanyUpdateFilter = {
  and?: InputMaybe<Array<CompanyUpdateFilter>>;
  avatar?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CompanyUpdateFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Contact = {
  __typename?: "Contact";
  contactCompany?: Maybe<ContactCompany>;
  contactCompanyId: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  owner?: Maybe<User>;
  phoneNo: Scalars["String"];
  projectId: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  userId: Scalars["ID"];
};

export type ContactAggregateGroupBy = {
  __typename?: "ContactAggregateGroupBy";
  contactCompanyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ContactAvgAggregate = {
  __typename?: "ContactAvgAggregate";
  contactCompanyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ContactCompany = {
  __typename?: "ContactCompany";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  projectId: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ContactCompanyAggregateGroupBy = {
  __typename?: "ContactCompanyAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ContactCompanyAvgAggregate = {
  __typename?: "ContactCompanyAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ContactCompanyConnection = {
  __typename?: "ContactCompanyConnection";
  /** Array of nodes. */
  nodes: Array<ContactCompany>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ContactCompanyCountAggregate = {
  __typename?: "ContactCompanyCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ContactCompanyDeleteFilter = {
  and?: InputMaybe<Array<ContactCompanyDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactCompanyDeleteFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ContactCompanyDeleteResponse = {
  __typename?: "ContactCompanyDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ContactCompanyFilter = {
  and?: InputMaybe<Array<ContactCompanyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactCompanyFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ContactCompanyMaxAggregate = {
  __typename?: "ContactCompanyMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ContactCompanyMinAggregate = {
  __typename?: "ContactCompanyMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ContactCompanySort = {
  direction: SortDirection;
  field: ContactCompanySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ContactCompanySortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Name = "name",
  ProjectId = "projectId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ContactCompanySumAggregate = {
  __typename?: "ContactCompanySumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ContactCompanyUpdateFilter = {
  and?: InputMaybe<Array<ContactCompanyUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactCompanyUpdateFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ContactConnection = {
  __typename?: "ContactConnection";
  /** Array of nodes. */
  nodes: Array<Contact>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ContactCountAggregate = {
  __typename?: "ContactCountAggregate";
  contactCompanyId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  phoneNo?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type ContactDeleteFilter = {
  and?: InputMaybe<Array<ContactDeleteFilter>>;
  contactCompanyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactDeleteFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ContactDeleteResponse = {
  __typename?: "ContactDeleteResponse";
  contactCompanyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ContactFilter = {
  and?: InputMaybe<Array<ContactFilter>>;
  contactCompany?: InputMaybe<ContactFilterContactCompanyFilter>;
  contactCompanyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactFilter>>;
  owner?: InputMaybe<ContactFilterUserFilter>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ContactFilterContactCompanyFilter = {
  and?: InputMaybe<Array<ContactFilterContactCompanyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactFilterContactCompanyFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ContactFilterUserFilter = {
  and?: InputMaybe<Array<ContactFilterUserFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactFilterUserFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ContactMaxAggregate = {
  __typename?: "ContactMaxAggregate";
  contactCompanyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ContactMinAggregate = {
  __typename?: "ContactMinAggregate";
  contactCompanyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ContactSort = {
  direction: SortDirection;
  field: ContactSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ContactSortFields {
  ContactCompanyId = "contactCompanyId",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Email = "email",
  Id = "id",
  Name = "name",
  PhoneNo = "phoneNo",
  ProjectId = "projectId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type ContactSumAggregate = {
  __typename?: "ContactSumAggregate";
  contactCompanyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ContactUpdateFilter = {
  and?: InputMaybe<Array<ContactUpdateFilter>>;
  contactCompanyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ContactUpdateFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type CreateAdminInputDto = {
  email: Scalars["String"];
  isActive?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
};

export type CreateAuditLogInputDto = {
  action: AuditLogActionType;
  content?: InputMaybe<Scalars["String"]>;
  module: AuditLogModuleType;
  projectId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type CreateChecklistInputDto = {
  taskId: Scalars["Float"];
  title: Scalars["String"];
};

export type CreateChecklistItemInputDto = {
  checklistId: Scalars["Float"];
  completed: Scalars["Boolean"];
  description: Scalars["String"];
};

export type CreateCompanyInputDto = {
  avatar?: InputMaybe<Scalars["Upload"]>;
  name: Scalars["String"];
  ownerId: Scalars["ID"];
};

export type CreateCompanySubscriptionInputDto = {
  companyId: Scalars["ID"];
  subscriptionEndDate: Scalars["DateTime"];
  subscriptionPackageId: Scalars["ID"];
};

export type CreateContactCompanyInputDto = {
  name: Scalars["String"];
};

export type CreateContactInputDto = {
  companyName?: InputMaybe<Scalars["String"]>;
  contactCompanyId?: InputMaybe<Scalars["Float"]>;
  email: Scalars["String"];
  name: Scalars["String"];
  phoneNo: Scalars["String"];
  projectId?: InputMaybe<Scalars["Float"]>;
};

export type CreateEventInputDto = {
  endAt: Scalars["DateTime"];
  endTime?: InputMaybe<Scalars["String"]>;
  isAllday?: InputMaybe<Scalars["Boolean"]>;
  startAt: Scalars["DateTime"];
  startTime?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type CreateFormCategoryInputDto = {
  name: Scalars["String"];
};

export type CreateManyAdminsInput = {
  /** Array of records to create */
  admins: Array<CreateAdminInputDto>;
};

export type CreateManyAuditLogsInput = {
  /** Array of records to create */
  auditLogs: Array<CreateAuditLogInputDto>;
};

export type CreateManyChecklistItemsInput = {
  /** Array of records to create */
  checklistItems: Array<CreateChecklistItemInputDto>;
};

export type CreateManyChecklistsInput = {
  /** Array of records to create */
  checklists: Array<CreateChecklistInputDto>;
};

export type CreateManyCompaniesInput = {
  /** Array of records to create */
  companies: Array<CreateCompanyInputDto>;
};

export type CreateManyCompanySubscriptionsInput = {
  /** Array of records to create */
  companySubscriptions: Array<CreateCompanySubscriptionInputDto>;
};

export type CreateManyContactCompaniesInput = {
  /** Array of records to create */
  contactCompanies: Array<CreateContactCompanyInputDto>;
};

export type CreateManyContactsInput = {
  /** Array of records to create */
  contacts: Array<CreateContactInputDto>;
};

export type CreateManyEventsInput = {
  /** Array of records to create */
  events: Array<CreateEventInputDto>;
};

export type CreateManyFormCategoriesInput = {
  /** Array of records to create */
  formCategories: Array<CreateFormCategoryInputDto>;
};

export type CreateManyNotificationTransactionsInput = {
  /** Array of records to create */
  notificationTransactions: Array<CreateNotificationTransactionInputDto>;
};

export type CreateManyProjectDocumentCommentsInput = {
  /** Array of records to create */
  projectDocumentComments: Array<CreateProjectDocumentCommentInputDto>;
};

export type CreateManyProjectDocumentsInput = {
  /** Array of records to create */
  projectDocuments: Array<CreateProjectDocumentInputDto>;
};

export type CreateManyProjectInvitationsInput = {
  /** Array of records to create */
  projectInvitations: Array<CreateProjectInvitationInputDto>;
};

export type CreateManyProjectTeamsInput = {
  /** Array of records to create */
  projectTeams: Array<CreateProjectTeamInputDto>;
};

export type CreateManyProjectUsersInput = {
  /** Array of records to create */
  projectUsers: Array<CreateProjectUserInputDto>;
};

export type CreateManyProjectsInput = {
  /** Array of records to create */
  projects: Array<CreateProjectInputDto>;
};

export type CreateManyRequestForSignaturesInput = {
  /** Array of records to create */
  requestForSignatures: Array<CreateRequestForSignatureInputDto>;
};

export type CreateManySalesOrdersInput = {
  /** Array of records to create */
  salesOrders: Array<CreateSalesOrderInputDto>;
};

export type CreateManySubscriptionPackagesInput = {
  /** Array of records to create */
  subscriptionPackages: Array<CreateSubscriptionPackageInputDto>;
};

export type CreateManyTaskCommentsInput = {
  /** Array of records to create */
  taskComments: Array<CreateTaskCommentInputDto>;
};

export type CreateManyTasksAttachmentsInput = {
  /** Array of records to create */
  tasksAttachments: Array<CreateTasksAttachmentInputDto>;
};

export type CreateManyTasksInput = {
  /** Array of records to create */
  tasks: Array<CreateTaskInputDto>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInputDto>;
};

export type CreateNotificationTransactionInputDto = {
  actionName: Scalars["String"];
  actionType: Scalars["String"];
  deeplink: Scalars["String"];
  mobileDeeplink: Scalars["String"];
  read: Scalars["Boolean"];
  thumbnail: Scalars["String"];
  title: Scalars["String"];
  type: Scalars["String"];
  userId: Scalars["ID"];
};

export type CreateOneAdminInput = {
  /** The record to create */
  admin: CreateAdminInputDto;
};

export type CreateOneAuditLogInput = {
  /** The record to create */
  auditLog: CreateAuditLogInputDto;
};

export type CreateOneChecklistInput = {
  /** The record to create */
  checklist: CreateChecklistInputDto;
};

export type CreateOneChecklistItemInput = {
  /** The record to create */
  checklistItem: CreateChecklistItemInputDto;
};

export type CreateOneCompanyInput = {
  /** The record to create */
  company: CreateCompanyInputDto;
};

export type CreateOneCompanySubscriptionInput = {
  /** The record to create */
  companySubscription: CreateCompanySubscriptionInputDto;
};

export type CreateOneContactCompanyInput = {
  /** The record to create */
  contactCompany: CreateContactCompanyInputDto;
};

export type CreateOneContactInput = {
  /** The record to create */
  contact: CreateContactInputDto;
};

export type CreateOneEventInput = {
  /** The record to create */
  event: CreateEventInputDto;
};

export type CreateOneFormCategoryInput = {
  /** The record to create */
  formCategory: CreateFormCategoryInputDto;
};

export type CreateOneNotificationTransactionInput = {
  /** The record to create */
  notificationTransaction: CreateNotificationTransactionInputDto;
};

export type CreateOneProjectDocumentCommentInput = {
  /** The record to create */
  projectDocumentComment: CreateProjectDocumentCommentInputDto;
};

export type CreateOneProjectDocumentInput = {
  /** The record to create */
  projectDocument: CreateProjectDocumentInputDto;
};

export type CreateOneProjectInput = {
  /** The record to create */
  project: CreateProjectInputDto;
};

export type CreateOneProjectInvitationInput = {
  /** The record to create */
  projectInvitation: CreateProjectInvitationInputDto;
};

export type CreateOneProjectTeamInput = {
  /** The record to create */
  projectTeam: CreateProjectTeamInputDto;
};

export type CreateOneProjectUserInput = {
  /** The record to create */
  projectUser: CreateProjectUserInputDto;
};

export type CreateOneRequestForSignatureInput = {
  /** The record to create */
  requestForSignature: CreateRequestForSignatureInputDto;
};

export type CreateOneSalesOrderInput = {
  /** The record to create */
  salesOrder: CreateSalesOrderInputDto;
};

export type CreateOneSubscriptionPackageInput = {
  /** The record to create */
  subscriptionPackage: CreateSubscriptionPackageInputDto;
};

export type CreateOneTaskCommentInput = {
  /** The record to create */
  taskComment: CreateTaskCommentInputDto;
};

export type CreateOneTaskInput = {
  /** The record to create */
  task: CreateTaskInputDto;
};

export type CreateOneTasksAttachmentInput = {
  /** The record to create */
  tasksAttachment: CreateTasksAttachmentInputDto;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInputDto;
};

export type CreateProjectDocumentCommentInputDto = {
  message: Scalars["String"];
  projectDocumentId: Scalars["ID"];
};

export type CreateProjectDocumentCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProjectDocumentCommentSubscriptionFilter;
};

export type CreateProjectDocumentInputDto = {
  category: CategoryType;
  fileSystemType: FileSystemType;
  fileUrl?: InputMaybe<Scalars["Upload"]>;
  name?: InputMaybe<Scalars["String"]>;
  projectDocumentId?: InputMaybe<Scalars["ID"]>;
  projectId?: InputMaybe<Scalars["ID"]>;
  type?: InputMaybe<Scalars["String"]>;
};

export type CreateProjectInputDto = {
  companyId?: InputMaybe<Scalars["Float"]>;
  description?: InputMaybe<Scalars["String"]>;
  refNo?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
  userId?: InputMaybe<Scalars["Float"]>;
};

export type CreateProjectInvitationInputDto = {
  companyId?: InputMaybe<Scalars["Float"]>;
  email: Scalars["String"];
  expireAt?: InputMaybe<Scalars["DateTime"]>;
  invitationRef?: InputMaybe<Scalars["String"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]>;
  projectId?: InputMaybe<Scalars["Float"]>;
  projectTitle: Scalars["String"];
  role: ProjectUserRoleType;
};

export type CreateProjectTeamInputDto = {
  projectId: Scalars["ID"];
  title: Scalars["String"];
};

export type CreateProjectUserInputDto = {
  addedBy?: InputMaybe<Scalars["Float"]>;
  projectId: Scalars["ID"];
  role: ProjectUserRoleType;
  userId: Scalars["ID"];
};

export type CreateRequestForSignatureInputDto = {
  projectDocumentId: Scalars["ID"];
  signById: Scalars["ID"];
};

export type CreateSalesOrderInputDto = {
  companyId: Scalars["ID"];
  paymentUrl: Scalars["String"];
  subscriptionPackageId: Scalars["ID"];
  total: Scalars["Float"];
  userId: Scalars["ID"];
};

export type CreateSubscriptionPackageInputDto = {
  amount: Scalars["Float"];
  availableDuration: Scalars["Float"];
  description: Scalars["String"];
  title: Scalars["String"];
};

export type CreateTaskCommentInputDto = {
  message: Scalars["String"];
  taskId: Scalars["ID"];
};

export type CreateTaskCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskCommentSubscriptionFilter;
};

export type CreateTaskInputDto = {
  attachments?: InputMaybe<Array<CreateTasksAttachmentInputDto>>;
  description?: InputMaybe<Scalars["String"]>;
  documents?: InputMaybe<Array<RelationIdInput>>;
  dueDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<TaskStatusType>;
  title: Scalars["String"];
};

export type CreateTasksAttachmentInputDto = {
  fileUrl?: InputMaybe<Scalars["Upload"]>;
  id?: InputMaybe<Scalars["Float"]>;
};

export type CreateUserInputDto = {
  avatar?: InputMaybe<Scalars["Upload"]>;
  email: Scalars["String"];
  name: Scalars["String"];
  phoneNo: Scalars["String"];
  position?: InputMaybe<Scalars["String"]>;
  reportTo?: InputMaybe<Scalars["String"]>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  neq?: InputMaybe<Scalars["DateTime"]>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars["DateTime"];
  upper: Scalars["DateTime"];
};

export type DeleteManyAdminsInput = {
  /** Filter to find records to delete */
  filter: AdminDeleteFilter;
};

export type DeleteManyAuditLogsInput = {
  /** Filter to find records to delete */
  filter: AuditLogDeleteFilter;
};

export type DeleteManyChecklistItemsInput = {
  /** Filter to find records to delete */
  filter: ChecklistItemDeleteFilter;
};

export type DeleteManyChecklistsInput = {
  /** Filter to find records to delete */
  filter: ChecklistDeleteFilter;
};

export type DeleteManyCompaniesInput = {
  /** Filter to find records to delete */
  filter: CompanyDeleteFilter;
};

export type DeleteManyCompanySubscriptionsInput = {
  /** Filter to find records to delete */
  filter: CompanySubscriptionDeleteFilter;
};

export type DeleteManyContactCompaniesInput = {
  /** Filter to find records to delete */
  filter: ContactCompanyDeleteFilter;
};

export type DeleteManyContactsInput = {
  /** Filter to find records to delete */
  filter: ContactDeleteFilter;
};

export type DeleteManyEventsInput = {
  /** Filter to find records to delete */
  filter: EventDeleteFilter;
};

export type DeleteManyFormCategoriesInput = {
  /** Filter to find records to delete */
  filter: FormCategoryDeleteFilter;
};

export type DeleteManyNotificationTransactionsInput = {
  /** Filter to find records to delete */
  filter: NotificationTransactionDeleteFilter;
};

export type DeleteManyProjectDocumentCommentsInput = {
  /** Filter to find records to delete */
  filter: ProjectDocumentCommentDeleteFilter;
};

export type DeleteManyProjectDocumentsInput = {
  /** Filter to find records to delete */
  filter: ProjectDocumentDeleteFilter;
};

export type DeleteManyProjectInvitationsInput = {
  /** Filter to find records to delete */
  filter: ProjectInvitationDeleteFilter;
};

export type DeleteManyProjectTeamsInput = {
  /** Filter to find records to delete */
  filter: ProjectTeamDeleteFilter;
};

export type DeleteManyRequestForSignaturesInput = {
  /** Filter to find records to delete */
  filter: RequestForSignatureDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: "DeleteManyResponse";
  /** The number of records deleted. */
  deletedCount: Scalars["Int"];
};

export type DeleteManySalesOrdersInput = {
  /** Filter to find records to delete */
  filter: SalesOrderDeleteFilter;
};

export type DeleteManySubscriptionPackagesInput = {
  /** Filter to find records to delete */
  filter: SubscriptionPackageDeleteFilter;
};

export type DeleteManyTaskCommentsInput = {
  /** Filter to find records to delete */
  filter: TaskCommentDeleteFilter;
};

export type DeleteManyTasksAttachmentsInput = {
  /** Filter to find records to delete */
  filter: TasksAttachmentDeleteFilter;
};

export type DeleteManyTasksInput = {
  /** Filter to find records to delete */
  filter: TaskDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneAdminInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneAuditLogInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneChecklistInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneChecklistItemInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneCompanyInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneCompanySubscriptionInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneContactCompanyInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneContactInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneEventInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneFormCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneNotificationTransactionInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneProjectDocumentCommentInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneProjectDocumentCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProjectDocumentCommentSubscriptionFilter;
};

export type DeleteOneProjectDocumentInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneProjectInput = {
  id: Scalars["ID"];
};

export type DeleteOneProjectInvitationInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneProjectTeamInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneRequestForSignatureInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneSalesOrderInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneSubscriptionPackageInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneTaskCommentInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneTaskCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskCommentSubscriptionFilter;
};

export type DeleteOneTaskInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneTasksAttachmentInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars["ID"];
};

export type DeleteProjectUserInputDto = {
  id: Scalars["ID"];
};

export type DuplicateEditedStandardFormInputDto = {
  id: Scalars["Float"];
  xfdf: Scalars["String"];
};

export type Event = {
  __typename?: "Event";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  endAt: Scalars["DateTime"];
  endTime?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isAllDay?: Maybe<Scalars["Boolean"]>;
  startAt: Scalars["DateTime"];
  startTime?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  userId: Scalars["ID"];
};

export type EventAggregateGroupBy = {
  __typename?: "EventAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  endAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  startAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type EventAvgAggregate = {
  __typename?: "EventAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type EventConnection = {
  __typename?: "EventConnection";
  /** Array of nodes. */
  nodes: Array<Event>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type EventCountAggregate = {
  __typename?: "EventCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  endAt?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  startAt?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type EventDeleteFilter = {
  and?: InputMaybe<Array<EventDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  endAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventDeleteFilter>>;
  startAt?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type EventDeleteResponse = {
  __typename?: "EventDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  endAt?: Maybe<Scalars["DateTime"]>;
  endTime?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  isAllDay?: Maybe<Scalars["Boolean"]>;
  startAt?: Maybe<Scalars["DateTime"]>;
  startTime?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type EventFilter = {
  and?: InputMaybe<Array<EventFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  endAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventFilter>>;
  startAt?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type EventMaxAggregate = {
  __typename?: "EventMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  endAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  startAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type EventMinAggregate = {
  __typename?: "EventMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  endAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  startAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type EventSort = {
  direction: SortDirection;
  field: EventSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EventSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  EndAt = "endAt",
  Id = "id",
  StartAt = "startAt",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type EventSumAggregate = {
  __typename?: "EventSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type EventUpdateFilter = {
  and?: InputMaybe<Array<EventUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  endAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<EventUpdateFilter>>;
  startAt?: InputMaybe<DateFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export enum FileChannelTypes {
  Forge = "FORGE",
  Obs = "OBS",
}

export type FileChannelTypesFilterComparison = {
  eq?: InputMaybe<FileChannelTypes>;
  gt?: InputMaybe<FileChannelTypes>;
  gte?: InputMaybe<FileChannelTypes>;
  iLike?: InputMaybe<FileChannelTypes>;
  in?: InputMaybe<Array<FileChannelTypes>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<FileChannelTypes>;
  lt?: InputMaybe<FileChannelTypes>;
  lte?: InputMaybe<FileChannelTypes>;
  neq?: InputMaybe<FileChannelTypes>;
  notILike?: InputMaybe<FileChannelTypes>;
  notIn?: InputMaybe<Array<FileChannelTypes>>;
  notLike?: InputMaybe<FileChannelTypes>;
};

export enum FileSystemType {
  Document = "Document",
  Folder = "Folder",
}

export type FileSystemTypeFilterComparison = {
  eq?: InputMaybe<FileSystemType>;
  gt?: InputMaybe<FileSystemType>;
  gte?: InputMaybe<FileSystemType>;
  iLike?: InputMaybe<FileSystemType>;
  in?: InputMaybe<Array<FileSystemType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<FileSystemType>;
  lt?: InputMaybe<FileSystemType>;
  lte?: InputMaybe<FileSystemType>;
  neq?: InputMaybe<FileSystemType>;
  notILike?: InputMaybe<FileSystemType>;
  notIn?: InputMaybe<Array<FileSystemType>>;
  notLike?: InputMaybe<FileSystemType>;
};

export type FormCategory = {
  __typename?: "FormCategory";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  owner: UserEntity;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  userId: Scalars["ID"];
};

export type FormCategoryAggregateGroupBy = {
  __typename?: "FormCategoryAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type FormCategoryAvgAggregate = {
  __typename?: "FormCategoryAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type FormCategoryConnection = {
  __typename?: "FormCategoryConnection";
  /** Array of nodes. */
  nodes: Array<FormCategory>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type FormCategoryCountAggregate = {
  __typename?: "FormCategoryCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type FormCategoryDeleteFilter = {
  and?: InputMaybe<Array<FormCategoryDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FormCategoryDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type FormCategoryDeleteResponse = {
  __typename?: "FormCategoryDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type FormCategoryFilter = {
  and?: InputMaybe<Array<FormCategoryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FormCategoryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type FormCategoryMaxAggregate = {
  __typename?: "FormCategoryMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type FormCategoryMinAggregate = {
  __typename?: "FormCategoryMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type FormCategorySort = {
  direction: SortDirection;
  field: FormCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FormCategorySortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type FormCategorySumAggregate = {
  __typename?: "FormCategorySumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type FormCategoryUpdateFilter = {
  and?: InputMaybe<Array<FormCategoryUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FormCategoryUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type GetLastParentDocumentFromBreadcrumbDto = {
  category: CategoryType;
  path: Scalars["String"];
};

export type GetProjectDocumentTreeDto = {
  category: CategoryType;
};

export type GetProjectDocumentsBreadcrumbDto = {
  id: Scalars["Float"];
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  iLike?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<Scalars["ID"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["ID"]>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  neq?: InputMaybe<Scalars["ID"]>;
  notILike?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<Scalars["ID"]>>;
  notLike?: InputMaybe<Scalars["ID"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addAssigneesToTask: Task;
  addAttachmentsToTask: Task;
  addChildrenToProjectDocument: ProjectDocument;
  addCommentsToTask: Task;
  addDocumentsToTask: Task;
  addProjectUsersToProject: Project;
  addRequestForSignaturesToProjectDocument: ProjectDocument;
  addTasksToProject: Project;
  approveForm: RequestForSignature;
  assignTask: Task;
  createManyAdmins: Array<Admin>;
  createManyAuditLogs: Array<AuditLog>;
  createManyChecklistItems: Array<ChecklistItem>;
  createManyChecklists: Array<Checklist>;
  createManyCompanies: Array<Company>;
  createManyCompanySubscriptions: Array<CompanySubscription>;
  createManyContactCompanies: Array<ContactCompany>;
  createManyContacts: Array<Contact>;
  createManyEvents: Array<Event>;
  createManyFormCategories: Array<FormCategory>;
  createManyNotificationTransactions: Array<NotificationTransaction>;
  createManyProjectDocumentComments: Array<ProjectDocumentComment>;
  createManyProjectDocuments: Array<ProjectDocument>;
  createManyProjectInvitations: Array<ProjectInvitation>;
  createManyProjectTeams: Array<ProjectTeam>;
  createManyProjectUsers: Array<ProjectUser>;
  createManyProjects: Array<Project>;
  createManyRequestForSignatures: Array<RequestForSignature>;
  createManySalesOrders: Array<SalesOrder>;
  createManySubscriptionPackages: Array<SubscriptionPackage>;
  createManyTaskComments: Array<TaskComment>;
  createManyTasks: Array<Task>;
  createManyTasksAttachments: Array<TasksAttachment>;
  createManyUsers: Array<User>;
  createNewContact: Contact;
  createNewProject: Project;
  createOneAdmin: Admin;
  createOneAuditLog: AuditLog;
  createOneChecklist: Checklist;
  createOneChecklistItem: ChecklistItem;
  createOneCompany: Company;
  createOneCompanySubscription: CompanySubscription;
  createOneContact: Contact;
  createOneContactCompany: ContactCompany;
  createOneEvent: Event;
  createOneFormCategory: FormCategory;
  createOneNotificationTransaction: NotificationTransaction;
  createOneProject: Project;
  createOneProjectDocument: ProjectDocument;
  createOneProjectDocumentComment: ProjectDocumentComment;
  createOneProjectInvitation: ProjectInvitation;
  createOneProjectTeam: ProjectTeam;
  createOneProjectUser: ProjectUser;
  createOneRequestForSignature: RequestForSignature;
  createOneSalesOrder: SalesOrder;
  createOneSubscriptionPackage: SubscriptionPackage;
  createOneTask: Task;
  createOneTaskComment: TaskComment;
  createOneTasksAttachment: TasksAttachment;
  createOneUser: User;
  deleteManyAdmins: DeleteManyResponse;
  deleteManyAuditLogs: DeleteManyResponse;
  deleteManyChecklistItems: DeleteManyResponse;
  deleteManyChecklists: DeleteManyResponse;
  deleteManyCompanies: DeleteManyResponse;
  deleteManyCompanySubscriptions: DeleteManyResponse;
  deleteManyContactCompanies: DeleteManyResponse;
  deleteManyContacts: DeleteManyResponse;
  deleteManyEvents: DeleteManyResponse;
  deleteManyFormCategories: DeleteManyResponse;
  deleteManyNotificationTransactions: DeleteManyResponse;
  deleteManyProjectDocumentComments: DeleteManyResponse;
  deleteManyProjectDocuments: DeleteManyResponse;
  deleteManyProjectInvitations: DeleteManyResponse;
  deleteManyProjectTeams: DeleteManyResponse;
  deleteManyRequestForSignatures: DeleteManyResponse;
  deleteManySalesOrders: DeleteManyResponse;
  deleteManySubscriptionPackages: DeleteManyResponse;
  deleteManyTaskComments: DeleteManyResponse;
  deleteManyTasks: DeleteManyResponse;
  deleteManyTasksAttachments: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneAdmin: AdminDeleteResponse;
  deleteOneAuditLog: AuditLogDeleteResponse;
  deleteOneChecklist: ChecklistDeleteResponse;
  deleteOneChecklistItem: ChecklistItemDeleteResponse;
  deleteOneCompany: CompanyDeleteResponse;
  deleteOneCompanySubscription: CompanySubscriptionDeleteResponse;
  deleteOneContact: ContactDeleteResponse;
  deleteOneContactCompany: ContactCompanyDeleteResponse;
  deleteOneEvent: EventDeleteResponse;
  deleteOneFormCategory: FormCategoryDeleteResponse;
  deleteOneNotificationTransaction: NotificationTransactionDeleteResponse;
  deleteOneProject: Project;
  deleteOneProjectDocument: ProjectDocumentDeleteResponse;
  deleteOneProjectDocumentComment: ProjectDocumentCommentDeleteResponse;
  deleteOneProjectInvitation: ProjectInvitationDeleteResponse;
  deleteOneProjectTeam: ProjectTeamDeleteResponse;
  deleteOneProjectUser: ProjectUser;
  deleteOneRequestForSignature: RequestForSignatureDeleteResponse;
  deleteOneSalesOrder: SalesOrderDeleteResponse;
  deleteOneSubscriptionPackage: SubscriptionPackageDeleteResponse;
  deleteOneTask: TaskDeleteResponse;
  deleteOneTaskComment: TaskCommentDeleteResponse;
  deleteOneTasksAttachment: TasksAttachmentDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  duplicateEditedStandardForm: ProjectDocument;
  removeActorFromNotificationTransaction: NotificationTransaction;
  removeAssigneesFromTask: Task;
  removeAttachmentsFromTask: Task;
  removeChildrenFromProjectDocument: ProjectDocument;
  removeCommentsFromTask: Task;
  removeCompanyFromUser: User;
  removeContactCompanyFromContact: Contact;
  removeDocumentsFromTask: Task;
  removeFormCategoryFromProjectDocument: ProjectDocument;
  removeOwnerFromContact: Contact;
  removeOwnerFromFormCategory: FormCategory;
  removeOwnerFromProject: Project;
  removeOwnerFromProjectDocument: ProjectDocument;
  removeOwnerFromProjectUser: ProjectUser;
  removeOwnerFromRequestForSignature: RequestForSignature;
  removeOwnerFromTask: Task;
  removeParentFolderFromProjectDocument: ProjectDocument;
  removeProjectDocumentFromProjectDocumentComment: ProjectDocumentComment;
  removeProjectDocumentFromRequestForSignature: RequestForSignature;
  removeProjectFromAuditLog: AuditLog;
  removeProjectUsersFromProject: Project;
  removeRequestForSignaturesFromProjectDocument: ProjectDocument;
  removeSignByFromRequestForSignature: RequestForSignature;
  removeTaskFromAuditLog: AuditLog;
  removeTaskFromTaskComment: TaskComment;
  removeTasksFromProject: Project;
  removeUserFromAuditLog: AuditLog;
  removeUserFromProjectDocumentComment: ProjectDocumentComment;
  removeUserFromProjectUser: ProjectUser;
  removeUserFromTaskComment: TaskComment;
  setActorOnNotificationTransaction: NotificationTransaction;
  setAssigneesOnTask: Task;
  setAttachmentsOnTask: Task;
  setChildrenOnProjectDocument: ProjectDocument;
  setCommentsOnTask: Task;
  setCompanyOnUser: User;
  setContactCompanyOnContact: Contact;
  setDocumentsOnTask: Task;
  setFormCategoryOnProjectDocument: ProjectDocument;
  setOwnerOnContact: Contact;
  setOwnerOnFormCategory: FormCategory;
  setOwnerOnProject: Project;
  setOwnerOnProjectDocument: ProjectDocument;
  setOwnerOnProjectUser: ProjectUser;
  setOwnerOnRequestForSignature: RequestForSignature;
  setOwnerOnTask: Task;
  setParentFolderOnProjectDocument: ProjectDocument;
  setProjectDocumentOnProjectDocumentComment: ProjectDocumentComment;
  setProjectDocumentOnRequestForSignature: RequestForSignature;
  setProjectOnAuditLog: AuditLog;
  setProjectUsersOnProject: Project;
  setRequestForSignaturesOnProjectDocument: ProjectDocument;
  setSignByOnRequestForSignature: RequestForSignature;
  setTaskOnAuditLog: AuditLog;
  setTaskOnTaskComment: TaskComment;
  setTasksOnProject: Project;
  setUserOnAuditLog: AuditLog;
  setUserOnProjectDocumentComment: ProjectDocumentComment;
  setUserOnProjectUser: ProjectUser;
  setUserOnTaskComment: TaskComment;
  updateAdminMe: Admin;
  updateContact: Contact;
  updateManyAdmins: UpdateManyResponse;
  updateManyAuditLogs: UpdateManyResponse;
  updateManyChecklistItems: UpdateManyResponse;
  updateManyChecklists: UpdateManyResponse;
  updateManyCompanies: UpdateManyResponse;
  updateManyCompanySubscriptions: UpdateManyResponse;
  updateManyContactCompanies: UpdateManyResponse;
  updateManyContacts: UpdateManyResponse;
  updateManyEvents: UpdateManyResponse;
  updateManyFormCategories: UpdateManyResponse;
  updateManyNotificationTransactions: UpdateManyResponse;
  updateManyProjectDocumentComments: UpdateManyResponse;
  updateManyProjectDocuments: UpdateManyResponse;
  updateManyProjectInvitations: UpdateManyResponse;
  updateManyProjectTeams: UpdateManyResponse;
  updateManyProjectUsers: UpdateManyResponse;
  updateManyProjects: UpdateManyResponse;
  updateManyRequestForSignatures: UpdateManyResponse;
  updateManySalesOrders: UpdateManyResponse;
  updateManySubscriptionPackages: UpdateManyResponse;
  updateManyTaskComments: UpdateManyResponse;
  updateManyTasks: UpdateManyResponse;
  updateManyTasksAttachments: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateMyPassword: User;
  updateOneAdmin: Admin;
  updateOneAuditLog: AuditLog;
  updateOneChecklist: Checklist;
  updateOneChecklistItem: ChecklistItem;
  updateOneCompany: Company;
  updateOneCompanySubscription: CompanySubscription;
  updateOneContact: Contact;
  updateOneContactCompany: ContactCompany;
  updateOneEvent: Event;
  updateOneFormCategory: FormCategory;
  updateOneNotificationTransaction: NotificationTransaction;
  updateOneProject: Project;
  updateOneProjectDocument: ProjectDocument;
  updateOneProjectDocumentComment: ProjectDocumentComment;
  updateOneProjectInvitation: ProjectInvitation;
  updateOneProjectTeam: ProjectTeam;
  updateOneProjectUser: ProjectUser;
  updateOneRequestForSignature: RequestForSignature;
  updateOneSalesOrder: SalesOrder;
  updateOneSubscriptionPackage: SubscriptionPackage;
  updateOneTask: Task;
  updateOneTaskComment: TaskComment;
  updateOneTasksAttachment: TasksAttachment;
  updateOneUser: User;
  updateUserMe: User;
};

export type MutationAddAssigneesToTaskArgs = {
  input: AddAssigneesToTaskInput;
};

export type MutationAddAttachmentsToTaskArgs = {
  input: AddAttachmentsToTaskInput;
};

export type MutationAddChildrenToProjectDocumentArgs = {
  input: AddChildrenToProjectDocumentInput;
};

export type MutationAddCommentsToTaskArgs = {
  input: AddCommentsToTaskInput;
};

export type MutationAddDocumentsToTaskArgs = {
  input: AddDocumentsToTaskInput;
};

export type MutationAddProjectUsersToProjectArgs = {
  input: AddProjectUsersToProjectInput;
};

export type MutationAddRequestForSignaturesToProjectDocumentArgs = {
  input: AddRequestForSignaturesToProjectDocumentInput;
};

export type MutationAddTasksToProjectArgs = {
  input: AddTasksToProjectInput;
};

export type MutationApproveFormArgs = {
  input: ApproveFormInputDto;
};

export type MutationAssignTaskArgs = {
  input: AssignTaskInputDto;
};

export type MutationCreateManyAdminsArgs = {
  input: CreateManyAdminsInput;
};

export type MutationCreateManyAuditLogsArgs = {
  input: CreateManyAuditLogsInput;
};

export type MutationCreateManyChecklistItemsArgs = {
  input: CreateManyChecklistItemsInput;
};

export type MutationCreateManyChecklistsArgs = {
  input: CreateManyChecklistsInput;
};

export type MutationCreateManyCompaniesArgs = {
  input: CreateManyCompaniesInput;
};

export type MutationCreateManyCompanySubscriptionsArgs = {
  input: CreateManyCompanySubscriptionsInput;
};

export type MutationCreateManyContactCompaniesArgs = {
  input: CreateManyContactCompaniesInput;
};

export type MutationCreateManyContactsArgs = {
  input: CreateManyContactsInput;
};

export type MutationCreateManyEventsArgs = {
  input: CreateManyEventsInput;
};

export type MutationCreateManyFormCategoriesArgs = {
  input: CreateManyFormCategoriesInput;
};

export type MutationCreateManyNotificationTransactionsArgs = {
  input: CreateManyNotificationTransactionsInput;
};

export type MutationCreateManyProjectDocumentCommentsArgs = {
  input: CreateManyProjectDocumentCommentsInput;
};

export type MutationCreateManyProjectDocumentsArgs = {
  input: CreateManyProjectDocumentsInput;
};

export type MutationCreateManyProjectInvitationsArgs = {
  input: CreateManyProjectInvitationsInput;
};

export type MutationCreateManyProjectTeamsArgs = {
  input: CreateManyProjectTeamsInput;
};

export type MutationCreateManyProjectUsersArgs = {
  input: CreateManyProjectUsersInput;
};

export type MutationCreateManyProjectsArgs = {
  input: CreateManyProjectsInput;
};

export type MutationCreateManyRequestForSignaturesArgs = {
  input: CreateManyRequestForSignaturesInput;
};

export type MutationCreateManySalesOrdersArgs = {
  input: CreateManySalesOrdersInput;
};

export type MutationCreateManySubscriptionPackagesArgs = {
  input: CreateManySubscriptionPackagesInput;
};

export type MutationCreateManyTaskCommentsArgs = {
  input: CreateManyTaskCommentsInput;
};

export type MutationCreateManyTasksArgs = {
  input: CreateManyTasksInput;
};

export type MutationCreateManyTasksAttachmentsArgs = {
  input: CreateManyTasksAttachmentsInput;
};

export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};

export type MutationCreateNewContactArgs = {
  input: CreateContactInputDto;
};

export type MutationCreateNewProjectArgs = {
  input: CreateProjectInputDto;
};

export type MutationCreateOneAdminArgs = {
  input: CreateOneAdminInput;
};

export type MutationCreateOneAuditLogArgs = {
  input: CreateOneAuditLogInput;
};

export type MutationCreateOneChecklistArgs = {
  input: CreateOneChecklistInput;
};

export type MutationCreateOneChecklistItemArgs = {
  input: CreateOneChecklistItemInput;
};

export type MutationCreateOneCompanyArgs = {
  input: CreateOneCompanyInput;
};

export type MutationCreateOneCompanySubscriptionArgs = {
  input: CreateOneCompanySubscriptionInput;
};

export type MutationCreateOneContactArgs = {
  input: CreateOneContactInput;
};

export type MutationCreateOneContactCompanyArgs = {
  input: CreateOneContactCompanyInput;
};

export type MutationCreateOneEventArgs = {
  input: CreateOneEventInput;
};

export type MutationCreateOneFormCategoryArgs = {
  input: CreateOneFormCategoryInput;
};

export type MutationCreateOneNotificationTransactionArgs = {
  input: CreateOneNotificationTransactionInput;
};

export type MutationCreateOneProjectArgs = {
  input: CreateOneProjectInput;
};

export type MutationCreateOneProjectDocumentArgs = {
  input: CreateOneProjectDocumentInput;
};

export type MutationCreateOneProjectDocumentCommentArgs = {
  input: CreateOneProjectDocumentCommentInput;
};

export type MutationCreateOneProjectInvitationArgs = {
  input: CreateOneProjectInvitationInput;
};

export type MutationCreateOneProjectTeamArgs = {
  input: CreateOneProjectTeamInput;
};

export type MutationCreateOneProjectUserArgs = {
  input: CreateOneProjectUserInput;
};

export type MutationCreateOneRequestForSignatureArgs = {
  input: CreateOneRequestForSignatureInput;
};

export type MutationCreateOneSalesOrderArgs = {
  input: CreateOneSalesOrderInput;
};

export type MutationCreateOneSubscriptionPackageArgs = {
  input: CreateOneSubscriptionPackageInput;
};

export type MutationCreateOneTaskArgs = {
  input: CreateOneTaskInput;
};

export type MutationCreateOneTaskCommentArgs = {
  input: CreateOneTaskCommentInput;
};

export type MutationCreateOneTasksAttachmentArgs = {
  input: CreateOneTasksAttachmentInput;
};

export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};

export type MutationDeleteManyAdminsArgs = {
  input: DeleteManyAdminsInput;
};

export type MutationDeleteManyAuditLogsArgs = {
  input: DeleteManyAuditLogsInput;
};

export type MutationDeleteManyChecklistItemsArgs = {
  input: DeleteManyChecklistItemsInput;
};

export type MutationDeleteManyChecklistsArgs = {
  input: DeleteManyChecklistsInput;
};

export type MutationDeleteManyCompaniesArgs = {
  input: DeleteManyCompaniesInput;
};

export type MutationDeleteManyCompanySubscriptionsArgs = {
  input: DeleteManyCompanySubscriptionsInput;
};

export type MutationDeleteManyContactCompaniesArgs = {
  input: DeleteManyContactCompaniesInput;
};

export type MutationDeleteManyContactsArgs = {
  input: DeleteManyContactsInput;
};

export type MutationDeleteManyEventsArgs = {
  input: DeleteManyEventsInput;
};

export type MutationDeleteManyFormCategoriesArgs = {
  input: DeleteManyFormCategoriesInput;
};

export type MutationDeleteManyNotificationTransactionsArgs = {
  input: DeleteManyNotificationTransactionsInput;
};

export type MutationDeleteManyProjectDocumentCommentsArgs = {
  input: DeleteManyProjectDocumentCommentsInput;
};

export type MutationDeleteManyProjectDocumentsArgs = {
  input: DeleteManyProjectDocumentsInput;
};

export type MutationDeleteManyProjectInvitationsArgs = {
  input: DeleteManyProjectInvitationsInput;
};

export type MutationDeleteManyProjectTeamsArgs = {
  input: DeleteManyProjectTeamsInput;
};

export type MutationDeleteManyRequestForSignaturesArgs = {
  input: DeleteManyRequestForSignaturesInput;
};

export type MutationDeleteManySalesOrdersArgs = {
  input: DeleteManySalesOrdersInput;
};

export type MutationDeleteManySubscriptionPackagesArgs = {
  input: DeleteManySubscriptionPackagesInput;
};

export type MutationDeleteManyTaskCommentsArgs = {
  input: DeleteManyTaskCommentsInput;
};

export type MutationDeleteManyTasksArgs = {
  input: DeleteManyTasksInput;
};

export type MutationDeleteManyTasksAttachmentsArgs = {
  input: DeleteManyTasksAttachmentsInput;
};

export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};

export type MutationDeleteOneAdminArgs = {
  input: DeleteOneAdminInput;
};

export type MutationDeleteOneAuditLogArgs = {
  input: DeleteOneAuditLogInput;
};

export type MutationDeleteOneChecklistArgs = {
  input: DeleteOneChecklistInput;
};

export type MutationDeleteOneChecklistItemArgs = {
  input: DeleteOneChecklistItemInput;
};

export type MutationDeleteOneCompanyArgs = {
  input: DeleteOneCompanyInput;
};

export type MutationDeleteOneCompanySubscriptionArgs = {
  input: DeleteOneCompanySubscriptionInput;
};

export type MutationDeleteOneContactArgs = {
  input: DeleteOneContactInput;
};

export type MutationDeleteOneContactCompanyArgs = {
  input: DeleteOneContactCompanyInput;
};

export type MutationDeleteOneEventArgs = {
  input: DeleteOneEventInput;
};

export type MutationDeleteOneFormCategoryArgs = {
  input: DeleteOneFormCategoryInput;
};

export type MutationDeleteOneNotificationTransactionArgs = {
  input: DeleteOneNotificationTransactionInput;
};

export type MutationDeleteOneProjectArgs = {
  input: DeleteOneProjectInput;
};

export type MutationDeleteOneProjectDocumentArgs = {
  input: DeleteOneProjectDocumentInput;
};

export type MutationDeleteOneProjectDocumentCommentArgs = {
  input: DeleteOneProjectDocumentCommentInput;
};

export type MutationDeleteOneProjectInvitationArgs = {
  input: DeleteOneProjectInvitationInput;
};

export type MutationDeleteOneProjectTeamArgs = {
  input: DeleteOneProjectTeamInput;
};

export type MutationDeleteOneProjectUserArgs = {
  input: DeleteProjectUserInputDto;
};

export type MutationDeleteOneRequestForSignatureArgs = {
  input: DeleteOneRequestForSignatureInput;
};

export type MutationDeleteOneSalesOrderArgs = {
  input: DeleteOneSalesOrderInput;
};

export type MutationDeleteOneSubscriptionPackageArgs = {
  input: DeleteOneSubscriptionPackageInput;
};

export type MutationDeleteOneTaskArgs = {
  input: DeleteOneTaskInput;
};

export type MutationDeleteOneTaskCommentArgs = {
  input: DeleteOneTaskCommentInput;
};

export type MutationDeleteOneTasksAttachmentArgs = {
  input: DeleteOneTasksAttachmentInput;
};

export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};

export type MutationDuplicateEditedStandardFormArgs = {
  input: DuplicateEditedStandardFormInputDto;
};

export type MutationRemoveActorFromNotificationTransactionArgs = {
  input: RemoveActorFromNotificationTransactionInput;
};

export type MutationRemoveAssigneesFromTaskArgs = {
  input: RemoveAssigneesFromTaskInput;
};

export type MutationRemoveAttachmentsFromTaskArgs = {
  input: RemoveAttachmentsFromTaskInput;
};

export type MutationRemoveChildrenFromProjectDocumentArgs = {
  input: RemoveChildrenFromProjectDocumentInput;
};

export type MutationRemoveCommentsFromTaskArgs = {
  input: RemoveCommentsFromTaskInput;
};

export type MutationRemoveCompanyFromUserArgs = {
  input: RemoveCompanyFromUserInput;
};

export type MutationRemoveContactCompanyFromContactArgs = {
  input: RemoveContactCompanyFromContactInput;
};

export type MutationRemoveDocumentsFromTaskArgs = {
  input: RemoveDocumentsFromTaskInput;
};

export type MutationRemoveFormCategoryFromProjectDocumentArgs = {
  input: RemoveFormCategoryFromProjectDocumentInput;
};

export type MutationRemoveOwnerFromContactArgs = {
  input: RemoveOwnerFromContactInput;
};

export type MutationRemoveOwnerFromFormCategoryArgs = {
  input: RemoveOwnerFromFormCategoryInput;
};

export type MutationRemoveOwnerFromProjectArgs = {
  input: RemoveOwnerFromProjectInput;
};

export type MutationRemoveOwnerFromProjectDocumentArgs = {
  input: RemoveOwnerFromProjectDocumentInput;
};

export type MutationRemoveOwnerFromProjectUserArgs = {
  input: RemoveOwnerFromProjectUserInput;
};

export type MutationRemoveOwnerFromRequestForSignatureArgs = {
  input: RemoveOwnerFromRequestForSignatureInput;
};

export type MutationRemoveOwnerFromTaskArgs = {
  input: RemoveOwnerFromTaskInput;
};

export type MutationRemoveParentFolderFromProjectDocumentArgs = {
  input: RemoveParentFolderFromProjectDocumentInput;
};

export type MutationRemoveProjectDocumentFromProjectDocumentCommentArgs = {
  input: RemoveProjectDocumentFromProjectDocumentCommentInput;
};

export type MutationRemoveProjectDocumentFromRequestForSignatureArgs = {
  input: RemoveProjectDocumentFromRequestForSignatureInput;
};

export type MutationRemoveProjectFromAuditLogArgs = {
  input: RemoveProjectFromAuditLogInput;
};

export type MutationRemoveProjectUsersFromProjectArgs = {
  input: RemoveProjectUsersFromProjectInput;
};

export type MutationRemoveRequestForSignaturesFromProjectDocumentArgs = {
  input: RemoveRequestForSignaturesFromProjectDocumentInput;
};

export type MutationRemoveSignByFromRequestForSignatureArgs = {
  input: RemoveSignByFromRequestForSignatureInput;
};

export type MutationRemoveTaskFromAuditLogArgs = {
  input: RemoveTaskFromAuditLogInput;
};

export type MutationRemoveTaskFromTaskCommentArgs = {
  input: RemoveTaskFromTaskCommentInput;
};

export type MutationRemoveTasksFromProjectArgs = {
  input: RemoveTasksFromProjectInput;
};

export type MutationRemoveUserFromAuditLogArgs = {
  input: RemoveUserFromAuditLogInput;
};

export type MutationRemoveUserFromProjectDocumentCommentArgs = {
  input: RemoveUserFromProjectDocumentCommentInput;
};

export type MutationRemoveUserFromProjectUserArgs = {
  input: RemoveUserFromProjectUserInput;
};

export type MutationRemoveUserFromTaskCommentArgs = {
  input: RemoveUserFromTaskCommentInput;
};

export type MutationSetActorOnNotificationTransactionArgs = {
  input: SetActorOnNotificationTransactionInput;
};

export type MutationSetAssigneesOnTaskArgs = {
  input: SetAssigneesOnTaskInput;
};

export type MutationSetAttachmentsOnTaskArgs = {
  input: SetAttachmentsOnTaskInput;
};

export type MutationSetChildrenOnProjectDocumentArgs = {
  input: SetChildrenOnProjectDocumentInput;
};

export type MutationSetCommentsOnTaskArgs = {
  input: SetCommentsOnTaskInput;
};

export type MutationSetCompanyOnUserArgs = {
  input: SetCompanyOnUserInput;
};

export type MutationSetContactCompanyOnContactArgs = {
  input: SetContactCompanyOnContactInput;
};

export type MutationSetDocumentsOnTaskArgs = {
  input: SetDocumentsOnTaskInput;
};

export type MutationSetFormCategoryOnProjectDocumentArgs = {
  input: SetFormCategoryOnProjectDocumentInput;
};

export type MutationSetOwnerOnContactArgs = {
  input: SetOwnerOnContactInput;
};

export type MutationSetOwnerOnFormCategoryArgs = {
  input: SetOwnerOnFormCategoryInput;
};

export type MutationSetOwnerOnProjectArgs = {
  input: SetOwnerOnProjectInput;
};

export type MutationSetOwnerOnProjectDocumentArgs = {
  input: SetOwnerOnProjectDocumentInput;
};

export type MutationSetOwnerOnProjectUserArgs = {
  input: SetOwnerOnProjectUserInput;
};

export type MutationSetOwnerOnRequestForSignatureArgs = {
  input: SetOwnerOnRequestForSignatureInput;
};

export type MutationSetOwnerOnTaskArgs = {
  input: SetOwnerOnTaskInput;
};

export type MutationSetParentFolderOnProjectDocumentArgs = {
  input: SetParentFolderOnProjectDocumentInput;
};

export type MutationSetProjectDocumentOnProjectDocumentCommentArgs = {
  input: SetProjectDocumentOnProjectDocumentCommentInput;
};

export type MutationSetProjectDocumentOnRequestForSignatureArgs = {
  input: SetProjectDocumentOnRequestForSignatureInput;
};

export type MutationSetProjectOnAuditLogArgs = {
  input: SetProjectOnAuditLogInput;
};

export type MutationSetProjectUsersOnProjectArgs = {
  input: SetProjectUsersOnProjectInput;
};

export type MutationSetRequestForSignaturesOnProjectDocumentArgs = {
  input: SetRequestForSignaturesOnProjectDocumentInput;
};

export type MutationSetSignByOnRequestForSignatureArgs = {
  input: SetSignByOnRequestForSignatureInput;
};

export type MutationSetTaskOnAuditLogArgs = {
  input: SetTaskOnAuditLogInput;
};

export type MutationSetTaskOnTaskCommentArgs = {
  input: SetTaskOnTaskCommentInput;
};

export type MutationSetTasksOnProjectArgs = {
  input: SetTasksOnProjectInput;
};

export type MutationSetUserOnAuditLogArgs = {
  input: SetUserOnAuditLogInput;
};

export type MutationSetUserOnProjectDocumentCommentArgs = {
  input: SetUserOnProjectDocumentCommentInput;
};

export type MutationSetUserOnProjectUserArgs = {
  input: SetUserOnProjectUserInput;
};

export type MutationSetUserOnTaskCommentArgs = {
  input: SetUserOnTaskCommentInput;
};

export type MutationUpdateAdminMeArgs = {
  input: UpdateAdminInputDto;
};

export type MutationUpdateContactArgs = {
  input: UpdateOneContactDto;
};

export type MutationUpdateManyAdminsArgs = {
  input: UpdateManyAdminsInput;
};

export type MutationUpdateManyAuditLogsArgs = {
  input: UpdateManyAuditLogsInput;
};

export type MutationUpdateManyChecklistItemsArgs = {
  input: UpdateManyChecklistItemsInput;
};

export type MutationUpdateManyChecklistsArgs = {
  input: UpdateManyChecklistsInput;
};

export type MutationUpdateManyCompaniesArgs = {
  input: UpdateManyCompaniesInput;
};

export type MutationUpdateManyCompanySubscriptionsArgs = {
  input: UpdateManyCompanySubscriptionsInput;
};

export type MutationUpdateManyContactCompaniesArgs = {
  input: UpdateManyContactCompaniesInput;
};

export type MutationUpdateManyContactsArgs = {
  input: UpdateManyContactsInput;
};

export type MutationUpdateManyEventsArgs = {
  input: UpdateManyEventsInput;
};

export type MutationUpdateManyFormCategoriesArgs = {
  input: UpdateManyFormCategoriesInput;
};

export type MutationUpdateManyNotificationTransactionsArgs = {
  input: UpdateManyNotificationTransactionsInput;
};

export type MutationUpdateManyProjectDocumentCommentsArgs = {
  input: UpdateManyProjectDocumentCommentsInput;
};

export type MutationUpdateManyProjectDocumentsArgs = {
  input: UpdateManyProjectDocumentsInput;
};

export type MutationUpdateManyProjectInvitationsArgs = {
  input: UpdateManyProjectInvitationsInput;
};

export type MutationUpdateManyProjectTeamsArgs = {
  input: UpdateManyProjectTeamsInput;
};

export type MutationUpdateManyProjectUsersArgs = {
  input: UpdateManyProjectUsersInput;
};

export type MutationUpdateManyProjectsArgs = {
  input: UpdateManyProjectsInput;
};

export type MutationUpdateManyRequestForSignaturesArgs = {
  input: UpdateManyRequestForSignaturesInput;
};

export type MutationUpdateManySalesOrdersArgs = {
  input: UpdateManySalesOrdersInput;
};

export type MutationUpdateManySubscriptionPackagesArgs = {
  input: UpdateManySubscriptionPackagesInput;
};

export type MutationUpdateManyTaskCommentsArgs = {
  input: UpdateManyTaskCommentsInput;
};

export type MutationUpdateManyTasksArgs = {
  input: UpdateManyTasksInput;
};

export type MutationUpdateManyTasksAttachmentsArgs = {
  input: UpdateManyTasksAttachmentsInput;
};

export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};

export type MutationUpdateMyPasswordArgs = {
  input: UpdateUserPasswordDto;
};

export type MutationUpdateOneAdminArgs = {
  input: UpdateOneAdminInput;
};

export type MutationUpdateOneAuditLogArgs = {
  input: UpdateOneAuditLogInput;
};

export type MutationUpdateOneChecklistArgs = {
  input: UpdateOneChecklistInput;
};

export type MutationUpdateOneChecklistItemArgs = {
  input: UpdateOneChecklistItemInput;
};

export type MutationUpdateOneCompanyArgs = {
  input: UpdateOneCompanyInput;
};

export type MutationUpdateOneCompanySubscriptionArgs = {
  input: UpdateOneCompanySubscriptionInput;
};

export type MutationUpdateOneContactArgs = {
  input: UpdateOneContactInput;
};

export type MutationUpdateOneContactCompanyArgs = {
  input: UpdateOneContactCompanyInput;
};

export type MutationUpdateOneEventArgs = {
  input: UpdateOneEventInput;
};

export type MutationUpdateOneFormCategoryArgs = {
  input: UpdateOneFormCategoryInput;
};

export type MutationUpdateOneNotificationTransactionArgs = {
  input: UpdateOneNotificationTransactionInput;
};

export type MutationUpdateOneProjectArgs = {
  input: UpdateOneProjectInput;
};

export type MutationUpdateOneProjectDocumentArgs = {
  input: UpdateOneProjectDocumentInput;
};

export type MutationUpdateOneProjectDocumentCommentArgs = {
  input: UpdateOneProjectDocumentCommentInput;
};

export type MutationUpdateOneProjectInvitationArgs = {
  input: UpdateOneProjectInvitationInput;
};

export type MutationUpdateOneProjectTeamArgs = {
  input: UpdateOneProjectTeamInput;
};

export type MutationUpdateOneProjectUserArgs = {
  input: UpdateOneProjectUserInput;
};

export type MutationUpdateOneRequestForSignatureArgs = {
  input: UpdateOneRequestForSignatureInput;
};

export type MutationUpdateOneSalesOrderArgs = {
  input: UpdateOneSalesOrderInput;
};

export type MutationUpdateOneSubscriptionPackageArgs = {
  input: UpdateOneSubscriptionPackageInput;
};

export type MutationUpdateOneTaskArgs = {
  input: UpdateOneTaskInput;
};

export type MutationUpdateOneTaskCommentArgs = {
  input: UpdateOneTaskCommentInput;
};

export type MutationUpdateOneTasksAttachmentArgs = {
  input: UpdateOneTasksAttachmentInput;
};

export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type MutationUpdateUserMeArgs = {
  input: UpdateUserInputDto;
};

export type NotificationTransaction = {
  __typename?: "NotificationTransaction";
  actionName?: Maybe<Scalars["String"]>;
  actionType?: Maybe<Scalars["String"]>;
  actor: User;
  actorId: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deeplink: Scalars["String"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  mobileDeeplink?: Maybe<Scalars["String"]>;
  read: Scalars["Boolean"];
  thumbnail?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  userId: Scalars["ID"];
};

export type NotificationTransactionAggregateGroupBy = {
  __typename?: "NotificationTransactionAggregateGroupBy";
  actorId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deeplink?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  mobileDeeplink?: Maybe<Scalars["String"]>;
  read?: Maybe<Scalars["Boolean"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type NotificationTransactionAvgAggregate = {
  __typename?: "NotificationTransactionAvgAggregate";
  actorId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type NotificationTransactionConnection = {
  __typename?: "NotificationTransactionConnection";
  /** Array of nodes. */
  nodes: Array<NotificationTransaction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type NotificationTransactionCountAggregate = {
  __typename?: "NotificationTransactionCountAggregate";
  actorId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deeplink?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  mobileDeeplink?: Maybe<Scalars["Int"]>;
  read?: Maybe<Scalars["Int"]>;
  thumbnail?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type NotificationTransactionDeleteFilter = {
  actorId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<NotificationTransactionDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deeplink?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mobileDeeplink?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<NotificationTransactionDeleteFilter>>;
  read?: InputMaybe<BooleanFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type NotificationTransactionDeleteResponse = {
  __typename?: "NotificationTransactionDeleteResponse";
  actionName?: Maybe<Scalars["String"]>;
  actionType?: Maybe<Scalars["String"]>;
  actorId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deeplink?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  mobileDeeplink?: Maybe<Scalars["String"]>;
  read?: Maybe<Scalars["Boolean"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type NotificationTransactionFilter = {
  actorId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<NotificationTransactionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deeplink?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mobileDeeplink?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<NotificationTransactionFilter>>;
  read?: InputMaybe<BooleanFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type NotificationTransactionMaxAggregate = {
  __typename?: "NotificationTransactionMaxAggregate";
  actorId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deeplink?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  mobileDeeplink?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type NotificationTransactionMinAggregate = {
  __typename?: "NotificationTransactionMinAggregate";
  actorId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deeplink?: Maybe<Scalars["String"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  mobileDeeplink?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type NotificationTransactionSort = {
  direction: SortDirection;
  field: NotificationTransactionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum NotificationTransactionSortFields {
  ActorId = "actorId",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Deeplink = "deeplink",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  MobileDeeplink = "mobileDeeplink",
  Read = "read",
  Thumbnail = "thumbnail",
  Title = "title",
  Type = "type",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type NotificationTransactionSumAggregate = {
  __typename?: "NotificationTransactionSumAggregate";
  actorId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type NotificationTransactionUpdateFilter = {
  actorId?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<NotificationTransactionUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deeplink?: InputMaybe<StringFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mobileDeeplink?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<NotificationTransactionUpdateFilter>>;
  read?: InputMaybe<BooleanFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  neq?: InputMaybe<Scalars["Float"]>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars["Float"];
  upper: Scalars["Float"];
};

export type OffsetPageInfo = {
  __typename?: "OffsetPageInfo";
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars["Int"]>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars["Int"]>;
};

export type Project = {
  __typename?: "Project";
  client?: Maybe<Scalars["String"]>;
  cnsConsultant?: Maybe<Scalars["String"]>;
  companyId: Scalars["ID"];
  completionDate?: Maybe<Scalars["DateTime"]>;
  contractor?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  deputySuperintendent?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  environmentConsultant?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  managedBy?: Maybe<Scalars["String"]>;
  mneConsultant?: Maybe<Scalars["String"]>;
  owner?: Maybe<User>;
  projectUsers?: Maybe<ProjectProjectUsersConnection>;
  qsConsultant?: Maybe<Scalars["String"]>;
  refNo?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  status: ProjectStatusType;
  tasks?: Maybe<ProjectTasksConnection>;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  userId: Scalars["ID"];
};

export type ProjectProjectUsersArgs = {
  filter?: InputMaybe<ProjectUserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectUserSort>>;
};

export type ProjectTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskSort>>;
};

export type ProjectAggregateGroupBy = {
  __typename?: "ProjectAggregateGroupBy";
  client?: Maybe<Scalars["String"]>;
  cnsConsultant?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  completionDate?: Maybe<Scalars["DateTime"]>;
  contractor?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  deputySuperintendent?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  environmentConsultant?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  managedBy?: Maybe<Scalars["String"]>;
  mneConsultant?: Maybe<Scalars["String"]>;
  qsConsultant?: Maybe<Scalars["String"]>;
  refNo?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<ProjectStatusType>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectAvgAggregate = {
  __typename?: "ProjectAvgAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ProjectConnection = {
  __typename?: "ProjectConnection";
  /** Array of nodes. */
  nodes: Array<Project>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectCountAggregate = {
  __typename?: "ProjectCountAggregate";
  client?: Maybe<Scalars["Int"]>;
  cnsConsultant?: Maybe<Scalars["Int"]>;
  companyId?: Maybe<Scalars["Int"]>;
  completionDate?: Maybe<Scalars["Int"]>;
  contractor?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  deputySuperintendent?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["Int"]>;
  environmentConsultant?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  managedBy?: Maybe<Scalars["Int"]>;
  mneConsultant?: Maybe<Scalars["Int"]>;
  qsConsultant?: Maybe<Scalars["Int"]>;
  refNo?: Maybe<Scalars["Int"]>;
  startDate?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type ProjectDocument = {
  __typename?: "ProjectDocument";
  addedBy?: Maybe<Scalars["ID"]>;
  allFormCode?: Maybe<Scalars["String"]>;
  category?: Maybe<CategoryType>;
  children?: Maybe<Array<ProjectDocument>>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileChannel: FileChannelTypes;
  fileSize?: Maybe<Scalars["Float"]>;
  fileSystemType?: Maybe<FileSystemType>;
  fileUrl?: Maybe<Scalars["String"]>;
  formCategory?: Maybe<FormCategory>;
  formCategoryId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  owner: User;
  parentFolder?: Maybe<ProjectDocument>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  projectId: Scalars["ID"];
  requestForSignatures?: Maybe<Array<RequestForSignature>>;
  status?: Maybe<ProjectDocumentStatus>;
  type?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  xfdf?: Maybe<Scalars["String"]>;
};

export type ProjectDocumentChildrenArgs = {
  filter?: InputMaybe<ProjectDocumentFilter>;
  sorting?: InputMaybe<Array<ProjectDocumentSort>>;
};

export type ProjectDocumentRequestForSignaturesArgs = {
  filter?: InputMaybe<RequestForSignatureFilter>;
  sorting?: InputMaybe<Array<RequestForSignatureSort>>;
};

export type ProjectDocumentAggregateGroupBy = {
  __typename?: "ProjectDocumentAggregateGroupBy";
  addedBy?: Maybe<Scalars["ID"]>;
  allFormCode?: Maybe<Scalars["String"]>;
  category?: Maybe<CategoryType>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileChannel?: Maybe<FileChannelTypes>;
  fileSize?: Maybe<Scalars["Float"]>;
  fileSystemType?: Maybe<FileSystemType>;
  fileUrl?: Maybe<Scalars["String"]>;
  formCategoryId?: Maybe<Scalars["ID"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<ProjectDocumentStatus>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectDocumentAvgAggregate = {
  __typename?: "ProjectDocumentAvgAggregate";
  addedBy?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileSize?: Maybe<Scalars["Float"]>;
  formCategoryId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectDocumentId?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectDocumentComment = {
  __typename?: "ProjectDocumentComment";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  message?: Maybe<Scalars["String"]>;
  projectDocument: ProjectDocumentEntity;
  projectDocumentId: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  user: UserEntity;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectDocumentCommentAggregateGroupBy = {
  __typename?: "ProjectDocumentCommentAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectDocumentCommentAvgAggregate = {
  __typename?: "ProjectDocumentCommentAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectDocumentId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ProjectDocumentCommentConnection = {
  __typename?: "ProjectDocumentCommentConnection";
  /** Array of nodes. */
  nodes: Array<ProjectDocumentComment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectDocumentCommentCountAggregate = {
  __typename?: "ProjectDocumentCommentCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  message?: Maybe<Scalars["Int"]>;
  projectDocumentId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type ProjectDocumentCommentDeleteFilter = {
  and?: InputMaybe<Array<ProjectDocumentCommentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentCommentDeleteFilter>>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectDocumentCommentDeleteResponse = {
  __typename?: "ProjectDocumentCommentDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectDocumentCommentFilter = {
  and?: InputMaybe<Array<ProjectDocumentCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentCommentFilter>>;
  projectDocument?: InputMaybe<ProjectDocumentCommentFilterProjectDocumentEntityFilter>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  user?: InputMaybe<ProjectDocumentCommentFilterUserEntityFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectDocumentCommentFilterProjectDocumentEntityFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  allFormCode?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<
    Array<ProjectDocumentCommentFilterProjectDocumentEntityFilter>
  >;
  category?: InputMaybe<CategoryTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileChannel?: InputMaybe<FileChannelTypesFilterComparison>;
  fileSize?: InputMaybe<NumberFieldComparison>;
  fileSystemType?: InputMaybe<FileSystemTypeFilterComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  formCategoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<
    Array<ProjectDocumentCommentFilterProjectDocumentEntityFilter>
  >;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ProjectDocumentStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectDocumentCommentFilterUserEntityFilter = {
  and?: InputMaybe<Array<ProjectDocumentCommentFilterUserEntityFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentCommentFilterUserEntityFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectDocumentCommentMaxAggregate = {
  __typename?: "ProjectDocumentCommentMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectDocumentCommentMinAggregate = {
  __typename?: "ProjectDocumentCommentMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectDocumentCommentSort = {
  direction: SortDirection;
  field: ProjectDocumentCommentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectDocumentCommentSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Message = "message",
  ProjectDocumentId = "projectDocumentId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type ProjectDocumentCommentSubscriptionFilter = {
  and?: InputMaybe<Array<ProjectDocumentCommentSubscriptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentCommentSubscriptionFilter>>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectDocumentCommentSumAggregate = {
  __typename?: "ProjectDocumentCommentSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectDocumentId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ProjectDocumentCommentUpdateFilter = {
  and?: InputMaybe<Array<ProjectDocumentCommentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentCommentUpdateFilter>>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectDocumentConnection = {
  __typename?: "ProjectDocumentConnection";
  /** Array of nodes. */
  nodes: Array<ProjectDocument>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectDocumentCountAggregate = {
  __typename?: "ProjectDocumentCountAggregate";
  addedBy?: Maybe<Scalars["Int"]>;
  allFormCode?: Maybe<Scalars["Int"]>;
  category?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  fileChannel?: Maybe<Scalars["Int"]>;
  fileSize?: Maybe<Scalars["Int"]>;
  fileSystemType?: Maybe<Scalars["Int"]>;
  fileUrl?: Maybe<Scalars["Int"]>;
  formCategoryId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  projectDocumentId?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ProjectDocumentDeleteFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  allFormCode?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProjectDocumentDeleteFilter>>;
  category?: InputMaybe<CategoryTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileChannel?: InputMaybe<FileChannelTypesFilterComparison>;
  fileSize?: InputMaybe<NumberFieldComparison>;
  fileSystemType?: InputMaybe<FileSystemTypeFilterComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  formCategoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentDeleteFilter>>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ProjectDocumentStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectDocumentDeleteResponse = {
  __typename?: "ProjectDocumentDeleteResponse";
  addedBy?: Maybe<Scalars["ID"]>;
  allFormCode?: Maybe<Scalars["String"]>;
  category?: Maybe<CategoryType>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileChannel?: Maybe<FileChannelTypes>;
  fileSize?: Maybe<Scalars["Float"]>;
  fileSystemType?: Maybe<FileSystemType>;
  fileUrl?: Maybe<Scalars["String"]>;
  formCategoryId?: Maybe<Scalars["ID"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<ProjectDocumentStatus>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  xfdf?: Maybe<Scalars["String"]>;
};

export type ProjectDocumentEntity = {
  __typename?: "ProjectDocumentEntity";
  addedBy?: Maybe<Scalars["ID"]>;
  allFormCode?: Maybe<Scalars["String"]>;
  category?: Maybe<CategoryType>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileChannel: FileChannelTypes;
  fileSize?: Maybe<Scalars["Float"]>;
  fileSystemType?: Maybe<FileSystemType>;
  fileUrl?: Maybe<Scalars["String"]>;
  formCategoryId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  projectDocumentId?: Maybe<Scalars["ID"]>;
  projectId: Scalars["ID"];
  status?: Maybe<ProjectDocumentStatus>;
  type?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  xfdf?: Maybe<Scalars["String"]>;
};

export type ProjectDocumentFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  allFormCode?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProjectDocumentFilter>>;
  category?: InputMaybe<CategoryTypeFilterComparison>;
  children?: InputMaybe<ProjectDocumentFilterProjectDocumentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileChannel?: InputMaybe<FileChannelTypesFilterComparison>;
  fileSize?: InputMaybe<NumberFieldComparison>;
  fileSystemType?: InputMaybe<FileSystemTypeFilterComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  formCategoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentFilter>>;
  parentFolder?: InputMaybe<ProjectDocumentFilterProjectDocumentFilter>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ProjectDocumentStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectDocumentFilterProjectDocumentFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  allFormCode?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProjectDocumentFilterProjectDocumentFilter>>;
  category?: InputMaybe<CategoryTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileChannel?: InputMaybe<FileChannelTypesFilterComparison>;
  fileSize?: InputMaybe<NumberFieldComparison>;
  fileSystemType?: InputMaybe<FileSystemTypeFilterComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  formCategoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentFilterProjectDocumentFilter>>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ProjectDocumentStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectDocumentMaxAggregate = {
  __typename?: "ProjectDocumentMaxAggregate";
  addedBy?: Maybe<Scalars["ID"]>;
  allFormCode?: Maybe<Scalars["String"]>;
  category?: Maybe<CategoryType>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileChannel?: Maybe<FileChannelTypes>;
  fileSize?: Maybe<Scalars["Float"]>;
  fileSystemType?: Maybe<FileSystemType>;
  fileUrl?: Maybe<Scalars["String"]>;
  formCategoryId?: Maybe<Scalars["ID"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<ProjectDocumentStatus>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectDocumentMinAggregate = {
  __typename?: "ProjectDocumentMinAggregate";
  addedBy?: Maybe<Scalars["ID"]>;
  allFormCode?: Maybe<Scalars["String"]>;
  category?: Maybe<CategoryType>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileChannel?: Maybe<FileChannelTypes>;
  fileSize?: Maybe<Scalars["Float"]>;
  fileSystemType?: Maybe<FileSystemType>;
  fileUrl?: Maybe<Scalars["String"]>;
  formCategoryId?: Maybe<Scalars["ID"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<ProjectDocumentStatus>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectDocumentOffsetConnection = {
  __typename?: "ProjectDocumentOffsetConnection";
  /** Array of nodes. */
  nodes: Array<ProjectDocument>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectDocumentSort = {
  direction: SortDirection;
  field: ProjectDocumentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectDocumentSortFields {
  AddedBy = "addedBy",
  AllFormCode = "allFormCode",
  Category = "category",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  FileChannel = "fileChannel",
  FileSize = "fileSize",
  FileSystemType = "fileSystemType",
  FileUrl = "fileUrl",
  FormCategoryId = "formCategoryId",
  Id = "id",
  Name = "name",
  ProjectDocumentId = "projectDocumentId",
  ProjectId = "projectId",
  Status = "status",
  Type = "type",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export enum ProjectDocumentStatus {
  Approved = "Approved",
  Pending = "Pending",
}

export type ProjectDocumentStatusFilterComparison = {
  eq?: InputMaybe<ProjectDocumentStatus>;
  gt?: InputMaybe<ProjectDocumentStatus>;
  gte?: InputMaybe<ProjectDocumentStatus>;
  iLike?: InputMaybe<ProjectDocumentStatus>;
  in?: InputMaybe<Array<ProjectDocumentStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<ProjectDocumentStatus>;
  lt?: InputMaybe<ProjectDocumentStatus>;
  lte?: InputMaybe<ProjectDocumentStatus>;
  neq?: InputMaybe<ProjectDocumentStatus>;
  notILike?: InputMaybe<ProjectDocumentStatus>;
  notIn?: InputMaybe<Array<ProjectDocumentStatus>>;
  notLike?: InputMaybe<ProjectDocumentStatus>;
};

export type ProjectDocumentSumAggregate = {
  __typename?: "ProjectDocumentSumAggregate";
  addedBy?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileSize?: Maybe<Scalars["Float"]>;
  formCategoryId?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectDocumentId?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectDocumentUpdateFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  allFormCode?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<ProjectDocumentUpdateFilter>>;
  category?: InputMaybe<CategoryTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileChannel?: InputMaybe<FileChannelTypesFilterComparison>;
  fileSize?: InputMaybe<NumberFieldComparison>;
  fileSystemType?: InputMaybe<FileSystemTypeFilterComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  formCategoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectDocumentUpdateFilter>>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ProjectDocumentStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectFilter = {
  and?: InputMaybe<Array<ProjectFilter>>;
  client?: InputMaybe<StringFieldComparison>;
  cnsConsultant?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  completionDate?: InputMaybe<DateFieldComparison>;
  contractor?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  deputySuperintendent?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  environmentConsultant?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  managedBy?: InputMaybe<StringFieldComparison>;
  mneConsultant?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilter>>;
  owner?: InputMaybe<ProjectFilterUserFilter>;
  projectUsers?: InputMaybe<ProjectFilterProjectUserFilter>;
  qsConsultant?: InputMaybe<StringFieldComparison>;
  refNo?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ProjectStatusTypeFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectFilterProjectUserFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ProjectFilterProjectUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectFilterProjectUserFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  role?: InputMaybe<ProjectUserRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectFilterUserFilter = {
  and?: InputMaybe<Array<ProjectFilterUserFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilterUserFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectInvitation = {
  __typename?: "ProjectInvitation";
  companyId: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  expireAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  invitationRef?: Maybe<Scalars["String"]>;
  isAccepted: Scalars["Boolean"];
  projectId: Scalars["ID"];
  projectTitle: Scalars["String"];
  role: ProjectUserRoleType;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectInvitationAggregateGroupBy = {
  __typename?: "ProjectInvitationAggregateGroupBy";
  companyId?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  invitationRef?: Maybe<Scalars["String"]>;
  isAccepted?: Maybe<Scalars["Boolean"]>;
  projectId?: Maybe<Scalars["ID"]>;
  projectTitle?: Maybe<Scalars["String"]>;
  role?: Maybe<ProjectUserRoleType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectInvitationAvgAggregate = {
  __typename?: "ProjectInvitationAvgAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectInvitationConnection = {
  __typename?: "ProjectInvitationConnection";
  /** Array of nodes. */
  nodes: Array<ProjectInvitation>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectInvitationCountAggregate = {
  __typename?: "ProjectInvitationCountAggregate";
  companyId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  expireAt?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  invitationRef?: Maybe<Scalars["Int"]>;
  isAccepted?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  projectTitle?: Maybe<Scalars["Int"]>;
  role?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ProjectInvitationDeleteFilter = {
  and?: InputMaybe<Array<ProjectInvitationDeleteFilter>>;
  companyId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  expireAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  invitationRef?: InputMaybe<StringFieldComparison>;
  isAccepted?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ProjectInvitationDeleteFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  projectTitle?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<ProjectUserRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectInvitationDeleteResponse = {
  __typename?: "ProjectInvitationDeleteResponse";
  companyId?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  invitationRef?: Maybe<Scalars["String"]>;
  isAccepted?: Maybe<Scalars["Boolean"]>;
  projectId?: Maybe<Scalars["ID"]>;
  projectTitle?: Maybe<Scalars["String"]>;
  role?: Maybe<ProjectUserRoleType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectInvitationFilter = {
  and?: InputMaybe<Array<ProjectInvitationFilter>>;
  companyId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  expireAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  invitationRef?: InputMaybe<StringFieldComparison>;
  isAccepted?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ProjectInvitationFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  projectTitle?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<ProjectUserRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectInvitationMaxAggregate = {
  __typename?: "ProjectInvitationMaxAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  invitationRef?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  projectTitle?: Maybe<Scalars["String"]>;
  role?: Maybe<ProjectUserRoleType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectInvitationMinAggregate = {
  __typename?: "ProjectInvitationMinAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  expireAt?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  invitationRef?: Maybe<Scalars["String"]>;
  projectId?: Maybe<Scalars["ID"]>;
  projectTitle?: Maybe<Scalars["String"]>;
  role?: Maybe<ProjectUserRoleType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectInvitationSort = {
  direction: SortDirection;
  field: ProjectInvitationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectInvitationSortFields {
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Email = "email",
  ExpireAt = "expireAt",
  Id = "id",
  InvitationRef = "invitationRef",
  IsAccepted = "isAccepted",
  ProjectId = "projectId",
  ProjectTitle = "projectTitle",
  Role = "role",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ProjectInvitationSumAggregate = {
  __typename?: "ProjectInvitationSumAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectInvitationUpdateFilter = {
  and?: InputMaybe<Array<ProjectInvitationUpdateFilter>>;
  companyId?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  expireAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  invitationRef?: InputMaybe<StringFieldComparison>;
  isAccepted?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ProjectInvitationUpdateFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  projectTitle?: InputMaybe<StringFieldComparison>;
  role?: InputMaybe<ProjectUserRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectMaxAggregate = {
  __typename?: "ProjectMaxAggregate";
  client?: Maybe<Scalars["String"]>;
  cnsConsultant?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  completionDate?: Maybe<Scalars["DateTime"]>;
  contractor?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  deputySuperintendent?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  environmentConsultant?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  managedBy?: Maybe<Scalars["String"]>;
  mneConsultant?: Maybe<Scalars["String"]>;
  qsConsultant?: Maybe<Scalars["String"]>;
  refNo?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<ProjectStatusType>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectMinAggregate = {
  __typename?: "ProjectMinAggregate";
  client?: Maybe<Scalars["String"]>;
  cnsConsultant?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  completionDate?: Maybe<Scalars["DateTime"]>;
  contractor?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  deputySuperintendent?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  environmentConsultant?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  managedBy?: Maybe<Scalars["String"]>;
  mneConsultant?: Maybe<Scalars["String"]>;
  qsConsultant?: Maybe<Scalars["String"]>;
  refNo?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<ProjectStatusType>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectProjectUsersConnection = {
  __typename?: "ProjectProjectUsersConnection";
  /** Array of nodes. */
  nodes: Array<ProjectUser>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectSort = {
  direction: SortDirection;
  field: ProjectSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectSortFields {
  Client = "client",
  CnsConsultant = "cnsConsultant",
  CompanyId = "companyId",
  CompletionDate = "completionDate",
  Contractor = "contractor",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  DeputySuperintendent = "deputySuperintendent",
  Description = "description",
  EnvironmentConsultant = "environmentConsultant",
  Id = "id",
  ManagedBy = "managedBy",
  MneConsultant = "mneConsultant",
  QsConsultant = "qsConsultant",
  RefNo = "refNo",
  StartDate = "startDate",
  Status = "status",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export enum ProjectStatusType {
  Completed = "Completed",
  InProgress = "InProgress",
  Overdue = "Overdue",
}

export type ProjectStatusTypeFilterComparison = {
  eq?: InputMaybe<ProjectStatusType>;
  gt?: InputMaybe<ProjectStatusType>;
  gte?: InputMaybe<ProjectStatusType>;
  iLike?: InputMaybe<ProjectStatusType>;
  in?: InputMaybe<Array<ProjectStatusType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<ProjectStatusType>;
  lt?: InputMaybe<ProjectStatusType>;
  lte?: InputMaybe<ProjectStatusType>;
  neq?: InputMaybe<ProjectStatusType>;
  notILike?: InputMaybe<ProjectStatusType>;
  notIn?: InputMaybe<Array<ProjectStatusType>>;
  notLike?: InputMaybe<ProjectStatusType>;
};

export type ProjectSumAggregate = {
  __typename?: "ProjectSumAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ProjectTasksConnection = {
  __typename?: "ProjectTasksConnection";
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectTeam = {
  __typename?: "ProjectTeam";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  projectId: Scalars["ID"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectTeamAggregateGroupBy = {
  __typename?: "ProjectTeamAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectTeamAvgAggregate = {
  __typename?: "ProjectTeamAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectTeamConnection = {
  __typename?: "ProjectTeamConnection";
  /** Array of nodes. */
  nodes: Array<ProjectTeam>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectTeamCountAggregate = {
  __typename?: "ProjectTeamCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ProjectTeamDeleteFilter = {
  and?: InputMaybe<Array<ProjectTeamDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectTeamDeleteFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectTeamDeleteResponse = {
  __typename?: "ProjectTeamDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectTeamFilter = {
  and?: InputMaybe<Array<ProjectTeamFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectTeamFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectTeamMaxAggregate = {
  __typename?: "ProjectTeamMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectTeamMinAggregate = {
  __typename?: "ProjectTeamMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectTeamSort = {
  direction: SortDirection;
  field: ProjectTeamSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectTeamSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  ProjectId = "projectId",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ProjectTeamSumAggregate = {
  __typename?: "ProjectTeamSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ProjectTeamUpdateFilter = {
  and?: InputMaybe<Array<ProjectTeamUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectTeamUpdateFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ProjectUpdateFilter = {
  and?: InputMaybe<Array<ProjectUpdateFilter>>;
  client?: InputMaybe<StringFieldComparison>;
  cnsConsultant?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  completionDate?: InputMaybe<DateFieldComparison>;
  contractor?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  deputySuperintendent?: InputMaybe<StringFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  environmentConsultant?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  managedBy?: InputMaybe<StringFieldComparison>;
  mneConsultant?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectUpdateFilter>>;
  qsConsultant?: InputMaybe<StringFieldComparison>;
  refNo?: InputMaybe<StringFieldComparison>;
  startDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<ProjectStatusTypeFilterComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectUser = {
  __typename?: "ProjectUser";
  addedBy?: Maybe<Scalars["ID"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  owner: User;
  projectId: Scalars["ID"];
  role: ProjectUserRoleType;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  user: User;
  userId: Scalars["ID"];
};

export type ProjectUserAggregateGroupBy = {
  __typename?: "ProjectUserAggregateGroupBy";
  addedBy?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  role?: Maybe<ProjectUserRoleType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectUserAvgAggregate = {
  __typename?: "ProjectUserAvgAggregate";
  addedBy?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ProjectUserConnection = {
  __typename?: "ProjectUserConnection";
  /** Array of nodes. */
  nodes: Array<ProjectUser>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ProjectUserCountAggregate = {
  __typename?: "ProjectUserCountAggregate";
  addedBy?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  role?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type ProjectUserFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ProjectUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectUserFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  role?: InputMaybe<ProjectUserRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type ProjectUserMaxAggregate = {
  __typename?: "ProjectUserMaxAggregate";
  addedBy?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  role?: Maybe<ProjectUserRoleType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type ProjectUserMinAggregate = {
  __typename?: "ProjectUserMinAggregate";
  addedBy?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  role?: Maybe<ProjectUserRoleType>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export enum ProjectUserRoleType {
  CanEdit = "CanEdit",
  CanView = "CanView",
  CloudCoordinator = "CloudCoordinator",
  ProjectOwner = "ProjectOwner",
}

export type ProjectUserRoleTypeFilterComparison = {
  eq?: InputMaybe<ProjectUserRoleType>;
  gt?: InputMaybe<ProjectUserRoleType>;
  gte?: InputMaybe<ProjectUserRoleType>;
  iLike?: InputMaybe<ProjectUserRoleType>;
  in?: InputMaybe<Array<ProjectUserRoleType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<ProjectUserRoleType>;
  lt?: InputMaybe<ProjectUserRoleType>;
  lte?: InputMaybe<ProjectUserRoleType>;
  neq?: InputMaybe<ProjectUserRoleType>;
  notILike?: InputMaybe<ProjectUserRoleType>;
  notIn?: InputMaybe<Array<ProjectUserRoleType>>;
  notLike?: InputMaybe<ProjectUserRoleType>;
};

export type ProjectUserSort = {
  direction: SortDirection;
  field: ProjectUserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectUserSortFields {
  AddedBy = "addedBy",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  ProjectId = "projectId",
  Role = "role",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type ProjectUserSumAggregate = {
  __typename?: "ProjectUserSumAggregate";
  addedBy?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type ProjectUserUpdateFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<ProjectUserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProjectUserUpdateFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  role?: InputMaybe<ProjectUserRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type Query = {
  __typename?: "Query";
  admin?: Maybe<Admin>;
  admins: AdminConnection;
  auditLog?: Maybe<AuditLog>;
  auditLogs: AuditLogConnection;
  checklist?: Maybe<Checklist>;
  checklistItem?: Maybe<ChecklistItem>;
  checklistItems: ChecklistItemConnection;
  checklists: ChecklistConnection;
  companies: CompanyConnection;
  company?: Maybe<Company>;
  companySubscription?: Maybe<CompanySubscription>;
  companySubscriptions: CompanySubscriptionConnection;
  contact?: Maybe<Contact>;
  contactCompanies: ContactCompanyConnection;
  contactCompany?: Maybe<ContactCompany>;
  contacts: ContactConnection;
  event?: Maybe<Event>;
  events: EventConnection;
  formCategories: FormCategoryConnection;
  formCategory?: Maybe<FormCategory>;
  getAdminMe: Admin;
  getCorrespondenceIn: Array<ProjectDocument>;
  getCorrespondenceOut: Array<ProjectDocument>;
  getLastParentDocumentFromBreadcrumb: ProjectDocument;
  getProjectDocuments: ProjectDocumentOffsetConnection;
  getProjectDocumentsBreadcrumb: Array<ProjectDocument>;
  getTreeProjectDocuments: Array<TreeProjectDocumentDto>;
  getUserMe: User;
  notificationTransaction?: Maybe<NotificationTransaction>;
  notificationTransactions: NotificationTransactionConnection;
  project?: Maybe<Project>;
  projectDocument?: Maybe<ProjectDocument>;
  projectDocumentComment?: Maybe<ProjectDocumentComment>;
  projectDocumentComments: ProjectDocumentCommentConnection;
  projectDocuments: ProjectDocumentConnection;
  projectInvitation?: Maybe<ProjectInvitation>;
  projectInvitations: ProjectInvitationConnection;
  projectTeam?: Maybe<ProjectTeam>;
  projectTeams: ProjectTeamConnection;
  projectUser?: Maybe<ProjectUser>;
  projectUsers: ProjectUserConnection;
  projects: ProjectConnection;
  requestForSignature?: Maybe<RequestForSignature>;
  requestForSignatures: RequestForSignatureConnection;
  salesOrder?: Maybe<SalesOrder>;
  salesOrders: SalesOrderConnection;
  subscriptionPackage?: Maybe<SubscriptionPackage>;
  subscriptionPackages: SubscriptionPackageConnection;
  task?: Maybe<Task>;
  taskComment?: Maybe<TaskComment>;
  taskComments: TaskCommentConnection;
  tasks: TaskConnection;
  tasksAttachment?: Maybe<TasksAttachment>;
  tasksAttachments: TasksAttachmentConnection;
  user?: Maybe<User>;
  users: UserConnection;
};

export type QueryAdminArgs = {
  id: Scalars["ID"];
};

export type QueryAdminsArgs = {
  filter?: InputMaybe<AdminFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AdminSort>>;
};

export type QueryAuditLogArgs = {
  id: Scalars["ID"];
};

export type QueryAuditLogsArgs = {
  filter?: InputMaybe<AuditLogFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AuditLogSort>>;
};

export type QueryChecklistArgs = {
  id: Scalars["ID"];
};

export type QueryChecklistItemArgs = {
  id: Scalars["ID"];
};

export type QueryChecklistItemsArgs = {
  filter?: InputMaybe<ChecklistItemFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ChecklistItemSort>>;
};

export type QueryChecklistsArgs = {
  filter?: InputMaybe<ChecklistFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ChecklistSort>>;
};

export type QueryCompaniesArgs = {
  filter?: InputMaybe<CompanyFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CompanySort>>;
};

export type QueryCompanyArgs = {
  id: Scalars["ID"];
};

export type QueryCompanySubscriptionArgs = {
  id: Scalars["ID"];
};

export type QueryCompanySubscriptionsArgs = {
  filter?: InputMaybe<CompanySubscriptionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CompanySubscriptionSort>>;
};

export type QueryContactArgs = {
  id: Scalars["ID"];
};

export type QueryContactCompaniesArgs = {
  filter?: InputMaybe<ContactCompanyFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ContactCompanySort>>;
};

export type QueryContactCompanyArgs = {
  id: Scalars["ID"];
};

export type QueryContactsArgs = {
  filter?: InputMaybe<ContactFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ContactSort>>;
};

export type QueryEventArgs = {
  id: Scalars["ID"];
};

export type QueryEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EventSort>>;
};

export type QueryFormCategoriesArgs = {
  filter?: InputMaybe<FormCategoryFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<FormCategorySort>>;
};

export type QueryFormCategoryArgs = {
  id: Scalars["ID"];
};

export type QueryGetLastParentDocumentFromBreadcrumbArgs = {
  input: GetLastParentDocumentFromBreadcrumbDto;
};

export type QueryGetProjectDocumentsArgs = {
  filter?: InputMaybe<ProjectDocumentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectDocumentSort>>;
};

export type QueryGetProjectDocumentsBreadcrumbArgs = {
  input: GetProjectDocumentsBreadcrumbDto;
};

export type QueryGetTreeProjectDocumentsArgs = {
  input: GetProjectDocumentTreeDto;
};

export type QueryNotificationTransactionArgs = {
  id: Scalars["ID"];
};

export type QueryNotificationTransactionsArgs = {
  filter?: InputMaybe<NotificationTransactionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<NotificationTransactionSort>>;
};

export type QueryProjectArgs = {
  id: Scalars["ID"];
};

export type QueryProjectDocumentArgs = {
  id: Scalars["ID"];
};

export type QueryProjectDocumentCommentArgs = {
  id: Scalars["ID"];
};

export type QueryProjectDocumentCommentsArgs = {
  filter?: InputMaybe<ProjectDocumentCommentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectDocumentCommentSort>>;
};

export type QueryProjectDocumentsArgs = {
  filter?: InputMaybe<ProjectDocumentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectDocumentSort>>;
};

export type QueryProjectInvitationArgs = {
  id: Scalars["ID"];
};

export type QueryProjectInvitationsArgs = {
  filter?: InputMaybe<ProjectInvitationFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectInvitationSort>>;
};

export type QueryProjectTeamArgs = {
  id: Scalars["ID"];
};

export type QueryProjectTeamsArgs = {
  filter?: InputMaybe<ProjectTeamFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectTeamSort>>;
};

export type QueryProjectUserArgs = {
  id: Scalars["ID"];
};

export type QueryProjectUsersArgs = {
  filter?: InputMaybe<ProjectUserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectUserSort>>;
};

export type QueryProjectsArgs = {
  filter?: InputMaybe<ProjectFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectSort>>;
};

export type QueryRequestForSignatureArgs = {
  id: Scalars["ID"];
};

export type QueryRequestForSignaturesArgs = {
  filter?: InputMaybe<RequestForSignatureFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<RequestForSignatureSort>>;
};

export type QuerySalesOrderArgs = {
  id: Scalars["ID"];
};

export type QuerySalesOrdersArgs = {
  filter?: InputMaybe<SalesOrderFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SalesOrderSort>>;
};

export type QuerySubscriptionPackageArgs = {
  id: Scalars["ID"];
};

export type QuerySubscriptionPackagesArgs = {
  filter?: InputMaybe<SubscriptionPackageFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<SubscriptionPackageSort>>;
};

export type QueryTaskArgs = {
  id: Scalars["ID"];
};

export type QueryTaskCommentArgs = {
  id: Scalars["ID"];
};

export type QueryTaskCommentsArgs = {
  filter?: InputMaybe<TaskCommentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskCommentSort>>;
};

export type QueryTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskSort>>;
};

export type QueryTasksAttachmentArgs = {
  id: Scalars["ID"];
};

export type QueryTasksAttachmentsArgs = {
  filter?: InputMaybe<TasksAttachmentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TasksAttachmentSort>>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type RelationIdInput = {
  id: Scalars["Float"];
};

export type RemoveActorFromNotificationTransactionInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveAssigneesFromTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveAttachmentsFromTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveChildrenFromProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveCommentsFromTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveCompanyFromUserInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveContactCompanyFromContactInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveDocumentsFromTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveFormCategoryFromProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveOwnerFromContactInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveOwnerFromFormCategoryInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveOwnerFromProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveOwnerFromProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveOwnerFromProjectUserInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveOwnerFromRequestForSignatureInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveOwnerFromTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveParentFolderFromProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveProjectDocumentFromProjectDocumentCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveProjectDocumentFromRequestForSignatureInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveProjectFromAuditLogInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveProjectUsersFromProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveRequestForSignaturesFromProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveSignByFromRequestForSignatureInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveTaskFromAuditLogInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveTaskFromTaskCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveTasksFromProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type RemoveUserFromAuditLogInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveUserFromProjectDocumentCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveUserFromProjectUserInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RemoveUserFromTaskCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type RequestForSignature = {
  __typename?: "RequestForSignature";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  owner: User;
  ownerId: Scalars["ID"];
  projectDocument: ProjectDocument;
  projectDocumentId: Scalars["ID"];
  signBy: User;
  signById: Scalars["ID"];
  status: RequestForSignatureStatus;
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type RequestForSignatureAggregateGroupBy = {
  __typename?: "RequestForSignatureAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  signById?: Maybe<Scalars["ID"]>;
  status?: Maybe<RequestForSignatureStatus>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type RequestForSignatureAvgAggregate = {
  __typename?: "RequestForSignatureAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ownerId?: Maybe<Scalars["Float"]>;
  projectDocumentId?: Maybe<Scalars["Float"]>;
  signById?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type RequestForSignatureConnection = {
  __typename?: "RequestForSignatureConnection";
  /** Array of nodes. */
  nodes: Array<RequestForSignature>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type RequestForSignatureCountAggregate = {
  __typename?: "RequestForSignatureCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ownerId?: Maybe<Scalars["Int"]>;
  projectDocumentId?: Maybe<Scalars["Int"]>;
  signById?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type RequestForSignatureDeleteFilter = {
  and?: InputMaybe<Array<RequestForSignatureDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RequestForSignatureDeleteFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  signById?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<RequestForSignatureStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type RequestForSignatureDeleteResponse = {
  __typename?: "RequestForSignatureDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  signById?: Maybe<Scalars["ID"]>;
  status?: Maybe<RequestForSignatureStatus>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type RequestForSignatureFilter = {
  and?: InputMaybe<Array<RequestForSignatureFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RequestForSignatureFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  signById?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<RequestForSignatureStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type RequestForSignatureMaxAggregate = {
  __typename?: "RequestForSignatureMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  signById?: Maybe<Scalars["ID"]>;
  status?: Maybe<RequestForSignatureStatus>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type RequestForSignatureMinAggregate = {
  __typename?: "RequestForSignatureMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectDocumentId?: Maybe<Scalars["ID"]>;
  signById?: Maybe<Scalars["ID"]>;
  status?: Maybe<RequestForSignatureStatus>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type RequestForSignatureSort = {
  direction: SortDirection;
  field: RequestForSignatureSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum RequestForSignatureSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  OwnerId = "ownerId",
  ProjectDocumentId = "projectDocumentId",
  SignById = "signById",
  Status = "status",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export enum RequestForSignatureStatus {
  Approved = "Approved",
  Pending = "Pending",
}

export type RequestForSignatureStatusFilterComparison = {
  eq?: InputMaybe<RequestForSignatureStatus>;
  gt?: InputMaybe<RequestForSignatureStatus>;
  gte?: InputMaybe<RequestForSignatureStatus>;
  iLike?: InputMaybe<RequestForSignatureStatus>;
  in?: InputMaybe<Array<RequestForSignatureStatus>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<RequestForSignatureStatus>;
  lt?: InputMaybe<RequestForSignatureStatus>;
  lte?: InputMaybe<RequestForSignatureStatus>;
  neq?: InputMaybe<RequestForSignatureStatus>;
  notILike?: InputMaybe<RequestForSignatureStatus>;
  notIn?: InputMaybe<Array<RequestForSignatureStatus>>;
  notLike?: InputMaybe<RequestForSignatureStatus>;
};

export type RequestForSignatureSumAggregate = {
  __typename?: "RequestForSignatureSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ownerId?: Maybe<Scalars["Float"]>;
  projectDocumentId?: Maybe<Scalars["Float"]>;
  signById?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type RequestForSignatureUpdateFilter = {
  and?: InputMaybe<Array<RequestForSignatureUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<RequestForSignatureUpdateFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  signById?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<RequestForSignatureStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type SalesOrder = {
  __typename?: "SalesOrder";
  companyId: Scalars["ID"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  paymentUrl: Scalars["String"];
  subscriptionPackageId: Scalars["ID"];
  total: Scalars["Float"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  userId: Scalars["ID"];
};

export type SalesOrderAggregateGroupBy = {
  __typename?: "SalesOrderAggregateGroupBy";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  paymentUrl?: Maybe<Scalars["String"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type SalesOrderAvgAggregate = {
  __typename?: "SalesOrderAvgAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  subscriptionPackageId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type SalesOrderConnection = {
  __typename?: "SalesOrderConnection";
  /** Array of nodes. */
  nodes: Array<SalesOrder>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type SalesOrderCountAggregate = {
  __typename?: "SalesOrderCountAggregate";
  companyId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  paymentUrl?: Maybe<Scalars["Int"]>;
  subscriptionPackageId?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type SalesOrderDeleteFilter = {
  and?: InputMaybe<Array<SalesOrderDeleteFilter>>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SalesOrderDeleteFilter>>;
  paymentUrl?: InputMaybe<StringFieldComparison>;
  subscriptionPackageId?: InputMaybe<IdFilterComparison>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type SalesOrderDeleteResponse = {
  __typename?: "SalesOrderDeleteResponse";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  paymentUrl?: Maybe<Scalars["String"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type SalesOrderFilter = {
  and?: InputMaybe<Array<SalesOrderFilter>>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SalesOrderFilter>>;
  paymentUrl?: InputMaybe<StringFieldComparison>;
  subscriptionPackageId?: InputMaybe<IdFilterComparison>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type SalesOrderMaxAggregate = {
  __typename?: "SalesOrderMaxAggregate";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  paymentUrl?: Maybe<Scalars["String"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type SalesOrderMinAggregate = {
  __typename?: "SalesOrderMinAggregate";
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  paymentUrl?: Maybe<Scalars["String"]>;
  subscriptionPackageId?: Maybe<Scalars["ID"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type SalesOrderSort = {
  direction: SortDirection;
  field: SalesOrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SalesOrderSortFields {
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  PaymentUrl = "paymentUrl",
  SubscriptionPackageId = "subscriptionPackageId",
  Total = "total",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type SalesOrderSumAggregate = {
  __typename?: "SalesOrderSumAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  subscriptionPackageId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type SalesOrderUpdateFilter = {
  and?: InputMaybe<Array<SalesOrderUpdateFilter>>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SalesOrderUpdateFilter>>;
  paymentUrl?: InputMaybe<StringFieldComparison>;
  subscriptionPackageId?: InputMaybe<IdFilterComparison>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type SetActorOnNotificationTransactionInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetAssigneesOnTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetAttachmentsOnTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetChildrenOnProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetCommentsOnTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetCompanyOnUserInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetContactCompanyOnContactInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetDocumentsOnTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetFormCategoryOnProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetOwnerOnContactInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetOwnerOnFormCategoryInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetOwnerOnProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetOwnerOnProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetOwnerOnProjectUserInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetOwnerOnRequestForSignatureInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetOwnerOnTaskInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetParentFolderOnProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetProjectDocumentOnProjectDocumentCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetProjectDocumentOnRequestForSignatureInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetProjectOnAuditLogInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetProjectUsersOnProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetRequestForSignaturesOnProjectDocumentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetSignByOnRequestForSignatureInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetTaskOnAuditLogInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetTaskOnTaskCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetTasksOnProjectInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The ids of the relations. */
  relationIds: Array<Scalars["ID"]>;
};

export type SetUserOnAuditLogInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetUserOnProjectDocumentCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetUserOnProjectUserInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

export type SetUserOnTaskCommentInput = {
  /** The id of the record. */
  id: Scalars["ID"];
  /** The id of relation. */
  relationId: Scalars["ID"];
};

/** Sort Directions */
export enum SortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = "NULLS_FIRST",
  NullsLast = "NULLS_LAST",
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  iLike?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<Scalars["String"]>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  neq?: InputMaybe<Scalars["String"]>;
  notILike?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  notLike?: InputMaybe<Scalars["String"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  createdProjectDocumentComment: ProjectDocumentComment;
  createdTaskComment: TaskComment;
  deletedManyProjectDocumentComments: DeleteManyResponse;
  deletedManyTaskComments: DeleteManyResponse;
  deletedOneProjectDocumentComment: ProjectDocumentCommentDeleteResponse;
  deletedOneTaskComment: TaskCommentDeleteResponse;
  updatedManyProjectDocumentComments: UpdateManyResponse;
  updatedManyTaskComments: UpdateManyResponse;
  updatedOneProjectDocumentComment: ProjectDocumentComment;
  updatedOneTaskComment: TaskComment;
};

export type SubscriptionCreatedProjectDocumentCommentArgs = {
  input?: InputMaybe<CreateProjectDocumentCommentSubscriptionFilterInput>;
};

export type SubscriptionCreatedTaskCommentArgs = {
  input?: InputMaybe<CreateTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneProjectDocumentCommentArgs = {
  input?: InputMaybe<DeleteOneProjectDocumentCommentSubscriptionFilterInput>;
};

export type SubscriptionDeletedOneTaskCommentArgs = {
  input?: InputMaybe<DeleteOneTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneProjectDocumentCommentArgs = {
  input?: InputMaybe<UpdateOneProjectDocumentCommentSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneTaskCommentArgs = {
  input?: InputMaybe<UpdateOneTaskCommentSubscriptionFilterInput>;
};

export type SubscriptionPackage = {
  __typename?: "SubscriptionPackage";
  amount: Scalars["Float"];
  availableDuration: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description: Scalars["String"];
  id: Scalars["ID"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type SubscriptionPackageAggregateGroupBy = {
  __typename?: "SubscriptionPackageAggregateGroupBy";
  amount?: Maybe<Scalars["Float"]>;
  availableDuration?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type SubscriptionPackageAvgAggregate = {
  __typename?: "SubscriptionPackageAvgAggregate";
  amount?: Maybe<Scalars["Float"]>;
  availableDuration?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type SubscriptionPackageConnection = {
  __typename?: "SubscriptionPackageConnection";
  /** Array of nodes. */
  nodes: Array<SubscriptionPackage>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type SubscriptionPackageCountAggregate = {
  __typename?: "SubscriptionPackageCountAggregate";
  amount?: Maybe<Scalars["Int"]>;
  availableDuration?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type SubscriptionPackageDeleteFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<SubscriptionPackageDeleteFilter>>;
  availableDuration?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SubscriptionPackageDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type SubscriptionPackageDeleteResponse = {
  __typename?: "SubscriptionPackageDeleteResponse";
  amount?: Maybe<Scalars["Float"]>;
  availableDuration?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type SubscriptionPackageFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<SubscriptionPackageFilter>>;
  availableDuration?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SubscriptionPackageFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type SubscriptionPackageMaxAggregate = {
  __typename?: "SubscriptionPackageMaxAggregate";
  amount?: Maybe<Scalars["Float"]>;
  availableDuration?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type SubscriptionPackageMinAggregate = {
  __typename?: "SubscriptionPackageMinAggregate";
  amount?: Maybe<Scalars["Float"]>;
  availableDuration?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type SubscriptionPackageSort = {
  direction: SortDirection;
  field: SubscriptionPackageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SubscriptionPackageSortFields {
  Amount = "amount",
  AvailableDuration = "availableDuration",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Description = "description",
  Id = "id",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type SubscriptionPackageSumAggregate = {
  __typename?: "SubscriptionPackageSumAggregate";
  amount?: Maybe<Scalars["Float"]>;
  availableDuration?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type SubscriptionPackageUpdateFilter = {
  amount?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<SubscriptionPackageUpdateFilter>>;
  availableDuration?: InputMaybe<NumberFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SubscriptionPackageUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Task = {
  __typename?: "Task";
  assignees?: Maybe<TaskAssigneesConnection>;
  attachments?: Maybe<TaskAttachmentsConnection>;
  comments?: Maybe<TaskCommentsConnection>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  documents?: Maybe<TaskDocumentsConnection>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  isSentBeforeOneDay: Scalars["Boolean"];
  isSentBeforeOneHour: Scalars["Boolean"];
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectId: Scalars["ID"];
  status: TaskStatusType;
  taskCode: Scalars["String"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskAssigneesArgs = {
  filter?: InputMaybe<ProjectUserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectUserSort>>;
};

export type TaskAttachmentsArgs = {
  filter?: InputMaybe<TasksAttachmentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TasksAttachmentSort>>;
};

export type TaskCommentsArgs = {
  filter?: InputMaybe<TaskCommentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<TaskCommentSort>>;
};

export type TaskDocumentsArgs = {
  filter?: InputMaybe<ProjectDocumentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ProjectDocumentSort>>;
};

export type TaskAggregateGroupBy = {
  __typename?: "TaskAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<TaskStatusType>;
  taskCode?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskAssigneesConnection = {
  __typename?: "TaskAssigneesConnection";
  /** Array of nodes. */
  nodes: Array<ProjectUser>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type TaskAttachmentsConnection = {
  __typename?: "TaskAttachmentsConnection";
  /** Array of nodes. */
  nodes: Array<TasksAttachment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type TaskAvgAggregate = {
  __typename?: "TaskAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ownerId?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskComment = {
  __typename?: "TaskComment";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  message?: Maybe<Scalars["String"]>;
  task: TaskEntity;
  taskId: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
  user: UserEntity;
  userId?: Maybe<Scalars["ID"]>;
};

export type TaskCommentAggregateGroupBy = {
  __typename?: "TaskCommentAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type TaskCommentAvgAggregate = {
  __typename?: "TaskCommentAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type TaskCommentConnection = {
  __typename?: "TaskCommentConnection";
  /** Array of nodes. */
  nodes: Array<TaskComment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type TaskCommentCountAggregate = {
  __typename?: "TaskCommentCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  message?: Maybe<Scalars["Int"]>;
  taskId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
  userId?: Maybe<Scalars["Int"]>;
};

export type TaskCommentDeleteFilter = {
  and?: InputMaybe<Array<TaskCommentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskCommentDeleteFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type TaskCommentDeleteResponse = {
  __typename?: "TaskCommentDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type TaskCommentFilter = {
  and?: InputMaybe<Array<TaskCommentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskCommentFilter>>;
  task?: InputMaybe<TaskCommentFilterTaskEntityFilter>;
  taskId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  user?: InputMaybe<TaskCommentFilterUserEntityFilter>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type TaskCommentFilterTaskEntityFilter = {
  and?: InputMaybe<Array<TaskCommentFilterTaskEntityFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskCommentFilterTaskEntityFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TaskStatusTypeFilterComparison>;
  taskCode?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TaskCommentFilterUserEntityFilter = {
  and?: InputMaybe<Array<TaskCommentFilterUserEntityFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskCommentFilterUserEntityFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TaskCommentMaxAggregate = {
  __typename?: "TaskCommentMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type TaskCommentMinAggregate = {
  __typename?: "TaskCommentMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["ID"]>;
};

export type TaskCommentSort = {
  direction: SortDirection;
  field: TaskCommentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskCommentSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Message = "message",
  TaskId = "taskId",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
  UserId = "userId",
}

export type TaskCommentSubscriptionFilter = {
  and?: InputMaybe<Array<TaskCommentSubscriptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskCommentSubscriptionFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type TaskCommentSumAggregate = {
  __typename?: "TaskCommentSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
  userId?: Maybe<Scalars["Float"]>;
};

export type TaskCommentUpdateFilter = {
  and?: InputMaybe<Array<TaskCommentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskCommentUpdateFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type TaskCommentsConnection = {
  __typename?: "TaskCommentsConnection";
  /** Array of nodes. */
  nodes: Array<TaskComment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type TaskConnection = {
  __typename?: "TaskConnection";
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type TaskCountAggregate = {
  __typename?: "TaskCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["Int"]>;
  dueDate?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ownerId?: Maybe<Scalars["Int"]>;
  projectId?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  taskCode?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type TaskDeleteFilter = {
  and?: InputMaybe<Array<TaskDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskDeleteFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TaskStatusTypeFilterComparison>;
  taskCode?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TaskDeleteResponse = {
  __typename?: "TaskDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  isSentBeforeOneDay?: Maybe<Scalars["Boolean"]>;
  isSentBeforeOneHour?: Maybe<Scalars["Boolean"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<TaskStatusType>;
  taskCode?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskDocumentsConnection = {
  __typename?: "TaskDocumentsConnection";
  /** Array of nodes. */
  nodes: Array<ProjectDocument>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type TaskEntity = {
  __typename?: "TaskEntity";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  id: Scalars["ID"];
  isSentBeforeOneDay: Scalars["Boolean"];
  isSentBeforeOneHour: Scalars["Boolean"];
  ownerId?: Maybe<Scalars["ID"]>;
  projectId: Scalars["ID"];
  status: TaskStatusType;
  taskCode: Scalars["String"];
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskFilter = {
  and?: InputMaybe<Array<TaskFilter>>;
  assignees?: InputMaybe<TaskFilterProjectUserFilter>;
  attachments?: InputMaybe<TaskFilterTasksAttachmentFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  documents?: InputMaybe<TaskFilterProjectDocumentFilter>;
  dueDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskFilter>>;
  owner?: InputMaybe<TaskFilterUserFilter>;
  ownerId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TaskStatusTypeFilterComparison>;
  taskCode?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TaskFilterProjectDocumentFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  allFormCode?: InputMaybe<StringFieldComparison>;
  and?: InputMaybe<Array<TaskFilterProjectDocumentFilter>>;
  category?: InputMaybe<CategoryTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileChannel?: InputMaybe<FileChannelTypesFilterComparison>;
  fileSize?: InputMaybe<NumberFieldComparison>;
  fileSystemType?: InputMaybe<FileSystemTypeFilterComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  formCategoryId?: InputMaybe<IdFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskFilterProjectDocumentFilter>>;
  projectDocumentId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<ProjectDocumentStatusFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TaskFilterProjectUserFilter = {
  addedBy?: InputMaybe<IdFilterComparison>;
  and?: InputMaybe<Array<TaskFilterProjectUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskFilterProjectUserFilter>>;
  projectId?: InputMaybe<IdFilterComparison>;
  role?: InputMaybe<ProjectUserRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
  userId?: InputMaybe<IdFilterComparison>;
};

export type TaskFilterTasksAttachmentFilter = {
  and?: InputMaybe<Array<TaskFilterTasksAttachmentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskFilterTasksAttachmentFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TaskFilterUserFilter = {
  and?: InputMaybe<Array<TaskFilterUserFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskFilterUserFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TaskMaxAggregate = {
  __typename?: "TaskMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<TaskStatusType>;
  taskCode?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskMinAggregate = {
  __typename?: "TaskMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["ID"]>;
  ownerId?: Maybe<Scalars["ID"]>;
  projectId?: Maybe<Scalars["ID"]>;
  status?: Maybe<TaskStatusType>;
  taskCode?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskSort = {
  direction: SortDirection;
  field: TaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Description = "description",
  DueDate = "dueDate",
  Id = "id",
  OwnerId = "ownerId",
  ProjectId = "projectId",
  Status = "status",
  TaskCode = "taskCode",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export enum TaskStatusType {
  Completed = "Completed",
  InProgress = "InProgress",
  Overdue = "Overdue",
}

export type TaskStatusTypeFilterComparison = {
  eq?: InputMaybe<TaskStatusType>;
  gt?: InputMaybe<TaskStatusType>;
  gte?: InputMaybe<TaskStatusType>;
  iLike?: InputMaybe<TaskStatusType>;
  in?: InputMaybe<Array<TaskStatusType>>;
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
  like?: InputMaybe<TaskStatusType>;
  lt?: InputMaybe<TaskStatusType>;
  lte?: InputMaybe<TaskStatusType>;
  neq?: InputMaybe<TaskStatusType>;
  notILike?: InputMaybe<TaskStatusType>;
  notIn?: InputMaybe<Array<TaskStatusType>>;
  notLike?: InputMaybe<TaskStatusType>;
};

export type TaskSumAggregate = {
  __typename?: "TaskSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ownerId?: Maybe<Scalars["Float"]>;
  projectId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TaskUpdateFilter = {
  and?: InputMaybe<Array<TaskUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  dueDate?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskUpdateFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  projectId?: InputMaybe<IdFilterComparison>;
  status?: InputMaybe<TaskStatusTypeFilterComparison>;
  taskCode?: InputMaybe<StringFieldComparison>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TasksAttachment = {
  __typename?: "TasksAttachment";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileUrl: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  taskId: Scalars["ID"];
  type: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TasksAttachmentAggregateGroupBy = {
  __typename?: "TasksAttachmentAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TasksAttachmentAvgAggregate = {
  __typename?: "TasksAttachmentAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TasksAttachmentConnection = {
  __typename?: "TasksAttachmentConnection";
  /** Array of nodes. */
  nodes: Array<TasksAttachment>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type TasksAttachmentCountAggregate = {
  __typename?: "TasksAttachmentCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  fileUrl?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  taskId?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type TasksAttachmentDeleteFilter = {
  and?: InputMaybe<Array<TasksAttachmentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TasksAttachmentDeleteFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TasksAttachmentDeleteResponse = {
  __typename?: "TasksAttachmentDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TasksAttachmentFilter = {
  and?: InputMaybe<Array<TasksAttachmentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TasksAttachmentFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TasksAttachmentMaxAggregate = {
  __typename?: "TasksAttachmentMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TasksAttachmentMinAggregate = {
  __typename?: "TasksAttachmentMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  fileUrl?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["ID"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TasksAttachmentSort = {
  direction: SortDirection;
  field: TasksAttachmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TasksAttachmentSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  FileUrl = "fileUrl",
  Id = "id",
  Name = "name",
  TaskId = "taskId",
  Type = "type",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type TasksAttachmentSumAggregate = {
  __typename?: "TasksAttachmentSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  taskId?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type TasksAttachmentUpdateFilter = {
  and?: InputMaybe<Array<TasksAttachmentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  fileUrl?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TasksAttachmentUpdateFilter>>;
  taskId?: InputMaybe<IdFilterComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type TreeProjectDocumentDto = {
  __typename?: "TreeProjectDocumentDTO";
  addedBy?: Maybe<Scalars["ID"]>;
  category?: Maybe<CategoryType>;
  children?: Maybe<Array<TreeProjectDocumentDto>>;
  fileSize?: Maybe<Scalars["Float"]>;
  fileSystemType?: Maybe<FileSystemType>;
  fileUrl?: Maybe<Scalars["String"]>;
  formCategoryId?: Maybe<Scalars["ID"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  projectDocumentId?: Maybe<Scalars["ID"]>;
  projectId: Scalars["ID"];
  status?: Maybe<ProjectDocumentStatus>;
  type?: Maybe<Scalars["String"]>;
};

export type UpdateAdminInputDto = {
  email?: InputMaybe<Scalars["String"]>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type UpdateAuditLogInputDto = {
  action?: InputMaybe<AuditLogActionType>;
  content?: InputMaybe<Scalars["String"]>;
  module?: InputMaybe<AuditLogModuleType>;
  projectId?: InputMaybe<Scalars["ID"]>;
  userId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateChecklistInputDto = {
  taskId?: InputMaybe<Scalars["Float"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateChecklistItemInputDto = {
  checklistId?: InputMaybe<Scalars["Float"]>;
  completed?: InputMaybe<Scalars["Boolean"]>;
  description?: InputMaybe<Scalars["String"]>;
};

export type UpdateCompanyInputDto = {
  avatar?: InputMaybe<Scalars["Upload"]>;
  name?: InputMaybe<Scalars["String"]>;
  ownerId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateCompanySubscriptionInputDto = {
  companyId?: InputMaybe<Scalars["ID"]>;
  subscriptionEndDate?: InputMaybe<Scalars["DateTime"]>;
  subscriptionPackageId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateContactCompanyInputDto = {
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdateContactInputDto = {
  companyName?: InputMaybe<Scalars["String"]>;
  contactCompanyId?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phoneNo?: InputMaybe<Scalars["String"]>;
  projectId?: InputMaybe<Scalars["Float"]>;
};

export type UpdateEventInputDto = {
  endAt?: InputMaybe<Scalars["DateTime"]>;
  endTime?: InputMaybe<Scalars["String"]>;
  isAllday?: InputMaybe<Scalars["Boolean"]>;
  startAt?: InputMaybe<Scalars["DateTime"]>;
  startTime?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateFormCategoryInputDto = {
  name?: InputMaybe<Scalars["String"]>;
};

export type UpdateManyAdminsInput = {
  /** Filter used to find fields to update */
  filter: AdminUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAdminInputDto;
};

export type UpdateManyAuditLogsInput = {
  /** Filter used to find fields to update */
  filter: AuditLogUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAuditLogInputDto;
};

export type UpdateManyChecklistItemsInput = {
  /** Filter used to find fields to update */
  filter: ChecklistItemUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateChecklistItemInputDto;
};

export type UpdateManyChecklistsInput = {
  /** Filter used to find fields to update */
  filter: ChecklistUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateChecklistInputDto;
};

export type UpdateManyCompaniesInput = {
  /** Filter used to find fields to update */
  filter: CompanyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCompanyInputDto;
};

export type UpdateManyCompanySubscriptionsInput = {
  /** Filter used to find fields to update */
  filter: CompanySubscriptionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCompanySubscriptionInputDto;
};

export type UpdateManyContactCompaniesInput = {
  /** Filter used to find fields to update */
  filter: ContactCompanyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateContactCompanyInputDto;
};

export type UpdateManyContactsInput = {
  /** Filter used to find fields to update */
  filter: ContactUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateContactInputDto;
};

export type UpdateManyEventsInput = {
  /** Filter used to find fields to update */
  filter: EventUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateEventInputDto;
};

export type UpdateManyFormCategoriesInput = {
  /** Filter used to find fields to update */
  filter: FormCategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateFormCategoryInputDto;
};

export type UpdateManyNotificationTransactionsInput = {
  /** Filter used to find fields to update */
  filter: NotificationTransactionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateNotificationTransactionInputDto;
};

export type UpdateManyProjectDocumentCommentsInput = {
  /** Filter used to find fields to update */
  filter: ProjectDocumentCommentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProjectDocumentCommentInputDto;
};

export type UpdateManyProjectDocumentsInput = {
  /** Filter used to find fields to update */
  filter: ProjectDocumentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProjectDocumentInputDto;
};

export type UpdateManyProjectInvitationsInput = {
  /** Filter used to find fields to update */
  filter: ProjectInvitationUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProjectInvitationInputDto;
};

export type UpdateManyProjectTeamsInput = {
  /** Filter used to find fields to update */
  filter: ProjectTeamUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProjectTeamInputDto;
};

export type UpdateManyProjectUsersInput = {
  /** Filter used to find fields to update */
  filter: ProjectUserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProjectUserInputDto;
};

export type UpdateManyProjectsInput = {
  /** Filter used to find fields to update */
  filter: ProjectUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateProjectInputDto;
};

export type UpdateManyRequestForSignaturesInput = {
  /** Filter used to find fields to update */
  filter: RequestForSignatureUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateRequestForSignatureInputDto;
};

export type UpdateManyResponse = {
  __typename?: "UpdateManyResponse";
  /** The number of records updated. */
  updatedCount: Scalars["Int"];
};

export type UpdateManySalesOrdersInput = {
  /** Filter used to find fields to update */
  filter: SalesOrderUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSalesOrderInputDto;
};

export type UpdateManySubscriptionPackagesInput = {
  /** Filter used to find fields to update */
  filter: SubscriptionPackageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateSubscriptionPackageInputDto;
};

export type UpdateManyTaskCommentsInput = {
  /** Filter used to find fields to update */
  filter: TaskCommentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaskCommentInputDto;
};

export type UpdateManyTasksAttachmentsInput = {
  /** Filter used to find fields to update */
  filter: TasksAttachmentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTasksAttachmentInputDto;
};

export type UpdateManyTasksInput = {
  /** Filter used to find fields to update */
  filter: TaskUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateTaskInputDto;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserInputDto;
};

export type UpdateNotificationTransactionInputDto = {
  actionName?: InputMaybe<Scalars["String"]>;
  actionType?: InputMaybe<Scalars["String"]>;
  deeplink?: InputMaybe<Scalars["String"]>;
  mobileDeeplink?: InputMaybe<Scalars["String"]>;
  read?: InputMaybe<Scalars["Boolean"]>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateOneAdminInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateAdminInputDto;
};

export type UpdateOneAuditLogInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateAuditLogInputDto;
};

export type UpdateOneChecklistInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateChecklistInputDto;
};

export type UpdateOneChecklistItemInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateChecklistItemInputDto;
};

export type UpdateOneCompanyInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateCompanyInputDto;
};

export type UpdateOneCompanySubscriptionInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateCompanySubscriptionInputDto;
};

export type UpdateOneContactCompanyInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateContactCompanyInputDto;
};

export type UpdateOneContactDto = {
  id: Scalars["ID"];
  update: UpdateContactInputDto;
};

export type UpdateOneContactInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateContactInputDto;
};

export type UpdateOneEventInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateEventInputDto;
};

export type UpdateOneFormCategoryInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateFormCategoryInputDto;
};

export type UpdateOneNotificationTransactionInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateNotificationTransactionInputDto;
};

export type UpdateOneProjectDocumentCommentInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateProjectDocumentCommentInputDto;
};

export type UpdateOneProjectDocumentCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ProjectDocumentCommentSubscriptionFilter;
};

export type UpdateOneProjectDocumentInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateProjectDocumentInputDto;
};

export type UpdateOneProjectInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateProjectInputDto;
};

export type UpdateOneProjectInvitationInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateProjectInvitationInputDto;
};

export type UpdateOneProjectTeamInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateProjectTeamInputDto;
};

export type UpdateOneProjectUserInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateProjectUserInputDto;
};

export type UpdateOneRequestForSignatureInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateRequestForSignatureInputDto;
};

export type UpdateOneSalesOrderInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateSalesOrderInputDto;
};

export type UpdateOneSubscriptionPackageInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateSubscriptionPackageInputDto;
};

export type UpdateOneTaskCommentInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateTaskCommentInputDto;
};

export type UpdateOneTaskCommentSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: TaskCommentSubscriptionFilter;
};

export type UpdateOneTaskInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateTaskInputDto;
};

export type UpdateOneTasksAttachmentInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateTasksAttachmentInputDto;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars["ID"];
  /** The update to apply. */
  update: UpdateUserInputDto;
};

export type UpdateProjectDocumentCommentInputDto = {
  message?: InputMaybe<Scalars["String"]>;
  projectDocumentId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateProjectDocumentInputDto = {
  category?: InputMaybe<CategoryType>;
  fileSystemType?: InputMaybe<FileSystemType>;
  fileUrl?: InputMaybe<Scalars["Upload"]>;
  formCategoryId?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  projectDocumentId?: InputMaybe<Scalars["ID"]>;
  projectId?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<ProjectDocumentStatus>;
  type?: InputMaybe<Scalars["String"]>;
  xfdf?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectInputDto = {
  client?: InputMaybe<Scalars["String"]>;
  cnsConsultant?: InputMaybe<Scalars["String"]>;
  companyId?: InputMaybe<Scalars["Float"]>;
  completionDate?: InputMaybe<Scalars["DateTime"]>;
  contractor?: InputMaybe<Scalars["String"]>;
  deputySuperintendent?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  environmentConsultant?: InputMaybe<Scalars["String"]>;
  managedBy?: InputMaybe<Scalars["String"]>;
  mneConsultant?: InputMaybe<Scalars["String"]>;
  qsConsultant?: InputMaybe<Scalars["String"]>;
  refNo?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<ProjectStatusType>;
  title?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["Float"]>;
};

export type UpdateProjectInvitationInputDto = {
  companyId?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  expireAt?: InputMaybe<Scalars["DateTime"]>;
  invitationRef?: InputMaybe<Scalars["String"]>;
  isAccepted?: InputMaybe<Scalars["Boolean"]>;
  projectId?: InputMaybe<Scalars["Float"]>;
  projectTitle?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<ProjectUserRoleType>;
};

export type UpdateProjectTeamInputDto = {
  projectId?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateProjectUserInputDto = {
  addedBy?: InputMaybe<Scalars["Float"]>;
  projectId?: InputMaybe<Scalars["ID"]>;
  role?: InputMaybe<ProjectUserRoleType>;
  userId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateRequestForSignatureInputDto = {
  projectDocumentId?: InputMaybe<Scalars["ID"]>;
  signById?: InputMaybe<Scalars["ID"]>;
  status: RequestForSignatureStatus;
};

export type UpdateSalesOrderInputDto = {
  companyId?: InputMaybe<Scalars["ID"]>;
  paymentUrl?: InputMaybe<Scalars["String"]>;
  subscriptionPackageId?: InputMaybe<Scalars["ID"]>;
  total?: InputMaybe<Scalars["Float"]>;
  userId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateSubscriptionPackageInputDto = {
  amount?: InputMaybe<Scalars["Float"]>;
  availableDuration?: InputMaybe<Scalars["Float"]>;
  description?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateTaskCommentInputDto = {
  message?: InputMaybe<Scalars["String"]>;
  taskId?: InputMaybe<Scalars["ID"]>;
};

export type UpdateTaskInputDto = {
  attachments?: InputMaybe<Array<CreateTasksAttachmentInputDto>>;
  description?: InputMaybe<Scalars["String"]>;
  documents?: InputMaybe<Array<RelationIdInput>>;
  dueDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<TaskStatusType>;
  title?: InputMaybe<Scalars["String"]>;
};

export type UpdateTasksAttachmentInputDto = {
  fileUrl?: InputMaybe<Scalars["Upload"]>;
  id?: InputMaybe<Scalars["Float"]>;
};

export type UpdateUserInputDto = {
  avatar?: InputMaybe<Scalars["Upload"]>;
  companyName?: InputMaybe<Scalars["String"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phoneNo?: InputMaybe<Scalars["String"]>;
  position?: InputMaybe<Scalars["String"]>;
  reportTo?: InputMaybe<Scalars["String"]>;
};

export type UpdateUserPasswordDto = {
  password: Scalars["String"];
};

export type User = {
  __typename?: "User";
  appleId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars["ID"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  facebookId?: Maybe<Scalars["String"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  googleId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isEmailVerified: Scalars["Boolean"];
  isFirstTimeLogin: Scalars["Boolean"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  reportTo?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserAggregateGroupBy = {
  __typename?: "UserAggregateGroupBy";
  appleId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  facebookId?: Maybe<Scalars["String"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  googleId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  isEmailVerified?: Maybe<Scalars["Boolean"]>;
  isFirstTimeLogin?: Maybe<Scalars["Boolean"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  reportTo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserAvgAggregate = {
  __typename?: "UserAvgAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type UserCountAggregate = {
  __typename?: "UserCountAggregate";
  appleId?: Maybe<Scalars["Int"]>;
  avatar?: Maybe<Scalars["Int"]>;
  companyId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  facebookId?: Maybe<Scalars["Int"]>;
  fcmToken?: Maybe<Scalars["Int"]>;
  googleId?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  isEmailVerified?: Maybe<Scalars["Int"]>;
  isFirstTimeLogin?: Maybe<Scalars["Int"]>;
  lastLogin?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  phoneNo?: Maybe<Scalars["Int"]>;
  position?: Maybe<Scalars["Int"]>;
  reportTo?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: "UserDeleteResponse";
  appleId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  facebookId?: Maybe<Scalars["String"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  googleId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  isEmailVerified?: Maybe<Scalars["Boolean"]>;
  isFirstTimeLogin?: Maybe<Scalars["Boolean"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  reportTo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserEntity = {
  __typename?: "UserEntity";
  appleId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  facebookId?: Maybe<Scalars["String"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  googleId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isEmailVerified: Scalars["Boolean"];
  isFirstTimeLogin: Scalars["Boolean"];
  lastLogin?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  reportTo?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  company?: InputMaybe<UserFilterCompanyFilter>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type UserFilterCompanyFilter = {
  and?: InputMaybe<Array<UserFilterCompanyFilter>>;
  avatar?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterCompanyFilter>>;
  ownerId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: "UserMaxAggregate";
  appleId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  facebookId?: Maybe<Scalars["String"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  googleId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  reportTo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserMinAggregate = {
  __typename?: "UserMinAggregate";
  appleId?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  companyId?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  facebookId?: Maybe<Scalars["String"]>;
  fcmToken?: Maybe<Scalars["String"]>;
  googleId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  lastLogin?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  position?: Maybe<Scalars["String"]>;
  reportTo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  AppleId = "appleId",
  Avatar = "avatar",
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Email = "email",
  FacebookId = "facebookId",
  FcmToken = "fcmToken",
  GoogleId = "googleId",
  Id = "id",
  IsEmailVerified = "isEmailVerified",
  IsFirstTimeLogin = "isFirstTimeLogin",
  LastLogin = "lastLogin",
  Name = "name",
  PhoneNo = "phoneNo",
  Position = "position",
  ReportTo = "reportTo",
  Type = "type",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type UserSumAggregate = {
  __typename?: "UserSumAggregate";
  companyId?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  appleId?: InputMaybe<StringFieldComparison>;
  avatar?: InputMaybe<StringFieldComparison>;
  companyId?: InputMaybe<IdFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  facebookId?: InputMaybe<StringFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  googleId?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isEmailVerified?: InputMaybe<BooleanFieldComparison>;
  isFirstTimeLogin?: InputMaybe<BooleanFieldComparison>;
  lastLogin?: InputMaybe<DateFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  position?: InputMaybe<StringFieldComparison>;
  reportTo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type AdminFieldsFragment = {
  __typename?: "Admin";
  email: string;
  id: string;
  isActive: boolean;
  name: string;
  type: string;
  createdAt: any;
};

export type GetAdminsQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<AdminFilter>;
  sorting?: InputMaybe<Array<AdminSort> | AdminSort>;
}>;

export type GetAdminsQuery = {
  __typename?: "Query";
  admins: {
    __typename?: "AdminConnection";
    totalCount: number;
    nodes: Array<{
      __typename?: "Admin";
      email: string;
      id: string;
      isActive: boolean;
      name: string;
      type: string;
      createdAt: any;
    }>;
  };
};

export type GetOneAdminQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetOneAdminQuery = {
  __typename?: "Query";
  admin?: {
    __typename?: "Admin";
    email: string;
    id: string;
    isActive: boolean;
    name: string;
    type: string;
    createdAt: any;
  } | null;
};

export type CreateAdminMutationVariables = Exact<{
  input: CreateOneAdminInput;
}>;

export type CreateAdminMutation = {
  __typename?: "Mutation";
  createOneAdmin: { __typename?: "Admin"; id: string };
};

export type UpdateAdminMutationVariables = Exact<{
  input: UpdateOneAdminInput;
}>;

export type UpdateAdminMutation = {
  __typename?: "Mutation";
  updateOneAdmin: { __typename?: "Admin"; id: string };
};

export type DeleteAdminMutationVariables = Exact<{
  input: DeleteOneAdminInput;
}>;

export type DeleteAdminMutation = {
  __typename?: "Mutation";
  deleteOneAdmin: { __typename?: "AdminDeleteResponse"; id?: string | null };
};

export type CompanyFieldsFragment = {
  __typename?: "Company";
  avatar?: string | null;
  createdAt: any;
  id: string;
  name?: string | null;
  ownerId: string;
};

export type GetCustomersQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<CompanyFilter>;
  sorting?: InputMaybe<Array<CompanySort> | CompanySort>;
}>;

export type GetCustomersQuery = {
  __typename?: "Query";
  companies: {
    __typename?: "CompanyConnection";
    totalCount: number;
    nodes: Array<{
      __typename?: "Company";
      avatar?: string | null;
      createdAt: any;
      id: string;
      name?: string | null;
      ownerId: string;
    }>;
  };
};

export type GetCustomerQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetCustomerQuery = {
  __typename?: "Query";
  company?: {
    __typename?: "Company";
    avatar?: string | null;
    createdAt: any;
    id: string;
    name?: string | null;
    ownerId: string;
  } | null;
};

export type MeFieldsFragment = {
  __typename?: "Admin";
  email: string;
  id: string;
  isActive: boolean;
  name: string;
  type: string;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
  __typename?: "Query";
  getAdminMe: {
    __typename?: "Admin";
    email: string;
    id: string;
    isActive: boolean;
    name: string;
    type: string;
  };
};

export type UpdateMeMutationVariables = Exact<{
  input: UpdateAdminInputDto;
}>;

export type UpdateMeMutation = {
  __typename?: "Mutation";
  updateAdminMe: { __typename?: "Admin"; id: string };
};

export type UserFieldsFragment = {
  __typename?: "User";
  appleId?: string | null;
  avatar?: string | null;
  companyId?: string | null;
  createdAt: any;
  email: string;
  facebookId?: string | null;
  fcmToken?: string | null;
  googleId?: string | null;
  id: string;
  isEmailVerified: boolean;
  isFirstTimeLogin: boolean;
  lastLogin?: any | null;
  name?: string | null;
  phoneNo?: string | null;
  position?: string | null;
  reportTo?: string | null;
  type: string;
  company?: {
    __typename?: "Company";
    avatar?: string | null;
    createdAt: any;
    createdBy?: number | null;
    deletedAt?: any | null;
    deletedBy?: number | null;
    id: string;
    name?: string | null;
  } | null;
};

export type GetUsersQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<UserFilter>;
  sorting?: InputMaybe<Array<UserSort> | UserSort>;
}>;

export type GetUsersQuery = {
  __typename?: "Query";
  users: {
    __typename?: "UserConnection";
    totalCount: number;
    nodes: Array<{
      __typename?: "User";
      appleId?: string | null;
      avatar?: string | null;
      companyId?: string | null;
      createdAt: any;
      email: string;
      facebookId?: string | null;
      fcmToken?: string | null;
      googleId?: string | null;
      id: string;
      isEmailVerified: boolean;
      isFirstTimeLogin: boolean;
      lastLogin?: any | null;
      name?: string | null;
      phoneNo?: string | null;
      position?: string | null;
      reportTo?: string | null;
      type: string;
      company?: {
        __typename?: "Company";
        avatar?: string | null;
        createdAt: any;
        createdBy?: number | null;
        deletedAt?: any | null;
        deletedBy?: number | null;
        id: string;
        name?: string | null;
      } | null;
    }>;
  };
};

export type GetUserQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    appleId?: string | null;
    avatar?: string | null;
    companyId?: string | null;
    createdAt: any;
    email: string;
    facebookId?: string | null;
    fcmToken?: string | null;
    googleId?: string | null;
    id: string;
    isEmailVerified: boolean;
    isFirstTimeLogin: boolean;
    lastLogin?: any | null;
    name?: string | null;
    phoneNo?: string | null;
    position?: string | null;
    reportTo?: string | null;
    type: string;
    company?: {
      __typename?: "Company";
      avatar?: string | null;
      createdAt: any;
      createdBy?: number | null;
      deletedAt?: any | null;
      deletedBy?: number | null;
      id: string;
      name?: string | null;
    } | null;
  } | null;
};

export const AdminFieldsFragmentDoc = gql`
  fragment AdminFields on Admin {
    email
    id
    isActive
    name
    type
    createdAt
  }
`;
export const CompanyFieldsFragmentDoc = gql`
  fragment CompanyFields on Company {
    avatar
    createdAt
    id
    name
    ownerId
  }
`;
export const MeFieldsFragmentDoc = gql`
  fragment MeFields on Admin {
    email
    id
    isActive
    name
    type
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    appleId
    avatar
    company {
      avatar
      createdAt
      createdBy
      deletedAt
      deletedBy
      id
      name
    }
    companyId
    createdAt
    email
    facebookId
    fcmToken
    googleId
    id
    isEmailVerified
    isFirstTimeLogin
    lastLogin
    name
    phoneNo
    position
    reportTo
    type
  }
`;
export const GetAdminsDocument = gql`
  query getAdmins(
    $paging: OffsetPaging
    $filter: AdminFilter
    $sorting: [AdminSort!]
  ) {
    admins(paging: $paging, filter: $filter, sorting: $sorting) {
      totalCount
      nodes {
        ...AdminFields
      }
    }
  }
  ${AdminFieldsFragmentDoc}
`;

/**
 * __useGetAdminsQuery__
 *
 * To run a query within a React component, call `useGetAdminsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminsQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetAdminsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAdminsQuery, GetAdminsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdminsQuery, GetAdminsQueryVariables>(
    GetAdminsDocument,
    options
  );
}
export function useGetAdminsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminsQuery,
    GetAdminsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdminsQuery, GetAdminsQueryVariables>(
    GetAdminsDocument,
    options
  );
}
export type GetAdminsQueryHookResult = ReturnType<typeof useGetAdminsQuery>;
export type GetAdminsLazyQueryHookResult = ReturnType<
  typeof useGetAdminsLazyQuery
>;
export type GetAdminsQueryResult = Apollo.QueryResult<
  GetAdminsQuery,
  GetAdminsQueryVariables
>;
export const GetOneAdminDocument = gql`
  query getOneAdmin($id: ID!) {
    admin(id: $id) {
      ...AdminFields
    }
  }
  ${AdminFieldsFragmentDoc}
`;

/**
 * __useGetOneAdminQuery__
 *
 * To run a query within a React component, call `useGetOneAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneAdminQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneAdminQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOneAdminQuery,
    GetOneAdminQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneAdminQuery, GetOneAdminQueryVariables>(
    GetOneAdminDocument,
    options
  );
}
export function useGetOneAdminLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneAdminQuery,
    GetOneAdminQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneAdminQuery, GetOneAdminQueryVariables>(
    GetOneAdminDocument,
    options
  );
}
export type GetOneAdminQueryHookResult = ReturnType<typeof useGetOneAdminQuery>;
export type GetOneAdminLazyQueryHookResult = ReturnType<
  typeof useGetOneAdminLazyQuery
>;
export type GetOneAdminQueryResult = Apollo.QueryResult<
  GetOneAdminQuery,
  GetOneAdminQueryVariables
>;
export const CreateAdminDocument = gql`
  mutation createAdmin($input: CreateOneAdminInput!) {
    createOneAdmin(input: $input) {
      id
    }
  }
`;
export type CreateAdminMutationFn = Apollo.MutationFunction<
  CreateAdminMutation,
  CreateAdminMutationVariables
>;

/**
 * __useCreateAdminMutation__
 *
 * To run a mutation, you first call `useCreateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminMutation, { data, loading, error }] = useCreateAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAdminMutation,
    CreateAdminMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateAdminMutation, CreateAdminMutationVariables>(
    CreateAdminDocument,
    options
  );
}
export type CreateAdminMutationHookResult = ReturnType<
  typeof useCreateAdminMutation
>;
export type CreateAdminMutationResult =
  Apollo.MutationResult<CreateAdminMutation>;
export type CreateAdminMutationOptions = Apollo.BaseMutationOptions<
  CreateAdminMutation,
  CreateAdminMutationVariables
>;
export const UpdateAdminDocument = gql`
  mutation updateAdmin($input: UpdateOneAdminInput!) {
    updateOneAdmin(input: $input) {
      id
    }
  }
`;
export type UpdateAdminMutationFn = Apollo.MutationFunction<
  UpdateAdminMutation,
  UpdateAdminMutationVariables
>;

/**
 * __useUpdateAdminMutation__
 *
 * To run a mutation, you first call `useUpdateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminMutation, { data, loading, error }] = useUpdateAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAdminMutation,
    UpdateAdminMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateAdminMutation, UpdateAdminMutationVariables>(
    UpdateAdminDocument,
    options
  );
}
export type UpdateAdminMutationHookResult = ReturnType<
  typeof useUpdateAdminMutation
>;
export type UpdateAdminMutationResult =
  Apollo.MutationResult<UpdateAdminMutation>;
export type UpdateAdminMutationOptions = Apollo.BaseMutationOptions<
  UpdateAdminMutation,
  UpdateAdminMutationVariables
>;
export const DeleteAdminDocument = gql`
  mutation deleteAdmin($input: DeleteOneAdminInput!) {
    deleteOneAdmin(input: $input) {
      id
    }
  }
`;
export type DeleteAdminMutationFn = Apollo.MutationFunction<
  DeleteAdminMutation,
  DeleteAdminMutationVariables
>;

/**
 * __useDeleteAdminMutation__
 *
 * To run a mutation, you first call `useDeleteAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdminMutation, { data, loading, error }] = useDeleteAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteAdminMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAdminMutation,
    DeleteAdminMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteAdminMutation, DeleteAdminMutationVariables>(
    DeleteAdminDocument,
    options
  );
}
export type DeleteAdminMutationHookResult = ReturnType<
  typeof useDeleteAdminMutation
>;
export type DeleteAdminMutationResult =
  Apollo.MutationResult<DeleteAdminMutation>;
export type DeleteAdminMutationOptions = Apollo.BaseMutationOptions<
  DeleteAdminMutation,
  DeleteAdminMutationVariables
>;
export const GetCustomersDocument = gql`
  query getCustomers(
    $paging: OffsetPaging
    $filter: CompanyFilter
    $sorting: [CompanySort!]
  ) {
    companies(paging: $paging, filter: $filter, sorting: $sorting) {
      totalCount
      nodes {
        ...CompanyFields
      }
    }
  }
  ${CompanyFieldsFragmentDoc}
`;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetCustomersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCustomersQuery,
    GetCustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GetCustomersDocument,
    options
  );
}
export function useGetCustomersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomersQuery,
    GetCustomersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(
    GetCustomersDocument,
    options
  );
}
export type GetCustomersQueryHookResult = ReturnType<
  typeof useGetCustomersQuery
>;
export type GetCustomersLazyQueryHookResult = ReturnType<
  typeof useGetCustomersLazyQuery
>;
export type GetCustomersQueryResult = Apollo.QueryResult<
  GetCustomersQuery,
  GetCustomersQueryVariables
>;
export const GetCustomerDocument = gql`
  query getCustomer($id: ID!) {
    company(id: $id) {
      ...CompanyFields
    }
  }
  ${CompanyFieldsFragmentDoc}
`;

/**
 * __useGetCustomerQuery__
 *
 * To run a query within a React component, call `useGetCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCustomerQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCustomerQuery,
    GetCustomerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCustomerQuery, GetCustomerQueryVariables>(
    GetCustomerDocument,
    options
  );
}
export function useGetCustomerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCustomerQuery,
    GetCustomerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCustomerQuery, GetCustomerQueryVariables>(
    GetCustomerDocument,
    options
  );
}
export type GetCustomerQueryHookResult = ReturnType<typeof useGetCustomerQuery>;
export type GetCustomerLazyQueryHookResult = ReturnType<
  typeof useGetCustomerLazyQuery
>;
export type GetCustomerQueryResult = Apollo.QueryResult<
  GetCustomerQuery,
  GetCustomerQueryVariables
>;
export const GetMeDocument = gql`
  query getMe {
    getAdminMe {
      ...MeFields
    }
  }
  ${MeFieldsFragmentDoc}
`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options
  );
}
export function useGetMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
    GetMeDocument,
    options
  );
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<
  GetMeQuery,
  GetMeQueryVariables
>;
export const UpdateMeDocument = gql`
  mutation updateMe($input: UpdateAdminInputDTO!) {
    updateAdminMe(input: $input) {
      id
    }
  }
`;
export type UpdateMeMutationFn = Apollo.MutationFunction<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMeMutation,
    UpdateMeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(
    UpdateMeDocument,
    options
  );
}
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<
  UpdateMeMutation,
  UpdateMeMutationVariables
>;
export const GetUsersDocument = gql`
  query getUsers(
    $paging: OffsetPaging
    $filter: UserFilter
    $sorting: [UserSort!]
  ) {
    users(paging: $paging, filter: $filter, sorting: $sorting) {
      totalCount
      nodes {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options
  );
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>;
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>;
export const GetUserDocument = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
