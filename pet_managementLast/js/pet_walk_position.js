var map;
var point_home = new BMap.Point(104.082156,30.5464);//初始位置
var pet = new BMap.Point(104.081151,30.545998); //宠物坐标
var sPetImg = "../../image/walkMap/pet_mark_1.png";//宠物1号
var sMasterImg = '../../image/walkMap/master.png';//主人

function baiduMap(){
	// 百度地图API功能
	//创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        search();
    }
    
    //创建地图函数：
    function createMap(){
	    map = new BMap.Map("allmap");  
        window.map = map;//将map变量存储在全局
        
		var circle = new BMap.Circle(point_home,50,{strokeColor:"blue", strokeWeight:1, strokeOpacity:0.3}); //创建圆
		//文字标签
		var labelgg = new BMap.Label("您的位置",{offset:new BMap.Size(66,34)});
		labelgg.setStyle({
			color : "red",
			fontSize : "12px",
			height : "20px",
			fontFamily:"微软雅黑"
		 });
		var Icon = new BMap.Icon(sMasterImg, new BMap.Size(90,110));
		var marker_home = new BMap.Marker(point_home,{icon:Icon});  // 创建标注
		map.addOverlay(marker_home);
		
		
		map.addOverlay(circle);
	 	marker_home.setLabel(labelgg); 
		
		var circle = new BMap.Circle(pet,50,{strokeColor:"blue", strokeWeight:1, strokeOpacity:0.3}); //创建圆
		map.addOverlay(circle);
		
		var myIcon = new BMap.Icon(sPetImg, new BMap.Size(90,110));
		var marker_pet = new BMap.Marker(pet,{icon:myIcon});  // 创建标注
		map.addOverlay(marker_pet);
		
		var label_pet = new BMap.Label("宠物位置",{offset:new BMap.Size(66,34)});
	 	marker_pet.setLabel(label_pet); //添加谷歌labe
	 	
	 	map.centerAndZoom(point_home,18);//设定地图的中心点和坐标并将地图显示在地图容器中
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    }
    
    //地图控件添加函数：
    function addMapControl(){
    	//向地图中添加比例尺控件
		var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
		map.addControl(ctrl_sca);
		
	    var navigationControl = new BMap.NavigationControl({
		    // 靠右下角位置
			anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
			// LARGE类型
			type: BMAP_NAVIGATION_CONTROL_LARGE,
			
		});
		map.addControl(navigationControl);//添加鱼骨
		// 添加定位控件
		var geolocationControl = new BMap.GeolocationControl();
		map.addControl(geolocationControl);
    }
    
    initMap();//创建和初始化地图
    
	function search(){
		function G(id) {
			return document.getElementById(id);
		}
		var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
			{"input" : "suggestId"
			,"location" : map
		});

		ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
		var str = "";
			var _value = e.fromitem.value;
			var value = "";
			if (e.fromitem.index > -1) {
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
			
			value = "";
			if (e.toitem.index > -1) {
				_value = e.toitem.value;
				value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			}    
			str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
			G("searchResultPanel").innerHTML = str;
		});
	
		var myValue;
		ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
		var _value = e.item.value;
			myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
			G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
			
			setPlace();
		});
	
		function setPlace(){
	//		map.clearOverlays();    //清除地图上所有覆盖物
			function myFun(){
				var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
				map.centerAndZoom(pp, 18);
				map.addOverlay(new BMap.Marker(pp));    //添加标注
			}
			var local = new BMap.LocalSearch(map, { //智能搜索
			  onSearchComplete: myFun
			});
			local.search(myValue);
		}
	}
	
}baiduMap();