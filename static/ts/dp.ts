class Dp {
    // 定义一个数组来存储子问题的解

    public dp(): void {
        const CAPACITY: number = 20;
        const NUM: number = 10;
        let dp: any = new Array(CAPACITY);
        let weight = new Array(NUM);
        let value = new Array(NUM);

        for (let i = 0; i < NUM; i++) {
            weight[i] = Math.floor(Math.random() * CAPACITY) + 1;
            value[i] = Math.floor(Math.random() * CAPACITY) + 1;
        }

        console.log("weight:", weight);
        console.log("value:", value);
        
        
        // 初始化数组
        for (let i = 0; i <NUM; i++) {
            dp[i] = new Array(CAPACITY+1);
            dp[i].fill(0);
        }
        this.printDp(dp, NUM, CAPACITY+1);
        for (let j = CAPACITY; j >= weight[0]; j--) {
            dp[0][j] = value[0];
        }
        this.printDp(dp, NUM, CAPACITY+1);
        // 填充数组
        for (let i = 1; i <NUM; i++) {
            for (let j = 1; j < CAPACITY+1; j++) {
                if (j >= weight[i - 1]) {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i - 1]] + value[i - 1]);
                }
            }
        }
        this.printDp(dp, NUM, CAPACITY+1);
        return;
    }

    public printDp(dp: any, a: number, b: number) {
        let s: string = "==================================\n";
        for (let i = 0; i < a; i++) {
            s += "\n".substring(+!i);
            for (let j = 0; j <b; j++) {
                s += "\t".substring(+!j) + dp[i][j];
            }
        }
        s += "\n==================================";
        console.log(s);
        
    }

}

let dp = new Dp();
dp.dp();
