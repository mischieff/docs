
# VueConfig

## 一、按钮权限配置
```javascript
 /*
    * 全局按钮权限
    * @param {Array} searchList 搜索的所有字段
    * @param {Fun} callback 回调函数
    * */
    Vue.directive('has', {
        bind: function (el, binding, vnode) {
            let authCodes = vnode.context.$route.meta.authCodes;    // 获取后台传过来的按钮权限
            console.log(authCodes);
            let newAuthList = authCodes.map(item => {   // 把后台传过来的权限转为自己定义的权限
                switch (item) {
                    case "add": // 添加
                        return 'add'
                        break;
                    case "update": // 修改
                        return 'update'
                        break;
                    case "delete": // 删除
                        return 'delete'
                        break;
                    case "importer": // 导入
                        return 'importer'
                        break;
                    case "export": // 导出
                        return 'export'
                        break;
                    case "details": // 查看
                        return 'details'
                        break;
                }
            });
            if (!newAuthList.includes(binding.value)) { // 如果传进的权限和后台的权限不匹配，则隐藏
                vnode.context.$nextTick(() => {
                    el.remove();    // 删除元素，防止f12修改
                })
            }
        }
    })
```

# 