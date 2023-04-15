/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AddressMain = {
  __typename?: 'AddressMain'
  address1?: Maybe<Scalars['String']>
  address2?: Maybe<Scalars['String']>
  city?: Maybe<SourceAddress>
  cityId?: Maybe<Scalars['Int']>
  cityString?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  district?: Maybe<SourceAddress>
  districtId?: Maybe<Scalars['Int']>
  districtString?: Maybe<Scalars['String']>
  id: Scalars['ID']
  state?: Maybe<SourceAddress>
  stateId?: Maybe<Scalars['Int']>
  stateString?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type AddressMainUpsertInput = {
  address1?: InputMaybe<Scalars['String']>
  address2?: InputMaybe<Scalars['String']>
  cityId?: InputMaybe<Scalars['Int']>
  cityString?: InputMaybe<Scalars['String']>
  countryCode?: InputMaybe<Scalars['String']>
  districtId?: InputMaybe<Scalars['Int']>
  districtString?: InputMaybe<Scalars['String']>
  latitude?: InputMaybe<Scalars['Float']>
  longitude?: InputMaybe<Scalars['Float']>
  stateId?: InputMaybe<Scalars['Int']>
  stateString?: InputMaybe<Scalars['String']>
}

export type AuthResetPasswordInput = {
  countryCode?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type AuthUserType = {
  __typename?: 'AuthUserType'
  countryCode?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  role: UserRoleEnum
  updatedAt?: Maybe<Scalars['DateTime']>
  userHost?: Maybe<UserHost>
}

export type AuthVerifyTokenInput = {
  code: Scalars['String']
  countryCode?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type AuthVerifyTokenSenderInput = {
  countryCode?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type AuthVerifyTokenType = {
  __typename?: 'AuthVerifyTokenType'
  accessToken?: Maybe<Scalars['String']>
  isEmailConfirmed?: Maybe<Scalars['Boolean']>
  isPhoneConfirmed?: Maybe<Scalars['Boolean']>
  refreshToken?: Maybe<Scalars['String']>
}

export type Client = {
  __typename?: 'Client'
  Address?: Maybe<AddressMain>
  Company?: Maybe<Company>
  addressId?: Maybe<Scalars['String']>
  busStation?: Maybe<Scalars['String']>
  companyId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdUserId?: Maybe<Scalars['String']>
  detail?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  phoneNumber?: Maybe<Scalars['String']>
  receiveEmailCV?: Maybe<Scalars['Boolean']>
  status?: Maybe<ClientStatusEnum>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedUserId?: Maybe<Scalars['String']>
}

export type ClientBillingInfo = {
  __typename?: 'ClientBillingInfo'
  Address?: Maybe<AddressMain>
  chargePersonName?: Maybe<Scalars['String']>
  clientId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdUserId?: Maybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  phoneNumber: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedUserId?: Maybe<Scalars['String']>
}

export type ClientBillingInfoUpsertInput = {
  Address?: InputMaybe<AddressMainUpsertInput>
  chargePersonName?: InputMaybe<Scalars['String']>
  clientId?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  phoneNumber: Scalars['String']
}

export type ClientBillingInfoWhereInput = {
  clientId?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['Boolean']>
}

export type ClientConnectionType = {
  __typename?: 'ClientConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<Client>>
}

export type ClientCreateInput = {
  Address: AddressMainUpsertInput
  busStation?: InputMaybe<Scalars['String']>
  chargePersonEmail?: InputMaybe<Scalars['String']>
  chargePersonName?: InputMaybe<Scalars['String']>
  chargePersonPhone?: InputMaybe<Scalars['String']>
  companyId: Scalars['String']
  createdUserId?: InputMaybe<Scalars['String']>
  detail?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  phoneNumber?: InputMaybe<Scalars['String']>
  receiveEmailCV?: InputMaybe<Scalars['Boolean']>
  status?: InputMaybe<ClientStatusEnum>
  updatedUserId?: InputMaybe<Scalars['String']>
}

export type ClientDailyPayment = {
  __typename?: 'ClientDailyPayment'
  clientId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdUserId?: Maybe<Scalars['String']>
  dailyCheck: Scalars['Boolean']
  feeCycleTimeDaily?: Maybe<FeeMethodCycleEnum>
  feeMethod?: Maybe<FeeMethodEnum>
  id: Scalars['Int']
  incomeTax?: Maybe<Scalars['Int']>
  isCompanySettingSame: Scalars['Boolean']
  payMethod?: Maybe<PayMethodEnum>
  serviceFeeRate?: Maybe<Scalars['Int']>
  serviceTax?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedUserId?: Maybe<Scalars['String']>
  vat?: Maybe<Scalars['Int']>
}

export type ClientDailyPaymentUpsertInput = {
  clientId?: InputMaybe<Scalars['String']>
  dailyCheck: Scalars['Boolean']
  feeCycleTimeDaily?: InputMaybe<FeeMethodCycleEnum>
  feeMethod?: InputMaybe<FeeMethodEnum>
  id: Scalars['Int']
  incomeTax?: InputMaybe<Scalars['Int']>
  isCompanySettingSame: Scalars['Boolean']
  payMethod?: InputMaybe<PayMethodEnum>
  serviceFeeRate?: InputMaybe<Scalars['Int']>
  serviceTax?: InputMaybe<Scalars['Int']>
  vat?: InputMaybe<Scalars['Int']>
}

export type ClientDailyPaymentWhereInput = {
  clientId?: InputMaybe<Scalars['String']>
  feeCycleTimeDaily?: InputMaybe<FeeMethodCycleEnum>
  feeMethod?: InputMaybe<FeeMethodEnum>
  id?: InputMaybe<Scalars['Int']>
  payMethod?: InputMaybe<PayMethodEnum>
  search?: InputMaybe<Scalars['String']>
}

export type ClientOrderByInput = {
  chargePersonEmail?: InputMaybe<SortOrder>
  chargePersonName?: InputMaybe<SortOrder>
  chargePersonPhone?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  phoneNumber?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ClientStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Stopped = 'STOPPED'
}

export type ClientUser = {
  __typename?: 'ClientUser'
  Client?: Maybe<Client>
  User?: Maybe<User>
  clientId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdUserId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedUserId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

export type ClientUserConnectionType = {
  __typename?: 'ClientUserConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<ClientUser>>
}

export enum ClientUserEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ClientWhereInput = {
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  status?: InputMaybe<ClientStatusEnum>
}

export type Company = {
  __typename?: 'Company'
  Address?: Maybe<AddressMain>
  Industries?: Maybe<Array<SourceIndustry>>
  _count?: Maybe<Company_Count>
  agencyNumber?: Maybe<Scalars['String']>
  agencyType?: Maybe<Scalars['Boolean']>
  busStation?: Maybe<Scalars['String']>
  chargePersonEmail?: Maybe<Scalars['String']>
  chargePersonName?: Maybe<Scalars['String']>
  chargePersonPhone?: Maybe<Scalars['String']>
  chargePersonPosition?: Maybe<Scalars['String']>
  companyId: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  createdUserId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  employeesNumber?: Maybe<CompanyEmployeesNumberEnum>
  establishedYear?: Maybe<Scalars['Int']>
  fax?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  name: Scalars['String']
  phoneCode?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  receiveEmailCV?: Maybe<Scalars['Boolean']>
  registerNumber?: Maybe<Scalars['String']>
  status?: Maybe<CompanyStatusEnum>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedUserId?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export enum CompanyApiPermissionStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Pending = 'PENDING'
}

export type CompanyConnectionType = {
  __typename?: 'CompanyConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<Company>>
}

export enum CompanyEmployeesNumberEnum {
  Eleven = 'ELEVEN',
  FiftyOne = 'FIFTY_ONE',
  FiveHundredOne = 'FIVE_HUNDRED_ONE',
  HundredOne = 'HUNDRED_ONE',
  MoreThanThousand = 'MORE_THAN_THOUSAND',
  TwentyOne = 'TWENTY_ONE',
  Zero = 'ZERO'
}

export type CompanyOrderByInput = {
  chargePersonEmail?: InputMaybe<SortOrder>
  chargePersonName?: InputMaybe<SortOrder>
  chargePersonPhone?: InputMaybe<SortOrder>
  chargePersonPosition?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  phoneNumber?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum CompanyStatusEnum {
  Active = 'ACTIVE',
  Delete = 'DELETE',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Stopped = 'STOPPED'
}

export enum CompanyTokenStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Expired = 'EXPIRED',
  Stopped = 'STOPPED'
}

export type CompanyUpsertInput = {
  Address?: InputMaybe<AddressMainUpsertInput>
  Industries?: InputMaybe<Array<Scalars['Int']>>
  agencyNumber?: InputMaybe<Scalars['String']>
  agencyType?: InputMaybe<Scalars['Boolean']>
  busStation?: InputMaybe<Scalars['String']>
  chargePersonEmail: Scalars['String']
  chargePersonName: Scalars['String']
  chargePersonPhone: Scalars['String']
  chargePersonPosition?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  employeesNumber?: InputMaybe<CompanyEmployeesNumberEnum>
  establishedYear?: InputMaybe<Scalars['Int']>
  fax?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  image?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  phoneCode?: InputMaybe<Scalars['String']>
  phoneNumber: Scalars['String']
  receiveEmailCV?: InputMaybe<Scalars['Boolean']>
  registerNumber?: InputMaybe<Scalars['String']>
  status?: InputMaybe<CompanyStatusEnum>
  url?: InputMaybe<Scalars['String']>
}

export type CompanyUser = {
  __typename?: 'CompanyUser'
  Company?: Maybe<Company>
  User?: Maybe<User>
  companyId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  createdUserId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedUserId?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
}

export type CompanyUserConnectionType = {
  __typename?: 'CompanyUserConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<CompanyUser>>
}

export enum CompanyUserEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type CompanyWhereInput = {
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  status?: InputMaybe<CompanyStatusEnum>
}

export type Company_Count = {
  __typename?: 'Company_Count'
  Clients?: Maybe<Scalars['Int']>
}

export enum CurrencyEnum {
  Mnt = 'MNT',
  Usd = 'USD'
}

export enum DocumentTypeEnum {
  DriverCard = 'DRIVER_CARD',
  GraduationCertificate = 'GRADUATION_CERTIFICATE',
  IdentificationCard = 'IDENTIFICATION_CARD',
  Other = 'OTHER',
  PoliceReference = 'POLICE_REFERENCE',
  ResidentRegistration = 'RESIDENT_REGISTRATION',
  StudentCard = 'STUDENT_CARD'
}

export enum EducationDegreeEnum {
  Bachelor = 'BACHELOR',
  Doctorate = 'DOCTORATE',
  JuniorCollege = 'JUNIOR_COLLEGE',
  Master = 'MASTER',
  Professional = 'PROFESSIONAL',
  ResearchStudent = 'RESEARCH_STUDENT'
}

export type ExternalAuthAppleInput = {
  email?: InputMaybe<Scalars['String']>
  socialId: Scalars['String']
  socialName: Scalars['String']
}

export type ExternalAuthInput = {
  accessToken: Scalars['String']
}

export type ExternalWebAuthInput = {
  accessToken: Scalars['String']
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
  socialId: Scalars['String']
  socialName?: InputMaybe<Scalars['String']>
  userUid?: InputMaybe<Scalars['String']>
}

export enum FeeCycleTimeSubscriptionEnum {
  One = 'ONE',
  Six = 'SIX',
  Three = 'THREE',
  Twelve = 'TWELVE'
}

export enum FeeMethodCycleEnum {
  After = 'AFTER',
  Before = 'BEFORE',
  Invoice = 'INVOICE'
}

export enum FeeMethodEnum {
  BankTransfer = 'BANK_TRANSFER',
  Cash = 'CASH',
  Onepay = 'ONEPAY',
  Qpay = 'QPAY'
}

export enum FileSizeEnum {
  Medium = 'MEDIUM',
  Small = 'SMALL',
  Thumb = 'THUMB'
}

export enum FormCompanyAgencyTypeEnum {
  Added = 'ADDED',
  Cancel = 'CANCEL',
  Pending = 'PENDING'
}

export enum FormCompanyStatusEnum {
  Added = 'ADDED',
  Cancel = 'CANCEL',
  Pending = 'PENDING'
}

export enum FormJobGenderEnum {
  Both = 'BOTH',
  Female = 'FEMALE',
  Male = 'MALE'
}

export enum FormJobSalaryTypeEnum {
  Daily = 'DAILY',
  Hourly = 'HOURLY',
  Mothly = 'MOTHLY',
  Unit = 'UNIT',
  Yearly = 'YEARLY'
}

export enum FormJobShiftStringEnum {
  Five = 'FIVE',
  Four = 'FOUR',
  One = 'ONE',
  Six = 'SIX',
  Three = 'THREE',
  Two = 'TWO'
}

export enum FormJobStatusEnum {
  Added = 'ADDED',
  Cancel = 'CANCEL',
  Pending = 'PENDING'
}

export enum FormJobTypeEnum {
  Daily = 'DAILY',
  Full = 'FULL',
  Internship = 'INTERNSHIP',
  Part = 'PART',
  Volunteer = 'VOLUNTEER'
}

export enum FormJobUnitEnum {
  Above = 'ABOVE',
  Below = 'BELOW',
  Between = 'BETWEEN'
}

export enum FreelancerProfileStatusEnum {
  Active = 'ACTIVE',
  Contacted = 'CONTACTED',
  Denied = 'DENIED',
  Passed = 'PASSED',
  Published = 'PUBLISHED',
  Selecting = 'SELECTING'
}

export enum FreelancerSalaryTypeEnum {
  Daily = 'DAILY',
  Hourly = 'HOURLY',
  Mothly = 'MOTHLY',
  Unit = 'UNIT',
  Yearly = 'YEARLY'
}

export enum FreelancerTransactionStatusEnum {
  Active = 'ACTIVE',
  Close = 'CLOSE',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Finished = 'FINISHED',
  PaymentPending = 'PAYMENT_PENDING'
}

export enum HostRoleEnum {
  Admin = 'ADMIN',
  ClientAdmin = 'CLIENT_ADMIN',
  ClientFinance = 'CLIENT_FINANCE',
  ClientSales = 'CLIENT_SALES',
  ClientSupport = 'CLIENT_SUPPORT',
  CompanyAdmin = 'COMPANY_ADMIN',
  CompanyFinance = 'COMPANY_FINANCE',
  CompanySales = 'COMPANY_SALES',
  CompanySupport = 'COMPANY_SUPPORT',
  Finance = 'FINANCE',
  Sales = 'SALES',
  Support = 'SUPPORT'
}

export enum HostRoleGroupEnum {
  Admin = 'ADMIN',
  Client = 'CLIENT',
  Company = 'COMPANY'
}

export enum HostStatusEnum {
  Confirmed = 'CONFIRMED',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED'
}

export type Job = {
  __typename?: 'Job'
  Address?: Maybe<AddressMain>
  Attentions?: Maybe<Array<JobAttentionChecked>>
  Category?: Maybe<SourceCategory>
  Industry?: Maybe<SourceIndustry>
  RequiredDocuments?: Maybe<Array<JobRequiredDocument>>
  Salaries?: Maybe<Array<Maybe<JobSalary>>>
  Shifts?: Maybe<Array<JobShift>>
  Translates?: Maybe<Array<JobTranslate>>
  addressId?: Maybe<Scalars['String']>
  ageMax?: Maybe<Scalars['Int']>
  ageMin?: Maybe<Scalars['Int']>
  categoryCode?: Maybe<Scalars['Int']>
  clientId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  createdUserId?: Maybe<Scalars['String']>
  education?: Maybe<JobEducationEnum>
  gender: JobGenderEnum
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  industryCode?: Maybe<Scalars['Int']>
  interview?: Maybe<Scalars['Boolean']>
  jobId: Scalars['String']
  seniorityLevel?: Maybe<JobSeniorityLevelEnum>
  signatureApply?: Maybe<Scalars['Boolean']>
  station?: Maybe<Scalars['String']>
  status?: Maybe<JobStatusEnum>
  type: JobTypeEnum
  updatedAt: Scalars['DateTime']
  updatedUserId?: Maybe<Scalars['String']>
  workExperience?: Maybe<JobWorkExperienceEnum>
}

export enum JobAttendanceManagementEnum {
  Manual = 'MANUAL',
  QrReader = 'QR_READER',
  Report = 'REPORT'
}

export type JobAttentionChecked = {
  __typename?: 'JobAttentionChecked'
  attentionId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  jobId?: Maybe<Scalars['String']>
}

export enum JobEducationEnum {
  Bachelor = 'BACHELOR',
  HighSchool = 'HIGH_SCHOOL',
  Master = 'MASTER',
  Occupational = 'OCCUPATIONAL',
  Phd = 'PHD'
}

export enum JobFeeStatusEnum {
  Error = 'ERROR',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum JobGenderEnum {
  Both = 'BOTH',
  Female = 'FEMALE',
  Male = 'MALE'
}

export type JobGuestWhereInput = {
  categoryCode?: InputMaybe<Scalars['Int']>
  date?: InputMaybe<Scalars['DateTime']>
  id?: InputMaybe<Scalars['String']>
  industryCode?: InputMaybe<Scalars['Int']>
  search?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

export type JobLanguageLevel = {
  __typename?: 'JobLanguageLevel'
  id: Scalars['ID']
  jobId?: Maybe<Scalars['String']>
  languageCode?: Maybe<Scalars['String']>
  languageLevel?: Maybe<JobLanguageLevelEnum>
}

export enum JobLanguageLevelEnum {
  Advanced = 'ADVANCED',
  Elementary = 'ELEMENTARY',
  HighIntermediate = 'HIGH_INTERMEDIATE',
  LowIntermediate = 'LOW_INTERMEDIATE',
  Native = 'NATIVE',
  Proficient = 'PROFICIENT'
}

export enum JobOverTimeEnum {
  Five = 'FIVE',
  Four = 'FOUR',
  MoreThanSix = 'MORE_THAN_SIX',
  One = 'ONE',
  Three = 'THREE',
  Two = 'TWO',
  Zero = 'ZERO'
}

export type JobRequiredDocument = {
  __typename?: 'JobRequiredDocument'
  id: Scalars['ID']
  jobId: Scalars['String']
  name?: Maybe<JobRequiredDocumentEnum>
}

export enum JobRequiredDocumentEnum {
  DriverCard = 'DRIVER_CARD',
  GraduationCertificate = 'GRADUATION_CERTIFICATE',
  IdentificationCard = 'IDENTIFICATION_CARD',
  PoliceReference = 'POLICE_REFERENCE',
  ResidentRegistration = 'RESIDENT_REGISTRATION',
  Resume = 'RESUME',
  StudentCard = 'STUDENT_CARD'
}

export type JobRequiredDocumentUpsertInput = {
  id?: InputMaybe<Scalars['String']>
  jobId?: InputMaybe<Scalars['String']>
  name?: InputMaybe<JobRequiredDocumentEnum>
}

export type JobSalary = {
  __typename?: 'JobSalary'
  amount: Scalars['Int']
  attendanceManagement?: Maybe<JobAttendanceManagementEnum>
  currency?: Maybe<CurrencyEnum>
  id: Scalars['ID']
  jobId?: Maybe<Scalars['String']>
  payType?: Maybe<Scalars['String']>
  salaryType?: Maybe<JobSalaryTypeEnum>
  transportation?: Maybe<Scalars['Boolean']>
  transportationFee?: Maybe<Scalars['Int']>
  unit?: Maybe<JobUnitEnum>
  unitAmount?: Maybe<Scalars['Int']>
}

export enum JobSalaryTypeEnum {
  Daily = 'DAILY',
  Hourly = 'HOURLY',
  Mothly = 'MOTHLY',
  Unit = 'UNIT',
  Yearly = 'YEARLY'
}

export type JobSalaryUpsertInput = {
  amount: Scalars['Int']
  attendanceManagement?: InputMaybe<JobAttendanceManagementEnum>
  currency?: InputMaybe<CurrencyEnum>
  id?: InputMaybe<Scalars['String']>
  jobId?: InputMaybe<Scalars['String']>
  payType?: InputMaybe<Scalars['String']>
  salaryType?: InputMaybe<JobSalaryTypeEnum>
  transportation?: InputMaybe<Scalars['Boolean']>
  transportationFee?: InputMaybe<Scalars['Int']>
  unit?: InputMaybe<JobUnitEnum>
  unitAmount?: InputMaybe<Scalars['Int']>
}

export enum JobSeniorityLevelEnum {
  Associtate = 'ASSOCITATE',
  Director = 'DIRECTOR',
  EntryLevel = 'ENTRY_LEVEL',
  Executive = 'EXECUTIVE',
  Internship = 'INTERNSHIP',
  MidSenior = 'MID_SENIOR'
}

export type JobShift = {
  __typename?: 'JobShift'
  applicantNumber: Scalars['Int']
  breakTime: Scalars['DateTime']
  createdAt: Scalars['DateTime']
  createdUserId?: Maybe<Scalars['String']>
  dynamicLink?: Maybe<Scalars['String']>
  endTime: Scalars['DateTime']
  id: Scalars['ID']
  jobId?: Maybe<Scalars['String']>
  overTime?: Maybe<JobOverTimeEnum>
  postEndDate: Scalars['DateTime']
  postStartDate: Scalars['DateTime']
  startTime: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
  updatedUserId?: Maybe<Scalars['String']>
}

export type JobShiftConnectionType = {
  __typename?: 'JobShiftConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<JobShift>>
}

export enum JobShiftDayEnum {
  Five = 'FIVE',
  Four = 'FOUR',
  Once = 'ONCE',
  Six = 'SIX',
  Three = 'THREE',
  Two = 'TWO'
}

export type JobShiftOrderByInput = {
  applicantNumber?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  endTime?: InputMaybe<SortOrder>
  postEndDate?: InputMaybe<SortOrder>
  postStartDate?: InputMaybe<SortOrder>
  shiftDayEnum?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum JobShiftStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Pending = 'PENDING'
}

export type JobShiftStatusUpdateInput = {
  id: Scalars['ID']
  statusId: Scalars['String']
}

export type JobShiftUpsertInput = {
  applicantNumber: Scalars['Int']
  breakTime: Scalars['DateTime']
  endTime: Scalars['DateTime']
  id?: InputMaybe<Scalars['String']>
  jobId?: InputMaybe<Scalars['String']>
  overTime?: InputMaybe<JobOverTimeEnum>
  postEndDate: Scalars['DateTime']
  postStartDate: Scalars['DateTime']
  startTime: Scalars['DateTime']
  statusId: Scalars['String']
}

export type JobShiftsConnectionWhereInput = {
  companyId?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['String']>
  endTime?: InputMaybe<Scalars['String']>
  jobId?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  startTime?: InputMaybe<Scalars['String']>
  statusId?: InputMaybe<Scalars['String']>
}

export enum JobStatusEnum {
  Active = 'ACTIVE',
  Close = 'CLOSE',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Finished = 'FINISHED',
  PaymentPending = 'PAYMENT_PENDING'
}

export type JobStatusUpdateInput = {
  id: Scalars['ID']
  status?: InputMaybe<JobStatusEnum>
}

export type JobTranslate = {
  __typename?: 'JobTranslate'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  jobId?: Maybe<Scalars['String']>
  languageCode?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type JobTranslateCreateInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  jobId?: InputMaybe<Scalars['String']>
  languageCode?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export enum JobTypeEnum {
  Daily = 'DAILY',
  Full = 'FULL',
  Internship = 'INTERNSHIP',
  Part = 'PART',
  Volunteer = 'VOLUNTEER'
}

export enum JobUnitEnum {
  Above = 'ABOVE',
  Below = 'BELOW',
  Between = 'BETWEEN'
}

export type JobUpsertInput = {
  Address?: InputMaybe<AddressMainUpsertInput>
  Attentions?: InputMaybe<Array<Scalars['String']>>
  Category?: InputMaybe<Scalars['Int']>
  Industry?: InputMaybe<Scalars['Int']>
  RequiredDocuments?: InputMaybe<Array<JobRequiredDocumentUpsertInput>>
  Salaries?: InputMaybe<JobSalaryUpsertInput>
  Shifts?: InputMaybe<Array<JobShiftUpsertInput>>
  Translates?: InputMaybe<Array<JobTranslateCreateInput>>
  ageMax?: InputMaybe<Scalars['Int']>
  ageMin?: InputMaybe<Scalars['Int']>
  clientId?: InputMaybe<Scalars['String']>
  education?: InputMaybe<JobEducationEnum>
  gender: JobGenderEnum
  id?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  interview?: InputMaybe<Scalars['Boolean']>
  seniorityLevel?: InputMaybe<JobSeniorityLevelEnum>
  signatureApply?: InputMaybe<Scalars['Boolean']>
  station?: InputMaybe<Scalars['String']>
  status?: InputMaybe<JobStatusEnum>
  type?: InputMaybe<JobTypeEnum>
  workExperience?: InputMaybe<JobWorkExperienceEnum>
}

export type JobWhereInput = {
  categoryCode?: InputMaybe<Scalars['Int']>
  clientId?: InputMaybe<Scalars['String']>
  date?: InputMaybe<Scalars['DateTime']>
  industryCode?: InputMaybe<Scalars['Int']>
  jobId?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

export enum JobWorkExperienceEnum {
  Five = 'FIVE',
  MoreThanFive = 'MORE_THAN_FIVE',
  One = 'ONE',
  Three = 'THREE'
}

export type LoginUserInput = {
  countryCode?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  ResumeEducationUpsertAdmin?: Maybe<ResumeEducation>
  StaffDocumentDelete?: Maybe<Scalars['Boolean']>
  authApple?: Maybe<AuthVerifyTokenType>
  authFacebook?: Maybe<AuthVerifyTokenType>
  authForgetPassword?: Maybe<Scalars['Boolean']>
  authGoogle?: Maybe<AuthVerifyTokenType>
  authResetPassword?: Maybe<AuthVerifyTokenType>
  authVerifyToken?: Maybe<AuthVerifyTokenType>
  authVerifyTokenSender?: Maybe<Scalars['Boolean']>
  authWeb?: Maybe<AuthVerifyTokenType>
  clientBillingInfoUpsert?: Maybe<ClientBillingInfo>
  clientCreateAdmin?: Maybe<Client>
  clientCreateHost?: Maybe<Client>
  clientDailyPaymentUpsert?: Maybe<ClientDailyPayment>
  clientStatusUpdateAdmin?: Maybe<Client>
  clientStatusUpdateHost?: Maybe<Client>
  clientUpdateAdmin?: Maybe<Client>
  clientUpdateHost?: Maybe<Client>
  companyCreateAdmin?: Maybe<Company>
  companyCreateHost?: Maybe<Company>
  companyStatusUpdateAdmin?: Maybe<Company>
  companyStatusUpdateHost?: Maybe<Company>
  companyUpdateAdmin?: Maybe<Company>
  companyUpdateHost?: Maybe<Company>
  createJobDailyAdmin?: Maybe<Job>
  createJobDailyHost?: Maybe<Job>
  createJobOtherAdmin?: Maybe<Job>
  createJobOtherHost?: Maybe<Job>
  jobShiftStatusUpdate?: Maybe<JobShift>
  jobStatusUpdate?: Maybe<Job>
  login?: Maybe<AuthVerifyTokenType>
  register?: Maybe<Scalars['Boolean']>
  resumeAccomplishmentUpsertAdmin?: Maybe<ResumeAccomplishment>
  resumeAccomplishmentUpsertGuest?: Maybe<ResumeAccomplishment>
  resumeAdditionalUpsertAdmin?: Maybe<ResumeAdditional>
  resumeAdditionalUpsertGuest?: Maybe<ResumeAdditional>
  resumeEducationUpsertGuest?: Maybe<ResumeEducation>
  resumeWorkExperienceUpsertAdmin?: Maybe<ResumeWorkExperience>
  resumeWorkExperienceUpsertGuest?: Maybe<ResumeWorkExperience>
  sourceJobAttentionCreate?: Maybe<SourceJobAttention>
  staffBankInfoUpsert?: Maybe<StaffBankInfo>
  staffDocumentUpsertGuest?: Maybe<StaffDocument>
  staffDocumentUpsertHost?: Maybe<StaffDocument>
  staffPersonalUpsert?: Maybe<StaffPersonal>
  staffSocialContactUpsert?: Maybe<StaffSocialContact>
  storageSignedUrlCreate?: Maybe<StorageSignedUrlType>
  updateJobDaily?: Maybe<Job>
  updateJobOther?: Maybe<Job>
}

export type MutationResumeEducationUpsertAdminArgs = {
  input: ResumeEducationUpsertInput
}

export type MutationStaffDocumentDeleteArgs = {
  id: Scalars['String']
}

export type MutationAuthAppleArgs = {
  input: ExternalAuthAppleInput
}

export type MutationAuthFacebookArgs = {
  input: ExternalAuthInput
}

export type MutationAuthForgetPasswordArgs = {
  input: AuthVerifyTokenSenderInput
}

export type MutationAuthGoogleArgs = {
  input: ExternalAuthInput
}

export type MutationAuthResetPasswordArgs = {
  input: AuthResetPasswordInput
}

export type MutationAuthVerifyTokenArgs = {
  input: AuthVerifyTokenInput
}

export type MutationAuthVerifyTokenSenderArgs = {
  input: AuthVerifyTokenSenderInput
}

export type MutationAuthWebArgs = {
  input: ExternalWebAuthInput
}

export type MutationClientBillingInfoUpsertArgs = {
  input: ClientBillingInfoUpsertInput
}

export type MutationClientCreateAdminArgs = {
  input: ClientCreateInput
}

export type MutationClientCreateHostArgs = {
  input: ClientCreateInput
}

export type MutationClientDailyPaymentUpsertArgs = {
  input: ClientDailyPaymentUpsertInput
}

export type MutationClientStatusUpdateAdminArgs = {
  input: ClientCreateInput
}

export type MutationClientStatusUpdateHostArgs = {
  input: ClientCreateInput
}

export type MutationClientUpdateAdminArgs = {
  id: Scalars['String']
  input: ClientCreateInput
}

export type MutationClientUpdateHostArgs = {
  id: Scalars['String']
  input: ClientCreateInput
}

export type MutationCompanyCreateAdminArgs = {
  input: CompanyUpsertInput
}

export type MutationCompanyCreateHostArgs = {
  input: CompanyUpsertInput
}

export type MutationCompanyStatusUpdateAdminArgs = {
  input: CompanyUpsertInput
}

export type MutationCompanyStatusUpdateHostArgs = {
  input: CompanyUpsertInput
}

export type MutationCompanyUpdateAdminArgs = {
  id: Scalars['String']
  input: CompanyUpsertInput
}

export type MutationCompanyUpdateHostArgs = {
  id: Scalars['String']
  input: CompanyUpsertInput
}

export type MutationCreateJobDailyAdminArgs = {
  input: JobUpsertInput
}

export type MutationCreateJobDailyHostArgs = {
  input: JobUpsertInput
}

export type MutationCreateJobOtherAdminArgs = {
  input: JobUpsertInput
}

export type MutationCreateJobOtherHostArgs = {
  input: JobUpsertInput
}

export type MutationJobShiftStatusUpdateArgs = {
  input: JobShiftStatusUpdateInput
}

export type MutationJobStatusUpdateArgs = {
  id: Scalars['String']
  input: JobStatusUpdateInput
}

export type MutationLoginArgs = {
  input: LoginUserInput
}

export type MutationRegisterArgs = {
  input: RegisterUserInput
}

export type MutationResumeAccomplishmentUpsertAdminArgs = {
  input: ResumeAccomplishmentUpsertInput
}

export type MutationResumeAccomplishmentUpsertGuestArgs = {
  input: ResumeAccomplishmentUpsertInput
}

export type MutationResumeAdditionalUpsertAdminArgs = {
  input: ResumeAdditionalUpsertInput
}

export type MutationResumeAdditionalUpsertGuestArgs = {
  input: ResumeAdditionalUpsertInput
}

export type MutationResumeEducationUpsertGuestArgs = {
  input: ResumeEducationUpsertInput
}

export type MutationResumeWorkExperienceUpsertAdminArgs = {
  input: ResumeWorkExperienceUpsertInput
}

export type MutationResumeWorkExperienceUpsertGuestArgs = {
  input: ResumeWorkExperienceUpsertInput
}

export type MutationSourceJobAttentionCreateArgs = {
  input: SourceAttentionUpsertInput
}

export type MutationStaffBankInfoUpsertArgs = {
  input: StaffBankInfoUpsertInput
}

export type MutationStaffDocumentUpsertGuestArgs = {
  input: StaffDocumentUpsertInput
}

export type MutationStaffDocumentUpsertHostArgs = {
  input: StaffDocumentUpsertInput
}

export type MutationStaffPersonalUpsertArgs = {
  input: StaffPersonalUpsertInput
}

export type MutationStaffSocialContactUpsertArgs = {
  input: StaffSocialContactUpsertInput
}

export type MutationStorageSignedUrlCreateArgs = {
  input: StorageSignedUrlCreateInput
}

export type MutationUpdateJobDailyArgs = {
  id: Scalars['String']
  input: JobUpsertInput
}

export type MutationUpdateJobOtherArgs = {
  id: Scalars['String']
  input: JobUpsertInput
}

export enum PayMethodEnum {
  BankTransfer = 'BANK_TRANSFER',
  Cash = 'CASH',
  Gateway = 'GATEWAY',
  Onepay = 'ONEPAY'
}

export enum QPayRequestStatusEnum {
  Error = 'ERROR',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export type Query = {
  __typename?: 'Query'
  clientAdmin?: Maybe<Client>
  clientBillingInfo?: Maybe<ClientBillingInfo>
  clientConnectionAdmin?: Maybe<ClientConnectionType>
  clientConnectionHost?: Maybe<ClientConnectionType>
  clientDailyPayment?: Maybe<ClientDailyPayment>
  clientHost?: Maybe<Client>
  companyAdmin?: Maybe<Company>
  companyConnectionAdmin?: Maybe<CompanyConnectionType>
  companyConnectionHost?: Maybe<CompanyConnectionType>
  companyHost?: Maybe<Company>
  jobAdmin?: Maybe<Job>
  jobGuest?: Maybe<Job>
  jobHost?: Maybe<Job>
  jobShiftConnectionAdmin?: Maybe<JobShiftConnectionType>
  jobShiftConnectionGuest?: Maybe<JobShiftConnectionType>
  jobShiftConnectionHost?: Maybe<JobShiftConnectionType>
  logout?: Maybe<Scalars['Boolean']>
  me?: Maybe<AuthUserType>
  resumeAccomplishment?: Maybe<ResumeAccomplishment>
  resumeAccomplishmentConnection?: Maybe<ResumeAccomplishmentConnectionType>
  resumeAdditional?: Maybe<ResumeAdditional>
  resumeAdditionalConnection?: Maybe<ResumeAdditionalConnectionType>
  resumeEducation?: Maybe<ResumeEducation>
  resumeEducationConnection?: Maybe<ResumeEducationConnectionType>
  resumeWorkExperience?: Maybe<ResumeWorkExperience>
  resumeWorkExperienceConnection?: Maybe<ResumeWorkExperienceConnectionType>
  sourceAddresses?: Maybe<Array<Maybe<SourceAddress>>>
  sourceBank?: Maybe<Array<Maybe<SourceBank>>>
  sourceCategories?: Maybe<Array<Maybe<SourceCategory>>>
  sourceCountries?: Maybe<Array<Maybe<SourceCountry>>>
  sourceIndustries?: Maybe<Array<Maybe<SourceIndustry>>>
  sourceJobAttentions?: Maybe<Array<Maybe<SourceJobAttention>>>
  staffBankInfo?: Maybe<StaffBankInfo>
  staffBankInfoConnection?: Maybe<StaffBankInfoConnectionType>
  staffDocumentConnectionAdmin?: Maybe<StaffDocumentConnectionType>
  staffDocumentConnectionGuest?: Maybe<StaffDocumentConnectionType>
  staffDocumentGuest?: Maybe<StaffDocument>
  staffPersonal?: Maybe<StaffPersonal>
  staffPersonalConnection?: Maybe<StaffPersonalConnectionType>
  staffSocialContact?: Maybe<StaffSocialContact>
  staffSocialContactConnection?: Maybe<StaffSocialContactConnectionType>
  storageSignedUrl?: Maybe<Scalars['String']>
  userDocumentConnectionHost?: Maybe<StaffDocumentConnectionType>
}

export type QueryClientAdminArgs = {
  id: Scalars['String']
}

export type QueryClientBillingInfoArgs = {
  input: ClientBillingInfoWhereInput
}

export type QueryClientConnectionAdminArgs = {
  input?: InputMaybe<ClientWhereInput>
  orderBy?: InputMaybe<Array<ClientOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryClientConnectionHostArgs = {
  input?: InputMaybe<ClientWhereInput>
  orderBy?: InputMaybe<Array<ClientOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryClientDailyPaymentArgs = {
  input: ClientDailyPaymentWhereInput
}

export type QueryClientHostArgs = {
  id: Scalars['String']
}

export type QueryCompanyAdminArgs = {
  id: Scalars['String']
}

export type QueryCompanyConnectionAdminArgs = {
  input?: InputMaybe<CompanyWhereInput>
  orderBy?: InputMaybe<Array<CompanyOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryCompanyConnectionHostArgs = {
  input?: InputMaybe<CompanyWhereInput>
  orderBy?: InputMaybe<Array<CompanyOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryCompanyHostArgs = {
  id: Scalars['String']
}

export type QueryJobAdminArgs = {
  id: Scalars['String']
}

export type QueryJobGuestArgs = {
  input?: InputMaybe<JobGuestWhereInput>
}

export type QueryJobHostArgs = {
  input?: InputMaybe<JobWhereInput>
}

export type QueryJobShiftConnectionAdminArgs = {
  input?: InputMaybe<JobShiftsConnectionWhereInput>
  orderBy?: InputMaybe<Array<JobShiftOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryJobShiftConnectionGuestArgs = {
  input?: InputMaybe<JobShiftsConnectionWhereInput>
  orderBy?: InputMaybe<Array<JobShiftOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryJobShiftConnectionHostArgs = {
  input?: InputMaybe<JobShiftsConnectionWhereInput>
  orderBy?: InputMaybe<Array<JobShiftOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryResumeAccomplishmentArgs = {
  input: ResumeAccomplishmentWhereInput
}

export type QueryResumeAccomplishmentConnectionArgs = {
  input?: InputMaybe<ResumeAccomplishmentWhereInput>
  orderBy?: InputMaybe<Array<ResumeAccomplishmentOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryResumeAdditionalArgs = {
  input: ResumeAdditionalWhereInput
}

export type QueryResumeAdditionalConnectionArgs = {
  input?: InputMaybe<ResumeAdditionalWhereInput>
  orderBy?: InputMaybe<Array<ResumeAdditionalOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryResumeEducationArgs = {
  input: ResumeEducationWhereInput
}

export type QueryResumeEducationConnectionArgs = {
  input?: InputMaybe<ResumeEducationWhereInput>
  orderBy?: InputMaybe<Array<ResumeEducationOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryResumeWorkExperienceArgs = {
  input: ResumeWorkExperienceWhereInput
}

export type QueryResumeWorkExperienceConnectionArgs = {
  input: ResumeWorkExperienceWhereInput
  orderBy?: InputMaybe<Array<ResumeWorkExperienceOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QuerySourceAddressesArgs = {
  parentId?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<Scalars['String']>
}

export type QuerySourceCategoriesArgs = {
  countryCode?: InputMaybe<Scalars['String']>
  industry?: InputMaybe<Scalars['String']>
  string?: InputMaybe<Scalars['String']>
}

export type QuerySourceCountriesArgs = {
  dialCode?: InputMaybe<Scalars['String']>
  string?: InputMaybe<Scalars['String']>
}

export type QuerySourceIndustriesArgs = {
  countryCode?: InputMaybe<Scalars['String']>
  string?: InputMaybe<Scalars['String']>
}

export type QuerySourceJobAttentionsArgs = {
  clientId?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  string?: InputMaybe<Scalars['String']>
}

export type QueryStaffBankInfoArgs = {
  input: StaffBankInfoWhereInput
}

export type QueryStaffBankInfoConnectionArgs = {
  input: StaffBankInfoWhereInput
  orderBy?: InputMaybe<Array<StaffBankInfoOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryStaffDocumentConnectionAdminArgs = {
  input?: InputMaybe<StaffDocumentWhereInput>
  orderBy?: InputMaybe<Array<StaffDocumentOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryStaffDocumentConnectionGuestArgs = {
  input?: InputMaybe<StaffDocumentWhereInput>
  orderBy?: InputMaybe<Array<StaffDocumentOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryStaffDocumentGuestArgs = {
  input: StaffDocumentWhereInput
}

export type QueryStaffPersonalArgs = {
  input: StaffPersonalWhereInput
}

export type QueryStaffPersonalConnectionArgs = {
  input: StaffPersonalWhereInput
  orderBy?: InputMaybe<Array<StaffPersonalOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryStaffSocialContactArgs = {
  input: StaffSocialContactWhereInput
}

export type QueryStaffSocialContactConnectionArgs = {
  input: StaffSocialContactWhereInput
  orderBy?: InputMaybe<Array<StaffSocialContactOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type QueryStorageSignedUrlArgs = {
  fileKey: Scalars['String']
  size?: InputMaybe<FileSizeEnum>
}

export type QueryUserDocumentConnectionHostArgs = {
  input?: InputMaybe<StaffDocumentWhereInput>
  orderBy?: InputMaybe<Array<StaffDocumentOrderByInput>>
  skip: Scalars['Int']
  take: Scalars['Int']
}

export type RegisterUserInput = {
  countryCode?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  password: Scalars['String']
  phoneNumber?: InputMaybe<Scalars['String']>
}

export type ResumeAccomplishment = {
  __typename?: 'ResumeAccomplishment'
  Language?: Maybe<SourceLanguage>
  Nationality?: Maybe<SourceCountry>
  accomplishmentType?: Maybe<ResumeAccomplishmentTypeEnum>
  createdAt?: Maybe<Scalars['DateTime']>
  currently?: Maybe<Scalars['Boolean']>
  duration?: Maybe<ResumeAccomplishmentDurationEnum>
  id: Scalars['ID']
  languageCode?: Maybe<Scalars['String']>
  languageLevel?: Maybe<ResumeLanguageLevelEnum>
  name?: Maybe<Scalars['String']>
  nationalityCode?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  userId?: Maybe<Scalars['String']>
  year?: Maybe<Scalars['DateTime']>
}

export type ResumeAccomplishmentConnectionType = {
  __typename?: 'ResumeAccomplishmentConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<ResumeAccomplishment>>
}

export enum ResumeAccomplishmentDurationEnum {
  FiveYears = 'FIVE_YEARS',
  MoreFiveYears = 'MORE_FIVE_YEARS',
  SixMonths = 'SIX_MONTHS',
  ThreeMonths = 'THREE_MONTHS',
  ThreeYears = 'THREE_YEARS',
  TwelveMonths = 'TWELVE_MONTHS'
}

export type ResumeAccomplishmentOrderByInput = {
  createdAt?: InputMaybe<SortOrder>
  currently?: InputMaybe<SortOrder>
  languageCode?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  nationalityCode?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  year?: InputMaybe<SortOrder>
}

export enum ResumeAccomplishmentTypeEnum {
  Course = 'COURSE',
  HonorAward = 'HONOR_AWARD',
  Language = 'LANGUAGE',
  Project = 'PROJECT',
  TestScore = 'TEST_SCORE'
}

export type ResumeAccomplishmentUpsertInput = {
  Language?: InputMaybe<SourceLanguageInputType>
  accomplishmentType?: InputMaybe<ResumeAccomplishmentTypeEnum>
  currently?: InputMaybe<Scalars['Boolean']>
  duration?: InputMaybe<ResumeAccomplishmentDurationEnum>
  id: Scalars['ID']
  languageCode?: InputMaybe<Scalars['String']>
  languageLevel?: InputMaybe<ResumeLanguageLevelEnum>
  name?: InputMaybe<Scalars['String']>
  nationalityCode?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['DateTime']>
}

export type ResumeAccomplishmentWhereInput = {
  accomplishmentType?: InputMaybe<ResumeAccomplishmentTypeEnum>
  duration?: InputMaybe<ResumeAccomplishmentDurationEnum>
  id?: InputMaybe<Scalars['String']>
  languageCode?: InputMaybe<Scalars['String']>
  languageLevel?: InputMaybe<ResumeLanguageLevelEnum>
  nationalityCode?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
}

export type ResumeAdditional = {
  __typename?: 'ResumeAdditional'
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  photo?: Maybe<Scalars['String']>
  selfPr: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  userId: Scalars['String']
}

export type ResumeAdditionalConnectionType = {
  __typename?: 'ResumeAdditionalConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<ResumeAdditional>>
}

export type ResumeAdditionalOrderByInput = {
  createdAt?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ResumeAdditionalUpsertInput = {
  id: Scalars['ID']
  photo?: InputMaybe<Scalars['String']>
  selfPr: Scalars['String']
  userId: Scalars['String']
}

export type ResumeAdditionalWhereInput = {
  id?: InputMaybe<Scalars['String']>
  photo?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  selfPr?: InputMaybe<Scalars['String']>
}

export type ResumeEducation = {
  __typename?: 'ResumeEducation'
  createdAt?: Maybe<Scalars['DateTime']>
  currentlyIn?: Maybe<Scalars['Boolean']>
  degree?: Maybe<EducationDegreeEnum>
  description?: Maybe<Scalars['String']>
  entranceDate: Scalars['DateTime']
  graduationDate?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  languageName?: Maybe<Scalars['String']>
  major?: Maybe<Scalars['String']>
  name: Scalars['String']
  schoolType?: Maybe<SchoolTypeEnum>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ResumeEducationConnectionType = {
  __typename?: 'ResumeEducationConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<ResumeEducation>>
}

export type ResumeEducationOrderByInput = {
  createdAt?: InputMaybe<SortOrder>
  currentlyIn?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  entranceDate?: InputMaybe<SortOrder>
  graduationDate?: InputMaybe<SortOrder>
  languageName?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ResumeEducationUpsertInput = {
  currentlyIn?: InputMaybe<Scalars['Boolean']>
  degree?: InputMaybe<EducationDegreeEnum>
  description?: InputMaybe<Scalars['String']>
  entranceDate: Scalars['DateTime']
  graduationDate?: InputMaybe<Scalars['DateTime']>
  id: Scalars['ID']
  languageName?: InputMaybe<Scalars['String']>
  major?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  schoolType?: InputMaybe<SchoolTypeEnum>
}

export type ResumeEducationWhereInput = {
  degree?: InputMaybe<EducationDegreeEnum>
  id?: InputMaybe<Scalars['String']>
  major?: InputMaybe<Scalars['String']>
  schoolType?: InputMaybe<SchoolTypeEnum>
  search?: InputMaybe<Scalars['String']>
}

export enum ResumeLanguageLevelEnum {
  Advanced = 'ADVANCED',
  Elementary = 'ELEMENTARY',
  HighIntermediate = 'HIGH_INTERMEDIATE',
  LowIntermediate = 'LOW_INTERMEDIATE',
  Native = 'NATIVE',
  Proficient = 'PROFICIENT'
}

export type ResumeWorkExperience = {
  __typename?: 'ResumeWorkExperience'
  companyName: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  currentlyWorking?: Maybe<Scalars['Boolean']>
  endDate?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  occupation?: Maybe<Scalars['String']>
  position: Scalars['String']
  startedDate: Scalars['DateTime']
  updatedAt?: Maybe<Scalars['DateTime']>
  userId?: Maybe<Scalars['String']>
}

export type ResumeWorkExperienceConnectionType = {
  __typename?: 'ResumeWorkExperienceConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<ResumeWorkExperience>>
}

export type ResumeWorkExperienceOrderByInput = {
  createdAt?: InputMaybe<SortOrder>
  currentlyWorking?: InputMaybe<SortOrder>
  endDate?: InputMaybe<SortOrder>
  startedDate?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ResumeWorkExperienceUpsertInput = {
  companyName: Scalars['String']
  currentlyWorking?: InputMaybe<Scalars['Boolean']>
  endDate?: InputMaybe<Scalars['DateTime']>
  id: Scalars['ID']
  occupation?: InputMaybe<Scalars['String']>
  position: Scalars['String']
  startedDate: Scalars['DateTime']
}

export type ResumeWorkExperienceWhereInput = {
  companyName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  occupation?: InputMaybe<Scalars['String']>
  position?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
}

export enum SchoolTypeEnum {
  Bachelor = 'BACHELOR',
  Elementary = 'ELEMENTARY',
  High = 'HIGH',
  Master = 'MASTER',
  Middle = 'MIDDLE',
  Occupational = 'OCCUPATIONAL',
  Phd = 'PHD'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SourceAddress = {
  __typename?: 'SourceAddress'
  countryCode: Scalars['String']
  id: Scalars['Int']
  nameEn: Scalars['String']
  nameMn: Scalars['String']
  parent?: Maybe<SourceAddress>
  parentId?: Maybe<Scalars['Int']>
  type?: Maybe<Scalars['String']>
  zipCode?: Maybe<Scalars['String']>
}

export type SourceAttentionUpsertInput = {
  clientId?: InputMaybe<Scalars['String']>
  companyId?: InputMaybe<Scalars['String']>
  en?: InputMaybe<Scalars['String']>
  mn: Scalars['String']
}

export type SourceBank = {
  __typename?: 'SourceBank'
  code: Scalars['String']
  en: Scalars['String']
  id: Scalars['ID']
  img: Scalars['String']
  isShow: Scalars['Boolean']
  mn: Scalars['String']
}

export type SourceBankInputType = {
  code: Scalars['String']
  en: Scalars['String']
  id: Scalars['ID']
  img: Scalars['String']
  isShow: Scalars['Boolean']
  mn: Scalars['String']
}

export type SourceCategory = {
  __typename?: 'SourceCategory'
  code?: Maybe<Scalars['Int']>
  en?: Maybe<Scalars['String']>
  industryCode?: Maybe<Scalars['Int']>
  mn?: Maybe<Scalars['String']>
}

export type SourceCountry = {
  __typename?: 'SourceCountry'
  code: Scalars['String']
  flag: Scalars['String']
  local: Scalars['String']
  mn: Scalars['String']
}

export type SourceCountryInputType = {
  code: Scalars['String']
  flag: Scalars['String']
  local: Scalars['String']
  mn: Scalars['String']
}

export type SourceIndustry = {
  __typename?: 'SourceIndustry'
  code?: Maybe<Scalars['Int']>
  en?: Maybe<Scalars['String']>
  mn?: Maybe<Scalars['String']>
  shortEn?: Maybe<Scalars['String']>
  shortMn?: Maybe<Scalars['String']>
}

export type SourceJobAttention = {
  __typename?: 'SourceJobAttention'
  id: Scalars['ID']
  mn: Scalars['String']
}

export type SourceJobShiftStatus = {
  __typename?: 'SourceJobShiftStatus'
  id: Scalars['ID']
  isEndChat: Scalars['Boolean']
  mn: Scalars['String']
  status: JobShiftStatusEnum
}

export type SourceLanguage = {
  __typename?: 'SourceLanguage'
  code: Scalars['String']
  codes: Scalars['String']
  flag: Scalars['String']
  id: Scalars['ID']
  isList?: Maybe<Scalars['Boolean']>
  name: Scalars['String']
  native: Scalars['String']
  sort?: Maybe<Scalars['Int']>
}

export type SourceLanguageInputType = {
  code: Scalars['String']
  codes: Scalars['String']
  flag: Scalars['String']
  id: Scalars['ID']
  isList?: InputMaybe<Scalars['Boolean']>
  name: Scalars['String']
  native: Scalars['String']
  sort?: InputMaybe<Scalars['Int']>
}

export type StaffBankInfo = {
  __typename?: 'StaffBankInfo'
  Bank?: Maybe<SourceBank>
  accountName: Scalars['String']
  accountNumber: Scalars['String']
  bankCode?: Maybe<Scalars['String']>
  confirmed: Scalars['Boolean']
  createdAt: Scalars['DateTime']
  currency?: Maybe<CurrencyEnum>
  id: Scalars['ID']
  updatedAt: Scalars['DateTime']
  userId: Scalars['String']
}

export type StaffBankInfoConnectionType = {
  __typename?: 'StaffBankInfoConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<StaffBankInfo>>
}

export type StaffBankInfoOrderByInput = {
  createdAt?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type StaffBankInfoUpsertInput = {
  accountName: Scalars['String']
  accountNumber: Scalars['String']
  bankCode?: InputMaybe<Scalars['String']>
  currency?: InputMaybe<CurrencyEnum>
  id?: InputMaybe<Scalars['String']>
}

export type StaffBankInfoWhereInput = {
  accountNumber?: InputMaybe<Scalars['String']>
  bankCode?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  currency?: InputMaybe<CurrencyEnum>
  id?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
}

export type StaffDocument = {
  __typename?: 'StaffDocument'
  backImage_url?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  frontImage_url?: Maybe<Scalars['String']>
  id: Scalars['ID']
  info?: Maybe<Scalars['String']>
  type?: Maybe<DocumentTypeEnum>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type StaffDocumentConnectionType = {
  __typename?: 'StaffDocumentConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<StaffDocument>>
}

export type StaffDocumentOrderByInput = {
  createdAt?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type StaffDocumentUpsertInput = {
  backImage?: InputMaybe<Scalars['String']>
  frontImage: Scalars['String']
  id: Scalars['ID']
  info?: InputMaybe<Scalars['String']>
  type?: InputMaybe<DocumentTypeEnum>
}

export type StaffDocumentWhereInput = {
  id?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  type?: InputMaybe<DocumentTypeEnum>
}

export type StaffPersonal = {
  __typename?: 'StaffPersonal'
  Nationality?: Maybe<SourceCountry>
  birthday?: Maybe<Scalars['DateTime']>
  createdAt?: Maybe<Scalars['DateTime']>
  familyMember?: Maybe<Scalars['Int']>
  gender?: Maybe<UserGenderEnum>
  id: Scalars['ID']
  marriageStatus?: Maybe<Scalars['Boolean']>
  nameCyrillic: Scalars['String']
  nameEnglish?: Maybe<Scalars['String']>
  registerNumber?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  userId: Scalars['String']
}

export type StaffPersonalConnectionType = {
  __typename?: 'StaffPersonalConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<StaffPersonal>>
}

export type StaffPersonalOrderByInput = {
  birthday?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  familyMember?: InputMaybe<SortOrder>
  marriageStatus?: InputMaybe<SortOrder>
  nameCyrillic?: InputMaybe<SortOrder>
  nameEnglish?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type StaffPersonalUpsertInput = {
  Nationality?: InputMaybe<SourceCountryInputType>
  birthday?: InputMaybe<Scalars['DateTime']>
  familyMember?: InputMaybe<Scalars['Int']>
  gender?: InputMaybe<UserGenderEnum>
  id?: InputMaybe<Scalars['String']>
  marriageStatus?: InputMaybe<Scalars['Boolean']>
  nameCyrillic: Scalars['String']
  nameEnglish?: InputMaybe<Scalars['String']>
  nationalityCode?: InputMaybe<Scalars['String']>
  registerNumber?: InputMaybe<Scalars['String']>
}

export type StaffPersonalWhereInput = {
  gender?: InputMaybe<UserGenderEnum>
  id?: InputMaybe<Scalars['String']>
  nationalityCode?: InputMaybe<Scalars['String']>
  registerNumber?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
}

export type StaffSocialContact = {
  __typename?: 'StaffSocialContact'
  facebookName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  linkedIn?: Maybe<Scalars['String']>
  twitterId?: Maybe<Scalars['String']>
  viberNumber?: Maybe<Scalars['String']>
}

export type StaffSocialContactConnectionType = {
  __typename?: 'StaffSocialContactConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<StaffSocialContact>>
}

export type StaffSocialContactOrderByInput = {
  facebookName?: InputMaybe<SortOrder>
  linkedIn?: InputMaybe<SortOrder>
  twitterId?: InputMaybe<SortOrder>
  viberNumber?: InputMaybe<SortOrder>
}

export type StaffSocialContactUpsertInput = {
  facebookName?: InputMaybe<Scalars['String']>
  id: Scalars['ID']
  linkedIn?: InputMaybe<Scalars['String']>
  twitterId?: InputMaybe<Scalars['String']>
  viberNumber?: InputMaybe<Scalars['String']>
}

export type StaffSocialContactWhereInput = {
  facebookName?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  linkedIn?: InputMaybe<Scalars['String']>
  twitterId?: InputMaybe<Scalars['String']>
  viberNumber?: InputMaybe<Scalars['String']>
}

export type StorageSignedUrlCreateInput = {
  contentType: Scalars['String']
  fileName: Scalars['String']
  folder: Scalars['String']
  sizes?: InputMaybe<Array<InputMaybe<FileSizeEnum>>>
}

export type StorageSignedUrlSizedType = {
  __typename?: 'StorageSignedUrlSizedType'
  size: FileSizeEnum
  url: Scalars['String']
}

export type StorageSignedUrlType = {
  __typename?: 'StorageSignedUrlType'
  fileKey?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  url_sizes?: Maybe<Array<Maybe<StorageSignedUrlSizedType>>>
}

export enum TempFileStatus {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Uploaded = 'UPLOADED'
}

export type User = {
  __typename?: 'User'
  countryCode?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  createdClientId?: Maybe<Scalars['String']>
  createdCompanyId?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  fullName?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Scalars['String']>
  image_url?: Maybe<Scalars['String']>
  languageCode?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  phoneNumber?: Maybe<Scalars['String']>
  profileAddressId?: Maybe<Scalars['String']>
  selfDescription?: Maybe<Scalars['String']>
  status?: Maybe<UserStatusEnum>
  updatedAt: Scalars['DateTime']
  userId?: Maybe<Scalars['String']>
}

export type UserConnectionType = {
  __typename?: 'UserConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<User>>
}

export type UserCreateInput = {
  countryCode?: InputMaybe<Scalars['String']>
  email?: InputMaybe<Scalars['String']>
  firstName?: InputMaybe<Scalars['String']>
  image?: InputMaybe<Scalars['String']>
  lastName?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
}

export enum UserGenderEnum {
  Female = 'FEMALE',
  Male = 'MALE',
  None = 'NONE'
}

export type UserHost = {
  __typename?: 'UserHost'
  id: Scalars['ID']
}

export enum UserRoleEnum {
  Admin = 'ADMIN',
  Administrator = 'ADMINISTRATOR',
  User = 'USER'
}

export enum UserStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type LoginMutationVariables = Exact<{
  input: LoginUserInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login?: {
    __typename?: 'AuthVerifyTokenType'
    accessToken?: string | null
    refreshToken?: string | null
    isEmailConfirmed?: boolean | null
    isPhoneConfirmed?: boolean | null
  } | null
}

export type RegisterMutationVariables = Exact<{
  input: RegisterUserInput
}>

export type RegisterMutation = { __typename?: 'Mutation'; register?: boolean | null }

export type AuthWebMutationVariables = Exact<{
  input: ExternalWebAuthInput
}>

export type AuthWebMutation = {
  __typename?: 'Mutation'
  authWeb?: { __typename?: 'AuthVerifyTokenType'; accessToken?: string | null; refreshToken?: string | null } | null
}

export type AuthVerifyTokenSenderMutationVariables = Exact<{
  input: AuthVerifyTokenSenderInput
}>

export type AuthVerifyTokenSenderMutation = { __typename?: 'Mutation'; authVerifyTokenSender?: boolean | null }

export type AuthForgetPasswordMutationVariables = Exact<{
  input: AuthVerifyTokenSenderInput
}>

export type AuthForgetPasswordMutation = { __typename?: 'Mutation'; authForgetPassword?: boolean | null }

export type AuthVerifyTokenMutationVariables = Exact<{
  input: AuthVerifyTokenInput
}>

export type AuthVerifyTokenMutation = {
  __typename?: 'Mutation'
  authVerifyToken?: {
    __typename?: 'AuthVerifyTokenType'
    accessToken?: string | null
    refreshToken?: string | null
  } | null
}

export type AuthResetPasswordMutationVariables = Exact<{
  input: AuthResetPasswordInput
}>

export type AuthResetPasswordMutation = {
  __typename?: 'Mutation'
  authResetPassword?: {
    __typename?: 'AuthVerifyTokenType'
    accessToken?: string | null
    refreshToken?: string | null
  } | null
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'AuthUserType'
    id: string
    role: UserRoleEnum
    email?: string | null
    phoneNumber?: string | null
    firstName?: string | null
    lastName?: string | null
    image?: string | null
    userHost?: { __typename?: 'UserHost'; id: string } | null
  } | null
}

export type LogoutQueryVariables = Exact<{ [key: string]: never }>

export type LogoutQuery = { __typename?: 'Query'; logout?: boolean | null }

export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'LoginUserInput' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isEmailConfirmed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isPhoneConfirmed' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const RegisterDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'register' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'RegisterUserInput' } } }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'register' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ]
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>
export const AuthWebDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'authWeb' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ExternalWebAuthInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authWeb' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<AuthWebMutation, AuthWebMutationVariables>
export const AuthVerifyTokenSenderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'authVerifyTokenSender' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthVerifyTokenSenderInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authVerifyTokenSender' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ]
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<AuthVerifyTokenSenderMutation, AuthVerifyTokenSenderMutationVariables>
export const AuthForgetPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'authForgetPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthVerifyTokenSenderInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authForgetPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ]
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<AuthForgetPasswordMutation, AuthForgetPasswordMutationVariables>
export const AuthVerifyTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'authVerifyToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthVerifyTokenInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authVerifyToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<AuthVerifyTokenMutation, AuthVerifyTokenMutationVariables>
export const AuthResetPasswordDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'authResetPassword' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthResetPasswordInput' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authResetPassword' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'accessToken' } },
                { kind: 'Field', name: { kind: 'Name', value: 'refreshToken' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<AuthResetPasswordMutation, AuthResetPasswordMutationVariables>
export const MeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'me' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'userHost' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }]
                  }
                },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<MeQuery, MeQueryVariables>
export const LogoutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LOGOUT' },
      selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'logout' } }] }
    }
  ]
} as unknown as DocumentNode<LogoutQuery, LogoutQueryVariables>
