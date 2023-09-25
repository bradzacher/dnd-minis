declare module '@sqlite.org/sqlite-wasm' {
  export class Stmt {}
  export class Sqlite3Db {
    /**
     * Expects to be given a DB instance or an sqlite3* pointer (may be null) and an sqlite3 API result code. If the result code is not falsy, this function throws an SQLite3Error with an error message from sqlite3_errmsg(), using the given db handle, or sqlite3_errstr() if the db handle is falsy or is a close()ed DB instance.
     * Note that if it's passed a non-error code like SQLITE_ROW or SQLITE_DONE, it will still throw but the error string might be "Not an error." The various non-0 non-error codes need to be checked for in client code where they are expected.
     * If it does not throw, it returns its db argument (this, if called as a member function).
     */
    static checkRc(db: Sqlite3OODb, resultCode: unknown): Sqlite3OODb;

    /**
     * resolves to the filename which was passed to the constructor
     */
    filename: string;
    /**
     * resolves to the sqlite3* which this object wraps.
     * This value may be passed to any WASM-bound functions which accept an sqlite3* argument.
     * It resolves to undefined after this object is close()d.
     */
    pointer: unknown;

    /**
     * Throws if this given DB has been closed, else returns this.
     */
    affirmOpen(): this;

    /**
     * Returns the number of changes, as per sqlite3_changes() (if the first argument is false) or sqlite3_total_changes() (if it's true).
     * If the 2nd argument is true, it uses sqlite3_changes64() or sqlite3_total_changes64(), which will trigger an exception if this build does not have BigInt support enabled.

     */
    changes(total: boolean, sixyFour: boolean): number;

    /**
     * equivalent to DB.checkRc(db,resultCode).
     */
    checkRc(resultCode: unknown): this;

    /**
     * Finalizes all still-open statements which were opened by this object and closes this database connection.
     * This is a no-op if the db has already been closed. After calling close(), this.pointer will resolve to undefined, so that can be used to check whether the db instance is still opened.
     * If this.onclose.before is a function then it is called before any close-related cleanup.
     * If this.onclose.after is a function then it is called after the db is closed but before auxiliary state like this.filename is cleared.
     * Both onclose handlers are passed this object as their only argument. If this db is not opened, neither of the handlers are called. Any exceptions the handlers throw are ignored because "destructors must not throw."
     * Note that garbage collection of a db handle, if it happens at all, will never trigger close(), so onclose handlers are not a reliable way to implement close-time cleanup or maintenance of a db.
     */
    close(): unknown;

    /**
     * Creates a new scalar, aggregate, or window UDF (User-Defined Function) which is accessible via SQL code.
     */
    createFunction(name: string, fn: unknown): unknown;
    createFunction(name: string, fn: unknown, optionsObject: unknown): unknown;
    createFunction(name: string, optionsObject: unknown): unknown;
    createFunction(optionsObject: unknown): unknown;

    /**
     * This is simply a proxy for sqlite3_db_filename(), returning the filename associated with the given database name, defaulting to "main".
     * The argument may be either a JS string or a pointer to a WASM-allocated C-string
     * Throws if this db is closed
     */
    dbFilename(dbName?: string): string;

    /**
     * Returns the name of the given 0-based db number, as documented for sqlite3_db_name().
     * Throws if this db is closed.
     */
    dbName(dbIndex?: number): string;

    /**
     * Returns the name of the sqlite_vfs for the given database, defaulting to "main".
     * The db name may be a JS or WASM C-string.
     * Throws if this db is closed.
     */
    dbVfsName(dbName?: number): string;

    /**
     * Executes SQL statements and optionally collects query results and/or calls a callback for each result row.
     */
    // exec<TReturnValue extends 'this' | 'saveSql' = 'this'>(
    //   sql: string,
    //   optionsObject?: {
    //     bind?: Record<string, unknown> | unknown[];
    //     saveSql?: string[];
    //     returnValue?: TReturnValue;
    //     rowMode?: 'array' | 'object' | 'stmt' | number | `$${string}`;
    //   },
    // ): ExecReturn<TReturnValue>;
    // exec<
    //   TReturnValue extends 'this' | 'resultRows' | 'saveSql' = 'this',
    //   TRowMode extends 'array' | 'object' | 'stmt' = 'array',
    // >(optionsObject: {
    //   sql: string;
    //   bind?: Record<string, unknown> | unknown[];
    //   saveSql?: string[];
    //   returnValue?: TReturnValue;
    //   resultRows?: unknown[];
    //   callback?: (row: ExecCallbackArgument<TRowMode>) => void;
    //   rowMode?: TRowMode; // | number | `$${string}`;
    // }): ExecReturn<TReturnValue, TRowMode>;
    exec(sql: string): void;
    exec<TRow>(optionsObject: {
      sql: string;
      returnValue: 'resultRows';
      rowMode: 'object';
      bind?: Record<string, unknown>;
      callback?: (row: TRow) => void;
    }): TRow[];
    exec<TRow>(optionsObject: {
      sql: string;
      returnValue: 'resultRows';
      rowMode: 'object';
      bind?: Record<string, unknown>;
      callback?: (row: TRow) => void;
    }): TRow[];
    exec<TRow>(optionsObject: {
      rowMode: 'object';
      sql: string;
      returnValue: 'resultRows';
      bind?: Record<string, unknown>;
      callback?: (row: TRow) => void;
    }): TRow[];

    /**
     * Returns true if this db handle is open, else false.
     */
    isOpen(): boolean;

    /**
     * Returns the number of currently-opened Stmt handles for this db handle, or 0 if this object is close()d. Note that only handles prepared via this.prepare() are counted, and not handles prepared using capi.sqlite3_prepare_v3() (or equivalent).
     */
    openStatementCount(): number;

    /**
     * Compiles the given SQL and returns a prepared Stmt. This is the only way to create new Stmt objects. Throws on error.
     */
    prepare(sql: string): unknown;

    /**
     * This works similarly to transaction() but uses sqlite3's SAVEPOINT feature.
     * This function starts a savepoint (with an unspecified name) and calls the given callback function, passing it this db object.
     * If the callback returns, the savepoint is released (committed).
     * If the callback throws, the savepoint is rolled back.
     * If it does not throw, it returns the result of the callback.
     */
    savepoint(cb: unknown): unknown;

    /**
     * Prepares the given SQL, step()s it one time, and returns an array containing the values of the first result row.
     * If it has no results, undefined is returned.
     */
    selectArray(sql: string, bind?: unknown): unknown;

    /**
     * Runs the given SQL and returns an array of all results, with each row represented as an array, as per the 'array' rowMode option to exec().
     * An empty result set resolves to an empty array.
     * The second argument, if any, is treated as the bind option to a call to exec().
     * Throws on error.
     */
    selectArrays(sql: string, bind?: unknown): unknown;

    /**
     * Prepares the given SQL, step()s it one time, and returns an object containing the key/value pairs of the first result row. If it has no results, undefined is returned.
     * Note that the order of returned object's keys is not guaranteed to be the same as the order of the fields in the query string.
     * If passed a second argument other than undefined, it is treated like an argument to Stmt.bind(), so may be any type supported by that function.
     * Throws on error.
     */
    selectObject(sql: string, bind?: unknown): unknown;

    /**
     * Works identically to selectArrays() except that each value in the returned array is an object, as per the "object" rowMode option to exec().
     */
    selectObjects(sql: string, bind?: unknown): unknown;

    /**
     * Prepares the given SQL, step()s the resulting Stmt one time, and returns the value of the first result column.
     * If it has no results, undefined is returned.
     * If passed a second argument, it is treated like an argument to Stmt.bind(), so may be any type supported by that function.
     * Passing the undefined value is the same as passing no value, which is useful when...
     * If passed a 3rd argument, it is expected to be one of the SQLITE_{typename} constants. Passing the undefined value is the same as not passing a value.
     * Throws on error (e.g. malformed SQL).
     */
    selectValue(sql: string, bind?: unknown, asType?: unknown): unknown;

    /**
     * Runs the given query and returns an array of the values from the first result column of each row of the result set.
     * The 2nd argument is an optional value for use in a single-argument call to Stmt.bind().
     * The 3rd argument may be any value suitable for use as the 2nd argument to Stmt.get(). If a 3rd argument is desired but no bind data are needed, pass undefined for the 2nd argument
     * If there are no result rows, an empty array is returned.
     */
    selectValues(sql: string, bind?: unknown, asType?: unknown): unknown;

    /**
     * Starts a transaction, calls the given callback, and then either rolls back or commits the transaction, depending on whether the callback throws.
     * The callback is passed this object as its only argument.
     * On success, returns the result of the callback.
     * Throws on error.
     *
     * Note that transactions may not be nested, so this will throw if it is called recursively.
     * For nested transactions, use the savepoint() method or manually manage SAVEPOINTs using exec().
     * If called with 2 arguments, the first must be a keyword which is legal immediately after a BEGIN statement, e.g. one of "DEFERRED", "IMMEDIATE", or "EXCLUSIVE".
     * Though the exact list of supported keywords is not hard-coded here, in order to be future-compatible, if the argument does not look like a single keyword then an exception is triggered with a description of the problem.
     */
    transaction(callback: unknown): Stmt;
    transaction(beginQualifier: string, callback: unknown): Stmt;
  }
  type ExecReturn<
    TReturnValue extends 'this' | 'resultRows' | 'saveSql',
    TRowMode extends 'array' | 'object' | 'stmt',
  > = TReturnValue extends 'this'
    ? Sqlite3Db
    : TReturnValue extends 'resultRows'
    ? TRowMode extends 'array'
      ? unknown[][]
      : TRowMode extends 'object'
      ? Record<string, unknown>[]
      : TRowMode extends 'smt'
      ? never
      : never
    : TReturnValue extends 'saveSql'
    ? string[]
    : never;
  type ExecCallbackArgument<TRowMode extends 'array' | 'object' | 'stmt'> =
    TRowMode extends 'array'
      ? unknown[]
      : TRowMode extends 'object'
      ? Record<string, unknown>
      : TRowMode extends 'smt'
      ? Stmt
      : never;

  export interface Sqlite3 {
    oo1: {
      DB: typeof Sqlite3Db;
    };
  }

  export default function sqlite3InitModule(): Promise<Sqlite3>;
}
