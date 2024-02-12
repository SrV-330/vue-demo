var Dp = /** @class */ (function () {
    function Dp() {
    }
    // 定义一个数组来存储子问题的解
    Dp.prototype.dp = function () {
        var CAPACITY = 20;
        var NUM = 10;
        var dp = new Array(CAPACITY);
        var weight = new Array(NUM);
        var value = new Array(NUM);
        for (var i = 0; i < NUM; i++) {
            weight[i] = Math.floor(Math.random() * CAPACITY) + 1;
            value[i] = Math.floor(Math.random() * CAPACITY) + 1;
        }
        console.log("weight:", weight);
        console.log("value:", value);
        // 初始化数组
        for (var i = 0; i < NUM; i++) {
            dp[i] = new Array(CAPACITY + 1);
            dp[i].fill(0);
        }
        this.printDp(dp, NUM, CAPACITY + 1);
        for (var j = CAPACITY; j >= weight[0]; j--) {
            dp[0][j] = value[0];
        }
        this.printDp(dp, NUM, CAPACITY + 1);
        // 填充数组
        for (var i = 1; i < NUM; i++) {
            for (var j = 1; j < CAPACITY + 1; j++) {
                if (j >= weight[i - 1]) {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i - 1]] + value[i - 1]);
                }
            }
        }
        this.printDp(dp, NUM, CAPACITY + 1);
        return;
    };
    Dp.prototype.printDp = function (dp, a, b) {
        var s = "==================================\n";
        for (var i = 0; i < a; i++) {
            s += "\n".substring(+!i);
            for (var j = 0; j < b; j++) {
                s += "\t".substring(+!j) + dp[i][j];
            }
        }
        s += "\n==================================";
        console.log(s);
    };
    return Dp;
}());
var dp = new Dp();
dp.dp();
