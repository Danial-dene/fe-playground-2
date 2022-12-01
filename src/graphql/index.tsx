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
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateDay = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  date?: InputMaybe<Scalars["DateTime"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateEmployee = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  icNo?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateManyDaysInput = {
  /** Array of records to create */
  days: Array<CreateDay>;
};

export type CreateManyEmployeesInput = {
  /** Array of records to create */
  employees: Array<CreateEmployee>;
};

export type CreateManyShiftOptionsInput = {
  /** Array of records to create */
  shiftOptions: Array<CreateShiftOptions>;
};

export type CreateManyShiftsInput = {
  /** Array of records to create */
  shifts: Array<CreateShift>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUser>;
};

export type CreateOneDayInput = {
  /** The record to create */
  day: CreateDay;
};

export type CreateOneEmployeeInput = {
  /** The record to create */
  employee: CreateEmployee;
};

export type CreateOneShiftInput = {
  /** The record to create */
  shift: CreateShift;
};

export type CreateOneShiftOptionsInput = {
  /** The record to create */
  shiftOptions: CreateShiftOptions;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUser;
};

export type CreateShift = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  date?: InputMaybe<Scalars["DateTime"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateShiftOptions = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateUser = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars["ConnectionCursor"]>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars["ConnectionCursor"]>;
  /** Paginate first */
  first?: InputMaybe<Scalars["Int"]>;
  /** Paginate last */
  last?: InputMaybe<Scalars["Int"]>;
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

export type Day = {
  __typename?: "Day";
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["Float"];
  date: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  deletedBy: Scalars["Float"];
  id: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy: Scalars["Float"];
};

export type DayAggregateGroupBy = {
  __typename?: "DayAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DayAvgAggregate = {
  __typename?: "DayAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DayConnection = {
  __typename?: "DayConnection";
  /** Array of edges. */
  edges: Array<DayEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type DayCountAggregate = {
  __typename?: "DayCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type DayDeleteFilter = {
  and?: InputMaybe<Array<DayDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DayDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type DayDeleteResponse = {
  __typename?: "DayDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DayEdge = {
  __typename?: "DayEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
  /** The node containing the Day */
  node: Day;
};

export type DayFilter = {
  and?: InputMaybe<Array<DayFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DayFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type DayMaxAggregate = {
  __typename?: "DayMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DayMinAggregate = {
  __typename?: "DayMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DaySort = {
  direction: SortDirection;
  field: DaySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DaySortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Date = "date",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type DaySumAggregate = {
  __typename?: "DaySumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DayUpdateFilter = {
  and?: InputMaybe<Array<DayUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DayUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type DeleteManyDaysInput = {
  /** Filter to find records to delete */
  filter: DayDeleteFilter;
};

export type DeleteManyEmployeesInput = {
  /** Filter to find records to delete */
  filter: EmployeeDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: "DeleteManyResponse";
  /** The number of records deleted. */
  deletedCount: Scalars["Int"];
};

export type DeleteOneDayInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneEmployeeInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type Employee = {
  __typename?: "Employee";
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["Float"];
  deletedAt: Scalars["DateTime"];
  deletedBy: Scalars["Float"];
  icNo: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy: Scalars["Float"];
};

export type EmployeeAggregateGroupBy = {
  __typename?: "EmployeeAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeAvgAggregate = {
  __typename?: "EmployeeAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeConnection = {
  __typename?: "EmployeeConnection";
  /** Array of edges. */
  edges: Array<EmployeeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type EmployeeCountAggregate = {
  __typename?: "EmployeeCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  icNo?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type EmployeeDeleteFilter = {
  and?: InputMaybe<Array<EmployeeDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  icNo?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmployeeDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type EmployeeDeleteResponse = {
  __typename?: "EmployeeDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeEdge = {
  __typename?: "EmployeeEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
  /** The node containing the Employee */
  node: Employee;
};

export type EmployeeFilter = {
  and?: InputMaybe<Array<EmployeeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  icNo?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmployeeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type EmployeeMaxAggregate = {
  __typename?: "EmployeeMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeMinAggregate = {
  __typename?: "EmployeeMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeSort = {
  direction: SortDirection;
  field: EmployeeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum EmployeeSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  IcNo = "icNo",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type EmployeeSumAggregate = {
  __typename?: "EmployeeSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeUpdateFilter = {
  and?: InputMaybe<Array<EmployeeUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  icNo?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmployeeUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Mutation = {
  __typename?: "Mutation";
  createManyDays: Array<Day>;
  createManyEmployees: Array<Employee>;
  createManyShiftOptions: Array<ShiftOptions>;
  createManyShifts: Array<Shift>;
  createManyUsers: Array<User>;
  createOneDay: Day;
  createOneEmployee: Employee;
  createOneShift: Shift;
  createOneShiftOptions: ShiftOptions;
  createOneUser: User;
  deleteManyDays: DeleteManyResponse;
  deleteManyEmployees: DeleteManyResponse;
  deleteOneDay: DayDeleteResponse;
  deleteOneEmployee: EmployeeDeleteResponse;
  updateManyDays: UpdateManyResponse;
  updateManyEmployees: UpdateManyResponse;
  updateOneDay: Day;
  updateOneEmployee: Employee;
};

export type MutationCreateManyDaysArgs = {
  input: CreateManyDaysInput;
};

export type MutationCreateManyEmployeesArgs = {
  input: CreateManyEmployeesInput;
};

export type MutationCreateManyShiftOptionsArgs = {
  input: CreateManyShiftOptionsInput;
};

export type MutationCreateManyShiftsArgs = {
  input: CreateManyShiftsInput;
};

export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};

export type MutationCreateOneDayArgs = {
  input: CreateOneDayInput;
};

export type MutationCreateOneEmployeeArgs = {
  input: CreateOneEmployeeInput;
};

export type MutationCreateOneShiftArgs = {
  input: CreateOneShiftInput;
};

export type MutationCreateOneShiftOptionsArgs = {
  input: CreateOneShiftOptionsInput;
};

export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};

export type MutationDeleteManyDaysArgs = {
  input: DeleteManyDaysInput;
};

export type MutationDeleteManyEmployeesArgs = {
  input: DeleteManyEmployeesInput;
};

export type MutationDeleteOneDayArgs = {
  input: DeleteOneDayInput;
};

export type MutationDeleteOneEmployeeArgs = {
  input: DeleteOneEmployeeInput;
};

export type MutationUpdateManyDaysArgs = {
  input: UpdateManyDaysInput;
};

export type MutationUpdateManyEmployeesArgs = {
  input: UpdateManyEmployeesInput;
};

export type MutationUpdateOneDayArgs = {
  input: UpdateOneDayInput;
};

export type MutationUpdateOneEmployeeArgs = {
  input: UpdateOneEmployeeInput;
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

export type PageInfo = {
  __typename?: "PageInfo";
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars["ConnectionCursor"]>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars["Boolean"]>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars["Boolean"]>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars["ConnectionCursor"]>;
};

export type Query = {
  __typename?: "Query";
  day?: Maybe<Day>;
  days: DayConnection;
  employee?: Maybe<Employee>;
  employees: EmployeeConnection;
  shift?: Maybe<Shift>;
  shiftOptions: ShiftOptionsConnection;
  shifts: ShiftConnection;
  user?: Maybe<User>;
  users: UserConnection;
};

export type QueryDayArgs = {
  id: Scalars["String"];
};

export type QueryDaysArgs = {
  filter?: InputMaybe<DayFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<DaySort>>;
};

export type QueryEmployeeArgs = {
  id: Scalars["String"];
};

export type QueryEmployeesArgs = {
  filter?: InputMaybe<EmployeeFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<EmployeeSort>>;
};

export type QueryShiftArgs = {
  id: Scalars["String"];
};

export type QueryShiftOptionsArgs = {
  filter?: InputMaybe<ShiftOptionsFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShiftOptionsSort>>;
};

export type QueryShiftsArgs = {
  filter?: InputMaybe<ShiftFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShiftSort>>;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type Shift = {
  __typename?: "Shift";
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["Float"];
  date: Scalars["DateTime"];
  deletedAt: Scalars["DateTime"];
  deletedBy: Scalars["Float"];
  id: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy: Scalars["Float"];
};

export type ShiftAggregateGroupBy = {
  __typename?: "ShiftAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftAvgAggregate = {
  __typename?: "ShiftAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftConnection = {
  __typename?: "ShiftConnection";
  /** Array of edges. */
  edges: Array<ShiftEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShiftCountAggregate = {
  __typename?: "ShiftCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ShiftEdge = {
  __typename?: "ShiftEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
  /** The node containing the Shift */
  node: Shift;
};

export type ShiftFilter = {
  and?: InputMaybe<Array<ShiftFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftMaxAggregate = {
  __typename?: "ShiftMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftMinAggregate = {
  __typename?: "ShiftMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptions = {
  __typename?: "ShiftOptions";
  createdAt: Scalars["DateTime"];
  createdBy: Scalars["Float"];
  deletedAt: Scalars["DateTime"];
  deletedBy: Scalars["Float"];
  id: Scalars["String"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  updatedBy: Scalars["Float"];
};

export type ShiftOptionsAggregateGroupBy = {
  __typename?: "ShiftOptionsAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionsAvgAggregate = {
  __typename?: "ShiftOptionsAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionsConnection = {
  __typename?: "ShiftOptionsConnection";
  /** Array of edges. */
  edges: Array<ShiftOptionsEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShiftOptionsCountAggregate = {
  __typename?: "ShiftOptionsCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ShiftOptionsEdge = {
  __typename?: "ShiftOptionsEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
  /** The node containing the ShiftOptions */
  node: ShiftOptions;
};

export type ShiftOptionsFilter = {
  and?: InputMaybe<Array<ShiftOptionsFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftOptionsFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftOptionsMaxAggregate = {
  __typename?: "ShiftOptionsMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionsMinAggregate = {
  __typename?: "ShiftOptionsMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionsSort = {
  direction: SortDirection;
  field: ShiftOptionsSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShiftOptionsSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ShiftOptionsSumAggregate = {
  __typename?: "ShiftOptionsSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftSort = {
  direction: SortDirection;
  field: ShiftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShiftSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Date = "date",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ShiftSumAggregate = {
  __typename?: "ShiftSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
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

export type UpdateDay = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  date?: InputMaybe<Scalars["DateTime"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateEmployee = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  icNo?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateManyDaysInput = {
  /** Filter used to find fields to update */
  filter: DayUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateDay;
};

export type UpdateManyEmployeesInput = {
  /** Filter used to find fields to update */
  filter: EmployeeUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateEmployee;
};

export type UpdateManyResponse = {
  __typename?: "UpdateManyResponse";
  /** The number of records updated. */
  updatedCount: Scalars["Int"];
};

export type UpdateOneDayInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateDay;
};

export type UpdateOneEmployeeInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateEmployee;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["String"];
  password: Scalars["String"];
};

export type UserAggregateGroupBy = {
  __typename?: "UserAggregateGroupBy";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserCountAggregate = {
  __typename?: "UserCountAggregate";
  email?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  password?: Maybe<Scalars["Int"]>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  /** Cursor for this node. */
  cursor: Scalars["ConnectionCursor"];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  password?: InputMaybe<StringFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: "UserMaxAggregate";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UserMinAggregate = {
  __typename?: "UserMinAggregate";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Email = "email",
  Id = "id",
  Password = "password",
}

export type EmployeeFieldsFragment = {
  __typename?: "Employee";
  createdAt: any;
  id: string;
  name: string;
  icNo: string;
};

export type GetEmployeesQueryVariables = Exact<{
  paging?: InputMaybe<CursorPaging>;
  filter?: InputMaybe<EmployeeFilter>;
  sorting?: InputMaybe<Array<EmployeeSort> | EmployeeSort>;
}>;

export type GetEmployeesQuery = {
  __typename?: "Query";
  employees: {
    __typename?: "EmployeeConnection";
    edges: Array<{
      __typename?: "EmployeeEdge";
      node: {
        __typename?: "Employee";
        createdAt: any;
        id: string;
        name: string;
        icNo: string;
      };
    }>;
  };
};

export type CreateEmployeeMutationVariables = Exact<{
  input: CreateOneEmployeeInput;
}>;

export type CreateEmployeeMutation = {
  __typename?: "Mutation";
  createOneEmployee: { __typename?: "Employee"; id: string };
};

export const EmployeeFieldsFragmentDoc = gql`
  fragment EmployeeFields on Employee {
    createdAt
    id
    name
    icNo
  }
`;
export const GetEmployeesDocument = gql`
  query getEmployees(
    $paging: CursorPaging
    $filter: EmployeeFilter
    $sorting: [EmployeeSort!]
  ) {
    employees(paging: $paging, filter: $filter, sorting: $sorting) {
      edges {
        node {
          ...EmployeeFields
        }
      }
    }
  }
  ${EmployeeFieldsFragmentDoc}
`;

/**
 * __useGetEmployeesQuery__
 *
 * To run a query within a React component, call `useGetEmployeesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeesQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetEmployeesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetEmployeesQuery,
    GetEmployeesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(
    GetEmployeesDocument,
    options
  );
}
export function useGetEmployeesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEmployeesQuery,
    GetEmployeesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEmployeesQuery, GetEmployeesQueryVariables>(
    GetEmployeesDocument,
    options
  );
}
export type GetEmployeesQueryHookResult = ReturnType<
  typeof useGetEmployeesQuery
>;
export type GetEmployeesLazyQueryHookResult = ReturnType<
  typeof useGetEmployeesLazyQuery
>;
export type GetEmployeesQueryResult = Apollo.QueryResult<
  GetEmployeesQuery,
  GetEmployeesQueryVariables
>;
export const CreateEmployeeDocument = gql`
  mutation createEmployee($input: CreateOneEmployeeInput!) {
    createOneEmployee(input: $input) {
      id
    }
  }
`;
export type CreateEmployeeMutationFn = Apollo.MutationFunction<
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables
>;

/**
 * __useCreateEmployeeMutation__
 *
 * To run a mutation, you first call `useCreateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEmployeeMutation, { data, loading, error }] = useCreateEmployeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEmployeeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEmployeeMutation,
    CreateEmployeeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateEmployeeMutation,
    CreateEmployeeMutationVariables
  >(CreateEmployeeDocument, options);
}
export type CreateEmployeeMutationHookResult = ReturnType<
  typeof useCreateEmployeeMutation
>;
export type CreateEmployeeMutationResult =
  Apollo.MutationResult<CreateEmployeeMutation>;
export type CreateEmployeeMutationOptions = Apollo.BaseMutationOptions<
  CreateEmployeeMutation,
  CreateEmployeeMutationVariables
>;
