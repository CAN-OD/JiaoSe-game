/**
 * Created by SF-1888 on 2016/9/16.
 */

// 角色基类
var JiaoSe = function (){
    this.x = 0; // 初始横坐标
    this.y = 0; //  初始纵坐标
    this.size = 32;// 角色的大小
    this.dir = "";// 方向0、w：上, 1、s：下, 2、a：左,3、d：右
    this.speed = 1; //角色的移动速度速度
    this.cssFile = ""; // css样式文件
    this.JingTai = ""; // 静态图片
    this.blood = 100;  // 人物血量
    this.blue = 100;  // 技能蓝量


    this.tempX = 0;
    this.tempY = 0;
};

var OneP = function(){
    this.y = 150;//两个Y坐标，分别对应1p和2p
    this.x = 0;
    this.size = 64;
    this.cssFile = "css/XiaNa/index.css"; // css样式文件
};

var TwoP = function(){
    this.y = 150;//两个Y坐标，分别对应1p和2p
    this.x = 140;
    this.size = 64;
    this.cssFile = "css/QuanYeCha/index.css"; // css样式文件
};

TwoP.prototype = new JiaoSe();

OneP.prototype = new JiaoSe();



