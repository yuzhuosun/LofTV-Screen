/*
 * @Author: daidai
 * @Date: 2022-03-02 09:51:44
 * @LastEditors: daidai
 * @LastEditTime: 2022-03-02 09:51:45
 * @FilePath: \web-pc\src\pages\big-screen\utils\map\xzqCode.js
 */
   //获取中国行政区 code
//    AMap.plugin("AMap.DistrictSearch", function () {
//     var districtSearch = new AMap.DistrictSearch({
//       // 关键字对应的行政区级别，country表示国家
//       level: "country",
//       //  显示下级行政区级数，1表示返回下一级行政区
//       subdistrict: 1,
//     });
//     let xzqCode = {};
//     // 搜索所有省/直辖市信息
//     districtSearch.search("中国", function (status, result) {
//       // console.log(result);
//       result.districtList[0].districtList.forEach((item) => {
//         // console.log(item);
//         xzqCode[item.name] = {
//           adcode: item.adcode,
//           level: item.level,
//           name: item.name,
//         };
//       });
//     });
//     xzqCode["中国"] = {
//       adcode: "100000",
//       level: "country",
//       name: "中华人民共和国",
//     };
//     setTimeout(() => {
//     console.log(JSON.stringify(xzqCode),);

//     }, 1000);
//   });


export default {
    "沈阳市": {
        "adcode": "210100",
        "level": "city",
        "name": "沈阳市"
    },
    "和平区": {
        "adcode": "210102",
        "level": "district",
        "name": "和平区"
    },
    "沈河区": {
        "adcode": "210103",
        "level": "district",
        "name": "沈河区"
    },
    "大东区": {
        "adcode": "210104",
        "level": "district",
        "name": "大东区"
    },
    "皇姑区": {
        "adcode": "210105",
        "level": "district",
        "name": "皇姑区"
    },
    "铁西区": {
        "adcode": "210106",
        "level": "district",
        "name": "铁西区"
    },
    "苏家屯区": {
        "adcode": "210111",
        "level": "district",
        "name": "苏家屯区"
    },
    "浑南区": {
        "adcode": "210112",
        "level": "district",
        "name": "浑南区"
    },
    "沈北新区": {
        "adcode": "210113",
        "level": "district",
        "name": "沈北新区"
    },
    "于洪区": {
        "adcode": "210114",
        "level": "district",
        "name": "于洪区"
    },
    "辽中区": {
        "adcode": "210115",
        "level": "district",
        "name": "辽中区"
    },
    "康平县": {
        "adcode": "210123",
        "level": "county",
        "name": "康平县"
    },
    "法库县": {
        "adcode": "210124",
        "level": "county",
        "name": "法库县"
    },
    "新民市": {
        "adcode": "210181",
        "level": "county",
        "name": "新民市"
    }
}