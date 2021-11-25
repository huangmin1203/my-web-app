/**
 * request 请求方法
 * @param {*} config 请求配置
 * config.url 请求路径
 * config.method 请求方式
 * config.headers 请求头
 * config.data 请求参数
 * config.onSuccess 请求成功回调
 */
function request(config) {
    const baseUrl = `http://127.0.0.1:3550`   // 域名
    const options = {
        method: config.method,
        headers: config.headers || {}  // config.headers存在时取config.headers 不存在时置为控对象
    }
    if ( config.method === 'post' ) {
        // post请求的特殊处理
        options.headers["Content-type"] = "application/x-www-form-urlencoded; charset=UTF-8"
        options.body = config.data
    }

    fetch(`${baseUrl}${config.url}`, options)
    .then((response) => {
        // 把fetch返回的二进制流转换为json
        return response.json()
    }).then((json)=>{
        config.onSuccess(json)
    }).catch(err => {
        console.log('Request Failed', err)
        alert('接口请求失败，请检查')
    });
}
// 完成一个接口请求之后，拿到返回数据，我们需要拿到后端返回的数据进行处理（暴露给调用方），
// 就需要用到回调函数 


// 举例
function add(a, b) {
    return a + b
}

const num1 = 1
const num2 = 2
add(num1, num2)