// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unusedVariable = 123; // 未使用変数（no-unused-vars）

function greet(name: string) {
    console.log('Hello, ' + name); // セミコロンがない場合、semiルールでエラー
} // 不要な空白やインデントミスで style ルール違反にもなり得る

greet('Alice');

const obj: any = {}; // any の使用（@typescript-eslint/no-explicit-any）

// 関数の戻り値の型が明示されていない（@typescript-eslint/explicit-function-return-type）
function add(a: number, b: number) {
    return a + b;
}

const arr = [1, 2, 3];
arr.forEach((num) => {
    console.log(num);
}); // インデントやセミコロンのルール違反が発生することも
