# 示例：$crypt

> 来源：上传 zip 中 `8` 个原始示例文件自动合并。

## $crypt-加密算法-01.对称加密-01.AES加密(工具版)

```javascript
//AIGame 官方示例

//(1)准备16位密钥
let key = $crypt.aesKey();

//(2)准备要加密的明文
let myData = "今天天气真好!";

//(3)开始加密
let jiamiResult = $crypt.aesJiami(myData, key);

alert("AES加密结果", jiamiResult);

//(4)开始解密
let jiemiResult = $crypt.aesJiemi(jiamiResult, key);

alert("AES解密结果", jiemiResult);




//示例结束
```

## $crypt-加密算法-01.对称加密-02.AES加密(常规版)

```javascript
//AIGame 官方示例

//准备一个长度为16的密钥
let key = "ACSDFGHJUYDLOPSD";

//准备需要加密的明文
let text = "我是被加密的明文";

//开始加密
let result = $crypt.jiami(text,key,"AES",{
    input:"string",
    output:"base64"
});

alert("AES加密结果", result);

//开始解密
let jiemiResult = $crypt.jiemi(result,key,"AES",{
    input:"base64",
    output:"string"
});


alert("AES解密结果", jiemiResult);





//示例结束
```

## $crypt-加密算法-01.对称加密-03.DES加密

```javascript
//AIGame 官方示例


let key = "ACSDFGHJ";
let text = "我是被加密的明文";


let result = $crypt.jiami(text,key,"DES",{
    input:"string",
    output:"base64"
});

alert("DES加密",result)

let result2 = $crypt.jiemi(result,key,"DES",{
    input:"base64",
    output:"string"
});


alert("DES解密",result2)









//示例结束
```

## $crypt-加密算法-01.对称加密-04.RSA加密

```javascript
//AIGame 官方示例




//生成密钥对
let keyPair = $crypt.generateKeyPair("RSA", 1024);

alert("RSA密钥信息", keyPair);

log("使用私钥加密");
let jiamiStr = $crypt.jiami("我是被加密的内容", keyPair.privateKey, "RSA/ECB/PKCS1Padding", {
    input: "string",
    output: "base64"
});
log(jiamiStr);

alert("RSA加密结果", jiamiStr);

log("使用公钥解密");
let jiemiStr = $crypt.jiemi(jiamiStr, keyPair.publicKey, "RSA/ECB/PKCS1Padding", {
    input: "base64",
    output: "string"
});
log(jiemiStr);


alert("RSA解密结果", jiemiStr);



//示例结束
```

## $crypt-加密算法-02.非对称加密-01.摘要加密

```javascript
//AIGame 官方示例

//获得所有哈希算法的名称
let digests = $crypt.digests();

//每个算法都用一遍
for (let i = 0; i < digests.size(); i ++) {

    //(1)准备需要加密的明文
    let myData = "今天天气真好呀";
    //(2)准备用到的算法名称
    let algorithm = digests.get(i);
    let result = $crypt.digest(myData, algorithm, {
        input: "string",
        output: "hex"
    });
    
    alert("算法:"+algorithm,"加密后的数据:\n"+result);
    
}




//示例结束
```

## $crypt-加密算法-02.非对称加密-02.MD5加密(工具版)

```javascript
//AIGame 官方示例

//生成16位的md5加密盐值
let salt = $crypt.md5Key(16);

//(1)准备加密的明文
let myData = "今天天气真好!";
//(2)开始加密
let result1 = $crypt.md516(salt,myData);//md5加密成16位结果
let result2 = $crypt.md532(salt,myData);//md5加密成32位结果

alert("MD5加密:16位",result1);
alert("MD5加密:32位",result2);



//示例结束
```

## $crypt-加密算法-02.非对称加密-03.MD5加密(常规版)

```javascript
//AIGame 官方示例

//(1)准备需要加密的明文
let myData = "今天天气真好呀";

//(2)开始加密
let result = $crypt.digest(myData, "MD5", {
    input: "string",
    output: "hex"
});

alert("MD5加密",result);


//示例结束
```

## $crypt-加密算法-03.数字签名-01.DSA验证

```javascript
//AIGame 官方示例


//生成密钥对
let keyPair = $crypt.generateKeyPair("DSA", 1024);


alert("DSA密钥信息", keyPair);

log("签名:"); 
//数字签名只能用私钥进行签名
let signData = $crypt.sign("我是被签名的内容", keyPair.privateKey, "DSA", {
    input: "string",
    output: "byte"
});

//由于输出的是数组,所以使用join方法转换成字符串
alert("DSA签名结果", signData.join());

log("验证:"); 
//数字签名只能用公钥进行验证
let verified = $crypt.verify("我是被签名的内容",signData, keyPair.publicKey, "DSA", {
    //(1)这个配置是签名时的配置(需要和上面sign参数保持一致)
    input: "string",
    output: "byte"
},{
    //(2)这个配置是验证的数据配置
    //输入签名的类型
    input: "byte",
});


alert("DSA验证结果", verified);





//示例结束
```
