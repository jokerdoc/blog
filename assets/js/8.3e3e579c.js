(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{213:function(a,s,t){"use strict";t.r(s);var e=t(2),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mongodb","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装MongoDB")]),a._v(" "),t("h2",{attrs:{id:"centos环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos环境","aria-hidden":"true"}},[a._v("#")]),a._v(" CentOS环境")]),a._v(" "),t("p",[a._v("创建文件yum配置文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/yum.repos.d/mongodb.repo\n")])])]),t("p",[a._v("添加文件内容")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("mongodb-org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("MongoDB Repository\nbaseurl"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://mirrors.aliyun.com/mongodb/yum/redhat/7Server/mongodb-org/3.2/x86_64/\ngpgcheck"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("0\nenabled"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n")])])]),t("p",[a._v("更新yum源，非必须但是更新一下无害")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum -y update\n")])])]),t("p",[a._v("安装mongodb")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mongodb-org\n")])])]),t("p",[a._v("启动mongodb")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" mongod start\n")])])]),t("p",[a._v("设置开机启动")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chkconfig")]),a._v(" mongod on\n")])])]),t("h3",{attrs:{id:"end"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#end","aria-hidden":"true"}},[a._v("#")]),a._v(" --END--")])])},[],!1,null,null,null);s.default=n.exports}}]);