/**
 * Created by Administrator on 2017/4/27.
 */
    var app = angular.module("shop_cart",[]);
    app.controller("shop_money",function ($scope) {
        $scope.shopList = [];
        $scope.moneylist = 0;
        $scope.shopListAll = [
            {
                selected:true,
                info:[{img:"../img/shop_card/shop_card1.jpg",content:"安塞尔斯2017夏季新款儿童装男童女宝宝无袖套装"}],
                infoList:'小黄熊（山竹白）,90',
                price:[{now:79,old:199}],
                num:1,
                item_littleMoeny:79.00
            },
            {
                selected:true,
                info:[{img:"../img/shop_card/shop_card2.jpg",content:"机能鞋夏2017年新品夏季儿童沙滩鞋"}],
                infoList:'蓝色',
                price:[{now:89,old:199}],
                num:1,
                item_littleMoeny:79.00
            },
            {
                selected:true,
                info:[{img:"../img/shop_card/shop_card3.jpg",content:"木木屋单网透气男女童网布透气休闲鞋"}],
                infoList:'白色',
                price:[{now:89,old:199}],
                num:1,
                item_littleMoeny:79.00
            },
        ];

        $scope.shopList = $scope.shopListAll;
        console.log($scope.shopList.length);
        $scope.shop_num = $scope.shopList.length;
        /*单项删除*/
        $scope.delete = function (index) {
            console.log(index);
            $scope.shopList.splice(index,1);
            $scope.shop_num = $scope.shopList.length;
            $scope.money();
        }

        /*增加数量*/
        $scope.del_num = function (index) {
            if ($scope.shopList[index].num > 0){
                $scope.shopList[index].num = $scope.shopList[index].num -1;
                $scope.shopList[index].item_littleMoeny = $scope.shopList[index].num * $scope.shopList[index].price[0].now;
            }
            $scope.money();
        }
        /*减少数量*/
        $scope.add_num = function (index) {
            $scope.shopList[index].num = $scope.shopList[index].num +1;
            $scope.shopList[index].item_littleMoeny = $scope.shopList[index].num * $scope.shopList[index].price[0].now;
            $scope.money();
        }

        /*总价*/
        $scope.money = function () {
            $scope.test = [];
            $scope.moneylist = 0;
            $scope.shopList.forEach(function (list , i) {
                if($scope.shopList[i].selected){
                    $scope.moneylist  += $scope.shopList[i].item_littleMoeny;
                }
            })
        };
        $scope.money();


        /*全选*/
        $scope.selectAll = true;
        $scope.allChoose = function (m) {

            $scope.shopList.forEach(function (list ,i) {
                if(m === true){
                    $scope.shopList[i].selected = true
                }else {
                    $scope.shopList[i].selected = false
                }
            })
        };
        /*全部删除*/
        $scope.deletBtns = function () {
            for (var i = $scope.shopList.length - 1 ; i >=0;i-- ){
                console.log(i);
                if($scope.shopList[i].selected){
                    $scope.shopList.splice(i,1);
                    $scope.shop_num = $scope.shopList.length;
                    $scope.money();
                }
                // console.log($scope.shopList[i].selected)
            }
        };

    });