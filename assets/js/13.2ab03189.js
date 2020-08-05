(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{364:function(v,_,e){"use strict";e.r(_);var o=e(25),s=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#一、什么是跨域？"}},[v._v("一、什么是跨域？")])]),e("li",[e("a",{attrs:{href:"#二、你知道的解决跨域的方式有几种？"}},[v._v("二、你知道的解决跨域的方式有几种？")])]),e("li",[e("a",{attrs:{href:"#三、cookie和session分别是什么？有什么不同？"}},[v._v("三、cookie和session分别是什么？有什么不同？")])]),e("li",[e("a",{attrs:{href:"#四、cookie和session有什么不同？"}},[v._v("四、cookie和session有什么不同？")])]),e("li",[e("a",{attrs:{href:"#五、为什么需要cookie和session？"}},[v._v("五、为什么需要cookie和session？")])]),e("li",[e("a",{attrs:{href:"#六、如果浏览器禁止了cookie怎么办？"}},[v._v("六、如果浏览器禁止了cookie怎么办？")])]),e("li",[e("a",{attrs:{href:"#七、使用cookie有哪些注意点？"}},[v._v("七、使用cookie有哪些注意点？")])]),e("li",[e("a",{attrs:{href:"#八、前后端实现登录的方式有哪些？"}},[v._v("八、前后端实现登录的方式有哪些？")])]),e("li",[e("a",{attrs:{href:"#九、浏览器实现本地存储的方式有哪几种？"}},[v._v("九、浏览器实现本地存储的方式有哪几种？")])]),e("li",[e("a",{attrs:{href:"#十、了解service-worker嘛？"}},[v._v("十、了解Service Worker嘛？")])]),e("li",[e("a",{attrs:{href:"#十一、谈谈对浏览器缓存的理解？"}},[v._v("十一、谈谈对浏览器缓存的理解？")])]),e("li",[e("a",{attrs:{href:"#十二、从哪些地方可以读取到浏览器缓存？"}},[v._v("十二、从哪些地方可以读取到浏览器缓存？")])]),e("li",[e("a",{attrs:{href:"#十三、什么是浏览器缓存策略？"}},[v._v("十三、什么是浏览器缓存策略？")])]),e("li",[e("a",{attrs:{href:"#十四、浏览器缓存适用的应用场景有哪些？"}},[v._v("十四、浏览器缓存适用的应用场景有哪些？")])]),e("li",[e("a",{attrs:{href:"#十五、什么是xss？"}},[v._v("十五、什么是XSS？")])]),e("li",[e("a",{attrs:{href:"#十六、如何防范xss？"}},[v._v("十六、如何防范XSS？")])]),e("li",[e("a",{attrs:{href:"#十七、什么是csrf？"}},[v._v("十七、什么是CSRF？")])]),e("li",[e("a",{attrs:{href:"#十八、如何防范csrf？"}},[v._v("十八、如何防范CSRF？")])]),e("li",[e("a",{attrs:{href:"#十九、什么是中间人攻击？"}},[v._v("十九、什么是中间人攻击？")])]),e("li",[e("a",{attrs:{href:"#二十、如果防范中间人攻击？"}},[v._v("二十、如果防范中间人攻击？")])])])]),e("p"),v._v(" "),e("h2",{attrs:{id:"一、什么是跨域？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是跨域？"}},[v._v("#")]),v._v(" 一、什么是跨域？")]),v._v(" "),e("p",[v._v("也就浏览器的同源策略，出于安全的考虑，只要是协议、域名、端口有一个不同就算是跨域，ajax请求就会失败。浏览器有同源策略主要是为了防止CSRF攻击，防止利用户的登录状态发起恶意请求。")]),v._v(" "),e("h2",{attrs:{id:"二、你知道的解决跨域的方式有几种？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、你知道的解决跨域的方式有几种？"}},[v._v("#")]),v._v(" 二、你知道的解决跨域的方式有几种？")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("JSONP")]),v._v(" ： 利用 "),e("code",[v._v("script")]),v._v(" 标签不受同源策略限制，具体可以参考"),e("a",{attrs:{href:"https://juejin.im/post/6844903790760427528",target:"_blank",rel:"noopener noreferrer"}},[v._v("40行封装一个jsonp包"),e("OutboundLink")],1),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("CORS")]),v._v(" ：使用自定义的 "),e("code",[v._v("HTTP头部")]),v._v(" 让浏览器和服务器进行沟通，实现 "),e("code",[v._v("CORS")]),v._v(" 的关键是后端，服务端设置 "),e("code",[v._v("Access-Control-Allow-Origin")]),v._v(" 就可以开启，表示哪些域名可以访问资源。")]),v._v(" "),e("li",[e("code",[v._v("document.domain")]),v._v(" ：当二级域名相同时，例如 "),e("code",[v._v("a.test.html")]),v._v(" 和 "),e("code",[v._v("b.test.html")]),v._v(" ，只需要给两个页面都设置 "),e("code",[v._v("document.domain = 'test.html'")]),v._v(" ，就可以实现跨域。")]),v._v(" "),e("li",[e("code",[v._v("postMessage")]),v._v(" ：如 "),e("code",[v._v("a.html")]),v._v(" 页面通过 "),e("code",[v._v("iframe")]),v._v(" 嵌入了 "),e("code",[v._v("b.html")]),v._v(" 页面，其中一个可以通过 "),e("code",[v._v("postMessage")]),v._v(" 方法发送信息，另一页面通过监听 "),e("code",[v._v("message")]),v._v(" 事件判断来源并接受消息。")])]),v._v(" "),e("h2",{attrs:{id:"三、cookie和session分别是什么？有什么不同？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、cookie和session分别是什么？有什么不同？"}},[v._v("#")]),v._v(" 三、cookie和session分别是什么？有什么不同？")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("cookie")]),v._v(" 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器发起请求时被携带并发送到服务器，它通常是告知服务端两个请求是否来自同一浏览器，保持用户的登录状态。")]),v._v(" "),e("li",[e("code",[v._v("session")]),v._v(" 代表着服务器在和客户端一次会话的过程，存储着用户会话所需的属性及配置信息，当用户在不同页面之间跳转时，使整个用户会话一直存在。")])]),v._v(" "),e("h2",{attrs:{id:"四、cookie和session有什么不同？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、cookie和session有什么不同？"}},[v._v("#")]),v._v(" 四、cookie和session有什么不同？")]),v._v(" "),e("ul",[e("li",[v._v("作用范围不同："),e("code",[v._v("cookie")]),v._v(" 存储在客户端，"),e("code",[v._v("session")]),v._v(" 保存在服务器端。")]),v._v(" "),e("li",[v._v("存取的方式不同："),e("code",[v._v("cookie")]),v._v(" 只能保存 "),e("code",[v._v("ASCⅡ")]),v._v("，"),e("code",[v._v("session")]),v._v(" 可以存取任意数据类型。")]),v._v(" "),e("li",[v._v("有效期不同："),e("code",[v._v("cookie")]),v._v(" 可设置长时间保持，"),e("code",[v._v("session")]),v._v(" 一般失效时间较短，或客户端关闭就会失效。")]),v._v(" "),e("li",[v._v("存储大小不同：单个 "),e("code",[v._v("cookie")]),v._v(" 保存的数据不能超过 "),e("code",[v._v("4k")]),v._v(" ，"),e("code",[v._v("session")]),v._v(" 可存储数据远高于 "),e("code",[v._v("cookie")]),v._v("。")])]),v._v(" "),e("h2",{attrs:{id:"五、为什么需要cookie和session？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、为什么需要cookie和session？"}},[v._v("#")]),v._v(" 五、为什么需要cookie和session？")]),v._v(" "),e("p",[v._v("让服务器知道根它打交道的用户是谁以及用户的状态，浏览器发起第一次请求后服务端会返回一个 "),e("code",[v._v("sessionID")]),v._v(" 存储到 "),e("code",[v._v("cookie")]),v._v(" 中，当再次发起请求时服务端根据携带的 "),e("code",[v._v("cookie")]),v._v(" 里的 "),e("code",[v._v("sessionID")]),v._v(" 来查找对应的 "),e("code",[v._v("session")]),v._v(" 信息，没有找到就说明没登录或登录失效，找到说明已经登录，可以进行之后的操作。")]),v._v(" "),e("h2",{attrs:{id:"六、如果浏览器禁止了cookie怎么办？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、如果浏览器禁止了cookie怎么办？"}},[v._v("#")]),v._v(" 六、如果浏览器禁止了cookie怎么办？")]),v._v(" "),e("p",[v._v("每次请求都携带一个 "),e("code",[v._v("SessionID")]),v._v(" 的参数；或者使用 "),e("code",[v._v("token")]),v._v(" 令牌，登录后服务端生成一个 "),e("code",[v._v("Token")]),v._v(" 返回给客户端，以后客户端携带 "),e("code",[v._v("token")]),v._v(" 进行数据请求。")]),v._v(" "),e("h2",{attrs:{id:"七、使用cookie有哪些注意点？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、使用cookie有哪些注意点？"}},[v._v("#")]),v._v(" 七、使用cookie有哪些注意点？")]),v._v(" "),e("p",[v._v("不建议作为存储方式使用。首先会随请求携带，影响请求的性能，其次存储空间也太小，最后一些属性的使用也需要注意。"),e("br"),v._v(" "),e("code",[v._v("value")]),v._v("：如果作用于登录状态，需要加密。"),e("br"),v._v(" "),e("code",[v._v("http-only")]),v._v("：不能通过 "),e("code",[v._v("JavaScript")]),v._v(" 访问到 "),e("code",[v._v("cookie")]),v._v(" ，防止 "),e("code",[v._v("XSS")]),v._v(" 攻击。"),e("br"),v._v(" "),e("code",[v._v("same-site")]),v._v("：不能在跨域请求中携带 "),e("code",[v._v("cookie")]),v._v("，防止 "),e("code",[v._v("CSRF")]),v._v(" 攻击。")]),v._v(" "),e("h2",{attrs:{id:"八、前后端实现登录的方式有哪些？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、前后端实现登录的方式有哪些？"}},[v._v("#")]),v._v(" 八、前后端实现登录的方式有哪些？")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("cookie + session")]),v._v("：前端登录后，后端会种一个 "),e("code",[v._v("httpOnly")]),v._v(" 的 "),e("code",[v._v("cookie")]),v._v(" 在前端，里面就有这个用户对应的 "),e("code",[v._v("sessionId")]),v._v(" ，以后每一次前端发起请求会携带上这个 "),e("code",[v._v("cookie")]),v._v(" ，后端从里面解析到 "),e("code",[v._v("sessionId")]),v._v(" 后找到对应的 "),e("code",[v._v("session")]),v._v(" 信息，就知道是谁再操作了。缺点是后端需要空间存储 "),e("code",[v._v("session")]),v._v(" ，用户多了，服务器多了都不方便，这种方式基本属于淘汰边缘。")]),v._v(" "),e("li",[e("code",[v._v("jwt + token")]),v._v("：前端登录后，后端会返回一个包括用户信息加密的 "),e("code",[v._v("token")]),v._v(" 字符串(可能还有过期时间，手机端有设备唯一码等信息)，客户端自己保存了，将这个 "),e("code",[v._v("token")]),v._v(" 设置到 "),e("code",[v._v("header")]),v._v(" 里的 "),e("code",[v._v("Authorization")]),v._v(" ，之后每次请求都带上，服务器解码这个 "),e("code",[v._v("token")]),v._v(" 之后就知道是谁在访问了。优点是不占存储空间，后端解码即可。")])]),v._v(" "),e("h2",{attrs:{id:"九、浏览器实现本地存储的方式有哪几种？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、浏览器实现本地存储的方式有哪几种？"}},[v._v("#")]),v._v(" 九、浏览器实现本地存储的方式有哪几种？")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("cookie")]),v._v("：存储大小 "),e("code",[v._v("4kb")]),v._v(" ，会随请求发送到服务端，可设置过期时间。")]),v._v(" "),e("li",[e("code",[v._v("localStorage")]),v._v("：存储大小为 "),e("code",[v._v("5M")]),v._v(" ，不参与请求，除非被清理，否则一直存在。")]),v._v(" "),e("li",[e("code",[v._v("sessionStorage")]),v._v("：存储大小为 "),e("code",[v._v("5M")]),v._v(" ，不参与请求，页面关闭清除。")]),v._v(" "),e("li",[e("code",[v._v("indexDB")]),v._v("：存储大小没限制，不参与请求，除非被清理，否则一直存在，运行在浏览器上的非关系型数据库。")])]),v._v(" "),e("h2",{attrs:{id:"十、了解service-worker嘛？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十、了解service-worker嘛？"}},[v._v("#")]),v._v(" 十、了解Service Worker嘛？")]),v._v(" "),e("p",[v._v("是运行在浏览器背后的独立线程，可用于实现缓存功能，传输协议必须是 "),e("code",[v._v("HTTPS")]),v._v("。"),e("br"),v._v("\n使用 "),e("code",[v._v("Service-Worker")]),v._v(" 实现缓存功能一般分为三个步骤：首先注册，然后监听 "),e("code",[v._v("install")]),v._v(" 事件缓存需要的文件，最后拦截请求事件，如果缓存中已经有请求的数据就直接使用。")]),v._v(" "),e("h2",{attrs:{id:"十一、谈谈对浏览器缓存的理解？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十一、谈谈对浏览器缓存的理解？"}},[v._v("#")]),v._v(" 十一、谈谈对浏览器缓存的理解？")]),v._v(" "),e("p",[v._v("浏览器缓存是性能优化中最简单高效的一种，可以显著的减少网络传输所带来损耗，降低服务端压力。对于一个请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存就可以做到直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和缓存是一致的，就没必要传回来。")]),v._v(" "),e("h2",{attrs:{id:"十二、从哪些地方可以读取到浏览器缓存？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十二、从哪些地方可以读取到浏览器缓存？"}},[v._v("#")]),v._v(" 十二、从哪些地方可以读取到浏览器缓存？")]),v._v(" "),e("p",[v._v("浏览器缓存会从四个位置去读取，并且它们是有优先级的，会依次去查找，最后都没有找到才会去发起请求。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Service Worker")]),v._v(" ：和浏览器其他内建缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存且缓存是持续性的。")]),v._v(" "),e("li",[e("code",[v._v("Memory Cache")]),v._v(" ：从内存中读取，速度快，不过缓存的持续性并不高，关闭页面后内存中的缓存会被释放，什么东西能进内存确定不了。")]),v._v(" "),e("li",[e("code",[v._v("Disk Cache")]),v._v(" ：速度没有内存快，不过存储的容量和持续性会高很多，在浏览器缓存中硬盘的覆盖面是最大的。可以根据 "),e("code",[v._v("HTTP Header")]),v._v(" 中的字段判断哪些资源需要缓存，哪些可以不请求直接使用，哪些已过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。")]),v._v(" "),e("li",[e("code",[v._v("Push Cache")]),v._v(" ：是 "),e("code",[v._v("HTTP/2")]),v._v(" 中的内容，存储时间很短暂，只在会话中，一旦会话结束就被释放。")])]),v._v(" "),e("h2",{attrs:{id:"十三、什么是浏览器缓存策略？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十三、什么是浏览器缓存策略？"}},[v._v("#")]),v._v(" 十三、什么是浏览器缓存策略？")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("缓存策略分为两种："),e("strong",[v._v("强缓存和协商缓存")]),v._v("，都是通过设置 "),e("code",[v._v("HTTP-Header")]),v._v(" 来实现的，在强缓存没有命中之后才会尝试协商缓存。")])]),v._v(" "),e("ul",[e("li",[v._v("强缓存：通过设置 "),e("code",[v._v("HTTP-Header")]),v._v(" 的 "),e("code",[v._v("Expires")]),v._v(" 和 "),e("code",[v._v("Cache-Control")]),v._v(" 实现。强缓存表示在缓存期间不需要发起请求，状态码为 "),e("code",[v._v("200")]),v._v("。\n"),e("ul",[e("li",[e("code",[v._v("Expires")]),v._v(" ：是 "),e("code",[v._v("HTTP/1")]),v._v(" 的产物，值为缓存的过期时间，如果资源过期了就需要再次发起请求，如果修改本地时间，可能会造成缓存失效。")]),v._v(" "),e("li",[e("code",[v._v("Cache-control")]),v._v(" ：出现于 "),e("code",[v._v("HTTP/1.1")]),v._v(" ，如果和 "),e("code",[v._v("Expires")]),v._v(" 同时设置，优先级会更高。可以在请求头或者响应头中设置，可以组合多种指令使用。")])])])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/11/8/16e469b8664f04aa?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("协商缓存：通过设置 "),e("code",[v._v("HTTP-Header")]),v._v(" 的 "),e("code",[v._v("Last-Modified")]),v._v(" 和 "),e("code",[v._v("ETag")]),v._v(" 实现。如果缓存过期了，就需要发起请求验证资源是否有更新。如果发起请求验证资源没有改变，返回状态304，并且更新浏览器缓存的有效期。\n"),e("ul",[e("li",[e("p",[e("code",[v._v("Last-Modified")]),v._v(" 和 "),e("code",[v._v("If-Modified-Since")]),v._v(" ：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("Last-Modified")]),v._v(" 表示本地文件最后修改日期")]),v._v(" "),e("li",[e("code",[v._v("If-Modified-Since")]),v._v(" 会将 "),e("code",[v._v("Last-Modified")]),v._v(" 的值发送给服务器，询问该日期之后的资源是否有更新，有就将新资源发送来，没有返回 "),e("code",[v._v("304")]),v._v(" 状态码。")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("Last-Modified")]),v._v(" 的弊端：")]),v._v(" "),e("ol",[e("li",[v._v("如果本地硬盘打开了缓存文件，即使没修改也会被误认为已经修改了，从而导致服务器不能准确命中缓存，导致发送相同的内容；")]),v._v(" "),e("li",[v._v("只能以秒计时，如果在不可感知的时间内修改完成文件，服务端会认为资源还是命中了，不会返回正确的资源。")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("ETag")]),v._v(" 和 "),e("code",[v._v("If-None-Match")]),v._v("：为了解决 "),e("code",[v._v("Last-Modified")]),v._v(" 的弊端，"),e("code",[v._v("ETag")]),v._v(" 出现于 "),e("code",[v._v("HTTP/1.1")]),v._v(" ，他的优先级比 "),e("code",[v._v("Last-Modified")]),v._v(" 高。 "),e("code",[v._v("ETag")]),v._v(" 类似于文件的指纹， "),e("code",[v._v("If-None-Match")]),v._v(" 会将 "),e("code",[v._v("ETag")]),v._v(" 发送给服务器，询问该 "),e("code",[v._v("ETag")]),v._v(" 是否变动，有变动的话就将新的资源发送回来。")])])])])]),v._v(" "),e("h2",{attrs:{id:"十四、浏览器缓存适用的应用场景有哪些？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十四、浏览器缓存适用的应用场景有哪些？"}},[v._v("#")]),v._v(" 十四、浏览器缓存适用的应用场景有哪些？")]),v._v(" "),e("ul",[e("li",[v._v("频繁变动的资源：首先设置 "),e("code",[v._v("Cache-Control:no-cache")]),v._v(" ，使浏览器每次都请求服务器，然后配合 "),e("code",[v._v("ETag")]),v._v(" 或 "),e("code",[v._v("Last-Modified")]),v._v(" 来验证资源是否有效，虽然请求数量没少，不过能显著减少响应的数据大小。")]),v._v(" "),e("li",[v._v("不频繁变动的资源：一般使用打包工具会为生成的 "),e("code",[v._v("js、css")]),v._v(" 等文件最后加上哈希值，只有当代码修改后才会生成新的文件名。所以我们可以给这些文件设置 "),e("code",[v._v("Cache-Control:max-age=31536000")]),v._v(" 为一年的有效期，文件名变更了就下载新的文件，否则一直使用缓存。")])]),v._v(" "),e("h2",{attrs:{id:"十五、什么是xss？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十五、什么是xss？"}},[v._v("#")]),v._v(" 十五、什么是XSS？")]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),e("p",[v._v("就是攻击者通过页面注入可执行的代码，例如评论的留言里。XSS的类型分为两种："),e("strong",[v._v("持久型和非持久型")]),v._v("。")])]),v._v(" "),e("ul",[e("li",[v._v("持久性：将攻击的代码通过服务端写入到数据库中，例如通过评论提交的评论里面是一段脚本，如果没做好防范就会提交到数据库里，可能导致其他用户会执行这段代码，会到攻击。")]),v._v(" "),e("li",[v._v("非持久性：一般是通过修改 "),e("code",[v._v("URL")]),v._v(" 参数的方式加入攻击代码，从而诱导用户访问链接从而进行攻击。")])]),v._v(" "),e("h2",{attrs:{id:"十六、如何防范xss？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十六、如何防范xss？"}},[v._v("#")]),v._v(" 十六、如何防范XSS？")]),v._v(" "),e("ul",[e("li",[v._v("转义字符：将用户输入的内容，如引号、尖括号、斜杠进行转义；")]),v._v(" "),e("li",[v._v("采用白名单过滤标签和标签属性，例如过滤script标签；")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("CSP")]),v._v(" 告诉浏览器限制外部资源可以加载和执行，开启 "),e("code",[v._v("CSP")]),v._v(" 有两种方式：\n"),e("ol",[e("li",[v._v("设置 "),e("code",[v._v("HTTP-Header")]),v._v(" 中的 "),e("code",[v._v("Content-sesurity-Policy")]),v._v(" 。")]),v._v(" "),e("li",[v._v("设置 "),e("code",[v._v("<meta>")]),v._v(" 标签的方式 "),e("code",[v._v('<meta http-equiv="Content-Security-Policy">')]),v._v("。")])])])]),v._v(" "),e("h2",{attrs:{id:"十七、什么是csrf？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十七、什么是csrf？"}},[v._v("#")]),v._v(" 十七、什么是CSRF？")]),v._v(" "),e("p",[v._v("中文的意思是跨站请求伪造。原理是攻击者构造出一个后端请求地址，诱导用户去点击发起请求。如果是登陆状态，服务端就会以为是用户在操作，从而进行相应的逻辑。")]),v._v(" "),e("h2",{attrs:{id:"十八、如何防范csrf？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十八、如何防范csrf？"}},[v._v("#")]),v._v(" 十八、如何防范CSRF？")]),v._v(" "),e("p",[v._v("不让 "),e("code",[v._v("get")]),v._v(" 请求对数据进行修改；不让第三方网站访问到用户的 "),e("code",[v._v("cookie")]),v._v("，设置 "),e("code",[v._v("cookie")]),v._v(" 的 "),e("code",[v._v("SameSite")]),v._v(" 属性，不让 "),e("code",[v._v("cookie")]),v._v(" 随跨域请求携带；组织第三方网站请求接口，验证 "),e("code",[v._v("Referer")]),v._v(" ； "),e("code",[v._v("Token")]),v._v(" 验证，登陆后服务器下发一个随机 "),e("code",[v._v("token")]),v._v(" ，之后的请求带上。")]),v._v(" "),e("h2",{attrs:{id:"十九、什么是中间人攻击？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十九、什么是中间人攻击？"}},[v._v("#")]),v._v(" 十九、什么是中间人攻击？")]),v._v(" "),e("p",[v._v("就是在攻击者在服务端和客户端建立了连接，并让对方认为连接是安全的，攻击者不仅能获得双方的通信信息，还能修改通信信息。")]),v._v(" "),e("h2",{attrs:{id:"二十、如果防范中间人攻击？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二十、如果防范中间人攻击？"}},[v._v("#")]),v._v(" 二十、如果防范中间人攻击？")]),v._v(" "),e("p",[v._v("不要使用公共 "),e("code",[v._v("wifi")]),v._v(" ；只使用 "),e("code",[v._v("https")]),v._v(" 协议，并关闭 "),e("code",[v._v("http")]),v._v(" 的访问。")])])}),[],!1,null,null,null);_.default=s.exports}}]);