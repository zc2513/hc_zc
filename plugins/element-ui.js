// 按需引入 Element
import Vue from 'vue'
import { Tabs, Button, Select, Rate, Switch, Menu, Submenu, MenuItem, Input, Pagination, Image, Row, Col, Popover, Carousel, CarouselItem, Message, Notification, dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 1000 }

// 设置语言
locale.use(lang)
// 引入组件
Vue.use(Button)
Vue.use(Rate)
Vue.use(Switch)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Image)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popover)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tabs)
Vue.component(Select.name, Select)

Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

/* 全局引入
import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(Element, { locale })
*/
