// let umur = 20;

// const Status = umur >= 18 ? "Dewasa" : "anak";

// TYPE X = T extends U ? A : B

type IsString<T> = T extends string ? "TEXT" : "BUKAN_TEXT";

type Test1 = IsString<string>;
type Test2 = IsString<number>;
type Test3 = IsString<boolean>;
type Test4 = IsString<"hallo">;

const t1: Test1 = "TEXT";
const t2: Test2 = "BUKAN_TEXT";
const t3: Test3 = "BUKAN_TEXT";
const t4: Test4 = "TEXT";
