class Home {
    getBannerData(id, successCallback, fail) {
        wx.request({
            url: 'http://localhost/zerg/public/api/v1/banner/'+ id,
            method: 'GET',
            success: function (res) {
                successCallback(res)
            }
        })
    }
}

export {Home}