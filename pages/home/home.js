// pages/home/home.js
import {Home} from 'home-model'

const home = new Home()
Page({
    data: {},
    onLoad() {
        this._loadData()
    },
    _loadData: function () {
        const id = 1
        home.getBannerData(id, res => {
            console.log('res.data', res.data)
        })
    }
})