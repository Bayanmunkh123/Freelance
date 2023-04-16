import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
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
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
  EXPIRED = 'EXPIRED',
  PENDING = 'PENDING',
  STOPPED = 'STOPPED'
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
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
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
  _count?: Maybe<CompanyCount>
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
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
  PENDING = 'PENDING'
}

export type CompanyConnectionType = {
  __typename?: 'CompanyConnectionType'
  count?: Maybe<Scalars['Int']>
  data?: Maybe<Array<Company>>
}

export enum CompanyEmployeesNumberEnum {
  ELEVEN = 'ELEVEN',
  FIFTY_ONE = 'FIFTY_ONE',
  FIVE_HUNDRED_ONE = 'FIVE_HUNDRED_ONE',
  HUNDRED_ONE = 'HUNDRED_ONE',
  MORE_THAN_THOUSAND = 'MORE_THAN_THOUSAND',
  TWENTY_ONE = 'TWENTY_ONE',
  ZERO = 'ZERO'
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
  ACTIVE = 'ACTIVE',
  DELETE = 'DELETE',
  EXPIRED = 'EXPIRED',
  PENDING = 'PENDING',
  STOPPED = 'STOPPED'
}

export enum CompanyTokenStatus {
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
  EXPIRED = 'EXPIRED',
  STOPPED = 'STOPPED'
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
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export type CompanyWhereInput = {
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  phoneNumber?: InputMaybe<Scalars['String']>
  search?: InputMaybe<Scalars['String']>
  status?: InputMaybe<CompanyStatusEnum>
}

export type CompanyCount = {
  __typename?: 'Company_Count'
  Clients?: Maybe<Scalars['Int']>
}

export enum CurrencyEnum {
  MNT = 'MNT',
  USD = 'USD'
}

export enum DocumentTypeEnum {
  DRIVER_CARD = 'DRIVER_CARD',
  GRADUATION_CERTIFICATE = 'GRADUATION_CERTIFICATE',
  IDENTIFICATION_CARD = 'IDENTIFICATION_CARD',
  OTHER = 'OTHER',
  POLICE_REFERENCE = 'POLICE_REFERENCE',
  RESIDENT_REGISTRATION = 'RESIDENT_REGISTRATION',
  STUDENT_CARD = 'STUDENT_CARD'
}

export enum EducationDegreeEnum {
  BACHELOR = 'BACHELOR',
  DOCTORATE = 'DOCTORATE',
  JUNIOR_COLLEGE = 'JUNIOR_COLLEGE',
  MASTER = 'MASTER',
  PROFESSIONAL = 'PROFESSIONAL',
  RESEARCH_STUDENT = 'RESEARCH_STUDENT'
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
  ONE = 'ONE',
  SIX = 'SIX',
  THREE = 'THREE',
  TWELVE = 'TWELVE'
}

export enum FeeMethodCycleEnum {
  AFTER = 'AFTER',
  BEFORE = 'BEFORE',
  INVOICE = 'INVOICE'
}

export enum FeeMethodEnum {
  BANK_TRANSFER = 'BANK_TRANSFER',
  CASH = 'CASH',
  ONEPAY = 'ONEPAY',
  QPAY = 'QPAY'
}

export enum FileSizeEnum {
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
  THUMB = 'THUMB'
}

export enum FormCompanyAgencyTypeEnum {
  ADDED = 'ADDED',
  CANCEL = 'CANCEL',
  PENDING = 'PENDING'
}

export enum FormCompanyStatusEnum {
  ADDED = 'ADDED',
  CANCEL = 'CANCEL',
  PENDING = 'PENDING'
}

export enum FormJobGenderEnum {
  BOTH = 'BOTH',
  FEMALE = 'FEMALE',
  MALE = 'MALE'
}

export enum FormJobSalaryTypeEnum {
  DAILY = 'DAILY',
  HOURLY = 'HOURLY',
  MOTHLY = 'MOTHLY',
  UNIT = 'UNIT',
  YEARLY = 'YEARLY'
}

export enum FormJobShiftStringEnum {
  FIVE = 'FIVE',
  FOUR = 'FOUR',
  ONE = 'ONE',
  SIX = 'SIX',
  THREE = 'THREE',
  TWO = 'TWO'
}

export enum FormJobStatusEnum {
  ADDED = 'ADDED',
  CANCEL = 'CANCEL',
  PENDING = 'PENDING'
}

export enum FormJobTypeEnum {
  DAILY = 'DAILY',
  FULL = 'FULL',
  INTERNSHIP = 'INTERNSHIP',
  PART = 'PART',
  VOLUNTEER = 'VOLUNTEER'
}

export enum FormJobUnitEnum {
  ABOVE = 'ABOVE',
  BELOW = 'BELOW',
  BETWEEN = 'BETWEEN'
}

export enum FreelancerProfileStatusEnum {
  ACTIVE = 'ACTIVE',
  CONTACTED = 'CONTACTED',
  DENIED = 'DENIED',
  PASSED = 'PASSED',
  PUBLISHED = 'PUBLISHED',
  SELECTING = 'SELECTING'
}

export enum FreelancerSalaryTypeEnum {
  DAILY = 'DAILY',
  HOURLY = 'HOURLY',
  MOTHLY = 'MOTHLY',
  UNIT = 'UNIT',
  YEARLY = 'YEARLY'
}

export enum FreelancerTransactionStatusEnum {
  ACTIVE = 'ACTIVE',
  CLOSE = 'CLOSE',
  DELETED = 'DELETED',
  DRAFT = 'DRAFT',
  FINISHED = 'FINISHED',
  PAYMENT_PENDING = 'PAYMENT_PENDING'
}

export enum HostRoleEnum {
  ADMIN = 'ADMIN',
  CLIENT_ADMIN = 'CLIENT_ADMIN',
  CLIENT_FINANCE = 'CLIENT_FINANCE',
  CLIENT_SALES = 'CLIENT_SALES',
  CLIENT_SUPPORT = 'CLIENT_SUPPORT',
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  COMPANY_FINANCE = 'COMPANY_FINANCE',
  COMPANY_SALES = 'COMPANY_SALES',
  COMPANY_SUPPORT = 'COMPANY_SUPPORT',
  FINANCE = 'FINANCE',
  SALES = 'SALES',
  SUPPORT = 'SUPPORT'
}

export enum HostRoleGroupEnum {
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
  COMPANY = 'COMPANY'
}

export enum HostStatusEnum {
  CONFIRMED = 'CONFIRMED',
  REJECTED = 'REJECTED',
  REQUESTED = 'REQUESTED'
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
  MANUAL = 'MANUAL',
  QR_READER = 'QR_READER',
  REPORT = 'REPORT'
}

export type JobAttentionChecked = {
  __typename?: 'JobAttentionChecked'
  attentionId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  jobId?: Maybe<Scalars['String']>
}

export enum JobEducationEnum {
  BACHELOR = 'BACHELOR',
  HIGH_SCHOOL = 'HIGH_SCHOOL',
  MASTER = 'MASTER',
  OCCUPATIONAL = 'OCCUPATIONAL',
  PHD = 'PHD'
}

export enum JobFeeStatusEnum {
  ERROR = 'ERROR',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS'
}

export enum JobGenderEnum {
  BOTH = 'BOTH',
  FEMALE = 'FEMALE',
  MALE = 'MALE'
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
  ADVANCED = 'ADVANCED',
  ELEMENTARY = 'ELEMENTARY',
  HIGH_INTERMEDIATE = 'HIGH_INTERMEDIATE',
  LOW_INTERMEDIATE = 'LOW_INTERMEDIATE',
  NATIVE = 'NATIVE',
  PROFICIENT = 'PROFICIENT'
}

export enum JobOverTimeEnum {
  FIVE = 'FIVE',
  FOUR = 'FOUR',
  MORE_THAN_SIX = 'MORE_THAN_SIX',
  ONE = 'ONE',
  THREE = 'THREE',
  TWO = 'TWO',
  ZERO = 'ZERO'
}

export type JobRequiredDocument = {
  __typename?: 'JobRequiredDocument'
  id: Scalars['ID']
  jobId: Scalars['String']
  name?: Maybe<JobRequiredDocumentEnum>
}

export enum JobRequiredDocumentEnum {
  DRIVER_CARD = 'DRIVER_CARD',
  GRADUATION_CERTIFICATE = 'GRADUATION_CERTIFICATE',
  IDENTIFICATION_CARD = 'IDENTIFICATION_CARD',
  POLICE_REFERENCE = 'POLICE_REFERENCE',
  RESIDENT_REGISTRATION = 'RESIDENT_REGISTRATION',
  RESUME = 'RESUME',
  STUDENT_CARD = 'STUDENT_CARD'
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
  DAILY = 'DAILY',
  HOURLY = 'HOURLY',
  MOTHLY = 'MOTHLY',
  UNIT = 'UNIT',
  YEARLY = 'YEARLY'
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
  ASSOCITATE = 'ASSOCITATE',
  DIRECTOR = 'DIRECTOR',
  ENTRY_LEVEL = 'ENTRY_LEVEL',
  EXECUTIVE = 'EXECUTIVE',
  INTERNSHIP = 'INTERNSHIP',
  MID_SENIOR = 'MID_SENIOR'
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
  FIVE = 'FIVE',
  FOUR = 'FOUR',
  ONCE = 'ONCE',
  SIX = 'SIX',
  THREE = 'THREE',
  TWO = 'TWO'
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
  ACTIVE = 'ACTIVE',
  DELETED = 'DELETED',
  PENDING = 'PENDING'
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
  ACTIVE = 'ACTIVE',
  CLOSE = 'CLOSE',
  DELETED = 'DELETED',
  DRAFT = 'DRAFT',
  FINISHED = 'FINISHED',
  PAYMENT_PENDING = 'PAYMENT_PENDING'
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
  DAILY = 'DAILY',
  FULL = 'FULL',
  INTERNSHIP = 'INTERNSHIP',
  PART = 'PART',
  VOLUNTEER = 'VOLUNTEER'
}

export enum JobUnitEnum {
  ABOVE = 'ABOVE',
  BELOW = 'BELOW',
  BETWEEN = 'BETWEEN'
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
  FIVE = 'FIVE',
  MORE_THAN_FIVE = 'MORE_THAN_FIVE',
  ONE = 'ONE',
  THREE = 'THREE'
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
  BANK_TRANSFER = 'BANK_TRANSFER',
  CASH = 'CASH',
  GATEWAY = 'GATEWAY',
  ONEPAY = 'ONEPAY'
}

export enum QPayRequestStatusEnum {
  ERROR = 'ERROR',
  NOT_PAID = 'NOT_PAID',
  PAID = 'PAID',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS'
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
  FIVE_YEARS = 'FIVE_YEARS',
  MORE_FIVE_YEARS = 'MORE_FIVE_YEARS',
  SIX_MONTHS = 'SIX_MONTHS',
  THREE_MONTHS = 'THREE_MONTHS',
  THREE_YEARS = 'THREE_YEARS',
  TWELVE_MONTHS = 'TWELVE_MONTHS'
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
  COURSE = 'COURSE',
  HONOR_AWARD = 'HONOR_AWARD',
  LANGUAGE = 'LANGUAGE',
  PROJECT = 'PROJECT',
  TEST_SCORE = 'TEST_SCORE'
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
  ADVANCED = 'ADVANCED',
  ELEMENTARY = 'ELEMENTARY',
  HIGH_INTERMEDIATE = 'HIGH_INTERMEDIATE',
  LOW_INTERMEDIATE = 'LOW_INTERMEDIATE',
  NATIVE = 'NATIVE',
  PROFICIENT = 'PROFICIENT'
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
  BACHELOR = 'BACHELOR',
  ELEMENTARY = 'ELEMENTARY',
  HIGH = 'HIGH',
  MASTER = 'MASTER',
  MIDDLE = 'MIDDLE',
  OCCUPATIONAL = 'OCCUPATIONAL',
  PHD = 'PHD'
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
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
  CREATED = 'CREATED',
  DELETED = 'DELETED',
  UPLOADED = 'UPLOADED'
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
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  NONE = 'NONE'
}

export type UserHost = {
  __typename?: 'UserHost'
  id: Scalars['ID']
}

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  ADMINISTRATOR = 'ADMINISTRATOR',
  USER = 'USER'
}

export enum UserStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
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

export const LoginDocument = gql`
  mutation Login($input: LoginUserInput!) {
    login(input: $input) {
      accessToken
      refreshToken
      isEmailConfirmed
      isPhoneConfirmed
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const RegisterDocument = gql`
  mutation register($input: RegisterUserInput!) {
    register(input: $input)
  }
`
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>
export const AuthWebDocument = gql`
  mutation authWeb($input: ExternalWebAuthInput!) {
    authWeb(input: $input) {
      accessToken
      refreshToken
    }
  }
`
export type AuthWebMutationFn = Apollo.MutationFunction<AuthWebMutation, AuthWebMutationVariables>

/**
 * __useAuthWebMutation__
 *
 * To run a mutation, you first call `useAuthWebMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthWebMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authWebMutation, { data, loading, error }] = useAuthWebMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthWebMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthWebMutation, AuthWebMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthWebMutation, AuthWebMutationVariables>(AuthWebDocument, options)
}
export type AuthWebMutationHookResult = ReturnType<typeof useAuthWebMutation>
export type AuthWebMutationResult = Apollo.MutationResult<AuthWebMutation>
export type AuthWebMutationOptions = Apollo.BaseMutationOptions<AuthWebMutation, AuthWebMutationVariables>
export const AuthVerifyTokenSenderDocument = gql`
  mutation authVerifyTokenSender($input: AuthVerifyTokenSenderInput!) {
    authVerifyTokenSender(input: $input)
  }
`
export type AuthVerifyTokenSenderMutationFn = Apollo.MutationFunction<
  AuthVerifyTokenSenderMutation,
  AuthVerifyTokenSenderMutationVariables
>

/**
 * __useAuthVerifyTokenSenderMutation__
 *
 * To run a mutation, you first call `useAuthVerifyTokenSenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthVerifyTokenSenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authVerifyTokenSenderMutation, { data, loading, error }] = useAuthVerifyTokenSenderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthVerifyTokenSenderMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthVerifyTokenSenderMutation, AuthVerifyTokenSenderMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthVerifyTokenSenderMutation, AuthVerifyTokenSenderMutationVariables>(
    AuthVerifyTokenSenderDocument,
    options
  )
}
export type AuthVerifyTokenSenderMutationHookResult = ReturnType<typeof useAuthVerifyTokenSenderMutation>
export type AuthVerifyTokenSenderMutationResult = Apollo.MutationResult<AuthVerifyTokenSenderMutation>
export type AuthVerifyTokenSenderMutationOptions = Apollo.BaseMutationOptions<
  AuthVerifyTokenSenderMutation,
  AuthVerifyTokenSenderMutationVariables
>
export const AuthForgetPasswordDocument = gql`
  mutation authForgetPassword($input: AuthVerifyTokenSenderInput!) {
    authForgetPassword(input: $input)
  }
`
export type AuthForgetPasswordMutationFn = Apollo.MutationFunction<
  AuthForgetPasswordMutation,
  AuthForgetPasswordMutationVariables
>

/**
 * __useAuthForgetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authForgetPasswordMutation, { data, loading, error }] = useAuthForgetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthForgetPasswordMutation, AuthForgetPasswordMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthForgetPasswordMutation, AuthForgetPasswordMutationVariables>(
    AuthForgetPasswordDocument,
    options
  )
}
export type AuthForgetPasswordMutationHookResult = ReturnType<typeof useAuthForgetPasswordMutation>
export type AuthForgetPasswordMutationResult = Apollo.MutationResult<AuthForgetPasswordMutation>
export type AuthForgetPasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthForgetPasswordMutation,
  AuthForgetPasswordMutationVariables
>
export const AuthVerifyTokenDocument = gql`
  mutation authVerifyToken($input: AuthVerifyTokenInput!) {
    authVerifyToken(input: $input) {
      accessToken
      refreshToken
    }
  }
`
export type AuthVerifyTokenMutationFn = Apollo.MutationFunction<
  AuthVerifyTokenMutation,
  AuthVerifyTokenMutationVariables
>

/**
 * __useAuthVerifyTokenMutation__
 *
 * To run a mutation, you first call `useAuthVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authVerifyTokenMutation, { data, loading, error }] = useAuthVerifyTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthVerifyTokenMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthVerifyTokenMutation, AuthVerifyTokenMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthVerifyTokenMutation, AuthVerifyTokenMutationVariables>(AuthVerifyTokenDocument, options)
}
export type AuthVerifyTokenMutationHookResult = ReturnType<typeof useAuthVerifyTokenMutation>
export type AuthVerifyTokenMutationResult = Apollo.MutationResult<AuthVerifyTokenMutation>
export type AuthVerifyTokenMutationOptions = Apollo.BaseMutationOptions<
  AuthVerifyTokenMutation,
  AuthVerifyTokenMutationVariables
>
export const AuthResetPasswordDocument = gql`
  mutation authResetPassword($input: AuthResetPasswordInput!) {
    authResetPassword(input: $input) {
      accessToken
      refreshToken
    }
  }
`
export type AuthResetPasswordMutationFn = Apollo.MutationFunction<
  AuthResetPasswordMutation,
  AuthResetPasswordMutationVariables
>

/**
 * __useAuthResetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authResetPasswordMutation, { data, loading, error }] = useAuthResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<AuthResetPasswordMutation, AuthResetPasswordMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useMutation<AuthResetPasswordMutation, AuthResetPasswordMutationVariables>(
    AuthResetPasswordDocument,
    options
  )
}
export type AuthResetPasswordMutationHookResult = ReturnType<typeof useAuthResetPasswordMutation>
export type AuthResetPasswordMutationResult = Apollo.MutationResult<AuthResetPasswordMutation>
export type AuthResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  AuthResetPasswordMutation,
  AuthResetPasswordMutationVariables
>
export const MeDocument = gql`
  query me {
    me {
      id
      role
      email
      phoneNumber
      firstName
      lastName
      userHost {
        id
      }
      image
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const LogoutDocument = gql`
  query LOGOUT {
    logout
  }
`

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options)
}
export function useLogoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options)
}
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {}
}
export default result
