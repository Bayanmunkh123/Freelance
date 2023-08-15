import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
};

export type AccountEliminateInputType = {
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
};

export enum AccountProviderTypeEnum {
  APPLE = 'APPLE',
  EMAIL = 'EMAIL',
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
  NONE = 'NONE',
  PHONE = 'PHONE',
  TWITTER = 'TWITTER'
}

export type AddressMain = {
  __typename?: 'AddressMain';
  address1: Scalars['String'];
  address2?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  cityString?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  districtId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  stateId?: Maybe<Scalars['Int']>;
  stateString?: Maybe<Scalars['String']>;
  streetString?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type AuthEmailResetPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthEmailVerifyTokenInput = {
  code: Scalars['String'];
  email: Scalars['String'];
  type: TokenVerifyEnum;
};

export type AuthEmailVerifyTokenSenderInput = {
  email: Scalars['String'];
};

export type AuthPhoneResetPasswordInput = {
  countryCode: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type AuthPhoneVerifyTokenInput = {
  code: Scalars['String'];
  countryCode: Scalars['String'];
  phone: Scalars['String'];
  type: TokenVerifyEnum;
};

export type AuthPhoneVerifyTokenSenderInput = {
  countryCode: Scalars['String'];
  phone: Scalars['String'];
};

export type AuthUserType = {
  __typename?: 'AuthUserType';
  accounts?: Maybe<Array<UserAccount>>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  organizationUsers?: Maybe<Array<OrganizationUser>>;
  phone?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  role: UserRoleEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userName?: Maybe<Scalars['String']>;
};

export type AuthVerifyTokenType = {
  __typename?: 'AuthVerifyTokenType';
  accessToken?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  devices?: Maybe<Array<Maybe<UserDevice>>>;
  isEmailConfirmed?: Maybe<Scalars['Boolean']>;
  isPhoneConfirmed?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Scalars['String']>;
  resetToken?: Maybe<Scalars['String']>;
};

export enum ConstructionStatusEnum {
  DEFAULT = 'DEFAULT',
  NEWBUILDING = 'NEWBUILDING',
  OLD = 'OLD',
  SOON = 'SOON'
}

export type ExternalAuthAppleInput = {
  email?: InputMaybe<Scalars['String']>;
  providerId: Scalars['String'];
  providerName: Scalars['String'];
};

export type ExternalAuthInput = {
  accessToken: Scalars['String'];
};

export type ExternalWebAuthInput = {
  accessToken: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerName?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
  userUid?: InputMaybe<Scalars['String']>;
};

export enum FileSizeEnum {
  MEDIUM = 'MEDIUM',
  NATIVE = 'NATIVE',
  SMALL = 'SMALL',
  THUMB = 'THUMB'
}

export type LoginEmailInput = {
  deviceId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPhoneInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  deviceId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountEliminate?: Maybe<AuthVerifyTokenType>;
  authEmailForgetPassword?: Maybe<Scalars['Boolean']>;
  authEmailResetPassword?: Maybe<AuthVerifyTokenType>;
  authEmailVerifyToken?: Maybe<AuthVerifyTokenType>;
  authEmailVerifyTokenSender?: Maybe<Scalars['Boolean']>;
  authPhoneForgetPassword?: Maybe<Scalars['Boolean']>;
  authPhoneResetPassword?: Maybe<AuthVerifyTokenType>;
  authPhoneVerifyToken?: Maybe<AuthVerifyTokenType>;
  authPhoneVerifyTokenSender?: Maybe<Scalars['Boolean']>;
  authProvider?: Maybe<AuthVerifyTokenType>;
  authWeb?: Maybe<AuthVerifyTokenType>;
  createOrganization?: Maybe<Organization>;
  createOrganizationUser?: Maybe<OrganizationUser>;
  createUser?: Maybe<User>;
  deleteOrganization?: Maybe<Scalars['Boolean']>;
  deleteUser?: Maybe<Scalars['Boolean']>;
  loginEmail?: Maybe<AuthVerifyTokenType>;
  loginPhone?: Maybe<AuthVerifyTokenType>;
  logout?: Maybe<Scalars['Boolean']>;
  productCreate?: Maybe<Product>;
  productDelete?: Maybe<Scalars['Boolean']>;
  productUpdate?: Maybe<Product>;
  refreshAccessToken?: Maybe<RefreshTokenType>;
  registerEmail?: Maybe<Scalars['Boolean']>;
  registerPhone?: Maybe<Scalars['Boolean']>;
  storageSignedUrlCreate?: Maybe<StorageWriteSignedUrl>;
  storageSignedUrlDelete?: Maybe<Scalars['Boolean']>;
  updateOrganization?: Maybe<Organization>;
  updateUser?: Maybe<User>;
};


export type MutationAccountEliminateArgs = {
  input: AccountEliminateInputType;
};


export type MutationAuthEmailForgetPasswordArgs = {
  input: AuthEmailVerifyTokenSenderInput;
};


export type MutationAuthEmailResetPasswordArgs = {
  input: AuthEmailResetPasswordInput;
};


export type MutationAuthEmailVerifyTokenArgs = {
  input: AuthEmailVerifyTokenInput;
};


export type MutationAuthEmailVerifyTokenSenderArgs = {
  input: AuthEmailVerifyTokenSenderInput;
};


export type MutationAuthPhoneForgetPasswordArgs = {
  input: AuthPhoneVerifyTokenSenderInput;
};


export type MutationAuthPhoneResetPasswordArgs = {
  input: AuthPhoneResetPasswordInput;
};


export type MutationAuthPhoneVerifyTokenArgs = {
  input: AuthPhoneVerifyTokenInput;
};


export type MutationAuthPhoneVerifyTokenSenderArgs = {
  input: AuthPhoneVerifyTokenSenderInput;
};


export type MutationAuthProviderArgs = {
  appleInput?: InputMaybe<ExternalAuthAppleInput>;
  input: ExternalAuthInput;
  provider: Scalars['String'];
};


export type MutationAuthWebArgs = {
  input: ExternalWebAuthInput;
};


export type MutationCreateOrganizationArgs = {
  input: OrganizationCreateInput;
};


export type MutationCreateOrganizationUserArgs = {
  input: OrganizationUserCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  orgRole: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationLoginEmailArgs = {
  input: LoginEmailInput;
};


export type MutationLoginPhoneArgs = {
  input: LoginPhoneInput;
};


export type MutationLogoutArgs = {
  deviceId?: InputMaybe<Scalars['String']>;
};


export type MutationProductCreateArgs = {
  input: ProductInput;
};


export type MutationProductDeleteArgs = {
  _id: Scalars['String'];
};


export type MutationProductUpdateArgs = {
  _id: Scalars['String'];
  input: ProductInput;
};


export type MutationRefreshAccessTokenArgs = {
  input?: InputMaybe<RefreshToAccessTokenInput>;
};


export type MutationRegisterEmailArgs = {
  input: RegisterEmailInput;
};


export type MutationRegisterPhoneArgs = {
  input: RegisterPhoneInput;
};


export type MutationStorageSignedUrlCreateArgs = {
  input: StorageWriteSignedUrlInput;
};


export type MutationStorageSignedUrlDeleteArgs = {
  id: Scalars['String'];
};


export type MutationUpdateOrganizationArgs = {
  input: OrganizationUpdateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UserUpdateInput;
};

export type Organization = {
  __typename?: 'Organization';
  accesses: Scalars['Int'];
  companyid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  members?: Maybe<Array<OrganizationUser>>;
  name: Scalars['String'];
  productivity: Scalars['Int'];
  products?: Maybe<Array<Product>>;
  status?: Maybe<OrganizationStatusEnum>;
  totalsales: Scalars['Int'];
  type?: Maybe<OrganizationTypeEnum>;
  updatedAt: Scalars['DateTime'];
};

export type OrganizationCreateInput = {
  accesses: Scalars['Int'];
  companyid: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  productivity: Scalars['Int'];
  rating?: InputMaybe<Scalars['String']>;
  totalsales: Scalars['Int'];
  type: OrganizationTypeEnum;
};

export enum OrganizationStatusEnum {
  CONFIRMED = 'CONFIRMED',
  EXPIRED = 'EXPIRED',
  REJECTED = 'REJECTED',
  REQUESTED = 'REQUESTED'
}

export enum OrganizationTypeEnum {
  AGENT = 'AGENT',
  COMPANY = 'COMPANY',
  GOVERNMENT = 'GOVERNMENT',
  UNIVERSITY = 'UNIVERSITY'
}

export type OrganizationUpdateInput = {
  accesses: Scalars['Int'];
  companyid: Scalars['String'];
  id: Scalars['ID'];
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  productivity: Scalars['Int'];
  rating?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrganizationStatusEnum>;
  totalsales: Scalars['Int'];
  type?: InputMaybe<OrganizationTypeEnum>;
};

export type OrganizationUser = {
  __typename?: 'OrganizationUser';
  assignedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orgRole?: Maybe<OrganizationUserRoleEnum>;
  organization?: Maybe<Organization>;
  organizationId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type OrganizationUserCreateInput = {
  nickname: Scalars['String'];
  orgRole: OrganizationUserRoleEnum;
  organizationId: Scalars['String'];
  user?: InputMaybe<UserCreateInput>;
  userId: Scalars['String'];
};

export enum OrganizationUserRoleEnum {
  EDITOR = 'EDITOR',
  FINANCE = 'FINANCE',
  OWNER = 'OWNER',
  SALES = 'SALES',
  SUPPORT = 'SUPPORT',
  VIEWER = 'VIEWER'
}

export type OrganizationUserUpdateInput = {
  nickname: Scalars['String'];
};

export type OrganizationUsersType = {
  __typename?: 'OrganizationUsersType';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<OrganizationUser>>;
};

export type OrganizationUsersWhereInput = {
  orgRole?: InputMaybe<OrganizationUserRoleEnum>;
  organizationId: Scalars['String'];
  userId: Scalars['String'];
};

export type OrganizationsType = {
  __typename?: 'OrganizationsType';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Organization>>;
};

export type OrganizationsWhereInput = {
  type: OrganizationTypeEnum;
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['Int'];
  name: Scalars['String'];
  orgUser?: Maybe<OrganizationUser>;
  orgUserId: Scalars['String'];
};

export type PermissionsType = {
  __typename?: 'PermissionsType';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Permission>>;
};

export type Product = {
  __typename?: 'Product';
  address1?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  constStatus: ConstructionStatusEnum;
  description?: Maybe<Scalars['String']>;
  district: Scalars['String'];
  floorNumber: Scalars['Int'];
  floors: Scalars['Int'];
  id: Scalars['ID'];
  images?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
  priceSqr?: Maybe<Scalars['Int']>;
  productStatus: ProductStatusEnum;
  releaseDate?: Maybe<Scalars['DateTime']>;
  roomNumber: Scalars['Int'];
  sqr: Scalars['Float'];
};

export type ProductInput = {
  address1?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  constStatus: ConstructionStatusEnum;
  description?: InputMaybe<Scalars['String']>;
  district: Scalars['String'];
  floorNumber: Scalars['Int'];
  floors: Scalars['Int'];
  images?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organizationId: Scalars['String'];
  price?: InputMaybe<Scalars['Int']>;
  priceSqr?: InputMaybe<Scalars['Int']>;
  productStatus: ProductStatusEnum;
  releaseDate?: InputMaybe<Scalars['DateTime']>;
  roomNumber: Scalars['Int'];
  sqr: Scalars['Float'];
};

export enum ProductStatusEnum {
  DEFAULT = 'DEFAULT',
  HIGHLIGTH = 'HIGHLIGTH',
  NEW = 'NEW'
}

export type ProductUniqueWhereInput = {
  id: Scalars['ID'];
};

export type ProductWhereInput = {
  city: Scalars['String'];
  district: Scalars['String'];
};

export type Products = {
  __typename?: 'Products';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Product>>;
};

export type Query = {
  __typename?: 'Query';
  meAuth?: Maybe<AuthUserType>;
  organization?: Maybe<Organization>;
  organizationUsers?: Maybe<OrganizationUsersType>;
  organizations?: Maybe<OrganizationsType>;
  product?: Maybe<Product>;
  products?: Maybe<Products>;
  roles?: Maybe<RolesType>;
  sourceAddresses?: Maybe<Array<Maybe<SourceAddress>>>;
  sourceCategories?: Maybe<Array<Maybe<SourceCategory>>>;
  storageSignedUrl?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  users?: Maybe<Users>;
};


export type QueryOrganizationArgs = {
  input?: InputMaybe<OrganizationsWhereInput>;
};


export type QueryOrganizationUsersArgs = {
  input?: InputMaybe<OrganizationUsersWhereInput>;
};


export type QueryProductArgs = {
  input?: InputMaybe<ProductUniqueWhereInput>;
};


export type QueryProductsArgs = {
  input?: InputMaybe<ProductWhereInput>;
};


export type QueryRolesArgs = {
  input?: InputMaybe<RoleWhereInput>;
};


export type QuerySourceAddressesArgs = {
  parentId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};


export type QuerySourceCategoriesArgs = {
  parentCode?: InputMaybe<Scalars['Int']>;
};


export type QueryStorageSignedUrlArgs = {
  id: Scalars['String'];
  size?: InputMaybe<FileSizeEnum>;
};


export type QueryUserArgs = {
  input?: InputMaybe<UserWhereInput>;
};


export type QueryUsersArgs = {
  input?: InputMaybe<UserWhereInput>;
};

export type RefreshToAccessTokenInput = {
  refreshToken: Scalars['String'];
};

export type RefreshTokenType = {
  __typename?: 'RefreshTokenType';
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  wsToken?: Maybe<Scalars['String']>;
};

export type RegisterEmailInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterPhoneInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type RoleWhereInput = {
  orgRole?: InputMaybe<OrganizationUserRoleEnum>;
};

export type RolesType = {
  __typename?: 'RolesType';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<OrganizationUser>>;
};

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type SourceAddress = {
  __typename?: 'SourceAddress';
  countryCode: Scalars['String'];
  countryId: Scalars['Int'];
  en?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  mn: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};

export type SourceCategory = {
  __typename?: 'SourceCategory';
  code: Scalars['Int'];
  en?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  mn: Scalars['String'];
};

export type SourceTempFile = {
  __typename?: 'SourceTempFile';
  access: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  extname: Scalars['String'];
  folder: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StorageReadSignedUrl = {
  __typename?: 'StorageReadSignedUrl';
  MEDIUM: Scalars['String'];
  NATIVE: Scalars['String'];
  SMALL: Scalars['String'];
  THUMB: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
};

export type StorageWriteSignedUrl = {
  __typename?: 'StorageWriteSignedUrl';
  MEDIUM?: Maybe<Scalars['String']>;
  NATIVE?: Maybe<Scalars['String']>;
  SMALL?: Maybe<Scalars['String']>;
  THUMB?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  tempFile?: Maybe<SourceTempFile>;
};

export type StorageWriteSignedUrlInput = {
  contentType: Scalars['String'];
  folder: Scalars['String'];
  name: Scalars['String'];
};

export enum TokenVerifyEnum {
  AUTH = 'AUTH',
  RESET = 'RESET'
}

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<UserAccount>>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  devices?: Maybe<Array<UserDevice>>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<StorageReadSignedUrl>;
  phone?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  role?: Maybe<UserRoleEnum>;
  sessions?: Maybe<Array<UserSession>>;
  status?: Maybe<UserStatusEnum>;
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type UserAccount = {
  __typename?: 'UserAccount';
  accessToken?: Maybe<Scalars['String']>;
  accessTokenExpires?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  providerAccountId?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  providerName?: Maybe<Scalars['String']>;
  providerType?: Maybe<AccountProviderTypeEnum>;
  refreshToken?: Maybe<Scalars['String']>;
  signedIn: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  userUid?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  orgRole: OrganizationUserRoleEnum;
  organizationId: Scalars['String'];
};

export type UserDevice = {
  __typename?: 'UserDevice';
  deviceName: Scalars['String'];
  deviceOs: Scalars['String'];
  deviceType: Scalars['String'];
  id: Scalars['ID'];
  sessions?: Maybe<Array<UserSession>>;
};

export type UserOrderInput = {
  copyCard?: InputMaybe<Scalars['String']>;
  copyPassport?: InputMaybe<Scalars['String']>;
  copyVisa?: InputMaybe<Scalars['String']>;
  descJob?: InputMaybe<Scalars['String']>;
  descResidence?: InputMaybe<Scalars['String']>;
  statement?: InputMaybe<Scalars['String']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  User?: Maybe<User>;
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  registerNumber?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  visaCategory?: Maybe<Scalars['String']>;
  workSector?: Maybe<Scalars['String']>;
  workYear?: Maybe<Scalars['DateTime']>;
};

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  MEMBER = 'MEMBER'
}

export type UserSession = {
  __typename?: 'UserSession';
  createdAt: Scalars['DateTime'];
  device?: Maybe<UserDevice>;
  expires: Scalars['String'];
  fcmToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export enum UserStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export type UserUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  duration?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  income?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  orgRole: OrganizationUserRoleEnum;
  organizationId: Scalars['String'];
  registerNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatusEnum>;
  userName?: InputMaybe<Scalars['String']>;
  visaCategory?: InputMaybe<Scalars['String']>;
  workSector?: InputMaybe<Scalars['String']>;
  workYear?: InputMaybe<Scalars['DateTime']>;
};

export type UserWhereInput = {
  role?: InputMaybe<UserRoleEnum>;
  search?: InputMaybe<Scalars['String']>;
};

export type Users = {
  __typename?: 'Users';
  count?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<User>>;
};

export type UserOrder = {
  __typename?: 'userOrder';
  User?: Maybe<UserOrder>;
  copyCard?: Maybe<Scalars['String']>;
  copyPassport?: Maybe<Scalars['String']>;
  copyVisa?: Maybe<Scalars['String']>;
  descJob?: Maybe<Scalars['String']>;
  descResidence?: Maybe<Scalars['String']>;
  statement?: Maybe<Scalars['String']>;
};

export type MeAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type MeAuthQuery = { __typename?: 'Query', meAuth?: { __typename?: 'AuthUserType', id: string, role: UserRoleEnum, email?: string | null, countryCode?: string | null, phone?: string | null, userName?: string | null, createdAt?: any | null, updatedAt?: any | null, image?: string | null, organizationUsers?: Array<{ __typename?: 'OrganizationUser', id: string, orgRole?: OrganizationUserRoleEnum | null }> | null, profile?: { __typename?: 'UserProfile', id: string, firstName?: string | null, lastName?: string | null } | null } | null };

export type LogoutMutationVariables = Exact<{
  deviceId?: InputMaybe<Scalars['String']>;
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: boolean | null };

export type RefreshAccessTokenMutationVariables = Exact<{
  input: RefreshToAccessTokenInput;
}>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshAccessToken?: { __typename?: 'RefreshTokenType', accessToken?: string | null, refreshToken?: string | null, wsToken?: string | null } | null };

export type ProductCreateMutationVariables = Exact<{
  input: ProductInput;
}>;


export type ProductCreateMutation = { __typename?: 'Mutation', productCreate?: { __typename?: 'Product', id: string, images?: string | null, name: string, address1?: string | null, city: string, district: string, floors: number, floorNumber: number, roomNumber: number, sqr: number, priceSqr?: number | null, price?: number | null, description?: string | null, releaseDate?: any | null, constStatus: ConstructionStatusEnum, productStatus: ProductStatusEnum, organizationId: string } | null };

export type ProductUpdateMutationVariables = Exact<{
  input: ProductInput;
  id: Scalars['String'];
}>;


export type ProductUpdateMutation = { __typename?: 'Mutation', productUpdate?: { __typename?: 'Product', id: string, images?: string | null, name: string, address1?: string | null, city: string, district: string, floors: number, floorNumber: number, roomNumber: number, sqr: number, priceSqr?: number | null, price?: number | null, description?: string | null, releaseDate?: any | null, constStatus: ConstructionStatusEnum, productStatus: ProductStatusEnum, organizationId: string } | null };

export type AuthWebMutationVariables = Exact<{
  input: ExternalWebAuthInput;
}>;


export type AuthWebMutation = { __typename?: 'Mutation', authWeb?: { __typename?: 'AuthVerifyTokenType', accessToken?: string | null, refreshToken?: string | null } | null };

export type LoginEmailMutationVariables = Exact<{
  input: LoginEmailInput;
}>;


export type LoginEmailMutation = { __typename?: 'Mutation', loginEmail?: { __typename?: 'AuthVerifyTokenType', accessToken?: string | null, refreshToken?: string | null, isEmailConfirmed?: boolean | null, isPhoneConfirmed?: boolean | null, deviceId?: string | null, devices?: Array<{ __typename?: 'UserDevice', id: string, deviceName: string, deviceType: string, deviceOs: string } | null> | null } | null };

export type LoginPhoneMutationVariables = Exact<{
  input: LoginPhoneInput;
}>;


export type LoginPhoneMutation = { __typename?: 'Mutation', loginPhone?: { __typename?: 'AuthVerifyTokenType', accessToken?: string | null, refreshToken?: string | null, isEmailConfirmed?: boolean | null, isPhoneConfirmed?: boolean | null, deviceId?: string | null, devices?: Array<{ __typename?: 'UserDevice', id: string, deviceName: string, deviceType: string, deviceOs: string } | null> | null } | null };

export type RegisterEmailMutationVariables = Exact<{
  input: RegisterEmailInput;
}>;


export type RegisterEmailMutation = { __typename?: 'Mutation', registerEmail?: boolean | null };

export type RegisterPhoneMutationVariables = Exact<{
  input: RegisterPhoneInput;
}>;


export type RegisterPhoneMutation = { __typename?: 'Mutation', registerPhone?: boolean | null };

export type AuthEmailForgetPasswordMutationVariables = Exact<{
  input: AuthEmailVerifyTokenSenderInput;
}>;


export type AuthEmailForgetPasswordMutation = { __typename?: 'Mutation', authEmailForgetPassword?: boolean | null };

export type AuthEmailResetPasswordMutationVariables = Exact<{
  input: AuthEmailResetPasswordInput;
}>;


export type AuthEmailResetPasswordMutation = { __typename?: 'Mutation', authEmailResetPassword?: { __typename?: 'AuthVerifyTokenType', accessToken?: string | null, refreshToken?: string | null, deviceId?: string | null, devices?: Array<{ __typename?: 'UserDevice', id: string, deviceName: string, deviceType: string, deviceOs: string } | null> | null } | null };

export type AuthEmailVerifyTokenMutationVariables = Exact<{
  input: AuthEmailVerifyTokenInput;
}>;


export type AuthEmailVerifyTokenMutation = { __typename?: 'Mutation', authEmailVerifyToken?: { __typename?: 'AuthVerifyTokenType', accessToken?: string | null, refreshToken?: string | null, resetToken?: string | null, deviceId?: string | null, devices?: Array<{ __typename?: 'UserDevice', id: string, deviceName: string, deviceType: string, deviceOs: string } | null> | null } | null };

export type AuthEmailVerifyTokenSenderMutationVariables = Exact<{
  input: AuthEmailVerifyTokenSenderInput;
}>;


export type AuthEmailVerifyTokenSenderMutation = { __typename?: 'Mutation', authEmailVerifyTokenSender?: boolean | null };

export type AccountEliminateMutationVariables = Exact<{
  input: AccountEliminateInputType;
}>;


export type AccountEliminateMutation = { __typename?: 'Mutation', accountEliminate?: { __typename?: 'AuthVerifyTokenType', accessToken?: string | null, refreshToken?: string | null, deviceId?: string | null } | null };

export type ProductsQueryVariables = Exact<{
  input?: InputMaybe<ProductWhereInput>;
}>;


export type ProductsQuery = { __typename?: 'Query', products?: { __typename?: 'Products', data?: Array<{ __typename?: 'Product', id: string, images?: string | null, name: string, address1?: string | null, city: string, district: string, floors: number, floorNumber: number, roomNumber: number, sqr: number, priceSqr?: number | null, price?: number | null, description?: string | null, releaseDate?: any | null, constStatus: ConstructionStatusEnum, productStatus: ProductStatusEnum, organizationId: string }> | null } | null };

export type ProductQueryVariables = Exact<{
  input?: InputMaybe<ProductUniqueWhereInput>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', id: string, images?: string | null, name: string, address1?: string | null, city: string, district: string, floors: number, floorNumber: number, roomNumber: number, sqr: number, priceSqr?: number | null, price?: number | null, description?: string | null, releaseDate?: any | null, constStatus: ConstructionStatusEnum, productStatus: ProductStatusEnum, organizationId: string } | null };


export const MeAuthDocument = gql`
    query meAuth {
  meAuth {
    id
    role
    email
    countryCode
    phone
    userName
    createdAt
    updatedAt
    organizationUsers {
      id
      orgRole
    }
    profile {
      id
      firstName
      lastName
    }
    image
  }
}
    `;

/**
 * __useMeAuthQuery__
 *
 * To run a query within a React component, call `useMeAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeAuthQuery(baseOptions?: Apollo.QueryHookOptions<MeAuthQuery, MeAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeAuthQuery, MeAuthQueryVariables>(MeAuthDocument, options);
      }
export function useMeAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeAuthQuery, MeAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeAuthQuery, MeAuthQueryVariables>(MeAuthDocument, options);
        }
export type MeAuthQueryHookResult = ReturnType<typeof useMeAuthQuery>;
export type MeAuthLazyQueryHookResult = ReturnType<typeof useMeAuthLazyQuery>;
export type MeAuthQueryResult = Apollo.QueryResult<MeAuthQuery, MeAuthQueryVariables>;
export const LogoutDocument = gql`
    mutation logout($deviceId: String) {
  logout(deviceId: $deviceId)
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshAccessTokenDocument = gql`
    mutation refreshAccessToken($input: RefreshToAccessTokenInput!) {
  refreshAccessToken(input: $input) {
    accessToken
    refreshToken
    wsToken
  }
}
    `;
export type RefreshAccessTokenMutationFn = Apollo.MutationFunction<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;

/**
 * __useRefreshAccessTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAccessTokenMutation, { data, loading, error }] = useRefreshAccessTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>(RefreshAccessTokenDocument, options);
      }
export type RefreshAccessTokenMutationHookResult = ReturnType<typeof useRefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationResult = Apollo.MutationResult<RefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationOptions = Apollo.BaseMutationOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;
export const ProductCreateDocument = gql`
    mutation productCreate($input: ProductInput!) {
  productCreate(input: $input) {
    id
    images
    name
    address1
    city
    district
    floors
    floorNumber
    roomNumber
    sqr
    priceSqr
    price
    description
    releaseDate
    constStatus
    productStatus
    organizationId
  }
}
    `;
export type ProductCreateMutationFn = Apollo.MutationFunction<ProductCreateMutation, ProductCreateMutationVariables>;

/**
 * __useProductCreateMutation__
 *
 * To run a mutation, you first call `useProductCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productCreateMutation, { data, loading, error }] = useProductCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProductCreateMutation(baseOptions?: Apollo.MutationHookOptions<ProductCreateMutation, ProductCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProductCreateMutation, ProductCreateMutationVariables>(ProductCreateDocument, options);
      }
export type ProductCreateMutationHookResult = ReturnType<typeof useProductCreateMutation>;
export type ProductCreateMutationResult = Apollo.MutationResult<ProductCreateMutation>;
export type ProductCreateMutationOptions = Apollo.BaseMutationOptions<ProductCreateMutation, ProductCreateMutationVariables>;
export const ProductUpdateDocument = gql`
    mutation productUpdate($input: ProductInput!, $id: String!) {
  productUpdate(input: $input, _id: $id) {
    id
    images
    name
    address1
    city
    district
    floors
    floorNumber
    roomNumber
    sqr
    priceSqr
    price
    description
    releaseDate
    constStatus
    productStatus
    organizationId
  }
}
    `;
export type ProductUpdateMutationFn = Apollo.MutationFunction<ProductUpdateMutation, ProductUpdateMutationVariables>;

/**
 * __useProductUpdateMutation__
 *
 * To run a mutation, you first call `useProductUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productUpdateMutation, { data, loading, error }] = useProductUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ProductUpdateMutation, ProductUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ProductUpdateMutation, ProductUpdateMutationVariables>(ProductUpdateDocument, options);
      }
export type ProductUpdateMutationHookResult = ReturnType<typeof useProductUpdateMutation>;
export type ProductUpdateMutationResult = Apollo.MutationResult<ProductUpdateMutation>;
export type ProductUpdateMutationOptions = Apollo.BaseMutationOptions<ProductUpdateMutation, ProductUpdateMutationVariables>;
export const AuthWebDocument = gql`
    mutation authWeb($input: ExternalWebAuthInput!) {
  authWeb(input: $input) {
    accessToken
    refreshToken
  }
}
    `;
export type AuthWebMutationFn = Apollo.MutationFunction<AuthWebMutation, AuthWebMutationVariables>;

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
export function useAuthWebMutation(baseOptions?: Apollo.MutationHookOptions<AuthWebMutation, AuthWebMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthWebMutation, AuthWebMutationVariables>(AuthWebDocument, options);
      }
export type AuthWebMutationHookResult = ReturnType<typeof useAuthWebMutation>;
export type AuthWebMutationResult = Apollo.MutationResult<AuthWebMutation>;
export type AuthWebMutationOptions = Apollo.BaseMutationOptions<AuthWebMutation, AuthWebMutationVariables>;
export const LoginEmailDocument = gql`
    mutation loginEmail($input: LoginEmailInput!) {
  loginEmail(input: $input) {
    accessToken
    refreshToken
    isEmailConfirmed
    isPhoneConfirmed
    deviceId
    devices {
      id
      deviceName
      deviceType
      deviceOs
    }
  }
}
    `;
export type LoginEmailMutationFn = Apollo.MutationFunction<LoginEmailMutation, LoginEmailMutationVariables>;

/**
 * __useLoginEmailMutation__
 *
 * To run a mutation, you first call `useLoginEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginEmailMutation, { data, loading, error }] = useLoginEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginEmailMutation(baseOptions?: Apollo.MutationHookOptions<LoginEmailMutation, LoginEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginEmailMutation, LoginEmailMutationVariables>(LoginEmailDocument, options);
      }
export type LoginEmailMutationHookResult = ReturnType<typeof useLoginEmailMutation>;
export type LoginEmailMutationResult = Apollo.MutationResult<LoginEmailMutation>;
export type LoginEmailMutationOptions = Apollo.BaseMutationOptions<LoginEmailMutation, LoginEmailMutationVariables>;
export const LoginPhoneDocument = gql`
    mutation loginPhone($input: LoginPhoneInput!) {
  loginPhone(input: $input) {
    accessToken
    refreshToken
    isEmailConfirmed
    isPhoneConfirmed
    deviceId
    devices {
      id
      deviceName
      deviceType
      deviceOs
    }
  }
}
    `;
export type LoginPhoneMutationFn = Apollo.MutationFunction<LoginPhoneMutation, LoginPhoneMutationVariables>;

/**
 * __useLoginPhoneMutation__
 *
 * To run a mutation, you first call `useLoginPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginPhoneMutation, { data, loading, error }] = useLoginPhoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginPhoneMutation(baseOptions?: Apollo.MutationHookOptions<LoginPhoneMutation, LoginPhoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginPhoneMutation, LoginPhoneMutationVariables>(LoginPhoneDocument, options);
      }
export type LoginPhoneMutationHookResult = ReturnType<typeof useLoginPhoneMutation>;
export type LoginPhoneMutationResult = Apollo.MutationResult<LoginPhoneMutation>;
export type LoginPhoneMutationOptions = Apollo.BaseMutationOptions<LoginPhoneMutation, LoginPhoneMutationVariables>;
export const RegisterEmailDocument = gql`
    mutation registerEmail($input: RegisterEmailInput!) {
  registerEmail(input: $input)
}
    `;
export type RegisterEmailMutationFn = Apollo.MutationFunction<RegisterEmailMutation, RegisterEmailMutationVariables>;

/**
 * __useRegisterEmailMutation__
 *
 * To run a mutation, you first call `useRegisterEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerEmailMutation, { data, loading, error }] = useRegisterEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterEmailMutation(baseOptions?: Apollo.MutationHookOptions<RegisterEmailMutation, RegisterEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterEmailMutation, RegisterEmailMutationVariables>(RegisterEmailDocument, options);
      }
export type RegisterEmailMutationHookResult = ReturnType<typeof useRegisterEmailMutation>;
export type RegisterEmailMutationResult = Apollo.MutationResult<RegisterEmailMutation>;
export type RegisterEmailMutationOptions = Apollo.BaseMutationOptions<RegisterEmailMutation, RegisterEmailMutationVariables>;
export const RegisterPhoneDocument = gql`
    mutation registerPhone($input: RegisterPhoneInput!) {
  registerPhone(input: $input)
}
    `;
export type RegisterPhoneMutationFn = Apollo.MutationFunction<RegisterPhoneMutation, RegisterPhoneMutationVariables>;

/**
 * __useRegisterPhoneMutation__
 *
 * To run a mutation, you first call `useRegisterPhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterPhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerPhoneMutation, { data, loading, error }] = useRegisterPhoneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterPhoneMutation(baseOptions?: Apollo.MutationHookOptions<RegisterPhoneMutation, RegisterPhoneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterPhoneMutation, RegisterPhoneMutationVariables>(RegisterPhoneDocument, options);
      }
export type RegisterPhoneMutationHookResult = ReturnType<typeof useRegisterPhoneMutation>;
export type RegisterPhoneMutationResult = Apollo.MutationResult<RegisterPhoneMutation>;
export type RegisterPhoneMutationOptions = Apollo.BaseMutationOptions<RegisterPhoneMutation, RegisterPhoneMutationVariables>;
export const AuthEmailForgetPasswordDocument = gql`
    mutation authEmailForgetPassword($input: AuthEmailVerifyTokenSenderInput!) {
  authEmailForgetPassword(input: $input)
}
    `;
export type AuthEmailForgetPasswordMutationFn = Apollo.MutationFunction<AuthEmailForgetPasswordMutation, AuthEmailForgetPasswordMutationVariables>;

/**
 * __useAuthEmailForgetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthEmailForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailForgetPasswordMutation, { data, loading, error }] = useAuthEmailForgetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailForgetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<AuthEmailForgetPasswordMutation, AuthEmailForgetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthEmailForgetPasswordMutation, AuthEmailForgetPasswordMutationVariables>(AuthEmailForgetPasswordDocument, options);
      }
export type AuthEmailForgetPasswordMutationHookResult = ReturnType<typeof useAuthEmailForgetPasswordMutation>;
export type AuthEmailForgetPasswordMutationResult = Apollo.MutationResult<AuthEmailForgetPasswordMutation>;
export type AuthEmailForgetPasswordMutationOptions = Apollo.BaseMutationOptions<AuthEmailForgetPasswordMutation, AuthEmailForgetPasswordMutationVariables>;
export const AuthEmailResetPasswordDocument = gql`
    mutation authEmailResetPassword($input: AuthEmailResetPasswordInput!) {
  authEmailResetPassword(input: $input) {
    accessToken
    refreshToken
    deviceId
    devices {
      id
      deviceName
      deviceType
      deviceOs
    }
  }
}
    `;
export type AuthEmailResetPasswordMutationFn = Apollo.MutationFunction<AuthEmailResetPasswordMutation, AuthEmailResetPasswordMutationVariables>;

/**
 * __useAuthEmailResetPasswordMutation__
 *
 * To run a mutation, you first call `useAuthEmailResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailResetPasswordMutation, { data, loading, error }] = useAuthEmailResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<AuthEmailResetPasswordMutation, AuthEmailResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthEmailResetPasswordMutation, AuthEmailResetPasswordMutationVariables>(AuthEmailResetPasswordDocument, options);
      }
export type AuthEmailResetPasswordMutationHookResult = ReturnType<typeof useAuthEmailResetPasswordMutation>;
export type AuthEmailResetPasswordMutationResult = Apollo.MutationResult<AuthEmailResetPasswordMutation>;
export type AuthEmailResetPasswordMutationOptions = Apollo.BaseMutationOptions<AuthEmailResetPasswordMutation, AuthEmailResetPasswordMutationVariables>;
export const AuthEmailVerifyTokenDocument = gql`
    mutation AuthEmailVerifyToken($input: AuthEmailVerifyTokenInput!) {
  authEmailVerifyToken(input: $input) {
    accessToken
    refreshToken
    resetToken
    deviceId
    devices {
      id
      deviceName
      deviceType
      deviceOs
    }
  }
}
    `;
export type AuthEmailVerifyTokenMutationFn = Apollo.MutationFunction<AuthEmailVerifyTokenMutation, AuthEmailVerifyTokenMutationVariables>;

/**
 * __useAuthEmailVerifyTokenMutation__
 *
 * To run a mutation, you first call `useAuthEmailVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailVerifyTokenMutation, { data, loading, error }] = useAuthEmailVerifyTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<AuthEmailVerifyTokenMutation, AuthEmailVerifyTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthEmailVerifyTokenMutation, AuthEmailVerifyTokenMutationVariables>(AuthEmailVerifyTokenDocument, options);
      }
export type AuthEmailVerifyTokenMutationHookResult = ReturnType<typeof useAuthEmailVerifyTokenMutation>;
export type AuthEmailVerifyTokenMutationResult = Apollo.MutationResult<AuthEmailVerifyTokenMutation>;
export type AuthEmailVerifyTokenMutationOptions = Apollo.BaseMutationOptions<AuthEmailVerifyTokenMutation, AuthEmailVerifyTokenMutationVariables>;
export const AuthEmailVerifyTokenSenderDocument = gql`
    mutation authEmailVerifyTokenSender($input: AuthEmailVerifyTokenSenderInput!) {
  authEmailVerifyTokenSender(input: $input)
}
    `;
export type AuthEmailVerifyTokenSenderMutationFn = Apollo.MutationFunction<AuthEmailVerifyTokenSenderMutation, AuthEmailVerifyTokenSenderMutationVariables>;

/**
 * __useAuthEmailVerifyTokenSenderMutation__
 *
 * To run a mutation, you first call `useAuthEmailVerifyTokenSenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthEmailVerifyTokenSenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authEmailVerifyTokenSenderMutation, { data, loading, error }] = useAuthEmailVerifyTokenSenderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAuthEmailVerifyTokenSenderMutation(baseOptions?: Apollo.MutationHookOptions<AuthEmailVerifyTokenSenderMutation, AuthEmailVerifyTokenSenderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthEmailVerifyTokenSenderMutation, AuthEmailVerifyTokenSenderMutationVariables>(AuthEmailVerifyTokenSenderDocument, options);
      }
export type AuthEmailVerifyTokenSenderMutationHookResult = ReturnType<typeof useAuthEmailVerifyTokenSenderMutation>;
export type AuthEmailVerifyTokenSenderMutationResult = Apollo.MutationResult<AuthEmailVerifyTokenSenderMutation>;
export type AuthEmailVerifyTokenSenderMutationOptions = Apollo.BaseMutationOptions<AuthEmailVerifyTokenSenderMutation, AuthEmailVerifyTokenSenderMutationVariables>;
export const AccountEliminateDocument = gql`
    mutation AccountEliminate($input: AccountEliminateInputType!) {
  accountEliminate(input: $input) {
    accessToken
    refreshToken
    deviceId
  }
}
    `;
export type AccountEliminateMutationFn = Apollo.MutationFunction<AccountEliminateMutation, AccountEliminateMutationVariables>;

/**
 * __useAccountEliminateMutation__
 *
 * To run a mutation, you first call `useAccountEliminateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountEliminateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountEliminateMutation, { data, loading, error }] = useAccountEliminateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAccountEliminateMutation(baseOptions?: Apollo.MutationHookOptions<AccountEliminateMutation, AccountEliminateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AccountEliminateMutation, AccountEliminateMutationVariables>(AccountEliminateDocument, options);
      }
export type AccountEliminateMutationHookResult = ReturnType<typeof useAccountEliminateMutation>;
export type AccountEliminateMutationResult = Apollo.MutationResult<AccountEliminateMutation>;
export type AccountEliminateMutationOptions = Apollo.BaseMutationOptions<AccountEliminateMutation, AccountEliminateMutationVariables>;
export const ProductsDocument = gql`
    query products($input: ProductWhereInput) {
  products(input: $input) {
    data {
      id
      images
      name
      address1
      city
      district
      floors
      floorNumber
      roomNumber
      sqr
      priceSqr
      price
      description
      releaseDate
      constStatus
      productStatus
      organizationId
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductDocument = gql`
    query product($input: ProductUniqueWhereInput) {
  product(input: $input) {
    id
    images
    name
    address1
    city
    district
    floors
    floorNumber
    roomNumber
    sqr
    priceSqr
    price
    description
    releaseDate
    constStatus
    productStatus
    organizationId
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    