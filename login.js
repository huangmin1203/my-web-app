// 页面类型 默认为登录 login-登录  register-注册
let pageType = 'login'



function handlelogin() {
    console.log('handlelogin')
    // const skipText = document.getElementsByClassName('reg-bar')[0]


    var opts = {
        method: "POST", //请求方法
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: 'userName=rose&password=123456'
        // body: {
        //     userName: 'rose',
        //     password: '123456'
        // }
    }

    // 请求登录接口 fetch是一个promise(异步调用)
    fetch('http://127.0.0.1:3550/user/login', opts)
        .then((response) => {
            console.log('response', response)
            // 把fetch返回的二进制流转换为json
            return response.json()
        }).then((json) => {
            // 这里才能拿到真正的json数据
            console.log('json', json)

            if (json.code === 0) {
                const target = `./class_manage.html`
                window.open(target)
            } else {
                alert(json.msg)
            }

        })
        // 异常：接口写错，服务器挂了，代码问题...
        .catch(err => {
            console.log('Request Failed', err)
            alert('接口请求失败，请检查')
        });


    return

    // const skipValue = skipText.value 

}

function handleskipres() {
    console.log('handleskipres')


    fetch('http://127.0.0.1:3500/user/login')
        .then((res) => {
            const resdata = res.json();
            console.log(0, resdata);
            return resdata;
        }).then((json) => {
            console.log('json', json)
            if (json.code === 0) {
                const target = './class_manage.html'
                window.open(target)
            } else {
                alert(json.msg)
            }
        })
        .catch(err => {
            console.log('请求出错请检查', err);
            alert('请求出错请检查')
        });

}



/**
 * 点击注册按钮
 */
function handleRegister() {
    console.log('handleRegister')
    const loginBox = document.querySelector('.login-box')
    const registerBox = document.querySelector('.register-box')
    const actionButton = document.querySelector('.action-button')
    pageType = 'login'
    loginBox.style.display = 'flex'
    registerBox.style.display = 'none'
    actionButton.innerHTML = '注 册'
}


/**
 * 点击右侧按钮
 */
function handleToggleType() {

    const loginBox = document.querySelector('.login-box')
    const registerBox = document.querySelector('.register-box')
    const actionButton = document.querySelector('.action-button')

    if (pageType === 'login') {
        pageType = 'register'
        loginBox.style.display = 'none'
        registerBox.style.display = 'flex'
        actionButton.innerHTML = '立 即 登 录'
    } else {
        pageType = 'login'
        loginBox.style.display = 'flex'
        registerBox.style.display = 'none'
        actionButton.innerHTML = '立 即 注 册'
    }


    return
    window.location.href = './regis.html'
}