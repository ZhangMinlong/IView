export const ruleValidate = {
	/**
	 * 手机号校验
	 * @param {*} rule
	 * @param {*} value
	 * @param {*} callback
	 * @returns
	 */
	phone: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入手机号"));
		} else if (!/^[1][0-9][0-9]{9}$/.test(value)) {
			return callback(new Error("请正确填写手机号码。"))
		} else {
			callback();
		}
	},
	/**
	 * 银行卡号校验
	 * @param {*} rule
	 * @param {*} value
	 * @param {*} callback
	 * @returns
	 */
	bankNo: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入银行卡号"));
		} else {
			callback();
		}
	},

	/**
	 * 身份证校验
	 * @param {*} rule
	 * @param {*} value
	 * @param {*} callback
	 * @returns
	 */
	idNo: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入身份证号"));
		} else if (!/(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/.test(value)) {
			return callback(new Error("请正确填写身份证号。"))
		} else {
			callback();
		}
	},
	/**
	 * 座机校验
	 * @param {*} rule
	 * @param {*} value
	 * @param {*} callback
	 * @returns
	 */
	telphone: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入联系方式"));
		} else if (!/^((0\d{2,3}-\d{7,8})|(1[35847]\d{9}))$/.test(value)) {
			return callback(new Error("请正确填写您的电话号码。"))
		} else {
			callback();
		}
	},
	/**
	 * 密码校验
	 * @param {*} rule
	 * @param {*} value
	 * @param {*} callback
	 * @returns
	 */
	password: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入密码"));
		} else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(value)) {
			return callback(new Error("请正确输入密码（6-16位字母数字组合）"))
		} else {
			callback();
		}
	},
	/**
	 * 姓名校验
	 * @param {*} rule
	 * @param {*} value
	 * @param {*} callback
	 * @returns
	 */
	username: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入姓名"));
		} else if (!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(value)) {
			return callback(new Error("请正确输入姓名（2-20位）"))
		} else {
			callback();
		}
	},
	pinpainame: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入品牌名称"));
		} else if (!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(value)) {
			return callback(new Error("请输入品牌名称（2-20位）"))
		} else {
			callback();
		}
	},
	surname: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入用户名"));
		} else if (!/^[\u4E00-\u9FA5\uf900-\ufa2d·s -_——]{2,20}$/.test(value)) {
			return callback(new Error("请正确输入用户名（2-20位）"))
		} else {
			callback();
		}
	},
	loaginName: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入账号"));
		} else if (!/^[a-zA-Z0-9@.]|[._]{4,10}$/.test(value)) {
			return callback(new Error("请正确输入账号(4-16位邮箱/手机号/英文名)"))
		} else {
			callback();
		}
	},
	loaginNum: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入账号"));
		} else {
			callback();
		}
	},
	emails: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入邮箱"));
		} else if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)) {
			return callback(new Error("请输入正确邮箱"))
		} else {
			callback();
		}
	},
	sort: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入排序"));
		} else if (!/^[0-9]*$/.test(value)) {
			return callback(new Error("请输入排序(数字)"))
		} else {
			callback();
		}
	},
	price: function (rule, value, callback) {
		value = value + ''
		var pointAfter = value.split(".")
		if (!value) {
			return callback(new Error("请输入数值"));
		} else if (value.length > 10) {
			return callback(new Error("长度最长为10"))
		} else if (pointAfter.length == 2 && pointAfter[1].length > 2) {
			return callback(new Error("小数点后最多为两位"))
		} else {
			callback();
		}
	},
	englishName: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入英文名称"));
		} else if (!/^[a-zA-Z\/ ._]{2,20}$/.test(value)) {
			return callback(new Error("只能包含字母下划线等字符(2~20)"))
		} else {
			callback();
		}
	},

	priceNum: function (rule, value, callback) {
		var temp = value + ""
		var pointAfter = temp.split(".")
		if (!value) {
			return callback(new Error("请输入数值"));
		} else if (value.length > 10) {
			return callback(new Error("长度最长为10"))
		} else if (value < 0) {
			return callback(new Error("不能为负数"))
		} else if (pointAfter.length == 2 && pointAfter[1].length > 2) {
			return callback(new Error("小数点后最多为两位"))
		} else {
			callback();
		}
	},
	MoneyNum: function (rule, value, callback) {
		var temp = value + ""
		var pointAfter = temp.split(".")
		if (isNaN(value)) {
			return callback(new Error("请输入数字"))
		}
		if (!value) {
			return callback(new Error("请输入金额"));
		} else if (value.length > 10) {
			return callback(new Error("长度最长为10"))
		} else if (value < 0) {
			return callback(new Error("不能为负数"))
		} else if (pointAfter.length == 2 && pointAfter[1].length > 2) {
			return callback(new Error("小数点后最多为两位"))
		} else {
			callback();
		}
	},
    Money: function (rule, value, callback) {
		var temp = value + ""
		var pointAfter = temp.split(".")
		if (isNaN(value)) {
			return callback(new Error("请输入数字"))
		}
		if (!value) {
			return callback(new Error("请输入金额"));
		}  else if (value < 0) {
			return callback(new Error("不能为负数"))
		} else if (pointAfter.length == 2 && pointAfter[1].length > 4) {
			return callback(new Error("小数点后最多为四位"))
		} else if(pointAfter[0].length > 8){
            return callback(new Error("整数位最多8位"))
        }else {
			callback();
		}
	},
	days: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入天数"));
		} else if (value.length > 5) {
			return callback(new Error("长度最长为5"))
		} else if (value < 0) {
			return callback(new Error("不能为负数"))
		} else {
			callback();
		}
	},

	standardRate: function (rule, value, callback) {
		value = value + ''
		if (!value) {
			return callback(new Error("请输入费率"));
		} else if (value.length > 5) {
			return callback(new Error("长度最长为4"))
		} else if (value.split(".").length == 2 && value.split(".")[1].length > 1) {
			return callback(new Error("小数点后最多为一位"))
		} else {
			callback();
		}
	},
	//期数验证
	periods: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入期数"));
		} else if (!/^[0-9]*$/.test(value)) {
			return callback(new Error("请输入(数字)"))
		} else if (value.length > 2) {
			return callback(new Error("期数长度不能超过2位数"));
		} else {
			callback();
		}
	},
	userpassword: function (rule, value, callback) {
		if (!value) {
			return callback(new Error(rule.errorMessage));
		} else if (!/^[a-zA-Z0-9]{6,}$/.test(value)) {
			return callback(new Error("请正确输入密码（6位或6位以上以上字母或数字）"))
		} else {
			callback();
		}
	},
	labels: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入标签"));
		} else if (!/^[0-9a-zA-Z\u4e00-\u9fa5 ]{3,7}$/.test(value)) {
			return callback(new Error("请输入3~7位(中英文)"))
		} else {
			callback();
		}
	},
	carList: function (rule, value, callback) {
		if (value.length == 0) {
			return callback(new Error("车型列表不能为空"));
		} else {
			callback();
		}
	},

	validData: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入有效日期"));
		} else if (new Date(value).getTime() + 86400000 < new Date().getTime()) {
			return callback(new Error("有效日期不能小于当前时间"))
		} else {
			callback();
		}
	},

	validDataL: function (rule, value, callback) {
		if (!value) {
			return callback(new Error("请输入有效日期"));
		} else if (new Date(value).getTime() + 86400000 > new Date().getTime()) {
			return callback(new Error("有效日期不能大于当前时间"))
		} else {
			callback();
		}
	},
}