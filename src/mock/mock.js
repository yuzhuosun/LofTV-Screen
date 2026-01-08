import Mock from 'mockjs'
//延时200-600毫秒请求到数据
Mock.setup({
	timeout: '200-600'
})

const Random = Mock.Random;
// 用户总览
function countUserNum() {
	const a = Mock.mock({
		success: true,
		data: {
			offlineNum: 7.14,
			lockNum: 5.36,
			xunda: 2.98,
			aodi: 34.52,
			totalNum: 100
		}
	})
	a.data.onlineNum = 50
	return a
}

// 接口，第一个参数url，第二个参数请求类型，第三个参数响应回调
Mock.mock(new RegExp('countUserNum'), 'get', countUserNum)

// /设备总览 

function countDeviceNum() {
	const a = Mock.mock({
		success: true,
		data: {
			alarmNum: 0,
			offlineNum: 2,
			totalNum: 168
		}
	})
	a.data.onlineNum = 28


	return a
}

Mock.mock(new RegExp('countDeviceNum'), 'get', countDeviceNum)

// /设备总览 

function sbtx() {
	const a = Mock.mock({
		success: true,
		data: {
			offlineNum: 62.5,
			lockNum: 27.98,
			xunda: 5.95,
			aodi: 3.57,
			totalNum: 100
		}
	})
	// a.data.onlineNum =totalNum-offlineNum-lockNum-xunda
	return a
}

Mock.mock(new RegExp('sbtx'), 'get', sbtx)



//中间地图

function centermap(options) {
	let params = parameteUrl(options.url)
	if (params.regionCode && params.regionCode != 'china') {
		const a = Mock.mock({
			success: true,
			data: {
				"dataList|30": [{
					name: "@city()",
					value: '@integer(1, 1000)'
				}],
				regionCode: params.regionCode, //-代表中国
			}
		})
		return a
	} else {
		const a = Mock.mock({
			success: true,
			data: {
				"dataList|8": [{
					name: "@province()",
					value: '@integer(1, 1000)'
				}],
				regionCode: 'china',
			}
		})
		return a
	}

}

Mock.mock(new RegExp('centermap'), 'get', centermap)

// 报警次数

function alarmNum() {
	const a = Mock.mock({
		success: true,
		data: {
			dateList: ['2025-06', '2025-07', '2025-08', '2025-09', '2025-10', "2025-11"],
			"numList|6": ['4','6', '3', '8', '2', '4' ]
		}
	})
	return a
}
Mock.mock(new RegExp('alarmNum'), 'get', alarmNum)

// 实时预警

function ssyj() {
	const a = Mock.mock({
		success: true,
		data: {
			"list|30": [{
				alertdetail: "@csentence(5,10)",
				"alertname|1": ["水浸告警", "各种报警"],
				alertvalue: "@float(60, 200)",
				createtime: "2022-04-19 08:38:33",
				deviceid: null,
				"gatewayno|+1": 10000,
				phase: "A1",
				sbInfo: "@csentence(10,18)",
				"terminalno|+1": 100,
				provinceName: "@province()",
				cityName: '@city()',
				countyName: "@county()",
			}],

		}
	})
	return a
}
Mock.mock(new RegExp('ssyj'), 'get', ssyj)


//安装计划 
function installationPlan() {
	const a = Mock.mock({
		success: true,
		data: {
			// "list|50": [{
			// 	// 修改为电梯相关的描述
			// 	alertdetail: "@pick(['电梯安装完成', '等待配件到货', '安装进行中', '电梯调试完成', '验收合格', '需要现场勘测', '等待施工许可', '安装计划制定中'])",
			// 	"alertname|1": ["安装进度", "施工状态"],
			// 	alertvalue: "@float(60, 200)",
			// 	createtime: "2022-04-19 08:38:33",
			// 	deviceid: null,
				
			// 	"gatewayno|+1": 10000,
			// 	phase: "A1",
			// 	sbInfo: "@pick(['迅达电梯', '奥的斯电梯', '三菱电梯', '日立电梯', '通力电梯']) @pick(['住宅用', '商用', '医用']) 电梯",
			// 	"terminalno|+1": 100,
			// 	// 修改为固定地址 - 沈阳市各区
			// 	provinceName: "辽宁省",
			// 	cityName: '沈阳市',
			// 	countyName: "@pick(['和平区', '沈河区', '大东区', '皇姑区', '铁西区', '浑南区', '于洪区', '沈北新区', '苏家屯区', '辽中区'])",
			// }],
			"list":[{
				// 修改为电梯相关的描述
				alertdetail: "调式完成",
				"alertname|1": ["安装进度", "施工状态"],
				alertvalue: "@float(60, 200)",
				createtime: "2025-08-19 08:38:33",
				deviceid: null,
				"gatewayno|+1": 10000,
				phase: "A1",
				sbInfo: "@pick(['迅达电梯', '奥的斯电梯', '三菱电梯', '日立电梯', '通力电梯']) @pick(['住宅用', '商用', '医用']) 电梯",
				"terminalno|+1": 100,
				// 修改为固定地址 - 沈阳市各区
				provinceName: "辽宁省",
				cityName: '沈阳市',
				countyName: "和平区",
			},
			{
				// 修改为电梯相关的描述
				alertdetail: "等待检修",
				"alertname|1": ["安装进度", "施工状态"],
				alertvalue: "@float(60, 200)",
				createtime: "2025-10-10 09:00:00",
				deviceid: null,
				"gatewayno|+1": 10000,
				phase: "A1",
				sbInfo: "@pick(['迅达电梯', '奥的斯电梯', '三菱电梯', '日立电梯', '通力电梯']) @pick(['住宅用', '商用', '医用']) 电梯",
				"terminalno|+1": 100,
				// 修改为固定地址 - 沈阳市各区
				provinceName: "辽宁省",
				cityName: '沈阳市',
				countyName: "沈河区",
			}],
			

		}
	})
	return a
}
Mock.mock(new RegExp('installationPlan'), 'get', installationPlan)




//报警排名 
function ranking() {
	const a = Mock.mock({
		success: true,
		data: {
			offlineNum: 13.33,
			lockNum: 6.67,
			xunda: 6.67,
			aodi: 20,
			totalNum: 100
		}
	})
	a.data.onlineNum = 53.33
	return a
}
Mock.mock(new RegExp('ranking'), 'get', ranking)

/**
 * @description: min ≤ r ≤ max  随机数
 * @param {*} Min
 * @param {*} Max
 * @return {*}
 */
function RandomNumBoth(Min, Max) {
	var Range = Max - Min;
	var Rand = Math.random();
	var num = Min + Math.round(Rand * Range); //四舍五入
	return num;
}
/**
 * @description: 获取路径参数
 * @param {*} url
 * @return {*}
 */
function parameteUrl(url) {
	var json = {}
	if (/\?/.test(url)) {
		var urlString = url.substring(url.indexOf("?") + 1);
		var urlArray = urlString.split("&");
		for (var i = 0; i < urlArray.length; i++) {
			var urlItem = urlArray[i];
			var item = urlItem.split("=");
			console.log(item);
			json[item[0]] = item[1];
		}
		return json;
	}
	return {};
}