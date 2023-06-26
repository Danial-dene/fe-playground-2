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

export type Admin = {
  __typename?: "Admin";
  active?: Maybe<Scalars["Boolean"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminAggregateGroupBy = {
  __typename?: "AdminAggregateGroupBy";
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminAvgAggregate = {
  __typename?: "AdminAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
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
  active?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  password?: Maybe<Scalars["Int"]>;
  phoneNo?: Maybe<Scalars["Int"]>;
  thumbnail?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type AdminDeleteFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<AdminDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdminDeleteFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type AdminDeleteResponse = {
  __typename?: "AdminDeleteResponse";
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<AdminFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdminFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
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
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
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
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminSort = {
  direction: SortDirection;
  field: AdminSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AdminSortFields {
  Active = "active",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Email = "email",
  Id = "id",
  Name = "name",
  Password = "password",
  PhoneNo = "phoneNo",
  Thumbnail = "thumbnail",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type AdminSumAggregate = {
  __typename?: "AdminSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type AdminUpdateFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<AdminUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<AdminUpdateFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars["Boolean"]>;
  isNot?: InputMaybe<Scalars["Boolean"]>;
};

export type Counter = {
  __typename?: "Counter";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["String"];
  number?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CounterAggregateGroupBy = {
  __typename?: "CounterAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CounterAvgAggregate = {
  __typename?: "CounterAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CounterConnection = {
  __typename?: "CounterConnection";
  /** Array of nodes. */
  nodes: Array<Counter>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type CounterCountAggregate = {
  __typename?: "CounterCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  number?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type CounterDeleteFilter = {
  and?: InputMaybe<Array<CounterDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  number?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<CounterDeleteFilter>>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CounterDeleteResponse = {
  __typename?: "CounterDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CounterFilter = {
  and?: InputMaybe<Array<CounterFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  number?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<CounterFilter>>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CounterMaxAggregate = {
  __typename?: "CounterMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CounterMinAggregate = {
  __typename?: "CounterMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CounterSort = {
  direction: SortDirection;
  field: CounterSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CounterSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Number = "number",
  Type = "type",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type CounterSumAggregate = {
  __typename?: "CounterSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CounterUpdateFilter = {
  and?: InputMaybe<Array<CounterUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  number?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<CounterUpdateFilter>>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Counter_TypeConnection = {
  __typename?: "Counter_typeConnection";
  /** Array of nodes. */
  nodes: Array<Counter_Type>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type Counter_TypeDeleteResponse = {
  __typename?: "Counter_typeDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CreateAdmin = {
  active?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phoneNo?: InputMaybe<Scalars["String"]>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateCounter = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["Float"]>;
  type?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateCounter_Type = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateCustomer = {
  active?: InputMaybe<Scalars["Boolean"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phoneNo?: InputMaybe<Scalars["String"]>;
  thumbnail?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateCustomerNotification = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateDepartment = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateManyAdminsInput = {
  /** Array of records to create */
  admins: Array<CreateAdmin>;
};

export type CreateManyCounter_TypesInput = {
  /** Array of records to create */
  counter_types: Array<CreateCounter_Type>;
};

export type CreateManyCountersInput = {
  /** Array of records to create */
  counters: Array<CreateCounter>;
};

export type CreateManyCustomerNotificationsInput = {
  /** Array of records to create */
  customerNotifications: Array<CreateCustomerNotification>;
};

export type CreateManyCustomersInput = {
  /** Array of records to create */
  customers: Array<CreateCustomer>;
};

export type CreateManyDepartmentsInput = {
  /** Array of records to create */
  departments: Array<CreateDepartment>;
};

export type CreateManyNotificationsInput = {
  /** Array of records to create */
  notifications: Array<CreateNotification>;
};

export type CreateManyQueuesInput = {
  /** Array of records to create */
  queues: Array<CreateQueue>;
};

export type CreateManyStaffInput = {
  /** Array of records to create */
  staff: Array<CreateStaff>;
};

export type CreateNotification = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  message?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateOneAdminInput = {
  /** The record to create */
  admin: CreateAdmin;
};

export type CreateOneCounterInput = {
  /** The record to create */
  counter: CreateCounter;
};

export type CreateOneCounter_TypeInput = {
  /** The record to create */
  counter_type: CreateCounter_Type;
};

export type CreateOneCustomerInput = {
  /** The record to create */
  customer: CreateCustomer;
};

export type CreateOneCustomerNotificationInput = {
  /** The record to create */
  customerNotification: CreateCustomerNotification;
};

export type CreateOneDepartmentInput = {
  /** The record to create */
  department: CreateDepartment;
};

export type CreateOneNotificationInput = {
  /** The record to create */
  notification: CreateNotification;
};

export type CreateOneQueueInput = {
  /** The record to create */
  queue: CreateQueue;
};

export type CreateOneStaffInput = {
  /** The record to create */
  staff: CreateStaff;
};

export type CreateQueue = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  currentNumber?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type CreateStaff = {
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
  isAccepted?: InputMaybe<Scalars["Boolean"]>;
  loan?: InputMaybe<Scalars["Float"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phoneNo?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type Customer = {
  __typename?: "Customer";
  active?: Maybe<Scalars["Boolean"]>;
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  password: Scalars["String"];
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerAggregateGroupBy = {
  __typename?: "CustomerAggregateGroupBy";
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerAvgAggregate = {
  __typename?: "CustomerAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerConnection = {
  __typename?: "CustomerConnection";
  /** Array of nodes. */
  nodes: Array<Customer>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type CustomerCountAggregate = {
  __typename?: "CustomerCountAggregate";
  active?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  password?: Maybe<Scalars["Int"]>;
  phoneNo?: Maybe<Scalars["Int"]>;
  thumbnail?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type CustomerDeleteFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<CustomerDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerDeleteFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CustomerDeleteResponse = {
  __typename?: "CustomerDeleteResponse";
  active?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<CustomerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CustomerMaxAggregate = {
  __typename?: "CustomerMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerMinAggregate = {
  __typename?: "CustomerMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  thumbnail?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotification = {
  __typename?: "CustomerNotification";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotificationAggregateGroupBy = {
  __typename?: "CustomerNotificationAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotificationAvgAggregate = {
  __typename?: "CustomerNotificationAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotificationConnection = {
  __typename?: "CustomerNotificationConnection";
  /** Array of nodes. */
  nodes: Array<CustomerNotification>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type CustomerNotificationCountAggregate = {
  __typename?: "CustomerNotificationCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type CustomerNotificationDeleteFilter = {
  and?: InputMaybe<Array<CustomerNotificationDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerNotificationDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CustomerNotificationDeleteResponse = {
  __typename?: "CustomerNotificationDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotificationFilter = {
  and?: InputMaybe<Array<CustomerNotificationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerNotificationFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CustomerNotificationMaxAggregate = {
  __typename?: "CustomerNotificationMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotificationMinAggregate = {
  __typename?: "CustomerNotificationMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotificationSort = {
  direction: SortDirection;
  field: CustomerNotificationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CustomerNotificationSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type CustomerNotificationSumAggregate = {
  __typename?: "CustomerNotificationSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerNotificationUpdateFilter = {
  and?: InputMaybe<Array<CustomerNotificationUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerNotificationUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type CustomerSort = {
  direction: SortDirection;
  field: CustomerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CustomerSortFields {
  Active = "active",
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Email = "email",
  Id = "id",
  Name = "name",
  Password = "password",
  PhoneNo = "phoneNo",
  Thumbnail = "thumbnail",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type CustomerSumAggregate = {
  __typename?: "CustomerSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type CustomerUpdateFilter = {
  active?: InputMaybe<BooleanFieldComparison>;
  and?: InputMaybe<Array<CustomerUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CustomerUpdateFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  thumbnail?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
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

export type DeleteManyCounter_TypesInput = {
  /** Filter to find records to delete */
  filter: Counter_TypeDeleteFilter;
};

export type DeleteManyCountersInput = {
  /** Filter to find records to delete */
  filter: CounterDeleteFilter;
};

export type DeleteManyCustomerNotificationsInput = {
  /** Filter to find records to delete */
  filter: CustomerNotificationDeleteFilter;
};

export type DeleteManyCustomersInput = {
  /** Filter to find records to delete */
  filter: CustomerDeleteFilter;
};

export type DeleteManyDepartmentsInput = {
  /** Filter to find records to delete */
  filter: DepartmentDeleteFilter;
};

export type DeleteManyNotificationsInput = {
  /** Filter to find records to delete */
  filter: NotificationDeleteFilter;
};

export type DeleteManyQueuesInput = {
  /** Filter to find records to delete */
  filter: QueueDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: "DeleteManyResponse";
  /** The number of records deleted. */
  deletedCount: Scalars["Int"];
};

export type DeleteManyStaffInput = {
  /** Filter to find records to delete */
  filter: StaffDeleteFilter;
};

export type DeleteOneAdminInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneCounterInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneCounter_TypeInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneCustomerInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneCustomerNotificationInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneDepartmentInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneNotificationInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneQueueInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type DeleteOneStaffInput = {
  /** The id of the record to delete. */
  id: Scalars["String"];
};

export type Department = {
  __typename?: "Department";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DepartmentAggregateGroupBy = {
  __typename?: "DepartmentAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DepartmentAvgAggregate = {
  __typename?: "DepartmentAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DepartmentConnection = {
  __typename?: "DepartmentConnection";
  /** Array of nodes. */
  nodes: Array<Department>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type DepartmentCountAggregate = {
  __typename?: "DepartmentCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type DepartmentDeleteFilter = {
  and?: InputMaybe<Array<DepartmentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DepartmentDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type DepartmentDeleteResponse = {
  __typename?: "DepartmentDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DepartmentFilter = {
  and?: InputMaybe<Array<DepartmentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DepartmentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type DepartmentMaxAggregate = {
  __typename?: "DepartmentMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DepartmentMinAggregate = {
  __typename?: "DepartmentMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DepartmentSort = {
  direction: SortDirection;
  field: DepartmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum DepartmentSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type DepartmentSumAggregate = {
  __typename?: "DepartmentSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type DepartmentUpdateFilter = {
  and?: InputMaybe<Array<DepartmentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<DepartmentUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type MeUpdate = {
  active?: InputMaybe<Scalars["Boolean"]>;
  email?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phoneNo?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createManyAdmins: Array<Admin>;
  createManyCounter_types: Array<Counter_Type>;
  createManyCounters: Array<Counter>;
  createManyCustomerNotifications: Array<CustomerNotification>;
  createManyCustomers: Array<Customer>;
  createManyDepartments: Array<Department>;
  createManyNotifications: Array<Notification>;
  createManyQueues: Array<Queue>;
  createManyStaff: Array<Staff>;
  createOneAdmin: Admin;
  createOneCounter: Counter;
  createOneCounter_type: Counter_Type;
  createOneCustomer: Customer;
  createOneCustomerNotification: CustomerNotification;
  createOneDepartment: Department;
  createOneNotification: Notification;
  createOneQueue: Queue;
  createOneStaff: Staff;
  deleteManyAdmins: DeleteManyResponse;
  deleteManyCounter_types: DeleteManyResponse;
  deleteManyCounters: DeleteManyResponse;
  deleteManyCustomerNotifications: DeleteManyResponse;
  deleteManyCustomers: DeleteManyResponse;
  deleteManyDepartments: DeleteManyResponse;
  deleteManyNotifications: DeleteManyResponse;
  deleteManyQueues: DeleteManyResponse;
  deleteManyStaff: DeleteManyResponse;
  deleteOneAdmin: AdminDeleteResponse;
  deleteOneCounter: CounterDeleteResponse;
  deleteOneCounter_type: Counter_TypeDeleteResponse;
  deleteOneCustomer: CustomerDeleteResponse;
  deleteOneCustomerNotification: CustomerNotificationDeleteResponse;
  deleteOneDepartment: DepartmentDeleteResponse;
  deleteOneNotification: NotificationDeleteResponse;
  deleteOneQueue: QueueDeleteResponse;
  deleteOneStaff: StaffDeleteResponse;
  updateManyAdmins: UpdateManyResponse;
  updateManyCounter_types: UpdateManyResponse;
  updateManyCounters: UpdateManyResponse;
  updateManyCustomerNotifications: UpdateManyResponse;
  updateManyCustomers: UpdateManyResponse;
  updateManyDepartments: UpdateManyResponse;
  updateManyNotifications: UpdateManyResponse;
  updateManyQueues: UpdateManyResponse;
  updateManyStaff: UpdateManyResponse;
  updateMe: Admin;
  updateOneAdmin: Admin;
  updateOneCounter: Counter;
  updateOneCounter_type: Counter_Type;
  updateOneCustomer: Customer;
  updateOneCustomerNotification: CustomerNotification;
  updateOneDepartment: Department;
  updateOneNotification: Notification;
  updateOneQueue: Queue;
  updateOneStaff: Staff;
};

export type MutationCreateManyAdminsArgs = {
  input: CreateManyAdminsInput;
};

export type MutationCreateManyCounter_TypesArgs = {
  input: CreateManyCounter_TypesInput;
};

export type MutationCreateManyCountersArgs = {
  input: CreateManyCountersInput;
};

export type MutationCreateManyCustomerNotificationsArgs = {
  input: CreateManyCustomerNotificationsInput;
};

export type MutationCreateManyCustomersArgs = {
  input: CreateManyCustomersInput;
};

export type MutationCreateManyDepartmentsArgs = {
  input: CreateManyDepartmentsInput;
};

export type MutationCreateManyNotificationsArgs = {
  input: CreateManyNotificationsInput;
};

export type MutationCreateManyQueuesArgs = {
  input: CreateManyQueuesInput;
};

export type MutationCreateManyStaffArgs = {
  input: CreateManyStaffInput;
};

export type MutationCreateOneAdminArgs = {
  input: CreateOneAdminInput;
};

export type MutationCreateOneCounterArgs = {
  input: CreateOneCounterInput;
};

export type MutationCreateOneCounter_TypeArgs = {
  input: CreateOneCounter_TypeInput;
};

export type MutationCreateOneCustomerArgs = {
  input: CreateOneCustomerInput;
};

export type MutationCreateOneCustomerNotificationArgs = {
  input: CreateOneCustomerNotificationInput;
};

export type MutationCreateOneDepartmentArgs = {
  input: CreateOneDepartmentInput;
};

export type MutationCreateOneNotificationArgs = {
  input: CreateOneNotificationInput;
};

export type MutationCreateOneQueueArgs = {
  input: CreateOneQueueInput;
};

export type MutationCreateOneStaffArgs = {
  input: CreateOneStaffInput;
};

export type MutationDeleteManyAdminsArgs = {
  input: DeleteManyAdminsInput;
};

export type MutationDeleteManyCounter_TypesArgs = {
  input: DeleteManyCounter_TypesInput;
};

export type MutationDeleteManyCountersArgs = {
  input: DeleteManyCountersInput;
};

export type MutationDeleteManyCustomerNotificationsArgs = {
  input: DeleteManyCustomerNotificationsInput;
};

export type MutationDeleteManyCustomersArgs = {
  input: DeleteManyCustomersInput;
};

export type MutationDeleteManyDepartmentsArgs = {
  input: DeleteManyDepartmentsInput;
};

export type MutationDeleteManyNotificationsArgs = {
  input: DeleteManyNotificationsInput;
};

export type MutationDeleteManyQueuesArgs = {
  input: DeleteManyQueuesInput;
};

export type MutationDeleteManyStaffArgs = {
  input: DeleteManyStaffInput;
};

export type MutationDeleteOneAdminArgs = {
  input: DeleteOneAdminInput;
};

export type MutationDeleteOneCounterArgs = {
  input: DeleteOneCounterInput;
};

export type MutationDeleteOneCounter_TypeArgs = {
  input: DeleteOneCounter_TypeInput;
};

export type MutationDeleteOneCustomerArgs = {
  input: DeleteOneCustomerInput;
};

export type MutationDeleteOneCustomerNotificationArgs = {
  input: DeleteOneCustomerNotificationInput;
};

export type MutationDeleteOneDepartmentArgs = {
  input: DeleteOneDepartmentInput;
};

export type MutationDeleteOneNotificationArgs = {
  input: DeleteOneNotificationInput;
};

export type MutationDeleteOneQueueArgs = {
  input: DeleteOneQueueInput;
};

export type MutationDeleteOneStaffArgs = {
  input: DeleteOneStaffInput;
};

export type MutationUpdateManyAdminsArgs = {
  input: UpdateManyAdminsInput;
};

export type MutationUpdateManyCounter_TypesArgs = {
  input: UpdateManyCounter_TypesInput;
};

export type MutationUpdateManyCountersArgs = {
  input: UpdateManyCountersInput;
};

export type MutationUpdateManyCustomerNotificationsArgs = {
  input: UpdateManyCustomerNotificationsInput;
};

export type MutationUpdateManyCustomersArgs = {
  input: UpdateManyCustomersInput;
};

export type MutationUpdateManyDepartmentsArgs = {
  input: UpdateManyDepartmentsInput;
};

export type MutationUpdateManyNotificationsArgs = {
  input: UpdateManyNotificationsInput;
};

export type MutationUpdateManyQueuesArgs = {
  input: UpdateManyQueuesInput;
};

export type MutationUpdateManyStaffArgs = {
  input: UpdateManyStaffInput;
};

export type MutationUpdateMeArgs = {
  input: MeUpdate;
};

export type MutationUpdateOneAdminArgs = {
  input: UpdateOneAdminInput;
};

export type MutationUpdateOneCounterArgs = {
  input: UpdateOneCounterInput;
};

export type MutationUpdateOneCounter_TypeArgs = {
  input: UpdateOneCounter_TypeInput;
};

export type MutationUpdateOneCustomerArgs = {
  input: UpdateOneCustomerInput;
};

export type MutationUpdateOneCustomerNotificationArgs = {
  input: UpdateOneCustomerNotificationInput;
};

export type MutationUpdateOneDepartmentArgs = {
  input: UpdateOneDepartmentInput;
};

export type MutationUpdateOneNotificationArgs = {
  input: UpdateOneNotificationInput;
};

export type MutationUpdateOneQueueArgs = {
  input: UpdateOneQueueInput;
};

export type MutationUpdateOneStaffArgs = {
  input: UpdateOneStaffInput;
};

export type Notification = {
  __typename?: "Notification";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type NotificationAggregateGroupBy = {
  __typename?: "NotificationAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type NotificationAvgAggregate = {
  __typename?: "NotificationAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type NotificationConnection = {
  __typename?: "NotificationConnection";
  /** Array of nodes. */
  nodes: Array<Notification>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type NotificationCountAggregate = {
  __typename?: "NotificationCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  message?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type NotificationDeleteFilter = {
  and?: InputMaybe<Array<NotificationDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<NotificationDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type NotificationDeleteResponse = {
  __typename?: "NotificationDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type NotificationFilter = {
  and?: InputMaybe<Array<NotificationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<NotificationFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type NotificationMaxAggregate = {
  __typename?: "NotificationMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type NotificationMinAggregate = {
  __typename?: "NotificationMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type NotificationSort = {
  direction: SortDirection;
  field: NotificationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum NotificationSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Message = "message",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type NotificationSumAggregate = {
  __typename?: "NotificationSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type NotificationUpdateFilter = {
  and?: InputMaybe<Array<NotificationUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  message?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<NotificationUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
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
  admin?: Maybe<Admin>;
  admins: AdminConnection;
  counter?: Maybe<Counter>;
  counter_type?: Maybe<Counter_Type>;
  counter_types: Counter_TypeConnection;
  counters: CounterConnection;
  customer?: Maybe<Customer>;
  customerNotification?: Maybe<CustomerNotification>;
  customerNotifications: CustomerNotificationConnection;
  customers: CustomerConnection;
  department?: Maybe<Department>;
  departments: DepartmentConnection;
  getEmployeeMe: Staff;
  getMe: Admin;
  notification?: Maybe<Notification>;
  notifications: NotificationConnection;
  queue?: Maybe<Queue>;
  queues: QueueConnection;
  staff: StaffConnection;
};

export type QueryAdminArgs = {
  id: Scalars["String"];
};

export type QueryAdminsArgs = {
  filter?: InputMaybe<AdminFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<AdminSort>>;
};

export type QueryCounterArgs = {
  id: Scalars["String"];
};

export type QueryCounter_TypeArgs = {
  id: Scalars["String"];
};

export type QueryCounter_TypesArgs = {
  filter?: InputMaybe<Counter_TypeFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<Counter_TypeSort>>;
};

export type QueryCountersArgs = {
  filter?: InputMaybe<CounterFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CounterSort>>;
};

export type QueryCustomerArgs = {
  id: Scalars["String"];
};

export type QueryCustomerNotificationArgs = {
  id: Scalars["String"];
};

export type QueryCustomerNotificationsArgs = {
  filter?: InputMaybe<CustomerNotificationFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CustomerNotificationSort>>;
};

export type QueryCustomersArgs = {
  filter?: InputMaybe<CustomerFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<CustomerSort>>;
};

export type QueryDepartmentArgs = {
  id: Scalars["String"];
};

export type QueryDepartmentsArgs = {
  filter?: InputMaybe<DepartmentFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<DepartmentSort>>;
};

export type QueryNotificationArgs = {
  id: Scalars["String"];
};

export type QueryNotificationsArgs = {
  filter?: InputMaybe<NotificationFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<NotificationSort>>;
};

export type QueryQueueArgs = {
  id: Scalars["String"];
};

export type QueryQueuesArgs = {
  filter?: InputMaybe<QueueFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<QueueSort>>;
};

export type QueryStaffArgs = {
  filter?: InputMaybe<StaffFilter>;
  paging?: InputMaybe<OffsetPaging>;
  sorting?: InputMaybe<Array<StaffSort>>;
};

export type QueueConnection = {
  __typename?: "QueueConnection";
  /** Array of nodes. */
  nodes: Array<Queue>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type QueueDeleteResponse = {
  __typename?: "QueueDeleteResponse";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  currentNumber?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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

export type Staff = {
  __typename?: "Staff";
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
  isAccepted?: Maybe<Scalars["Boolean"]>;
  loan?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type StaffAggregateGroupBy = {
  __typename?: "StaffAggregateGroupBy";
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
  isAccepted?: Maybe<Scalars["Boolean"]>;
  loan?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type StaffAvgAggregate = {
  __typename?: "StaffAvgAggregate";
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

export type StaffConnection = {
  __typename?: "StaffConnection";
  /** Array of nodes. */
  nodes: Array<Staff>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars["Int"];
};

export type StaffCountAggregate = {
  __typename?: "StaffCountAggregate";
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
  isAccepted?: Maybe<Scalars["Int"]>;
  loan?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  password?: Maybe<Scalars["Int"]>;
  phoneNo?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type StaffDeleteFilter = {
  accountNo?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<StaffDeleteFilter>>;
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
  isAccepted?: InputMaybe<BooleanFieldComparison>;
  loan?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StaffDeleteFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type StaffDeleteResponse = {
  __typename?: "StaffDeleteResponse";
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
  isAccepted?: Maybe<Scalars["Boolean"]>;
  loan?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type StaffFilter = {
  accountNo?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<StaffFilter>>;
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
  isAccepted?: InputMaybe<BooleanFieldComparison>;
  loan?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StaffFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type StaffMaxAggregate = {
  __typename?: "StaffMaxAggregate";
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
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type StaffMinAggregate = {
  __typename?: "StaffMinAggregate";
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
  password?: Maybe<Scalars["String"]>;
  phoneNo?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type StaffSort = {
  direction: SortDirection;
  field: StaffSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum StaffSortFields {
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
  IsAccepted = "isAccepted",
  Loan = "loan",
  Name = "name",
  Password = "password",
  PhoneNo = "phoneNo",
  Type = "type",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type StaffSumAggregate = {
  __typename?: "StaffSumAggregate";
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

export type StaffUpdateFilter = {
  accountNo?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<StaffUpdateFilter>>;
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
  isAccepted?: InputMaybe<BooleanFieldComparison>;
  loan?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<StaffUpdateFilter>>;
  password?: InputMaybe<StringFieldComparison>;
  phoneNo?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

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

export type UpdateAdminInput = {
  active: Scalars["Boolean"];
  email: Scalars["String"];
  name: Scalars["String"];
  password?: InputMaybe<Scalars["String"]>;
  phoneNo: Scalars["String"];
  thumbnail?: InputMaybe<Scalars["Upload"]>;
};

export type UpdateCounter = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["Float"]>;
  type?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateCounter_Type = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateCustomerInput = {
  active: Scalars["Boolean"];
  email: Scalars["String"];
  name: Scalars["String"];
  password?: InputMaybe<Scalars["String"]>;
  phoneNo: Scalars["String"];
  thumbnail: Scalars["Upload"];
};

export type UpdateCustomerNotification = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateDepartment = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateManyAdminsInput = {
  /** Filter used to find fields to update */
  filter: AdminUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateAdminInput;
};

export type UpdateManyCounter_TypesInput = {
  /** Filter used to find fields to update */
  filter: Counter_TypeUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCounter_Type;
};

export type UpdateManyCountersInput = {
  /** Filter used to find fields to update */
  filter: CounterUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCounter;
};

export type UpdateManyCustomerNotificationsInput = {
  /** Filter used to find fields to update */
  filter: CustomerNotificationUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCustomerNotification;
};

export type UpdateManyCustomersInput = {
  /** Filter used to find fields to update */
  filter: CustomerUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCustomerInput;
};

export type UpdateManyDepartmentsInput = {
  /** Filter used to find fields to update */
  filter: DepartmentUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateDepartment;
};

export type UpdateManyNotificationsInput = {
  /** Filter used to find fields to update */
  filter: NotificationUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateNotification;
};

export type UpdateManyQueuesInput = {
  /** Filter used to find fields to update */
  filter: QueueUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateQueue;
};

export type UpdateManyResponse = {
  __typename?: "UpdateManyResponse";
  /** The number of records updated. */
  updatedCount: Scalars["Int"];
};

export type UpdateManyStaffInput = {
  /** Filter used to find fields to update */
  filter: StaffUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateStaff;
};

export type UpdateNotification = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  message?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateOneAdminInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateAdminInput;
};

export type UpdateOneCounterInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateCounter;
};

export type UpdateOneCounter_TypeInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateCounter_Type;
};

export type UpdateOneCustomerInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateCustomerInput;
};

export type UpdateOneCustomerNotificationInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateCustomerNotification;
};

export type UpdateOneDepartmentInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateDepartment;
};

export type UpdateOneNotificationInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateNotification;
};

export type UpdateOneQueueInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateQueue;
};

export type UpdateOneStaffInput = {
  /** The id of the record to update */
  id: Scalars["String"];
  /** The update to apply. */
  update: UpdateStaff;
};

export type UpdateQueue = {
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  createdBy?: InputMaybe<Scalars["Float"]>;
  currentNumber?: InputMaybe<Scalars["Float"]>;
  deletedAt?: InputMaybe<Scalars["DateTime"]>;
  deletedBy?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["Float"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type UpdateStaff = {
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
  isAccepted?: InputMaybe<Scalars["Boolean"]>;
  loan?: InputMaybe<Scalars["Float"]>;
  name?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  phoneNo?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  updatedBy?: InputMaybe<Scalars["Float"]>;
};

export type Counter_Type = {
  __typename?: "counter_type";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type Counter_TypeAggregateGroupBy = {
  __typename?: "counter_typeAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type Counter_TypeAvgAggregate = {
  __typename?: "counter_typeAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type Counter_TypeCountAggregate = {
  __typename?: "counter_typeCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type Counter_TypeDeleteFilter = {
  and?: InputMaybe<Array<Counter_TypeDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<Counter_TypeDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Counter_TypeFilter = {
  and?: InputMaybe<Array<Counter_TypeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<Counter_TypeFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Counter_TypeMaxAggregate = {
  __typename?: "counter_typeMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type Counter_TypeMinAggregate = {
  __typename?: "counter_typeMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type Counter_TypeSort = {
  direction: SortDirection;
  field: Counter_TypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum Counter_TypeSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type Counter_TypeSumAggregate = {
  __typename?: "counter_typeSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type Counter_TypeUpdateFilter = {
  and?: InputMaybe<Array<Counter_TypeUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<Counter_TypeUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type Queue = {
  __typename?: "queue";
  createdAt: Scalars["DateTime"];
  createdBy?: Maybe<Scalars["Float"]>;
  currentNumber?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id: Scalars["String"];
  number?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type QueueAggregateGroupBy = {
  __typename?: "queueAggregateGroupBy";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  currentNumber?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type QueueAvgAggregate = {
  __typename?: "queueAvgAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  currentNumber?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type QueueCountAggregate = {
  __typename?: "queueCountAggregate";
  createdAt?: Maybe<Scalars["Int"]>;
  createdBy?: Maybe<Scalars["Int"]>;
  currentNumber?: Maybe<Scalars["Int"]>;
  deletedAt?: Maybe<Scalars["Int"]>;
  deletedBy?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  number?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["Int"]>;
  updatedBy?: Maybe<Scalars["Int"]>;
};

export type QueueDeleteFilter = {
  and?: InputMaybe<Array<QueueDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  currentNumber?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  number?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QueueDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type QueueFilter = {
  and?: InputMaybe<Array<QueueFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  currentNumber?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  number?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QueueFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type QueueMaxAggregate = {
  __typename?: "queueMaxAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  currentNumber?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type QueueMinAggregate = {
  __typename?: "queueMinAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  createdBy?: Maybe<Scalars["Float"]>;
  currentNumber?: Maybe<Scalars["Float"]>;
  deletedAt?: Maybe<Scalars["DateTime"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type QueueSort = {
  direction: SortDirection;
  field: QueueSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum QueueSortFields {
  CreatedAt = "createdAt",
  CreatedBy = "createdBy",
  CurrentNumber = "currentNumber",
  DeletedAt = "deletedAt",
  DeletedBy = "deletedBy",
  Id = "id",
  Number = "number",
  UpdatedAt = "updatedAt",
  UpdatedBy = "updatedBy",
}

export type QueueSumAggregate = {
  __typename?: "queueSumAggregate";
  createdBy?: Maybe<Scalars["Float"]>;
  currentNumber?: Maybe<Scalars["Float"]>;
  deletedBy?: Maybe<Scalars["Float"]>;
  number?: Maybe<Scalars["Float"]>;
  updatedBy?: Maybe<Scalars["Float"]>;
};

export type QueueUpdateFilter = {
  and?: InputMaybe<Array<QueueUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  createdBy?: InputMaybe<NumberFieldComparison>;
  currentNumber?: InputMaybe<NumberFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  deletedBy?: InputMaybe<NumberFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  number?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<QueueUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  updatedBy?: InputMaybe<NumberFieldComparison>;
};

export type AdminsFieldsFragment = {
  __typename?: "Admin";
  id: string;
  name?: string | null;
  email?: string | null;
  thumbnail?: string | null;
  active?: boolean | null;
  phoneNo?: string | null;
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
      id: string;
      name?: string | null;
      email?: string | null;
      thumbnail?: string | null;
      active?: boolean | null;
      phoneNo?: string | null;
    }>;
  };
};

export type GetAdminQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetAdminQuery = {
  __typename?: "Query";
  admin?: {
    __typename?: "Admin";
    id: string;
    name?: string | null;
    email?: string | null;
    thumbnail?: string | null;
    active?: boolean | null;
    phoneNo?: string | null;
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

export type MeFieldsFragment = {
  __typename?: "Admin";
  id: string;
  name?: string | null;
  email?: string | null;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never }>;

export type GetMeQuery = {
  __typename?: "Query";
  getMe: {
    __typename?: "Admin";
    id: string;
    name?: string | null;
    email?: string | null;
  };
};

export type UpdateMeMutationVariables = Exact<{
  input: MeUpdate;
}>;

export type UpdateMeMutation = {
  __typename?: "Mutation";
  updateMe: { __typename?: "Admin"; createdAt: any };
};

export const AdminsFieldsFragmentDoc = gql`
  fragment AdminsFields on Admin {
    id
    name
    email
    thumbnail
    active
    phoneNo
  }
`;
export const MeFieldsFragmentDoc = gql`
  fragment MeFields on Admin {
    id
    name
    email
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
        ...AdminsFields
      }
    }
  }
  ${AdminsFieldsFragmentDoc}
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
export const GetAdminDocument = gql`
  query getAdmin($id: String!) {
    admin(id: $id) {
      ...AdminsFields
    }
  }
  ${AdminsFieldsFragmentDoc}
`;

/**
 * __useGetAdminQuery__
 *
 * To run a query within a React component, call `useGetAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAdminQuery(
  baseOptions: Apollo.QueryHookOptions<GetAdminQuery, GetAdminQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAdminQuery, GetAdminQueryVariables>(
    GetAdminDocument,
    options
  );
}
export function useGetAdminLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminQuery,
    GetAdminQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAdminQuery, GetAdminQueryVariables>(
    GetAdminDocument,
    options
  );
}
export type GetAdminQueryHookResult = ReturnType<typeof useGetAdminQuery>;
export type GetAdminLazyQueryHookResult = ReturnType<
  typeof useGetAdminLazyQuery
>;
export type GetAdminQueryResult = Apollo.QueryResult<
  GetAdminQuery,
  GetAdminQueryVariables
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
export const UpdateMeDocument = gql`
  mutation updateMe($input: MeUpdate!) {
    updateMe(input: $input) {
      createdAt
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
