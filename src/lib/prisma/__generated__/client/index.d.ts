
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Mini
 * 
 */
export type Mini = $Result.DefaultSelection<Prisma.$MiniPayload>
/**
 * Model Monster
 * 
 */
export type Monster = $Result.DefaultSelection<Prisma.$MonsterPayload>
/**
 * Model MonsterSize
 * 
 */
export type MonsterSize = $Result.DefaultSelection<Prisma.$MonsterSizePayload>
/**
 * Model MonsterType
 * 
 */
export type MonsterType = $Result.DefaultSelection<Prisma.$MonsterTypePayload>
/**
 * Model MonsterSubType
 * 
 */
export type MonsterSubType = $Result.DefaultSelection<Prisma.$MonsterSubTypePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model SheetType
 * 
 */
export type SheetType = $Result.DefaultSelection<Prisma.$SheetTypePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Minis
 * const minis = await prisma.mini.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Minis
   * const minis = await prisma.mini.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.mini`: Exposes CRUD operations for the **Mini** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Minis
    * const minis = await prisma.mini.findMany()
    * ```
    */
  get mini(): Prisma.MiniDelegate<ExtArgs>;

  /**
   * `prisma.monster`: Exposes CRUD operations for the **Monster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monsters
    * const monsters = await prisma.monster.findMany()
    * ```
    */
  get monster(): Prisma.MonsterDelegate<ExtArgs>;

  /**
   * `prisma.monsterSize`: Exposes CRUD operations for the **MonsterSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonsterSizes
    * const monsterSizes = await prisma.monsterSize.findMany()
    * ```
    */
  get monsterSize(): Prisma.MonsterSizeDelegate<ExtArgs>;

  /**
   * `prisma.monsterType`: Exposes CRUD operations for the **MonsterType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonsterTypes
    * const monsterTypes = await prisma.monsterType.findMany()
    * ```
    */
  get monsterType(): Prisma.MonsterTypeDelegate<ExtArgs>;

  /**
   * `prisma.monsterSubType`: Exposes CRUD operations for the **MonsterSubType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonsterSubTypes
    * const monsterSubTypes = await prisma.monsterSubType.findMany()
    * ```
    */
  get monsterSubType(): Prisma.MonsterSubTypeDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.sheetType`: Exposes CRUD operations for the **SheetType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SheetTypes
    * const sheetTypes = await prisma.sheetType.findMany()
    * ```
    */
  get sheetType(): Prisma.SheetTypeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Mini: 'Mini',
    Monster: 'Monster',
    MonsterSize: 'MonsterSize',
    MonsterType: 'MonsterType',
    MonsterSubType: 'MonsterSubType',
    Image: 'Image',
    SheetType: 'SheetType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'mini' | 'monster' | 'monsterSize' | 'monsterType' | 'monsterSubType' | 'image' | 'sheetType'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Mini: {
        payload: Prisma.$MiniPayload<ExtArgs>
        fields: Prisma.MiniFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiniFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiniFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload>
          }
          findFirst: {
            args: Prisma.MiniFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiniFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload>
          }
          findMany: {
            args: Prisma.MiniFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload>[]
          }
          create: {
            args: Prisma.MiniCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload>
          }
          delete: {
            args: Prisma.MiniDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload>
          }
          update: {
            args: Prisma.MiniUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload>
          }
          deleteMany: {
            args: Prisma.MiniDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MiniUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MiniUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MiniPayload>
          }
          aggregate: {
            args: Prisma.MiniAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMini>
          }
          groupBy: {
            args: Prisma.MiniGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MiniGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiniCountArgs<ExtArgs>,
            result: $Utils.Optional<MiniCountAggregateOutputType> | number
          }
        }
      }
      Monster: {
        payload: Prisma.$MonsterPayload<ExtArgs>
        fields: Prisma.MonsterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findFirst: {
            args: Prisma.MonsterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          findMany: {
            args: Prisma.MonsterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>[]
          }
          create: {
            args: Prisma.MonsterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          delete: {
            args: Prisma.MonsterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          update: {
            args: Prisma.MonsterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          deleteMany: {
            args: Prisma.MonsterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MonsterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterPayload>
          }
          aggregate: {
            args: Prisma.MonsterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMonster>
          }
          groupBy: {
            args: Prisma.MonsterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MonsterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterCountArgs<ExtArgs>,
            result: $Utils.Optional<MonsterCountAggregateOutputType> | number
          }
        }
      }
      MonsterSize: {
        payload: Prisma.$MonsterSizePayload<ExtArgs>
        fields: Prisma.MonsterSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterSizeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterSizeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload>
          }
          findFirst: {
            args: Prisma.MonsterSizeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterSizeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload>
          }
          findMany: {
            args: Prisma.MonsterSizeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload>[]
          }
          create: {
            args: Prisma.MonsterSizeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload>
          }
          delete: {
            args: Prisma.MonsterSizeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload>
          }
          update: {
            args: Prisma.MonsterSizeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload>
          }
          deleteMany: {
            args: Prisma.MonsterSizeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterSizeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MonsterSizeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSizePayload>
          }
          aggregate: {
            args: Prisma.MonsterSizeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMonsterSize>
          }
          groupBy: {
            args: Prisma.MonsterSizeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MonsterSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterSizeCountArgs<ExtArgs>,
            result: $Utils.Optional<MonsterSizeCountAggregateOutputType> | number
          }
        }
      }
      MonsterType: {
        payload: Prisma.$MonsterTypePayload<ExtArgs>
        fields: Prisma.MonsterTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          findFirst: {
            args: Prisma.MonsterTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          findMany: {
            args: Prisma.MonsterTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>[]
          }
          create: {
            args: Prisma.MonsterTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          delete: {
            args: Prisma.MonsterTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          update: {
            args: Prisma.MonsterTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          deleteMany: {
            args: Prisma.MonsterTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MonsterTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterTypePayload>
          }
          aggregate: {
            args: Prisma.MonsterTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMonsterType>
          }
          groupBy: {
            args: Prisma.MonsterTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MonsterTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<MonsterTypeCountAggregateOutputType> | number
          }
        }
      }
      MonsterSubType: {
        payload: Prisma.$MonsterSubTypePayload<ExtArgs>
        fields: Prisma.MonsterSubTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterSubTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterSubTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload>
          }
          findFirst: {
            args: Prisma.MonsterSubTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterSubTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload>
          }
          findMany: {
            args: Prisma.MonsterSubTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload>[]
          }
          create: {
            args: Prisma.MonsterSubTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload>
          }
          delete: {
            args: Prisma.MonsterSubTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload>
          }
          update: {
            args: Prisma.MonsterSubTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload>
          }
          deleteMany: {
            args: Prisma.MonsterSubTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterSubTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MonsterSubTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MonsterSubTypePayload>
          }
          aggregate: {
            args: Prisma.MonsterSubTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMonsterSubType>
          }
          groupBy: {
            args: Prisma.MonsterSubTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MonsterSubTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterSubTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<MonsterSubTypeCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      SheetType: {
        payload: Prisma.$SheetTypePayload<ExtArgs>
        fields: Prisma.SheetTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload>
          }
          findFirst: {
            args: Prisma.SheetTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload>
          }
          findMany: {
            args: Prisma.SheetTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload>[]
          }
          create: {
            args: Prisma.SheetTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload>
          }
          delete: {
            args: Prisma.SheetTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload>
          }
          update: {
            args: Prisma.SheetTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload>
          }
          deleteMany: {
            args: Prisma.SheetTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SheetTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SheetTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SheetTypePayload>
          }
          aggregate: {
            args: Prisma.SheetTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSheetType>
          }
          groupBy: {
            args: Prisma.SheetTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SheetTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<SheetTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MiniCountOutputType
   */

  export type MiniCountOutputType = {
    monsters: number
  }

  export type MiniCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    monsters?: boolean | MiniCountOutputTypeCountMonstersArgs
  }

  // Custom InputTypes

  /**
   * MiniCountOutputType without action
   */
  export type MiniCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiniCountOutputType
     */
    select?: MiniCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MiniCountOutputType without action
   */
  export type MiniCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }



  /**
   * Count Type MonsterCountOutputType
   */

  export type MonsterCountOutputType = {
    minis: number
  }

  export type MonsterCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    minis?: boolean | MonsterCountOutputTypeCountMinisArgs
  }

  // Custom InputTypes

  /**
   * MonsterCountOutputType without action
   */
  export type MonsterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterCountOutputType
     */
    select?: MonsterCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MonsterCountOutputType without action
   */
  export type MonsterCountOutputTypeCountMinisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MiniWhereInput
  }



  /**
   * Count Type MonsterSizeCountOutputType
   */

  export type MonsterSizeCountOutputType = {
    minis: number
    monsters: number
  }

  export type MonsterSizeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    minis?: boolean | MonsterSizeCountOutputTypeCountMinisArgs
    monsters?: boolean | MonsterSizeCountOutputTypeCountMonstersArgs
  }

  // Custom InputTypes

  /**
   * MonsterSizeCountOutputType without action
   */
  export type MonsterSizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSizeCountOutputType
     */
    select?: MonsterSizeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MonsterSizeCountOutputType without action
   */
  export type MonsterSizeCountOutputTypeCountMinisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MiniWhereInput
  }


  /**
   * MonsterSizeCountOutputType without action
   */
  export type MonsterSizeCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }



  /**
   * Count Type MonsterTypeCountOutputType
   */

  export type MonsterTypeCountOutputType = {
    minis: number
    monsters: number
  }

  export type MonsterTypeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    minis?: boolean | MonsterTypeCountOutputTypeCountMinisArgs
    monsters?: boolean | MonsterTypeCountOutputTypeCountMonstersArgs
  }

  // Custom InputTypes

  /**
   * MonsterTypeCountOutputType without action
   */
  export type MonsterTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTypeCountOutputType
     */
    select?: MonsterTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MonsterTypeCountOutputType without action
   */
  export type MonsterTypeCountOutputTypeCountMinisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MiniWhereInput
  }


  /**
   * MonsterTypeCountOutputType without action
   */
  export type MonsterTypeCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }



  /**
   * Count Type MonsterSubTypeCountOutputType
   */

  export type MonsterSubTypeCountOutputType = {
    minis: number
    monsters: number
  }

  export type MonsterSubTypeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    minis?: boolean | MonsterSubTypeCountOutputTypeCountMinisArgs
    monsters?: boolean | MonsterSubTypeCountOutputTypeCountMonstersArgs
  }

  // Custom InputTypes

  /**
   * MonsterSubTypeCountOutputType without action
   */
  export type MonsterSubTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubTypeCountOutputType
     */
    select?: MonsterSubTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MonsterSubTypeCountOutputType without action
   */
  export type MonsterSubTypeCountOutputTypeCountMinisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MiniWhereInput
  }


  /**
   * MonsterSubTypeCountOutputType without action
   */
  export type MonsterSubTypeCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }



  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    monsters: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    monsters?: boolean | ImageCountOutputTypeCountMonstersArgs
  }

  // Custom InputTypes

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountMonstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }



  /**
   * Count Type SheetTypeCountOutputType
   */

  export type SheetTypeCountOutputType = {
    Monster: number
  }

  export type SheetTypeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Monster?: boolean | SheetTypeCountOutputTypeCountMonsterArgs
  }

  // Custom InputTypes

  /**
   * SheetTypeCountOutputType without action
   */
  export type SheetTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetTypeCountOutputType
     */
    select?: SheetTypeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SheetTypeCountOutputType without action
   */
  export type SheetTypeCountOutputTypeCountMonsterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Mini
   */

  export type AggregateMini = {
    _count: MiniCountAggregateOutputType | null
    _avg: MiniAvgAggregateOutputType | null
    _sum: MiniSumAggregateOutputType | null
    _min: MiniMinAggregateOutputType | null
    _max: MiniMaxAggregateOutputType | null
  }

  export type MiniAvgAggregateOutputType = {
    id: number | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    quantity: number | null
  }

  export type MiniSumAggregateOutputType = {
    id: number | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    quantity: number | null
  }

  export type MiniMinAggregateOutputType = {
    id: number | null
    name: string | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    quantity: number | null
  }

  export type MiniMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    quantity: number | null
  }

  export type MiniCountAggregateOutputType = {
    id: number
    name: number
    sizeId: number
    typeId: number
    subTypeId: number
    quantity: number
    _all: number
  }


  export type MiniAvgAggregateInputType = {
    id?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    quantity?: true
  }

  export type MiniSumAggregateInputType = {
    id?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    quantity?: true
  }

  export type MiniMinAggregateInputType = {
    id?: true
    name?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    quantity?: true
  }

  export type MiniMaxAggregateInputType = {
    id?: true
    name?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    quantity?: true
  }

  export type MiniCountAggregateInputType = {
    id?: true
    name?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    quantity?: true
    _all?: true
  }

  export type MiniAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mini to aggregate.
     */
    where?: MiniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minis to fetch.
     */
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Minis
    **/
    _count?: true | MiniCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiniAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiniSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiniMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiniMaxAggregateInputType
  }

  export type GetMiniAggregateType<T extends MiniAggregateArgs> = {
        [P in keyof T & keyof AggregateMini]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMini[P]>
      : GetScalarType<T[P], AggregateMini[P]>
  }




  export type MiniGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MiniWhereInput
    orderBy?: MiniOrderByWithAggregationInput | MiniOrderByWithAggregationInput[]
    by: MiniScalarFieldEnum[] | MiniScalarFieldEnum
    having?: MiniScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiniCountAggregateInputType | true
    _avg?: MiniAvgAggregateInputType
    _sum?: MiniSumAggregateInputType
    _min?: MiniMinAggregateInputType
    _max?: MiniMaxAggregateInputType
  }

  export type MiniGroupByOutputType = {
    id: number
    name: string
    sizeId: number
    typeId: number
    subTypeId: number | null
    quantity: number
    _count: MiniCountAggregateOutputType | null
    _avg: MiniAvgAggregateOutputType | null
    _sum: MiniSumAggregateOutputType | null
    _min: MiniMinAggregateOutputType | null
    _max: MiniMaxAggregateOutputType | null
  }

  type GetMiniGroupByPayload<T extends MiniGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiniGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiniGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiniGroupByOutputType[P]>
            : GetScalarType<T[P], MiniGroupByOutputType[P]>
        }
      >
    >


  export type MiniSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sizeId?: boolean
    typeId?: boolean
    subTypeId?: boolean
    quantity?: boolean
    size?: boolean | MonsterSizeDefaultArgs<ExtArgs>
    type?: boolean | MonsterTypeDefaultArgs<ExtArgs>
    subType?: boolean | Mini$subTypeArgs<ExtArgs>
    monsters?: boolean | Mini$monstersArgs<ExtArgs>
    _count?: boolean | MiniCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mini"]>

  export type MiniSelectScalar = {
    id?: boolean
    name?: boolean
    sizeId?: boolean
    typeId?: boolean
    subTypeId?: boolean
    quantity?: boolean
  }

  export type MiniInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    size?: boolean | MonsterSizeDefaultArgs<ExtArgs>
    type?: boolean | MonsterTypeDefaultArgs<ExtArgs>
    subType?: boolean | Mini$subTypeArgs<ExtArgs>
    monsters?: boolean | Mini$monstersArgs<ExtArgs>
    _count?: boolean | MiniCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MiniPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Mini"
    objects: {
      size: Prisma.$MonsterSizePayload<ExtArgs>
      type: Prisma.$MonsterTypePayload<ExtArgs>
      subType: Prisma.$MonsterSubTypePayload<ExtArgs> | null
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      sizeId: number
      typeId: number
      subTypeId: number | null
      quantity: number
    }, ExtArgs["result"]["mini"]>
    composites: {}
  }


  type MiniGetPayload<S extends boolean | null | undefined | MiniDefaultArgs> = $Result.GetResult<Prisma.$MiniPayload, S>

  type MiniCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MiniFindManyArgs, 'select' | 'include'> & {
      select?: MiniCountAggregateInputType | true
    }

  export interface MiniDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mini'], meta: { name: 'Mini' } }
    /**
     * Find zero or one Mini that matches the filter.
     * @param {MiniFindUniqueArgs} args - Arguments to find a Mini
     * @example
     * // Get one Mini
     * const mini = await prisma.mini.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MiniFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MiniFindUniqueArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Mini that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MiniFindUniqueOrThrowArgs} args - Arguments to find a Mini
     * @example
     * // Get one Mini
     * const mini = await prisma.mini.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MiniFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MiniFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Mini that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniFindFirstArgs} args - Arguments to find a Mini
     * @example
     * // Get one Mini
     * const mini = await prisma.mini.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MiniFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MiniFindFirstArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Mini that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniFindFirstOrThrowArgs} args - Arguments to find a Mini
     * @example
     * // Get one Mini
     * const mini = await prisma.mini.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MiniFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MiniFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Minis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Minis
     * const minis = await prisma.mini.findMany()
     * 
     * // Get first 10 Minis
     * const minis = await prisma.mini.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miniWithIdOnly = await prisma.mini.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MiniFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MiniFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Mini.
     * @param {MiniCreateArgs} args - Arguments to create a Mini.
     * @example
     * // Create one Mini
     * const Mini = await prisma.mini.create({
     *   data: {
     *     // ... data to create a Mini
     *   }
     * })
     * 
    **/
    create<T extends MiniCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MiniCreateArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Mini.
     * @param {MiniDeleteArgs} args - Arguments to delete one Mini.
     * @example
     * // Delete one Mini
     * const Mini = await prisma.mini.delete({
     *   where: {
     *     // ... filter to delete one Mini
     *   }
     * })
     * 
    **/
    delete<T extends MiniDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MiniDeleteArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Mini.
     * @param {MiniUpdateArgs} args - Arguments to update one Mini.
     * @example
     * // Update one Mini
     * const mini = await prisma.mini.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MiniUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MiniUpdateArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Minis.
     * @param {MiniDeleteManyArgs} args - Arguments to filter Minis to delete.
     * @example
     * // Delete a few Minis
     * const { count } = await prisma.mini.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MiniDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MiniDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Minis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Minis
     * const mini = await prisma.mini.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MiniUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MiniUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mini.
     * @param {MiniUpsertArgs} args - Arguments to update or create a Mini.
     * @example
     * // Update or create a Mini
     * const mini = await prisma.mini.upsert({
     *   create: {
     *     // ... data to create a Mini
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mini we want to update
     *   }
     * })
    **/
    upsert<T extends MiniUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MiniUpsertArgs<ExtArgs>>
    ): Prisma__MiniClient<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Minis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniCountArgs} args - Arguments to filter Minis to count.
     * @example
     * // Count the number of Minis
     * const count = await prisma.mini.count({
     *   where: {
     *     // ... the filter for the Minis we want to count
     *   }
     * })
    **/
    count<T extends MiniCountArgs>(
      args?: Subset<T, MiniCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiniCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mini.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MiniAggregateArgs>(args: Subset<T, MiniAggregateArgs>): Prisma.PrismaPromise<GetMiniAggregateType<T>>

    /**
     * Group by Mini.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiniGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MiniGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiniGroupByArgs['orderBy'] }
        : { orderBy?: MiniGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MiniGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiniGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mini model
   */
  readonly fields: MiniFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mini.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiniClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    size<T extends MonsterSizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonsterSizeDefaultArgs<ExtArgs>>): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    type<T extends MonsterTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonsterTypeDefaultArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subType<T extends Mini$subTypeArgs<ExtArgs> = {}>(args?: Subset<T, Mini$subTypeArgs<ExtArgs>>): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    monsters<T extends Mini$monstersArgs<ExtArgs> = {}>(args?: Subset<T, Mini$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Mini model
   */ 
  interface MiniFieldRefs {
    readonly id: FieldRef<"Mini", 'Int'>
    readonly name: FieldRef<"Mini", 'String'>
    readonly sizeId: FieldRef<"Mini", 'Int'>
    readonly typeId: FieldRef<"Mini", 'Int'>
    readonly subTypeId: FieldRef<"Mini", 'Int'>
    readonly quantity: FieldRef<"Mini", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Mini findUnique
   */
  export type MiniFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * Filter, which Mini to fetch.
     */
    where: MiniWhereUniqueInput
  }


  /**
   * Mini findUniqueOrThrow
   */
  export type MiniFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * Filter, which Mini to fetch.
     */
    where: MiniWhereUniqueInput
  }


  /**
   * Mini findFirst
   */
  export type MiniFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * Filter, which Mini to fetch.
     */
    where?: MiniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minis to fetch.
     */
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minis.
     */
    cursor?: MiniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minis.
     */
    distinct?: MiniScalarFieldEnum | MiniScalarFieldEnum[]
  }


  /**
   * Mini findFirstOrThrow
   */
  export type MiniFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * Filter, which Mini to fetch.
     */
    where?: MiniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minis to fetch.
     */
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Minis.
     */
    cursor?: MiniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Minis.
     */
    distinct?: MiniScalarFieldEnum | MiniScalarFieldEnum[]
  }


  /**
   * Mini findMany
   */
  export type MiniFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * Filter, which Minis to fetch.
     */
    where?: MiniWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Minis to fetch.
     */
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Minis.
     */
    cursor?: MiniWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Minis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Minis.
     */
    skip?: number
    distinct?: MiniScalarFieldEnum | MiniScalarFieldEnum[]
  }


  /**
   * Mini create
   */
  export type MiniCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * The data needed to create a Mini.
     */
    data: XOR<MiniCreateInput, MiniUncheckedCreateInput>
  }


  /**
   * Mini update
   */
  export type MiniUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * The data needed to update a Mini.
     */
    data: XOR<MiniUpdateInput, MiniUncheckedUpdateInput>
    /**
     * Choose, which Mini to update.
     */
    where: MiniWhereUniqueInput
  }


  /**
   * Mini updateMany
   */
  export type MiniUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Minis.
     */
    data: XOR<MiniUpdateManyMutationInput, MiniUncheckedUpdateManyInput>
    /**
     * Filter which Minis to update
     */
    where?: MiniWhereInput
  }


  /**
   * Mini upsert
   */
  export type MiniUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * The filter to search for the Mini to update in case it exists.
     */
    where: MiniWhereUniqueInput
    /**
     * In case the Mini found by the `where` argument doesn't exist, create a new Mini with this data.
     */
    create: XOR<MiniCreateInput, MiniUncheckedCreateInput>
    /**
     * In case the Mini was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiniUpdateInput, MiniUncheckedUpdateInput>
  }


  /**
   * Mini delete
   */
  export type MiniDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    /**
     * Filter which Mini to delete.
     */
    where: MiniWhereUniqueInput
  }


  /**
   * Mini deleteMany
   */
  export type MiniDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Minis to delete
     */
    where?: MiniWhereInput
  }


  /**
   * Mini.subType
   */
  export type Mini$subTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    where?: MonsterSubTypeWhereInput
  }


  /**
   * Mini.monsters
   */
  export type Mini$monstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * Mini without action
   */
  export type MiniDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
  }



  /**
   * Model Monster
   */

  export type AggregateMonster = {
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  export type MonsterAvgAggregateOutputType = {
    id: number | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    imageId: number | null
    sheetTypeId: number | null
  }

  export type MonsterSumAggregateOutputType = {
    id: number | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    imageId: number | null
    sheetTypeId: number | null
  }

  export type MonsterMinAggregateOutputType = {
    id: number | null
    name: string | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    imageId: number | null
    sheetUrl: string | null
    sheetTypeId: number | null
  }

  export type MonsterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sizeId: number | null
    typeId: number | null
    subTypeId: number | null
    imageId: number | null
    sheetUrl: string | null
    sheetTypeId: number | null
  }

  export type MonsterCountAggregateOutputType = {
    id: number
    name: number
    sizeId: number
    typeId: number
    subTypeId: number
    imageId: number
    sheetUrl: number
    sheetTypeId: number
    _all: number
  }


  export type MonsterAvgAggregateInputType = {
    id?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    imageId?: true
    sheetTypeId?: true
  }

  export type MonsterSumAggregateInputType = {
    id?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    imageId?: true
    sheetTypeId?: true
  }

  export type MonsterMinAggregateInputType = {
    id?: true
    name?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    imageId?: true
    sheetUrl?: true
    sheetTypeId?: true
  }

  export type MonsterMaxAggregateInputType = {
    id?: true
    name?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    imageId?: true
    sheetUrl?: true
    sheetTypeId?: true
  }

  export type MonsterCountAggregateInputType = {
    id?: true
    name?: true
    sizeId?: true
    typeId?: true
    subTypeId?: true
    imageId?: true
    sheetUrl?: true
    sheetTypeId?: true
    _all?: true
  }

  export type MonsterAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monster to aggregate.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monsters
    **/
    _count?: true | MonsterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterMaxAggregateInputType
  }

  export type GetMonsterAggregateType<T extends MonsterAggregateArgs> = {
        [P in keyof T & keyof AggregateMonster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonster[P]>
      : GetScalarType<T[P], AggregateMonster[P]>
  }




  export type MonsterGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithAggregationInput | MonsterOrderByWithAggregationInput[]
    by: MonsterScalarFieldEnum[] | MonsterScalarFieldEnum
    having?: MonsterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterCountAggregateInputType | true
    _avg?: MonsterAvgAggregateInputType
    _sum?: MonsterSumAggregateInputType
    _min?: MonsterMinAggregateInputType
    _max?: MonsterMaxAggregateInputType
  }

  export type MonsterGroupByOutputType = {
    id: number
    name: string
    sizeId: number
    typeId: number
    subTypeId: number | null
    imageId: number | null
    sheetUrl: string
    sheetTypeId: number
    _count: MonsterCountAggregateOutputType | null
    _avg: MonsterAvgAggregateOutputType | null
    _sum: MonsterSumAggregateOutputType | null
    _min: MonsterMinAggregateOutputType | null
    _max: MonsterMaxAggregateOutputType | null
  }

  type GetMonsterGroupByPayload<T extends MonsterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterGroupByOutputType[P]>
        }
      >
    >


  export type MonsterSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sizeId?: boolean
    typeId?: boolean
    subTypeId?: boolean
    imageId?: boolean
    sheetUrl?: boolean
    sheetTypeId?: boolean
    size?: boolean | MonsterSizeDefaultArgs<ExtArgs>
    type?: boolean | MonsterTypeDefaultArgs<ExtArgs>
    subType?: boolean | Monster$subTypeArgs<ExtArgs>
    image?: boolean | Monster$imageArgs<ExtArgs>
    sheetType?: boolean | SheetTypeDefaultArgs<ExtArgs>
    minis?: boolean | Monster$minisArgs<ExtArgs>
    _count?: boolean | MonsterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monster"]>

  export type MonsterSelectScalar = {
    id?: boolean
    name?: boolean
    sizeId?: boolean
    typeId?: boolean
    subTypeId?: boolean
    imageId?: boolean
    sheetUrl?: boolean
    sheetTypeId?: boolean
  }

  export type MonsterInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    size?: boolean | MonsterSizeDefaultArgs<ExtArgs>
    type?: boolean | MonsterTypeDefaultArgs<ExtArgs>
    subType?: boolean | Monster$subTypeArgs<ExtArgs>
    image?: boolean | Monster$imageArgs<ExtArgs>
    sheetType?: boolean | SheetTypeDefaultArgs<ExtArgs>
    minis?: boolean | Monster$minisArgs<ExtArgs>
    _count?: boolean | MonsterCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MonsterPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Monster"
    objects: {
      size: Prisma.$MonsterSizePayload<ExtArgs>
      type: Prisma.$MonsterTypePayload<ExtArgs>
      subType: Prisma.$MonsterSubTypePayload<ExtArgs> | null
      image: Prisma.$ImagePayload<ExtArgs> | null
      sheetType: Prisma.$SheetTypePayload<ExtArgs>
      minis: Prisma.$MiniPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      sizeId: number
      typeId: number
      subTypeId: number | null
      imageId: number | null
      sheetUrl: string
      sheetTypeId: number
    }, ExtArgs["result"]["monster"]>
    composites: {}
  }


  type MonsterGetPayload<S extends boolean | null | undefined | MonsterDefaultArgs> = $Result.GetResult<Prisma.$MonsterPayload, S>

  type MonsterCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MonsterFindManyArgs, 'select' | 'include'> & {
      select?: MonsterCountAggregateInputType | true
    }

  export interface MonsterDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monster'], meta: { name: 'Monster' } }
    /**
     * Find zero or one Monster that matches the filter.
     * @param {MonsterFindUniqueArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonsterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterFindUniqueArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Monster that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonsterFindUniqueOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonsterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Monster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonsterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterFindFirstArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Monster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindFirstOrThrowArgs} args - Arguments to find a Monster
     * @example
     * // Get one Monster
     * const monster = await prisma.monster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonsterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Monsters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monsters
     * const monsters = await prisma.monster.findMany()
     * 
     * // Get first 10 Monsters
     * const monsters = await prisma.monster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterWithIdOnly = await prisma.monster.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonsterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Monster.
     * @param {MonsterCreateArgs} args - Arguments to create a Monster.
     * @example
     * // Create one Monster
     * const Monster = await prisma.monster.create({
     *   data: {
     *     // ... data to create a Monster
     *   }
     * })
     * 
    **/
    create<T extends MonsterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterCreateArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Monster.
     * @param {MonsterDeleteArgs} args - Arguments to delete one Monster.
     * @example
     * // Delete one Monster
     * const Monster = await prisma.monster.delete({
     *   where: {
     *     // ... filter to delete one Monster
     *   }
     * })
     * 
    **/
    delete<T extends MonsterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterDeleteArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Monster.
     * @param {MonsterUpdateArgs} args - Arguments to update one Monster.
     * @example
     * // Update one Monster
     * const monster = await prisma.monster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonsterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterUpdateArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Monsters.
     * @param {MonsterDeleteManyArgs} args - Arguments to filter Monsters to delete.
     * @example
     * // Delete a few Monsters
     * const { count } = await prisma.monster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonsterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monsters
     * const monster = await prisma.monster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonsterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Monster.
     * @param {MonsterUpsertArgs} args - Arguments to update or create a Monster.
     * @example
     * // Update or create a Monster
     * const monster = await prisma.monster.upsert({
     *   create: {
     *     // ... data to create a Monster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monster we want to update
     *   }
     * })
    **/
    upsert<T extends MonsterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterUpsertArgs<ExtArgs>>
    ): Prisma__MonsterClient<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Monsters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterCountArgs} args - Arguments to filter Monsters to count.
     * @example
     * // Count the number of Monsters
     * const count = await prisma.monster.count({
     *   where: {
     *     // ... the filter for the Monsters we want to count
     *   }
     * })
    **/
    count<T extends MonsterCountArgs>(
      args?: Subset<T, MonsterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterAggregateArgs>(args: Subset<T, MonsterAggregateArgs>): Prisma.PrismaPromise<GetMonsterAggregateType<T>>

    /**
     * Group by Monster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MonsterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterGroupByArgs['orderBy'] }
        : { orderBy?: MonsterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonsterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monster model
   */
  readonly fields: MonsterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    size<T extends MonsterSizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonsterSizeDefaultArgs<ExtArgs>>): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    type<T extends MonsterTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonsterTypeDefaultArgs<ExtArgs>>): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subType<T extends Monster$subTypeArgs<ExtArgs> = {}>(args?: Subset<T, Monster$subTypeArgs<ExtArgs>>): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    image<T extends Monster$imageArgs<ExtArgs> = {}>(args?: Subset<T, Monster$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    sheetType<T extends SheetTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SheetTypeDefaultArgs<ExtArgs>>): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    minis<T extends Monster$minisArgs<ExtArgs> = {}>(args?: Subset<T, Monster$minisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Monster model
   */ 
  interface MonsterFieldRefs {
    readonly id: FieldRef<"Monster", 'Int'>
    readonly name: FieldRef<"Monster", 'String'>
    readonly sizeId: FieldRef<"Monster", 'Int'>
    readonly typeId: FieldRef<"Monster", 'Int'>
    readonly subTypeId: FieldRef<"Monster", 'Int'>
    readonly imageId: FieldRef<"Monster", 'Int'>
    readonly sheetUrl: FieldRef<"Monster", 'String'>
    readonly sheetTypeId: FieldRef<"Monster", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Monster findUnique
   */
  export type MonsterFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }


  /**
   * Monster findUniqueOrThrow
   */
  export type MonsterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where: MonsterWhereUniqueInput
  }


  /**
   * Monster findFirst
   */
  export type MonsterFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * Monster findFirstOrThrow
   */
  export type MonsterFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monster to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monsters.
     */
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * Monster findMany
   */
  export type MonsterFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter, which Monsters to fetch.
     */
    where?: MonsterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monsters to fetch.
     */
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monsters.
     */
    cursor?: MonsterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monsters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monsters.
     */
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * Monster create
   */
  export type MonsterCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to create a Monster.
     */
    data: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
  }


  /**
   * Monster update
   */
  export type MonsterUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The data needed to update a Monster.
     */
    data: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
    /**
     * Choose, which Monster to update.
     */
    where: MonsterWhereUniqueInput
  }


  /**
   * Monster updateMany
   */
  export type MonsterUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monsters.
     */
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyInput>
    /**
     * Filter which Monsters to update
     */
    where?: MonsterWhereInput
  }


  /**
   * Monster upsert
   */
  export type MonsterUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * The filter to search for the Monster to update in case it exists.
     */
    where: MonsterWhereUniqueInput
    /**
     * In case the Monster found by the `where` argument doesn't exist, create a new Monster with this data.
     */
    create: XOR<MonsterCreateInput, MonsterUncheckedCreateInput>
    /**
     * In case the Monster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterUpdateInput, MonsterUncheckedUpdateInput>
  }


  /**
   * Monster delete
   */
  export type MonsterDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    /**
     * Filter which Monster to delete.
     */
    where: MonsterWhereUniqueInput
  }


  /**
   * Monster deleteMany
   */
  export type MonsterDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monsters to delete
     */
    where?: MonsterWhereInput
  }


  /**
   * Monster.subType
   */
  export type Monster$subTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    where?: MonsterSubTypeWhereInput
  }


  /**
   * Monster.image
   */
  export type Monster$imageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }


  /**
   * Monster.minis
   */
  export type Monster$minisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    where?: MiniWhereInput
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    cursor?: MiniWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniScalarFieldEnum | MiniScalarFieldEnum[]
  }


  /**
   * Monster without action
   */
  export type MonsterDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
  }



  /**
   * Model MonsterSize
   */

  export type AggregateMonsterSize = {
    _count: MonsterSizeCountAggregateOutputType | null
    _avg: MonsterSizeAvgAggregateOutputType | null
    _sum: MonsterSizeSumAggregateOutputType | null
    _min: MonsterSizeMinAggregateOutputType | null
    _max: MonsterSizeMaxAggregateOutputType | null
  }

  export type MonsterSizeAvgAggregateOutputType = {
    id: number | null
  }

  export type MonsterSizeSumAggregateOutputType = {
    id: number | null
  }

  export type MonsterSizeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterSizeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterSizeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MonsterSizeAvgAggregateInputType = {
    id?: true
  }

  export type MonsterSizeSumAggregateInputType = {
    id?: true
  }

  export type MonsterSizeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterSizeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterSizeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MonsterSizeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterSize to aggregate.
     */
    where?: MonsterSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSizes to fetch.
     */
    orderBy?: MonsterSizeOrderByWithRelationInput | MonsterSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonsterSizes
    **/
    _count?: true | MonsterSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterSizeMaxAggregateInputType
  }

  export type GetMonsterSizeAggregateType<T extends MonsterSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateMonsterSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonsterSize[P]>
      : GetScalarType<T[P], AggregateMonsterSize[P]>
  }




  export type MonsterSizeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterSizeWhereInput
    orderBy?: MonsterSizeOrderByWithAggregationInput | MonsterSizeOrderByWithAggregationInput[]
    by: MonsterSizeScalarFieldEnum[] | MonsterSizeScalarFieldEnum
    having?: MonsterSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterSizeCountAggregateInputType | true
    _avg?: MonsterSizeAvgAggregateInputType
    _sum?: MonsterSizeSumAggregateInputType
    _min?: MonsterSizeMinAggregateInputType
    _max?: MonsterSizeMaxAggregateInputType
  }

  export type MonsterSizeGroupByOutputType = {
    id: number
    name: string
    _count: MonsterSizeCountAggregateOutputType | null
    _avg: MonsterSizeAvgAggregateOutputType | null
    _sum: MonsterSizeSumAggregateOutputType | null
    _min: MonsterSizeMinAggregateOutputType | null
    _max: MonsterSizeMaxAggregateOutputType | null
  }

  type GetMonsterSizeGroupByPayload<T extends MonsterSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterSizeGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterSizeGroupByOutputType[P]>
        }
      >
    >


  export type MonsterSizeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minis?: boolean | MonsterSize$minisArgs<ExtArgs>
    monsters?: boolean | MonsterSize$monstersArgs<ExtArgs>
    _count?: boolean | MonsterSizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monsterSize"]>

  export type MonsterSizeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MonsterSizeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    minis?: boolean | MonsterSize$minisArgs<ExtArgs>
    monsters?: boolean | MonsterSize$monstersArgs<ExtArgs>
    _count?: boolean | MonsterSizeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MonsterSizePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "MonsterSize"
    objects: {
      minis: Prisma.$MiniPayload<ExtArgs>[]
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["monsterSize"]>
    composites: {}
  }


  type MonsterSizeGetPayload<S extends boolean | null | undefined | MonsterSizeDefaultArgs> = $Result.GetResult<Prisma.$MonsterSizePayload, S>

  type MonsterSizeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MonsterSizeFindManyArgs, 'select' | 'include'> & {
      select?: MonsterSizeCountAggregateInputType | true
    }

  export interface MonsterSizeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonsterSize'], meta: { name: 'MonsterSize' } }
    /**
     * Find zero or one MonsterSize that matches the filter.
     * @param {MonsterSizeFindUniqueArgs} args - Arguments to find a MonsterSize
     * @example
     * // Get one MonsterSize
     * const monsterSize = await prisma.monsterSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonsterSizeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSizeFindUniqueArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MonsterSize that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonsterSizeFindUniqueOrThrowArgs} args - Arguments to find a MonsterSize
     * @example
     * // Get one MonsterSize
     * const monsterSize = await prisma.monsterSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonsterSizeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSizeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MonsterSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSizeFindFirstArgs} args - Arguments to find a MonsterSize
     * @example
     * // Get one MonsterSize
     * const monsterSize = await prisma.monsterSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonsterSizeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSizeFindFirstArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MonsterSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSizeFindFirstOrThrowArgs} args - Arguments to find a MonsterSize
     * @example
     * // Get one MonsterSize
     * const monsterSize = await prisma.monsterSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonsterSizeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSizeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MonsterSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSizeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonsterSizes
     * const monsterSizes = await prisma.monsterSize.findMany()
     * 
     * // Get first 10 MonsterSizes
     * const monsterSizes = await prisma.monsterSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterSizeWithIdOnly = await prisma.monsterSize.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonsterSizeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSizeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MonsterSize.
     * @param {MonsterSizeCreateArgs} args - Arguments to create a MonsterSize.
     * @example
     * // Create one MonsterSize
     * const MonsterSize = await prisma.monsterSize.create({
     *   data: {
     *     // ... data to create a MonsterSize
     *   }
     * })
     * 
    **/
    create<T extends MonsterSizeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSizeCreateArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MonsterSize.
     * @param {MonsterSizeDeleteArgs} args - Arguments to delete one MonsterSize.
     * @example
     * // Delete one MonsterSize
     * const MonsterSize = await prisma.monsterSize.delete({
     *   where: {
     *     // ... filter to delete one MonsterSize
     *   }
     * })
     * 
    **/
    delete<T extends MonsterSizeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSizeDeleteArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MonsterSize.
     * @param {MonsterSizeUpdateArgs} args - Arguments to update one MonsterSize.
     * @example
     * // Update one MonsterSize
     * const monsterSize = await prisma.monsterSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonsterSizeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSizeUpdateArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MonsterSizes.
     * @param {MonsterSizeDeleteManyArgs} args - Arguments to filter MonsterSizes to delete.
     * @example
     * // Delete a few MonsterSizes
     * const { count } = await prisma.monsterSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonsterSizeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSizeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonsterSizes
     * const monsterSize = await prisma.monsterSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonsterSizeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSizeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonsterSize.
     * @param {MonsterSizeUpsertArgs} args - Arguments to update or create a MonsterSize.
     * @example
     * // Update or create a MonsterSize
     * const monsterSize = await prisma.monsterSize.upsert({
     *   create: {
     *     // ... data to create a MonsterSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonsterSize we want to update
     *   }
     * })
    **/
    upsert<T extends MonsterSizeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSizeUpsertArgs<ExtArgs>>
    ): Prisma__MonsterSizeClient<$Result.GetResult<Prisma.$MonsterSizePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MonsterSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSizeCountArgs} args - Arguments to filter MonsterSizes to count.
     * @example
     * // Count the number of MonsterSizes
     * const count = await prisma.monsterSize.count({
     *   where: {
     *     // ... the filter for the MonsterSizes we want to count
     *   }
     * })
    **/
    count<T extends MonsterSizeCountArgs>(
      args?: Subset<T, MonsterSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonsterSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterSizeAggregateArgs>(args: Subset<T, MonsterSizeAggregateArgs>): Prisma.PrismaPromise<GetMonsterSizeAggregateType<T>>

    /**
     * Group by MonsterSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSizeGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MonsterSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterSizeGroupByArgs['orderBy'] }
        : { orderBy?: MonsterSizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonsterSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonsterSize model
   */
  readonly fields: MonsterSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonsterSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterSizeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    minis<T extends MonsterSize$minisArgs<ExtArgs> = {}>(args?: Subset<T, MonsterSize$minisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findMany'> | Null>;

    monsters<T extends MonsterSize$monstersArgs<ExtArgs> = {}>(args?: Subset<T, MonsterSize$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MonsterSize model
   */ 
  interface MonsterSizeFieldRefs {
    readonly id: FieldRef<"MonsterSize", 'Int'>
    readonly name: FieldRef<"MonsterSize", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MonsterSize findUnique
   */
  export type MonsterSizeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSize to fetch.
     */
    where: MonsterSizeWhereUniqueInput
  }


  /**
   * MonsterSize findUniqueOrThrow
   */
  export type MonsterSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSize to fetch.
     */
    where: MonsterSizeWhereUniqueInput
  }


  /**
   * MonsterSize findFirst
   */
  export type MonsterSizeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSize to fetch.
     */
    where?: MonsterSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSizes to fetch.
     */
    orderBy?: MonsterSizeOrderByWithRelationInput | MonsterSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterSizes.
     */
    cursor?: MonsterSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterSizes.
     */
    distinct?: MonsterSizeScalarFieldEnum | MonsterSizeScalarFieldEnum[]
  }


  /**
   * MonsterSize findFirstOrThrow
   */
  export type MonsterSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSize to fetch.
     */
    where?: MonsterSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSizes to fetch.
     */
    orderBy?: MonsterSizeOrderByWithRelationInput | MonsterSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterSizes.
     */
    cursor?: MonsterSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterSizes.
     */
    distinct?: MonsterSizeScalarFieldEnum | MonsterSizeScalarFieldEnum[]
  }


  /**
   * MonsterSize findMany
   */
  export type MonsterSizeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSizes to fetch.
     */
    where?: MonsterSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSizes to fetch.
     */
    orderBy?: MonsterSizeOrderByWithRelationInput | MonsterSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonsterSizes.
     */
    cursor?: MonsterSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSizes.
     */
    skip?: number
    distinct?: MonsterSizeScalarFieldEnum | MonsterSizeScalarFieldEnum[]
  }


  /**
   * MonsterSize create
   */
  export type MonsterSizeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a MonsterSize.
     */
    data: XOR<MonsterSizeCreateInput, MonsterSizeUncheckedCreateInput>
  }


  /**
   * MonsterSize update
   */
  export type MonsterSizeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a MonsterSize.
     */
    data: XOR<MonsterSizeUpdateInput, MonsterSizeUncheckedUpdateInput>
    /**
     * Choose, which MonsterSize to update.
     */
    where: MonsterSizeWhereUniqueInput
  }


  /**
   * MonsterSize updateMany
   */
  export type MonsterSizeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonsterSizes.
     */
    data: XOR<MonsterSizeUpdateManyMutationInput, MonsterSizeUncheckedUpdateManyInput>
    /**
     * Filter which MonsterSizes to update
     */
    where?: MonsterSizeWhereInput
  }


  /**
   * MonsterSize upsert
   */
  export type MonsterSizeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the MonsterSize to update in case it exists.
     */
    where: MonsterSizeWhereUniqueInput
    /**
     * In case the MonsterSize found by the `where` argument doesn't exist, create a new MonsterSize with this data.
     */
    create: XOR<MonsterSizeCreateInput, MonsterSizeUncheckedCreateInput>
    /**
     * In case the MonsterSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterSizeUpdateInput, MonsterSizeUncheckedUpdateInput>
  }


  /**
   * MonsterSize delete
   */
  export type MonsterSizeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
    /**
     * Filter which MonsterSize to delete.
     */
    where: MonsterSizeWhereUniqueInput
  }


  /**
   * MonsterSize deleteMany
   */
  export type MonsterSizeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterSizes to delete
     */
    where?: MonsterSizeWhereInput
  }


  /**
   * MonsterSize.minis
   */
  export type MonsterSize$minisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    where?: MiniWhereInput
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    cursor?: MiniWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniScalarFieldEnum | MiniScalarFieldEnum[]
  }


  /**
   * MonsterSize.monsters
   */
  export type MonsterSize$monstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * MonsterSize without action
   */
  export type MonsterSizeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSize
     */
    select?: MonsterSizeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSizeInclude<ExtArgs> | null
  }



  /**
   * Model MonsterType
   */

  export type AggregateMonsterType = {
    _count: MonsterTypeCountAggregateOutputType | null
    _avg: MonsterTypeAvgAggregateOutputType | null
    _sum: MonsterTypeSumAggregateOutputType | null
    _min: MonsterTypeMinAggregateOutputType | null
    _max: MonsterTypeMaxAggregateOutputType | null
  }

  export type MonsterTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type MonsterTypeSumAggregateOutputType = {
    id: number | null
  }

  export type MonsterTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MonsterTypeAvgAggregateInputType = {
    id?: true
  }

  export type MonsterTypeSumAggregateInputType = {
    id?: true
  }

  export type MonsterTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MonsterTypeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterType to aggregate.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonsterTypes
    **/
    _count?: true | MonsterTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterTypeMaxAggregateInputType
  }

  export type GetMonsterTypeAggregateType<T extends MonsterTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMonsterType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonsterType[P]>
      : GetScalarType<T[P], AggregateMonsterType[P]>
  }




  export type MonsterTypeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterTypeWhereInput
    orderBy?: MonsterTypeOrderByWithAggregationInput | MonsterTypeOrderByWithAggregationInput[]
    by: MonsterTypeScalarFieldEnum[] | MonsterTypeScalarFieldEnum
    having?: MonsterTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterTypeCountAggregateInputType | true
    _avg?: MonsterTypeAvgAggregateInputType
    _sum?: MonsterTypeSumAggregateInputType
    _min?: MonsterTypeMinAggregateInputType
    _max?: MonsterTypeMaxAggregateInputType
  }

  export type MonsterTypeGroupByOutputType = {
    id: number
    name: string
    _count: MonsterTypeCountAggregateOutputType | null
    _avg: MonsterTypeAvgAggregateOutputType | null
    _sum: MonsterTypeSumAggregateOutputType | null
    _min: MonsterTypeMinAggregateOutputType | null
    _max: MonsterTypeMaxAggregateOutputType | null
  }

  type GetMonsterTypeGroupByPayload<T extends MonsterTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterTypeGroupByOutputType[P]>
        }
      >
    >


  export type MonsterTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minis?: boolean | MonsterType$minisArgs<ExtArgs>
    monsters?: boolean | MonsterType$monstersArgs<ExtArgs>
    _count?: boolean | MonsterTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monsterType"]>

  export type MonsterTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MonsterTypeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    minis?: boolean | MonsterType$minisArgs<ExtArgs>
    monsters?: boolean | MonsterType$monstersArgs<ExtArgs>
    _count?: boolean | MonsterTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MonsterTypePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "MonsterType"
    objects: {
      minis: Prisma.$MiniPayload<ExtArgs>[]
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["monsterType"]>
    composites: {}
  }


  type MonsterTypeGetPayload<S extends boolean | null | undefined | MonsterTypeDefaultArgs> = $Result.GetResult<Prisma.$MonsterTypePayload, S>

  type MonsterTypeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MonsterTypeFindManyArgs, 'select' | 'include'> & {
      select?: MonsterTypeCountAggregateInputType | true
    }

  export interface MonsterTypeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonsterType'], meta: { name: 'MonsterType' } }
    /**
     * Find zero or one MonsterType that matches the filter.
     * @param {MonsterTypeFindUniqueArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonsterTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MonsterType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonsterTypeFindUniqueOrThrowArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonsterTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MonsterType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeFindFirstArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonsterTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterTypeFindFirstArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MonsterType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeFindFirstOrThrowArgs} args - Arguments to find a MonsterType
     * @example
     * // Get one MonsterType
     * const monsterType = await prisma.monsterType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonsterTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MonsterTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonsterTypes
     * const monsterTypes = await prisma.monsterType.findMany()
     * 
     * // Get first 10 MonsterTypes
     * const monsterTypes = await prisma.monsterType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterTypeWithIdOnly = await prisma.monsterType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonsterTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MonsterType.
     * @param {MonsterTypeCreateArgs} args - Arguments to create a MonsterType.
     * @example
     * // Create one MonsterType
     * const MonsterType = await prisma.monsterType.create({
     *   data: {
     *     // ... data to create a MonsterType
     *   }
     * })
     * 
    **/
    create<T extends MonsterTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterTypeCreateArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MonsterType.
     * @param {MonsterTypeDeleteArgs} args - Arguments to delete one MonsterType.
     * @example
     * // Delete one MonsterType
     * const MonsterType = await prisma.monsterType.delete({
     *   where: {
     *     // ... filter to delete one MonsterType
     *   }
     * })
     * 
    **/
    delete<T extends MonsterTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterTypeDeleteArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MonsterType.
     * @param {MonsterTypeUpdateArgs} args - Arguments to update one MonsterType.
     * @example
     * // Update one MonsterType
     * const monsterType = await prisma.monsterType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonsterTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterTypeUpdateArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MonsterTypes.
     * @param {MonsterTypeDeleteManyArgs} args - Arguments to filter MonsterTypes to delete.
     * @example
     * // Delete a few MonsterTypes
     * const { count } = await prisma.monsterType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonsterTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonsterTypes
     * const monsterType = await prisma.monsterType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonsterTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonsterType.
     * @param {MonsterTypeUpsertArgs} args - Arguments to update or create a MonsterType.
     * @example
     * // Update or create a MonsterType
     * const monsterType = await prisma.monsterType.upsert({
     *   create: {
     *     // ... data to create a MonsterType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonsterType we want to update
     *   }
     * })
    **/
    upsert<T extends MonsterTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterTypeUpsertArgs<ExtArgs>>
    ): Prisma__MonsterTypeClient<$Result.GetResult<Prisma.$MonsterTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MonsterTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeCountArgs} args - Arguments to filter MonsterTypes to count.
     * @example
     * // Count the number of MonsterTypes
     * const count = await prisma.monsterType.count({
     *   where: {
     *     // ... the filter for the MonsterTypes we want to count
     *   }
     * })
    **/
    count<T extends MonsterTypeCountArgs>(
      args?: Subset<T, MonsterTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonsterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterTypeAggregateArgs>(args: Subset<T, MonsterTypeAggregateArgs>): Prisma.PrismaPromise<GetMonsterTypeAggregateType<T>>

    /**
     * Group by MonsterType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTypeGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MonsterTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterTypeGroupByArgs['orderBy'] }
        : { orderBy?: MonsterTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonsterTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonsterType model
   */
  readonly fields: MonsterTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonsterType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterTypeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    minis<T extends MonsterType$minisArgs<ExtArgs> = {}>(args?: Subset<T, MonsterType$minisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findMany'> | Null>;

    monsters<T extends MonsterType$monstersArgs<ExtArgs> = {}>(args?: Subset<T, MonsterType$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MonsterType model
   */ 
  interface MonsterTypeFieldRefs {
    readonly id: FieldRef<"MonsterType", 'Int'>
    readonly name: FieldRef<"MonsterType", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MonsterType findUnique
   */
  export type MonsterTypeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where: MonsterTypeWhereUniqueInput
  }


  /**
   * MonsterType findUniqueOrThrow
   */
  export type MonsterTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where: MonsterTypeWhereUniqueInput
  }


  /**
   * MonsterType findFirst
   */
  export type MonsterTypeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterTypes.
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterTypes.
     */
    distinct?: MonsterTypeScalarFieldEnum | MonsterTypeScalarFieldEnum[]
  }


  /**
   * MonsterType findFirstOrThrow
   */
  export type MonsterTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterType to fetch.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterTypes.
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterTypes.
     */
    distinct?: MonsterTypeScalarFieldEnum | MonsterTypeScalarFieldEnum[]
  }


  /**
   * MonsterType findMany
   */
  export type MonsterTypeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterTypes to fetch.
     */
    where?: MonsterTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTypes to fetch.
     */
    orderBy?: MonsterTypeOrderByWithRelationInput | MonsterTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonsterTypes.
     */
    cursor?: MonsterTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTypes.
     */
    skip?: number
    distinct?: MonsterTypeScalarFieldEnum | MonsterTypeScalarFieldEnum[]
  }


  /**
   * MonsterType create
   */
  export type MonsterTypeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MonsterType.
     */
    data: XOR<MonsterTypeCreateInput, MonsterTypeUncheckedCreateInput>
  }


  /**
   * MonsterType update
   */
  export type MonsterTypeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MonsterType.
     */
    data: XOR<MonsterTypeUpdateInput, MonsterTypeUncheckedUpdateInput>
    /**
     * Choose, which MonsterType to update.
     */
    where: MonsterTypeWhereUniqueInput
  }


  /**
   * MonsterType updateMany
   */
  export type MonsterTypeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonsterTypes.
     */
    data: XOR<MonsterTypeUpdateManyMutationInput, MonsterTypeUncheckedUpdateManyInput>
    /**
     * Filter which MonsterTypes to update
     */
    where?: MonsterTypeWhereInput
  }


  /**
   * MonsterType upsert
   */
  export type MonsterTypeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MonsterType to update in case it exists.
     */
    where: MonsterTypeWhereUniqueInput
    /**
     * In case the MonsterType found by the `where` argument doesn't exist, create a new MonsterType with this data.
     */
    create: XOR<MonsterTypeCreateInput, MonsterTypeUncheckedCreateInput>
    /**
     * In case the MonsterType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterTypeUpdateInput, MonsterTypeUncheckedUpdateInput>
  }


  /**
   * MonsterType delete
   */
  export type MonsterTypeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
    /**
     * Filter which MonsterType to delete.
     */
    where: MonsterTypeWhereUniqueInput
  }


  /**
   * MonsterType deleteMany
   */
  export type MonsterTypeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterTypes to delete
     */
    where?: MonsterTypeWhereInput
  }


  /**
   * MonsterType.minis
   */
  export type MonsterType$minisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    where?: MiniWhereInput
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    cursor?: MiniWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniScalarFieldEnum | MiniScalarFieldEnum[]
  }


  /**
   * MonsterType.monsters
   */
  export type MonsterType$monstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * MonsterType without action
   */
  export type MonsterTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterType
     */
    select?: MonsterTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterTypeInclude<ExtArgs> | null
  }



  /**
   * Model MonsterSubType
   */

  export type AggregateMonsterSubType = {
    _count: MonsterSubTypeCountAggregateOutputType | null
    _avg: MonsterSubTypeAvgAggregateOutputType | null
    _sum: MonsterSubTypeSumAggregateOutputType | null
    _min: MonsterSubTypeMinAggregateOutputType | null
    _max: MonsterSubTypeMaxAggregateOutputType | null
  }

  export type MonsterSubTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type MonsterSubTypeSumAggregateOutputType = {
    id: number | null
  }

  export type MonsterSubTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterSubTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MonsterSubTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MonsterSubTypeAvgAggregateInputType = {
    id?: true
  }

  export type MonsterSubTypeSumAggregateInputType = {
    id?: true
  }

  export type MonsterSubTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterSubTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MonsterSubTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MonsterSubTypeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterSubType to aggregate.
     */
    where?: MonsterSubTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSubTypes to fetch.
     */
    orderBy?: MonsterSubTypeOrderByWithRelationInput | MonsterSubTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterSubTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSubTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSubTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonsterSubTypes
    **/
    _count?: true | MonsterSubTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterSubTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterSubTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterSubTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterSubTypeMaxAggregateInputType
  }

  export type GetMonsterSubTypeAggregateType<T extends MonsterSubTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMonsterSubType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonsterSubType[P]>
      : GetScalarType<T[P], AggregateMonsterSubType[P]>
  }




  export type MonsterSubTypeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MonsterSubTypeWhereInput
    orderBy?: MonsterSubTypeOrderByWithAggregationInput | MonsterSubTypeOrderByWithAggregationInput[]
    by: MonsterSubTypeScalarFieldEnum[] | MonsterSubTypeScalarFieldEnum
    having?: MonsterSubTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterSubTypeCountAggregateInputType | true
    _avg?: MonsterSubTypeAvgAggregateInputType
    _sum?: MonsterSubTypeSumAggregateInputType
    _min?: MonsterSubTypeMinAggregateInputType
    _max?: MonsterSubTypeMaxAggregateInputType
  }

  export type MonsterSubTypeGroupByOutputType = {
    id: number
    name: string
    _count: MonsterSubTypeCountAggregateOutputType | null
    _avg: MonsterSubTypeAvgAggregateOutputType | null
    _sum: MonsterSubTypeSumAggregateOutputType | null
    _min: MonsterSubTypeMinAggregateOutputType | null
    _max: MonsterSubTypeMaxAggregateOutputType | null
  }

  type GetMonsterSubTypeGroupByPayload<T extends MonsterSubTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterSubTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterSubTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterSubTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterSubTypeGroupByOutputType[P]>
        }
      >
    >


  export type MonsterSubTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minis?: boolean | MonsterSubType$minisArgs<ExtArgs>
    monsters?: boolean | MonsterSubType$monstersArgs<ExtArgs>
    _count?: boolean | MonsterSubTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monsterSubType"]>

  export type MonsterSubTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MonsterSubTypeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    minis?: boolean | MonsterSubType$minisArgs<ExtArgs>
    monsters?: boolean | MonsterSubType$monstersArgs<ExtArgs>
    _count?: boolean | MonsterSubTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MonsterSubTypePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "MonsterSubType"
    objects: {
      minis: Prisma.$MiniPayload<ExtArgs>[]
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["monsterSubType"]>
    composites: {}
  }


  type MonsterSubTypeGetPayload<S extends boolean | null | undefined | MonsterSubTypeDefaultArgs> = $Result.GetResult<Prisma.$MonsterSubTypePayload, S>

  type MonsterSubTypeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MonsterSubTypeFindManyArgs, 'select' | 'include'> & {
      select?: MonsterSubTypeCountAggregateInputType | true
    }

  export interface MonsterSubTypeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonsterSubType'], meta: { name: 'MonsterSubType' } }
    /**
     * Find zero or one MonsterSubType that matches the filter.
     * @param {MonsterSubTypeFindUniqueArgs} args - Arguments to find a MonsterSubType
     * @example
     * // Get one MonsterSubType
     * const monsterSubType = await prisma.monsterSubType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MonsterSubTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSubTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MonsterSubType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MonsterSubTypeFindUniqueOrThrowArgs} args - Arguments to find a MonsterSubType
     * @example
     * // Get one MonsterSubType
     * const monsterSubType = await prisma.monsterSubType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MonsterSubTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSubTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MonsterSubType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSubTypeFindFirstArgs} args - Arguments to find a MonsterSubType
     * @example
     * // Get one MonsterSubType
     * const monsterSubType = await prisma.monsterSubType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MonsterSubTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSubTypeFindFirstArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MonsterSubType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSubTypeFindFirstOrThrowArgs} args - Arguments to find a MonsterSubType
     * @example
     * // Get one MonsterSubType
     * const monsterSubType = await prisma.monsterSubType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MonsterSubTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSubTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MonsterSubTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSubTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonsterSubTypes
     * const monsterSubTypes = await prisma.monsterSubType.findMany()
     * 
     * // Get first 10 MonsterSubTypes
     * const monsterSubTypes = await prisma.monsterSubType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterSubTypeWithIdOnly = await prisma.monsterSubType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MonsterSubTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSubTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MonsterSubType.
     * @param {MonsterSubTypeCreateArgs} args - Arguments to create a MonsterSubType.
     * @example
     * // Create one MonsterSubType
     * const MonsterSubType = await prisma.monsterSubType.create({
     *   data: {
     *     // ... data to create a MonsterSubType
     *   }
     * })
     * 
    **/
    create<T extends MonsterSubTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSubTypeCreateArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a MonsterSubType.
     * @param {MonsterSubTypeDeleteArgs} args - Arguments to delete one MonsterSubType.
     * @example
     * // Delete one MonsterSubType
     * const MonsterSubType = await prisma.monsterSubType.delete({
     *   where: {
     *     // ... filter to delete one MonsterSubType
     *   }
     * })
     * 
    **/
    delete<T extends MonsterSubTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSubTypeDeleteArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MonsterSubType.
     * @param {MonsterSubTypeUpdateArgs} args - Arguments to update one MonsterSubType.
     * @example
     * // Update one MonsterSubType
     * const monsterSubType = await prisma.monsterSubType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MonsterSubTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSubTypeUpdateArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MonsterSubTypes.
     * @param {MonsterSubTypeDeleteManyArgs} args - Arguments to filter MonsterSubTypes to delete.
     * @example
     * // Delete a few MonsterSubTypes
     * const { count } = await prisma.monsterSubType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MonsterSubTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MonsterSubTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterSubTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSubTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonsterSubTypes
     * const monsterSubType = await prisma.monsterSubType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MonsterSubTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSubTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MonsterSubType.
     * @param {MonsterSubTypeUpsertArgs} args - Arguments to update or create a MonsterSubType.
     * @example
     * // Update or create a MonsterSubType
     * const monsterSubType = await prisma.monsterSubType.upsert({
     *   create: {
     *     // ... data to create a MonsterSubType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonsterSubType we want to update
     *   }
     * })
    **/
    upsert<T extends MonsterSubTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MonsterSubTypeUpsertArgs<ExtArgs>>
    ): Prisma__MonsterSubTypeClient<$Result.GetResult<Prisma.$MonsterSubTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MonsterSubTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSubTypeCountArgs} args - Arguments to filter MonsterSubTypes to count.
     * @example
     * // Count the number of MonsterSubTypes
     * const count = await prisma.monsterSubType.count({
     *   where: {
     *     // ... the filter for the MonsterSubTypes we want to count
     *   }
     * })
    **/
    count<T extends MonsterSubTypeCountArgs>(
      args?: Subset<T, MonsterSubTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterSubTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonsterSubType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSubTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterSubTypeAggregateArgs>(args: Subset<T, MonsterSubTypeAggregateArgs>): Prisma.PrismaPromise<GetMonsterSubTypeAggregateType<T>>

    /**
     * Group by MonsterSubType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterSubTypeGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MonsterSubTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterSubTypeGroupByArgs['orderBy'] }
        : { orderBy?: MonsterSubTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonsterSubTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterSubTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonsterSubType model
   */
  readonly fields: MonsterSubTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonsterSubType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterSubTypeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    minis<T extends MonsterSubType$minisArgs<ExtArgs> = {}>(args?: Subset<T, MonsterSubType$minisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiniPayload<ExtArgs>, T, 'findMany'> | Null>;

    monsters<T extends MonsterSubType$monstersArgs<ExtArgs> = {}>(args?: Subset<T, MonsterSubType$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MonsterSubType model
   */ 
  interface MonsterSubTypeFieldRefs {
    readonly id: FieldRef<"MonsterSubType", 'Int'>
    readonly name: FieldRef<"MonsterSubType", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MonsterSubType findUnique
   */
  export type MonsterSubTypeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSubType to fetch.
     */
    where: MonsterSubTypeWhereUniqueInput
  }


  /**
   * MonsterSubType findUniqueOrThrow
   */
  export type MonsterSubTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSubType to fetch.
     */
    where: MonsterSubTypeWhereUniqueInput
  }


  /**
   * MonsterSubType findFirst
   */
  export type MonsterSubTypeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSubType to fetch.
     */
    where?: MonsterSubTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSubTypes to fetch.
     */
    orderBy?: MonsterSubTypeOrderByWithRelationInput | MonsterSubTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterSubTypes.
     */
    cursor?: MonsterSubTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSubTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSubTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterSubTypes.
     */
    distinct?: MonsterSubTypeScalarFieldEnum | MonsterSubTypeScalarFieldEnum[]
  }


  /**
   * MonsterSubType findFirstOrThrow
   */
  export type MonsterSubTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSubType to fetch.
     */
    where?: MonsterSubTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSubTypes to fetch.
     */
    orderBy?: MonsterSubTypeOrderByWithRelationInput | MonsterSubTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterSubTypes.
     */
    cursor?: MonsterSubTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSubTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSubTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterSubTypes.
     */
    distinct?: MonsterSubTypeScalarFieldEnum | MonsterSubTypeScalarFieldEnum[]
  }


  /**
   * MonsterSubType findMany
   */
  export type MonsterSubTypeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * Filter, which MonsterSubTypes to fetch.
     */
    where?: MonsterSubTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterSubTypes to fetch.
     */
    orderBy?: MonsterSubTypeOrderByWithRelationInput | MonsterSubTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonsterSubTypes.
     */
    cursor?: MonsterSubTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterSubTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterSubTypes.
     */
    skip?: number
    distinct?: MonsterSubTypeScalarFieldEnum | MonsterSubTypeScalarFieldEnum[]
  }


  /**
   * MonsterSubType create
   */
  export type MonsterSubTypeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MonsterSubType.
     */
    data: XOR<MonsterSubTypeCreateInput, MonsterSubTypeUncheckedCreateInput>
  }


  /**
   * MonsterSubType update
   */
  export type MonsterSubTypeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MonsterSubType.
     */
    data: XOR<MonsterSubTypeUpdateInput, MonsterSubTypeUncheckedUpdateInput>
    /**
     * Choose, which MonsterSubType to update.
     */
    where: MonsterSubTypeWhereUniqueInput
  }


  /**
   * MonsterSubType updateMany
   */
  export type MonsterSubTypeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonsterSubTypes.
     */
    data: XOR<MonsterSubTypeUpdateManyMutationInput, MonsterSubTypeUncheckedUpdateManyInput>
    /**
     * Filter which MonsterSubTypes to update
     */
    where?: MonsterSubTypeWhereInput
  }


  /**
   * MonsterSubType upsert
   */
  export type MonsterSubTypeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MonsterSubType to update in case it exists.
     */
    where: MonsterSubTypeWhereUniqueInput
    /**
     * In case the MonsterSubType found by the `where` argument doesn't exist, create a new MonsterSubType with this data.
     */
    create: XOR<MonsterSubTypeCreateInput, MonsterSubTypeUncheckedCreateInput>
    /**
     * In case the MonsterSubType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterSubTypeUpdateInput, MonsterSubTypeUncheckedUpdateInput>
  }


  /**
   * MonsterSubType delete
   */
  export type MonsterSubTypeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
    /**
     * Filter which MonsterSubType to delete.
     */
    where: MonsterSubTypeWhereUniqueInput
  }


  /**
   * MonsterSubType deleteMany
   */
  export type MonsterSubTypeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterSubTypes to delete
     */
    where?: MonsterSubTypeWhereInput
  }


  /**
   * MonsterSubType.minis
   */
  export type MonsterSubType$minisArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mini
     */
    select?: MiniSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MiniInclude<ExtArgs> | null
    where?: MiniWhereInput
    orderBy?: MiniOrderByWithRelationInput | MiniOrderByWithRelationInput[]
    cursor?: MiniWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiniScalarFieldEnum | MiniScalarFieldEnum[]
  }


  /**
   * MonsterSubType.monsters
   */
  export type MonsterSubType$monstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * MonsterSubType without action
   */
  export type MonsterSubTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterSubType
     */
    select?: MonsterSubTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterSubTypeInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    url: string
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    monsters?: boolean | Image$monstersArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    monsters?: boolean | Image$monstersArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ImagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      monsters: Prisma.$MonsterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      url: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    monsters<T extends Image$monstersArgs<ExtArgs> = {}>(args?: Subset<T, Image$monstersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly url: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image.monsters
   */
  export type Image$monstersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Model SheetType
   */

  export type AggregateSheetType = {
    _count: SheetTypeCountAggregateOutputType | null
    _avg: SheetTypeAvgAggregateOutputType | null
    _sum: SheetTypeSumAggregateOutputType | null
    _min: SheetTypeMinAggregateOutputType | null
    _max: SheetTypeMaxAggregateOutputType | null
  }

  export type SheetTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type SheetTypeSumAggregateOutputType = {
    id: number | null
  }

  export type SheetTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SheetTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SheetTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SheetTypeAvgAggregateInputType = {
    id?: true
  }

  export type SheetTypeSumAggregateInputType = {
    id?: true
  }

  export type SheetTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SheetTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SheetTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SheetTypeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetType to aggregate.
     */
    where?: SheetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetTypes to fetch.
     */
    orderBy?: SheetTypeOrderByWithRelationInput | SheetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SheetTypes
    **/
    _count?: true | SheetTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetTypeMaxAggregateInputType
  }

  export type GetSheetTypeAggregateType<T extends SheetTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateSheetType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheetType[P]>
      : GetScalarType<T[P], AggregateSheetType[P]>
  }




  export type SheetTypeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SheetTypeWhereInput
    orderBy?: SheetTypeOrderByWithAggregationInput | SheetTypeOrderByWithAggregationInput[]
    by: SheetTypeScalarFieldEnum[] | SheetTypeScalarFieldEnum
    having?: SheetTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetTypeCountAggregateInputType | true
    _avg?: SheetTypeAvgAggregateInputType
    _sum?: SheetTypeSumAggregateInputType
    _min?: SheetTypeMinAggregateInputType
    _max?: SheetTypeMaxAggregateInputType
  }

  export type SheetTypeGroupByOutputType = {
    id: number
    name: string
    _count: SheetTypeCountAggregateOutputType | null
    _avg: SheetTypeAvgAggregateOutputType | null
    _sum: SheetTypeSumAggregateOutputType | null
    _min: SheetTypeMinAggregateOutputType | null
    _max: SheetTypeMaxAggregateOutputType | null
  }

  type GetSheetTypeGroupByPayload<T extends SheetTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetTypeGroupByOutputType[P]>
            : GetScalarType<T[P], SheetTypeGroupByOutputType[P]>
        }
      >
    >


  export type SheetTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Monster?: boolean | SheetType$MonsterArgs<ExtArgs>
    _count?: boolean | SheetTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sheetType"]>

  export type SheetTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SheetTypeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Monster?: boolean | SheetType$MonsterArgs<ExtArgs>
    _count?: boolean | SheetTypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SheetTypePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "SheetType"
    objects: {
      Monster: Prisma.$MonsterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["sheetType"]>
    composites: {}
  }


  type SheetTypeGetPayload<S extends boolean | null | undefined | SheetTypeDefaultArgs> = $Result.GetResult<Prisma.$SheetTypePayload, S>

  type SheetTypeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SheetTypeFindManyArgs, 'select' | 'include'> & {
      select?: SheetTypeCountAggregateInputType | true
    }

  export interface SheetTypeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SheetType'], meta: { name: 'SheetType' } }
    /**
     * Find zero or one SheetType that matches the filter.
     * @param {SheetTypeFindUniqueArgs} args - Arguments to find a SheetType
     * @example
     * // Get one SheetType
     * const sheetType = await prisma.sheetType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SheetTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SheetTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SheetType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SheetTypeFindUniqueOrThrowArgs} args - Arguments to find a SheetType
     * @example
     * // Get one SheetType
     * const sheetType = await prisma.sheetType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SheetTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SheetTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SheetType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetTypeFindFirstArgs} args - Arguments to find a SheetType
     * @example
     * // Get one SheetType
     * const sheetType = await prisma.sheetType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SheetTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SheetTypeFindFirstArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SheetType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetTypeFindFirstOrThrowArgs} args - Arguments to find a SheetType
     * @example
     * // Get one SheetType
     * const sheetType = await prisma.sheetType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SheetTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SheetTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SheetTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SheetTypes
     * const sheetTypes = await prisma.sheetType.findMany()
     * 
     * // Get first 10 SheetTypes
     * const sheetTypes = await prisma.sheetType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetTypeWithIdOnly = await prisma.sheetType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SheetTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SheetTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SheetType.
     * @param {SheetTypeCreateArgs} args - Arguments to create a SheetType.
     * @example
     * // Create one SheetType
     * const SheetType = await prisma.sheetType.create({
     *   data: {
     *     // ... data to create a SheetType
     *   }
     * })
     * 
    **/
    create<T extends SheetTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SheetTypeCreateArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a SheetType.
     * @param {SheetTypeDeleteArgs} args - Arguments to delete one SheetType.
     * @example
     * // Delete one SheetType
     * const SheetType = await prisma.sheetType.delete({
     *   where: {
     *     // ... filter to delete one SheetType
     *   }
     * })
     * 
    **/
    delete<T extends SheetTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SheetTypeDeleteArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SheetType.
     * @param {SheetTypeUpdateArgs} args - Arguments to update one SheetType.
     * @example
     * // Update one SheetType
     * const sheetType = await prisma.sheetType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SheetTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SheetTypeUpdateArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SheetTypes.
     * @param {SheetTypeDeleteManyArgs} args - Arguments to filter SheetTypes to delete.
     * @example
     * // Delete a few SheetTypes
     * const { count } = await prisma.sheetType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SheetTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SheetTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SheetTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SheetTypes
     * const sheetType = await prisma.sheetType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SheetTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SheetTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SheetType.
     * @param {SheetTypeUpsertArgs} args - Arguments to update or create a SheetType.
     * @example
     * // Update or create a SheetType
     * const sheetType = await prisma.sheetType.upsert({
     *   create: {
     *     // ... data to create a SheetType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SheetType we want to update
     *   }
     * })
    **/
    upsert<T extends SheetTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SheetTypeUpsertArgs<ExtArgs>>
    ): Prisma__SheetTypeClient<$Result.GetResult<Prisma.$SheetTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SheetTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetTypeCountArgs} args - Arguments to filter SheetTypes to count.
     * @example
     * // Count the number of SheetTypes
     * const count = await prisma.sheetType.count({
     *   where: {
     *     // ... the filter for the SheetTypes we want to count
     *   }
     * })
    **/
    count<T extends SheetTypeCountArgs>(
      args?: Subset<T, SheetTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SheetType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetTypeAggregateArgs>(args: Subset<T, SheetTypeAggregateArgs>): Prisma.PrismaPromise<GetSheetTypeAggregateType<T>>

    /**
     * Group by SheetType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetTypeGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends SheetTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetTypeGroupByArgs['orderBy'] }
        : { orderBy?: SheetTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SheetTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SheetType model
   */
  readonly fields: SheetTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SheetType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetTypeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Monster<T extends SheetType$MonsterArgs<ExtArgs> = {}>(args?: Subset<T, SheetType$MonsterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SheetType model
   */ 
  interface SheetTypeFieldRefs {
    readonly id: FieldRef<"SheetType", 'Int'>
    readonly name: FieldRef<"SheetType", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SheetType findUnique
   */
  export type SheetTypeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * Filter, which SheetType to fetch.
     */
    where: SheetTypeWhereUniqueInput
  }


  /**
   * SheetType findUniqueOrThrow
   */
  export type SheetTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * Filter, which SheetType to fetch.
     */
    where: SheetTypeWhereUniqueInput
  }


  /**
   * SheetType findFirst
   */
  export type SheetTypeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * Filter, which SheetType to fetch.
     */
    where?: SheetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetTypes to fetch.
     */
    orderBy?: SheetTypeOrderByWithRelationInput | SheetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetTypes.
     */
    cursor?: SheetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetTypes.
     */
    distinct?: SheetTypeScalarFieldEnum | SheetTypeScalarFieldEnum[]
  }


  /**
   * SheetType findFirstOrThrow
   */
  export type SheetTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * Filter, which SheetType to fetch.
     */
    where?: SheetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetTypes to fetch.
     */
    orderBy?: SheetTypeOrderByWithRelationInput | SheetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetTypes.
     */
    cursor?: SheetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetTypes.
     */
    distinct?: SheetTypeScalarFieldEnum | SheetTypeScalarFieldEnum[]
  }


  /**
   * SheetType findMany
   */
  export type SheetTypeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * Filter, which SheetTypes to fetch.
     */
    where?: SheetTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetTypes to fetch.
     */
    orderBy?: SheetTypeOrderByWithRelationInput | SheetTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SheetTypes.
     */
    cursor?: SheetTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetTypes.
     */
    skip?: number
    distinct?: SheetTypeScalarFieldEnum | SheetTypeScalarFieldEnum[]
  }


  /**
   * SheetType create
   */
  export type SheetTypeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a SheetType.
     */
    data: XOR<SheetTypeCreateInput, SheetTypeUncheckedCreateInput>
  }


  /**
   * SheetType update
   */
  export type SheetTypeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a SheetType.
     */
    data: XOR<SheetTypeUpdateInput, SheetTypeUncheckedUpdateInput>
    /**
     * Choose, which SheetType to update.
     */
    where: SheetTypeWhereUniqueInput
  }


  /**
   * SheetType updateMany
   */
  export type SheetTypeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SheetTypes.
     */
    data: XOR<SheetTypeUpdateManyMutationInput, SheetTypeUncheckedUpdateManyInput>
    /**
     * Filter which SheetTypes to update
     */
    where?: SheetTypeWhereInput
  }


  /**
   * SheetType upsert
   */
  export type SheetTypeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the SheetType to update in case it exists.
     */
    where: SheetTypeWhereUniqueInput
    /**
     * In case the SheetType found by the `where` argument doesn't exist, create a new SheetType with this data.
     */
    create: XOR<SheetTypeCreateInput, SheetTypeUncheckedCreateInput>
    /**
     * In case the SheetType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetTypeUpdateInput, SheetTypeUncheckedUpdateInput>
  }


  /**
   * SheetType delete
   */
  export type SheetTypeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
    /**
     * Filter which SheetType to delete.
     */
    where: SheetTypeWhereUniqueInput
  }


  /**
   * SheetType deleteMany
   */
  export type SheetTypeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetTypes to delete
     */
    where?: SheetTypeWhereInput
  }


  /**
   * SheetType.Monster
   */
  export type SheetType$MonsterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monster
     */
    select?: MonsterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MonsterInclude<ExtArgs> | null
    where?: MonsterWhereInput
    orderBy?: MonsterOrderByWithRelationInput | MonsterOrderByWithRelationInput[]
    cursor?: MonsterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonsterScalarFieldEnum | MonsterScalarFieldEnum[]
  }


  /**
   * SheetType without action
   */
  export type SheetTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetType
     */
    select?: SheetTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SheetTypeInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MiniScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sizeId: 'sizeId',
    typeId: 'typeId',
    subTypeId: 'subTypeId',
    quantity: 'quantity'
  };

  export type MiniScalarFieldEnum = (typeof MiniScalarFieldEnum)[keyof typeof MiniScalarFieldEnum]


  export const MonsterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sizeId: 'sizeId',
    typeId: 'typeId',
    subTypeId: 'subTypeId',
    imageId: 'imageId',
    sheetUrl: 'sheetUrl',
    sheetTypeId: 'sheetTypeId'
  };

  export type MonsterScalarFieldEnum = (typeof MonsterScalarFieldEnum)[keyof typeof MonsterScalarFieldEnum]


  export const MonsterSizeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MonsterSizeScalarFieldEnum = (typeof MonsterSizeScalarFieldEnum)[keyof typeof MonsterSizeScalarFieldEnum]


  export const MonsterTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MonsterTypeScalarFieldEnum = (typeof MonsterTypeScalarFieldEnum)[keyof typeof MonsterTypeScalarFieldEnum]


  export const MonsterSubTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MonsterSubTypeScalarFieldEnum = (typeof MonsterSubTypeScalarFieldEnum)[keyof typeof MonsterSubTypeScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SheetTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SheetTypeScalarFieldEnum = (typeof SheetTypeScalarFieldEnum)[keyof typeof SheetTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MiniWhereInput = {
    AND?: MiniWhereInput | MiniWhereInput[]
    OR?: MiniWhereInput[]
    NOT?: MiniWhereInput | MiniWhereInput[]
    id?: IntFilter<"Mini"> | number
    name?: StringFilter<"Mini"> | string
    sizeId?: IntFilter<"Mini"> | number
    typeId?: IntFilter<"Mini"> | number
    subTypeId?: IntNullableFilter<"Mini"> | number | null
    quantity?: IntFilter<"Mini"> | number
    size?: XOR<MonsterSizeRelationFilter, MonsterSizeWhereInput>
    type?: XOR<MonsterTypeRelationFilter, MonsterTypeWhereInput>
    subType?: XOR<MonsterSubTypeNullableRelationFilter, MonsterSubTypeWhereInput> | null
    monsters?: MonsterListRelationFilter
  }

  export type MiniOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    size?: MonsterSizeOrderByWithRelationInput
    type?: MonsterTypeOrderByWithRelationInput
    subType?: MonsterSubTypeOrderByWithRelationInput
    monsters?: MonsterOrderByRelationAggregateInput
  }

  export type MiniWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MiniWhereInput | MiniWhereInput[]
    OR?: MiniWhereInput[]
    NOT?: MiniWhereInput | MiniWhereInput[]
    name?: StringFilter<"Mini"> | string
    sizeId?: IntFilter<"Mini"> | number
    typeId?: IntFilter<"Mini"> | number
    subTypeId?: IntNullableFilter<"Mini"> | number | null
    quantity?: IntFilter<"Mini"> | number
    size?: XOR<MonsterSizeRelationFilter, MonsterSizeWhereInput>
    type?: XOR<MonsterTypeRelationFilter, MonsterTypeWhereInput>
    subType?: XOR<MonsterSubTypeNullableRelationFilter, MonsterSubTypeWhereInput> | null
    monsters?: MonsterListRelationFilter
  }, "id">

  export type MiniOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    _count?: MiniCountOrderByAggregateInput
    _avg?: MiniAvgOrderByAggregateInput
    _max?: MiniMaxOrderByAggregateInput
    _min?: MiniMinOrderByAggregateInput
    _sum?: MiniSumOrderByAggregateInput
  }

  export type MiniScalarWhereWithAggregatesInput = {
    AND?: MiniScalarWhereWithAggregatesInput | MiniScalarWhereWithAggregatesInput[]
    OR?: MiniScalarWhereWithAggregatesInput[]
    NOT?: MiniScalarWhereWithAggregatesInput | MiniScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mini"> | number
    name?: StringWithAggregatesFilter<"Mini"> | string
    sizeId?: IntWithAggregatesFilter<"Mini"> | number
    typeId?: IntWithAggregatesFilter<"Mini"> | number
    subTypeId?: IntNullableWithAggregatesFilter<"Mini"> | number | null
    quantity?: IntWithAggregatesFilter<"Mini"> | number
  }

  export type MonsterWhereInput = {
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    id?: IntFilter<"Monster"> | number
    name?: StringFilter<"Monster"> | string
    sizeId?: IntFilter<"Monster"> | number
    typeId?: IntFilter<"Monster"> | number
    subTypeId?: IntNullableFilter<"Monster"> | number | null
    imageId?: IntNullableFilter<"Monster"> | number | null
    sheetUrl?: StringFilter<"Monster"> | string
    sheetTypeId?: IntFilter<"Monster"> | number
    size?: XOR<MonsterSizeRelationFilter, MonsterSizeWhereInput>
    type?: XOR<MonsterTypeRelationFilter, MonsterTypeWhereInput>
    subType?: XOR<MonsterSubTypeNullableRelationFilter, MonsterSubTypeWhereInput> | null
    image?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
    sheetType?: XOR<SheetTypeRelationFilter, SheetTypeWhereInput>
    minis?: MiniListRelationFilter
  }

  export type MonsterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    sheetUrl?: SortOrder
    sheetTypeId?: SortOrder
    size?: MonsterSizeOrderByWithRelationInput
    type?: MonsterTypeOrderByWithRelationInput
    subType?: MonsterSubTypeOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
    sheetType?: SheetTypeOrderByWithRelationInput
    minis?: MiniOrderByRelationAggregateInput
  }

  export type MonsterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MonsterWhereInput | MonsterWhereInput[]
    OR?: MonsterWhereInput[]
    NOT?: MonsterWhereInput | MonsterWhereInput[]
    name?: StringFilter<"Monster"> | string
    sizeId?: IntFilter<"Monster"> | number
    typeId?: IntFilter<"Monster"> | number
    subTypeId?: IntNullableFilter<"Monster"> | number | null
    imageId?: IntNullableFilter<"Monster"> | number | null
    sheetUrl?: StringFilter<"Monster"> | string
    sheetTypeId?: IntFilter<"Monster"> | number
    size?: XOR<MonsterSizeRelationFilter, MonsterSizeWhereInput>
    type?: XOR<MonsterTypeRelationFilter, MonsterTypeWhereInput>
    subType?: XOR<MonsterSubTypeNullableRelationFilter, MonsterSubTypeWhereInput> | null
    image?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
    sheetType?: XOR<SheetTypeRelationFilter, SheetTypeWhereInput>
    minis?: MiniListRelationFilter
  }, "id">

  export type MonsterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrderInput | SortOrder
    imageId?: SortOrderInput | SortOrder
    sheetUrl?: SortOrder
    sheetTypeId?: SortOrder
    _count?: MonsterCountOrderByAggregateInput
    _avg?: MonsterAvgOrderByAggregateInput
    _max?: MonsterMaxOrderByAggregateInput
    _min?: MonsterMinOrderByAggregateInput
    _sum?: MonsterSumOrderByAggregateInput
  }

  export type MonsterScalarWhereWithAggregatesInput = {
    AND?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    OR?: MonsterScalarWhereWithAggregatesInput[]
    NOT?: MonsterScalarWhereWithAggregatesInput | MonsterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Monster"> | number
    name?: StringWithAggregatesFilter<"Monster"> | string
    sizeId?: IntWithAggregatesFilter<"Monster"> | number
    typeId?: IntWithAggregatesFilter<"Monster"> | number
    subTypeId?: IntNullableWithAggregatesFilter<"Monster"> | number | null
    imageId?: IntNullableWithAggregatesFilter<"Monster"> | number | null
    sheetUrl?: StringWithAggregatesFilter<"Monster"> | string
    sheetTypeId?: IntWithAggregatesFilter<"Monster"> | number
  }

  export type MonsterSizeWhereInput = {
    AND?: MonsterSizeWhereInput | MonsterSizeWhereInput[]
    OR?: MonsterSizeWhereInput[]
    NOT?: MonsterSizeWhereInput | MonsterSizeWhereInput[]
    id?: IntFilter<"MonsterSize"> | number
    name?: StringFilter<"MonsterSize"> | string
    minis?: MiniListRelationFilter
    monsters?: MonsterListRelationFilter
  }

  export type MonsterSizeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minis?: MiniOrderByRelationAggregateInput
    monsters?: MonsterOrderByRelationAggregateInput
  }

  export type MonsterSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MonsterSizeWhereInput | MonsterSizeWhereInput[]
    OR?: MonsterSizeWhereInput[]
    NOT?: MonsterSizeWhereInput | MonsterSizeWhereInput[]
    name?: StringFilter<"MonsterSize"> | string
    minis?: MiniListRelationFilter
    monsters?: MonsterListRelationFilter
  }, "id">

  export type MonsterSizeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MonsterSizeCountOrderByAggregateInput
    _avg?: MonsterSizeAvgOrderByAggregateInput
    _max?: MonsterSizeMaxOrderByAggregateInput
    _min?: MonsterSizeMinOrderByAggregateInput
    _sum?: MonsterSizeSumOrderByAggregateInput
  }

  export type MonsterSizeScalarWhereWithAggregatesInput = {
    AND?: MonsterSizeScalarWhereWithAggregatesInput | MonsterSizeScalarWhereWithAggregatesInput[]
    OR?: MonsterSizeScalarWhereWithAggregatesInput[]
    NOT?: MonsterSizeScalarWhereWithAggregatesInput | MonsterSizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonsterSize"> | number
    name?: StringWithAggregatesFilter<"MonsterSize"> | string
  }

  export type MonsterTypeWhereInput = {
    AND?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    OR?: MonsterTypeWhereInput[]
    NOT?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    id?: IntFilter<"MonsterType"> | number
    name?: StringFilter<"MonsterType"> | string
    minis?: MiniListRelationFilter
    monsters?: MonsterListRelationFilter
  }

  export type MonsterTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minis?: MiniOrderByRelationAggregateInput
    monsters?: MonsterOrderByRelationAggregateInput
  }

  export type MonsterTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    OR?: MonsterTypeWhereInput[]
    NOT?: MonsterTypeWhereInput | MonsterTypeWhereInput[]
    name?: StringFilter<"MonsterType"> | string
    minis?: MiniListRelationFilter
    monsters?: MonsterListRelationFilter
  }, "id">

  export type MonsterTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MonsterTypeCountOrderByAggregateInput
    _avg?: MonsterTypeAvgOrderByAggregateInput
    _max?: MonsterTypeMaxOrderByAggregateInput
    _min?: MonsterTypeMinOrderByAggregateInput
    _sum?: MonsterTypeSumOrderByAggregateInput
  }

  export type MonsterTypeScalarWhereWithAggregatesInput = {
    AND?: MonsterTypeScalarWhereWithAggregatesInput | MonsterTypeScalarWhereWithAggregatesInput[]
    OR?: MonsterTypeScalarWhereWithAggregatesInput[]
    NOT?: MonsterTypeScalarWhereWithAggregatesInput | MonsterTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonsterType"> | number
    name?: StringWithAggregatesFilter<"MonsterType"> | string
  }

  export type MonsterSubTypeWhereInput = {
    AND?: MonsterSubTypeWhereInput | MonsterSubTypeWhereInput[]
    OR?: MonsterSubTypeWhereInput[]
    NOT?: MonsterSubTypeWhereInput | MonsterSubTypeWhereInput[]
    id?: IntFilter<"MonsterSubType"> | number
    name?: StringFilter<"MonsterSubType"> | string
    minis?: MiniListRelationFilter
    monsters?: MonsterListRelationFilter
  }

  export type MonsterSubTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minis?: MiniOrderByRelationAggregateInput
    monsters?: MonsterOrderByRelationAggregateInput
  }

  export type MonsterSubTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MonsterSubTypeWhereInput | MonsterSubTypeWhereInput[]
    OR?: MonsterSubTypeWhereInput[]
    NOT?: MonsterSubTypeWhereInput | MonsterSubTypeWhereInput[]
    name?: StringFilter<"MonsterSubType"> | string
    minis?: MiniListRelationFilter
    monsters?: MonsterListRelationFilter
  }, "id">

  export type MonsterSubTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MonsterSubTypeCountOrderByAggregateInput
    _avg?: MonsterSubTypeAvgOrderByAggregateInput
    _max?: MonsterSubTypeMaxOrderByAggregateInput
    _min?: MonsterSubTypeMinOrderByAggregateInput
    _sum?: MonsterSubTypeSumOrderByAggregateInput
  }

  export type MonsterSubTypeScalarWhereWithAggregatesInput = {
    AND?: MonsterSubTypeScalarWhereWithAggregatesInput | MonsterSubTypeScalarWhereWithAggregatesInput[]
    OR?: MonsterSubTypeScalarWhereWithAggregatesInput[]
    NOT?: MonsterSubTypeScalarWhereWithAggregatesInput | MonsterSubTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonsterSubType"> | number
    name?: StringWithAggregatesFilter<"MonsterSubType"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    url?: StringFilter<"Image"> | string
    monsters?: MonsterListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    monsters?: MonsterOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    monsters?: MonsterListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    url?: StringWithAggregatesFilter<"Image"> | string
  }

  export type SheetTypeWhereInput = {
    AND?: SheetTypeWhereInput | SheetTypeWhereInput[]
    OR?: SheetTypeWhereInput[]
    NOT?: SheetTypeWhereInput | SheetTypeWhereInput[]
    id?: IntFilter<"SheetType"> | number
    name?: StringFilter<"SheetType"> | string
    Monster?: MonsterListRelationFilter
  }

  export type SheetTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Monster?: MonsterOrderByRelationAggregateInput
  }

  export type SheetTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SheetTypeWhereInput | SheetTypeWhereInput[]
    OR?: SheetTypeWhereInput[]
    NOT?: SheetTypeWhereInput | SheetTypeWhereInput[]
    name?: StringFilter<"SheetType"> | string
    Monster?: MonsterListRelationFilter
  }, "id">

  export type SheetTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SheetTypeCountOrderByAggregateInput
    _avg?: SheetTypeAvgOrderByAggregateInput
    _max?: SheetTypeMaxOrderByAggregateInput
    _min?: SheetTypeMinOrderByAggregateInput
    _sum?: SheetTypeSumOrderByAggregateInput
  }

  export type SheetTypeScalarWhereWithAggregatesInput = {
    AND?: SheetTypeScalarWhereWithAggregatesInput | SheetTypeScalarWhereWithAggregatesInput[]
    OR?: SheetTypeScalarWhereWithAggregatesInput[]
    NOT?: SheetTypeScalarWhereWithAggregatesInput | SheetTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SheetType"> | number
    name?: StringWithAggregatesFilter<"SheetType"> | string
  }

  export type MiniCreateInput = {
    name: string
    quantity: number
    size: MonsterSizeCreateNestedOneWithoutMinisInput
    type: MonsterTypeCreateNestedOneWithoutMinisInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMinisInput
    monsters?: MonsterCreateNestedManyWithoutMinisInput
  }

  export type MiniUncheckedCreateInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    subTypeId?: number | null
    quantity: number
    monsters?: MonsterUncheckedCreateNestedManyWithoutMinisInput
  }

  export type MiniUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    size?: MonsterSizeUpdateOneRequiredWithoutMinisNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMinisNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMinisNestedInput
    monsters?: MonsterUpdateManyWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    monsters?: MonsterUncheckedUpdateManyWithoutMinisNestedInput
  }

  export type MiniUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterCreateInput = {
    name: string
    sheetUrl: string
    size: MonsterSizeCreateNestedOneWithoutMonstersInput
    type: MonsterTypeCreateNestedOneWithoutMonstersInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMonstersInput
    image?: ImageCreateNestedOneWithoutMonstersInput
    sheetType: SheetTypeCreateNestedOneWithoutMonsterInput
    minis?: MiniCreateNestedManyWithoutMonstersInput
  }

  export type MonsterUncheckedCreateInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    subTypeId?: number | null
    imageId?: number | null
    sheetUrl: string
    sheetTypeId: number
    minis?: MiniUncheckedCreateNestedManyWithoutMonstersInput
  }

  export type MonsterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
    size?: MonsterSizeUpdateOneRequiredWithoutMonstersNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMonstersNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMonstersNestedInput
    image?: ImageUpdateOneWithoutMonstersNestedInput
    sheetType?: SheetTypeUpdateOneRequiredWithoutMonsterNestedInput
    minis?: MiniUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
    minis?: MiniUncheckedUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterSizeCreateInput = {
    name: string
    minis?: MiniCreateNestedManyWithoutSizeInput
    monsters?: MonsterCreateNestedManyWithoutSizeInput
  }

  export type MonsterSizeUncheckedCreateInput = {
    id?: number
    name: string
    minis?: MiniUncheckedCreateNestedManyWithoutSizeInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutSizeInput
  }

  export type MonsterSizeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUpdateManyWithoutSizeNestedInput
    monsters?: MonsterUpdateManyWithoutSizeNestedInput
  }

  export type MonsterSizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUncheckedUpdateManyWithoutSizeNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type MonsterSizeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterSizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterTypeCreateInput = {
    name: string
    minis?: MiniCreateNestedManyWithoutTypeInput
    monsters?: MonsterCreateNestedManyWithoutTypeInput
  }

  export type MonsterTypeUncheckedCreateInput = {
    id?: number
    name: string
    minis?: MiniUncheckedCreateNestedManyWithoutTypeInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutTypeInput
  }

  export type MonsterTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUpdateManyWithoutTypeNestedInput
    monsters?: MonsterUpdateManyWithoutTypeNestedInput
  }

  export type MonsterTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUncheckedUpdateManyWithoutTypeNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type MonsterTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterSubTypeCreateInput = {
    name: string
    minis?: MiniCreateNestedManyWithoutSubTypeInput
    monsters?: MonsterCreateNestedManyWithoutSubTypeInput
  }

  export type MonsterSubTypeUncheckedCreateInput = {
    id?: number
    name: string
    minis?: MiniUncheckedCreateNestedManyWithoutSubTypeInput
    monsters?: MonsterUncheckedCreateNestedManyWithoutSubTypeInput
  }

  export type MonsterSubTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUpdateManyWithoutSubTypeNestedInput
    monsters?: MonsterUpdateManyWithoutSubTypeNestedInput
  }

  export type MonsterSubTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUncheckedUpdateManyWithoutSubTypeNestedInput
    monsters?: MonsterUncheckedUpdateManyWithoutSubTypeNestedInput
  }

  export type MonsterSubTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterSubTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    url: string
    monsters?: MonsterCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    url: string
    monsters?: MonsterUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SheetTypeCreateInput = {
    name: string
    Monster?: MonsterCreateNestedManyWithoutSheetTypeInput
  }

  export type SheetTypeUncheckedCreateInput = {
    id?: number
    name: string
    Monster?: MonsterUncheckedCreateNestedManyWithoutSheetTypeInput
  }

  export type SheetTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Monster?: MonsterUpdateManyWithoutSheetTypeNestedInput
  }

  export type SheetTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Monster?: MonsterUncheckedUpdateManyWithoutSheetTypeNestedInput
  }

  export type SheetTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SheetTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MonsterSizeRelationFilter = {
    is?: MonsterSizeWhereInput
    isNot?: MonsterSizeWhereInput
  }

  export type MonsterTypeRelationFilter = {
    is?: MonsterTypeWhereInput
    isNot?: MonsterTypeWhereInput
  }

  export type MonsterSubTypeNullableRelationFilter = {
    is?: MonsterSubTypeWhereInput | null
    isNot?: MonsterSubTypeWhereInput | null
  }

  export type MonsterListRelationFilter = {
    every?: MonsterWhereInput
    some?: MonsterWhereInput
    none?: MonsterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MonsterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MiniCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniAvgOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    quantity?: SortOrder
  }

  export type MiniSumOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ImageNullableRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type SheetTypeRelationFilter = {
    is?: SheetTypeWhereInput
    isNot?: SheetTypeWhereInput
  }

  export type MiniListRelationFilter = {
    every?: MiniWhereInput
    some?: MiniWhereInput
    none?: MiniWhereInput
  }

  export type MiniOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonsterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    imageId?: SortOrder
    sheetUrl?: SortOrder
    sheetTypeId?: SortOrder
  }

  export type MonsterAvgOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    imageId?: SortOrder
    sheetTypeId?: SortOrder
  }

  export type MonsterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    imageId?: SortOrder
    sheetUrl?: SortOrder
    sheetTypeId?: SortOrder
  }

  export type MonsterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    imageId?: SortOrder
    sheetUrl?: SortOrder
    sheetTypeId?: SortOrder
  }

  export type MonsterSumOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    typeId?: SortOrder
    subTypeId?: SortOrder
    imageId?: SortOrder
    sheetTypeId?: SortOrder
  }

  export type MonsterSizeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterSizeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterSizeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterSizeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterSubTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterSubTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterSubTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterSubTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MonsterSubTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SheetTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SheetTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SheetTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SheetTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SheetTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MonsterSizeCreateNestedOneWithoutMinisInput = {
    create?: XOR<MonsterSizeCreateWithoutMinisInput, MonsterSizeUncheckedCreateWithoutMinisInput>
    connectOrCreate?: MonsterSizeCreateOrConnectWithoutMinisInput
    connect?: MonsterSizeWhereUniqueInput
  }

  export type MonsterTypeCreateNestedOneWithoutMinisInput = {
    create?: XOR<MonsterTypeCreateWithoutMinisInput, MonsterTypeUncheckedCreateWithoutMinisInput>
    connectOrCreate?: MonsterTypeCreateOrConnectWithoutMinisInput
    connect?: MonsterTypeWhereUniqueInput
  }

  export type MonsterSubTypeCreateNestedOneWithoutMinisInput = {
    create?: XOR<MonsterSubTypeCreateWithoutMinisInput, MonsterSubTypeUncheckedCreateWithoutMinisInput>
    connectOrCreate?: MonsterSubTypeCreateOrConnectWithoutMinisInput
    connect?: MonsterSubTypeWhereUniqueInput
  }

  export type MonsterCreateNestedManyWithoutMinisInput = {
    create?: XOR<MonsterCreateWithoutMinisInput, MonsterUncheckedCreateWithoutMinisInput> | MonsterCreateWithoutMinisInput[] | MonsterUncheckedCreateWithoutMinisInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutMinisInput | MonsterCreateOrConnectWithoutMinisInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutMinisInput = {
    create?: XOR<MonsterCreateWithoutMinisInput, MonsterUncheckedCreateWithoutMinisInput> | MonsterCreateWithoutMinisInput[] | MonsterUncheckedCreateWithoutMinisInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutMinisInput | MonsterCreateOrConnectWithoutMinisInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonsterSizeUpdateOneRequiredWithoutMinisNestedInput = {
    create?: XOR<MonsterSizeCreateWithoutMinisInput, MonsterSizeUncheckedCreateWithoutMinisInput>
    connectOrCreate?: MonsterSizeCreateOrConnectWithoutMinisInput
    upsert?: MonsterSizeUpsertWithoutMinisInput
    connect?: MonsterSizeWhereUniqueInput
    update?: XOR<XOR<MonsterSizeUpdateToOneWithWhereWithoutMinisInput, MonsterSizeUpdateWithoutMinisInput>, MonsterSizeUncheckedUpdateWithoutMinisInput>
  }

  export type MonsterTypeUpdateOneRequiredWithoutMinisNestedInput = {
    create?: XOR<MonsterTypeCreateWithoutMinisInput, MonsterTypeUncheckedCreateWithoutMinisInput>
    connectOrCreate?: MonsterTypeCreateOrConnectWithoutMinisInput
    upsert?: MonsterTypeUpsertWithoutMinisInput
    connect?: MonsterTypeWhereUniqueInput
    update?: XOR<XOR<MonsterTypeUpdateToOneWithWhereWithoutMinisInput, MonsterTypeUpdateWithoutMinisInput>, MonsterTypeUncheckedUpdateWithoutMinisInput>
  }

  export type MonsterSubTypeUpdateOneWithoutMinisNestedInput = {
    create?: XOR<MonsterSubTypeCreateWithoutMinisInput, MonsterSubTypeUncheckedCreateWithoutMinisInput>
    connectOrCreate?: MonsterSubTypeCreateOrConnectWithoutMinisInput
    upsert?: MonsterSubTypeUpsertWithoutMinisInput
    disconnect?: MonsterSubTypeWhereInput | boolean
    delete?: MonsterSubTypeWhereInput | boolean
    connect?: MonsterSubTypeWhereUniqueInput
    update?: XOR<XOR<MonsterSubTypeUpdateToOneWithWhereWithoutMinisInput, MonsterSubTypeUpdateWithoutMinisInput>, MonsterSubTypeUncheckedUpdateWithoutMinisInput>
  }

  export type MonsterUpdateManyWithoutMinisNestedInput = {
    create?: XOR<MonsterCreateWithoutMinisInput, MonsterUncheckedCreateWithoutMinisInput> | MonsterCreateWithoutMinisInput[] | MonsterUncheckedCreateWithoutMinisInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutMinisInput | MonsterCreateOrConnectWithoutMinisInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutMinisInput | MonsterUpsertWithWhereUniqueWithoutMinisInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutMinisInput | MonsterUpdateWithWhereUniqueWithoutMinisInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutMinisInput | MonsterUpdateManyWithWhereWithoutMinisInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonsterUncheckedUpdateManyWithoutMinisNestedInput = {
    create?: XOR<MonsterCreateWithoutMinisInput, MonsterUncheckedCreateWithoutMinisInput> | MonsterCreateWithoutMinisInput[] | MonsterUncheckedCreateWithoutMinisInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutMinisInput | MonsterCreateOrConnectWithoutMinisInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutMinisInput | MonsterUpsertWithWhereUniqueWithoutMinisInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutMinisInput | MonsterUpdateWithWhereUniqueWithoutMinisInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutMinisInput | MonsterUpdateManyWithWhereWithoutMinisInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MonsterSizeCreateNestedOneWithoutMonstersInput = {
    create?: XOR<MonsterSizeCreateWithoutMonstersInput, MonsterSizeUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: MonsterSizeCreateOrConnectWithoutMonstersInput
    connect?: MonsterSizeWhereUniqueInput
  }

  export type MonsterTypeCreateNestedOneWithoutMonstersInput = {
    create?: XOR<MonsterTypeCreateWithoutMonstersInput, MonsterTypeUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: MonsterTypeCreateOrConnectWithoutMonstersInput
    connect?: MonsterTypeWhereUniqueInput
  }

  export type MonsterSubTypeCreateNestedOneWithoutMonstersInput = {
    create?: XOR<MonsterSubTypeCreateWithoutMonstersInput, MonsterSubTypeUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: MonsterSubTypeCreateOrConnectWithoutMonstersInput
    connect?: MonsterSubTypeWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutMonstersInput = {
    create?: XOR<ImageCreateWithoutMonstersInput, ImageUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMonstersInput
    connect?: ImageWhereUniqueInput
  }

  export type SheetTypeCreateNestedOneWithoutMonsterInput = {
    create?: XOR<SheetTypeCreateWithoutMonsterInput, SheetTypeUncheckedCreateWithoutMonsterInput>
    connectOrCreate?: SheetTypeCreateOrConnectWithoutMonsterInput
    connect?: SheetTypeWhereUniqueInput
  }

  export type MiniCreateNestedManyWithoutMonstersInput = {
    create?: XOR<MiniCreateWithoutMonstersInput, MiniUncheckedCreateWithoutMonstersInput> | MiniCreateWithoutMonstersInput[] | MiniUncheckedCreateWithoutMonstersInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutMonstersInput | MiniCreateOrConnectWithoutMonstersInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MiniUncheckedCreateNestedManyWithoutMonstersInput = {
    create?: XOR<MiniCreateWithoutMonstersInput, MiniUncheckedCreateWithoutMonstersInput> | MiniCreateWithoutMonstersInput[] | MiniUncheckedCreateWithoutMonstersInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutMonstersInput | MiniCreateOrConnectWithoutMonstersInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MonsterSizeUpdateOneRequiredWithoutMonstersNestedInput = {
    create?: XOR<MonsterSizeCreateWithoutMonstersInput, MonsterSizeUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: MonsterSizeCreateOrConnectWithoutMonstersInput
    upsert?: MonsterSizeUpsertWithoutMonstersInput
    connect?: MonsterSizeWhereUniqueInput
    update?: XOR<XOR<MonsterSizeUpdateToOneWithWhereWithoutMonstersInput, MonsterSizeUpdateWithoutMonstersInput>, MonsterSizeUncheckedUpdateWithoutMonstersInput>
  }

  export type MonsterTypeUpdateOneRequiredWithoutMonstersNestedInput = {
    create?: XOR<MonsterTypeCreateWithoutMonstersInput, MonsterTypeUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: MonsterTypeCreateOrConnectWithoutMonstersInput
    upsert?: MonsterTypeUpsertWithoutMonstersInput
    connect?: MonsterTypeWhereUniqueInput
    update?: XOR<XOR<MonsterTypeUpdateToOneWithWhereWithoutMonstersInput, MonsterTypeUpdateWithoutMonstersInput>, MonsterTypeUncheckedUpdateWithoutMonstersInput>
  }

  export type MonsterSubTypeUpdateOneWithoutMonstersNestedInput = {
    create?: XOR<MonsterSubTypeCreateWithoutMonstersInput, MonsterSubTypeUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: MonsterSubTypeCreateOrConnectWithoutMonstersInput
    upsert?: MonsterSubTypeUpsertWithoutMonstersInput
    disconnect?: MonsterSubTypeWhereInput | boolean
    delete?: MonsterSubTypeWhereInput | boolean
    connect?: MonsterSubTypeWhereUniqueInput
    update?: XOR<XOR<MonsterSubTypeUpdateToOneWithWhereWithoutMonstersInput, MonsterSubTypeUpdateWithoutMonstersInput>, MonsterSubTypeUncheckedUpdateWithoutMonstersInput>
  }

  export type ImageUpdateOneWithoutMonstersNestedInput = {
    create?: XOR<ImageCreateWithoutMonstersInput, ImageUncheckedCreateWithoutMonstersInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMonstersInput
    upsert?: ImageUpsertWithoutMonstersInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutMonstersInput, ImageUpdateWithoutMonstersInput>, ImageUncheckedUpdateWithoutMonstersInput>
  }

  export type SheetTypeUpdateOneRequiredWithoutMonsterNestedInput = {
    create?: XOR<SheetTypeCreateWithoutMonsterInput, SheetTypeUncheckedCreateWithoutMonsterInput>
    connectOrCreate?: SheetTypeCreateOrConnectWithoutMonsterInput
    upsert?: SheetTypeUpsertWithoutMonsterInput
    connect?: SheetTypeWhereUniqueInput
    update?: XOR<XOR<SheetTypeUpdateToOneWithWhereWithoutMonsterInput, SheetTypeUpdateWithoutMonsterInput>, SheetTypeUncheckedUpdateWithoutMonsterInput>
  }

  export type MiniUpdateManyWithoutMonstersNestedInput = {
    create?: XOR<MiniCreateWithoutMonstersInput, MiniUncheckedCreateWithoutMonstersInput> | MiniCreateWithoutMonstersInput[] | MiniUncheckedCreateWithoutMonstersInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutMonstersInput | MiniCreateOrConnectWithoutMonstersInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutMonstersInput | MiniUpsertWithWhereUniqueWithoutMonstersInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutMonstersInput | MiniUpdateWithWhereUniqueWithoutMonstersInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutMonstersInput | MiniUpdateManyWithWhereWithoutMonstersInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MiniUncheckedUpdateManyWithoutMonstersNestedInput = {
    create?: XOR<MiniCreateWithoutMonstersInput, MiniUncheckedCreateWithoutMonstersInput> | MiniCreateWithoutMonstersInput[] | MiniUncheckedCreateWithoutMonstersInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutMonstersInput | MiniCreateOrConnectWithoutMonstersInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutMonstersInput | MiniUpsertWithWhereUniqueWithoutMonstersInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutMonstersInput | MiniUpdateWithWhereUniqueWithoutMonstersInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutMonstersInput | MiniUpdateManyWithWhereWithoutMonstersInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MiniCreateNestedManyWithoutSizeInput = {
    create?: XOR<MiniCreateWithoutSizeInput, MiniUncheckedCreateWithoutSizeInput> | MiniCreateWithoutSizeInput[] | MiniUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSizeInput | MiniCreateOrConnectWithoutSizeInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MonsterCreateNestedManyWithoutSizeInput = {
    create?: XOR<MonsterCreateWithoutSizeInput, MonsterUncheckedCreateWithoutSizeInput> | MonsterCreateWithoutSizeInput[] | MonsterUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSizeInput | MonsterCreateOrConnectWithoutSizeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MiniUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<MiniCreateWithoutSizeInput, MiniUncheckedCreateWithoutSizeInput> | MiniCreateWithoutSizeInput[] | MiniUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSizeInput | MiniCreateOrConnectWithoutSizeInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<MonsterCreateWithoutSizeInput, MonsterUncheckedCreateWithoutSizeInput> | MonsterCreateWithoutSizeInput[] | MonsterUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSizeInput | MonsterCreateOrConnectWithoutSizeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MiniUpdateManyWithoutSizeNestedInput = {
    create?: XOR<MiniCreateWithoutSizeInput, MiniUncheckedCreateWithoutSizeInput> | MiniCreateWithoutSizeInput[] | MiniUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSizeInput | MiniCreateOrConnectWithoutSizeInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutSizeInput | MiniUpsertWithWhereUniqueWithoutSizeInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutSizeInput | MiniUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutSizeInput | MiniUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MonsterUpdateManyWithoutSizeNestedInput = {
    create?: XOR<MonsterCreateWithoutSizeInput, MonsterUncheckedCreateWithoutSizeInput> | MonsterCreateWithoutSizeInput[] | MonsterUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSizeInput | MonsterCreateOrConnectWithoutSizeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutSizeInput | MonsterUpsertWithWhereUniqueWithoutSizeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutSizeInput | MonsterUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutSizeInput | MonsterUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MiniUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<MiniCreateWithoutSizeInput, MiniUncheckedCreateWithoutSizeInput> | MiniCreateWithoutSizeInput[] | MiniUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSizeInput | MiniCreateOrConnectWithoutSizeInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutSizeInput | MiniUpsertWithWhereUniqueWithoutSizeInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutSizeInput | MiniUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutSizeInput | MiniUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MonsterUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<MonsterCreateWithoutSizeInput, MonsterUncheckedCreateWithoutSizeInput> | MonsterCreateWithoutSizeInput[] | MonsterUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSizeInput | MonsterCreateOrConnectWithoutSizeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutSizeInput | MonsterUpsertWithWhereUniqueWithoutSizeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutSizeInput | MonsterUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutSizeInput | MonsterUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MiniCreateNestedManyWithoutTypeInput = {
    create?: XOR<MiniCreateWithoutTypeInput, MiniUncheckedCreateWithoutTypeInput> | MiniCreateWithoutTypeInput[] | MiniUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutTypeInput | MiniCreateOrConnectWithoutTypeInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MonsterCreateNestedManyWithoutTypeInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MiniUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<MiniCreateWithoutTypeInput, MiniUncheckedCreateWithoutTypeInput> | MiniCreateWithoutTypeInput[] | MiniUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutTypeInput | MiniCreateOrConnectWithoutTypeInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MiniUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MiniCreateWithoutTypeInput, MiniUncheckedCreateWithoutTypeInput> | MiniCreateWithoutTypeInput[] | MiniUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutTypeInput | MiniCreateOrConnectWithoutTypeInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutTypeInput | MiniUpsertWithWhereUniqueWithoutTypeInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutTypeInput | MiniUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutTypeInput | MiniUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MonsterUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutTypeInput | MonsterUpsertWithWhereUniqueWithoutTypeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutTypeInput | MonsterUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutTypeInput | MonsterUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MiniUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MiniCreateWithoutTypeInput, MiniUncheckedCreateWithoutTypeInput> | MiniCreateWithoutTypeInput[] | MiniUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutTypeInput | MiniCreateOrConnectWithoutTypeInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutTypeInput | MiniUpsertWithWhereUniqueWithoutTypeInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutTypeInput | MiniUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutTypeInput | MiniUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MonsterUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput> | MonsterCreateWithoutTypeInput[] | MonsterUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutTypeInput | MonsterCreateOrConnectWithoutTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutTypeInput | MonsterUpsertWithWhereUniqueWithoutTypeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutTypeInput | MonsterUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutTypeInput | MonsterUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MiniCreateNestedManyWithoutSubTypeInput = {
    create?: XOR<MiniCreateWithoutSubTypeInput, MiniUncheckedCreateWithoutSubTypeInput> | MiniCreateWithoutSubTypeInput[] | MiniUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSubTypeInput | MiniCreateOrConnectWithoutSubTypeInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MonsterCreateNestedManyWithoutSubTypeInput = {
    create?: XOR<MonsterCreateWithoutSubTypeInput, MonsterUncheckedCreateWithoutSubTypeInput> | MonsterCreateWithoutSubTypeInput[] | MonsterUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSubTypeInput | MonsterCreateOrConnectWithoutSubTypeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MiniUncheckedCreateNestedManyWithoutSubTypeInput = {
    create?: XOR<MiniCreateWithoutSubTypeInput, MiniUncheckedCreateWithoutSubTypeInput> | MiniCreateWithoutSubTypeInput[] | MiniUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSubTypeInput | MiniCreateOrConnectWithoutSubTypeInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutSubTypeInput = {
    create?: XOR<MonsterCreateWithoutSubTypeInput, MonsterUncheckedCreateWithoutSubTypeInput> | MonsterCreateWithoutSubTypeInput[] | MonsterUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSubTypeInput | MonsterCreateOrConnectWithoutSubTypeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MiniUpdateManyWithoutSubTypeNestedInput = {
    create?: XOR<MiniCreateWithoutSubTypeInput, MiniUncheckedCreateWithoutSubTypeInput> | MiniCreateWithoutSubTypeInput[] | MiniUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSubTypeInput | MiniCreateOrConnectWithoutSubTypeInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutSubTypeInput | MiniUpsertWithWhereUniqueWithoutSubTypeInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutSubTypeInput | MiniUpdateWithWhereUniqueWithoutSubTypeInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutSubTypeInput | MiniUpdateManyWithWhereWithoutSubTypeInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MonsterUpdateManyWithoutSubTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutSubTypeInput, MonsterUncheckedCreateWithoutSubTypeInput> | MonsterCreateWithoutSubTypeInput[] | MonsterUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSubTypeInput | MonsterCreateOrConnectWithoutSubTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutSubTypeInput | MonsterUpsertWithWhereUniqueWithoutSubTypeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutSubTypeInput | MonsterUpdateWithWhereUniqueWithoutSubTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutSubTypeInput | MonsterUpdateManyWithWhereWithoutSubTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MiniUncheckedUpdateManyWithoutSubTypeNestedInput = {
    create?: XOR<MiniCreateWithoutSubTypeInput, MiniUncheckedCreateWithoutSubTypeInput> | MiniCreateWithoutSubTypeInput[] | MiniUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MiniCreateOrConnectWithoutSubTypeInput | MiniCreateOrConnectWithoutSubTypeInput[]
    upsert?: MiniUpsertWithWhereUniqueWithoutSubTypeInput | MiniUpsertWithWhereUniqueWithoutSubTypeInput[]
    set?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    disconnect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    delete?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    connect?: MiniWhereUniqueInput | MiniWhereUniqueInput[]
    update?: MiniUpdateWithWhereUniqueWithoutSubTypeInput | MiniUpdateWithWhereUniqueWithoutSubTypeInput[]
    updateMany?: MiniUpdateManyWithWhereWithoutSubTypeInput | MiniUpdateManyWithWhereWithoutSubTypeInput[]
    deleteMany?: MiniScalarWhereInput | MiniScalarWhereInput[]
  }

  export type MonsterUncheckedUpdateManyWithoutSubTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutSubTypeInput, MonsterUncheckedCreateWithoutSubTypeInput> | MonsterCreateWithoutSubTypeInput[] | MonsterUncheckedCreateWithoutSubTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSubTypeInput | MonsterCreateOrConnectWithoutSubTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutSubTypeInput | MonsterUpsertWithWhereUniqueWithoutSubTypeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutSubTypeInput | MonsterUpdateWithWhereUniqueWithoutSubTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutSubTypeInput | MonsterUpdateManyWithWhereWithoutSubTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MonsterCreateNestedManyWithoutImageInput = {
    create?: XOR<MonsterCreateWithoutImageInput, MonsterUncheckedCreateWithoutImageInput> | MonsterCreateWithoutImageInput[] | MonsterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutImageInput | MonsterCreateOrConnectWithoutImageInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<MonsterCreateWithoutImageInput, MonsterUncheckedCreateWithoutImageInput> | MonsterCreateWithoutImageInput[] | MonsterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutImageInput | MonsterCreateOrConnectWithoutImageInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MonsterUpdateManyWithoutImageNestedInput = {
    create?: XOR<MonsterCreateWithoutImageInput, MonsterUncheckedCreateWithoutImageInput> | MonsterCreateWithoutImageInput[] | MonsterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutImageInput | MonsterCreateOrConnectWithoutImageInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutImageInput | MonsterUpsertWithWhereUniqueWithoutImageInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutImageInput | MonsterUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutImageInput | MonsterUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MonsterUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<MonsterCreateWithoutImageInput, MonsterUncheckedCreateWithoutImageInput> | MonsterCreateWithoutImageInput[] | MonsterUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutImageInput | MonsterCreateOrConnectWithoutImageInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutImageInput | MonsterUpsertWithWhereUniqueWithoutImageInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutImageInput | MonsterUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutImageInput | MonsterUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MonsterCreateNestedManyWithoutSheetTypeInput = {
    create?: XOR<MonsterCreateWithoutSheetTypeInput, MonsterUncheckedCreateWithoutSheetTypeInput> | MonsterCreateWithoutSheetTypeInput[] | MonsterUncheckedCreateWithoutSheetTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSheetTypeInput | MonsterCreateOrConnectWithoutSheetTypeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MonsterUncheckedCreateNestedManyWithoutSheetTypeInput = {
    create?: XOR<MonsterCreateWithoutSheetTypeInput, MonsterUncheckedCreateWithoutSheetTypeInput> | MonsterCreateWithoutSheetTypeInput[] | MonsterUncheckedCreateWithoutSheetTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSheetTypeInput | MonsterCreateOrConnectWithoutSheetTypeInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
  }

  export type MonsterUpdateManyWithoutSheetTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutSheetTypeInput, MonsterUncheckedCreateWithoutSheetTypeInput> | MonsterCreateWithoutSheetTypeInput[] | MonsterUncheckedCreateWithoutSheetTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSheetTypeInput | MonsterCreateOrConnectWithoutSheetTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutSheetTypeInput | MonsterUpsertWithWhereUniqueWithoutSheetTypeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutSheetTypeInput | MonsterUpdateWithWhereUniqueWithoutSheetTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutSheetTypeInput | MonsterUpdateManyWithWhereWithoutSheetTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type MonsterUncheckedUpdateManyWithoutSheetTypeNestedInput = {
    create?: XOR<MonsterCreateWithoutSheetTypeInput, MonsterUncheckedCreateWithoutSheetTypeInput> | MonsterCreateWithoutSheetTypeInput[] | MonsterUncheckedCreateWithoutSheetTypeInput[]
    connectOrCreate?: MonsterCreateOrConnectWithoutSheetTypeInput | MonsterCreateOrConnectWithoutSheetTypeInput[]
    upsert?: MonsterUpsertWithWhereUniqueWithoutSheetTypeInput | MonsterUpsertWithWhereUniqueWithoutSheetTypeInput[]
    set?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    disconnect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    delete?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    connect?: MonsterWhereUniqueInput | MonsterWhereUniqueInput[]
    update?: MonsterUpdateWithWhereUniqueWithoutSheetTypeInput | MonsterUpdateWithWhereUniqueWithoutSheetTypeInput[]
    updateMany?: MonsterUpdateManyWithWhereWithoutSheetTypeInput | MonsterUpdateManyWithWhereWithoutSheetTypeInput[]
    deleteMany?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MonsterSizeCreateWithoutMinisInput = {
    name: string
    monsters?: MonsterCreateNestedManyWithoutSizeInput
  }

  export type MonsterSizeUncheckedCreateWithoutMinisInput = {
    id?: number
    name: string
    monsters?: MonsterUncheckedCreateNestedManyWithoutSizeInput
  }

  export type MonsterSizeCreateOrConnectWithoutMinisInput = {
    where: MonsterSizeWhereUniqueInput
    create: XOR<MonsterSizeCreateWithoutMinisInput, MonsterSizeUncheckedCreateWithoutMinisInput>
  }

  export type MonsterTypeCreateWithoutMinisInput = {
    name: string
    monsters?: MonsterCreateNestedManyWithoutTypeInput
  }

  export type MonsterTypeUncheckedCreateWithoutMinisInput = {
    id?: number
    name: string
    monsters?: MonsterUncheckedCreateNestedManyWithoutTypeInput
  }

  export type MonsterTypeCreateOrConnectWithoutMinisInput = {
    where: MonsterTypeWhereUniqueInput
    create: XOR<MonsterTypeCreateWithoutMinisInput, MonsterTypeUncheckedCreateWithoutMinisInput>
  }

  export type MonsterSubTypeCreateWithoutMinisInput = {
    name: string
    monsters?: MonsterCreateNestedManyWithoutSubTypeInput
  }

  export type MonsterSubTypeUncheckedCreateWithoutMinisInput = {
    id?: number
    name: string
    monsters?: MonsterUncheckedCreateNestedManyWithoutSubTypeInput
  }

  export type MonsterSubTypeCreateOrConnectWithoutMinisInput = {
    where: MonsterSubTypeWhereUniqueInput
    create: XOR<MonsterSubTypeCreateWithoutMinisInput, MonsterSubTypeUncheckedCreateWithoutMinisInput>
  }

  export type MonsterCreateWithoutMinisInput = {
    name: string
    sheetUrl: string
    size: MonsterSizeCreateNestedOneWithoutMonstersInput
    type: MonsterTypeCreateNestedOneWithoutMonstersInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMonstersInput
    image?: ImageCreateNestedOneWithoutMonstersInput
    sheetType: SheetTypeCreateNestedOneWithoutMonsterInput
  }

  export type MonsterUncheckedCreateWithoutMinisInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    subTypeId?: number | null
    imageId?: number | null
    sheetUrl: string
    sheetTypeId: number
  }

  export type MonsterCreateOrConnectWithoutMinisInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutMinisInput, MonsterUncheckedCreateWithoutMinisInput>
  }

  export type MonsterSizeUpsertWithoutMinisInput = {
    update: XOR<MonsterSizeUpdateWithoutMinisInput, MonsterSizeUncheckedUpdateWithoutMinisInput>
    create: XOR<MonsterSizeCreateWithoutMinisInput, MonsterSizeUncheckedCreateWithoutMinisInput>
    where?: MonsterSizeWhereInput
  }

  export type MonsterSizeUpdateToOneWithWhereWithoutMinisInput = {
    where?: MonsterSizeWhereInput
    data: XOR<MonsterSizeUpdateWithoutMinisInput, MonsterSizeUncheckedUpdateWithoutMinisInput>
  }

  export type MonsterSizeUpdateWithoutMinisInput = {
    name?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUpdateManyWithoutSizeNestedInput
  }

  export type MonsterSizeUncheckedUpdateWithoutMinisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type MonsterTypeUpsertWithoutMinisInput = {
    update: XOR<MonsterTypeUpdateWithoutMinisInput, MonsterTypeUncheckedUpdateWithoutMinisInput>
    create: XOR<MonsterTypeCreateWithoutMinisInput, MonsterTypeUncheckedCreateWithoutMinisInput>
    where?: MonsterTypeWhereInput
  }

  export type MonsterTypeUpdateToOneWithWhereWithoutMinisInput = {
    where?: MonsterTypeWhereInput
    data: XOR<MonsterTypeUpdateWithoutMinisInput, MonsterTypeUncheckedUpdateWithoutMinisInput>
  }

  export type MonsterTypeUpdateWithoutMinisInput = {
    name?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUpdateManyWithoutTypeNestedInput
  }

  export type MonsterTypeUncheckedUpdateWithoutMinisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type MonsterSubTypeUpsertWithoutMinisInput = {
    update: XOR<MonsterSubTypeUpdateWithoutMinisInput, MonsterSubTypeUncheckedUpdateWithoutMinisInput>
    create: XOR<MonsterSubTypeCreateWithoutMinisInput, MonsterSubTypeUncheckedCreateWithoutMinisInput>
    where?: MonsterSubTypeWhereInput
  }

  export type MonsterSubTypeUpdateToOneWithWhereWithoutMinisInput = {
    where?: MonsterSubTypeWhereInput
    data: XOR<MonsterSubTypeUpdateWithoutMinisInput, MonsterSubTypeUncheckedUpdateWithoutMinisInput>
  }

  export type MonsterSubTypeUpdateWithoutMinisInput = {
    name?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUpdateManyWithoutSubTypeNestedInput
  }

  export type MonsterSubTypeUncheckedUpdateWithoutMinisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    monsters?: MonsterUncheckedUpdateManyWithoutSubTypeNestedInput
  }

  export type MonsterUpsertWithWhereUniqueWithoutMinisInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutMinisInput, MonsterUncheckedUpdateWithoutMinisInput>
    create: XOR<MonsterCreateWithoutMinisInput, MonsterUncheckedCreateWithoutMinisInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutMinisInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutMinisInput, MonsterUncheckedUpdateWithoutMinisInput>
  }

  export type MonsterUpdateManyWithWhereWithoutMinisInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutMinisInput>
  }

  export type MonsterScalarWhereInput = {
    AND?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    OR?: MonsterScalarWhereInput[]
    NOT?: MonsterScalarWhereInput | MonsterScalarWhereInput[]
    id?: IntFilter<"Monster"> | number
    name?: StringFilter<"Monster"> | string
    sizeId?: IntFilter<"Monster"> | number
    typeId?: IntFilter<"Monster"> | number
    subTypeId?: IntNullableFilter<"Monster"> | number | null
    imageId?: IntNullableFilter<"Monster"> | number | null
    sheetUrl?: StringFilter<"Monster"> | string
    sheetTypeId?: IntFilter<"Monster"> | number
  }

  export type MonsterSizeCreateWithoutMonstersInput = {
    name: string
    minis?: MiniCreateNestedManyWithoutSizeInput
  }

  export type MonsterSizeUncheckedCreateWithoutMonstersInput = {
    id?: number
    name: string
    minis?: MiniUncheckedCreateNestedManyWithoutSizeInput
  }

  export type MonsterSizeCreateOrConnectWithoutMonstersInput = {
    where: MonsterSizeWhereUniqueInput
    create: XOR<MonsterSizeCreateWithoutMonstersInput, MonsterSizeUncheckedCreateWithoutMonstersInput>
  }

  export type MonsterTypeCreateWithoutMonstersInput = {
    name: string
    minis?: MiniCreateNestedManyWithoutTypeInput
  }

  export type MonsterTypeUncheckedCreateWithoutMonstersInput = {
    id?: number
    name: string
    minis?: MiniUncheckedCreateNestedManyWithoutTypeInput
  }

  export type MonsterTypeCreateOrConnectWithoutMonstersInput = {
    where: MonsterTypeWhereUniqueInput
    create: XOR<MonsterTypeCreateWithoutMonstersInput, MonsterTypeUncheckedCreateWithoutMonstersInput>
  }

  export type MonsterSubTypeCreateWithoutMonstersInput = {
    name: string
    minis?: MiniCreateNestedManyWithoutSubTypeInput
  }

  export type MonsterSubTypeUncheckedCreateWithoutMonstersInput = {
    id?: number
    name: string
    minis?: MiniUncheckedCreateNestedManyWithoutSubTypeInput
  }

  export type MonsterSubTypeCreateOrConnectWithoutMonstersInput = {
    where: MonsterSubTypeWhereUniqueInput
    create: XOR<MonsterSubTypeCreateWithoutMonstersInput, MonsterSubTypeUncheckedCreateWithoutMonstersInput>
  }

  export type ImageCreateWithoutMonstersInput = {
    url: string
  }

  export type ImageUncheckedCreateWithoutMonstersInput = {
    id?: number
    url: string
  }

  export type ImageCreateOrConnectWithoutMonstersInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMonstersInput, ImageUncheckedCreateWithoutMonstersInput>
  }

  export type SheetTypeCreateWithoutMonsterInput = {
    name: string
  }

  export type SheetTypeUncheckedCreateWithoutMonsterInput = {
    id?: number
    name: string
  }

  export type SheetTypeCreateOrConnectWithoutMonsterInput = {
    where: SheetTypeWhereUniqueInput
    create: XOR<SheetTypeCreateWithoutMonsterInput, SheetTypeUncheckedCreateWithoutMonsterInput>
  }

  export type MiniCreateWithoutMonstersInput = {
    name: string
    quantity: number
    size: MonsterSizeCreateNestedOneWithoutMinisInput
    type: MonsterTypeCreateNestedOneWithoutMinisInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMinisInput
  }

  export type MiniUncheckedCreateWithoutMonstersInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    subTypeId?: number | null
    quantity: number
  }

  export type MiniCreateOrConnectWithoutMonstersInput = {
    where: MiniWhereUniqueInput
    create: XOR<MiniCreateWithoutMonstersInput, MiniUncheckedCreateWithoutMonstersInput>
  }

  export type MonsterSizeUpsertWithoutMonstersInput = {
    update: XOR<MonsterSizeUpdateWithoutMonstersInput, MonsterSizeUncheckedUpdateWithoutMonstersInput>
    create: XOR<MonsterSizeCreateWithoutMonstersInput, MonsterSizeUncheckedCreateWithoutMonstersInput>
    where?: MonsterSizeWhereInput
  }

  export type MonsterSizeUpdateToOneWithWhereWithoutMonstersInput = {
    where?: MonsterSizeWhereInput
    data: XOR<MonsterSizeUpdateWithoutMonstersInput, MonsterSizeUncheckedUpdateWithoutMonstersInput>
  }

  export type MonsterSizeUpdateWithoutMonstersInput = {
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUpdateManyWithoutSizeNestedInput
  }

  export type MonsterSizeUncheckedUpdateWithoutMonstersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type MonsterTypeUpsertWithoutMonstersInput = {
    update: XOR<MonsterTypeUpdateWithoutMonstersInput, MonsterTypeUncheckedUpdateWithoutMonstersInput>
    create: XOR<MonsterTypeCreateWithoutMonstersInput, MonsterTypeUncheckedCreateWithoutMonstersInput>
    where?: MonsterTypeWhereInput
  }

  export type MonsterTypeUpdateToOneWithWhereWithoutMonstersInput = {
    where?: MonsterTypeWhereInput
    data: XOR<MonsterTypeUpdateWithoutMonstersInput, MonsterTypeUncheckedUpdateWithoutMonstersInput>
  }

  export type MonsterTypeUpdateWithoutMonstersInput = {
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUpdateManyWithoutTypeNestedInput
  }

  export type MonsterTypeUncheckedUpdateWithoutMonstersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type MonsterSubTypeUpsertWithoutMonstersInput = {
    update: XOR<MonsterSubTypeUpdateWithoutMonstersInput, MonsterSubTypeUncheckedUpdateWithoutMonstersInput>
    create: XOR<MonsterSubTypeCreateWithoutMonstersInput, MonsterSubTypeUncheckedCreateWithoutMonstersInput>
    where?: MonsterSubTypeWhereInput
  }

  export type MonsterSubTypeUpdateToOneWithWhereWithoutMonstersInput = {
    where?: MonsterSubTypeWhereInput
    data: XOR<MonsterSubTypeUpdateWithoutMonstersInput, MonsterSubTypeUncheckedUpdateWithoutMonstersInput>
  }

  export type MonsterSubTypeUpdateWithoutMonstersInput = {
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUpdateManyWithoutSubTypeNestedInput
  }

  export type MonsterSubTypeUncheckedUpdateWithoutMonstersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minis?: MiniUncheckedUpdateManyWithoutSubTypeNestedInput
  }

  export type ImageUpsertWithoutMonstersInput = {
    update: XOR<ImageUpdateWithoutMonstersInput, ImageUncheckedUpdateWithoutMonstersInput>
    create: XOR<ImageCreateWithoutMonstersInput, ImageUncheckedCreateWithoutMonstersInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutMonstersInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutMonstersInput, ImageUncheckedUpdateWithoutMonstersInput>
  }

  export type ImageUpdateWithoutMonstersInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateWithoutMonstersInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SheetTypeUpsertWithoutMonsterInput = {
    update: XOR<SheetTypeUpdateWithoutMonsterInput, SheetTypeUncheckedUpdateWithoutMonsterInput>
    create: XOR<SheetTypeCreateWithoutMonsterInput, SheetTypeUncheckedCreateWithoutMonsterInput>
    where?: SheetTypeWhereInput
  }

  export type SheetTypeUpdateToOneWithWhereWithoutMonsterInput = {
    where?: SheetTypeWhereInput
    data: XOR<SheetTypeUpdateWithoutMonsterInput, SheetTypeUncheckedUpdateWithoutMonsterInput>
  }

  export type SheetTypeUpdateWithoutMonsterInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SheetTypeUncheckedUpdateWithoutMonsterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MiniUpsertWithWhereUniqueWithoutMonstersInput = {
    where: MiniWhereUniqueInput
    update: XOR<MiniUpdateWithoutMonstersInput, MiniUncheckedUpdateWithoutMonstersInput>
    create: XOR<MiniCreateWithoutMonstersInput, MiniUncheckedCreateWithoutMonstersInput>
  }

  export type MiniUpdateWithWhereUniqueWithoutMonstersInput = {
    where: MiniWhereUniqueInput
    data: XOR<MiniUpdateWithoutMonstersInput, MiniUncheckedUpdateWithoutMonstersInput>
  }

  export type MiniUpdateManyWithWhereWithoutMonstersInput = {
    where: MiniScalarWhereInput
    data: XOR<MiniUpdateManyMutationInput, MiniUncheckedUpdateManyWithoutMonstersInput>
  }

  export type MiniScalarWhereInput = {
    AND?: MiniScalarWhereInput | MiniScalarWhereInput[]
    OR?: MiniScalarWhereInput[]
    NOT?: MiniScalarWhereInput | MiniScalarWhereInput[]
    id?: IntFilter<"Mini"> | number
    name?: StringFilter<"Mini"> | string
    sizeId?: IntFilter<"Mini"> | number
    typeId?: IntFilter<"Mini"> | number
    subTypeId?: IntNullableFilter<"Mini"> | number | null
    quantity?: IntFilter<"Mini"> | number
  }

  export type MiniCreateWithoutSizeInput = {
    name: string
    quantity: number
    type: MonsterTypeCreateNestedOneWithoutMinisInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMinisInput
    monsters?: MonsterCreateNestedManyWithoutMinisInput
  }

  export type MiniUncheckedCreateWithoutSizeInput = {
    id?: number
    name: string
    typeId: number
    subTypeId?: number | null
    quantity: number
    monsters?: MonsterUncheckedCreateNestedManyWithoutMinisInput
  }

  export type MiniCreateOrConnectWithoutSizeInput = {
    where: MiniWhereUniqueInput
    create: XOR<MiniCreateWithoutSizeInput, MiniUncheckedCreateWithoutSizeInput>
  }

  export type MonsterCreateWithoutSizeInput = {
    name: string
    sheetUrl: string
    type: MonsterTypeCreateNestedOneWithoutMonstersInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMonstersInput
    image?: ImageCreateNestedOneWithoutMonstersInput
    sheetType: SheetTypeCreateNestedOneWithoutMonsterInput
    minis?: MiniCreateNestedManyWithoutMonstersInput
  }

  export type MonsterUncheckedCreateWithoutSizeInput = {
    id?: number
    name: string
    typeId: number
    subTypeId?: number | null
    imageId?: number | null
    sheetUrl: string
    sheetTypeId: number
    minis?: MiniUncheckedCreateNestedManyWithoutMonstersInput
  }

  export type MonsterCreateOrConnectWithoutSizeInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutSizeInput, MonsterUncheckedCreateWithoutSizeInput>
  }

  export type MiniUpsertWithWhereUniqueWithoutSizeInput = {
    where: MiniWhereUniqueInput
    update: XOR<MiniUpdateWithoutSizeInput, MiniUncheckedUpdateWithoutSizeInput>
    create: XOR<MiniCreateWithoutSizeInput, MiniUncheckedCreateWithoutSizeInput>
  }

  export type MiniUpdateWithWhereUniqueWithoutSizeInput = {
    where: MiniWhereUniqueInput
    data: XOR<MiniUpdateWithoutSizeInput, MiniUncheckedUpdateWithoutSizeInput>
  }

  export type MiniUpdateManyWithWhereWithoutSizeInput = {
    where: MiniScalarWhereInput
    data: XOR<MiniUpdateManyMutationInput, MiniUncheckedUpdateManyWithoutSizeInput>
  }

  export type MonsterUpsertWithWhereUniqueWithoutSizeInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutSizeInput, MonsterUncheckedUpdateWithoutSizeInput>
    create: XOR<MonsterCreateWithoutSizeInput, MonsterUncheckedCreateWithoutSizeInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutSizeInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutSizeInput, MonsterUncheckedUpdateWithoutSizeInput>
  }

  export type MonsterUpdateManyWithWhereWithoutSizeInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutSizeInput>
  }

  export type MiniCreateWithoutTypeInput = {
    name: string
    quantity: number
    size: MonsterSizeCreateNestedOneWithoutMinisInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMinisInput
    monsters?: MonsterCreateNestedManyWithoutMinisInput
  }

  export type MiniUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    sizeId: number
    subTypeId?: number | null
    quantity: number
    monsters?: MonsterUncheckedCreateNestedManyWithoutMinisInput
  }

  export type MiniCreateOrConnectWithoutTypeInput = {
    where: MiniWhereUniqueInput
    create: XOR<MiniCreateWithoutTypeInput, MiniUncheckedCreateWithoutTypeInput>
  }

  export type MonsterCreateWithoutTypeInput = {
    name: string
    sheetUrl: string
    size: MonsterSizeCreateNestedOneWithoutMonstersInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMonstersInput
    image?: ImageCreateNestedOneWithoutMonstersInput
    sheetType: SheetTypeCreateNestedOneWithoutMonsterInput
    minis?: MiniCreateNestedManyWithoutMonstersInput
  }

  export type MonsterUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    sizeId: number
    subTypeId?: number | null
    imageId?: number | null
    sheetUrl: string
    sheetTypeId: number
    minis?: MiniUncheckedCreateNestedManyWithoutMonstersInput
  }

  export type MonsterCreateOrConnectWithoutTypeInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput>
  }

  export type MiniUpsertWithWhereUniqueWithoutTypeInput = {
    where: MiniWhereUniqueInput
    update: XOR<MiniUpdateWithoutTypeInput, MiniUncheckedUpdateWithoutTypeInput>
    create: XOR<MiniCreateWithoutTypeInput, MiniUncheckedCreateWithoutTypeInput>
  }

  export type MiniUpdateWithWhereUniqueWithoutTypeInput = {
    where: MiniWhereUniqueInput
    data: XOR<MiniUpdateWithoutTypeInput, MiniUncheckedUpdateWithoutTypeInput>
  }

  export type MiniUpdateManyWithWhereWithoutTypeInput = {
    where: MiniScalarWhereInput
    data: XOR<MiniUpdateManyMutationInput, MiniUncheckedUpdateManyWithoutTypeInput>
  }

  export type MonsterUpsertWithWhereUniqueWithoutTypeInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutTypeInput, MonsterUncheckedUpdateWithoutTypeInput>
    create: XOR<MonsterCreateWithoutTypeInput, MonsterUncheckedCreateWithoutTypeInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutTypeInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutTypeInput, MonsterUncheckedUpdateWithoutTypeInput>
  }

  export type MonsterUpdateManyWithWhereWithoutTypeInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutTypeInput>
  }

  export type MiniCreateWithoutSubTypeInput = {
    name: string
    quantity: number
    size: MonsterSizeCreateNestedOneWithoutMinisInput
    type: MonsterTypeCreateNestedOneWithoutMinisInput
    monsters?: MonsterCreateNestedManyWithoutMinisInput
  }

  export type MiniUncheckedCreateWithoutSubTypeInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    quantity: number
    monsters?: MonsterUncheckedCreateNestedManyWithoutMinisInput
  }

  export type MiniCreateOrConnectWithoutSubTypeInput = {
    where: MiniWhereUniqueInput
    create: XOR<MiniCreateWithoutSubTypeInput, MiniUncheckedCreateWithoutSubTypeInput>
  }

  export type MonsterCreateWithoutSubTypeInput = {
    name: string
    sheetUrl: string
    size: MonsterSizeCreateNestedOneWithoutMonstersInput
    type: MonsterTypeCreateNestedOneWithoutMonstersInput
    image?: ImageCreateNestedOneWithoutMonstersInput
    sheetType: SheetTypeCreateNestedOneWithoutMonsterInput
    minis?: MiniCreateNestedManyWithoutMonstersInput
  }

  export type MonsterUncheckedCreateWithoutSubTypeInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    imageId?: number | null
    sheetUrl: string
    sheetTypeId: number
    minis?: MiniUncheckedCreateNestedManyWithoutMonstersInput
  }

  export type MonsterCreateOrConnectWithoutSubTypeInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutSubTypeInput, MonsterUncheckedCreateWithoutSubTypeInput>
  }

  export type MiniUpsertWithWhereUniqueWithoutSubTypeInput = {
    where: MiniWhereUniqueInput
    update: XOR<MiniUpdateWithoutSubTypeInput, MiniUncheckedUpdateWithoutSubTypeInput>
    create: XOR<MiniCreateWithoutSubTypeInput, MiniUncheckedCreateWithoutSubTypeInput>
  }

  export type MiniUpdateWithWhereUniqueWithoutSubTypeInput = {
    where: MiniWhereUniqueInput
    data: XOR<MiniUpdateWithoutSubTypeInput, MiniUncheckedUpdateWithoutSubTypeInput>
  }

  export type MiniUpdateManyWithWhereWithoutSubTypeInput = {
    where: MiniScalarWhereInput
    data: XOR<MiniUpdateManyMutationInput, MiniUncheckedUpdateManyWithoutSubTypeInput>
  }

  export type MonsterUpsertWithWhereUniqueWithoutSubTypeInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutSubTypeInput, MonsterUncheckedUpdateWithoutSubTypeInput>
    create: XOR<MonsterCreateWithoutSubTypeInput, MonsterUncheckedCreateWithoutSubTypeInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutSubTypeInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutSubTypeInput, MonsterUncheckedUpdateWithoutSubTypeInput>
  }

  export type MonsterUpdateManyWithWhereWithoutSubTypeInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutSubTypeInput>
  }

  export type MonsterCreateWithoutImageInput = {
    name: string
    sheetUrl: string
    size: MonsterSizeCreateNestedOneWithoutMonstersInput
    type: MonsterTypeCreateNestedOneWithoutMonstersInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMonstersInput
    sheetType: SheetTypeCreateNestedOneWithoutMonsterInput
    minis?: MiniCreateNestedManyWithoutMonstersInput
  }

  export type MonsterUncheckedCreateWithoutImageInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    subTypeId?: number | null
    sheetUrl: string
    sheetTypeId: number
    minis?: MiniUncheckedCreateNestedManyWithoutMonstersInput
  }

  export type MonsterCreateOrConnectWithoutImageInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutImageInput, MonsterUncheckedCreateWithoutImageInput>
  }

  export type MonsterUpsertWithWhereUniqueWithoutImageInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutImageInput, MonsterUncheckedUpdateWithoutImageInput>
    create: XOR<MonsterCreateWithoutImageInput, MonsterUncheckedCreateWithoutImageInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutImageInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutImageInput, MonsterUncheckedUpdateWithoutImageInput>
  }

  export type MonsterUpdateManyWithWhereWithoutImageInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutImageInput>
  }

  export type MonsterCreateWithoutSheetTypeInput = {
    name: string
    sheetUrl: string
    size: MonsterSizeCreateNestedOneWithoutMonstersInput
    type: MonsterTypeCreateNestedOneWithoutMonstersInput
    subType?: MonsterSubTypeCreateNestedOneWithoutMonstersInput
    image?: ImageCreateNestedOneWithoutMonstersInput
    minis?: MiniCreateNestedManyWithoutMonstersInput
  }

  export type MonsterUncheckedCreateWithoutSheetTypeInput = {
    id?: number
    name: string
    sizeId: number
    typeId: number
    subTypeId?: number | null
    imageId?: number | null
    sheetUrl: string
    minis?: MiniUncheckedCreateNestedManyWithoutMonstersInput
  }

  export type MonsterCreateOrConnectWithoutSheetTypeInput = {
    where: MonsterWhereUniqueInput
    create: XOR<MonsterCreateWithoutSheetTypeInput, MonsterUncheckedCreateWithoutSheetTypeInput>
  }

  export type MonsterUpsertWithWhereUniqueWithoutSheetTypeInput = {
    where: MonsterWhereUniqueInput
    update: XOR<MonsterUpdateWithoutSheetTypeInput, MonsterUncheckedUpdateWithoutSheetTypeInput>
    create: XOR<MonsterCreateWithoutSheetTypeInput, MonsterUncheckedCreateWithoutSheetTypeInput>
  }

  export type MonsterUpdateWithWhereUniqueWithoutSheetTypeInput = {
    where: MonsterWhereUniqueInput
    data: XOR<MonsterUpdateWithoutSheetTypeInput, MonsterUncheckedUpdateWithoutSheetTypeInput>
  }

  export type MonsterUpdateManyWithWhereWithoutSheetTypeInput = {
    where: MonsterScalarWhereInput
    data: XOR<MonsterUpdateManyMutationInput, MonsterUncheckedUpdateManyWithoutSheetTypeInput>
  }

  export type MonsterUpdateWithoutMinisInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
    size?: MonsterSizeUpdateOneRequiredWithoutMonstersNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMonstersNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMonstersNestedInput
    image?: ImageUpdateOneWithoutMonstersNestedInput
    sheetType?: SheetTypeUpdateOneRequiredWithoutMonsterNestedInput
  }

  export type MonsterUncheckedUpdateWithoutMinisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUncheckedUpdateManyWithoutMinisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MiniUpdateWithoutMonstersInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    size?: MonsterSizeUpdateOneRequiredWithoutMinisNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMinisNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateWithoutMonstersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniUncheckedUpdateManyWithoutMonstersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MiniUpdateWithoutSizeInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: MonsterTypeUpdateOneRequiredWithoutMinisNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMinisNestedInput
    monsters?: MonsterUpdateManyWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    monsters?: MonsterUncheckedUpdateManyWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateManyWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUpdateWithoutSizeInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
    type?: MonsterTypeUpdateOneRequiredWithoutMonstersNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMonstersNestedInput
    image?: ImageUpdateOneWithoutMonstersNestedInput
    sheetType?: SheetTypeUpdateOneRequiredWithoutMonsterNestedInput
    minis?: MiniUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
    minis?: MiniUncheckedUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateManyWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MiniUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    size?: MonsterSizeUpdateOneRequiredWithoutMinisNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMinisNestedInput
    monsters?: MonsterUpdateManyWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    monsters?: MonsterUncheckedUpdateManyWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
    size?: MonsterSizeUpdateOneRequiredWithoutMonstersNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMonstersNestedInput
    image?: ImageUpdateOneWithoutMonstersNestedInput
    sheetType?: SheetTypeUpdateOneRequiredWithoutMonsterNestedInput
    minis?: MiniUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
    minis?: MiniUncheckedUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MiniUpdateWithoutSubTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    size?: MonsterSizeUpdateOneRequiredWithoutMinisNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMinisNestedInput
    monsters?: MonsterUpdateManyWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateWithoutSubTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    monsters?: MonsterUncheckedUpdateManyWithoutMinisNestedInput
  }

  export type MiniUncheckedUpdateManyWithoutSubTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUpdateWithoutSubTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
    size?: MonsterSizeUpdateOneRequiredWithoutMonstersNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMonstersNestedInput
    image?: ImageUpdateOneWithoutMonstersNestedInput
    sheetType?: SheetTypeUpdateOneRequiredWithoutMonsterNestedInput
    minis?: MiniUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateWithoutSubTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
    minis?: MiniUncheckedUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateManyWithoutSubTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUpdateWithoutImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
    size?: MonsterSizeUpdateOneRequiredWithoutMonstersNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMonstersNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMonstersNestedInput
    sheetType?: SheetTypeUpdateOneRequiredWithoutMonsterNestedInput
    minis?: MiniUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
    minis?: MiniUncheckedUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    sheetTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MonsterUpdateWithoutSheetTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    sheetUrl?: StringFieldUpdateOperationsInput | string
    size?: MonsterSizeUpdateOneRequiredWithoutMonstersNestedInput
    type?: MonsterTypeUpdateOneRequiredWithoutMonstersNestedInput
    subType?: MonsterSubTypeUpdateOneWithoutMonstersNestedInput
    image?: ImageUpdateOneWithoutMonstersNestedInput
    minis?: MiniUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateWithoutSheetTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
    minis?: MiniUncheckedUpdateManyWithoutMonstersNestedInput
  }

  export type MonsterUncheckedUpdateManyWithoutSheetTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sizeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    subTypeId?: NullableIntFieldUpdateOperationsInput | number | null
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetUrl?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MiniCountOutputTypeDefaultArgs instead
     */
    export type MiniCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MiniCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterCountOutputTypeDefaultArgs instead
     */
    export type MonsterCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterSizeCountOutputTypeDefaultArgs instead
     */
    export type MonsterSizeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterSizeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterTypeCountOutputTypeDefaultArgs instead
     */
    export type MonsterTypeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterSubTypeCountOutputTypeDefaultArgs instead
     */
    export type MonsterSubTypeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterSubTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageCountOutputTypeDefaultArgs instead
     */
    export type ImageCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ImageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SheetTypeCountOutputTypeDefaultArgs instead
     */
    export type SheetTypeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SheetTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MiniDefaultArgs instead
     */
    export type MiniArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MiniDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterDefaultArgs instead
     */
    export type MonsterArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterSizeDefaultArgs instead
     */
    export type MonsterSizeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterSizeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterTypeDefaultArgs instead
     */
    export type MonsterTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MonsterSubTypeDefaultArgs instead
     */
    export type MonsterSubTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MonsterSubTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SheetTypeDefaultArgs instead
     */
    export type SheetTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SheetTypeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}