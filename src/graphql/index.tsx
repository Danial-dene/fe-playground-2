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
};

export type CreateEmployee = {
  accountNo?: InputMaybe<Scalars["Float"]>;
  backPayment?: InputMaybe<Scalars["Float"]>;
  bankType?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  employeeEpf?: InputMaybe<Scalars["Float"]>;
  employeeNo?: InputMaybe<Scalars["String"]>;
  employeeSocso?: InputMaybe<Scalars["Float"]>;
  employerEpf?: InputMaybe<Scalars["Float"]>;
  employerSocso?: InputMaybe<Scalars["Float"]>;
  icNo?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  loan?: InputMaybe<Scalars["Float"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateManyEmployeesInput = {
  /** Array of records to create */
  employees: Array<CreateEmployee>;
};

export type CreateManyShiftOptionsInput = {
  /** Array of records to create */
  shiftOptions: Array<CreateShiftOption>;
};

export type CreateManyShiftsInput = {
  /** Array of records to create */
  shifts: Array<CreateShiftInputDto>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUser>;
};

export type CreateOneEmployeeInput = {
  /** The record to create */
  employee: CreateEmployee;
};

export type CreateOneShiftInput = {
  /** The record to create */
  shift: CreateShiftInputDto;
};

export type CreateOneShiftOptionInput = {
  /** The record to create */
  shiftOption: CreateShiftOption;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUser;
};

export type CreateShiftInputDto = {
  allowance: Scalars["Float"];
  date: Scalars["DateTime"];
  employeeId: Scalars["Float"];
  hours: Scalars["Float"];
  shiftOptionId: Scalars["Float"];
  total?: InputMaybe<Scalars["Float"]>;
};

export type CreateShiftOption = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  otRate?: InputMaybe<Scalars["Float"]>;
  rate?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateUser = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
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

export type DeleteManyEmployeesInput = {
  /** Filter to find records to delete */
  filter: EmployeeDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: "DeleteManyResponse";
  /** The number of records deleted. */
  deletedCount: Scalars["Int"];
};

export type DeleteManyShiftOptionsInput = {
  /** Filter to find records to delete */
  filter: ShiftOptionDeleteFilter;
};

export type DeleteManyShiftsInput = {
  /** Filter to find records to delete */
  filter: ShiftDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneEmployeeInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneShiftInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneShiftOptionInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type Employee = {
  __typename?: "Employee";
  accountNo?: Maybe<Scalars["Float"]>;
  backPayment?: Maybe<Scalars["Float"]>;
  bankType?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employeeEpf?: Maybe<Scalars["Float"]>;
  employeeNo: Scalars["String"];
  employeeSocso?: Maybe<Scalars["Float"]>;
  employerEpf?: Maybe<Scalars["Float"]>;
  employerSocso?: Maybe<Scalars["Float"]>;
  icNo: Scalars["String"];
  id: Scalars["String"];
  loan?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeAggregateGroupBy = {
  __typename?: "EmployeeAggregateGroupBy";
  accountNo?: Maybe<Scalars["Float"]>;
  backPayment?: Maybe<Scalars["Float"]>;
  bankType?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employeeEpf?: Maybe<Scalars["Float"]>;
  employeeNo?: Maybe<Scalars["String"]>;
  employeeSocso?: Maybe<Scalars["Float"]>;
  employerEpf?: Maybe<Scalars["Float"]>;
  employerSocso?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  loan?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeAvgAggregate = {
  __typename?: "EmployeeAvgAggregate";
  accountNo?: Maybe<Scalars["Float"]>;
  backPayment?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employeeEpf?: Maybe<Scalars["Float"]>;
  employeeSocso?: Maybe<Scalars["Float"]>;
  employerEpf?: Maybe<Scalars["Float"]>;
  employerSocso?: Maybe<Scalars["Float"]>;
  loan?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeConnection = {
  __typename?: "EmployeeConnection";
  /** Array of nodes. */
  nodes: Array<Employee>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type EmployeeCountAggregate = {
  __typename?: "EmployeeCountAggregate";
  accountNo?: Maybe<Scalars["Int"]>;
  backPayment?: Maybe<Scalars["Int"]>;
  bankType?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  employeeEpf?: Maybe<Scalars["Int"]>;
  employeeNo?: Maybe<Scalars["Int"]>;
  employeeSocso?: Maybe<Scalars["Int"]>;
  employerEpf?: Maybe<Scalars["Int"]>;
  employerSocso?: Maybe<Scalars["Int"]>;
  icNo?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  loan?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type EmployeeDeleteFilter = {
  accountNo?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<EmployeeDeleteFilter>>;
  backPayment?: InputMaybe<NumberFieldComparison>;
  bankType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  employeeEpf?: InputMaybe<NumberFieldComparison>;
  employeeNo?: InputMaybe<StringFieldComparison>;
  employeeSocso?: InputMaybe<NumberFieldComparison>;
  employerEpf?: InputMaybe<NumberFieldComparison>;
  employerSocso?: InputMaybe<NumberFieldComparison>;
  icNo?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  loan?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmployeeDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type EmployeeDeleteResponse = {
  __typename?: "EmployeeDeleteResponse";
  accountNo?: Maybe<Scalars["Float"]>;
  backPayment?: Maybe<Scalars["Float"]>;
  bankType?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employeeEpf?: Maybe<Scalars["Float"]>;
  employeeNo?: Maybe<Scalars["String"]>;
  employeeSocso?: Maybe<Scalars["Float"]>;
  employerEpf?: Maybe<Scalars["Float"]>;
  employerSocso?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  loan?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeFilter = {
  accountNo?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<EmployeeFilter>>;
  backPayment?: InputMaybe<NumberFieldComparison>;
  bankType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  employeeEpf?: InputMaybe<NumberFieldComparison>;
  employeeNo?: InputMaybe<StringFieldComparison>;
  employeeSocso?: InputMaybe<NumberFieldComparison>;
  employerEpf?: InputMaybe<NumberFieldComparison>;
  employerSocso?: InputMaybe<NumberFieldComparison>;
  icNo?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  loan?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmployeeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type EmployeeMaxAggregate = {
  __typename?: "EmployeeMaxAggregate";
  accountNo?: Maybe<Scalars["Float"]>;
  backPayment?: Maybe<Scalars["Float"]>;
  bankType?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employeeEpf?: Maybe<Scalars["Float"]>;
  employeeNo?: Maybe<Scalars["String"]>;
  employeeSocso?: Maybe<Scalars["Float"]>;
  employerEpf?: Maybe<Scalars["Float"]>;
  employerSocso?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  loan?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeMinAggregate = {
  __typename?: "EmployeeMinAggregate";
  accountNo?: Maybe<Scalars["Float"]>;
  backPayment?: Maybe<Scalars["Float"]>;
  bankType?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employeeEpf?: Maybe<Scalars["Float"]>;
  employeeNo?: Maybe<Scalars["String"]>;
  employeeSocso?: Maybe<Scalars["Float"]>;
  employerEpf?: Maybe<Scalars["Float"]>;
  employerSocso?: Maybe<Scalars["Float"]>;
  icNo?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  loan?: Maybe<Scalars["Float"]>;
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
  AccountNo = "accountNo",
  BackPayment = "backPayment",
  BankType = "bankType",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  EmployeeEpf = "employeeEpf",
  EmployeeNo = "employeeNo",
  EmployeeSocso = "employeeSocso",
  EmployerEpf = "employerEpf",
  EmployerSocso = "employerSocso",
  IcNo = "icNo",
  Id = "id",
  Loan = "loan",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type EmployeeSumAggregate = {
  __typename?: "EmployeeSumAggregate";
  accountNo?: Maybe<Scalars["Float"]>;
  backPayment?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employeeEpf?: Maybe<Scalars["Float"]>;
  employeeSocso?: Maybe<Scalars["Float"]>;
  employerEpf?: Maybe<Scalars["Float"]>;
  employerSocso?: Maybe<Scalars["Float"]>;
  loan?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type EmployeeUpdateFilter = {
  accountNo?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<EmployeeUpdateFilter>>;
  backPayment?: InputMaybe<NumberFieldComparison>;
  bankType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  employeeEpf?: InputMaybe<NumberFieldComparison>;
  employeeNo?: InputMaybe<StringFieldComparison>;
  employeeSocso?: InputMaybe<NumberFieldComparison>;
  employerEpf?: InputMaybe<NumberFieldComparison>;
  employerSocso?: InputMaybe<NumberFieldComparison>;
  icNo?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  loan?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<EmployeeUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Mutation = {
  __typename?: "Mutation";
  createManyEmployees: Array<Employee>;
  createManyShiftOptions: Array<ShiftOption>;
  createManyShifts: Array<Shift>;
  createManyUsers: Array<User>;
  createOneEmployee: Employee;
  createOneShift: Shift;
  createOneShiftOption: ShiftOption;
  createOneUser: User;
  deleteManyEmployees: DeleteManyResponse;
  deleteManyShiftOptions: DeleteManyResponse;
  deleteManyShifts: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneEmployee: EmployeeDeleteResponse;
  deleteOneShift: ShiftDeleteResponse;
  deleteOneShiftOption: ShiftOptionDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  removeEmployeeFromShift: Shift;
  removeShiftOptionsFromShift: Shift;
  setEmployeeOnShift: Shift;
  setShiftOptionsOnShift: Shift;
  updateManyEmployees: UpdateManyResponse;
  updateManyShiftOptions: UpdateManyResponse;
  updateManyShifts: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneEmployee: Employee;
  updateOneShift: Shift;
  updateOneShiftOption: ShiftOption;
  updateOneUser: User;
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

export type MutationCreateOneEmployeeArgs = {
  input: CreateOneEmployeeInput;
};

export type MutationCreateOneShiftArgs = {
  input: CreateOneShiftInput;
};

export type MutationCreateOneShiftOptionArgs = {
  input: CreateOneShiftOptionInput;
};

export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};

export type MutationDeleteManyEmployeesArgs = {
  input: DeleteManyEmployeesInput;
};

export type MutationDeleteManyShiftOptionsArgs = {
  input: DeleteManyShiftOptionsInput;
};

export type MutationDeleteManyShiftsArgs = {
  input: DeleteManyShiftsInput;
};

export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};

export type MutationDeleteOneEmployeeArgs = {
  input: DeleteOneEmployeeInput;
};

export type MutationDeleteOneShiftArgs = {
  input: DeleteOneShiftInput;
};

export type MutationDeleteOneShiftOptionArgs = {
  input: DeleteOneShiftOptionInput;
};

export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};

export type MutationRemoveEmployeeFromShiftArgs = {
  input: RemoveEmployeeFromShiftInput;
};

export type MutationRemoveShiftOptionsFromShiftArgs = {
  input: RemoveShiftOptionsFromShiftInput;
};

export type MutationSetEmployeeOnShiftArgs = {
  input: SetEmployeeOnShiftInput;
};

export type MutationSetShiftOptionsOnShiftArgs = {
  input: SetShiftOptionsOnShiftInput;
};

export type MutationUpdateManyEmployeesArgs = {
  input: UpdateManyEmployeesInput;
};

export type MutationUpdateManyShiftOptionsArgs = {
  input: UpdateManyShiftOptionsInput;
};

export type MutationUpdateManyShiftsArgs = {
  input: UpdateManyShiftsInput;
};

export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};

export type MutationUpdateOneEmployeeArgs = {
  input: UpdateOneEmployeeInput;
};

export type MutationUpdateOneShiftArgs = {
  input: UpdateOneShiftInput;
};

export type MutationUpdateOneShiftOptionArgs = {
  input: UpdateOneShiftOptionInput;
};

export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
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

export type Query = {
  __typename?: "Query";
  employee?: Maybe<Employee>;
  employees: EmployeeConnection;
  getMe: User;
  shift?: Maybe<Shift>;
  shiftOption?: Maybe<ShiftOption>;
  shiftOptions: ShiftOptionConnection;
  shifts: ShiftConnection;
  user?: Maybe<User>;
  users: UserConnection;
};

export type QueryEmployeeArgs = {
  id: Scalars["String"];
};

export type QueryEmployeesArgs = {
  filter?: InputMaybe<EmployeeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<EmployeeSort>>;
};

export type QueryShiftArgs = {
  id: Scalars["String"];
};

export type QueryShiftOptionArgs = {
  id: Scalars["String"];
};

export type QueryShiftOptionsArgs = {
  filter?: InputMaybe<ShiftOptionFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ShiftOptionSort>>;
};

export type QueryShiftsArgs = {
  filter?: InputMaybe<ShiftFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<ShiftSort>>;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type RemoveEmployeeFromShiftInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type RemoveShiftOptionsFromShiftInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type SetEmployeeOnShiftInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type SetShiftOptionsOnShiftInput = {
  /** The id of the record. */
  id: Scalars["String"];
  /** The id of relation. */
  relationId: Scalars["String"];
};

export type Shift = {
  __typename?: "Shift";
  allowance: Scalars["Float"];
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  date: Scalars["DateTime"];
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  employee?: Maybe<Employee>;
  hours: Scalars["Float"];
  id: Scalars["String"];
  shiftOptionId: Scalars["Float"];
  shiftOptions?: Maybe<ShiftOption>;
  total: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftAggregateGroupBy = {
  __typename?: "ShiftAggregateGroupBy";
  allowance?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  hours?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  shiftOptionId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftAvgAggregate = {
  __typename?: "ShiftAvgAggregate";
  allowance?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  hours?: Maybe<Scalars["Float"]>;
  shiftOptionId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftConnection = {
  __typename?: "ShiftConnection";
  /** Array of nodes. */
  nodes: Array<Shift>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ShiftCountAggregate = {
  __typename?: "ShiftCountAggregate";
  allowance?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  date?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  hours?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  shiftOptionId?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ShiftDeleteFilter = {
  allowance?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ShiftDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  hours?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftDeleteFilter>>;
  shiftOptionId?: InputMaybe<NumberFieldComparison>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftDeleteResponse = {
  __typename?: "ShiftDeleteResponse";
  allowance?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  hours?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  shiftOptionId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftFilter = {
  allowance?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ShiftFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  employee?: InputMaybe<ShiftFilterEmployeeFilter>;
  hours?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftFilter>>;
  shiftOptionId?: InputMaybe<NumberFieldComparison>;
  shiftOptions?: InputMaybe<ShiftFilterShiftOptionFilter>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftFilterEmployeeFilter = {
  accountNo?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ShiftFilterEmployeeFilter>>;
  backPayment?: InputMaybe<NumberFieldComparison>;
  bankType?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  employeeEpf?: InputMaybe<NumberFieldComparison>;
  employeeNo?: InputMaybe<StringFieldComparison>;
  employeeSocso?: InputMaybe<NumberFieldComparison>;
  employerEpf?: InputMaybe<NumberFieldComparison>;
  employerSocso?: InputMaybe<NumberFieldComparison>;
  icNo?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  loan?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftFilterEmployeeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftFilterShiftOptionFilter = {
  and?: InputMaybe<Array<ShiftFilterShiftOptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftFilterShiftOptionFilter>>;
  otRate?: InputMaybe<NumberFieldComparison>;
  rate?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftMaxAggregate = {
  __typename?: "ShiftMaxAggregate";
  allowance?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  hours?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  shiftOptionId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftMinAggregate = {
  __typename?: "ShiftMinAggregate";
  allowance?: Maybe<Scalars["Float"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  date?: Maybe<Scalars["DateTime"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  hours?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  shiftOptionId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOption = {
  __typename?: "ShiftOption";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["String"];
  name: Scalars["String"];
  otRate: Scalars["Float"];
  rate: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionAggregateGroupBy = {
  __typename?: "ShiftOptionAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  otRate?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionAvgAggregate = {
  __typename?: "ShiftOptionAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  otRate?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionConnection = {
  __typename?: "ShiftOptionConnection";
  /** Array of nodes. */
  nodes: Array<ShiftOption>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type ShiftOptionCountAggregate = {
  __typename?: "ShiftOptionCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  otRate?: Maybe<Scalars["Int"]>;
  rate?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type ShiftOptionDeleteFilter = {
  and?: InputMaybe<Array<ShiftOptionDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftOptionDeleteFilter>>;
  otRate?: InputMaybe<NumberFieldComparison>;
  rate?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftOptionDeleteResponse = {
  __typename?: "ShiftOptionDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  otRate?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionFilter = {
  and?: InputMaybe<Array<ShiftOptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftOptionFilter>>;
  otRate?: InputMaybe<NumberFieldComparison>;
  rate?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftOptionMaxAggregate = {
  __typename?: "ShiftOptionMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  otRate?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionMinAggregate = {
  __typename?: "ShiftOptionMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  otRate?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionSort = {
  direction: SortDirection;
  field: ShiftOptionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShiftOptionSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Name = "name",
  OtRate = "otRate",
  Rate = "rate",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ShiftOptionSumAggregate = {
  __typename?: "ShiftOptionSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  otRate?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftOptionUpdateFilter = {
  and?: InputMaybe<Array<ShiftOptionUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftOptionUpdateFilter>>;
  otRate?: InputMaybe<NumberFieldComparison>;
  rate?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type ShiftSort = {
  direction: SortDirection;
  field: ShiftSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShiftSortFields {
  Allowance = "allowance",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  Date = "date",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Hours = "hours",
  Id = "id",
  ShiftOptionId = "shiftOptionId",
  Total = "total",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type ShiftSumAggregate = {
  __typename?: "ShiftSumAggregate";
  allowance?: Maybe<Scalars["Float"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  hours?: Maybe<Scalars["Float"]>;
  shiftOptionId?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type ShiftUpdateFilter = {
  allowance?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<ShiftUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  date?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  hours?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShiftUpdateFilter>>;
  shiftOptionId?: InputMaybe<NumberFieldComparison>;
  total?: InputMaybe<NumberFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
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

export type UpdateEmployee = {
  accountNo?: InputMaybe<Scalars["Float"]>;
  backPayment?: InputMaybe<Scalars["Float"]>;
  bankType?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  employeeEpf?: InputMaybe<Scalars["Float"]>;
  employeeNo?: InputMaybe<Scalars["String"]>;
  employeeSocso?: InputMaybe<Scalars["Float"]>;
  employerEpf?: InputMaybe<Scalars["Float"]>;
  employerSocso?: InputMaybe<Scalars["Float"]>;
  icNo?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  loan?: InputMaybe<Scalars["Float"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
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

export type UpdateManyShiftOptionsInput = {
  /** Filter used to find fields to update */
  filter: ShiftOptionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateShiftOption;
};

export type UpdateManyShiftsInput = {
  /** Filter used to find fields to update */
  filter: ShiftUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateShift;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUser;
};

export type UpdateOneEmployeeInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateEmployee;
};

export type UpdateOneShiftInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateShift;
};

export type UpdateOneShiftOptionInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateShiftOption;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateUser;
};

export type UpdateShift = {
  allowance?: InputMaybe<Scalars["Float"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  date?: InputMaybe<Scalars["DateTime"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  hours?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  shiftOptionId?: InputMaybe<Scalars["Float"]>;
  total?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateShiftOption = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  otRate?: InputMaybe<Scalars["Float"]>;
  rate?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateUser = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserAggregateGroupBy = {
  __typename?: "UserAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserAvgAggregate = {
  __typename?: "UserAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
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
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  password?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: "UserDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: "UserMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserMinAggregate = {
  __typename?: "UserMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Email = "email",
  Id = "id",
  Name = "name",
  Password = "password",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type UserSumAggregate = {
  __typename?: "UserSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type EmployeeFieldsFragment = {
  __typename?: "Employee";
  createdAt: any;
  id: string;
  name: string;
  icNo: string;
  employeeNo: string;
  employeeEpf?: number | null;
  employerEpf?: number | null;
  employeeSocso?: number | null;
  employerSocso?: number | null;
  backPayment?: number | null;
  loan?: number | null;
  accountNo?: number | null;
  bankType?: string | null;
};

export type GetEmployeesQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<EmployeeFilter>;
  sorting?: InputMaybe<Array<EmployeeSort> | EmployeeSort>;
}>;

export type GetEmployeesQuery = {
  __typename?: "Query";
  employees: {
    __typename?: "EmployeeConnection";
    totalCount: number;
    nodes: Array<{
      __typename?: "Employee";
      createdAt: any;
      id: string;
      name: string;
      icNo: string;
      employeeNo: string;
      employeeEpf?: number | null;
      employerEpf?: number | null;
      employeeSocso?: number | null;
      employerSocso?: number | null;
      backPayment?: number | null;
      loan?: number | null;
      accountNo?: number | null;
      bankType?: string | null;
    }>;
  };
};

export type GetOneEmployeeQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetOneEmployeeQuery = {
  __typename?: "Query";
  employee?: {
    __typename?: "Employee";
    createdAt: any;
    id: string;
    name: string;
    icNo: string;
    employeeNo: string;
    employeeEpf?: number | null;
    employerEpf?: number | null;
    employeeSocso?: number | null;
    employerSocso?: number | null;
    backPayment?: number | null;
    loan?: number | null;
    accountNo?: number | null;
    bankType?: string | null;
  } | null;
};

export type CreateEmployeeMutationVariables = Exact<{
  input: CreateOneEmployeeInput;
}>;

export type CreateEmployeeMutation = {
  __typename?: "Mutation";
  createOneEmployee: { __typename?: "Employee"; id: string };
};

export type UpdateEmployeeMutationVariables = Exact<{
  input: UpdateOneEmployeeInput;
}>;

export type UpdateEmployeeMutation = {
  __typename?: "Mutation";
  updateOneEmployee: { __typename?: "Employee"; id: string };
};

export type DeleteEmployeeMutationVariables = Exact<{
  input: DeleteOneEmployeeInput;
}>;

export type DeleteEmployeeMutation = {
  __typename?: "Mutation";
  deleteOneEmployee: {
    __typename?: "EmployeeDeleteResponse";
    id?: string | null;
  };
};

export type MeFieldsFragment = {
  __typename?: "User";
  id: string;
  name: string;
  email: string;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
  __typename?: "Query";
  getMe: { __typename?: "User"; id: string; name: string; email: string };
};

export type ShiftOptionFieldsFragment = {
  __typename?: "ShiftOption";
  id: string;
  name: string;
  rate: number;
  otRate: number;
};

export type GetShiftsOptionsQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<ShiftOptionFilter>;
  sorting?: InputMaybe<Array<ShiftOptionSort> | ShiftOptionSort>;
}>;

export type GetShiftsOptionsQuery = {
  __typename?: "Query";
  shiftOptions: {
    __typename?: "ShiftOptionConnection";
    totalCount: number;
    nodes: Array<{
      __typename?: "ShiftOption";
      id: string;
      name: string;
      rate: number;
      otRate: number;
    }>;
  };
};

export type GetOneShiftOptionQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetOneShiftOptionQuery = {
  __typename?: "Query";
  shiftOption?: {
    __typename?: "ShiftOption";
    id: string;
    name: string;
    rate: number;
    otRate: number;
  } | null;
};

export type CreateShiftOptionMutationVariables = Exact<{
  input: CreateOneShiftOptionInput;
}>;

export type CreateShiftOptionMutation = {
  __typename?: "Mutation";
  createOneShiftOption: { __typename?: "ShiftOption"; id: string };
};

export type UpdateShiftOptionsMutationVariables = Exact<{
  input: UpdateOneShiftOptionInput;
}>;

export type UpdateShiftOptionsMutation = {
  __typename?: "Mutation";
  updateOneShiftOption: { __typename?: "ShiftOption"; id: string };
};

export type DeleteShiftOptionsMutationVariables = Exact<{
  input: DeleteOneShiftOptionInput;
}>;

export type DeleteShiftOptionsMutation = {
  __typename?: "Mutation";
  deleteOneShiftOption: {
    __typename?: "ShiftOptionDeleteResponse";
    id?: string | null;
  };
};

export type ShiftFieldsFragment = {
  __typename?: "Shift";
  id: string;
  date: any;
  hours: number;
  allowance: number;
  total: number;
  shiftOptionId: number;
  shiftOptions?: {
    __typename?: "ShiftOption";
    id: string;
    name: string;
    rate: number;
    otRate: number;
  } | null;
  employee?: { __typename?: "Employee"; name: string } | null;
};

export type GetShiftsQueryVariables = Exact<{
  paging?: InputMaybe<OffsetPaging>;
  filter?: InputMaybe<ShiftFilter>;
  sorting?: InputMaybe<Array<ShiftSort> | ShiftSort>;
}>;

export type GetShiftsQuery = {
  __typename?: "Query";
  shifts: {
    __typename?: "ShiftConnection";
    totalCount: number;
    nodes: Array<{
      __typename?: "Shift";
      id: string;
      date: any;
      hours: number;
      allowance: number;
      total: number;
      shiftOptionId: number;
      shiftOptions?: {
        __typename?: "ShiftOption";
        id: string;
        name: string;
        rate: number;
        otRate: number;
      } | null;
      employee?: { __typename?: "Employee"; name: string } | null;
    }>;
  };
};

export type GetOneShiftQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetOneShiftQuery = {
  __typename?: "Query";
  shift?: {
    __typename?: "Shift";
    id: string;
    date: any;
    hours: number;
    allowance: number;
    total: number;
    shiftOptionId: number;
    shiftOptions?: {
      __typename?: "ShiftOption";
      id: string;
      name: string;
      rate: number;
      otRate: number;
    } | null;
    employee?: { __typename?: "Employee"; name: string } | null;
  } | null;
};

export type CreateShiftMutationVariables = Exact<{
  input: CreateOneShiftInput;
}>;

export type CreateShiftMutation = {
  __typename?: "Mutation";
  createOneShift: { __typename?: "Shift"; id: string };
};

export type UpdateShiftMutationVariables = Exact<{
  input: UpdateOneShiftInput;
}>;

export type UpdateShiftMutation = {
  __typename?: "Mutation";
  updateOneShift: { __typename?: "Shift"; id: string };
};

export type DeleteShiftMutationVariables = Exact<{
  input: DeleteOneShiftInput;
}>;

export type DeleteShiftMutation = {
  __typename?: "Mutation";
  deleteOneShift: { __typename?: "ShiftDeleteResponse"; id?: string | null };
};

export type UsersFieldsFragment = {
  __typename?: "User";
  id: string;
  name: string;
  email: string;
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
      id: string;
      name: string;
      email: string;
    }>;
  };
};

export type GetOneUserQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetOneUserQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    name: string;
    email: string;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  input: CreateOneUserInput;
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createOneUser: { __typename?: "User"; id: string };
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateOneUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: "Mutation";
  updateOneUser: { __typename?: "User"; id: string };
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteOneUserInput;
}>;

export type DeleteUserMutation = {
  __typename?: "Mutation";
  deleteOneUser: { __typename?: "UserDeleteResponse"; id?: string | null };
};

export const EmployeeFieldsFragmentDoc = gql`
  fragment EmployeeFields on Employee {
    createdAt
    id
    name
    icNo
    employeeNo
    employeeEpf
    employerEpf
    employeeSocso
    employerSocso
    backPayment
    loan
    accountNo
    bankType
  }
`;
export const MeFieldsFragmentDoc = gql`
  fragment MeFields on User {
    id
    name
    email
  }
`;
export const ShiftOptionFieldsFragmentDoc = gql`
  fragment ShiftOptionFields on ShiftOption {
    id
    name
    rate
    otRate
  }
`;
export const ShiftFieldsFragmentDoc = gql`
  fragment ShiftFields on Shift {
    id
    date
    hours
    allowance
    total
    shiftOptionId
    shiftOptions {
      id
      name
      rate
      otRate
    }
    employee {
      name
    }
  }
`;
export const UsersFieldsFragmentDoc = gql`
  fragment UsersFields on User {
    id
    name
    email
  }
`;
export const GetEmployeesDocument = gql`
  query getEmployees(
    $paging: OffsetPaging
    $filter: EmployeeFilter
    $sorting: [EmployeeSort!]
  ) {
    employees(paging: $paging, filter: $filter, sorting: $sorting) {
      totalCount
      nodes {
        ...EmployeeFields
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
export const GetOneEmployeeDocument = gql`
  query getOneEmployee($id: String!) {
    employee(id: $id) {
      ...EmployeeFields
    }
  }
  ${EmployeeFieldsFragmentDoc}
`;

/**
 * __useGetOneEmployeeQuery__
 *
 * To run a query within a React component, call `useGetOneEmployeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneEmployeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneEmployeeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneEmployeeQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOneEmployeeQuery,
    GetOneEmployeeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneEmployeeQuery, GetOneEmployeeQueryVariables>(
    GetOneEmployeeDocument,
    options
  );
}
export function useGetOneEmployeeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneEmployeeQuery,
    GetOneEmployeeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneEmployeeQuery, GetOneEmployeeQueryVariables>(
    GetOneEmployeeDocument,
    options
  );
}
export type GetOneEmployeeQueryHookResult = ReturnType<
  typeof useGetOneEmployeeQuery
>;
export type GetOneEmployeeLazyQueryHookResult = ReturnType<
  typeof useGetOneEmployeeLazyQuery
>;
export type GetOneEmployeeQueryResult = Apollo.QueryResult<
  GetOneEmployeeQuery,
  GetOneEmployeeQueryVariables
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
export const UpdateEmployeeDocument = gql`
  mutation updateEmployee($input: UpdateOneEmployeeInput!) {
    updateOneEmployee(input: $input) {
      id
    }
  }
`;
export type UpdateEmployeeMutationFn = Apollo.MutationFunction<
  UpdateEmployeeMutation,
  UpdateEmployeeMutationVariables
>;

/**
 * __useUpdateEmployeeMutation__
 *
 * To run a mutation, you first call `useUpdateEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEmployeeMutation, { data, loading, error }] = useUpdateEmployeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEmployeeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateEmployeeMutation,
    UpdateEmployeeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateEmployeeMutation,
    UpdateEmployeeMutationVariables
  >(UpdateEmployeeDocument, options);
}
export type UpdateEmployeeMutationHookResult = ReturnType<
  typeof useUpdateEmployeeMutation
>;
export type UpdateEmployeeMutationResult =
  Apollo.MutationResult<UpdateEmployeeMutation>;
export type UpdateEmployeeMutationOptions = Apollo.BaseMutationOptions<
  UpdateEmployeeMutation,
  UpdateEmployeeMutationVariables
>;
export const DeleteEmployeeDocument = gql`
  mutation deleteEmployee($input: DeleteOneEmployeeInput!) {
    deleteOneEmployee(input: $input) {
      id
    }
  }
`;
export type DeleteEmployeeMutationFn = Apollo.MutationFunction<
  DeleteEmployeeMutation,
  DeleteEmployeeMutationVariables
>;

/**
 * __useDeleteEmployeeMutation__
 *
 * To run a mutation, you first call `useDeleteEmployeeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmployeeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmployeeMutation, { data, loading, error }] = useDeleteEmployeeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteEmployeeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteEmployeeMutation,
    DeleteEmployeeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteEmployeeMutation,
    DeleteEmployeeMutationVariables
  >(DeleteEmployeeDocument, options);
}
export type DeleteEmployeeMutationHookResult = ReturnType<
  typeof useDeleteEmployeeMutation
>;
export type DeleteEmployeeMutationResult =
  Apollo.MutationResult<DeleteEmployeeMutation>;
export type DeleteEmployeeMutationOptions = Apollo.BaseMutationOptions<
  DeleteEmployeeMutation,
  DeleteEmployeeMutationVariables
>;
export const GetMeDocument = gql`
  query getMe {
    getMe {
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
export const GetShiftsOptionsDocument = gql`
  query getShiftsOptions(
    $paging: OffsetPaging
    $filter: ShiftOptionFilter
    $sorting: [ShiftOptionSort!]
  ) {
    shiftOptions(paging: $paging, filter: $filter, sorting: $sorting) {
      totalCount
      nodes {
        ...ShiftOptionFields
      }
    }
  }
  ${ShiftOptionFieldsFragmentDoc}
`;

/**
 * __useGetShiftsOptionsQuery__
 *
 * To run a query within a React component, call `useGetShiftsOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftsOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftsOptionsQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetShiftsOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetShiftsOptionsQuery,
    GetShiftsOptionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetShiftsOptionsQuery, GetShiftsOptionsQueryVariables>(
    GetShiftsOptionsDocument,
    options
  );
}
export function useGetShiftsOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShiftsOptionsQuery,
    GetShiftsOptionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetShiftsOptionsQuery,
    GetShiftsOptionsQueryVariables
  >(GetShiftsOptionsDocument, options);
}
export type GetShiftsOptionsQueryHookResult = ReturnType<
  typeof useGetShiftsOptionsQuery
>;
export type GetShiftsOptionsLazyQueryHookResult = ReturnType<
  typeof useGetShiftsOptionsLazyQuery
>;
export type GetShiftsOptionsQueryResult = Apollo.QueryResult<
  GetShiftsOptionsQuery,
  GetShiftsOptionsQueryVariables
>;
export const GetOneShiftOptionDocument = gql`
  query getOneShiftOption($id: String!) {
    shiftOption(id: $id) {
      ...ShiftOptionFields
    }
  }
  ${ShiftOptionFieldsFragmentDoc}
`;

/**
 * __useGetOneShiftOptionQuery__
 *
 * To run a query within a React component, call `useGetOneShiftOptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneShiftOptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneShiftOptionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneShiftOptionQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOneShiftOptionQuery,
    GetOneShiftOptionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOneShiftOptionQuery,
    GetOneShiftOptionQueryVariables
  >(GetOneShiftOptionDocument, options);
}
export function useGetOneShiftOptionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneShiftOptionQuery,
    GetOneShiftOptionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOneShiftOptionQuery,
    GetOneShiftOptionQueryVariables
  >(GetOneShiftOptionDocument, options);
}
export type GetOneShiftOptionQueryHookResult = ReturnType<
  typeof useGetOneShiftOptionQuery
>;
export type GetOneShiftOptionLazyQueryHookResult = ReturnType<
  typeof useGetOneShiftOptionLazyQuery
>;
export type GetOneShiftOptionQueryResult = Apollo.QueryResult<
  GetOneShiftOptionQuery,
  GetOneShiftOptionQueryVariables
>;
export const CreateShiftOptionDocument = gql`
  mutation createShiftOption($input: CreateOneShiftOptionInput!) {
    createOneShiftOption(input: $input) {
      id
    }
  }
`;
export type CreateShiftOptionMutationFn = Apollo.MutationFunction<
  CreateShiftOptionMutation,
  CreateShiftOptionMutationVariables
>;

/**
 * __useCreateShiftOptionMutation__
 *
 * To run a mutation, you first call `useCreateShiftOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShiftOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShiftOptionMutation, { data, loading, error }] = useCreateShiftOptionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShiftOptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateShiftOptionMutation,
    CreateShiftOptionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateShiftOptionMutation,
    CreateShiftOptionMutationVariables
  >(CreateShiftOptionDocument, options);
}
export type CreateShiftOptionMutationHookResult = ReturnType<
  typeof useCreateShiftOptionMutation
>;
export type CreateShiftOptionMutationResult =
  Apollo.MutationResult<CreateShiftOptionMutation>;
export type CreateShiftOptionMutationOptions = Apollo.BaseMutationOptions<
  CreateShiftOptionMutation,
  CreateShiftOptionMutationVariables
>;
export const UpdateShiftOptionsDocument = gql`
  mutation updateShiftOptions($input: UpdateOneShiftOptionInput!) {
    updateOneShiftOption(input: $input) {
      id
    }
  }
`;
export type UpdateShiftOptionsMutationFn = Apollo.MutationFunction<
  UpdateShiftOptionsMutation,
  UpdateShiftOptionsMutationVariables
>;

/**
 * __useUpdateShiftOptionsMutation__
 *
 * To run a mutation, you first call `useUpdateShiftOptionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShiftOptionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShiftOptionsMutation, { data, loading, error }] = useUpdateShiftOptionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateShiftOptionsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateShiftOptionsMutation,
    UpdateShiftOptionsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateShiftOptionsMutation,
    UpdateShiftOptionsMutationVariables
  >(UpdateShiftOptionsDocument, options);
}
export type UpdateShiftOptionsMutationHookResult = ReturnType<
  typeof useUpdateShiftOptionsMutation
>;
export type UpdateShiftOptionsMutationResult =
  Apollo.MutationResult<UpdateShiftOptionsMutation>;
export type UpdateShiftOptionsMutationOptions = Apollo.BaseMutationOptions<
  UpdateShiftOptionsMutation,
  UpdateShiftOptionsMutationVariables
>;
export const DeleteShiftOptionsDocument = gql`
  mutation deleteShiftOptions($input: DeleteOneShiftOptionInput!) {
    deleteOneShiftOption(input: $input) {
      id
    }
  }
`;
export type DeleteShiftOptionsMutationFn = Apollo.MutationFunction<
  DeleteShiftOptionsMutation,
  DeleteShiftOptionsMutationVariables
>;

/**
 * __useDeleteShiftOptionsMutation__
 *
 * To run a mutation, you first call `useDeleteShiftOptionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShiftOptionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShiftOptionsMutation, { data, loading, error }] = useDeleteShiftOptionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteShiftOptionsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteShiftOptionsMutation,
    DeleteShiftOptionsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteShiftOptionsMutation,
    DeleteShiftOptionsMutationVariables
  >(DeleteShiftOptionsDocument, options);
}
export type DeleteShiftOptionsMutationHookResult = ReturnType<
  typeof useDeleteShiftOptionsMutation
>;
export type DeleteShiftOptionsMutationResult =
  Apollo.MutationResult<DeleteShiftOptionsMutation>;
export type DeleteShiftOptionsMutationOptions = Apollo.BaseMutationOptions<
  DeleteShiftOptionsMutation,
  DeleteShiftOptionsMutationVariables
>;
export const GetShiftsDocument = gql`
  query getShifts(
    $paging: OffsetPaging
    $filter: ShiftFilter
    $sorting: [ShiftSort!]
  ) {
    shifts(paging: $paging, filter: $filter, sorting: $sorting) {
      totalCount
      nodes {
        ...ShiftFields
      }
    }
  }
  ${ShiftFieldsFragmentDoc}
`;

/**
 * __useGetShiftsQuery__
 *
 * To run a query within a React component, call `useGetShiftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShiftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShiftsQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useGetShiftsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetShiftsQuery, GetShiftsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetShiftsQuery, GetShiftsQueryVariables>(
    GetShiftsDocument,
    options
  );
}
export function useGetShiftsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShiftsQuery,
    GetShiftsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetShiftsQuery, GetShiftsQueryVariables>(
    GetShiftsDocument,
    options
  );
}
export type GetShiftsQueryHookResult = ReturnType<typeof useGetShiftsQuery>;
export type GetShiftsLazyQueryHookResult = ReturnType<
  typeof useGetShiftsLazyQuery
>;
export type GetShiftsQueryResult = Apollo.QueryResult<
  GetShiftsQuery,
  GetShiftsQueryVariables
>;
export const GetOneShiftDocument = gql`
  query getOneShift($id: String!) {
    shift(id: $id) {
      ...ShiftFields
    }
  }
  ${ShiftFieldsFragmentDoc}
`;

/**
 * __useGetOneShiftQuery__
 *
 * To run a query within a React component, call `useGetOneShiftQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneShiftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneShiftQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneShiftQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOneShiftQuery,
    GetOneShiftQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneShiftQuery, GetOneShiftQueryVariables>(
    GetOneShiftDocument,
    options
  );
}
export function useGetOneShiftLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneShiftQuery,
    GetOneShiftQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneShiftQuery, GetOneShiftQueryVariables>(
    GetOneShiftDocument,
    options
  );
}
export type GetOneShiftQueryHookResult = ReturnType<typeof useGetOneShiftQuery>;
export type GetOneShiftLazyQueryHookResult = ReturnType<
  typeof useGetOneShiftLazyQuery
>;
export type GetOneShiftQueryResult = Apollo.QueryResult<
  GetOneShiftQuery,
  GetOneShiftQueryVariables
>;
export const CreateShiftDocument = gql`
  mutation createShift($input: CreateOneShiftInput!) {
    createOneShift(input: $input) {
      id
    }
  }
`;
export type CreateShiftMutationFn = Apollo.MutationFunction<
  CreateShiftMutation,
  CreateShiftMutationVariables
>;

/**
 * __useCreateShiftMutation__
 *
 * To run a mutation, you first call `useCreateShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShiftMutation, { data, loading, error }] = useCreateShiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShiftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateShiftMutation,
    CreateShiftMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateShiftMutation, CreateShiftMutationVariables>(
    CreateShiftDocument,
    options
  );
}
export type CreateShiftMutationHookResult = ReturnType<
  typeof useCreateShiftMutation
>;
export type CreateShiftMutationResult =
  Apollo.MutationResult<CreateShiftMutation>;
export type CreateShiftMutationOptions = Apollo.BaseMutationOptions<
  CreateShiftMutation,
  CreateShiftMutationVariables
>;
export const UpdateShiftDocument = gql`
  mutation updateShift($input: UpdateOneShiftInput!) {
    updateOneShift(input: $input) {
      id
    }
  }
`;
export type UpdateShiftMutationFn = Apollo.MutationFunction<
  UpdateShiftMutation,
  UpdateShiftMutationVariables
>;

/**
 * __useUpdateShiftMutation__
 *
 * To run a mutation, you first call `useUpdateShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShiftMutation, { data, loading, error }] = useUpdateShiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateShiftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateShiftMutation,
    UpdateShiftMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateShiftMutation, UpdateShiftMutationVariables>(
    UpdateShiftDocument,
    options
  );
}
export type UpdateShiftMutationHookResult = ReturnType<
  typeof useUpdateShiftMutation
>;
export type UpdateShiftMutationResult =
  Apollo.MutationResult<UpdateShiftMutation>;
export type UpdateShiftMutationOptions = Apollo.BaseMutationOptions<
  UpdateShiftMutation,
  UpdateShiftMutationVariables
>;
export const DeleteShiftDocument = gql`
  mutation deleteShift($input: DeleteOneShiftInput!) {
    deleteOneShift(input: $input) {
      id
    }
  }
`;
export type DeleteShiftMutationFn = Apollo.MutationFunction<
  DeleteShiftMutation,
  DeleteShiftMutationVariables
>;

/**
 * __useDeleteShiftMutation__
 *
 * To run a mutation, you first call `useDeleteShiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShiftMutation, { data, loading, error }] = useDeleteShiftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteShiftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteShiftMutation,
    DeleteShiftMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteShiftMutation, DeleteShiftMutationVariables>(
    DeleteShiftDocument,
    options
  );
}
export type DeleteShiftMutationHookResult = ReturnType<
  typeof useDeleteShiftMutation
>;
export type DeleteShiftMutationResult =
  Apollo.MutationResult<DeleteShiftMutation>;
export type DeleteShiftMutationOptions = Apollo.BaseMutationOptions<
  DeleteShiftMutation,
  DeleteShiftMutationVariables
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
        ...UsersFields
      }
    }
  }
  ${UsersFieldsFragmentDoc}
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
export const GetOneUserDocument = gql`
  query getOneUser($id: String!) {
    user(id: $id) {
      ...UsersFields
    }
  }
  ${UsersFieldsFragmentDoc}
`;

/**
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneUserQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOneUserQuery,
    GetOneUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(
    GetOneUserDocument,
    options
  );
}
export function useGetOneUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOneUserQuery,
    GetOneUserQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(
    GetOneUserDocument,
    options
  );
}
export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<
  typeof useGetOneUserLazyQuery
>;
export type GetOneUserQueryResult = Apollo.QueryResult<
  GetOneUserQuery,
  GetOneUserQueryVariables
>;
export const CreateUserDocument = gql`
  mutation createUser($input: CreateOneUserInput!) {
    createOneUser(input: $input) {
      id
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($input: UpdateOneUserInput!) {
    updateOneUser(input: $input) {
      id
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation deleteUser($input: DeleteOneUserInput!) {
    deleteOneUser(input: $input) {
      id
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
