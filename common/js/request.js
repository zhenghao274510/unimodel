
const http = {
  getRequest(data = {}, method = "get") {
    uni.showLoading({
      title: '加载中', //数据请求前loading，提高用户体验
    })
    return new Promise((resolve, reject) => {
      uni.request({
        url: encodeURI("https://m.scxxsx.com/api/customer/services?json=" + JSON.stringify(data)),
        method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          //   'X-Bmob-Application-Id': bmobConfig.applicationId,
          //   'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          resolve(res.data);
          uni.hideLoading();

          if (res.statusCode != 200) {
            uni.showToast({
              title: "网络出错，稍后再试",
              icon: "none"
            });
            return false;
          }

        },
        fail: function (error) {
          // fail
          uni.hideLoading();
          reject(error); //请求失败
        },
        complete: function () {
          uni.hideLoading();
          // complete
        }
      })
    })
  },
  postCommon(data = {}, method = "get") {
    return new Promise((resolve, reject) => {
      uni.request({
        url: encodeURI("https://m.scxxsx.com/api/common/services?json=" + JSON.stringify(data)),
        method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          //   'X-Bmob-Application-Id': bmobConfig.applicationId,
          //   'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          resolve(res.data);

          if (res.statusCode != 200) {
            uni.showToast({
              title: "网络出错，稍后再试",
              icon: "none"
            });
            return false;
          }

        },
        fail: function (error) {
          // fail
          reject(error); //请求失败
        },
        complete: function () {
          // complete
        }
      })
    })
  },
  postRequest(data = {}, method = "post") {
    uni.showLoading({
      title: '加载中',
    })
    return new Promise((resolve, reject) => {
      uni.request({
        url: encodeURI("https://m.scxxsx.com/api/customer/services?json=" + JSON.stringify(data)),
        method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          //   'X-Bmob-Application-Id': bmobConfig.applicationId,
          //   'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
          'Content-Type': 'application/json;charset=UTF-8',
        }, // 设置请求的 header
        success: function (res) {
          // success
          uni.hideLoading();
          resolve(res.data);
        },
        fail: function (error) {
          // fail
          uni.hideLoading();
          reject(error);
        },
        complete: function () {
          // complete
          uni.hideLoading();
        }
      })
    })
  },
  post(data = {}, method = "post") {
    uni.showLoading({
      title: '加载中',
    })
    return new Promise((resolve, reject) => {
      uni.request({
        url: encodeURI("https://m.scxxsx.com/api/customer/services?json=" + JSON.stringify(data)),
        method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          //   'X-Bmob-Application-Id': bmobConfig.applicationId,
          //   'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          uni.hideLoading();
          resolve(res);
        },
        fail: function (error) {
          // fail
          uni.hideLoading();
          reject(error);
        },
        complete: function () {
          // complete
          uni.hideLoading();
        }
      })
    })
  },
  postFile(data, method = 'post') {
     uni.showToast({
     	duration:1000,
		title:"上传中...",
		icon:'none'
     })
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: encodeURI('https://m.scxxsx.com/api/uploadFile'),
        filePath: data.path,
        name: 'file',
        method: method,
        headers: {
          'Content-Type': 'multipart/form-data;'
        },
        success: function (res) {
          // success
          resolve(res.data);
        },
        fail: function (error) {
          // fail
          reject(error);
        },
        complete: function () {
          // complete
        }

      })

    })
  }




}


export default http;

